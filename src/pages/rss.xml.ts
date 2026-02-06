import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { DEFAULT_LANG, t } from "../utils/i18n";

export async function GET(context) {
  const notes = await getCollection("notes", ({ data }) => !data.draft);

  return rss({
    title: t(DEFAULT_LANG, "rss.title"),
    description: t(DEFAULT_LANG, "rss.description"),
    site: context.site ?? "https://example.com",
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.pubDate,
      link: `/notes/${note.slug}/`
    }))
  });
}
