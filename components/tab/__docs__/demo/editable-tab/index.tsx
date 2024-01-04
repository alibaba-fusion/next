import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Input } from '@alifd/next';

class EditableTabPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabTitle: props.defaultTitle,
            editable: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultTitle !== this.state.tabTitle) {
            this.setState({
                tabTitle: nextProps.defaultTitle,
            });
        }
    }

    onKeyDown = e => {
        const { keyCode } = e;
        // Stop bubble up the events of keyUp, keyDown, keyLeft, and keyRight
        if (keyCode > 36 && keyCode < 41) {
            e.stopPropagation();
        }
    };

    onBlur = e => {
        this.setState({
            editable: false,
            tabTitle: e.target.value,
        });
    };

    onDblClick = () => {
        this.setState({
            editable: true,
        });
    };

    render() {
        const { tabTitle, editable } = this.state;
        if (editable) {
            return (
                <Input defaultValue={tabTitle} onKeyDown={this.onKeyDown} onBlur={this.onBlur} />
            );
        }
        return <span onDoubleClick={this.onDblClick}>{tabTitle}</span>;
    }
}

const tabRender = (key, { title }) => (
    <div key={key} className="editable-tab-wrapper">
        <EditableTabPane defaultTitle={title} />
    </div>
);

ReactDOM.render(
    <Tab defaultActiveKey="1" tabRender={tabRender}>
        <Tab.Item title="Double Click To Edit Me" key="1">
            Editable tab
        </Tab.Item>
        <Tab.Item title="Double Click To Edit Me" key="2">
            Editable tab
        </Tab.Item>
    </Tab>,
    mountNode
);
