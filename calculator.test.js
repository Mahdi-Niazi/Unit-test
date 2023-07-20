const calculator = require("./calculator");

describe("calulators functions", () => {
  test("Add should sum two given numbers 1 + 2 = 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("Subtract should mines two given numbers 20 - 15 = 5", () => {
    expect(calculator.subtract(20, 15)).toBe(5);
  });
  test("Divide should divide two given numbers 100 / 50 = 2", () => {
    expect(calculator.divide(100, 50)).toBe(2);
  });
});
