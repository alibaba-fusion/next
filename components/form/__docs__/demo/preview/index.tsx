import React from 'react';
import ReactDOM from 'react-dom';
import {
    Form,
    Input,
    Switch,
    Rating,
    Icon,
    Radio,
    Range,
    Checkbox,
    NumberPicker,
    Select,
    Upload,
} from '@alifd/next';

import type { ItemProps, SubmitProps } from '@alifd/next/types/form';
import type { SwitchProps } from '@alifd/next/types/switch';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 16,
    },
};
const fileList = [
    {
        uid: '0',
        name: 'IMG.png',
        state: 'done',
        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    },
    {
        uid: '1',
        name: 'IMG.png',
        percent: 50,
        state: 'uploading',
        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    },
    {
        uid: '2',
        name: 'IMG.png',
        state: 'error',
        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    },
];

class Demo extends React.Component {
    state = {
        preview: false,
    };
    submitHandler: SubmitProps['onClick'] = e => {
        console.log(e);
    };
    onPreviewChange: SwitchProps['onChange'] = checked => {
        this.setState({
            preview: checked,
        });
    };
    ratingPreview: ItemProps['renderPreview'] = (value?: number) => {
        return (
            <p>
                {value} {value! > 2.5 ? <Icon type="smile" /> : <Icon type="cry" />}
            </p>
        );
    };
    render() {
        return (
            <div>
                <Form
                    {...formItemLayout}
                    isPreview={this.state.preview}
                    style={{ maxWidth: '800px' }}
                >
                    <FormItem label="preview: " isPreview={false} style={{ marginBottom: 0 }}>
                        <Switch onChange={this.onPreviewChange} />
                    </FormItem>
                    <div style={{ height: 1, width: '100%', margin: '20px 0' }} />
                    <FormItem name="username" required label="Username:">
                        <Input
                            defaultValue="Fusion"
                            placeholder="Please enter your username"
                            id="username"
                            aria-required="true"
                        />
                    </FormItem>
                    <FormItem name="password" required label="Password:">
                        <Input
                            defaultValue="Fusion@2019"
                            htmlType="password"
                            placeholder="Please enter your password"
                            id="password"
                            aria-required="true"
                        />
                    </FormItem>

                    <FormItem name="link" required label="Link:">
                        <Input
                            addonTextBefore="http://"
                            addonTextAfter=".com"
                            defaultValue="alibaba"
                            aria-label="input with config of addonTextBefore and addonTextAfter"
                        />
                    </FormItem>

                    <FormItem name="number" required label="Number:">
                        <NumberPicker defaultValue={1} />
                    </FormItem>

                    <FormItem name="autoComplete" required label="autoComplete:">
                        <Select.AutoComplete defaultValue="selected" />
                    </FormItem>

                    <FormItem name="select" required label="multiple Select:">
                        <Select defaultValue={['apple', 'banana']} mode="multiple">
                            <Select.Option value="apple">Apple</Select.Option>
                            <Select.Option value="banana">Banana</Select.Option>
                        </Select>
                    </FormItem>

                    <FormItem name="rate" required label="Rating:">
                        <Rating defaultValue={4.5} aria-label="what's the rate score" />
                    </FormItem>

                    <FormItem
                        name="rate2"
                        required
                        label="Custom Render Rating:"
                        renderPreview={this.ratingPreview}
                    >
                        <Rating defaultValue={4.5} aria-label="what's the rate2 score" />
                    </FormItem>

                    <FormItem name="checkbox" required label="Checkbox:">
                        <Checkbox.Group defaultValue={['react', 'vue']}>
                            <Checkbox value="react">React</Checkbox>
                            <Checkbox value="vue">Vue</Checkbox>
                            <Checkbox value="angular">Angular</Checkbox>
                        </Checkbox.Group>
                    </FormItem>

                    <FormItem name="radio" required label="Radio:">
                        <Radio.Group defaultValue={'react'}>
                            <Radio value="react">React</Radio>
                            <Radio value="vue">Vue</Radio>
                            <Radio value="angular">Angular</Radio>
                        </Radio.Group>
                    </FormItem>

                    <FormItem name="range" required label="Range:">
                        <Range slider="double" defaultValue={[10, 80]} />
                    </FormItem>

                    <FormItem name="a11yRemark" label="Note:">
                        <Input.TextArea
                            placeholder="description"
                            defaultValue="Fusion 是一套企业级中后台UI的解决方案，致力于解决设计师与前端在产品体验一致性、工作协同、开发效率方面的问题。通过协助业务线构建设计系统，提供系统化工具协助设计师前端使用设计系统，下游提供一站式设计项目协作平台；打通互联网产品从设计到开发的工作流。"
                        />
                    </FormItem>

                    <FormItem label="Upload:">
                        <Upload name="upload" defaultValue={fileList} listType="text" />
                    </FormItem>
                    <FormItem label="Upload:">
                        <Upload name="upload2" defaultValue={fileList} listType="image" />
                    </FormItem>
                    <FormItem wrapperCol={{ offset: 7 }}>
                        <Form.Submit validate type="primary" onClick={this.submitHandler}>
                            Submit
                        </Form.Submit>
                        <Form.Reset style={{ marginLeft: 10 }}>Reset</Form.Reset>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
ReactDOM.render(<Demo />, mountNode);
