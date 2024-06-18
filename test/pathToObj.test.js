import pathToObj from "../src/pathToObj";

test('pathToObj--测试用例', () => {
  // 单参数
  expect(pathToObj('test1=test1')).toEqual({
    test1: 'test1',
  })

  // 多类型参数
  expect(pathToObj('string=string&number=1&boolean=true')).toEqual({
    string: 'string',
    number: '1',
    boolean: 'true',
  })
})