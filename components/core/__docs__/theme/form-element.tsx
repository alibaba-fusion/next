import React from 'react';
import ReactDOM from 'react-dom';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import Input from '../../../input';
import Select from '../../../select';
import TimePicker from '../../../time-picker';
import Form from '../../../form';
import Rating from '../../../rating';
import Range from '../../../range';
import '../../../demo-helper/style';
import '../../../input/style';
import '../../../time-picker/style';
import '../../../select/style';
import '../../../form/style';
import '../../../rating/style';
import '../../../range/style';
import '../../form-element.scss';

interface Props {
    size?: 'small' | 'medium' | 'large';
}

const FormItem = Form.Item;

const dataSource = [
    { label: 'AAAA', value: 'a' },
    { label: 'BBBB', value: 'b' },
    { label: 'CCCC', value: 'c' },
    { label: 'DDDD', value: 'd' },
];

class FormElementDemo extends React.Component<Props> {
    render() {
        const { size } = this.props;
        const elementProps = {
            className: 'next-form-element',
            size,
            style: {
                width: '200px',
            },
        };

        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Input placeholder="请输入" {...elementProps} />
                        </td>
                        <td>
                            <Select {...elementProps} dataSource={dataSource} />
                        </td>
                        <td>
                            <TimePicker {...elementProps} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

const formItemLayout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 16,
    },
};
class FormElementPreviewDemo extends React.Component<Props> {
    render() {
        const { size } = this.props;
        const itemProps = {
            className: 'next-form-element',
        };
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Form
                                {...formItemLayout}
                                isPreview
                                size={size}
                                style={{ maxWidth: '800px' }}
                            >
                                <FormItem {...itemProps} required label="Username:">
                                    <Input
                                        defaultValue="Fusion"
                                        placeholder="Please enter your username"
                                        id="username"
                                        name="username"
                                        aria-required="true"
                                    />
                                </FormItem>

                                <FormItem {...itemProps} required label="Link:">
                                    <Input
                                        name="link"
                                        addonTextBefore="http://"
                                        addonTextAfter=".com"
                                        defaultValue="alibaba"
                                        aria-label="input with config of addonTextBefore and addonTextAfter"
                                    />
                                </FormItem>

                                <FormItem {...itemProps} required label="Time:">
                                    <TimePicker value="17:16:23" aria-required="true" />
                                </FormItem>

                                <FormItem {...itemProps} required label="autoComplete:">
                                    <Select.AutoComplete
                                        name="autoComplete"
                                        defaultValue="selected"
                                    />
                                </FormItem>

                                <FormItem {...itemProps} required label="multiple Select:">
                                    <Select
                                        name="select"
                                        defaultValue={['apple', 'banana']}
                                        mode="multiple"
                                    >
                                        <Select.Option value="apple">Apple</Select.Option>
                                        <Select.Option value="banana">Banana</Select.Option>
                                    </Select>
                                </FormItem>

                                <FormItem {...itemProps} required label="Rating:">
                                    <Rating
                                        defaultValue={4.5}
                                        name="rate"
                                        aria-label="what's the rate score"
                                    />
                                </FormItem>

                                <FormItem {...itemProps} required label="Range:">
                                    <Range name="range" slider="double" defaultValue={[10, 80]} />
                                </FormItem>

                                <FormItem {...itemProps} label="Note:">
                                    <Input.TextArea
                                        placeholder="description"
                                        name="a11yRemark"
                                        defaultValue="Fusion 是一套企业级中后台UI的解决方案，致力于解决设计师与前端在产品体验一致性、工作协同、开发效率方面的问题。通过协助业务线构建设计系统，提供系统化工具协助设计师前端使用设计系统，下游提供一站式设计项目协作平台；打通互联网产品从设计到开发的工作流。"
                                    />
                                </FormItem>

                                <FormItem {...itemProps} wrapperCol={{ offset: 7 }}>
                                    <Form.Submit validate type="primary">
                                        Submit
                                    </Form.Submit>
                                    <Form.Reset style={{ marginLeft: 10 }}>Reset</Form.Reset>
                                </FormItem>
                            </Form>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

window.renderDemo = function () {
    ReactDOM.render(
        <div>
            <Demo title="FormElement">
                <tr className="demo-group">
                    <td className="label"></td>
                    <td style={{ fontSize: '14px', height: '40px', lineHeight: '40px' }}>
                        配置该类容器的 Size、Font、Icon(size)、Corner
                        会涉及到联动的组件一起改变的有：Input、Select、TreeSelect、CascaderSelect、Timepicker、DatePicker、NumberPicker
                    </td>
                </tr>
                <DemoGroup label="Large">
                    <FormElementDemo size="large" />
                </DemoGroup>
                <DemoGroup label="Medium">
                    <FormElementDemo />
                </DemoGroup>
                <DemoGroup label="Small">
                    <FormElementDemo size="small" />
                </DemoGroup>
            </Demo>
            <Demo title="FormElement Preview">
                <DemoGroup label="Large">
                    <FormElementPreviewDemo size="large" />
                </DemoGroup>
                <DemoGroup label="Medium">
                    <FormElementPreviewDemo />
                </DemoGroup>
                <DemoGroup label="Small">
                    <FormElementPreviewDemo size="small" />
                </DemoGroup>
            </Demo>
        </div>,
        document.getElementById('container')
    );
};

renderDemo();

initDemo('form-element');
