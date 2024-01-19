import React from 'react';
import ReactDOM from 'react-dom';
import { Radio, Checkbox, Menu, Divider, Box } from '@alifd/next';

const { SubMenu, Item } = Menu;

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectMode: undefined,
            multiple: false,
            isSelectIconRight: false,
            selectedKeys: ['1'],
        };
    }

    handleIconDirectionChange = () => {
        this.setState({
            isSelectIconRight: !this.state.isSelectIconRight,
        });
    };

    onSelectModeChange = selectMode => {
        console.log(selectMode, '=======');
        this.setState({
            selectMode,
        });
    };

    handleSelect = (selectedKeys, ...others) => {
        this.setState({
            selectedKeys,
        });

        console.log(selectedKeys, ...others);
    };

    render() {
        const { selectMode, selectedKeys, isSelectIconRight } = this.state;

        return (
            <div>
                <Radio.Group value={selectMode} onChange={this.onSelectModeChange}>
                    <Radio value="single">单选带符号</Radio>
                    <Radio value={undefined}>单选不带符号(默认)</Radio>
                    <Radio value="multiple">多选</Radio>
                </Radio.Group>
                <br />
                {selectMode ? (
                    <Checkbox checked={isSelectIconRight} onChange={this.handleIconDirectionChange}>
                        切换标记位置 (默认在左)
                    </Checkbox>
                ) : null}
                <br />
                <Menu
                    isSelectIconRight={isSelectIconRight}
                    className="my-select-menu"
                    defaultOpenKeys={['sub']}
                    selectMode={selectMode}
                    selectedKeys={selectedKeys}
                    onSelect={this.handleSelect}
                >
                    <Item key="1">Option 1</Item>
                    <Item disabled key="2">
                        Disabled option 2
                    </Item>
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
