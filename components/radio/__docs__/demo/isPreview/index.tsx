import React from 'react';
import ReactDOM from 'react-dom';
import { Radio, Switch } from '@alifd/next';
import type { RadioProps, GroupProps } from '@alifd/next/lib/radio';

class App extends React.Component {
    state = {
        isPreview: true,
        checked: true,
    };

    togglePreview = () => {
        this.setState({
            isPreview: !this.state.isPreview,
        });
    };

    toggleCheck = () => {
        this.setState({
            checked: !this.state.checked,
        });
    };

    renderChecked: RadioProps['renderPreview'] = (checked, props) =>
        checked ? <span>{props.children}</span> : <span>null</span>;

    renderPreview: GroupProps['renderPreview'] = previewed => <span>{previewed.label}</span>;

    render() {
        return (
            <React.Fragment>
                toggle checked:
                <Switch
                    size="small"
                    defaultChecked
                    onChange={this.toggleCheck}
                    style={{ verticalAlign: 'middle', marginRight: 30 }}
                />
                toggle isPreview:{' '}
                <Switch
                    size="small"
                    defaultChecked
                    onChange={this.togglePreview}
                    style={{ verticalAlign: 'middle' }}
                />
                <br />
                <br />
                <span style={{ fontSize: 14 }}>Single: </span>
                <Radio
                    className="radio-preview-inline"
                    checked={this.state.checked}
                    isPreview={this.state.isPreview}
                    renderPreview={this.renderChecked}
                >
                    Radio
                </Radio>
                <br />
                <span style={{ fontSize: 14 }}>Group: </span>
                <Radio.Group
                    className="radio-group-preview-inlline"
                    name="radio"
                    defaultValue={'react'}
                    isPreview={this.state.isPreview}
                    renderPreview={this.renderPreview}
                >
                    <Radio value="react">React</Radio>
                    <Radio value="vue">Vue</Radio>
                    <Radio value="angular">Angular</Radio>
                </Radio.Group>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, mountNode);
