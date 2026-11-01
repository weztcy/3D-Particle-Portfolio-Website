/**
 * Generates an array of page numbers with a sliding window of at most `maxVisible` pages (default 10).
 * If totalPages <= maxVisible, displays all pages [1..totalPages].
 * If totalPages > maxVisible, slides dynamically so currentPage is centered and always visible.
 */
export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  maxVisible: number = 10
): (number | string)[] {
  if (totalPages <= 0) return [];
  const safePage = Math.max(1, Math.min(currentPage, totalPages));

  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Calculate sliding window centered around safePage
  const half = Math.floor((maxVisible - 1) / 2);
  let start = safePage - half;
  let end = start + maxVisible - 1;

  if (start < 1) {
    start = 1;
    end = maxVisible;
  } else if (end > totalPages) {
    end = totalPages;
    start = totalPages - maxVisible + 1;
  }

  const range: (number | string)[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
}

