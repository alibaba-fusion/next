# 字体文件私有化部署

`@alifd/next` 组件库默认引用的图标字体文件来自 at.alicdn.com，robot 字体文件来自 i.alicdn.com，如果你站点的用户无法访问上述 cdn 或者想将这些字体资源部署到内部网络，可以采取以下的方案：

## 图标字体文件
1. 替换表示图标字体文件路径的变量：

方法一、 直接使用主题包的 index.scss 文件

    在应用的 scss 入口处，引用主题包 index.scss 文件前，注入 $icon-font-path 变量：

    ``` scss
    $icon-font-path: "//g.alicdn.com/icon-font-path";
    @import "~@alifd/theme-xxx/index.scss";
    ```

方法二、 按需加载组件的 js/scss

    使用 @alifd/next-theme-loader，进行以下配置(以 webpack 2+ 为例)：

    ``` js
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          'fast-sass-loader',
          {
            loader: '@alifd/next-theme-loader',
            options: {
              theme: '@alifd/theme-xxx',
              modifyVars: {
                '$icon-font-path': '"//g.alicdn.com/icon-font-path"'
              }
            }
          }
        ]
      })
    }
    ```

2. 上传字体文件到静态资源服务器或者 cdn 上，如

`//g.alicdn.com/icon-font-path`，其下应有以下4个文件：

```
icon-font.eot
icon-font.woff
icon-font.ttf
icon-font.svg
```

**Note:** 图标字体文件地址可以在主题包里的 variables.scss 文件中获取：

![](https://img.alicdn.com/tfs/TB1u.I8qtknBKNjSZKPXXX6OFXa-620-329.png)

另外需要注意的是每次添加或替换图标，重新发布主题包后，该变量都会被更新，需要重新上传到自己的静态资源服务器。

如果你用到了主题包并自定义了icon，请务必去上述 `variables.scss` 文件中找到文件并下载；如果你没有自定义icon，可以使用[icon-font.zip](
https://alifd.oss-cn-hangzhou.aliyuncs.com/fonts/icon-font.zip)

## robot 字体文件
替换表示 roboto 字体文件路径的变量：

1. 直接使用主题包的 index.scss 文件

    在应用的 scss 入口处，引用主题包 index.scss 文件前，注入 $font-custom-path 变量：

    ``` scss
    // 注意，最后以 / 结束
    $font-custom-path: "//g.alicdn.com/font-path/";
    @improt "~@alifd/theme-xxx/index.scss";
    ```

2. 按需加载组件的 js/scss

    使用 @alifd/next-theme-webpack-plugin 进行如下配置：

    ``` js
    new ThemePlugin({
      theme: '@alifd/theme-xxx',
      modifyVars: {
        // 注意，最后以 / 结束
        '$font-custom-path': '"//g.alicdn.com/font-path/"'
      }
    })
    ```

上传字体文件到静态资源服务器或者 cdn 上，如

//g.alicdn.com/font-path/ 其下应有以下20个文件：

```
roboto-thin.eot
roboto-thin.woff
roboto-thin.woff2
roboto-thin.ttf
roboto-light.eot
roboto-light.woff
roboto-light.woff2
roboto-light.ttf
roboto-regular.eot
roboto-regular.woff
roboto-regular.woff2
roboto-regular.ttf
roboto-medium.eot
roboto-medium.woff
roboto-medium.woff2
roboto-medium.ttf
roboto-bold.eot
roboto-bold.woff
roboto-bold.woff2
roboto-bold.ttf
```

以上20个字体文件打包下载地址：[robot-font.zip](https://files.alicdn.com/tpsservice/31b61ac0c41fac383a1bffd154674347.zip)
