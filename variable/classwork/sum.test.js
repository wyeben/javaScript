const sum = require("./sum");

test("that we can add 2 numbers", () => {
  expect(sum(2, 3)).toBe(5);
});
