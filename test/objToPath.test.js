import objToPath from "../src/objToPath";

test('objToPath--测试用例', () => {
  // 单参数
  expect(objToPath({
    test1: 'test1',
  })).toBe('test1=test1')

  // 多类型参数
  expect(objToPath({
    string: 'string',
    number: 1,
    boolean: true,
  })).toBe('string=string&number=1&boolean=true')
})