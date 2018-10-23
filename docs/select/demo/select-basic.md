# 选择器

- order: 3

演示了 Select 的多种形态.

:::lang=en-us
# Select

- order: 3

api usage of select
:::
---

````jsx
import { Select } from '@alifd/next';

const dataSource = [
    {value: '10001', label: 'Lucy King'},
    {value: 10002, label: 'Lily King'},
    {value: 10003, label: 'Tom Cat', disabled: true},
    {label: 'Special Group', children: [
        {value: new Date(), label: 'new Date()'},
        {value: false, label: 'FALSE'},
        {value: 0, label: 'ZERO'}
    ]},
];

const ctrlDataSources = {
    mode: ['single', 'multiple', 'tag'],
    size: ['small', 'medium', 'large'],
    showSearch: [true, false],
    hasArrow: [true, false],
    hasBorder: [true, false],
    hasClear: [true, false],
};

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            size: undefined,
            mode: undefined,
            hasArrow: undefined,
            hasBorder: undefined,
            showSearch: undefined,
            hasClear: undefined,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCtrlChange = this.handleCtrlChange.bind(this);
    }

    handleCtrlChange(key, value) {
        this.setState({[key]: value});

        if (key === 'mode') {
            this.setState({value: null});
        }
    }

    handleChange(value, item) {
        console.log('handleChange: value: ', value, item);
        this.setState({value});
    }

    renderCtrlNodes(state) {
        const ctrlNodes = [];
        let k;
        for (k in ctrlDataSources) {
            if (ctrlDataSources.hasOwnProperty(k)) {
                ctrlNodes.push(
                    <Select key={k}
                        label={`${k}: `}
                        value={state[k]}
                        id={k}
                        dataSource={ctrlDataSources[k]}
                        onChange={this.handleCtrlChange.bind(this, k)} />
                );
            }
        }

        return ctrlNodes;
    }

    render() {

        return (
            <div className="demo-container">
                <div className="demo-controller">{this.renderCtrlNodes(this.state)}</div>
                <Select
                    {...this.state}
                    onChange={this.handleChange}
                    dataSource={dataSource} />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.demo-container {
    padding: 16px;
    background-color: #F8F8F8;
}

.demo-controller {
    padding: 12px 12px 4px;
    margin-bottom: 16px;
    border: 2px dashed #ddd;
}

.next-select {
    margin-right: 8px;
    margin-bottom: 8px;
}
````
