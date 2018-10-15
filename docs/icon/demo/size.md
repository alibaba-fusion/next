# 尺寸

- order: 2

ICON的尺寸包括：`xxs`，`xs`，`small`，`medium`，`large`，`xl`，`xxl`，`xxxl`。

:::lang=en-us
# Size

- order: 2

ICON's sizes include:`xxs`，`xs`，`small`，`medium`，`large`，`xl`，`xxl`，`xxxl`。

:::
---

````jsx
import { Icon } from '@alifd/next';

const sizes = ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'];

ReactDOM.render((
    <ul className="icon-sizes">
        {sizes.map((size, index) => (
            <li key={index}>
                <Icon type="smile" size={size} />
                <span>{size}</span>
            </li>))}
    </ul>
), mountNode);

````

````css
.icon-sizes {
    margin: 0;
    padding: 0;
    list-style: none;
}

.icon-sizes li {
    display: inline-block;
    width: 80px;
    height: 80px;
}

.icon-sizes i {
    display: block;
    margin: 12px auto 0 auto;
    text-align: center;
}

.icon-sizes span {
    display: block;
    margin-top: 10px;
    text-align: center;
}
````
