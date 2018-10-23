import React from 'react';
import Enzyme, {mount} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Input from '../../src/input';
import Field from '../../src/field';
import Form from '../../src/form/index';

const FormItem = Form.Item;
Enzyme.configure({ adapter: new Adapter() });

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};

describe('form', () => {
    describe('render', () => {
        it('Form ', () => {
            const wrapper = mount(<Form labelAlign="top"/>);
            assert(wrapper.props().labelAlign === 'top');
        });

        it('FormItem', () => {
            const wrapper = mount(<Form>
                <FormItem>
                    <Input />
                </FormItem>
                <FormItem>
                    <Input/>
                </FormItem>
                <FormItem>
                    test
                </FormItem>
            </Form>);
            assert(wrapper.props().children.length === 3);
        });

        it('should supoort Field', () => {

            class Demo extends React.Component {
                constructor(props) {
                    super(props);
                    this.field = new Field(this);
                }

                render() {
                    return <Form field={this.field}>
                        <FormItem label="test" hasFeedback>
                            <Input name="input1"/>
                        </FormItem>
                        <FormItem required requiredMessage="cant be null">
                            <Input name="input2"/>
                        </FormItem>
                        <FormItem label="test">
                            <Input />
                        </FormItem>
                    </Form>;
                }
            }

            const wrapper = mount(<Demo />);
            wrapper.find('input#input2').simulate('change', {target: {value: ''}});
            assert(wrapper.find('.next-form-item-help').hostNodes().text() === 'cant be null');

        });
    });
    describe('Form', () => {
        it('should supoort labelAlign', () => {
            const wrapper = mount(<Form labelAlign="inset">
                <FormItem  {...formItemLayout} label="test" >
                    <Input />
                </FormItem>
                <Form.Submit>submit</Form.Submit>
            </Form>);
            assert(wrapper.find('.next-inset').length !== 0);
            wrapper.find('form').simulate('submit');
        });
        it('should supoort onSubmit', (done) => {
            const onSubmit = sinon.spy();
            const wrapper = mount(<Form onSubmit={onSubmit}>
                <Input name="input"/>
                <button type="submit">submit</button>
            </Form>);
            wrapper.find('form').simulate('submit');
            assert(onSubmit.calledOnce);
            done();
        });
        it('should deprecated direction', () => {
          const wrapper1 = mount(<Form></Form>);
          const wrapper2 = mount(<Form direction={'hoz'}></Form>);

          assert(!wrapper1.instance()._instance.props.inline);
          assert(wrapper2.instance()._instance.props.inline);
        })
    });
    describe('FormItem', () => {
        it('should supoort props', () => {
            const wrapper = mount(<Form><FormItem onClick={() => {
            }}>
                <Input />
            </FormItem></Form>);
            assert(typeof wrapper.find('.next-form-item').props().onClick === 'function');
        });

        it('should supoort wrapperCol & labelCol', () => {
            const wrapper = mount(<Form>
                <FormItem {...formItemLayout} label="email:">
                    <Input />
                </FormItem>
            </Form>);

            assert(wrapper.find('div.next-form-item-label').hasClass('next-col-6'));
        });

        it('should supoort help', () => {
            const wrapper = mount(<Form>
                <FormItem required type="email" format="email" label="email:" help="help msg" >
                    <Input name="email"/>
                </FormItem>
            </Form>);

            assert(wrapper.find('.next-form-item-help').text() === 'help msg');
        });

        it('should supoort format', () => {
            class Demo extends React.Component {
                constructor(props) {
                    super(props);
                    this.field = new Field(this);
                }

                render() {
                    return <Form field={this.field}>
                        <FormItem label="test" type="email" format="email" hasFeedback>
                            <Input name="email"/>
                        </FormItem>
                    </Form>;
                }
            }

            const wrapper = mount(<Demo />);
            wrapper.find('input#email').simulate('change', {target: {value: '123'}});
            assert(wrapper.find('.next-form-item-help').at(0).hostNodes().text() === 'email 不是合法的 email 地址');
        });

        it('should supoort validateState', () => {
            const wrapper = mount(<Form>
                <FormItem validateState="success" hasFeedback>
                    <Input />
                </FormItem>
                <FormItem validateState="loading" hasFeedback>
                    <Input />
                </FormItem>
            </Form>);

            assert(wrapper.find('.next-form-item').first().hasClass('has-success'));
        });
        it('should supoort required', () => {
            const wrapper = mount(<Form>
                <FormItem required label="test">
                    <Input />
                </FormItem>
            </Form>);

            assert(wrapper.find('.next-form-item-label label').prop('required'));
        });
    });
});
