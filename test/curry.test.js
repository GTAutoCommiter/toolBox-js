import curry from "../src/curry";

test('柯里化加法', () => {
  function add(x, y, z, m) {
    return x + y + z + m
  }

  expect(curry(add, 1)(2)(3)(4)).toBe(10);

  expect(curry(add, 2)(2)(3)(3)).toBe(10);
})
