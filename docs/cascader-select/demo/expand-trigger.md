# 展开触发行为

- order: 1

展示可通过 expandTriggerType 来设置不同的展开触发行为，支持 click 和 hover，默认值为 click。

:::lang=en-us
# Expand trigger type

- order: 1

You can set expand trigger type by setting `expandTriggerType`, support `click` and `hover`, the default is `click`.
:::

---

````jsx
import { Radio, CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';

const RadioGroup = Radio.Group;

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            triggerType: 'click',
            data: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleTriggerTypeChange = this.handleTriggerTypeChange.bind(this);
    }

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(e => console.log(e));
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);
    }

    handleTriggerTypeChange(triggerType) {
        this.setState({
            triggerType
        });
    }

    render() {
        return (
            <div>
                <div className="trigger-check">
                    Expand trigger type:
                    <RadioGroup dataSource={['click', 'hover']} value={this.state.triggerType} onChange={this.handleTriggerTypeChange} />
                </div>

                <CascaderSelect style={{ width: '302px' }} expandTriggerType={this.state.triggerType} dataSource={this.state.data} onChange={this.handleChange} />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

```` css
.trigger-check {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
}

.trigger-check .next-radio-group {
    margin-left: 10px;
}
````
