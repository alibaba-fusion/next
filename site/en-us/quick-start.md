# Quick Start

`@alifd/next` is a configurable component library for PC in Fusion Design. It is based on React and supports all modern browsers and IE9+.

## Install

### 1.Use NPM ( Recommend )

```
npm install @alifd/next --save
```

### 2.Import in Browser

Use the script and link tags in the browser to directly import the file and use the global variable Next. We provide files such as next.js/next.min.js and next.css/next.min.css in the `@alifd/next/dist` directory in the npm package, or via [unpkg](https:/ /unpkg.com/@alifd/next/dist/) Download it.

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

to

``` js
import Button from '@alifd/next/lib/button';
import '@alifd/next/lib/button/style';
```


## Release Schedule

Follow [Semantic Versioning 2.0.0](https://semver.org/) Semantic Version Strategy.

Patch Version: Every Wednesday release of a bugfix version(anytime for urgent bugfix).

Minor Version: Monthly release of a backward compatible version with new features.

Major version: contains some break changes, usually one to two years release of a version.
