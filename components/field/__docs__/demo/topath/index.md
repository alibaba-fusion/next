# zh-CN order=11

# 结构化解析

通过配置 `parseName=true`，可以实现如下效果：

把 `init('obj.b')` 的数据转换成 `obj={obj:{b:'value'}}`；

把 `init('arr.0')` 的数据转换成 `obj={arr:['']}`；

# en-US order=11

# Parse Array or Object

By pass `parseName=true` you can achieve the following effects:

from `init('obj.b')` to `obj={obj:{b:'value'}}`；

from `init('arr.0')` to `obj={arr:['']}`；
