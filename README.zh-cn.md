# Next Components

`@alifd/next` 是 Fusion Design 中的面向 PC 端可配置组件库，基于 React 实现，支持所有现代浏览器和 IE9+。

[English README](./README.md)

[![npm package](https://img.shields.io/npm/v/@alifd/next.svg?style=flat-square)](https://www.npmjs.org/package/@alifd/next)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Build Status](https://travis-ci.com/alibaba-fusion/next.svg?token=KAYresHL1UPaaLzUYyx6&branch=master)](https://travis-ci.com/alibaba-fusion/next)
[![codecov](https://codecov.io/gh/alibaba-fusion/next/branch/master/graph/badge.svg?token=FSufKVDhmT)](https://codecov.io/gh/alibaba-fusion/next)

# 为什么用

`@alifd/next` 配合 [Fusion Design](https://fusion.design) 解决在页面开发时设计师和前端协同的问题。通过这套体系设计师可以自由的定制组件的 UI 并产出一个 npm 主题包，前端可以直接使用这个主题包不需要关注组件的还原度问题。省去了和设计师反复的去做还原度 Review 的工作量，大幅度的提高了开发效率。

![](https://img.alicdn.com/tfs/TB1MDP6GSzqK1RjSZFpXXakSXXa-1278-458.png)

# 快速开始

## 安装

### 1.使用 npm 安装(推荐)

```
npm install @alifd/next --save
```

### 2.浏览器直接引用

在浏览器中使用 script 和 link 标签直接引入文件，并使用全局变量 Next。我们在 npm 包中提供了 `@alifd/next/dist` 目录下的 next.js/next.min.js 和 next.css/next.min.css 等文件，也可以通过 [unpkg](https://unpkg.com/@alifd/next/dist/) 进行下载。

``` html
<link rel="stylesheet" href="https://unpkg.com/@alifd/next/dist/next.css">

<script src="https://unpkg.com/@alifd/next/dist/next.js"></script>

// 以上引入都是引入的最新版本 @alifd/next ，但我们推荐引入固定版本的next组件，以保证代码稳定
<script src="https://unpkg.com/@alifd/next@1.8.6/dist/next.min.js"></script>

// 或作为自己的静态资源引入
<script src="../build/public/@alifd/next.js"></script>
```

## 依赖

* `@alifd/next` 基于 `react@16` 开发，目前并不兼容 `react@16` 以下的版本，且将 react/react-dom 作为 peerDependencies，需要用户手动提前安装或引入。
* `@alifd/next` 在处理日期时间相关组件逻辑时，使用了 [moment](https://github.com/moment/moment) 库，且将 moment 作为 peerDependencies，需要用户手动提前安装或引入。

## 引入

### 全量引入


``` js
import '@alifd/next/dist/next.css';
// import '@alifd/next/index.scss';

import { Button, Input } from '@alifd/next';
```

### 按需引入


#### 1.手动引入

``` js
import Button from '@alifd/next/lib/button';
import '@alifd/next/lib/button/style';
```

#### 2.使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

但大多数人更习惯的写法如下：

``` js
import { Button } from '@alifd/next';
```

通过 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 插件，可以将上述代码转化为类似下面的代码：

``` js
import Button from '@alifd/next/lib/button';
import '@alifd/next/lib/button/style';
```

babel配置：
``` js
// webpack babel loader option or .babelrc
{
  // ...
  plugins: [
    ['babel-plugin-import', {
      libraryName: '@alifd/next',
      style: true
    }]
  ]
}
```



## 高级用法
-   [使用主题包](./site/zh-cn/theme.md)
-   [国际化](./site/zh-cn/i18n.md)
-   [字体文件私有化部署](./site/zh-cn/font-deploy.md)

## 贡献代码
-   [贡献代码](./site/zh-cn/contributing.md)

## 加入社区

扫码*钉钉群* 加入即刻交流与反馈：

<img alt="Join the chat at dingtalk" src="https://img.alicdn.com/tfs/TB1iH9unxnaK1RjSZFtXXbC2VXa-1125-1485.jpg" width="300">
