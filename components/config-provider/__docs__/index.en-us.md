# ConfigProvider

-   category: Components
-   family: Util
-   chinese: 全局配置 Next 组件
-   type: 基本

---

## Guide

### When To Use

-   Modify the component class name prefix, the default prefix of the Next component class name is 'next-', such as 'next-btn', you may want to change this default prefix in the following two cases:
    -   Custom component brands such as 'my-btn', 'my-select'
    -   Two themes in a page at the same time, preventing the same class name from overwriting each other
-   Support multiple languages
-   Enable Pure Render mode to improve performance, and note that it may have side effects

### Basic Usage

#### Specify language

Now support four languages: Simplified Chinese, Traditional Chinese, English and Japanese.

```js
import { ConfigProvider, DatePicker } from '@alifd/next';
import enUS from '@alifd/next/lib/locale/en-us';
// import zhCN from '@alifd/next/lib/locale/zh-cn';
// import zhHK from '@alifd/next/lib/locale/zh-hk';
// import zhTW from '@alifd/next/lib/locale/zh-tw';
// import jaJP from '@alifd/next/lib/locale/ja-jp';

// If the application directly imports the next-with-locales.js file from cdn
// it need to import locale file in the following way
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

The passed locale object has the following format:

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

#### Modify the component class name prefix

1.  Wrapper ConfigProvider for your application and set the custom prefix

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

2.  Set the `$css-prefix` to the same value before importing the theme scss file in the scss entry file.

    entry.scss

    ```scss
    $css-prefix: 'my-';
    @import '~@alifd/theme-xxx/index.scss';
    ```

#### Enable Pure Render

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

#### How to make the component support ConfigProvider ？

```js
import { ConfigProvider } from '@alifd/next';
import locale from './locale';

const { config } = ConfigProvider;

class Component extends React.Component {
    static propTypes = {
        prefix: PropTypes.string,
        locale: PropTypes.object,
        pure: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        locale: locale,
        pure: false,
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

| Param              | Description                                                                                         | Type                   | Default Value | Required |
| ------------------ | --------------------------------------------------------------------------------------------------- | ---------------------- | ------------- | -------- |
| prefix             | Prefix of component className                                                                       | string                 | -             |          |
| pure               | Enable the Pure Render mode, it will improve performance, but it will also have side effects        | boolean                | -             |          |
| device             | Responsive of device                                                                                | DeviceType             | -             |          |
| rtl                | Enable right to left mode                                                                           | boolean                | -             |          |
| errorBoundary      | Turn errorBoundary on or not                                                                        | ErrorBoundaryType      | false         |          |
| warning            | Whether to display the warning prompt for component properties being deprecated in development mode | boolean                | true          |          |
| locale             | Locale object for components                                                                        | Partial<Locale>        | -             |          |
| popupContainer     | Shell container node                                                                                | PopupContainerType     | -             |          |
| children           | Children nodes                                                                                      | React.ReactNode        | -             |          |
| defaultPropsConfig | Set default props of components in batches                                                          | Record<string, object> | -             |          |

### DeviceType

```typescript
export type DeviceType = 'tablet' | 'desktop' | 'phone';
```

### PopupContainerType

```typescript
export type PopupContainerType = string | HTMLElement | ((target: HTMLElement) => HTMLElement);
```

<!-- api-extra-start -->

### ConfigProvider.config(Component)

Pass the component and generate the HOC that is controlled by the ConfigProvider. If the component does not declare the shouldComponentUpdate method, the following shouldComponentUpdate method is added to support the pure property of the ConfigProvider.

```js
Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.pure) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }

    return true;
};
```

### ConfigProvider.getContextProps(props, displayName)

Pass the props and displayName of the component to get the object containing preifx/locale/pure calculated by childContext, it is generally used to generate components that are separated from the component tree through static methods.

### ConfigProvider.getContext()

You can get the context of ConfigProvider via this method. The format of the value returned as follows. For multiple ConfigProvider nested, the results will be merged and the nearer the higher priority。

```jsx
{
    prefix: nextPrefix,
    locale: nextLocale,
    pure: nextPure,
    warning: nextWarning
}
```

### ConfigProvider.initLocales(locales)

Config locales, together with method `ConfigProvider.setLanguage` to specify the language package

```js
ConfigProvider.initLocales({
    'zh-cn': {},
    'en-us': {},
});
```

### ConfigProvider.setLanguage(language)

Set language, the parameter `language` needs to be one of the keys of `locales` which is the input of `ConfigProvider.initLocales`. `zh-cn` by default.

```js
ConfigProvider.setLanguage('zh-cn');
```

### ConfigProvider.setLocale(locale)

Set language package directly.

```js
// The effect is the same as using ConfigProvider.initLocales and ConfigProvider.setLanguage
ConfigProvider.setLocale({
    DatePicker: {},
    Dialog: {},
});
```

### ConfigProvider.setDirection(dir)

Set dir, when it is `rtl`, `dir="rtl"` will be added on the DOM element of each component's root node.

```js
ConfigProvider.setDirection('rtl');
```

### ConfigProvider.getLocale()

Return the setted language package.

### ConfigProvider.getLanguage()

Return the language's name.

### ConfigProvider.getDirection()

Return the direction.

<!-- api-extra-end -->

## Note

### Reduce moment size built with webpack

Next 1.x will use moment as its peerDependencies instead of dependencies, so the user needs to import the moment's cdn file moment-with-locales.js or the local moment module into his own application. For the latter, due to the moment has such code: `require('./locale/' + name)` to import locale files, if built with webpack, it will be packaged into all [locale files](https://github.com/moment/moment/tree/develop/locale) to increase the size of files. There are two main solutions in the current community:

```js
const webpack = require('webpack');

module.exports = {
    // ...
    plugins: [
        // Package the specified language files
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn|ja/),
        // Only package the language files referenced, and should add `import 'moment/locale/zh-cn';` in the application
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
};
```

### Add displayName for the custom component

ConfigProvider use a Component's displayName or name to get its locale. However, the name of the function may be modified in the process of compression and uglifying. Therefore, if you want to support multi-language, you shoul add displayName to the component manually:

```js
class CustomComponent extends React.Component {
    static displayName = 'CustomComponent';
    // ...
}
```

Or use `babel-plugin-transform-react-es6-displayname` to add displayName during compilation automatically.

### Get the internal component's reference of the HOC

Due to the limit of the HOC itself, we can't get the reference of an internal component and call some of its internal methods as below:

```js
class App extends React.Component {
    componentDidMount() {
        // throw an error
        this.refs.hoc.someMethod();
    }

    render() {
        return <HOC ref="hoc" />;
    }
}
```

To solve this problem, we provide a method called getInstance of the HOC generated by calling the config method. You can call it as below:

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
