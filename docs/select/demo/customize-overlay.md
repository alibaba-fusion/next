# 弹层定制

- order: 14

通过 popupContent 定制 Select 弹层， 在 popupContent 中控制 Select 菜单项的渲染，也可以通过 valueRender 自定义渲染

:::lang=en-us

# custom popup

- order: 14

custom Popup by `popupContent`
:::
---

````jsx
import { Select } from '@alifd/next';
import classNames from 'classnames';
/* eslint-disable react/prop-types, react/no-multi-comp */

// prevent onBlur
function preventDefault(e) {
    e.preventDefault();
}

class Menu extends React.Component {
    data = [{
        label: 'value1',
        value: 1
    }, {
        label: 'value2',
        value: 2
    }];

    onClick(item) {
        this.props.onChange(item);
    }

    renderItems() {
        return this.data.map(item => <li onClick={this.onClick.bind(this, item)} key={item.value}>{item.label}</li>);
    }

    render() {
        const {className, ...others} = this.props;
        const cls = classNames('overlay-content', className);

        return (
            <ul className={cls} {...others}>
                {this.renderItems()}
            </ul>
        );
    }
}

class Demo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null
        };
    }

    handleSelect = (value) => {
        this.setState({
            value,
            visible: false
        });
    }

    onVisibleChange = (visible) => {
        this.setState({
            visible
        });
    }

    render() {
        const popupContent = <Menu onChange={this.handleSelect} onMouseDown={preventDefault}/>;

        return (
            <div className="demo-container">
                <Select
                    placeholder="custom popupContent"
                    visible={this.state.visible}
                    onVisibleChange={this.onVisibleChange}
                    value={this.state.value}
                    popupContent={popupContent} />
            </div>
        );
    }
}
ReactDOM.render(<Demo/>, mountNode);
````

````css
.demo-container {
  background-color: #F8F8F8;
  padding: 16px;
}

.demo-container p {
    margin-top:0;
}

.overlay-content {
    border:1px solid #DDDDDD;
    padding:10px;
    background: #FFFFFF;
    margin:0;
    font-size: 12px;
    font-family: Arial;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.15);
}

.overlay-content li {
    list-style: none;
    line-height:30px;
    padding: 0 5px;
    cursor: pointer;
}

.overlay-content li:hover {
    background: #F8F8F8;
}

.overlay-content li:last-child {
    border-width:0;
}
````
