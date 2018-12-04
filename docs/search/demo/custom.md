# 自定义弹层

- order: 5

自定义下拉框内容。

:::lang=en-us
# Custom Dropdown

- order: 5

custom dropdown content
:::
---


````jsx
import { Search, Menu, Button } from '@alifd/next';

const menuData = [
    {
        label: 'Option 1',
        value: 'Option 1 Value',
        index: '1'
    }, {
        label: 'Option 2',
        value: 'Option 2 Value',
        index: '2'
    }, {
        label: 'Option 3',
        value: 'Option 3 Value',
        index: '3'
    }, {
        label: 'Option 4',
        value: 'Option 4 Value',
        index: '4'
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            value: '111222',
            menuData: menuData
        };
    }

    renderMenu() {
        const menuData = this.state.menuData;

        return (<Menu onSelect={this.onSelect.bind(this)} rtl className="diy-menu" selectMode="single">
            <Menu.Group label="Recent" key="xxx">
                {menuData.map((item) => {
                    return (<Menu.Item key={item.value}>
                        {item.label}
                        <Button className="diy-menu-button" onClick={this.onDelete.bind(this, item.index)} text>Delete</Button>
                    </Menu.Item>);
                })}
            </Menu.Group>
        </Menu>);
    }

    onSearch(value) {
        console.log(value);
    }

    onChange(value) {
        this.setState({
            visible: value.length > 0,
            value: value
        });
    }

    onSelect(selectedKeys) {
        this.setState({
            visible: false,
            value: selectedKeys[0]
        });
    }

    onDelete(index, e) {
        e.stopPropagation();

        const menuData = this.state.menuData;

        const menuDataNew = [];

        menuData.forEach(function (item) {
            if (item.index !== index) {
                menuDataNew.push(item);
            }
        });

        this.setState({
            menuData: menuDataNew
        });
    }

    onFocus() {
        this.setState({
            visible: true
        });
    }

    render() {
        const {visible, value} = this.state;

        return (<div style={{width: 700}}>
            <Search
                popupContent={this.renderMenu()}
                visible={visible}
                value={value}
                onSearch={this.onSearch.bind(this)}
                onChange={this.onChange.bind(this)}
                onFocus={this.onFocus.bind(this)}
            />
        </div>);
    }
}

ReactDOM.render(<App/>, mountNode);
````


````css

.diy-menu{
    /*width: 275px*/;
}

.diy-menu .next-menu-item a{
    display:none;
    float: right;
    cursor: pointer;
}
.diy-menu .next-menu-item:hover a{
    display:inline-block;
}
.diy-menu .diy-menu-button {
    float: right;
}
.diy-menu[dir=rtl] .diy-menu-button {
    float: left;
}
````


