# Next Components

`@alifd/next` is a configurable component library for PC in Fusion Design. It is based on React and supports all modern browsers and IE9+.

[中文 README](./README.zh-cn.md)

[![npm package](https://img.shields.io/npm/v/@alifd/next.svg?style=flat-square)](https://www.npmjs.org/package/@alifd/next)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Build Status](https://travis-ci.com/alibaba-fusion/next.svg?token=KAYresHL1UPaaLzUYyx6&branch=master)](https://travis-ci.com/alibaba-fusion/next)
[![codecov](https://codecov.io/gh/alibaba-fusion/next/branch/master/graph/badge.svg?token=FSufKVDhmT)](https://codecov.io/gh/alibaba-fusion/next)

# Why use

`@alifd/next` usually used with [Fusion Design](https://fusion.design) to improving designer-developer collaboration and development efficiency. Designer can customize the UI of components and release an npm theme package. Developer can use this theme package directly, and don't need to care about the UI refactoring. It saves the workload of reductive degree review repeatedly with designers, and greatly improves the development efficiency.

![](https://img.alicdn.com/tfs/TB1DrcbGQvoK1RjSZFwXXciCFXa-1300-488.png)

# Quick Start

## Install

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

## Dependencies

* `@alifd/next` is based on `react@16` development and is currently not compatible with versions below `react@16`. react/react-dom is used as peerDependencies, which requires the user to manually install or import it.
* `@alifd/next` use [moment](https://github.com/moment/moment) library to implement date-time related component. moment is also used as peerDependencies, which requires the user to manually install or import it.

## Import

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

## Advanced
-   [Use with Theme Package](./site/en-us/theme.md)
-   [Internationalization](./site/en-us/i18n.md)
-   [Deploy Font File](./site/en-us/font-deploy.md)

## Contributing
-   [Contributing](./site/en-us/contributing.md)

## Join Group

Use [Dingtalk App](https://www.dingtalk.com/en) scan the Qrcode to join in _Dingtalk Group_ :

<img alt="Join the chat at dingtalk" src="https://img.alicdn.com/tfs/TB1iH9unxnaK1RjSZFtXXbC2VXa-1125-1485.jpg" width="300">
