import React from 'react';
import Enzyme, { mount } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Input from '../../src/input';
import Field from '../../src/field';
import Select from '../../src/select';
import Radio from '../../src/radio';
import Checkbox from '../../src/checkbox';
import Form from '../../src/form/index';

const FormItem = Form.Item;
Enzyme.configure({ adapter: new Adapter() });

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

describe('form', () => {
    describe('render', () => {
        it('Form ', () => {
            const wrapper = mount(<Form labelAlign="top" />);
            assert(wrapper.props().labelAlign === 'top');
        });

        it('FormItem', () => {
            const wrapper = mount(
                <Form>
                    <FormItem>
                        <Input />
                    </FormItem>
                    <FormItem>
                        <Input />
                    </FormItem>
                    <FormItem>test</FormItem>
                </Form>
            );
            assert(wrapper.props().children.length === 3);
        });

        it('FormItem fullwidth', () => {
            const wrapper = mount(
                <Form>
                    <FormItem>
                        <Input />
                    </FormItem>
                    <FormItem fullWidth>
                        <Select />
                    </FormItem>
                    <FormItem>test</FormItem>
                </Form>
            );
            assert(wrapper.find('.next-form-item-fullwidth').exists());
        });

        it('should support Field', () => {
            class Demo extends React.Component {
                constructor(props) {
                    super(props);
                    this.field = new Field(this);
                }

                render() {
                    return (
                        <Form field={this.field}>
                            <FormItem label="test" hasFeedback>
                                <Input name="input1" />
                            </FormItem>
                            <FormItem required requiredMessage="cant be null">
                                <Input name="input2" />
                            </FormItem>
                            <FormItem label="test">
                                <Input />
                            </FormItem>
                        </Form>
                    );
                }
            }

            const wrapper = mount(<Demo />);
            wrapper
                .find('input#input2')
                .simulate('change', { target: { value: '' } });
            assert(
                wrapper
                    .find('.next-form-item-help')
                    .hostNodes()
                    .text() === 'cant be null'
            );
        });
    });
    describe('Form', () => {
        it('should support labelAlign', () => {
            const wrapper = mount(
                <Form labelAlign="inset">
                    <FormItem {...formItemLayout} label="test">
                        <Input />
                    </FormItem>
                    <Form.Submit>submit</Form.Submit>
                </Form>
            );
            assert(wrapper.find('.next-inset').length !== 0);
            wrapper.find('form').simulate('submit');
        });
        it('should support onSubmit', done => {
            const onSubmit = sinon.spy();
            const wrapper = mount(
                <Form onSubmit={onSubmit}>
                    <Input name="input" />
                    <button type="submit">submit</button>
                </Form>
            );
            wrapper.find('form').simulate('submit');
            assert(onSubmit.calledOnce);
            done();
        });
        it('should deprecated direction', () => {
            const wrapper1 = mount(<Form />);
            const wrapper2 = mount(<Form direction={'hoz'} />);

            assert(!wrapper1.instance()._instance.props.inline);
            assert(wrapper2.instance()._instance.props.inline);
        });
    });
    describe('FormItem', () => {
        it('should support props', () => {
            const wrapper = mount(
                <Form>
                    <FormItem onClick={() => {}}>
                        <Input />
                    </FormItem>
                </Form>
            );
            assert(
                typeof wrapper.find('.next-form-item').props().onClick ===
                    'function'
            );
        });

        it('should support component', () => {
            let wrapper = mount(<Form component="div">
                <FormItem required type="email" format="email" label="email:" help="help msg" >
                    <Input name="email" />
                </FormItem>
            </Form>);
            assert(wrapper.find('div.next-form'));

            const Tag = (props) => {
                return <div className="func-tag">{props.children}</div>;
            };
            wrapper = mount(<Form component={Tag}>
                <FormItem required type="email" format="email" label="email:" help="help msg" >
                    <Input name="email" />
                </FormItem>
            </Form>);
            assert(wrapper.find('div.func-tag'));
        });

        it('should support wrapperCol & labelCol', () => {
            const wrapper = mount(
                <Form>
                    <FormItem {...formItemLayout} label="email:">
                        <Input />
                    </FormItem>
                </Form>
            );

            assert(
                wrapper.find('div.next-form-item-label').hasClass('next-col-6')
            );
        });

        it('should support help', () => {
            const wrapper = mount(
                <Form>
                    <FormItem
                        required
                        type="email"
                        format="email"
                        label="email:"
                        help="help msg"
                    >
                        <Input name="email" />
                    </FormItem>
                </Form>
            );

            assert(wrapper.find('.next-form-item-help').text() === 'help msg');
        });

        it('should support format', () => {
            class Demo extends React.Component {
                constructor(props) {
                    super(props);
                    this.field = new Field(this);
                }

                render() {
                    return (
                        <Form field={this.field}>
                            <FormItem
                                label="test"
                                type="email"
                                format="email"
                                hasFeedback
                            >
                                <Input name="email" />
                            </FormItem>
                        </Form>
                    );
                }
            }

            const wrapper = mount(<Demo />);
            wrapper
                .find('input#email')
                .simulate('change', { target: { value: '123' } });
            assert(
                wrapper
                    .find('.next-form-item-help')
                    .at(0)
                    .hostNodes()
                    .text() === 'email 不是合法的 email 地址'
            );
        });

        it('should support validateState', () => {
            const wrapper = mount(
                <Form>
                    <FormItem validateState="success" hasFeedback>
                        <Input />
                    </FormItem>
                    <FormItem validateState="loading" hasFeedback>
                        <Input />
                    </FormItem>
                </Form>
            );

            assert(
                wrapper
                    .find('.next-form-item')
                    .first()
                    .hasClass('has-success')
            );
        });

        it('should support responsive', () => {
            const wrapper = mount(
                <Form responsive >
                    <FormItem colSpan={6} labelWidth={80}>
                        <Input />
                    </FormItem>
                    <FormItem colSpan={6} labelWidth={100}>
                        <Input />
                    </FormItem>
                </Form>
            );

            assert(wrapper.find('.next-responsive-grid'));
            assert(wrapper.find('.next-form-responsive-grid'));
        });

        it('should support responsive with react fragment', () => {
            const wrapper = mount(
                <Form responsive >
                    <FormItem colSpan={4} labelWidth={80}>
                        <Input />
                    </FormItem>
                    <FormItem colSpan={4} labelWidth={100}>
                        <Input />
                    </FormItem>
                    <React.Fragment>
                        <FormItem colSpan={4} labelWidth={100}>
                            <Input />
                        </FormItem>
                    </React.Fragment>
                    <FormItem colSpan={12} labelWidth={100}>
                        <Input />
                    </FormItem>
                </Form>
            );

            assert(wrapper.find('.next-responsive-grid'));
            assert(wrapper.find('.next-form-responsive-grid'));
        });

        it('should support required', () => {
            const wrapper = mount(
                <Form>
                    <FormItem required label="test">
                        <Input />
                    </FormItem>
                </Form>
            );

            assert(
                wrapper.find('.next-form-item-label label').prop('required')
            );
        });
        it('should support ref', () => {
            const saveRef = sinon.spy();
            const wrapper = mount(
                <Form>
                    <FormItem required label="test">
                        <Input name="testref" ref={saveRef}/>
                    </FormItem>
                </Form>
            );
            assert(saveRef.calledOnce);
        });

        it('should support defaultvalue', () => {
            const value = {
                'checkbox-1':true,
                'radio-1': true,
            };
            const wrapper = mount(
                <Form value={value}>
                    <FormItem label="不支持购物车下单:">
                        <Checkbox name="checkbox-1">（商品标签[6658]）</Checkbox>
                    </FormItem>
                    <FormItem label="不支持购物车下单:">
                        <Radio name="radio-1">（商品标签[6658]）</Radio>
                    </FormItem>
                </Form>
            );
            assert(wrapper.find('input#checkbox-1').props().checked);
            assert(wrapper.find('input#radio-1').props().checked);
        });

        it('should support size', () => {
            const wrapper = mount(
                <Form size="small">
                    <FormItem required label="test 1">
                        <Input className="my-input-s" name="test1" />
                    </FormItem>
                    <FormItem required label="test 2">
                        <Input className="my-input-l" name="test2" size="large" />
                    </FormItem>
                </Form>
            );
            assert(wrapper.find('.next-input.my-input-s').hasClass('next-small'));
            assert(wrapper.find('.next-input.my-input-l').hasClass('next-large'));
        });

        it('should support function children', () => {
            const wrapper = mount(
                <Form>
                    <FormItem required label="test">
                        <Input name="name" defaultValue="frank" />
                    </FormItem>
                    <FormItem required label="test">
                        {values => {
                            return values.name === 'frank' ? (
                                <Input name="frank" value="frankqian" />
                            ) : (
                                <Input name="unknow" value="unknow" />
                            );
                        }}
                    </FormItem>
                </Form>
            );

            assert(wrapper.find('input[id="unknow"]').length === 0);
            assert(
                wrapper.find('input[id="frank"]').prop('value') === 'frankqian'
            );

            wrapper
                .find('input[id="name"]')
                .simulate('change', { target: { value: '' } });
            assert(wrapper.find('input[id="frank"]').length === 0);
            assert(
                wrapper.find('input[id="unknow"]').prop('value') === 'unknow'
            );
        });
    });
});
