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