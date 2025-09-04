const EARTH_RADIUS = 6371393.0;

function toRadians(degrees) {
  return degrees * (Math.PI / 180.0);
}

/**
 * 根据经纬度计算两点之间的距离。
 * 支持的经纬度格式: `[lng,lat]`, `'lng,lat'`, or `'lng${splitStr}lat'`.
 * @param {number[] | string} loc1 地点1的经纬度。
 * @param {number[] | string} loc2 地点2的经纬度。
 * @param {string} [splitStr=','] 如果输入是字符串，用什么字符分割经纬度。
 * @returns {number} 两点之间的距离 (米)。
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