import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, Switch } from '@alifd/next';
import { type CheckboxProps, type GroupProps } from '@alifd/next/lib/checkbox';

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

    renderChecked: CheckboxProps['renderPreview'] = (checked, props) =>
        checked ? <span>{props.children}</span> : <span>null</span>;

    renderPreview: GroupProps['renderPreview'] = previewed =>
        previewed.length
            ? previewed.map((Item, index) => (
                  <span key={`${index}-checkbox`} style={{ marginRight: 10 }}>
                      {Item.label}
                  </span>
              ))
            : 'null';

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
                <Checkbox
                    className="checkbox-preview-inline"
                    checked={this.state.checked}
                    isPreview={this.state.isPreview}
                    renderPreview={this.renderChecked}
                >
                    Checkbox
                </Checkbox>
                <br />
                <span style={{ fontSize: 14 }}>Group: </span>
                <Checkbox.Group
                    className="checkbox-group-preview-inlline"
                    name="checkbox"
                    defaultValue={'react'}
                    isPreview={this.state.isPreview}
                    renderPreview={this.renderPreview}
                >
                    <Checkbox value="react">React</Checkbox>
                    <Checkbox value="vue">Vue</Checkbox>
                    <Checkbox value="angular">Angular</Checkbox>
                </Checkbox.Group>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, mountNode);
