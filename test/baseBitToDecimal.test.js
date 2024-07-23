import { baseBitToDecimal } from "../src";

test('二进制转10进制', () => {
  expect(baseBitToDecimal('1')).toBe(1);

  expect(baseBitToDecimal('10', 2)).toBe(2);

  expect(baseBitToDecimal('110', 2)).toBe(6);
})

test('62进制转10进制', () => {
  expect(baseBitToDecimal('1a', 62)).toBe(72);

  expect(baseBitToDecimal('1c', 62)).toBe(74);
})