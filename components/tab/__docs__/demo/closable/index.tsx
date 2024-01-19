import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Button, Icon } from '@alifd/next';

const panes = [
    { tab: 'Mail', key: 1, closeable: false },
    { tab: 'Message', key: 2, closeable: true },
    { tab: 'Setting', key: 3, closeable: true },
    { tab: 'Unread', key: 4, closeable: true },
];

class CloseableTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            panes: panes,
            activeKey: panes[0].key,
        };
    }

    /*eslint-disable eqeqeq */
    remove(targetKey) {
        let activeKey = this.state.activeKey;
        const panes = [];
        this.state.panes.forEach(pane => {
            if (pane.key != targetKey) {
                panes.push(pane);
            }
        });

        if (targetKey == activeKey) {
            activeKey = panes[0].key;
        }
        this.setState({ panes, activeKey });
    }

    onClose = targetKey => {
        this.remove(targetKey);
    };

    onChange = activeKey => {
        this.setState({ activeKey });
    };

    addTabpane = () => {
        const panes = this.state.panes;
        const newItem = { tab: 'new tab', key: Math.random(), closeable: true };
        panes.push(newItem);

        this.setState({
            panes: [...panes],
            activeKey: newItem.key,
        });
    };

    render() {
        const { panes, activeKey } = this.state;
        return (
            <div>
                <Button onClick={this.addTabpane} type="primary">
                    <Icon type="add" /> New Tab
                </Button>

                <Tab
                    shape="wrapped"
                    activeKey={activeKey}
                    onChange={this.onChange}
                    onClose={this.onClose}
                    onAdd={this.addTabpane}
                    style={{ marginTop: 10 }}
                    showAdd
                >
                    {panes.map(item => (
                        <Tab.Item title={item.tab} key={item.key} closeable={item.closeable}>
                            {item.tab} content
                        </Tab.Item>
                    ))}
                </Tab>
            </div>
        );
    }
}

ReactDOM.render(<CloseableTab />, mountNode);
