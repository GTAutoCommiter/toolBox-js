/**
 * @func 获取当前页面性能参数
 * @desc
 * @return {Object}
 */
function getPerformance() {
  const performance = window.performance;
  const startTime = performance?.timeOrigin;
  const {
    loadEventEnd,
    domainLookupEnd,
    domainLookupStart,
    connectEnd,
    connectStart,
    domInteractive,
    responseEnd,
    responseStart,
    domContentLoadedEventEnd,
    requestStart,
    secureConnectionStart,
  } = performance?.timing;
  const res = {}
  /*
    页面加载总耗时
    指页面完全加载完所用的时间，这时候触发完成了 onload 事件
  */
  res.pageLoad = {
    desc: '页面加载总耗时',
    time: loadEventEnd - startTime,
  }

  /*
    DNS解析耗时
    指通过域名解析服务（DNS），将指定的域名解析成IP地址所消耗的时间
  */
  res.DNSParsing = {
    desc: 'DNS解析耗时',
    time: domainLookupEnd - domainLookupStart,
  }

  /*
    TCP连接耗时
    指浏览器和WEB服务器建立TCP/IP连接所用的时间
  */
  res.TCPConnection = {
    desc: 'TCP连接耗时',
    time: connectEnd - connectStart,
  }

  /*
    数据传输耗时
    指服务器端返回第一个字节到最后一个字节所需要的时间
  */
  res.dataTransfer = {
    desc: '数据传输耗时',
    time: responseEnd - responseStart,
  }

  /*
    HTML加载完时间
    指页面所有 HTML 加载完成（不包括页面渲染时间），即包括 DNS、TCP、Request 和 Response
  */
  res.HTMLLoad = {
    desc: 'HTML加载完时间',
    time: responseEnd - startTime,
  }

  /*
    页面渲染耗时
    页面完全加载时间 - HTML加载完成时间
  */
  res.pageRendering = {
    desc: '页面渲染耗时',
    time: loadEventEnd - responseEnd,
  }

  /*
    首包时间
    指从页面请求到浏览器开始接收到数据所用的时间
  */
  res.firstPacket = {
    desc: '首包时间',
    time: responseStart - startTime,
  }

  /*
    资源加载耗时
    指 DOM 解析完成后到页面完全加载完所用的时间
  */
  res.loadResources = {
    desc: '资源加载耗时',
    time: loadEventEnd - domContentLoadedEventEnd,
  }

  /*
    DOM解析耗时
    指页面请求完成（responseEnd）后，到整个 DOM 解析完所用的时间，页面的复杂度决定了 DOM 解析耗时
  */
  res.DOMParsing = {
    desc: 'DOM解析耗时',
    time: domContentLoadedEventEnd - responseEnd,
  }

  /*
    网路请求耗时
    指开始发送请求到服务器返回第一个字节所需要的时间
  */
  res.networkRequest = {
    desc: '网路请求耗时',
    time: responseStart - requestStart,
  }

  /*
    SSL连接耗时
    只在 HTTPS 下有效，属于TCP连接耗时的一部分，指安全连接握手耗时
  */
  if (window.location.protocol === 'https') {
    res.SSLConnection = {
      desc: 'SSL连接耗时',
      time: connectEnd - secureConnectionStart,
    }
  }

  /*
    首次交互时间
    指页面 DOMContentLoaded 事件触发的开始时间，这时候页面可以交互
  */
  res.firstInteraction = {
    desc: '首次交互时间',
    time: domInteractive - startTime,
  }

  /*
    白屏时间
    首次渲染时间，指页面出现第一个文字或图像所花费的时间
  */
  res.whiteScreen = {
    desc: '白屏时间',
    // 实际上报取的值
    reportTime: loadEventEnd - startTime,
  }
  if (performance?.getEntriesByType('paint')[0]?.startTime) {
    // 优先使用最新标准
    res.whiteScreen.time = performance?.getEntriesByType('paint')[0]?.startTime;
  } else if (window?.chrome?.loadTimes()?.firstPaintTime || performance?.msFirstPaint) {
    // 不支持的话使用 Chrome、IE 提供的
    res.whiteScreen.time = window?.chrome?.loadTimes()?.firstPaintTime || performance?.msFirstPaint;
  } else {
    res.whiteScreen.time = domInteractive - startTime;
  }

  console.table(res);

  const result = Object.entries(res).reduce((resObj, cur) => {
    const [key, value] = cur;
    if (key === 'whiteScreen') {
      const { time, reportTime } = value;
      resObj[key] = {
        time,
        reportTime,
      }
    } else {
      resObj[key] = value?.time;
    }
    return resObj;
  }, {
    performance,
  });
  return result;
}

export default getPerformance;