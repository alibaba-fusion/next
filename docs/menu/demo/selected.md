# 选择与选中

- order: 5

展示菜单项选择用法。
> - 单选带符号：一般用于 `Select` `CascaderSelect` 等单选模式下，需要数据返显，二次查看确认的组件中；
> - 单选不带符号：一般用于导航等，不需要数据返显的组件中；
> - 多选：必须要带符号

:::lang=en-us
# Menu item selection

- order: 5

Demo the usage of menu item selection.
:::

---

````jsx
import { Radio, Checkbox, Menu, Divider, Box } from '@alifd/next';

const { SubMenu, Item } = Menu;

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectMode: undefined,
            multiple: false,
            isSelectIconRight: false,
            selectedKeys: ['1']
        };
    }

    handleIconDirectionChange = () => {
        this.setState({
            isSelectIconRight: !this.state.isSelectIconRight,
        });
    }

    onSelectModeChange = (selectMode) => {
        console.log(selectMode, '=======');
        this.setState({
            selectMode,
        });
    }

    handleSelect = (selectedKeys, ...others) => {
        this.setState({
            selectedKeys
        });

        console.log(selectedKeys, ...others);
    }

    render() {
        const { selectMode, selectedKeys, isSelectIconRight } = this.state;

        return (
            <div>
                <Radio.Group value={selectMode} onChange={this.onSelectModeChange}>
                    <Radio value="single">单选带符号</Radio>
                    <Radio value={undefined}>单选不带符号(默认)</Radio>
                    <Radio value="multiple">多选</Radio>
                </Radio.Group>
                <Checkbox checked={isSelectIconRight} onChange={this.handleIconDirectionChange}>
                    切换标记位置 (默认在左)
                </Checkbox>

                <Menu isSelectIconRight={isSelectIconRight} className="my-select-menu" defaultOpenKeys={['sub']} selectMode={selectMode} selectedKeys={selectedKeys} onSelect={this.handleSelect}>
                    <Item key="1">Option 1</Item>
                    <Item disabled key="2">Disabled option 2</Item>
                    <SubMenu key="sub" label="Sub menu">
                        <Item key="sub-1">Sub option 1</Item>
                        <Item key="sub-2">Sub option 2</Item>
                    </SubMenu>
                    <Item key="3">Option 3</Item>
                </Menu>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.my-select-menu {
    margin-top: 10px;
    width: 200px;
}
````
