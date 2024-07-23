import { decimalToBaseBit } from "../src";

test('10进制转2进制', () => {
  expect(decimalToBaseBit('1')).toBe('1');

  expect(decimalToBaseBit('2', 2)).toBe('10');

  expect(decimalToBaseBit('6', 2)).toBe('110');
})

test('10进制转62进制', () => {
  expect(decimalToBaseBit('72', 62)).toBe('1a');

  expect(decimalToBaseBit('74', 62)).toBe('1c');
})