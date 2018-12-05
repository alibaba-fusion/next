# 自定义百分比信息

- order: 7

`textRender` 控制百分比信息的展示,通过自定义`textRender`个性化百分比渲染. 下面给一个 百分比进度取2位,当达到100%是显示Icon的progressbar.


:::lang=en-us
# Custom Percentage

- order: 7

we can define how Percentage text to display by using `textRender`.
The exapme below will show a progressbar with accuracy of 2 decimal places and done icon when reached 100%.
:::

---

````jsx
import { Progress, Icon } from '@alifd/next';

const textRender = percent => {
    if (percent === 100) {
        return <Icon type="select" size="medium" />;
    }
    return `${percent.toFixed(2)}%`;
};

ReactDOM.render(<div>
    {[1, 2, 3, 4, 5, 6].map((value, index) => <Progress key={index} percent={value / 6 * 100} shape="circle" color={`hsl(${index * 60 + 60}, 90%, 50%)`} textRender={textRender}/>)}
    {[1, 2, 3, 4, 5, 6].map((value, index) => <Progress key={index} percent={value / 6 * 100} shape="line" color={`hsl(${index * 60 + 60}, 90%, 50%)`} textRender={textRender}/>)}
</div>, mountNode);
````
