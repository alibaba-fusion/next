import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Menu } from '@alifd/next';
import type { MenuProps } from '../../../types';

const { SubMenu, Item } = Menu;

class Demo extends React.Component {
    state = {
        multiple: false,
        subMenuSelectable: false,
        shallowSelect: false,
        isSelectIconRight: false,
        selectedKeys: ['1'],
    };

    handleMultipleChange = () => {
        this.setState({
            multiple: !this.state.multiple,
            selectedKeys: [],
        });
    };

    handleIconDirectionChange = () => {
        this.setState({
            isSelectIconRight: !this.state.isSelectIconRight,
            selectedKeys: [],
        });
    };

    handleSubMenuSelectableChange = () => {
        this.setState({
            subMenuSelectable: !this.state.subMenuSelectable,
            selectedKeys: [],
        });
    };

    handleShallowSelectChange = () => {
        this.setState({
            shallowSelect: !this.state.shallowSelect,
            selectedKeys: [],
        });
    };

    handleSelect: MenuProps['onSelect'] = (selectedKeys, ...others) => {
        this.setState({
            selectedKeys,
        });

        console.log(selectedKeys, ...others);
    };

    render() {
        const { multiple, subMenuSelectable, shallowSelect, selectedKeys, isSelectIconRight } =
            this.state;
        const selectMode = multiple ? 'multiple' : 'single';

        return (
            <div>
                <div>
                    <span className="my-switch-label">Multiple </span>
                    <Switch checked={multiple} onChange={this.handleMultipleChange} />
                </div>
                <div>
                    <span className="my-switch-label">isSelectIconRight </span>
                    <Switch checked={multiple} onChange={this.handleIconDirectionChange} />
                </div>
                <div>
                    <span className="my-switch-label">Label of submenu selectable </span>
                    <Switch checked={multiple} onChange={this.handleSubMenuSelectableChange} />
                </div>
                <div>
                    <span className="my-switch-label">Only first level selectable </span>
                    <Switch checked={multiple} onChange={this.handleShallowSelectChange} />
                </div>
                <Menu
                    isSelectIconRight={isSelectIconRight}
                    className="my-select-menu"
                    defaultOpenKeys={['sub']}
                    selectMode={selectMode}
                    selectedKeys={selectedKeys}
                    shallowSelect={shallowSelect}
                    onSelect={this.handleSelect}
                >
                    <Item key="1">Option 1</Item>
                    <Item disabled key="2">
                        Disabled option 2
                    </Item>
                    <SubMenu key="sub" label="Sub menu" selectable={subMenuSelectable}>
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
