const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: undefined,
    filename: 'bundle.js',
    library: 'toolBox-js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],

  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true, // 移除所有console相关代码
            drop_debugger: true, // 移除自动断点功能
            pure_funcs: ["console.log", "console.error"], // 配置移除指定的指令，如console.log, alert等
          },
          format: {
            comments: false, // 移除注释
          },
        },
        extractComments: false, // 不提取注释到单独文件
      })
    ],
  },
  mode: "development",
};