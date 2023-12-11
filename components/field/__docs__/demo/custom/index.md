# zh-CN order=10

# 自定义组件

自己的组件如何接入Field。

`最低标准`: 组件支持 `onChange` 读取组件数据。`达到效果`：Field 可以 getValue，但是 setValue 无效

`完全支持`: 组件支持[受控](https://facebook.github.io/react/docs/forms.html#controlled-components)， 也就是支持两个api：`value` `onChange`. value: 设置组件的数据; onChange: 在组件修改的时候在第一个数暴露数据

# en-US order=10

# custom

`must`: has api of `onChange`, so you can use `getValue` but you can't `setValue`
`perfect support`: has api of `value` `onChange`. value: set data for component; onChange: return first param for component
