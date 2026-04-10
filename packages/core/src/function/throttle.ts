/**
 * Throttle a function
 * @param fn - The function to throttle
 * @param delay - Delay in milliseconds
 * @returns A throttled version of the function
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let lock = false;
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    if (!lock) {
      lock = true;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        lock = false;
        fn.apply(this, args);
      }, delay);
    }
  };
}

export default throttle;
