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
