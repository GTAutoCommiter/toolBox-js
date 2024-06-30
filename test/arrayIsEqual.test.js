import arrayIsEqual from "../src/arrayIsEqual";

test('判断数组是否相等', () => {
  expect(arrayIsEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(true);

  expect(arrayIsEqual([1, 2, 3, 4, '5'], [1, 2, 3, 4, '5'])).toBe(true);

  expect(arrayIsEqual([1, 2, 3, 4, '5'], [1, 2, 3, 4, 5])).toBe(false);

  expect(arrayIsEqual([null, undefined, NaN], [null, undefined, NaN])).toBe(true);

  expect(arrayIsEqual([1, 2, '5', 3, 4], [1, 2, 3, 4, '5'])).toBe(true);

  expect(arrayIsEqual([1, 2, '5', NaN, 3, 4], [1, 2, 3, 4, '5', NaN])).toBe(true);
})
