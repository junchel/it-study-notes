export function slugify(input) {
  return encodeURIComponent(
    input
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
  );
}
