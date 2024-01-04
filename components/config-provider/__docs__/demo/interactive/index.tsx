import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, Button, Dialog, Table, Menu } from '@alifd/next';

const config = {
    Menu: {
        isSelectIconRight: true,
    },
    Table: {
        hasBorder: false,
    },
    Dialog: {
        footerActions: ['cancel', 'ok'],
    },
};

const dataSource = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
        result.push({
            title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
            id: 100306660940 + i,
            time: 2000 + i,
        });
    }
    return result;
};

class App extends React.Component {
    state = {
        visible: false,
    };
    onOpen = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = (reason: string) => {
        console.log(reason);

        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <ConfigProvider defaultPropsConfig={config}>
                    <div>
                        <Button onClick={this.onOpen} type="primary">
                            Open dialog
                        </Button>
                        <Dialog
                            title="Welcome to Alibaba.com"
                            visible={this.state.visible}
                            onOk={this.onClose.bind(this, 'okClick')}
                            onCancel={this.onClose.bind(this, 'cancelClick')}
                            onClose={this.onClose}
                        >
                            Start your business here by searching a popular product
                        </Dialog>
                        <br />
                        <br />
                        <Menu style={{ width: 200 }} selectMode="single" selectedKeys="1">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item disabled key="2">
                                Disabled option 2
                            </Menu.Item>
                            <Menu.SubMenu key="sub" label="Sub menu">
                                <Menu.Item key="sub-1">Sub option 1</Menu.Item>
                                <Menu.Item key="sub-2">Sub option 2</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.Item key="3">Option 3</Menu.Item>
                        </Menu>
                        <br />
                        <Table dataSource={dataSource()}>
                            <Table.Column title="Id" htmlTitle="Unique Id" dataIndex="id" />
                            <Table.Column title="Title" dataIndex="title.name" />
                            <Table.Column title="Time" dataIndex="time" />
                        </Table>
                    </div>
                </ConfigProvider>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
