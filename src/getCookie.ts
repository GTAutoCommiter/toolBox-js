/**
 * @func 获取cookie
 * @desc 
 * @param {string} name cookie键名  
 * @return {string} cookie 
 */
const getCookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

export default getCookie;