import React from 'react';
import ReactDOM from 'react-dom';
import {
    Form,
    Input,
    Switch,
    Grid,
    Button,
    Icon,
    Balloon,
    ResponsiveGrid,
    ConfigProvider,
    Box,
} from '@alifd/next';

const FormItem = Form.Item;
const { Row, Col } = Grid;

const style = {
    padding: '20px',
    background: '#F7F8FA',
    margin: '20px',
};
const formItemLayout = {
    labelWidth: 100,
    colSpan: 4,
};

const label = (
    <span>
        name：
        <Balloon type="primary" trigger={<Icon type="prompt" size="small" />} closable={false}>
            blablablablablablablabla
        </Balloon>
    </span>
);

class Demo extends React.Component {
    state = {
        labelAlign: 'top',
        device: 'desktop',
    };
    handleChange = v => {
        this.setState({
            labelAlign: v ? 'left' : 'top',
        });
    };
    btn = device => {
        this.setState({
            device,
        });
    };
    render() {
        const labelAlign = this.state.labelAlign;

        return (
            <ConfigProvider device={this.state.device}>
                <div>
                    <h3>Label Position</h3>
                    <Switch
                        checkedChildren="left"
                        unCheckedChildren="top"
                        checked={this.state.labelAlign === 'left'}
                        onChange={this.handleChange}
                        autoWidth
                    />
                    <Button onClick={this.btn.bind(this, 'desktop')}>desktop</Button>
                    <Button onClick={this.btn.bind(this, 'tablet')}>tablet</Button>
                    <Button onClick={this.btn.bind(this, 'phone')}>phone</Button>

                    <Form style={style} responsive>
                        <FormItem
                            {...formItemLayout}
                            labelAlign={labelAlign}
                            label={label}
                            required
                        >
                            <Input placeholder="Enter a search name:" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            labelAlign={labelAlign}
                            label="Long search name:"
                        >
                            <Input placeholder="Enter a search name:" />
                        </FormItem>
                        <FormItem {...formItemLayout} labelAlign={labelAlign} label="Search name:">
                            <Input placeholder="Enter a search name:" />
                        </FormItem>
                        <FormItem {...formItemLayout} labelAlign={labelAlign} label="Search name:">
                            <Input placeholder="Enter a search name:" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            labelAlign={labelAlign}
                            label="Long search name:"
                        >
                            <Input placeholder="Enter a search name:" />
                        </FormItem>
                        <FormItem {...formItemLayout} labelAlign={labelAlign} label="Search name:">
                            <Input placeholder="Enter a search name:" />
                        </FormItem>
                        <FormItem {...formItemLayout} labelAlign={labelAlign} label="Search name:">
                            <Input placeholder="Enter a search name:" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            labelAlign={labelAlign}
                            label="Long search name:"
                        >
                            <Input placeholder="Enter a search name:" />
                        </FormItem>
                        <FormItem {...formItemLayout} labelAlign={labelAlign} label="Search name:">
                            <Input placeholder="Enter a search name:" />
                        </FormItem>
                        <FormItem colSpan={12} style={{ textAlign: 'right' }}>
                            <Button type="primary" style={{ marginRight: '5px' }}>
                                Search
                            </Button>
                            <Button>Clear All</Button>
                        </FormItem>
                    </Form>
                </div>
            </ConfigProvider>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
