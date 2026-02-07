import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const repoRoot = process.cwd();
const configPath = path.join(repoRoot, ".github", "rbac.config.json");

if (!fs.existsSync(configPath)) {
  console.error("[rbac] missing config file:", configPath);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const actor = (process.env.GITHUB_ACTOR || "").trim().toLowerCase();
const eventPath = process.env.GITHUB_EVENT_PATH;

if (!eventPath || !fs.existsSync(eventPath)) {
  console.error("[rbac] GITHUB_EVENT_PATH is missing");
  process.exit(1);
}

const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
const pullRequest = event.pull_request;
if (!pullRequest) {
  console.log("[rbac] not a pull_request event. skip.");
  process.exit(0);
}

const baseSha = pullRequest.base?.sha;
const headSha = pullRequest.head?.sha;
if (!baseSha || !headSha) {
  console.error("[rbac] unable to resolve base/head sha");
  process.exit(1);
}

const normalizeUser = (value) => String(value || "").trim().replace(/^@/, "").toLowerCase();
const normalizePath = (value) => String(value || "").trim().replaceAll("\\", "/").replace(/^\.?\//, "");

const toArray = (value) => (Array.isArray(value) ? value : []);

const escapeRegex = (value) => value.replace(/[|\\{}()[\]^$+?.]/g, "\\$&");
const globToRegex = (glob) => {
  const normalized = normalizePath(glob);
  let pattern = "^";
  for (let i = 0; i < normalized.length; i += 1) {
    const char = normalized[i];
    const next = normalized[i + 1];
    if (char === "*" && next === "*") {
      pattern += ".*";
      i += 1;
      continue;
    }
    if (char === "*") {
      pattern += "[^/]*";
      continue;
    }
    if (char === "?") {
      pattern += ".";
      continue;
    }
    pattern += escapeRegex(char);
  }
  pattern += "$";
  return new RegExp(pattern);
};

const readFileAtRef = (ref, filePath) => {
  try {
    return execSync(`git show ${ref}:${filePath}`, { encoding: "utf8" });
  } catch {
    return null;
  }
};

const readFileForBoard = (filePath) => {
  const localPath = path.join(repoRoot, filePath);
  if (fs.existsSync(localPath)) {
    return fs.readFileSync(localPath, "utf8");
  }
  return readFileAtRef(baseSha, filePath);
};

const resolveBoard = (filePath) => {
  const fallbackBoard = config.default_board || "general";
  const text = readFileForBoard(filePath);
  if (!text) return fallbackBoard;

  const trimmed = text.trimStart();
  if (!trimmed.startsWith("---")) return fallbackBoard;

  const match = trimmed.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return fallbackBoard;

  const frontmatter = match[1];
  const boardMatch = frontmatter.match(/^board:\s*["']?([a-zA-Z0-9_-]+)["']?\s*$/m);
  return boardMatch ? boardMatch[1].toLowerCase() : fallbackBoard;
};

const getChangedFiles = () => {
  const command = `git diff --name-only --diff-filter=ACMRD ${baseSha} ${headSha}`;
  const output = execSync(command, { encoding: "utf8" });
  return output
    .split("\n")
    .map((line) => normalizePath(line))
    .filter(Boolean);
};

const admins = new Set(toArray(config.admins).map(normalizeUser).filter(Boolean));
const boardEditors = new Map(
  Object.entries(config.board_editors || {}).map(([board, users]) => [
    String(board || "").toLowerCase(),
    new Set(toArray(users).map(normalizeUser).filter(Boolean))
  ])
);
const noteMatchers = toArray(config.note_paths).map(globToRegex);
const adminMatchers = toArray(config.admin_only_paths).map(globToRegex);

const isMatch = (matchers, filePath) => matchers.some((matcher) => matcher.test(filePath));
const isAdmin = admins.has(actor);

const changedFiles = getChangedFiles();
if (!changedFiles.length) {
  console.log("[rbac] changed files not found. skip.");
  process.exit(0);
}

const violations = [];

changedFiles.forEach((filePath) => {
  const isNoteFile = isMatch(noteMatchers, filePath);
  const isAdminPath = isMatch(adminMatchers, filePath);

  if (isAdminPath && !isAdmin) {
    violations.push({
      filePath,
      reason: "admin-only path"
    });
    return;
  }

  if (!isNoteFile) {
    if (!isAdmin) {
      violations.push({
        filePath,
        reason: "non-note path requires admin"
      });
    }
    return;
  }

  if (isAdmin) return;

  const board = resolveBoard(filePath);
  const allowedEditors =
    boardEditors.get(board) || boardEditors.get(String(config.default_board || "general").toLowerCase());
  if (!allowedEditors || !allowedEditors.has(actor)) {
    violations.push({
      filePath,
      reason: `board "${board}" editor required`
    });
  }
});

if (violations.length > 0) {
  console.error("[rbac] permission denied");
  console.error(`[rbac] actor: ${actor || "(unknown)"}`);
  violations.forEach((item) => {
    console.error(`- ${item.filePath}: ${item.reason}`);
  });
  process.exit(1);
}

console.log("[rbac] permission check passed");
console.log(`[rbac] actor: ${actor}`);
console.log(`[rbac] files checked: ${changedFiles.length}`);
