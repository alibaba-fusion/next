# 等级提示

- order: 5

添加 `showGrade` 属性，使评分组件具有等级提示信息。

:::lang=en-us
# Grade Prompt

- order: 5

Rating component display grade tips when you set  `showGrade` attribute.

:::
---

````jsx
import { Rating } from '@alifd/next';

const starMap = {
    1: 'Bad',
    2: 'OK',
    3: 'Good',
    4: 'Great',
    5: 'Perfect'
};

ReactDOM.render(
    <Rating 
        defaultValue={2} 
        showGrade
        readAs={(val) => starMap[val]} 
    />, mountNode);
````
