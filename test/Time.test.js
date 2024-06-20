import { Time } from "../src";
test('测试Time.getWeekDay', () => {
  expect(Time.getWeekDay('2024-06-20')).toBe('星期四');

  expect(Time.getWeekDay('2024-06-20','周')).toBe('周四');

})