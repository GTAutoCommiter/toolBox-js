import { upperFirst } from "../src";

test('测试upperFirst', () => {
  expect(upperFirst('test')).toBe('Test');
})