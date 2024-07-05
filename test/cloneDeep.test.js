import { cloneDeep } from "../src";

const obj = {
  a: 1,
  b: '2',
  c: 3,
  d: {
    e: 1,
    f: 2,
    g: {
      h: 1,
    }
  }
};
test('测试cloneDeep.byJSON', () => {

  const test = cloneDeep.byJSON(obj);
  Object.assign(test, {
    aa: 2,
  })
  expect(test).not.toEqual(obj);
})

test('测试cloneDeep.byRecursive', () => {
  const test = cloneDeep.byRecursive(obj);
  Object.assign(test, {
    aa: 2,
  })
  expect(test).not.toEqual(obj);
})