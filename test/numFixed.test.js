import { numFixed } from "../src"
test('测试numFixed', () => {
  expect(numFixed(1.335, 2)).toBe(1.34)
})