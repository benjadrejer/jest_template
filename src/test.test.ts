import { checkout } from "./checkout";

describe("Potter Kata", () => {
  it("Costs 0 if no books are provided", () => {
    const result = checkout([]);
    expect(result).toBe(0);
  });

  it("Costs 8 if 1 book is provided", () => {
    const result = checkout(["Potter 1"]);
    expect(result).toBe(8);
  });

  it("Costs 16 if the 2 provided books are the same", () => {
    const result = checkout(["Potter 1", "Potter 1"]);
    expect(result).toBe(16);
  });

  it("Gives 5% discount if the 2 provided books are different", () => {
    const books = ["Potter 1", "Potter 2"];
    const result = checkout(books);
    const expectedResult = 16 - 0.8;
    expect(result).toBe(expectedResult);
  });

  it("Gives 5% discount on 2 different books and full price on a duplicate", () => {
    const books = ["Potter 1", "Potter 2", "Potter 1"];
    const result = checkout(books);
    const expectedResult = 16 - 0.8 + 8;
    expect(result).toBe(expectedResult);
  });

  it("Gives 5% discount on 2 pairs of different books", () => {
    const books = ["Potter 1", "Potter 2", "Potter 1", "Potter 2"];
    const result = checkout(books);
    const expectedResult = 4 * 8 * 0.95;
    expect(result).toBe(expectedResult);
  });

  it("Gives 5% discount on 2 pairs of different books and full price on a duplicate", () => {
    const books = ["Potter 1", "Potter 3", "Potter 1", "Potter 2", "Potter 2"];
    const result = checkout(books);
    const expectedResult = 4 * 8 * 0.95 + 8;
    expect(result).toBe(expectedResult);
  });
});
