import { strIsReg } from "../src";

test('测试strIsReg', () => {
  expect(strIsReg('/\d{5,10}/')).toBe(true);
  expect(strIsReg('\d{5,10}')).toBe(false);
})