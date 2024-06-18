import { isEmpty } from "../src";
test('测试isEmpty', () => {
  expect(isEmpty([])).toBe(true);
  expect(isEmpty({})).toBe(true);
  expect(isEmpty('')).toBe(true);
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);

  expect(isEmpty([1, 2])).toBe(false);
  expect(isEmpty({ a: 1, b: 2 })).toBe(false);
  expect(isEmpty('text')).toBe(false);
})