import getBaseURL from "../src/getBaseURL";


test('getBaseURL--测试用例', () => {
  expect(getBaseURL('http://url.com/page?name=Adam&surname=Smith')).toBe('http://url.com/page');
})