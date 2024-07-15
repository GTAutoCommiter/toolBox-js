/**
 * @func 清除所有Cookie
 * @desc 通过使用 document.cookie 可以轻松清除存储在网页中的所有 cookie 。
 */
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.\*/, `=;expires=${new Date(0).toUTCString()};path=/`));

export default clearCookies;