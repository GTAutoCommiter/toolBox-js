/**
 * @func 构建树形结构
 * @desc 
 * @param {Array} items 数据源
 * @param {string} id 当前节点id
 * @param {string} link 关联key名 
 * @return {Object} 
 */
const nestByKey = (items, id = null, link = 'parentId') => {
  return items.filter(item => item[link] === id).map(item => ({ ...item, children: nestByKey(items, item.id, link) }));
}

export default nestByKey;