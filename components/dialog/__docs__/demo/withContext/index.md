# zh-CN order=7

# 国际化 withContext

通过 `Dialog.withContext(({ contextDialog }) => {} )`方法，封装 使用到函数式调用弹窗 的组件（例如业务组件或者当前App等），可以将 被封装组件 代码所在上下文的`context`注入到`context` `Dialog`中。

相比较`Dialog.alert()`获取到的是当前页面第一次被记录且未被卸载`的context`，`contextDialog.alert()`获取到的是 下例中`< DialogWitchContext />` 所在代码环境的`context`。

`contextDialog`上可被调用的方法有`alert` `confirm` `show`，注意`contextDialog`只有`Dialog`的函数式调用方法，它不能像 `<Dialog />` 一样被使用。

# en-US order=7

# withContext

Use `Dialog.withContext` to render Dialog imperatively. It is recommended over `Dialog.alert/confirm/show` because it get fusion config(.e.g prefix, locale) from context.
