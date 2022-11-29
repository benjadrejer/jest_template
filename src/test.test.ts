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
});
