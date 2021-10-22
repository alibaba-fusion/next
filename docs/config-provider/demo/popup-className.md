# 自定义弹层的类名

- order: 0

展示如何使用 ConfigProvider 设置 popupClassName.

:::lang=en-us
# popupClassName

- order: 0

Demo how to use ConfigProvider to set popupClassName.
:::

---

````jsx
import { ConfigProvider, Select, MenuButton, Range } from '@alifd/next';
import PropTypes from 'prop-types';

const { Option } = Select;
const { Item } = MenuButton;

class Demo extends React.Component {

    render() {
        return (
            <ConfigProvider popupClassName="custom1 custom2">
                <div>
                    <div className="popup-class-name-demo-panel">
                        <Select>
                            <Option value="Jack">Jack</Option>
                            <Option value="Rose">Rose</Option>
                        </Select>
                    </div>
                    <div className="popup-class-name-demo-panel">
                        <MenuButton label="Menu">
                            <Item value="Jack">Jack</Item>
                            <Item value="Rose">Rose</Item>
                        </MenuButton>
                    </div>
                    <div className="popup-class-name-demo-panel">
                        <Range defaultValue={30} />
                    </div>
                </div>
            </ConfigProvider>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

```` css
.popup-class-name-demo-panel {
    margin-bottom: 10px;
}
````
