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
    let bookshelf: Record<string, number> = {};
    for (const book of books) {
      if (!bookshelf[book]) {
        bookshelf[book] = 1;
      } else {
        bookshelf[book]++;
      }
    }
    const numberOfUniqueBooks = Object.values(bookshelf);
    const maxNumberOfUniqueBooks = Math.max(...numberOfUniqueBooks);

    let pairs = 0;
    for (let index = 0; index < maxNumberOfUniqueBooks; index++) {
      const uniqueBooks = Object.keys(bookshelf);

      if (bookshelf[uniqueBooks[0]] > 0 && bookshelf[uniqueBooks[1]] > 0) {
        pairs++;
        bookshelf[uniqueBooks[0]]--;
        bookshelf[uniqueBooks[1]]--;
      }
    }

    const totalSingles = Object.values(bookshelf).reduce(
      (total, current) => total + current,
      0
    );

    return pairs * 16 * 0.95 + totalSingles * 8;
  }
};
