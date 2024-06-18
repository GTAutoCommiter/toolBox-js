
// jest.useFakeTimers();
// jest.spyOn(global, 'setTimeout');

test('debounce--测试用例', () => {
  const sum = (a, b) => (a + b);
  expect(sum(1,2)).toBe(3);

  // debounce(sum, 1000);

  // expect(setTimeout).toHaveBeenCalledTimes(1);
  // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
