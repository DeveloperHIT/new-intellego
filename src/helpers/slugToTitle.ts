export function slugToTitle(slug: string) {
  const words = slug.split("-");
  const titleWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );
  return titleWords.join(" ");
}
