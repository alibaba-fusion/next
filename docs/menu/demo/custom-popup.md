# 自定义弹出内容

- order: 5

自定义菜单弹出内容。

:::lang=en-us
# Customize pop up content

- order: 5

Demo how to customize pop up content.
:::

---

````jsx
import { Menu } from '@alifd/next';

const { PopupItem } = Menu;

class Demo extends React.Component {
    render() {
        const popupProps = {
            target: () => ReactDOM.findDOMNode(this),
            offset: [-1, 0],
            animation: false
        };

        return (
            <Menu className="my-custom-menu" popupProps={popupProps}>
                <PopupItem key="0" label="Popup item 1">
                    <div className="my-custom-content">Custom content 1</div>
                </PopupItem>
                <PopupItem key="1" label="Popup item 2">
                    <div className="my-custom-content">Custom content 2</div>
                </PopupItem>
                <PopupItem key="2" label="Popup item 3">
                    <div className="my-custom-content">Custom content 3</div>
                </PopupItem>
                <PopupItem key="3" label="Popup item 4">
                    <div className="my-custom-content">Custom content 4</div>
                </PopupItem>
            </Menu>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.my-custom-menu {
    width: 200px;
    border: 1px solid #ccc;
    padding: 0;
    box-shadow: none;
    z-index: 1000;
}

.my-custom-content {
    width: 400px;
    height: 200px;
    background: #fff;
    border: 1px solid #ccc;
    line-height: 200px;
    text-align: center;
    font-size: 20px;
}
````
