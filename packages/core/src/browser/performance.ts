/**
 * Web performance metrics
 */

export interface PerformanceMetrics {
  pageLoad: number;
  DNSParsing: number;
  TCPConnection: number;
  dataTransfer: number;
  HTMLLoad: number;
  pageRendering: number;
  firstPacket: number;
  loadResources: number;
  DOMParsing: number;
  networkRequest: number;
  SSLConnection?: number;
  firstInteraction: number;
  whiteScreen: {
    time: number;
    reportTime: number;
  };
  performance: Performance | undefined;
  [key: string]: any;
}

/**
 * Get performance metrics for the current page
 */
export function getPerformance(): PerformanceMetrics | null {
  if (typeof window === "undefined" || !window.performance) {
    return null;
  }

  const performance = window.performance;
  const timing = performance.timing;
  const startTime = (performance as any).timeOrigin || timing.navigationStart;

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
  } = timing;

  const res: any = {};

  res.pageLoad = loadEventEnd - startTime;
  res.DNSParsing = domainLookupEnd - domainLookupStart;
  res.TCPConnection = connectEnd - connectStart;
  res.dataTransfer = responseEnd - responseStart;
  res.HTMLLoad = responseEnd - startTime;
  res.pageRendering = loadEventEnd - responseEnd;
  res.firstPacket = responseStart - startTime;
  res.loadResources = loadEventEnd - domContentLoadedEventEnd;
  res.DOMParsing = domContentLoadedEventEnd - responseEnd;
  res.networkRequest = responseStart - requestStart;

  if (window.location.protocol === "https:" && secureConnectionStart) {
    res.SSLConnection = connectEnd - secureConnectionStart;
  }

  res.firstInteraction = domInteractive - startTime;

  // White screen time
  const whiteScreen: any = {
    reportTime: loadEventEnd - startTime,
  };

  const paintEntries = performance.getEntriesByType("paint");
  if (paintEntries.length > 0) {
    whiteScreen.time = paintEntries[0].startTime;
  } else if ((window as any).chrome?.loadTimes?.().firstPaintTime) {
    whiteScreen.time = (window as any).chrome.loadTimes().firstPaintTime;
  } else {
    whiteScreen.time = domInteractive - startTime;
  }

  res.whiteScreen = whiteScreen;
  res.performance = performance;

  return res as PerformanceMetrics;
}

export default getPerformance;
