/**
 * @func 删除指定路径的键值对
 * @desc 
 * @param {object} obj 对象源
 * @param {array|string} path 指定删除路径
 * @param {string} splitStr 分割路径字符   
 * @return {object} 删除后的对象 
 */
function deleteByPath(obj, path, splitStr = '.') {
  let curPath = path;
  if (!Array.isArray(path)) {
    curPath = path?.split(splitStr);
  }

  if (curPath.length === 1) {    
    delete obj[curPath[0]];
    return obj;
  } else {
    const newObj = { ...obj };
    const lastKey = curPath[curPath.length - 1];
    let currentObj = newObj;
    for (let i = 0; i < curPath.length - 1; i++) {
      currentObj = currentObj[curPath[i]];
    }
    delete currentObj[lastKey];
    return newObj;
  }
}
export default deleteByPath;