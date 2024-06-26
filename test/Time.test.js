import { Time } from "../src";
test('测试Time.getWeekDay', () => {
  expect(Time.getWeekDay('2024-06-20')).toBe('星期四');

  expect(Time.getWeekDay('2024-06-20', '周')).toBe('周四');

})

test('测试Time.format', () => {
  expect(Time.format('2024-06-20', 'YYYY-MM-DD')).toBe('2024-06-20');
  expect(Time.format('2024-06-20', 'yyyy-MM-DD')).toBe('2024-06-20');
})


