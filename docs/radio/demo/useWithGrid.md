# 使用Grid快速布局

- order: 7

使用 `Grid` 布局 `RadioGroup` 中的选项。

:::lang=en-us

# Grid Layout
- order: 7
Use the options in the `Grid` layout `RadioGroup`.

:::
---

````jsx
import { Radio, Grid } from '@alifd/next';

const { Row, Col } = Grid;
const RadioGroup = Radio.Group;

class ControlApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'orange',
            other: 0
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({
            value: value
        });
        console.log('onChange', value);
    }

    onClick(e) {
        console.log('onClick', e);
    }

    render() {
        return (
            <div >
                <p style={{fontSize: 14}}>Grid Layout:</p>
                <br/>
                <RadioGroup onChange={this.onChange} style={{ width: '1000px'}} >
                    <Row>
                        <Col span="8">
                            <Radio value="apple1" onClick={this.onClick} >Apple</Radio>
                        </Col>
                        <Col span="8">
                            <Radio value="pear1" onClick={this.onClick} >Pear</Radio>
                        </Col>
                        <Col span="8">
                            <Radio value="banana1" onClick={this.onClick} >Banana</Radio>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span="8">
                            <Radio value="peach" onClick={this.onClick} >Peach</Radio>
                        </Col>
                        <Col span="8">
                            <Radio value="watermelon" onClick={this.onClick} >Watermelon</Radio>
                        </Col>
                        <Col span="8">
                            <Radio value="strawberry" onClick={this.onClick} >Strawberry</Radio>
                        </Col>
                    </Row>
                </RadioGroup>
            </div>
        );
    }
}

ReactDOM.render(<ControlApp />, mountNode);
````


