# 自定义布局

- order: 6

标签位置：上、左

配合 `Row` `Col` 控制表单内元素布局 (注意：FormItem非Form直接子元素需要不能直接直接在Form上设置布局)

:::lang=en-us
# Custom Layout

- order: 6

Label Position: top / left

With `Row` `Col` control the layout of the elements within the form (Note: FormItem is not Form direct child elements can not directly set the layout on the Form)

:::

---

````jsx
import { Form, Input, Switch, Grid, Button, Icon, Balloon } from '@alifd/next';


const FormItem = Form.Item;
const {Row, Col} = Grid;

const style = {
    padding: '20px',
    background: '#F7F8FA',
    margin: '20px'
};
const formItemLayout = {
    labelCol: {fixedSpan: 4}
};
const label = (<span>
name：<Balloon type="primary" trigger={<Icon type="prompt" size="small" />} closable={false}>blablablablablablablabla</Balloon>
</span>);

class Demo extends React.Component {
    state = {
        labelAlign: 'top'
    }
    handleChange = (v) => {
        this.setState({
            labelAlign: v ? 'left' : 'top'
        });
    }
    render() {
        const labelAlign = this.state.labelAlign;

        return (
            <div>
                <h3>Label Position</h3>
                <Switch checkedChildren="left" unCheckedChildren="top" checked={this.state.labelAlign === 'left'} onChange={this.handleChange} />

                <Form style={style}>
                    <Row gutter="4">
                        <Col>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label={label}
                                required
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Long search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Long search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Long search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'right' }}>
                            <Button type="primary" style={{ marginRight: '5px' }}>Search</Button>
                            <Button >Clear All</Button>
                        </Col>
                    </Row>
                </Form>


                <Form style={style}>
                    <Row gutter="4">
                        <Col>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label={label}
                                required
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Long search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                        </Col>
                        <Col>
                            <FormItem {...formItemLayout} labelAlign={labelAlign}
                                label="Search name:"
                            >
                                <Input placeholder="Enter a search name:"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'right' }}>
                            <Button type="primary" style={{ marginRight: '5px' }}>Search</Button>
                            <Button >Clear All</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
