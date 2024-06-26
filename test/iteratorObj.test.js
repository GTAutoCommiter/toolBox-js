import { iteratorObj } from "../src";
test('测试iteratorObj-1', () => {
  const obj = { a: 1, b: '2', c: 3 };
  iteratorObj(obj);
  const [...test] = obj;

  expect(test).toEqual([1, '2', 3]);
})
test('测试iteratorObj-2', () => {
  const obj = { a: 1, b: '2', c: 3 };
  const [...test] = iteratorObj(obj);

  expect(test).toEqual([1, '2', 3]);
})
