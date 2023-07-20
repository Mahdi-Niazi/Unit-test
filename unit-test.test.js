const functions = require("./unit-practice");

// The character count should be the same of the provided string
test("hackerteam length should be 10 characters", () => {
  expect(functions.strLength("hackerteam")).toBe(10);
});

// Return the reverse of the string.
test("mahdi should be idham", () => {
  expect(functions.strReverse).toBeDefined();
  expect(functions.strReverse("Mahdi")).toEqual("idham");
});
