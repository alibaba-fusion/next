import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from '@alifd/next';

const { AutoComplete } = Select;
const dataSource = [
    'Lucy King',
    'Lily King',
    'Jim Green',
    {
        label: 'Chinese',
        children: [
            { value: 'Hang Meimei', label: 'Hang Meimei' },
            'Li Lei',
            { value: 'Gao Hui', label: 'Gao Hui', disabled: true },
            'Zhang San',
            'Li Si',
            'Wang Wu',
            { value: 'Zhao Benshan', label: 'Zhao Benshan', disabled: true },
            'Sun Yang',
            'Song Shuying',
        ],
    },
    {
        label: 'Pets',
        children: ['Poly', 'Kitty'],
    },
];

const ctrlDataSources = {
    size: ['small', 'medium', 'large'],
    disabled: [true, false],
    hasClear: [true, false],
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
        this.setState({ [key]: value });

        if (key === 'mode') {
            this.setState({ value: null });
        }
    }

    handleChange(value) {
        console.log('handleChange: value: ', value);
        this.setState({ value });
    }

    renderCtrlNodes(state) {
        const ctrlNodes = [];
        let k;
        for (k in ctrlDataSources) {
            if (ctrlDataSources.hasOwnProperty(k)) {
                ctrlNodes.push(
                    <Select
                        key={k}
                        style={{ marginRight: 8 }}
                        label={`${k}: `}
                        value={state[k]}
                        dataSource={ctrlDataSources[k]}
                        onChange={this.handleCtrlChange.bind(this, k)}
                    />
                );
            }
        }

        return ctrlNodes;
    }

    render() {
        return (
            <div style={{ padding: 16, background: '#F8F8F8' }}>
                <div style={{ padding: 12, marginBottom: 16, border: '2px dashed #ddd' }}>
                    {this.renderCtrlNodes(this.state)}
                </div>
                <AutoComplete
                    {...this.state}
                    style={{ maxWidth: 300 }}
                    onChange={this.handleChange}
                    dataSource={dataSource}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
