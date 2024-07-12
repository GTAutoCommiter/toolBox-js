const { calcDistance } = require("../src")

test('测试calcDistance', () => {
  const from = [113.934596, 22.291736];
  const to = [114.033422, 22.205958];
  expect(calcDistance(from, to)).toBe(13944.321599685663);
})

test('测试calcDistance', () => {
  const from = `113.934596, 22.291736`;
  const to = `114.033422, 22.205958`;
  expect(calcDistance(from, to)).toBe(13944.321599685663);
})

test('测试calcDistance', () => {
  const from = `113.934596-22.291736`;
  const to = `114.033422-22.205958`;
  expect(calcDistance(from, to, '-')).toBe(13944.321599685663);
})