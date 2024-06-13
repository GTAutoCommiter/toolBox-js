/**
 * @func 防抖
 * @desc
 * @param {function} fun 
 * @param {number} wait 等待时间 
 * @return {}
 */
function debounce(fun, wait) {
  let timer = null;
  return function () {
    let context = this, args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fun.apply(context, args)
    }, wait)
  }
}

export default debounce;

