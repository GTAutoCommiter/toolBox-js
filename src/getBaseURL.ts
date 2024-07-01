/**
 * @func 获取baseURL
 * @desc 
 * @param {string} url  
 * @return {string} baseURL 
 */
const getBaseURL = (url) => url.replace(/[?#].*$/, '')

export default getBaseURL;