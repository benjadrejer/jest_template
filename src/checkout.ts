/**
 * Discount rate:
 * 1 book - no discount
 * 2 diff books - 5%
 * 3 diff books - 10%
 * 4 diff books - 20%
 * 5 diff books - 25%
 * @param books
 * @returns
 */

export const checkout = (books: string[]) => {
  if (!books.length) {
    return 0;
  }

  const allBooksAreIdentical = books.every((book) => book === books[0]);
  const numberOfBooks = books.length;
  const totalCost = numberOfBooks * 8;
  if (allBooksAreIdentical) {
    return totalCost;
  } else {
    const someAreIdentical = books.some(
      (book) => book === books[0] || book === books[1]
    );
    if (someAreIdentical) {
      const totalCostForDifferentBooks = 2 * 8 * 0.95;
      if (numberOfBooks > 2) {
        return totalCostForDifferentBooks + 8;
      } else {
        return totalCostForDifferentBooks;
      }
    }
    return 8 * numberOfBooks;
  }
};
