/**
 * @func 创建矩阵
 * @desc 
 * @param {number} row 行  
 * @param {number} column 列
 * @return {Array<Array>} 矩阵 
 */
const createMatrix = (row=1, column=1) => {
  return Array.from(Array(column), () => Array(row).fill(null));
}

export default createMatrix;