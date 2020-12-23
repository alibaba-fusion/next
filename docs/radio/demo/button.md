# 按钮样式与大小

- order: 6

使用 `RadioGroup` 渲染的组，通过设置 `shape="button"` 可以让组件以按钮形式展示，同时可以通过 `size` 来控制组件大小。

:::lang=en-us
# The components display as a button shape
- order: 6
Groups that are rendered using `RadioGroup` can set the component to be displayed as a button by setting `shape="button"`, and the size of the component can be controlled via `size`.
:::
---

````jsx
import { Radio } from '@alifd/next';

const RadioGroup = Radio.Group;

const list = [
    {
        value: 'apple',
        label: 'Apple',
        disabled: false
    }, {
        value: 'pear',
        label: 'Pear'
    }, {
        value: 'orange',
        label: 'Orange',
        disabled: true
    }
];

class ControlApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value1: 'apple',
            value2: 'apple',
            value3: ''
        };

        this.onNestChange = this.onNestChange.bind(this);
        this.onSmallChange = this.onSmallChange.bind(this);
        this.onMediumChange = this.onMediumChange.bind(this);
    }

    onSmallChange(value) {
        this.setState({
            value1: value
        });
    }

    onMediumChange(value) {
        this.setState({
            value2: value
        });
    }

    onNestChange(value) {
        this.setState({
            value3: value
        });
    }

    render() {
        return (
            <div>
                <p style={{fontSize: 14}}>Small size</p>
                <RadioGroup dataSource={list} shape="button" size="small" value={this.state.value1} onChange={this.onSmallChange} />
                <br/>
                <br/>
                <p style={{fontSize: 14}}>Medium size (default)</p>
                <RadioGroup dataSource={list} shape="button" size="medium" value={this.state.value2} onChange={this.onMediumChange} />
                <br/>
                <br/>
                <p style={{fontSize: 14}}>Large size</p>
                <RadioGroup shape="button" size="large" value={this.state.value3} onChange={this.onNestChange}>
                    <Radio id="banana" value="banana">Banana</Radio>
                    <Radio id="watermelon" value="watermelon">Watermelon</Radio>
                    <Radio id="peach" value="peach">Peach</Radio>
                </RadioGroup>
                <br/>
                <br/>
                <p style={{fontSize: 14}}>Disabled and Selected-Disabled status</p>
                <RadioGroup shape="button" value="banana" onChange={this.onNestChange}>
                    <Radio id="peach" disabled value="peach">Peach</Radio>
                    <Radio id="banana" disabled value="banana">Banana</Radio>
                </RadioGroup>
            </div>
        );
    }
}

ReactDOM.render(<ControlApp />, mountNode);
````
