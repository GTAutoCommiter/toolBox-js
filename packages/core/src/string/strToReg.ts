import strIsReg from "./strIsReg";

/**
 * Convert a string representation of a regex to a RegExp object
 */
export function strToReg(str: string): RegExp {
  if (strIsReg(str)) {
    // eslint-disable-next-line no-eval
    return eval(str);
  }
  throw new Error("Provided string is not a valid regular expression literal!");
}

export default strToReg;
