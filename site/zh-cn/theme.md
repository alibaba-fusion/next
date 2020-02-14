# 使用主题包

如果默认的组件主题样式无法满足你的视觉需求，那么你可以通过 Fusion Design 提供的强大的样式配置能力配置自定义的主题样式包。该主题包(包名例如取 `@alifd/theme-xxx` )可以在平台上导出发布至 npm，它的本质是一个 scss 变量包，配合`@alifd/next`共同使用。

**Note:** 使用主题包时，请务必保证 “项目依赖的 next 组件版本” 与 “主题包依赖的 next 组件版本” 一致(至少到 minor 版本一致)，以防止 js/css 因版本不匹配导致的潜在问题

-   项目依赖的 next 组件版本：node_modules 中，项目真正使用的版本
-   主题包依赖的 next 组件版本：查看发布的主题包 package.json 的 dependencies 中`@alifd/next`的版本，例如 https://unpkg.com/@alifd/theme-1/package.json

如果不匹配(minor 不同)，请去往[配置平台](https://fusion.design/)发布主题。

## 安装

```
npm install @alifd/theme-xxx --save
```

## 引入

### 全量引入

```js
// 直接使用主题包中预编译生成的 css 文件
import '@alifd/theme-xxx/dist/next.css';

import { Button, Input } from '@alifd/next';
```

### 按需引入

除使用在《快速开始》一节中提到的 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 外，还需搭配 [@alifd/next-theme-loader](https://github.com/alibaba-fusion/next-theme-loader) 和 [@alifd/next-theme-webpack-plugin](https://github.com/alibaba-fusion/next-theme-webpack-plugin)，可参考如下 webpack 配置：
@alifd/next-theme-loader 用来处理单个组件的样式问题，@alifd/next-theme-webpack-plugin 用来处理

```bash
npm install @alifd/next-theme-webpack-plugin fast-sass-loader @alifd/next-theme-loader
```

```js
const path = require('path');
const webpack = require('webpack');
const ThemePlugin = require('@alifd/next-theme-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.jsx',
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0'],
                        plugins: [
                            'add-module-exports',
                            'transform-decorators-legacy',
                            ['babel-plugin-import', {
                                libraryName: '@alifd/next',
                                style: true
                             }],
                        ],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'fast-sass-loader',
                        {
                            // 添加 @alifd/next-theme-loader，引入自定义主题样式对应的 scss 变量
                            loader: '@alifd/next-theme-loader',
                            options: {
                                theme: '@alifd/theme-xxx',
                                // 基准包，默认是@alifd/next
                                base: '@alifd/next',
                                // 注入变量，来编译组件样式
                                // 支持 Object 和 String ， 如果是 String 请写绝对路径 例如: modifyVars: path.join(__dirname, 'variable.scss')
                                // 以下为Object
                                modifyVars: {
                                    '$css-prefix': '"myprefix-"',
                                },
                            },
                        },
                    ],
                }),
            },
        ],
    },
    plugins: [
        // 添加 @alifd/next-theme-webpack-plugin，引入 normalize 样式以及自定义 icon 定义
        new ThemePlugin({
            theme: '@alifd/theme-xxx',
            // 基准包，默认是@alifd/next
            libraryName: '@alifd/next',
            // 是否将内置的normalize样式添加到最终的样式包中，默认为true
            prependNormalizeCSS: true,
            // 注入变量，来编译normalize和icon样式
            // 支持 Object 和 String ， 如果是 String 请写绝对路径 例如: modifyVars: path.join(__dirname, 'variable.scss')
            // 以下为Object
            modifyVars: {
                '$css-prefix': '"myprefix-"',
            },
        }),
        new ExtractTextPlugin('[name].css'),
    ],
};
```
