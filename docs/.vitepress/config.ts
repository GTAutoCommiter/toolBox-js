import { defineConfig } from "vitepress";

// 提取通用的 API 侧边栏配置
const apiSidebar = [
  {
    text: "API Reference",
    items: [
      { text: "Overview", link: "/api/" },
      {
        text: "Modules",
        collapsed: false,
        items: [
          {
            text: "Function",
            link: "/api/functions/debounce",
            items: [
              { text: "debounce", link: "/api/functions/debounce" },
              { text: "throttle", link: "/api/functions/throttle" },
              { text: "curry", link: "/api/functions/curry" },
            ],
          },
          {
            text: "Object",
            items: [
              { text: "cloneDeep", link: "/api/functions/cloneDeep" },
              { text: "isEmpty", link: "/api/functions/isEmpty" },
              { text: "pick", link: "/api/functions/pick" },
              { text: "omit", link: "/api/functions/omit" },
              { text: "deleteByPath", link: "/api/functions/deleteByPath" },
            ],
          },
          {
            text: "Array",
            items: [
              { text: "arrayIsEqual", link: "/api/functions/arrayIsEqual" },
              { text: "groupByValue", link: "/api/functions/groupByValue" },
              { text: "nestByKey", link: "/api/functions/nestByKey" },
              { text: "createMatrix", link: "/api/functions/createMatrix" },
            ],
          },
          {
            text: "String",
            items: [
              { text: "upperFirst", link: "/api/functions/upperFirst" },
              { text: "rgbToHex", link: "/api/functions/rgbToHex" },
              { text: "strIsReg", link: "/api/functions/strIsReg" },
            ],
          },
          {
            text: "Browser/URL",
            items: [
              { text: "getCookie", link: "/api/functions/getCookie" },
              { text: "getPerformance", link: "/api/functions/getPerformance" },
              { text: "getBaseURL", link: "/api/functions/getBaseURL" },
              { text: "pathToObj", link: "/api/functions/pathToObj" },
            ],
          },
          {
            text: "Math/Format",
            items: [
              { text: "numFixed", link: "/api/functions/numFixed" },
              { text: "formatMoney", link: "/api/functions/formatMoney" },
              { text: "calcDistance", link: "/api/functions/calcDistance" },
            ],
          },
          {
            text: "Time/Validate",
            items: [
              { text: "formatDate", link: "/api/functions/formatDate" },
              { text: "getWeekDay", link: "/api/functions/getWeekDay" },
              { text: "mobile", link: "/api/functions/mobile" },
            ],
          },
        ],
      },
    ],
  },
];

export default defineConfig({
  title: "Tool Box Docs",
  description: "Enterprise Toolkit API Documentation",
  base: "/toolBox-js/",

  locales: {
    root: {
      label: "English",
      lang: "en-US",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "API Reference", link: "/api/" },
        ],
        sidebar: {
          "/api/": apiSidebar,
        },
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh/" },
          { text: "API 参考", link: "/api/" },
        ],
        sidebar: {
          "/zh/": [
            {
              text: "指南",
              items: [{ text: "快速开始", link: "/zh/" }],
            },
          ],
          "/api/": apiSidebar,
        },
      },
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/GTAutoCommiter/toolBox-js" },
    ],
  },
});
