# 弹层定制

- order: 9

通过 popupContent 定制 Select 弹层， Select 使用 popupContent 中渲染出的 item 的 value 作为菜单项的key，如果没有提供或者自定义渲染 key 请使用 valueRender

:::lang=en-us

# custom popup

- order: 9

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

class CustomMenu extends React.Component {
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
        const popupContent = <div style={{border: '1px solid', background: 'white'}}>
            <div style={{borderBottom: '1px solid', background: 'white', padding: 10, fontSize: '12px'}}>custom header</div>
            <CustomMenu onChange={this.handleSelect} onMouseDown={preventDefault}/>
            <div style={{borderTop: '1px solid', background: 'white', padding: 10, fontSize: '12px'}}>custom footer</div>
        </div>;
        const popupProps = {
            triggerClickKeycode: [13, 32, 40] // space, enter, down-arrow
        };

        return (
            <div className="demo-container">
                <Select
                    placeholder="custom popupContent"
                    visible={this.state.visible}
                    onVisibleChange={this.onVisibleChange}
                    value={this.state.value}
                    popupProps={popupProps}
                    popupContent={popupContent} 
                    style={{width: 200}}
                    />
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
