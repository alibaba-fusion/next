# 使用自定义组件

- order: 16

你可以为传递自定义组件到 Slider 组件中。前提是该组件一定要开放透传 props 到下层组件或元素，Slider 底层需要执行元素的 clone 操作。

:::lang=en-us
# Use Custom Components in Slider

- order: 16

You can pass custom components to the Slider component. The premise is that the component must open transparently props to the underlying component or element, and the Slider needs to perform the clone operation of the element.

:::
---

````jsx
import { Slider } from '@alifd/next';
import PropTypes from 'prop-types';

const pages = [1, 2, 3, 4];

function Inner({ children, ...others }) {
    // Note that to transparently pass other attributes to the lower node, the Slider needs to perform the element's clone operation.
    return (
        <div {...others}>
            {children}
        </div>
    );
}

Inner.propTypes = {
    children: PropTypes.any,
};

const slider = (<Slider>
    {
        pages.map((page, index) => {
            return <Inner className="custom-inner" key={index}>custom {page}</Inner>;
        })
    }
</Slider>);

ReactDOM.render(<div>
    {slider}
</div>
    , mountNode);
````

````css
.custom-inner {
    background: #4F74B3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
}
````
