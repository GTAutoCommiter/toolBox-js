/**
 * @func 对象转化成url参数
 * @desc 将{key:value},转化成'&key=value';
 * @param {object} routeParamObj 需要转换成url参数的对象
 * PS：routeParamObj 中的数组将会转换成'&array=a,b,c'的字符串;
 * @return {string}
 */
const objToPath = (routeParamObj) => {
  const routeParams = Object.entries(routeParamObj).reduce((res, [key, value]) => {
    let paramValue = value;
    if (Array.isArray(value)) {
      paramValue = value.join(',');
    }
    res.push(`${key}=${paramValue}`);
    return res;
  }, []).join('&');
  return routeParams;
}
export default objToPath;