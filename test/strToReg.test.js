import { strToReg } from "../src";

test('测试strToReg', () => {

  const test=strToReg('/\d{5,10}/')
  expect(test).toStrictEqual(/d{5,10}/);
})