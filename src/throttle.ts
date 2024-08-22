/**
 * @func 节流
 * @desc 
 * @param {}  
 * @return {} 
 */
function throttle(fn, delay) {
  let lock = false;
  let timer = null;
  return function (...args) {
    if (!lock) {
      lock = true;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        lock = false;
        fn.apply(this, args);
      }, delay)
    }
  }
}
export default throttle;