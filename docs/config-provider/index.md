# ConfigProvider

-   category: Components
-   family: Util
-   chinese: 全局配置 Next 组件
-   type: 基本

---

## 开发指南

### 何时使用

-   修改组件类名前缀，Next 组件类名的默认前缀都是 'next-'，如 'next-btn'，你可能在以下两种情况下想改变这个默认前缀：
    -   自定义组件品牌，如 'my-btn'，'my-select'
    -   一个页面中同时引入两个主题，防止相同类名样式互相覆盖
-   实现多语言文案切换
-   开启 Pure Render 模式，提高性能，注意同时可能会带来副作用

### 基本使用

#### 指定多语言文案

通过 `<ConfigProvider locale={localeObj}>` 传入语言包，以支持多语言。目前 Fusion 内置的 locale 库支持中英繁日四种语言，覆盖各组件的简单词汇，例如：确定、取消、展开、收起、下一页等， 简单词汇映射表可参考 <https://unpkg.com/@alifd/next/lib/locale/>
<br />
(ConfigProvider 提供简单组件简单词汇国际化能力，由于日期时间的国际化较为特殊，例如中国的日历是从周一到周日，美国的日历是从周日到周六等，时间相关的组件如DatePicker等需要国际化，请查看相应组件文档。)
<br />

可通过两种方式设置多语言文案，两种方式接收的对象格式略有不同:

-   1.设置组件自身 locale 属性

```jsx
{
    key1: value1,
    key2: value2
}
```

-   2.ConfigProvider 的 locale 属性 (推荐)

```jsx
{
    component1: {
        key1: value1,
        key2: value2
    },
    component2: {
        key1: value1,
        key2: value2
    }
}
```

优先级顺序为: 组件自身 locale > 最近 ConfigProvider 的 locale > 更远父级 ConfigProvider 的 locale

(注： 由于`Dialog.show()` `Message.show()` 等函数式方法的特殊性，他们的将默认读取页面上的root context。当页面上有多个包含`<ConfigProvider/>` 的 `ReactDOM.render()`方法调用时，由第一个渲染的决定root context)

```js
import { ConfigProvider, DatePicker } from '@alifd/next';

const localeDatePicker = {
  placeholder: 'localeDatePicker placeholder'
};

const localeGlobal = {
  DatePicker: {
    placeholder: 'localeGlobal placeholder'
  }
};

class App extends React.Component {
    render() {
        return (
            <div>
                <ConfigProvider locale={localeGlobal}>
                    <DatePicker /> should be 'localeGlobal placeholder'
                </ConfigProvider>
                <br />
                <br />
                <ConfigProvider locale={localeGlobal}>
                    <DatePicker locale={localeDatePicker} /> should be 'localeDatePicker placeholder'
                </ConfigProvider>
            </div>
        );
    }
}
```

根据引入组件库方式的不同(CDN直接引用、作为依赖引用)，使用语言包的方式略有差异，具体见如下代码：
<br />

```js
import { ConfigProvider, DatePicker } from '@alifd/next';
import enUS from '@alifd/next/lib/locale/en-us';
// import zhCN from '@alifd/next/lib/locale/zh-cn';
// import zhTW from '@alifd/next/lib/locale/zh-tw';
// import jaJP from '@alifd/next/lib/locale/ja-jp';

// 如果应用中直接引入的是 cdn 上的 next-with-locales.js 文件
// 需要按照下面的方式引入国际化文案文件
// const { ConfigProvider, DatePicker, locales } = window.Next;
// const enUS = locales['en-us'];


class App extends React.Component {
    render() {
        return (
            <ConfigProvider locale={enUS}>
                <DatePicker />
            </ConfigProvider>
        );
    }
}
```

如果内置的 locale 库不满足你的需求(比如想支持法语、德语、西班牙语)，你也可以参考 <https://unpkg.com/@alifd/next/lib/locale/> 来自定义语言包，按照如下格式传入给 locale 即可：

```js
{
    DatePicker: {
        datePlaceholder: 'Select date',
        monthPlaceholder: 'Select month',
        yearPlaceholder: 'Select year',
        rangeStartPlaceholder: 'Start date',
        rangeEndPlaceholder: 'End date',
        ok: 'OK',
        clear: 'Clear'
    },
    Dialog: {
        // ...
    },
    // ...
}
```

#### 修改组件类名前缀

1.  为你的应用包裹 ConfigProvider，并设置相应的 prefix

    entry.jsx

    ```js
    class App extends React.Component {
        render() {
            return (
                <ConfigProvider prefix="my-">
                    <div>
                        <Input />
                        <Button>Submit</Button>
                    </div>
                </ConfigProvider>
            );
        }
    }
    ```

2.  scss 入口文件中在引入主题 scss 文件前，设置相应的 `$css-prefix`

    entry.scss

    ```scss
    $css-prefix: "my-";
    @import "~@alifd/theme-xxx/index.scss";
    ```

#### 开启 Pure Render

```js
import { ConfigProvider, DatePicker } from '@alifd/next';

class App extends React.Component {
    render() {
        return (
            <ConfigProvider pure>
                <DatePicker />
            </ConfigProvider>
        );
    }
}
```

#### 如何让组件支持 ConfigProvider ？

```js
import { ConfigProvider } from '@alifd/next';
import locale from './locale';

const { config } = ConfigProvider;

class Component extends React.Component {
    static propTypes = {
        prefix: PropTypes.string,
        locale: PropTypes.object,
        pure: PropTypes.bool
    };

    static defaultProps = {
        prefix: 'next-',
        locale: locale,
        pure: false
    };

    render() {
        const { prefix, locale, pure } = this.props;
        // ...
    }
}

export default config(Component);
```

## API

### ConfigProvider

| 参数             | 说明                                                                                                                                                                                                     | 类型              | 默认值   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ----- |
| errorBoundary  | 是否开启错误捕捉 errorBoundary<br>如需自定义参数，请传入对象 对象接受参数列表如下：<br><br>fallbackUI `Function(error?: {}, errorInfo?: {}) => Element` 捕获错误后的展示<br>afterCatch `Function(error?: {}, errorInfo?: {})` 捕获错误后的行为, 比如埋点上传 | Boolean/Object  | false |
| pure           | 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用                                                                                                                                                                    | Boolean         | -     |
| warning        | 是否在开发模式下显示组件属性被废弃的 warning 提示                                                                                                                                                                          | Boolean         | true  |
| rtl            | 是否开启 rtl 模式                                                                                                                                                                                            | Boolean         | -     |
| device         | 设备类型，针对不同的设备类型组件做出对应的响应式变化<br><br>**可选值**:<br>'tablet', 'desktop', 'phone'                                                                                                                             | Enum            | -     |
| children       | 组件树                                                                                                                                                                                                    | any             | -     |
| popupContainer | 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数                                                                                                                                                                     | String/Function | -     |

<!-- api-extra-start -->

### ConfigProvider.config(Component)

传入组件，生成受 ConfigProvider 控制的 HOC 组件，如果组件没有声明 shouldComponentUpdate 方法，会添加如下 shouldComponentUpdate 方法以支持 ConfigProvider 的 pure 属性

```js
Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.pure) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }

    return true;
};
```

### ConfigProvider.getContextProps(props, displayName)

传入组件的 props 和 displayName，得到和 childContext 计算过的包含有 preifx/locale/pure 的对象，一般用于通过静态方法生成脱离组件树的组件。

### ConfigProvider.getContext()

通过该方法可以获取到 ConfigProvider 的上下文，格式如下。若有多层级 ConfigProvider 嵌套，会返回merge后的结果，关系近的优先。

```js
{
    prefix: nextPrefix,
    locale: nextLocale,
    pure: nextPure,
    warning: nextWarning
}
```

### ConfigProvider.initLocales(locales)

配置所有语言包, 可配合 `ConfigProvider.setLanguage` 方法，确定组件使用的语言包。

```js
ConfigProvider.initLocales({
    'zh-cn': {},
    'en-us': {}
});
```

### ConfigProvider.setLanguage(language)

设置语言，参数 `language` 需要能在 `ConfigProvider.initLocales` 方法传入的参数的 key 中找到， 默认为 `zh-cn`

```js
ConfigProvider.setLanguage('zh-cn');
```

### ConfigProvider.setLocale(locale)

直接设置语言包

```js
// 相当于 同时用ConfigProvider.initLocales 和 ConfigProvider.setLanguage
ConfigProvider.setLocale({
    DatePicker: {},
    Dialog: {}
});
```

### ConfigProvider.setDirection(dir)

设置组件展示方向，当传入 `rtl`时，会在组件的根DOM节点加上 `dir="rtl"`，同时组件展示rtl视觉。可用于阿拉伯等阅读顺序从右到左的国家。

```js
ConfigProvider.setDirection('rtl');
```

### ConfigProvider.getLocale()

获取当前的语言包

### ConfigProvider.getLanguage()

获取当前设定的语言

### ConfigProvider.getDirection()

获取当前设定的方向

<!-- api-extra-end -->

## 使用注意

### 减小应用中 webpack 打包 moment 体积

Next 1.x 中将 moment 作为自己的 peerDependencies 而非 dependencies，所以用户需要自己在应用中引入 moment 的 cdn 文件 moment-with-locales.js 或者本地安装 moment 打包进自己的应用。对于后者，由于 moment 在引入 locale 文件时存在这样的代码：`require('./locale/' + name)`，如果用 webpack 构建，会打包进所有的 [locale 文件](https://github.com/moment/moment/tree/develop/locale)，增加构建后文件的体积，目前社区比较主流的解决方案有以下两种：

```js
const webpack = require('webpack');

module.exports = {
    // ...
    plugins: [
    // 打包指定需要的语言文件
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn|ja/)
    // 只打包有过引用的语言文件，应用中需要添加如：`import 'moment/locale/zh-cn';`
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
};
```

### 为自定义组件添加 displayName

ConfigProvider 获取组件对应的多语言文案，是通过组件的 displayName 或者 name 获取的，但是压缩混淆的过程中有可能会修改函数的 name，因此如果想支持在 ConfigProvider 下实现切换多语言切换，请为组件如下手动添加 displayName:

```js
class CustomComponent extends React.Component {
	static displayName = 'CustomComponent';
	// ...
}
```

或者使用 `babel-plugin-transform-react-es6-displayname` 自动在编译期间添加 displayname。

### 获取 HOC 组件内部组件的引用

由于 HOC 本身的限制，我们不能直接像下面代码那样获取内部组件的引用，从而调用它的一些内部方法：

```js
class App extends React.Component {
    componentDidMount() {
        // 报错
        this.refs.hoc.someMethod();
    }

    render() {
        return <HOC ref="hoc" />;
    }
}
```

为了解决这个问题，我们为调用 config 方法生成的 HOC 组件添加了 getInstance 方法，你可以如下调用：

```js
class App extends React.Component {
    componentDidMount() {
        this.refs.hoc.getInstance().someMethod();
    }

    render() {
        return <HOC ref="hoc" />;
    }
}
```
