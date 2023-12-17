# 尺寸

- order: 2

ICON的尺寸包括：`xxs`，`xs`，`small`，`medium`，`large`，`xl`，`xxl`，`xxxl`, `inherit`。

:::lang=en-us
# Size

- order: 2

ICON's sizes include:`xxs`，`xs`，`small`，`medium`，`large`，`xl`，`xxl`，`xxxl`, `inherit`。

:::
---

````jsx
import { Icon } from '@alifd/next';

const sizes = ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'];
const inherit = 'inherit';
ReactDOM.render((
    <div>
        <ul className="icon-sizes">
            {sizes.map((size, index) => (
                <li key={index}>
                    <Icon type="smile" size={size} />
                    <span>{size}</span>
                </li>))}
        </ul>

        <span>{inherit}</span>
        <h4>
            Shall I compare thee to a summer's day? <Icon type="smile" size={inherit} /> <Icon type="set" size={inherit} />
        </h4>
        <h3>
            Thou art more lovely and more temperate. <Icon type="smile" size={inherit} /> <Icon type="set" size={inherit} />
        </h3>
        <h2>
           Rough winds do shake the darling buds of May,  <Icon type="smile" size={inherit} /> <Icon type="set" size={inherit} />
        </h2>
        <h1>
           And summer's lease hath all too short a date.  <Icon type="smile" size={inherit} /> <Icon type="set" size={inherit} />
        </h1>
    </div>
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
