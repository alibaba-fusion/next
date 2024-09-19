import React from 'react';
import ReactDOM from 'react-dom';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import Input from '../../../input';
import Field from '../../../field';
import Form from '../../index';
import Select from '../../../select';

import Grid from '../../../grid';
import '../../../demo-helper/style';
import '../../style';
import '../../../input/style';
import '../../../select/style';

// import form

const FormItem = Form.Item;
const { Row, Col } = Grid;
const Option = Select.Option;

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const formItemLayoutLarge = {
    labelCol: { fixedSpan: 4 },
};

// 中英文文案
const i18nMap = {
    'zh-cn': {
        labels: {
            username: '用户名：',
            password: '密码：',
            others: '其他：',
            firstName: '姓',
            lastName: '名',
            address: '地址：',
        },
        help: {
            username: '记得填用户名哦.',
            password: '请输入密码.',
            required: '必填项目',
        },
    },
    'en-us': {
        labels: {
            username: 'Username',
            password: 'Password',
            others: 'Others',
            firstName: 'First Name',
            lastName: 'Last Name',
            address: 'Address',
        },
        help: {
            username: 'Please input your username',
            password: 'Please input your password',
            required: 'Required a value',
        },
    },
};

const demo1 = {
    help: {
        label: 'help 内容',
        value: 'true',
        enum: [
            {
                label: '显示',
                value: 'true',
            },
            {
                label: '隐藏',
                value: 'false',
            },
        ],
    },
    size: {
        label: '大小',
        value: 'medium',
        enum: [
            {
                label: '大',
                value: 'large',
            },
            {
                label: '中',
                value: 'medium',
            },
            {
                label: '小',
                value: 'small',
            },
        ],
    },
};

const demo2 = {
    help: {
        label: 'help 内容',
        name: 'help',
        value: 'true',
        enum: [
            {
                label: '显示',
                value: 'true',
            },
            {
                label: '隐藏',
                value: 'false',
            },
        ],
    },
    insetAlign: {
        label: '内标签对齐',
        value: 'right',
        enum: [
            {
                label: '右对齐',
                value: 'right',
            },
            {
                label: '左对齐',
                value: 'left',
            },
        ],
    },
    size: {
        label: '大小',
        value: 'medium',
        enum: [
            {
                label: '大',
                value: 'large',
            },
            {
                label: '中',
                value: 'medium',
            },
            {
                label: '小',
                value: 'small',
            },
        ],
    },
};

const style = {
    marginBottom: 0,
};

class FunctionDemo extends React.Component<{ lang: 'zh-cn' | 'en-us' }> {
    field = new Field(this);

    render() {
        const { init, getValue } = this.field;
        const { lang } = this.props;
        const i18n = i18nMap[lang];

        return (
            <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
                <div className="demo-container">
                    <h2>Form</h2>
                    <Demo
                        // title="Form Inline"
                        block
                        {...init('demo1', {
                            initValue: demo1,
                            valueName: 'demoFunction',
                            trigger: 'onFunctionChange',
                        })}
                    >
                        <Demo title="Form Inline">
                            <DemoGroup label="Label Left">
                                <Form
                                    inline
                                    style={{ width: 700 }}
                                    size={
                                        getValue<{
                                            size: { value?: 'medium' | 'large' | 'small' };
                                        }>('demo1')?.size.value
                                    }
                                >
                                    <FormItem
                                        label={i18n.labels.username}
                                        help={
                                            getValue<{ help: { value?: string } }>('demo1')?.help
                                                .value === 'true'
                                                ? i18n.help.username
                                                : null
                                        }
                                    >
                                        <Row gutter="4">
                                            <Col>
                                                <FormItem style={style}>
                                                    <Input
                                                        placeholder={i18n.labels.firstName}
                                                        style={{ width: 120 }}
                                                    />
                                                </FormItem>
                                            </Col>
                                            <Col>
                                                <FormItem style={style}>
                                                    <Input
                                                        placeholder={i18n.labels.lastName}
                                                        style={{ width: 120 }}
                                                    />
                                                </FormItem>
                                            </Col>
                                        </Row>
                                    </FormItem>
                                    <FormItem
                                        label={i18n.labels.password}
                                        validateState="error"
                                        help={
                                            getValue<{ help: { value?: string } }>('demo1')?.help
                                                .value === 'true'
                                                ? i18n.help.password
                                                : null
                                        }
                                    >
                                        <Input />
                                    </FormItem>
                                    <FormItem
                                        label={i18n.labels.username}
                                        help={
                                            getValue<{ help: { value?: string } }>('demo1')?.help
                                                .value === 'true'
                                                ? i18n.help.username
                                                : null
                                        }
                                    >
                                        <Row gutter="4">
                                            <Col>
                                                <FormItem style={style}>
                                                    <Input
                                                        placeholder={i18n.labels.firstName}
                                                        style={{ width: 120 }}
                                                    />
                                                </FormItem>
                                            </Col>
                                            <Col>
                                                <FormItem style={style}>
                                                    <Input
                                                        placeholder={i18n.labels.lastName}
                                                        style={{ width: 120 }}
                                                    />
                                                </FormItem>
                                            </Col>
                                        </Row>
                                    </FormItem>
                                    <FormItem
                                        label={i18n.labels.password}
                                        validateState="error"
                                        help={
                                            getValue<{ help: { value?: string } }>('demo1')?.help
                                                .value === 'true'
                                                ? i18n.help.password
                                                : null
                                        }
                                    >
                                        <Input />
                                    </FormItem>
                                </Form>
                            </DemoGroup>
                            <DemoGroup label="Label Top">
                                <Form
                                    inline
                                    labelAlign="top"
                                    size={
                                        getValue<{
                                            size: { value?: 'medium' | 'large' | 'small' };
                                        }>('demo1')?.size.value
                                    }
                                    style={{ minWidth: 500 }}
                                >
                                    <FormItem
                                        label={i18n.labels.username}
                                        help={
                                            getValue<{ help: { value?: string } }>('demo1')?.help
                                                .value === 'true'
                                                ? i18n.help.username
                                                : null
                                        }
                                    >
                                        <Row gutter="4">
                                            <Col>
                                                <FormItem style={style}>
                                                    <Input
                                                        placeholder={i18n.labels.firstName}
                                                        style={{ width: 120 }}
                                                    />
                                                </FormItem>
                                            </Col>
                                            <Col>
                                                <FormItem style={style}>
                                                    <Input
                                                        placeholder={i18n.labels.lastName}
                                                        style={{ width: 120 }}
                                                    />
                                                </FormItem>
                                            </Col>
                                        </Row>
                                    </FormItem>
                                    <FormItem
                                        label={i18n.labels.password}
                                        validateState="error"
                                        help={
                                            getValue<{ help: { value?: string } }>('demo1')?.help
                                                .value === 'true'
                                                ? i18n.help.password
                                                : null
                                        }
                                    >
                                        <Input />
                                    </FormItem>
                                </Form>
                            </DemoGroup>
                            <DemoGroup label="Label Inset">
                                <Form
                                    inline
                                    labelAlign="inset"
                                    size={
                                        getValue<{
                                            size: { value?: 'medium' | 'large' | 'small' };
                                        }>('demo1')?.size.value
                                    }
                                    style={{ minWidth: 500 }}
                                >
                                    <FormItem
                                        label={i18n.labels.username}
                                        help={
                                            getValue<{ help: { value?: string } }>('demo1')?.help
                                                .value === 'true'
                                                ? i18n.help.username
                                                : null
                                        }
                                    >
                                        <Input />
                                    </FormItem>
                                    <FormItem
                                        label={i18n.labels.password}
                                        validateState="error"
                                        help={
                                            getValue<{ help: { value?: string } }>('demo1')?.help
                                                .value === 'true'
                                                ? i18n.help.password
                                                : null
                                        }
                                    >
                                        <Input />
                                    </FormItem>
                                </Form>
                            </DemoGroup>
                        </Demo>
                    </Demo>
                    <Demo
                        // title="Form Vertical"
                        block
                        {...init('demo2', {
                            initValue: demo2,
                            valueName: 'demoFunction',
                            trigger: 'onFunctionChange',
                        })}
                    >
                        <Demo title="Form Vertical">
                            <DemoGroup label="Normal">
                                <Form
                                    labelAlign="left"
                                    style={{ minWidth: 500 }}
                                    size={
                                        getValue<{
                                            size: { value?: 'medium' | 'large' | 'small' };
                                        }>('demo2')?.size.value
                                    }
                                >
                                    <FormItem
                                        {...formItemLayout}
                                        label={i18n.labels.username}
                                        help={
                                            getValue<{ help: { value?: string } }>('demo2')?.help
                                                .value === 'true'
                                                ? i18n.help.username
                                                : null
                                        }
                                    >
                                        <Row gutter="8">
                                            <Col>
                                                <FormItem style={style}>
                                                    <Input placeholder={i18n.labels.firstName} />
                                                </FormItem>
                                            </Col>
                                            <Col>
                                                <FormItem style={style}>
                                                    <Input placeholder={i18n.labels.lastName} />
                                                </FormItem>
                                            </Col>
                                        </Row>
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label={i18n.labels.password}
                                        hasFeedback
                                        required
                                    >
                                        <Input />
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label={i18n.labels.others}
                                        validateState="error"
                                        hasFeedback
                                    >
                                        <Select style={{ width: '100%' }}>
                                            <Option value="top">top</Option>
                                            <Option value="left">left</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label={i18n.labels.address}
                                        hasFeedback
                                    >
                                        <Input.TextArea />
                                    </FormItem>
                                </Form>
                            </DemoGroup>
                            <DemoGroup label="Label Top">
                                <Form
                                    labelAlign="top"
                                    style={{ minWidth: 500 }}
                                    size={
                                        getValue<{
                                            size: { value?: 'medium' | 'large' | 'small' };
                                        }>('demo2')?.size.value
                                    }
                                >
                                    <FormItem {...formItemLayout} label={i18n.labels.username}>
                                        <Row gutter="8">
                                            <Col>
                                                <FormItem
                                                    style={style}
                                                    help={
                                                        getValue<{ help: { value?: string } }>(
                                                            'demo2'
                                                        )?.help.value === 'true'
                                                            ? i18n.help.username
                                                            : null
                                                    }
                                                >
                                                    <Input
                                                        placeholder={i18n.labels.firstName}
                                                        style={{ minWidth: '100%' }}
                                                    />
                                                </FormItem>
                                            </Col>
                                            <Col>
                                                <FormItem style={style}>
                                                    <Input
                                                        placeholder={i18n.labels.lastName}
                                                        style={{ minWidth: '100%' }}
                                                    />
                                                </FormItem>
                                            </Col>
                                        </Row>
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label={i18n.labels.password}
                                        hasFeedback
                                        validateState="success"
                                    >
                                        <Input placeholder={i18n.help.password} />
                                    </FormItem>
                                    <FormItem {...formItemLayout} label={i18n.labels.others}>
                                        <FormItem validateState="error">
                                            <Select style={{ minWidth: '100%' }}>
                                                <Option value="top">top</Option>
                                                <Option value="left">left</Option>
                                            </Select>
                                        </FormItem>
                                        <FormItem>
                                            <Select style={{ minWidth: '100%' }}>
                                                <Option value="top">top</Option>
                                                <Option value="left">left</Option>
                                            </Select>
                                        </FormItem>
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label={i18n.labels.address}
                                        hasFeedback
                                    >
                                        <Input.TextArea />
                                    </FormItem>
                                </Form>
                            </DemoGroup>
                            <DemoGroup label="Label Inset">
                                <Form
                                    labelAlign="inset"
                                    labelTextAlign={
                                        getValue<{ insetAlign: { value?: 'right' | 'left' } }>(
                                            'demo2'
                                        )?.insetAlign.value
                                    }
                                    style={{ minWidth: 500 }}
                                    size={
                                        getValue<{
                                            size: { value?: 'medium' | 'large' | 'small' };
                                        }>('demo2')?.size.value
                                    }
                                >
                                    <FormItem
                                        {...formItemLayoutLarge}
                                        label={i18n.labels.username}
                                        hasFeedback
                                    >
                                        <Input />
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayoutLarge}
                                        label={i18n.labels.password}
                                        hasFeedback
                                        validateState="success"
                                    >
                                        <Input placeholder={i18n.help.password} />
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayoutLarge}
                                        label={i18n.labels.address}
                                        hasFeedback
                                    >
                                        <Input />
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayoutLarge}
                                        label={i18n.labels.others}
                                        validateState="error"
                                    >
                                        <Select style={{ minWidth: '100%' }}>
                                            <Option value="top">top</Option>
                                            <Option value="left">left</Option>
                                        </Select>
                                    </FormItem>
                                </Form>
                            </DemoGroup>
                        </Demo>
                    </Demo>
                </div>
            </ConfigProvider>
        );
    }
}

window.renderDemo = function (lang = 'en-us') {
    ReactDOM.render(<FunctionDemo lang={lang} />, document.getElementById('container'));
};

// 进行 DEMO 的初始化渲染
renderDemo('en-us');

initDemo('form');
