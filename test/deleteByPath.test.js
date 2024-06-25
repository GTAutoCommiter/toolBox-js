import { deleteByPath } from "../src";

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
test('测试deleteByPath-1', () => {
  const test = JSON.parse(JSON.stringify(obj));
  delete test.a
  expect(deleteByPath(obj, ['a'])).toEqual(test);
})

test('测试deleteByPath-2', () => {
  const test = JSON.parse(JSON.stringify(obj));
  delete test.a
  expect(deleteByPath(obj, 'a')).toEqual(test);
})

test('测试deleteByPath-3', () => {
  const test = JSON.parse(JSON.stringify(obj));
  delete test.d.e
  expect(deleteByPath(obj, ['d', 'e'])).toEqual(test);
});

test('测试deleteByPath-4', () => {
  const test = JSON.parse(JSON.stringify(obj));
  delete test.d.e
  expect(deleteByPath(obj, 'd-e', '-')).toEqual(test);
});

test('测试deleteByPath-5', () => {
  const test = JSON.parse(JSON.stringify(obj));
  delete test.d.g.h
  expect(deleteByPath(obj, ['d', 'g','h'])).toEqual(test);
});

test('测试deleteByPath-4', () => {
  const test = JSON.parse(JSON.stringify(obj));
  delete test.d.g.h
  expect(deleteByPath(obj, 'd.g.h')).toEqual(test);
});