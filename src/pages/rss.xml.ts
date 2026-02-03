import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const notes = await getCollection("notes", ({ data }) => !data.draft);

  return rss({
    title: "IT Study Notes",
    description: "A living knowledge base of IT study notes.",
    site: context.site ?? "https://example.com",
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.pubDate,
      link: `/notes/${note.slug}/`
    }))
  });
}
