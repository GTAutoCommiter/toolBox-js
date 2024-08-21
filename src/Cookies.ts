
/**
 * @func 清除所有Cookie
 * @desc 通过使用 document.cookie 可以轻松清除存储在网页中的所有 cookie 。
 */
const clearAll = () => { document?.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.\*/, `=;expires=${new Date(0).toUTCString()};path=/`)); }

/**
 * @func 获取指定名的cookies
 * @desc 
 * @param {}  
 * @return {} 
 */
const get = (name) => {
  const str = `/(?:(?:^|.*;\s*)${name}\s*\=\s*([^;]*).*$)|^.*$/`;
  return document.cookie.replace(eval(str), "$1",);
}

/**
 * @func 获取所有Cookie
 * @desc 
 * @param {}  
 * @return {} 
 */
const getAll = () => {
  return document.cookie;
}


const Cookies = {
  clearAll,
  get,
  getAll,
};

export default Cookies;