# 无障碍

- order: 5

组件内置了部分支持无障碍, 但是额外需要开发者手动事情才能完整支持无障碍：给 Rating 传入一个id，就可以支持语音提示当前选择的评分。注意：如果一个页面上有多个 Rating，id 属性一定不能相同。

:::lang=en-us
# Accessibility

- order: 5

To Support accessibility, you should assign an id prop to Rating. Notice: Don't assign same id prop for more than one Rating.

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
ReactDOM.render(<div>
    <Rating
        id="rating-a11y-1"
        defaultValue={3}
        readAs={(val) => starMap[val]}
        onChange={val => console.log('change:', val)}
        onHoverChange={val => console.log('hover:', val)} />
</div>, mountNode);
````
