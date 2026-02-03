import { getCollection } from "astro:content";
import { slugify } from "../utils/slugify";

export async function GET() {
  const site = import.meta.env.SITE || "https://example.com";
  const notes = await getCollection("notes", ({ data }) => !data.draft);
  const tagSet = new Set();

  notes.forEach((note) => {
    note.data.tags.forEach((tag) => tagSet.add(tag));
  });

  const routes = ["/", "/notes/", "/tags/", "/paths/", "/about/"];
  const urls = [
    ...routes,
    ...notes.map((note) => `/notes/${note.slug}/`),
    ...Array.from(tagSet).map((tag) => `/tags/${slugify(tag)}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((url) => `  <url><loc>${new URL(url, site)}</loc></url>`).join("\n") +
    `\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
