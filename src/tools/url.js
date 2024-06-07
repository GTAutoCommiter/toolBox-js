/**
 * @func 路径参数解析成对象
 * @desc 示例:
 * 转换前：`cardId=CPB2024xxx116-488&username=xxx`
 * 转换后：{
 *          cardId:'CPB2024xxx116-488',
 *          username:'xxx',
 *        }
 * @param {string} pathParam 路径未解析参数
 * @return {object}
 */
function pathToObj(pathParam) {
  let res = {};
  const paramArr = pathParam?.split('&');
  if (paramArr.length <= 0) return res;
  res = paramArr?.reduce((resObj, paramStr) => {
    const [key, value] = paramStr?.split('=');
    resObj[key] = value;
    return resObj;
  }, res)
  return res;
}

/**
 * @func 对象转化成url参数
 * @desc 将{key:value},转化成'&key=value';
 * @param {object} routeParamObj 需要转换成url参数的对象
 * PS：routeParamObj 中的数组将会转换成'&array=a,b,c'的字符串;
 * @return {string}
 */
function objToPath(routeParamObj) {
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

export default url = {
  pathToObj,
  objToPath,
};