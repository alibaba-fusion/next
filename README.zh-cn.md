[English](./README.md) | 简体中文

<p align="center">
  <a href="https://fusion.design/">
    <img alt="Fusion" src="https://img.alicdn.com/tfs/TB1YsoiHVzqK1RjSZFCXXbbxVXa-159-99.svg" width="200">
  </a>
</p>

<p align="center">一套企业级中后台UI的解决方案，致力于解决设计师与前端在工作协同、产品体验一致性、开发效率方面的问题</p>

---

<p align="center">
  <a href="https://www.npmjs.org/package/@alifd/next"><img src="https://img.shields.io/npm/v/@alifd/next.svg"></a>
  <a href="https://www.npmjs.org/package/@alifd/next"><img src="https://img.shields.io/npm/dm/@alifd/next.svg"></a>
  <a href="https://codecov.io/gh/alibaba-fusion/next"><img src="https://codecov.io/gh/alibaba-fusion/next/branch/master/graph/badge.svg?token=FSufKVDhmT"></a>
  <a href="https://travis-ci.com/alibaba-fusion/next"><img src="https://travis-ci.com/alibaba-fusion/next.svg?token=KAYresHL1UPaaLzUYyx6&branch=master"></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
  <a href="https://github.com/alibaba-fusion/next/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg"></a>
</p>

你可以通过[一站式协作平台](https://fusion.design)灵活地定制自己的 DesignSystem，生成设计物料与代码分片到设计师的工具端 [FusionCool](https://fusion.design/tool?from=github) 及开发者的工具端 [Iceworks](https://fusion.design/tool?from=github)，同时保证代码和视觉稿之间的一致性

![howtouse](https://img.alicdn.com/tfs/TB1dF3BH4TpK1RjSZFMXXbG_VXa-1280-720.gif)

# 🤔 为什么用

`@alifd/next` 配合 [Fusion Design](https://fusion.design) 解决在页面开发时设计师和前端协同的问题。通过这套体系设计师可以自由的定制组件的 UI 并产出一个 npm 主题包，前端可以直接使用这个主题包不需要关注组件的还原度问题。省去了和设计师反复的去做还原度 Review 的工作量，大幅度的提高了开发效率。

![](https://img.alicdn.com/tfs/TB1MDP6GSzqK1RjSZFpXXakSXXa-1278-458.png)

# 💻 浏览器支持

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![UC](https://raw.github.com/alrra/browser-logos/master/src/uc/uc_48x48.png) |
| :--------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
|                                            ✔                                             |                                              ✔                                              |                                         ✔                                          |                                                             9+ ✔                                                             |                                            ✔                                             |                                           ✔                                           |                                      ✔                                       |

# 🚀 快速开始

## 🛠 安装

### 1.使用 npm 安装(推荐)

```
npm install @alifd/next --save
```

### 2.浏览器直接引用

在浏览器中使用 script 和 link 标签直接引入文件，并使用全局变量 Next。我们在 npm 包中提供了 `@alifd/next/dist` 目录下的 next.js/next.min.js 和 next.css/next.min.css 等文件，也可以通过 [unpkg](https://unpkg.com/@alifd/next/dist/) 进行下载。

```html
<link rel="stylesheet" href="https://unpkg.com/@alifd/next/dist/next.css" />

<script src="https://unpkg.com/@alifd/next/dist/next.js"></script>

// 以上引入都是引入的最新版本 @alifd/next
，但我们推荐引入固定版本的next组件，以保证代码稳定
<script src="https://unpkg.com/@alifd/next@1.8.6/dist/next.min.js"></script>

// 或作为自己的静态资源引入
<script src="../build/public/@alifd/next.js"></script>
```

## ☔️ 依赖

-   `@alifd/next` 基于 `react@16` 开发，目前并不兼容 `react@16` 以下的版本，且将 react/react-dom 作为 peerDependencies，需要用户手动提前安装或引入。
-   `@alifd/next` 在处理日期时间相关组件逻辑时，使用了 [moment](https://github.com/moment/moment) 库，且将 moment 作为 peerDependencies，需要用户手动提前安装或引入。

## 🎯 引入

### 全量引入

```js
// 全量引入压缩后的next基础样式
import '@alifd/next/dist/next.min.css';

import { Button, Input } from '@alifd/next';
```

-   优点：使用简单, 样式无需编译直接使用
-   缺点：当前页面未使用的组件也会被打包

**Note:** 如果引入 scss 版本的样式，`import '@alifd/next/index.scss';`，在 webpack 打包时请使用`fast-sass-loader`，否则编译出来的样式文件可能会很大。
原因是`@alifd/next`内部，组件之间存在依赖关系，例如 Icon 组件被 Menu 组件依赖。对于 webpack 来讲，在分析依赖阶段，Menu 的 index.scss 和 Icon 的 index.scss 是两个不同的模块，两个文件会独立的在 sass-loader 阶段编译。因此 Icon 的 sass 会被重复编译。使用`fast-sass-loader`可以避免样式重复打包的问题。

### 按需引入

#### 1.手动引入

```js
import Button from '@alifd/next/lib/button';
import '@alifd/next/lib/button/style';
```

-   优点：按需引入 js 代码、样式代码，不会加载不必要的组件
-   缺点：使用起来过于繁琐，需要手动添加每一个用到的组件 js 代码及样式

#### 2.使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

通过 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 插件，可以将下面的代码

```js
import { Button } from '@alifd/next';
```

转化为类似下面的代码：

```js
import Button from '@alifd/next/lib/button';
import '@alifd/next/lib/button/style';
```

babel 配置：

```js
// webpack babel loader option or .babelrc
{
    // ...
    plugins: [
        [
            'import',
            {
                libraryName: '@alifd/next',
                style: true,
            },
        ],
    ];
}
```

## 🔗 高级用法

-   [使用主题包](./site/zh-cn/theme.md)
-   [国际化](./site/zh-cn/i18n.md)
-   [字体文件私有化部署](./site/zh-cn/font-deploy.md)


## 🌈 贡献代码
推荐在线编辑：使用 Gitpod, 一个源自 GitHub 的免费在线代码编辑工具：

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/alibaba-fusion/next)

具体步骤可参考：
-   [贡献代码](./site/zh-cn/contributing.md)

## 📣 加入社区

扫码*钉钉群* 加入即刻交流与反馈：

<img alt="Join the chat at dingtalk" src="https://img.alicdn.com/tfs/TB1r2GoU6DpK1RjSZFrXXa78VXa-620-818.png" width="300">
