import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Input from '../../src/input';
import Form from '../../src/form/index';
import Field from '../../src/field';

const FormItem = Form.Item;
const Submit = Form.Submit;
const Reset = Form.Reset;
Enzyme.configure({ adapter: new Adapter() });

describe('Submit', () => {
    it('should support defaultValue & defaultChecked', done => {
        const onClick = v => {
            assert(v.first === 'test');
            done();
        };
        const wrapper = mount(
            <Form>
                <FormItem>
                    <Input name="first" />
                </FormItem>
                <FormItem>
                    <Input name="second" />
                </FormItem>
                <Submit onClick={onClick}>click</Submit>
            </Form>
        );

        wrapper
            .find('input#first')
            .simulate('change', { target: { value: 'test' } });
        wrapper.find('button').simulate('click');
    });
    it('[name on FormItem] should support defaultValue & defaultChecked', done => {
        const onClick = v => {
            assert(v.first === 'test');
            done();
        };
        const wrapper = mount(
            <Form>
                <FormItem name="first" >
                    <Input />
                </FormItem>
                <FormItem name="second" >
                    <Input />
                </FormItem>
                <Submit onClick={onClick}>click</Submit>
            </Form>
        );

        wrapper
            .find('input#first')
            .simulate('change', { target: { value: 'test' } });
        wrapper.find('button').simulate('click');
    });
    it('Submit', done => {
        const onClick = v => {
            assert(v.first === 'test');
            done();
        };
        const wrapper = mount(
            <Form>
                <FormItem>
                    <Input name="first" />
                </FormItem>
                <FormItem>
                    <Input name="second" />
                </FormItem>
                <Submit onClick={onClick}>click</Submit>
            </Form>
        );

        wrapper
            .find('input#first')
            .simulate('change', { target: { value: 'test' } });
        wrapper.find('button').simulate('click');
    });
    it('[name on FormItem] Submit', done => {
        const onClick = v => {
            assert(v.first === 'test');
            done();
        };
        const wrapper = mount(
            <Form>
                <FormItem name="first" >
                    <Input />
                </FormItem>
                <FormItem name="second" >
                    <Input />
                </FormItem>
                <Submit onClick={onClick}>click</Submit>
            </Form>
        );

        wrapper
            .find('input#first')
            .simulate('change', { target: { value: 'test' } });
        wrapper.find('button').simulate('click');
    });
    it('Submit && validate', done => {
        const onClick = v => {
            assert(v.first === '');
            done();
        };
        const wrapper = mount(
            <Form>
                <FormItem required>
                    <Input name="first" />
                </FormItem>
                <FormItem required>
                   {values => <Input name="second" /> }
                </FormItem>
                <Submit validate onClick={onClick}>
                    click
                </Submit>
            </Form>
        );

        wrapper
            .find('input#first')
            .simulate('change', { target: { value: '' } });
        wrapper.update();
        assert(
            wrapper
                .find('.next-form-item-help')
                .first()
                .text() === 'first 是必填字段'
        );

        wrapper
        .find('input#second')
        .simulate('change', { target: { value: '' } });
        wrapper.update();
        assert(
            wrapper
                .find('.next-form-item-help')
                .last()
                .text() === 'second 是必填字段'
        );

        wrapper.find('button').simulate('click');
    });

    it('Submit && validate: minmaxMessage', done => {
        const onClick = v => {
            assert(v.first === '1');
            done();
        };
        const wrapper = mount(
            <Form>
                <FormItem min={10} minmaxMessage={'min is 10'}>
                    <Input name="first" />
                </FormItem>
                <Submit validate onClick={onClick}>
                    click
                </Submit>
            </Form>
        );

        wrapper
            .find('input#first')
            .simulate('change', { target: { value: '1' } });
        wrapper.update();
        assert(
            wrapper
                .find('.next-form-item-help')
                .first()
                .text() === 'min is 10'
        );
        wrapper.find('button').simulate('click');
    });

    it('Submit && validate: minmaxLengthMessage', done => {
        const onClick = v => {
            assert(v.first === '1');
            done();
        };
        const wrapper = mount(
            <Form>
                <FormItem
                    minLength={10}
                    minmaxLengthMessage={'min length is 10'}
                >
                    <Input name="first" />
                </FormItem>
                <Submit validate onClick={onClick}>
                    click
                </Submit>
            </Form>
        );

        wrapper
            .find('input#first')
            .simulate('change', { target: { value: '1' } });
        wrapper.update();
        assert(
            wrapper
                .find('.next-form-item-help')
                .first()
                .text() === 'min length is 10'
        );
        wrapper.find('button').simulate('click');
    });

    it('should supoort format', () => {
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

    it('[name on FormItem]should supoort format', () => {
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
                            name="email" 
                        >
                            <Input />
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

    it('Submit && validate (array)', done => {
        const onClick = v => {
            assert(v.first === '');
            done();
        };
        const wrapper = mount(
            <Form>
                <FormItem required>
                    <Input name="first" />
                </FormItem>
                <Submit validate={['first']} onClick={onClick}>
                    click
                </Submit>
            </Form>
        );

        wrapper
            .find('input#first')
            .simulate('change', { target: { value: '' } });
        wrapper.update();
        assert(
            wrapper
                .find('.next-form-item-help')
                .first()
                .text() === 'first 是必填字段'
        );
        wrapper.find('button').simulate('click');
    });

    it('autoValidate=false', done => {
        const onClick = v => {
            assert(v.first === '');
            done();
        };
        const wrapper = mount(
            <Form>
                <FormItem minLength={10} autoValidate={false}>
                    <Input name="first" />
                </FormItem>
                <Submit validate={['first']} onClick={onClick}>
                    click
                </Submit>
            </Form>
        );

        wrapper
            .find('input#first')
            .simulate('change', { target: { value: '' } });
        wrapper.update();
        assert(wrapper.find('.next-form-item-help').first().length === 0);
        wrapper.find('button').simulate('click');
        assert(
            wrapper
                .find('.next-form-item-help')
                .first()
                .text() === 'first 是必填字段'
        );
    });
    it('validate useLabelForErrorMessage', () => {
        const wrapper = mount(
            <Form useLabelForErrorMessage>
                <FormItem required label="姓名:" >
                    <Input name="first" />
                </FormItem>
            </Form>
        );

        wrapper
            .find('input#first')
            .simulate('change', { target: { value: '' } });
        wrapper.update();
        assert(
            wrapper
                .find('.next-form-item-help')
                .first()
                .text() === '姓名 是必填字段'
        );
    });
});

describe('Reset', () => {
    it('Reset', () => {
        const wrapper = mount(
            <Form>
                <FormItem>
                    <Input name="first" defaultValue="test" />
                </FormItem>
                <FormItem>
                    <Input name="second" />
                </FormItem>
                <Reset>click</Reset>
            </Form>
        );

        wrapper.find('button').simulate('click');
        assert(wrapper.find('input#first').prop('value') === '');
    });
    it('should supoort Reset toDefault', () => {
        const wrapper = mount(
            <Form>
                <FormItem>
                    <Input name="first" defaultValue="test" />
                </FormItem>
                <FormItem>
                    <Input name="second" />
                </FormItem>
                <Reset toDefault names={['first']}>
                    click
                </Reset>
            </Form>
        );

        wrapper.find('button').simulate('click');
        assert(wrapper.find('input#first').prop('value') === 'test');
    });

    it('should support custom filed', () => {
        class Demo extends React.Component {
            field = new Field(this, { forceUpdate: true });

            render() {
                const { init, setValue, reset } = this.field;

                return (
                    <div>
                        <Input {...init('input', { initValue: 'test' })} />
                        <Reset field={this.field} onClick={reset}>
                            click
                        </Reset>
                    </div>
                );
            }
        }

        const wrapper = mount(<Demo />);

        assert(wrapper.find('input').prop('value') === 'test');
        wrapper.find('button').simulate('click');
        assert(wrapper.find('input').prop('value') === '');
    });

    it('should warn & callback if field not exist', () => {
        let warnFlag = false;

        const wrapper = mount(<Reset onClick={() => (warnFlag = true)} />);

        wrapper.find('button').simulate('click');
        assert(warnFlag);
    });
});
