/**
 * URL utilities
 */

/**
 * Convert an object to a URL query string
 */
export const objToPath = (routeParamObj: Record<string, any>): string => {
  return Object.entries(routeParamObj)
    .reduce((res: string[], [key, value]) => {
      let paramValue = value;
      if (Array.isArray(value)) {
        paramValue = value.join(",");
      }
      res.push(`${key}=${paramValue}`);
      return res;
    }, [])
    .join("&");
};

/**
 * Parse a URL query string into an object
 */
export const pathToObj = (pathParam: string): Record<string, string> => {
  const res: Record<string, string> = {};
  if (!pathParam) return res;

  // Handle strings starting with ? or #
  const cleanPath = pathParam.includes("?")
    ? pathParam.split("?")[1]
    : pathParam.includes("#")
      ? pathParam.split("#")[1]
      : pathParam;

  const paramArr = cleanPath.split("&");
  return paramArr.reduce((resObj, paramStr) => {
    const [key, value] = paramStr.split("=");
    if (key) {
      resObj[key] = value || "";
    }
    return resObj;
  }, res);
};

/**
 * Get base URL by removing query and hash
 */
export const getBaseURL = (url: string): string => url.replace(/[?#].*$/, "");

const url = {
  objToPath,
  pathToObj,
  getBaseURL,
};

export default url;
