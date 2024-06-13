/**
 * @func 判断数组是否相等
 * @desc 
 * @param {array} arr1   
 * @param {array} arr2   
 * @return {boolean}  
 */
function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const newArr1 = JSON.parse(JSON.stringify(arr1));
  const newArr2 = JSON.parse(JSON.stringify(arr2));
  for (let i = 0; i < newArr1.length; i++) {
    if (newArr1[i] !== newArr2[i]) {
      return false;
    }
  }
  return true;
}
export default arrayIsEqual;