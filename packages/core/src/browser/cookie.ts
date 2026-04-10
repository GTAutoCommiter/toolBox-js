/**
 * Browser Cookie utilities
 */

/**
 * Get a specific cookie by name
 */
export const getCookie = (name: string): string => {
  if (typeof document === "undefined") return "";
  const str = `/(?:(?:^|.*;\\s*)${name}\\s*\\=\\s*([^;]*).*$)|^.*$/`;
  // eslint-disable-next-line no-eval
  return document.cookie.replace(eval(str), "$1");
};

/**
 * Get all cookies as a string
 */
export const getAllCookies = (): string => {
  return typeof document !== "undefined" ? document.cookie : "";
};

/**
 * Clear all cookies for the current domain
 */
export const clearAllCookies = (): void => {
  if (typeof document === "undefined") return;
  document.cookie.split(";").forEach((cookie) => {
    document.cookie = cookie
      .replace(/^ +/, "")
      .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
  });
};

const cookie = {
  get: getCookie,
  getAll: getAllCookies,
  clearAll: clearAllCookies,
};

export default cookie;
