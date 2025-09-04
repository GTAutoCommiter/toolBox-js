/**
 * 路径参数解析成对象
 * @example
 * ```js
 * pathToObj('/pages/index/index?a=1&b=2') // returns {a: '1', b: '2'}
 * ```
 * @param {string} pathParam 包含URL参数的路径.
 * @returns {object} 解析后的参数对象.
 */
const pathToObj = (pathParam) => {
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
export default pathToObj;