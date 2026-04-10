/**
 * Check if a string is a valid regular expression literal
 */
export function strIsReg(str: string): boolean {
  try {
    // eslint-disable-next-line no-eval
    return eval(str) instanceof RegExp;
  } catch (e) {
    return false;
  }
}

export default strIsReg;
