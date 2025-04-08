export function strIsReg(str: string) {
  try {
    new RegExp(str);
    return true;
  } catch {
    return false;
  }
}