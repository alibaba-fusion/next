# 自动完成大小

- order: 10

`AutoComplete` 大小、disabled、清除

:::lang=en-us
# Basic

- order: 10

`AutoComplete` api of  size/disabled/hasClear
:::
---

````jsx
import { Select } from '@alifd/next';

const {AutoComplete} = Select;
const dataSource = [
    'Lucy King',
    'Lily King',
    'Jim Green',
    {
        label: 'Chinese',
        children: [
            {value: 'Hang Meimei', label: 'Hang Meimei'},
            'Li Lei',
            {value: 'Gao Hui', label: 'Gao Hui', disabled: true},
            'Zhang San',
            'Li Si',
            'Wang Wu',
            {value: 'Zhao Benshan', label: 'Zhao Benshan', disabled: true},
            'Sun Yang',
            'Song Shuying'
        ]
    },
    {
        label: 'Pets',
        children: [
            'Poly',
            'Kitty'
        ]
    }
];

const ctrlDataSources = {
    size: ['small', 'medium', 'large'],
    disabled: [true, false],
    hasClear: [true, false]
};

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            size: undefined,
            disabled: undefined,
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

    handleChange(value) {
        console.log('handleChange: value: ', value);
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
                <AutoComplete
                    {...this.state}
                    style={{maxWidth: 300}}
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
