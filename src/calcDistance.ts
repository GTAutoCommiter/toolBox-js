const EARTH_RADIUS = 6371393.0;

function toRadians(degrees) {
  return degrees * (Math.PI / 180.0);
}

/**
 * @func 获取两经纬度距离
 * @desc 支持经纬度格式
 * 1.[lng,lat]
 * 2.`lng,lat`
 * 3.`lng${splitStr}lat`
 * @param {Array} loc1 地址1经纬度 
 * @param {Array} loc2 地址2经纬度
 * @param {string} splitStr 分割字符
 * @return {number} 两地距离
 */
function calcDistance(loc1, loc2, splitStr = ',') {
  let loc1Arr = loc1, loc2Arr = loc2;
  if (typeof loc1Arr === 'string') {
    loc1Arr = loc1?.split(splitStr)?.map((v) => Number(v));
  }

  if (typeof loc2Arr === 'string') {
    loc2Arr = loc2?.split(splitStr)?.map((v) => Number(v));
  }

  if (loc1 == null || loc2 == null) return 0.0;
  let [lng1, lat1] = loc1Arr;
  let [lng2, lat2] = loc2Arr;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lng2 - lng1);

  lat1 = toRadians(lat1);
  lat2 = toRadians(lat2);

  const a = Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS * Math.abs(c);
}

export default calcDistance;