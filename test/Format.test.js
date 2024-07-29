import { Format } from "../src";

test('测试Form.formatMoney', () => {
  expect(Format.formatMoney(12341234.246)).toBe('12,341,234.25');

  expect(Format.formatMoney(12341234.246, '$')).toBe('$12,341,234.25');

  expect(Format.formatMoney(12341234.246, '$', 1)).toBe('$12,341,234.2');

})

test('测试温度转换', () => {
  expect(Format.celsiusToFahrenheit(40)).toBe(104)
  expect(Format.fahrenheitToCelsius(104)).toBe(40)
})


test('测试经纬度检查', () => {
  const [lat, long] = '22.313000,113.940720'.split(',');
  expect(Format.LatAndLong(lat, long)).toEqual({ long, lat })
  expect(Format.LatAndLong(long, lat)).toEqual({ long, lat })
})