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
  const numberOfBooks = books.length;
  const totalCost = numberOfBooks * 8;
  return totalCost;
};
