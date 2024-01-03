import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Switch, Grid, Button, Icon, Balloon } from '@alifd/next';

const FormItem = Form.Item;
const { Row, Col } = Grid;

const style = {
    padding: '20px',
    background: '#F7F8FA',
    margin: '20px',
};
const formItemLayout = {
    labelCol: { fixedSpan: 4 },
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
    };
    handleChange = v => {
        this.setState({
            labelAlign: v ? 'left' : 'top',
        });
    };
    render() {
        const labelAlign = this.state.labelAlign;

        return (
            <div>
                <Form inline>
                    <Form.Item label="label Position">
                        <Switch
                            checkedChildren="left"
                            unCheckedChildren="top"
                            checked={this.state.labelAlign === 'left'}
                            onChange={this.handleChange}
                            autoWidth
                        />
                    </Form.Item>
                </Form>

                <Form style={style}>
                    <Row gutter="4">
                        <Col>
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
                            <FormItem
                                {...formItemLayout}
                                labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:" />
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem
                                {...formItemLayout}
                                labelAlign={labelAlign}
                                label="Search name:"
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
                            <FormItem
                                {...formItemLayout}
                                labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:" />
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem
                                {...formItemLayout}
                                labelAlign={labelAlign}
                                label="Search name:"
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
                            <FormItem
                                {...formItemLayout}
                                labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'right' }}>
                            <Button type="primary" style={{ marginRight: '5px' }}>
                                Search
                            </Button>
                            <Button>Clear All</Button>
                        </Col>
                    </Row>
                </Form>

                <Form style={style}>
                    <Row gutter="4">
                        <Col>
                            <FormItem
                                {...formItemLayout}
                                labelAlign={labelAlign}
                                label={label}
                                required
                            >
                                <Input placeholder="Enter a search name:" />
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem
                                {...formItemLayout}
                                labelAlign={labelAlign}
                                label="Long search name:"
                            >
                                <Input placeholder="Enter a search name:" />
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem
                                {...formItemLayout}
                                labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:" />
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem
                                {...formItemLayout}
                                labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:" />
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem
                                {...formItemLayout}
                                labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'right' }}>
                            <Button type="primary" style={{ marginRight: '5px' }}>
                                Search
                            </Button>
                            <Button>Clear All</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
