# 使用主题包

如果默认的组件主题样式无法满足你的视觉需求，那么你可以通过 Fusion Design 提供的强大的样式配置能力配置自定义的主题样式包。该主题包(包名例如取 `@alifd/theme-xxx` )可以在平台上导出发布至npm，它的本质是一个 scss 变量包，配合`@alifd/next`共同使用。

## 安装

```
npm install @alifd/theme-xxx --save
```

## 引入

### 全量引入

``` js
import '@alifd/theme-xxx/index.scss';


import { Button, Input } from '@alifd/next';
```

**Note:** 如果你使用的是主题包中预编译生成的 css 文件，请保证 “项目依赖的next组件版本” 与 “主题包依赖的next组件版本” 一致，以防止 js/css 因版本不匹配导致的潜在问题

### 按需引入
除使用在《快速开始》一节中提到的 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 外，还需搭配 [@alifd/next-theme-loader](https://github.com/alibaba-fusion/next-theme-loader) 和 [@alifd/next-theme-webpack-plugin](https://github.com/alibaba-fusion/next-theme-webpack-plugin)，可参考如下 webpack 配置：

``` js
const path = require('path');
const webpack = require('webpack');
const ThemePlugin = require('@alifd/next-theme-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'react',
            'stage-0'
          ],
          plugins: [
            'add-module-exports',
            'transform-decorators-legacy',
            ['babel-plugin-import', { style: true }]
          ]
        }
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          'fast-sass-loader',
          {
            // 添加 @alifd/next-theme-loader，引入自定义主题样式对应的 scss 变量
            loader: '@alifd/next-theme-loader',
            options: {
              theme: '@alifd/theme-xxx'
            }
          }
        ]
      })
    }]
  },
  plugins: [
    // 添加 @alifd/next-theme-webpack-plugin，引入 normalize 样式以及自定义 icon 定义
    new ThemePlugin({ theme: '@alifd/theme-xxx' }),
    new ExtractTextPlugin('[name].css')
  ]
};
```
