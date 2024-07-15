import { rgbToHex } from "../src"
test('rgbToHex--测试用例', () => {
  // 单参数
  expect(rgbToHex(0, 51, 255)).toBe('#0033ff')
})