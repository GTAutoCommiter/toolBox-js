import { groupByValue } from "../src";
test('测试groupByValue', () => {

  expect(groupByValue({ a: 1, b: 2, c: 1 })).toEqual({ 1: ['a', 'c'], 2: ['b'] });

  expect(groupByValue({ a: 1, b: 2, c: 1, d: 2 })).toEqual({ 1: ['a', 'c'], 2: ['b', 'd'] });
})