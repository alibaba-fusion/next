import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Grid } from '@alifd/next';

const FormItem = Form.Item;
const { Row, Col } = Grid;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
};

const insetLayout = {
    labelCol: { fixedSpan: 3 },
};

ReactDOM.render(
    <Form {...formItemLayout}>
        <FormItem id="control-input" label="Input Something：">
            <Row gutter="4">
                <Col>
                    <FormItem
                        name="firstname"
                        style={{ margin: 0 }}
                        label="Nest"
                        labelAlign="inset"
                        {...insetLayout}
                        required
                        requiredTrigger="onBlur"
                        asterisk={false}
                    >
                        <Input placeholder="Please enter..." />
                    </FormItem>
                </Col>
                <Col>
                    <FormItem
                        name="secondname"
                        style={{ margin: 0 }}
                        label="Nest"
                        labelAlign="inset"
                        {...insetLayout}
                        required
                        asterisk={false}
                    >
                        <Input placeholder="need onChange" />
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="Bank Account：">
            <Row gutter="4">
                <Col>
                    <FormItem name="A" required requiredTrigger="onBlur">
                        <Input />
                    </FormItem>
                </Col>
                <Col>
                    <FormItem name="B" required requiredTrigger="onBlur">
                        <Input />
                    </FormItem>
                </Col>
                <Col>
                    <FormItem name="C" required requiredTrigger="onBlur">
                        <Input />
                    </FormItem>
                </Col>
                <Col>
                    <FormItem name="D" required requiredTrigger="onBlur">
                        <Input />
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem label=" ">
            <Form.Submit validate onClick={v => console.log(v)}>
                Submit
            </Form.Submit>
        </FormItem>
    </Form>,
    mountNode
);
