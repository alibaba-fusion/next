# Deploy font file

In `@alifd/next`, the icon font file is from at.alicdn.com, and the robot font file is from i.alicdn.com. If users of your site cannot access the above cdn assets or you want to deploy these font assets to the internal network. The following options can be taken:

## Icon Font file
1. replace the variable that represents the path to the icon font file:

Choice one: use the index.scss of the theme package directly

    at the application's scss entry, inject the $icon-font-path variable before importing the index.scss of the theme package:

    ``` scss
    $icon-font-path: "//g.alicdn.com/icon-font-path";
    @import "~@alifd/theme-xxx/index.scss";
    ```

Choice two. modular import js/scss

    use @alifd/next-theme-loader(with webpack 2+ as an example):

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

2. Upload the font file to the static resource server or cdn, such as

//g.alicdn.com/icon-font-path, which should have the following 4 files:

```
icon-font.eot
icon-font.woff
icon-font.ttf
icon-font.svg
```

**Note:** the icon font file address can be found in the variables.scss of the theme package:

![](https://img.alicdn.com/tfs/TB1u.I8qtknBKNjSZKPXXX6OFXa-620-329.png)

Another thing to note is that each time you add or replace an icon, after re-publishing the theme package, the icon variables will be updated and the icon font file will need to be re-uploaded to your own static resource server.


If you add custom icons with theme package, please search `variables.scss` for icon-font-path;
Otherwise you can use [icon-font.zip](
https://alifd.oss-cn-hangzhou.aliyuncs.com/fonts/icon-font.zip)


## Robot Font File
replace the variable that represents the path to the roboto font file:

1. use the index.scss of the theme package directly

    at the application's scss entry, inject the $font-custom-path variable before importing the index.scss of the theme package:

    ``` scss
    // Note, finally end with /
    $font-custom-path: "//g.alicdn.com/font-path/";
    @improt "~@alifd/theme-xxx/index.scss";
    ```

2. modular import js/scss

    use @alifd/next-theme-webpack-plugin:

    ``` js
    new ThemePlugin({
      theme: '@alifd/theme-xxx',
      modifyVars: {
        // Note, finally end with /
        '$font-custom-path': '"//g.alicdn.com/font-path/"'
      }
    })
    ```

Upload the font file to the static resource server or cdn, such as

//g.alicdn.com/font-path, which should have the following 20 files:

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

The above 20 font files are packaged: [robot-font.zip](https://files.alicdn.com/tpsservice/31b61ac0c41fac383a1bffd154674347.zip)
