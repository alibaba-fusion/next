import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Radio, Dialog } from '@alifd/next';
import type { DialogProps } from '../../../types';

interface DemoState {
    visible?: boolean;
    footerActions: NonNullable<DialogProps['footerActions']>;
    footerAlign?: DialogProps['footerAlign'];
    loading?: boolean;
}

class Demo extends React.Component {
    state: DemoState = {
        visible: false,
        footerActions: ['ok', 'cancel'],
        footerAlign: 'right',
        loading: false,
    };

    onOpen = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    toggleFooterActions = (footerActionsStr: string) => {
        this.setState({
            footerActions: footerActionsStr.split(','),
        });
    };

    toggleFooterAlign = (footerAlign: string) => {
        this.setState({
            footerAlign,
        });
    };

    toggleOkLoader = (loading: boolean) => {
        this.setState({
            loading,
        });
    };

    render() {
        const { visible, footerActions, footerAlign, loading } = this.state;
        const okProps = {
            loading,
        };

        return (
            <div>
                <Button onClick={this.onOpen} type="primary">
                    Open dialog
                </Button>
                <Dialog
                    title="Customize buttons of footer"
                    v2
                    visible={visible}
                    footerActions={footerActions}
                    footerAlign={footerAlign}
                    onOk={this.onClose}
                    onClose={this.onClose}
                    okProps={okProps}
                >
                    <div className="demo-content">
                        <Radio.Group
                            className="demo-radio-group"
                            shape="button"
                            value={footerActions.join(',')}
                            onChange={this.toggleFooterActions}
                        >
                            <Radio value="ok,cancel">ok is left</Radio>
                            <Radio value="cancel,ok">ok is right</Radio>
                            <Radio value="ok">only ok</Radio>
                            <Radio value="cancel">only cancel</Radio>
                        </Radio.Group>
                        <Radio.Group
                            className="demo-radio-group"
                            shape="button"
                            value={footerAlign}
                            onChange={this.toggleFooterAlign}
                        >
                            <Radio value="left">left</Radio>
                            <Radio value="center">center</Radio>
                            <Radio value="right">right</Radio>
                        </Radio.Group>
                        <Radio.Group
                            className="demo-radio-group"
                            shape="button"
                            value={loading}
                            onChange={this.toggleOkLoader}
                        >
                            <Radio value={false}>Loading Off</Radio>
                            <Radio value>Loading On</Radio>
                        </Radio.Group>
                    </div>
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
