# 使用其他源的图标

- order: 5

直接使用 iconfont 源扩展icon，且不使用定制主题包的方式，支持svg图标

:::lang=en-us
# Extend icon

- order: 5

Extend icon without theme package
:::
---

````jsx
import { Icon } from '@alifd/next';

const sizes = ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'];

const CustomIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js',
});

ReactDOM.render(
    <div>
        <div className="icon-list">
            <CustomIcon type="icon-store"/>
            <CustomIcon type="icon-pic"/>
            <CustomIcon type="icon-gift"/>
        </div>
        <br/>
        <ul className="icon-sizes">
            {sizes.map((size, index) => (
                <li key={index}>
                    <CustomIcon type="icon-pic" size={size} />
                    <span>{size}</span>
                </li>))}
        </ul>
    </div>, mountNode);
````
````css
.icon-list i {
    margin: 0 10px;
}
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

