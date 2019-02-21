English | [简体中文](./README.zh-cn.md)
<p align="center">
  <a href="https://fusion.design/">
    <img alt="Fusion" src="https://img.alicdn.com/tfs/TB1YsoiHVzqK1RjSZFCXXbbxVXa-159-99.svg" width="200">
  </a>
</p>

<p align="center">An enterprise-class UI solution for backend system, amied of settling the problems like cooperation between designers and front-developers, consistency of product experience and development efficiency.</p>

---

<p align="center">
  <a href="https://www.npmjs.org/package/@alifd/next"><img src="https://img.shields.io/npm/v/@alifd/next.svg"></a>
  <a href="https://www.npmjs.org/package/@alifd/next"><img src="https://img.shields.io/npm/dm/@alifd/next.svg"></a>
  <a href="https://codecov.io/gh/alibaba-fusion/next"><img src="https://codecov.io/gh/alibaba-fusion/next/branch/master/graph/badge.svg?token=FSufKVDhmT"></a>
  <a href="https://travis-ci.com/alibaba-fusion/next"><img src="https://travis-ci.com/alibaba-fusion/next.svg?token=KAYresHL1UPaaLzUYyx6&branch=master"></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
  <a href="https://github.com/alibaba-fusion/next/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg"></a>
</p>

You can customize your own DesignSystem via [Collaboration Platform](https://fusion.design).💖  Designers will receive design materials by [Fusion Cool](https://fusion.design/tool?from=github) - an easy to use plugin on sketch. Developers will get code fragment on [IceWorks](https://fusion.design/tool?from=github). At the same time, the consistency between code and visual manuscript is guaranteed. 😍

![howtouse](https://img.alicdn.com/tfs/TB1dF3BH4TpK1RjSZFMXXbG_VXa-1280-720.gif)


# 🤔 Why use

`@alifd/next` usually used with [Fusion Design](https://fusion.design) to improving designer-developer collaboration and development efficiency. Designer can customize the UI of components and release an npm theme package. Developer can use this theme package directly, and don't need to care about the UI refactoring. It saves the workload of reductive degree review repeatedly with designers, and greatly improves the development efficiency.

![](https://img.alicdn.com/tfs/TB1gia.HkvoK1RjSZFDXXXY3pXa-1286-490.png)


# 💻 浏览器支持

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![UC](https://raw.github.com/alrra/browser-logos/master/src/uc/uc_48x48.png)
:---: | :---: | :---: | :---: | :---: | :---: | :---:
 ✔ |  ✔ |  ✔ |  9+ ✔ |  ✔ |  ✔ | ✔



# 🚀 Quick Start

## 🛠 Install

### 1.Use NPM ( Recommend )

```
npm install @alifd/next --save
```

### 2.Import in Browser

Use the script and link tags in the browser to directly import the file and use the global variable Next. We provide files such as next.js/next.min.js and next.css/next.min.css in the `@alifd/next/dist` directory in the npm package, or via [unpkg](https://unpkg.com/@alifd/next/dist/) Download it.

``` html
<link rel="stylesheet" href="https://unpkg.com/@alifd/next/dist/next.css">

<script src="https://unpkg.com/@alifd/next/dist/next.js"></script>

// The above ways import latest @alifd/next, we recommend you specify version.
<script src="https://unpkg.com/@alifd/next@1.8.6/dist/next.min.js"></script>

// Or import as your own static resource
<script src="../build/public/@alifd/next.js"></script>
```

## ☔️ Dependencies

* `@alifd/next` is based on `react@16` development and is currently not compatible with versions below `react@16`. react/react-dom is used as peerDependencies, which requires the user to manually install or import it.
* `@alifd/next` use [moment](https://github.com/moment/moment) library to implement date-time related component. moment is also used as peerDependencies, which requires the user to manually install or import it.

## 🎯 Import

### Import All


``` js
import '@alifd/next/dist/next.css';
// import '@alifd/next/index.scss';

import { Button, Input } from '@alifd/next';
```

### Import module with plugin


#### 1. Import module manually

``` js
import Button from '@alifd/next/lib/button';
import '@alifd/next/lib/button/style';
```

#### 2. Use with [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) ( Recommend )

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

It will transform code as below

``` js
import { Button } from '@alifd/next';
```

To

``` js
import Button from '@alifd/next/lib/button';
import '@alifd/next/lib/button/style';
```

## 🔗 Advanced
-   [Use with Theme Package](./site/en-us/theme.md)
-   [Internationalization](./site/en-us/i18n.md)
-   [Deploy Font File](./site/en-us/font-deploy.md)

## 🌈 Contributing
-   [Contributing](./site/en-us/contributing.md)

## 📣 Join Group

Use [Dingtalk App](https://www.dingtalk.com/en) scan the Qrcode to join in _Dingtalk Group_ :

<img alt="Join the chat at dingtalk" src="https://img.alicdn.com/tfs/TB1iH9unxnaK1RjSZFtXXbC2VXa-1125-1485.jpg" width="300">
