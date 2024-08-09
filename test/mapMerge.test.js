import { mapMerge } from "../src";

test('测试mapMerge-1', () => {
  const testMap = new Map();

  expect(mapMerge(testMap, 'test', 'test1')).toEqual('test1');
  const obj = Object.fromEntries(testMap);
  expect(obj).toEqual({ test: 'test1' });
})

test('测试mapMerge-2', () => {
  const testMap = new Map();

  expect(mapMerge(testMap, 'test', 0, () => 0 + 1)).toEqual(0);
  const obj = Object.fromEntries(testMap);
  expect(obj).toEqual({ test: 0 });
})

test('测试mapMerge-3', () => {
  const testMap = new Map();
  testMap.set('test', 0);

  expect(mapMerge(testMap, 'test', 1, (oldValue, newValue) => oldValue + newValue)).toEqual(1);
  const obj = Object.fromEntries(testMap);
  expect(obj).toEqual({ test: 1 });
})
