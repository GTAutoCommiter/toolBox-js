/**
 * Curry a function
 * @param fn - The function to curry
 * @param args - Initial arguments
 * @returns A curried version of the function
 */
export function curry<T extends (...args: any[]) => any>(
  fn: T,
  ...args: any[]
): any {
  const fnLen = fn.length;
  const argsLen = args.length;

  return argsLen >= fnLen
    ? fn(...args)
    : (..._args: any[]) => curry(fn, ...args, ..._args);
}

export default curry;
