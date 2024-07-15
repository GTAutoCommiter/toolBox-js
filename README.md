# Tool-box-js

javascript开发常用方法工具包

[文档地址](https://lao-jiawei.github.io/docs/docs/jvtools/%E7%AE%80%E4%BB%8B)

# 版本日志

## v1.0.8【未发布】

### 新增

[Time.dayDif(date1,date2)-获取两日期天数差]()

[rgbToHex(r,g,b)-rgb转十六进制字符]()

[getCookie(name)-获取cookie]()

[calcDistance(loc1, loc2, splitStr = ',')-计算两地经纬度距离]()

[Time.isLeapYear(year)-判断是否为润年]()

## v1.0.7

### 新增

[numFixed(num, [precision = 2])-指定小数位进行四舍五入](https://lao-jiawei.github.io/docs/docs/jvtools/numFixed)

[fahrenheitToCelsius(celsius)-摄氏度转华氏度](https://lao-jiawei.github.io/docs/docs/jvtools/Format/fahrenheitToCelsius)

[Format.celsiusToFahrenheit(celsius)-摄氏度转华氏度](https://lao-jiawei.github.io/docs/docs/jvtools/Format/celsiusToFahrenheit)

[getPerformance()-获取当前页面性能参数](https://lao-jiawei.github.io/docs/docs/jvtools/getPerformance)

[Time.isDateValid(...args)-检查日期是否有效](https://lao-jiawei.github.io/docs/docs/jvtools/Time/isDateValid)

[getBaseURL(url)-获取不带参数的base URL](https://lao-jiawei.github.io/docs/docs/jvtools/URL/getBaseURL)

## v1.0.6

### 新增

[iteratorObj(obj)-可迭代对象方法](https://lao-jiawei.github.io/docs/docs/jvtools/iteratorObj)

[feat: 添加首字母大写方法](https://github.com/lao-jiawei/toolBox-js/commit/0287f3de219187ec869453453fa329a8b683bb5b)

[feat: 添加时间格式化](https://github.com/lao-jiawei/toolBox-js/commit/69b399c6a317637d52d82c80c98e1f35fb0fdaf1)

[strIsReg(str)-判断字符串是否为正则表达式](https://lao-jiawei.github.io/docs/docs/jvtools/strIsReg)

[feat: 添加字符串转换正则表达式方法](https://github.com/lao-jiawei/toolBox-js/commit/7fd18673cc9cc12f943d65336bfcd7a0ea61060c)

### 修复

[fix: 修复数组对象元素匹配相等bug](https://github.com/lao-jiawei/toolBox-js/commit/8e843e61545c728b5f4c9324e4684f1bf1346720)

## v1.0.5

[deleteByPath(obj, path, [splitStr='.'])-根据路径删除对象目标键值](https://lao-jiawei.github.io/docs/docs/jvtools/deleteByPath)

## v1.0.4

[feat: 添加Time类日期转换星期方法](https://github.com/lao-jiawei/toolBox-js/commit/e76d2a4b5bf7ececbf352e4a860a15d7670d5968)

## v1.0.3

### 添加

[arrayIsEqual(arr1,arr2)-数组比较方法](https://lao-jiawei.github.io/docs/docs/jvtools/arrayIsEqual)

[debounce(fun, wait)-防抖](https://lao-jiawei.github.io/docs/docs/jvtools/debounce)

[throttle(fun, wait)-节流](https://lao-jiawei.github.io/docs/docs/jvtools/throttle)

[curry(func, [arity=func.length])-柯里化函数](https://lao-jiawei.github.io/docs/docs/jvtools/curry)

[Format.formatMoney(money, [symbol = "", decimals = 2])-格式化价格](https://lao-jiawei.github.io/docs/docs/jvtools/Format/formatMoney)

[feat: 添加校验类](https://github.com/lao-jiawei/toolBox-js/commit/6ded90eb5d8dad99cea02033fe0d919c3d80c0e4)

[isEmpty(val)-空对象判断](https://lao-jiawei.github.io/docs/docs/jvtools/isEmpty)

[groupByValue(obj)-收集相同值方法](https://lao-jiawei.github.io/docs/docs/jvtools/groupByValue)

[nestByKey(items, [id = null, link = 'parentId'])-构建树形结构](https://lao-jiawei.github.io/docs/docs/jvtools/nestByKey)

[filterObj(obj,arr)-过滤对象方法](https://lao-jiawei.github.io/docs/docs/jvtools/filterObj)

[objToPath(obj)-对象转化成url参数](https://lao-jiawei.github.io/docs/docs/jvtools/URL/objToPath)

[pathToObj(str)-路径参数解析成对象](https://lao-jiawei.github.io/docs/docs/jvtools/URL/pathToObj)
