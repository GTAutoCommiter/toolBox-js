/**
 * @func 柯里化
 * @desc 
 * @param {function} fn  
 * @return {} 
 */
const curry = (fn, ...args) => {
  const argsLen = args.length, fnLen = fn.length;
  return argsLen >= fnLen
    ? fn(...args)
    : (..._args) => curry(fn, ...args, ..._args)
}
export default curry;