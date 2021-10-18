# 弹层

- order: 0

展示如何使用ConfigProvider设置popupClassName。

:::lang=en-us
# OverLay

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
            <ConfigProvider popupClassName="customer1 customer2">
                <div>
                    <div className="panel">
                        <Select>
                            <Option value="Jack">Jack</Option>
                            <Option value="Rose">Rose</Option>
                        </Select>
                    </div>
                    <div className="panel">
                        <MenuButton label="Menu">
                            <Item value="Jack">Jack</Item>
                            <Item value="Rose">Rose</Item>
                        </MenuButton>
                    </div>
                    <div className="panel">
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
.panel {
    margin-bottom: 10px;
}
````
