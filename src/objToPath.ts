/**
 * 对象转化成url参数.
 * 注意: 对象中的数组将会转换成 '&array=a,b,c' 的字符串.
 * @param {object} routeParamObj 需要转换成url参数的对象, e.g. `{a:1,b:2}`
 * @returns {string} URL参数字符串, e.g. `a=1&b=2`
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