/**
 * Generates an array of page numbers and ellipsis strings for pagination.
 * 
 * - Desktop/Tablet: Shows up to 9 pages, an ellipsis, and the final page.
 *   e.g. 1, 2, 3, 4, 5, 6, 7, 8, 9, '...', 20
 * - Mobile: Shows up to 4 pages, an ellipsis, and the final page.
 *   e.g. 1, 2, 3, 4, '...', 20
 */
export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  maxVisible: number
): (number | string)[] {
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (totalPages <= maxVisible + 1) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (maxVisible === 9) {
    // Desktop / Tablet (max 9 items in sequence)
    if (currentPage <= 6) {
      const pages: (number | string)[] = [];
      for (let i = 1; i <= 9; i++) pages.push(i);
      pages.push("...", totalPages);
      return pages;
    } else if (currentPage >= totalPages - 5) {
      const pages: (number | string)[] = [1, "..."];
      for (let i = totalPages - 8; i <= totalPages; i++) pages.push(i);
      return pages;
    } else {
      const pages: (number | string)[] = [1, "..."];
      for (let i = currentPage - 3; i <= currentPage + 3; i++) pages.push(i);
      pages.push("...", totalPages);
      return pages;
    }
  }

  if (maxVisible === 4) {
    // Mobile (max 4 items in sequence)
    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      const start = totalPages - 3;
      if (start <= 2) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [1, "...", currentPage - 1, currentPage, "...", totalPages];
    }
  }

  return Array.from({ length: totalPages }, (_, i) => i + 1);
}

