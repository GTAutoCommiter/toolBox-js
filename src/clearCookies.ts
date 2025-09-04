/**
 * 清除当前页面下的所有Cookie。
 * 通过将每个cookie的过期时间设置为过去的时间点来达到删除效果。
 */
const clearCookies = () => { document?.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.\*/, `=;expires=${new Date(0).toUTCString()};path=/`)); }

export default clearCookies;