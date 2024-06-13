/**
 * @func 节流
 * @desc 
 * @param {}  
 * @return {} 
 */
function throttle(fn, delay) {
  let time = true;
  return () => {
    if (!time) {
      return
    }
    time = false;
    setTimeout(() => {
      time = true;
      fn.apply(this, arguments)
    }, delay);
  }
}
export default throttle;