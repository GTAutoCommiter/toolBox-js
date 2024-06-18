import { filterObj } from "../src";
test('测试filerOj', () => {
  const obj = { a: 1, b: '2', c: 3 };

  expect(filterObj.pick(obj, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });

  expect(filterObj.omit(obj, ['b'])).toEqual({ 'a': 1, 'c': 3 });
})