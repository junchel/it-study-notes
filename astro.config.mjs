import { defineConfig } from "astro/config";

const site = process.env.SITE_URL || "https://jjchwordpress.cloud";
const base = process.env.SITE_BASE || "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true
    }
  }
});
