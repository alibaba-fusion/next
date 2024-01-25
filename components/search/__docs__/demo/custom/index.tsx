import React from 'react';
import ReactDOM from 'react-dom';
import { Search, Menu, Button } from '@alifd/next';

const menuData = [
    {
        label: 'Option 1',
        value: 'Option 1 Value',
        index: '1',
    },
    {
        label: 'Option 2',
        value: 'Option 2 Value',
        index: '2',
    },
    {
        label: 'Option 3',
        value: 'Option 3 Value',
        index: '3',
    },
    {
        label: 'Option 4',
        value: 'Option 4 Value',
        index: '4',
    },
];
interface AppState {
    menuData: Array<{ label: string; value: string; index?: string }>;
    value: string;
    visible: boolean;
}
class App extends React.Component<unknown, AppState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            visible: false,
            value: '111222',
            menuData: menuData,
        };

        this.onVisibleChange = this.onVisibleChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    renderMenu() {
        const menuData = this.state.menuData;

        return (
            <Menu onSelect={this.onSelect.bind(this)} rtl className="diy-menu" selectMode="single">
                <Menu.Group label="Recent" key="xxx">
                    {menuData.map(item => {
                        return (
                            <Menu.Item key={item.value}>
                                {item.label}
                                <Button
                                    className="diy-menu-button"
                                    onClick={this.onDelete.bind(this, item.index)}
                                    text
                                >
                                    Delete
                                </Button>
                            </Menu.Item>
                        );
                    })}
                </Menu.Group>
            </Menu>
        );
    }

    onSearch(value: string) {
        console.log(value);
    }

    onChange(value: string) {
        this.setState({
            visible: value.length > 0,
            value: value,
        });
    }

    onSelect(selectedKeys: Array<string>) {
        this.setState({
            visible: false,
            value: selectedKeys[0],
        });
    }

    onDelete(index: string | undefined, e: React.MouseEvent) {
        e.stopPropagation();

        const menuData = this.state.menuData;

        const menuDataNew: AppState['menuData'] = [];

        menuData.forEach(function (item) {
            if (item.index !== index) {
                menuDataNew.push(item);
            }
        });

        this.setState({
            menuData: menuDataNew,
        });
    }

    onFocus() {
        this.setState({
            visible: true,
        });
    }

    onVisibleChange() {
        this.setState({
            visible: false,
        });
    }

    render() {
        const { visible, value } = this.state;

        return (
            <div style={{ width: 700 }}>
                <Search
                    onVisibleChange={this.onVisibleChange}
                    popupContent={this.renderMenu()}
                    visible={visible}
                    fillProps="label"
                    value={value}
                    onSearch={this.onSearch}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
