/* eslint-disable react/no-multi-comp */
import React, { useState, useEffect } from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import Switch from '../../switch';
import Input from '../../input';
import Form from '../../form';
import Field from '../index';

Enzyme.configure({ adapter: new Adapter() });

const FormItem = Form.Item;

/* eslint-disable react/jsx-filename-extension */
/*global describe it afterEach */
describe('field', () => {
    describe('render', () => {
        it('should support Form', function (done) {
            class Demo extends React.Component {
                constructor(props) {
                    super(props);
                    this.field = new Field(this);
                }

                render() {
                    const init = this.field.init;
                    return (
                        <Form field={this.field}>
                            <FormItem>
                                <Input
                                    {...init(
                                        'input',
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'cant be null',
                                                },
                                                {
                                                    pattern: /hi/,
                                                    message: 'cant be null',
                                                },
                                            ],
                                        },
                                        { defaultValue: '3' }
                                    )}
                                />
                            </FormItem>
                            <button
                                onClick={() => {
                                    assert(this.field.getValue('input') === '3');
                                    this.field.setValue('b', 2);
                                    this.field.reset();
                                }}
                            >
                                click
                            </button>
                        </Form>
                    );
                }
            }
            const wrapper = mount(<Demo />);
            wrapper.find('button').simulate('click');

            done();
        });
        it('should support PureComponent', function (done) {
            class Demo extends React.PureComponent {
                constructor(props) {
                    super(props);
                    this.field = new Field(this, { forceUpdate: true });
                }

                render() {
                    const init = this.field.init;
                    return <Input {...init('input')} />;
                }
            }
            const wrapper = mount(<Demo />);
            wrapper.find('input').simulate('change', {
                target: {
                    value: 'test',
                },
            });
            assert(wrapper.find('input').prop('value') === 'test');

            // PureComponent will not render by second update use this.setState();
            // so you should use this.fourceUpdate
            wrapper.find('input').simulate('change', {
                target: {
                    value: 'test2',
                },
            });
            assert(wrapper.find('input').prop('value') === 'test2');
            done();
        });

        it('should support origin input/checkbox/radio', function (done) {
            class Demo extends React.Component {
                constructor(props) {
                    super(props);
                    this.field = new Field(this);
                }

                render() {
                    const init = this.field.init;
                    return (
                        <Form field={this.field}>
                            <FormItem>
                                <input {...init('input', { initValue: '3' })} />
                            </FormItem>
                            <FormItem>
                                <input
                                    type="checkbox"
                                    {...init('checkbox', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'cant be null',
                                            },
                                            {
                                                pattern: /hi/,
                                                message: 'cant be null',
                                            },
                                        ],
                                    })}
                                />
                            </FormItem>
                            <FormItem>
                                <input type="radio" {...init('radio', { valueName: 'checked' })} />
                            </FormItem>
                            <button
                                onClick={() => {
                                    assert(this.field.getValue('input') === '3');
                                    this.field.getValues();
                                }}
                            >
                                click
                            </button>
                        </Form>
                    );
                }
            }
            const wrapper = mount(<Demo />);
            wrapper.find('button').simulate('click');
            wrapper.find('input[type="checkbox"]').simulate('change');
            wrapper.find('input[type="radio"]').simulate('change');

            done();
        });
        it('should support hooks', function (done) {
            function Demo() {
                const field = Field.useField();

                const init = field.init;
                return (
                    <Form field={field}>
                        <FormItem>
                            <Input
                                {...init(
                                    'input',
                                    {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'cant be null',
                                            },
                                            {
                                                pattern: /hi/,
                                                message: 'cant be null',
                                            },
                                        ],
                                    },
                                    { defaultValue: '3' }
                                )}
                            />
                        </FormItem>
                        <button
                            onClick={() => {
                                assert(field.getValue('input') === '3');
                                field.setValue('b', 2);
                                field.reset();
                            }}
                        >
                            click
                        </button>
                    </Form>
                );
            }
            const wrapper = mount(<Demo />);
            wrapper.find('button').simulate('click');

            done();
        });
    });
    describe('init', () => {
        let wrapper;
        afterEach(() => {
            if (wrapper) {
                wrapper.unmount();
                wrapper = null;
            }
        });

        it('init(input)', function (done) {
            const field = new Field(this);
            const inited = field.init('input');

            assert(typeof inited.ref === 'function');
            assert(inited.id === 'input');
            assert(inited['data-meta'] === 'Field');
            assert('onChange' in inited);

            field.init('input', {
                rules: [
                    {
                        required: true,
                    },
                ],
            });

            field.init('input');
            assert(field._get('input').rules.length === 0);

            done();
        });
        it('initValue', function (done) {
            const field = new Field(this);
            const inited = field.init('input', { initValue: 2 });

            assert(inited.value === 2);
            field.init('input', { initValue: 24 });
            assert(inited.value === 2);

            assert(field.init('input2', { initValue: '' }).value === '');

            done();
        });
        it('valueName', function (done) {
            const field = new Field(this);
            const inited = field.init('input', {
                initValue: true,
                valueName: 'checked',
            });
            assert(inited.checked === true);

            done();
        });

        it('props', function (done) {
            const field = new Field(this);
            const inited = field.init('input', {
                initValue: true,
                valueName: 'checked',
                props: {
                    a: 1,
                    defaultChecked: false,
                },
            });
            assert(inited.a === 1);
            assert(inited.checked === true);

            done();
        });

        it('custom Event: onChange', function (done) {
            const onChange = sinon.spy();
            const field = new Field(this, { onChange });
            const inited = field.init('input', {
                props: {
                    onChange,
                },
            });

            const wrapper = mount(<Input {...inited} />);
            wrapper.find('input').simulate('change', {
                target: {
                    value: 'test',
                },
            });
            assert(field.getValue('input') === 'test');
            assert(onChange.callCount === 2);

            const field2 = new Field(this, {
                onChange: (name, value) => {
                    assert(value === 'test');
                },
            });
            const wrapper2 = mount(
                <Input
                    {...field2.init('input', {
                        props: {
                            onChange(value) {
                                assert(value === 'test');
                            },
                        },
                    })}
                />
            );
            wrapper2.find('input').simulate('change', {
                target: {
                    value: 'test',
                },
            });
            assert(field2.getValue('input') === 'test');

            done();
        });
        it('getValueFromEvent', function (done) {
            const field = new Field(this, {
                onChange: (name, value) => {
                    assert(value === 'test!');
                },
            });

            const inited = field.init('input', {
                getValueFromEvent: a => {
                    assert(a === 'test');
                    return `${a}!`;
                },
            });

            const wrapper = mount(<Input {...inited} />);
            wrapper.find('input').simulate('change', {
                target: {
                    value: 'test',
                },
            });

            assert(field.getValue('input') === 'test!');

            done();
        });
        it('getValueFormatter & setValueFormatter', function (done) {
            const field = new Field(this, {
                onChange: (name, value) => {
                    assert(value === 'test!');
                },
            });

            const inited = field.init('input', {
                initValue: 'abcd',
                getValueFormatter: a => {
                    assert(a === 'test');
                    return `test!`;
                },
                setValueFormatter: a => {
                    assert(a === 'abcd');
                    return `test!!`;
                },
            });

            const wrapper = mount(<Input {...inited} />);
            wrapper.find('input').simulate('change', {
                target: {
                    value: 'test',
                },
            });

            assert(field.getValue('input') === 'test!');

            done();
        });

        it('rules', function (done) {
            const field = new Field(this);
            field.init('input', {
                rules: [
                    {
                        required: true,
                    },
                ],
            });

            assert(field._get('input').rules.length === 1);

            field.init('input2', {
                rules: {
                    required: true,
                },
            });

            assert(field._get('input2').rules.length === 1);

            done();
        });

        it('should support control through `setState`', function (done) {
            class Demo extends React.Component {
                state = {
                    show: true,
                    inputValue: 'start',
                };
                field = new Field(this);

                render() {
                    const init = this.field.init;
                    return (
                        <div>
                            <Input
                                {...init('input', { props: { value: this.state.inputValue } })}
                            />{' '}
                            <button
                                id="set"
                                onClick={() => {
                                    assert(this.field.getValue('input') === 'start');
                                    this.setState({
                                        inputValue: 'end',
                                    });
                                }}
                            >
                                click
                            </button>
                            <button
                                id="get"
                                onClick={() => {
                                    assert(this.field.getValue('input') === 'end');
                                    done();
                                }}
                            >
                                click
                            </button>
                        </div>
                    );
                }
            }

            wrapper = mount(<Demo />);
            wrapper.find('#set').simulate('click');
            wrapper.find('#get').simulate('click');
        });

        it('should support control through `setState` when `parseName` is true', function (done) {
            class Demo extends React.Component {
                state = {
                    show: true,
                    inputValue: 'start',
                };
                field = new Field(this, { parseName: true });

                render() {
                    const init = this.field.init;
                    return (
                        <div>
                            <Input
                                {...init('input', { props: { value: this.state.inputValue } })}
                            />{' '}
                            <button
                                id="set"
                                onClick={() => {
                                    assert(this.field.getValue('input') === 'start');
                                    this.setState({
                                        inputValue: 'end',
                                    });
                                }}
                            >
                                click
                            </button>
                            <button
                                id="get"
                                onClick={() => {
                                    assert(this.field.getValue('input') === 'end');
                                    done();
                                }}
                            >
                                click
                            </button>
                        </div>
                    );
                }
            }

            wrapper = mount(<Demo />);
            wrapper.find('#set').simulate('click');
            wrapper.find('#get').simulate('click');
        });
    });

    describe('behaviour', () => {
        it('getValue & getValues & setValue & setValues', function (done) {
            const field = new Field(this);
            field.init('input', { initValue: 1 });
            field.init('input2', { initValue: 2 });
            field.init('input3.name', { initValue: 3 });

            field.setValue('input', 2);
            assert(field.getValue('input') === 2);
            assert(field.getValue('input3.name') === 3);
            assert(Object.keys(field.getValues()).length === 3);
            assert(field.getValues().input === 2);

            field.setValues({ input: 3, input2: 4 });

            assert(field.getValue('input') === 3);
            assert(field.getValue('input2') === 4);

            done();
        });

        it('should return `undefined` for `getValue` on uninitialized field', function () {
            const field = new Field(this);
            assert.equal(field.getValue('input'), undefined);
        });

        it('should return empty object for `getValues` on uninitialized field', function () {
            const field = new Field(this);
            assert.equal(Object.keys(field.getValues()).length, 0);
        });

        it('should set value with `setValue` on uninitialized field', function () {
            const field = new Field(this);
            field.setValue('input', 1);
            field.init('input');
            assert.equal(field.getValue('input'), 1);
        });

        it('should set value with `setValues` on uninitialized field', function () {
            const field = new Field(this);
            field.setValues({ input: 1 });
            field.init('input');
            assert.equal(field.getValue('input'), 1);
        });

        it('should return value from `setValue` when calling `getValue` on uninitialized field', function () {
            const field = new Field(this);
            field.setValue('input', 1);
            assert.equal(field.getValue('input'), 1);
        });

        it('should return value from `setValue` when calling `getValues` on uninitialized field', function () {
            const field = new Field(this);
            field.setValue('input', 1);
            assert.equal(field.getValues().input, 1);
        });

        it('should return values from `setValue` and init when calling `getValues`', function () {
            const field = new Field(this);
            field.setValue('input', 1);
            field.init('input2', { initValue: 2 });
            assert.deepEqual(field.getValues(), { input: 1, input2: 2 });
        });

        it('should return `setValue` value instead of initValue', function () {
            const field = new Field(this);
            field.setValue('input', 1);
            field.init('input', { initValue: 2 });
            assert.deepEqual(field.getValues(), { input: 1 });
        });

        it('setError & setErrors & getError & getErrors', function (done) {
            const field = new Field(this);
            field.setError('input', 'error1');

            field.init('input');
            field.init('input2');

            field.setError('input', 'error1');
            assert(field.getError('input')[0] === 'error1');
            assert(field.getErrors(['input']).input[0] === 'error1');

            field.setError('input2', ['error2']);
            assert(field.getError('input2')[0] === 'error2');

            field.setErrors({ input: 'error 1', input2: 'error 2' });
            field.setError('input', '');

            assert(field.getError('input') === null);
            assert(field.getError('input2')[0] === 'error 2');

            field.setError('input', <span>hello</span>);
            assert(React.isValidElement(field.getError('input')[0]) === true);

            done();
        });
        it('getState', function (done) {
            const field = new Field(this);

            field.init('input');

            field.setError('input', 'error1');

            assert(field.getState('input') === 'error');
            assert(field.getState('') === '');

            done();
        });

        it('validate', function (done) {
            const field = new Field(this);
            const inited = field.init('input', {
                rules: [{ required: true, message: 'cant be null' }],
            });

            const wrapper = mount(<Input {...inited} />);
            wrapper.find('input').simulate('change', {
                target: {
                    value: '',
                },
            });

            field.validate(error => {
                assert(error.input.errors[0] === 'cant be null');
            });
            field.validate('input', error => {
                assert(error.input.errors[0] === 'cant be null');
            });
            field.validate(['input'], error => {
                assert(error.input.errors[0] === 'cant be null');
            });

            field.init('input2', {
                initValue: 123,
                rules: [
                    {
                        required: true,
                        message: 'cant be 0',
                    },
                ],
            });
            field.validate(['input2'], (error, value, cb) => {
                assert(error === null);
            });

            // field.init('input3', {initValue:0, rules: [{required: true, message:'cant be 0' }]});
            // field.validate(['input3'], (error, value, cb)=> {
            //     assert(error === 'cant be 0');
            // })

            done();
        });

        it('should show setError on validate', function (done) {
            const field = new Field(this);
            const inited = field.init('input');
            const wrapper = mount(<Input {...inited} />);

            field.setError('input', 'my error');
            field.validate('input', err => {
                assert(err.input.errors[0] === 'my error');
                wrapper.unmount();
                done();
            });
        });

        it('should merge setError and rules on validate', function (done) {
            const field = new Field(this);
            const inited = field.init('input');
            const inited2 = field.init('input2', {
                rules: [{ required: true, message: 'cant be null' }],
            });
            const wrapper = mount(<Input {...inited} />);
            const wrapper2 = mount(<Input {...inited2} />);

            field.setError('input', 'my error');
            field.validate(err => {
                assert(err.input.errors[0] === 'my error');
                assert(err.input2.errors[0] === 'cant be null');

                wrapper.unmount();
                wrapper2.unmount();
                done();
            });
        });

        it('should overwrite setError errors when using rules', function (done) {
            const field = new Field(this);

            const inited = field.init('input', {
                rules: [{ required: true, message: 'cant be null' }],
            });
            const wrapper = mount(<Input {...inited} />);

            field.setError('input', 'my error');
            field.validate(err => {
                assert(err.input.errors.length === 1);
                assert(err.input.errors[0] === 'cant be null');

                wrapper.unmount();
                done();
            });
        });

        describe('reset', function () {
            it('should set value to `undefined` on `reset()` if init with `initValue`', function () {
                const field = new Field(this);
                field.init('input', { initValue: '1' });

                field.reset();
                assert(field.getValue('input') === undefined);
            });

            it('should set only named value to `undefined` on `reset()` if init with `initValue`', function () {
                const field = new Field(this);
                field.init('input', { initValue: '1' });
                field.init('input2', { initValue: '2' });

                field.reset('input');
                assert.deepEqual(field.getValues(), { input: undefined, input2: '2' });
            });

            it('should set value to `initValue` on `resetToDefaults()` if init with `initValue`', function () {
                const field = new Field(this);
                field.init('input', { initValue: '4' });
                field.setValue('input', '33');

                field.resetToDefault();
                assert(field.getValue('input') === '4');
            });

            it('should set only named value to `initValue` on `resetToDefaults()` if init with `initValue`', function () {
                const field = new Field(this);
                field.init('input', { initValue: '4' });
                field.setValue('input', '33');
                field.init('input2', { initValue: '4' });
                field.setValue('input2', '33');

                field.resetToDefault('input');
                assert.deepEqual(field.getValues(), { input: '4', input2: '33' });
            });

            it('should set only named value to `undefined` on `resetToDefaults()` if init without `initValue`', function () {
                const field = new Field(this);
                field.init('input');
                field.setValue('input', 'a value');
                field.init('input'); // simulation a rerender

                field.resetToDefault();
                assert.deepEqual(field.getValues(), { input: undefined });
            });
        });

        it('remove', function (done) {
            const field = new Field(this);
            field.init('input', { initValue: 1 });
            field.init('input2', { initValue: 1 });
            field.init('input3', { initValue: 1 });

            field.remove('input');
            assert(field._get('input') === null);
            assert(field._get('input2') !== null);

            field.remove(['input', 'input2']);
            assert(field._get('input') === null);
            assert(field._get('input2') === null);

            done();
        });
        describe('spliceArray', function () {
            it('should remove the middle field item', () => {
                const field = new Field(this);
                field.init('input.0', { initValue: 0 });
                field.init('input.1', { initValue: 1 });
                field.init('input.2', { initValue: 2 });

                field.spliceArray('input.{index}', 1);

                assert(field.getValue('input.0') === 0);
                assert(field.getValue('input.1') === 2);
                assert(field.getValue('input.2') === undefined);

                field.init('key.0.id', { initValue: 0 });
                field.init('key.1.id', { initValue: 1 });
                field.init('key.2.id', { initValue: 2 });

                field.spliceArray('key.{index}', 1);

                assert(field.getValue('key.0.id') === 0);
                assert(field.getValue('key.1.id') === 2);
                assert(field.getValue('key.2.id') === undefined);
            });

            it('should remove the first 2 field items', () => {
                const field = new Field(this);
                field.init('input.0', { initValue: 0 });
                field.init('input.1', { initValue: 1 });
                field.init('input.2', { initValue: 2 });

                field.spliceArray('input.{index}', 1);
                field.spliceArray('input.{index}', 0);
                assert(field.getValue('input.0') === 2);
                assert(field.getValue('input.1') === undefined);
                assert(field.getValue('input.2') === undefined);

                field.init('key.0.id', { initValue: 0 });
                field.init('key.1.id', { initValue: 1 });
                field.init('key.2.id', { initValue: 2 });

                field.spliceArray('key.{index}', 1);
                field.spliceArray('key.{index}', 0);

                assert(field.getValue('key.0.id') === 2);
                assert(field.getValue('key.1.id') === undefined);
                assert(field.getValue('key.2.id') === undefined);
            });

            it('should make no change `keymatch` does not contain `{index}', () => {
                const field = new Field(this);
                field.init('input.0', { initValue: 0 });
                field.init('input.1', { initValue: 1 });
                field.init('input.2', { initValue: 2 });

                field.spliceArray('input', 0);
                assert(field.getValue('input.0') === 0);
                assert(field.getValue('input.1') === 1);
                assert(field.getValue('input.2') === 2);
            });

            it('should remove the middle field item when parseName=true', () => {
                const field = new Field(this, { parseName: true });
                field.init('input.0', { initValue: 0 });
                field.init('input.1', { initValue: 1 });
                field.init('input.2', { initValue: 2 });

                field.spliceArray('input.{index}', 1);

                assert(field.getValue('input.0') === 0);
                assert(field.getValue('input.1') === 2);
                assert(field.getValue('input.2') === undefined);
                assert(field.getValue('input').length === 2);
            });
        });

        describe('addArrayValue && deleteArrayValue', function () {
            it('should remove field item with value like [1,2]', () => {
                const field = new Field(this, { parseName: true });
                field.init('key.0', { initValue: 0 });
                field.init('key.1', { initValue: 1 });
                field.init('key.2', { initValue: 2 });
                field.init('key.3', { initValue: 3 });

                field.deleteArrayValue('key', 1);

                assert(field.getValue('key.0') === 0);
                assert(field.getValue('key.1') === 2);
                assert(field.getValue('key.2') === 3);
                assert(field.getValue('key.3') === undefined);

                field.deleteArrayValue('key', 1);

                assert(field.getValue('key.0') === 0);
                assert(field.getValue('key.1') === 3);
                assert(field.getValue('key.2') === undefined);

                field.deleteArrayValue('key', 0);

                assert(field.getValue('key.0') === 3);
                assert(field.getValue('key.1') === undefined);
                assert(field.getValue('key.2') === undefined);
                assert(field.getValue('key.3') === undefined);
            });

            it('should remove field item with value like [{id:1},{id:2}]', () => {
                const field = new Field(this, { parseName: true });
                field.init('key2.0.id', { initValue: 0 });
                field.init('key2.1.id', { initValue: 1 });
                field.init('key2.2.id', { initValue: 2 });
                field.init('key2.3.id', { initValue: 3 });

                field.deleteArrayValue('key2', 1);

                assert(field.getValue('key2.0.id') === 0);
                assert(field.getValue('key2.1.id') === 2);
                assert(field.getValue('key2.2.id') === 3);
                assert(field.getValue('key2.3.id') === undefined);

                field.deleteArrayValue('key2', 1);
                assert(field.getValue('key2.0.id') === 0);
                assert(field.getValue('key2.1.id') === 3);
                assert(field.getValue('key2.2.id') === undefined);

                field.deleteArrayValue('key2', 0);
                assert(field.getValue('key2.0.id') === 3);
                assert(field.getValue('key2.1.id') === undefined);
                assert(field.getValue('key2.2.id') === undefined);
                assert(field.getValue('key2.3.id') === undefined);
            });
            it('should remove 2 field item with deleteArrayValue(key,index,2)', () => {
                const field = new Field(this, { parseName: true });
                field.init('key.0', { initValue: 0 });
                field.init('key.1', { initValue: 1 });
                field.init('key.2', { initValue: 2 });
                field.init('key.3', { initValue: 3 });

                field.deleteArrayValue('key', 1, 2);

                assert(field.getValue('key.0') === 0);
                assert(field.getValue('key.1') === 3);
                assert(field.getValue('key.2') === undefined);
                assert(field.getValue('key.3') === undefined);

                field.init('key2.0.id', { initValue: 0 });
                field.init('key2.1.id', { initValue: 1 });
                field.init('key2.2.id', { initValue: 2 });
                field.init('key2.3.id', { initValue: 3 });

                field.deleteArrayValue('key2', 1, 2);

                assert(field.getValue('key2.0.id') === 0);
                assert(field.getValue('key2.1.id') === 3);
                assert(field.getValue('key2.2.id') === undefined);
                assert(field.getValue('key2.3.id') === undefined);
            });
            it('should add item with addArrayValue(key,index,value)', () => {
                const field = new Field(this, { parseName: true });
                field.init('key.0', { initValue: 0 });
                field.init('key.1', { initValue: 1 });
                field.init('key.2', { initValue: 2 });

                field.addArrayValue('key', 1, 100);

                assert(field.getValue('key.0') === 0);
                assert(field.getValue('key.1') === 100);
                assert(field.getValue('key.2') === 1);
                assert(field.getValue('key.3') === 2);

                field.init('key2.0.id', { initValue: 0 });
                field.init('key2.1.id', { initValue: 1 });
                field.init('key2.2.id', { initValue: 2 });

                field.addArrayValue('key2', 1, { id: 100 });

                assert(field.getValue('key2.0.id') === 0);
                assert(field.getValue('key2.1.id') === 100);
                assert(field.getValue('key2.2.id') === 1);
                assert(field.getValue('key2.3.id') === 2);
            });
            it('should add 2 item with spliceValue(key,index, 0, ...argv)', () => {
                const field = new Field(this, { parseName: true });
                field.init('key.0', { initValue: 0 });
                field.init('key.1', { initValue: 1 });
                field.init('key.2', { initValue: 2 });

                field.addArrayValue('key', 1, 100, 20);

                assert(field.getValue('key.0') === 0);
                assert(field.getValue('key.1') === 100);
                assert(field.getValue('key.2') === 20);
                assert(field.getValue('key.3') === 1);
                assert(field.getValue('key.4') === 2);

                field.init('key2.0.id', { initValue: 0 });
                field.init('key2.1.id', { initValue: 1 });
                field.init('key2.2.id', { initValue: 2 });

                field.addArrayValue('key2', 1, { id: 100 }, { id: 20 });

                assert(field.getValue('key2.0.id') === 0);
                assert(field.getValue('key2.1.id') === 100);
                assert(field.getValue('key2.2.id') === 20);
                assert(field.getValue('key2.3.id') === 1);
                assert(field.getValue('key2.4.id') === 2);
            });

            it('should make no change `key` does not exist', () => {
                const field = new Field(this, { parseName: true });
                field.init('key.0', { initValue: 0 });
                field.init('key.1', { initValue: 1 });
                field.init('key.2', { initValue: 2 });

                field.deleteArrayValue('notexist', 0);
                assert(field.getValue('key.0') === 0);
                assert(field.getValue('key.1') === 1);
                assert(field.getValue('key.2') === 2);

                field.init('key2.0.id', { initValue: 0 });
                field.init('key2.1.id', { initValue: 1 });
                field.init('key2.2.id', { initValue: 2 });

                field.deleteArrayValue('notexist', 1);

                assert(field.getValue('key2.0.id') === 0);
                assert(field.getValue('key2.1.id') === 1);
                assert(field.getValue('key2.2.id') === 2);
            });
        });
    });

    describe('watch', () => {
        function Demo({ onWatchChange, options, onUnmount }) {
            const [showInput, setShowInput] = useState(false);
            const field = Field.useField(options);
            Field.useWatch(field, ['switch', 'input'], (name, value, oldValue, triggerType) => {
                onWatchChange && onWatchChange(name, value, oldValue, triggerType);
                if (name === 'switch') {
                    setShowInput(value);
                }
            });
            useEffect(() => {
                return () => {
                    onUnmount && onUnmount(field);
                };
            }, []);
            return (
                <div>
                    <Switch {...field.init('switch', { valueName: 'checked', initValue: false })} />
                    {showInput && <Input {...field.init('input', { initValue: 'abc' })} />}

                    <button data-reset onClick={() => field.reset()}>
                        reset
                    </button>
                    <button data-setValue onClick={() => field.setValue('switch', true)}>
                        setValue
                    </button>
                    <button
                        data-setValues
                        onClick={() => field.setValues({ switch: false, input: 'xyz' })}
                    >
                        setValues
                    </button>
                </div>
            );
        }
        it('should trigger by init', () => {
            const callback = sinon.spy();
            const wrapper = mount(<Demo onWatchChange={callback} />);
            assert(callback.calledOnceWith('switch', false, undefined, 'init'));
            wrapper.unmount();
        });
        it('should not trigger when has init value', () => {
            const callback = sinon.spy();
            const wrapper = mount(
                <Demo onWatchChange={callback} options={{ values: { switch: true } }} />
            );
            assert(callback.notCalled);
            wrapper.unmount();
        });
        it('should trigger by change', () => {
            const callback = sinon.spy();
            const wrapper = mount(<Demo onWatchChange={callback} />);
            wrapper.find('.next-switch').simulate('click');
            assert(callback.calledWith('switch', true, false, 'change'));
            assert(callback.calledWith('input', 'abc', undefined, 'init'));
            wrapper.find('.next-input input').simulate('change', { target: { value: 'xyz' } });
            assert(callback.calledWith('input', 'xyz', 'abc', 'change'));
            assert.equal(callback.callCount, 4);
            wrapper.unmount();
        });
        it('should trigger by unmount', () => {
            const callback = sinon.spy();
            const wrapper = mount(<Demo onWatchChange={callback} />);
            wrapper.find('.next-switch').simulate('click');
            assert(wrapper.find('.next-input').length);
            wrapper.find('.next-switch').simulate('click');
            assert(callback.lastCall.calledWith('input', undefined, 'abc', 'unmount'));
            wrapper.unmount();
        });
        it('should trigger by reset', () => {
            const callback = sinon.spy();
            const wrapper = mount(<Demo onWatchChange={callback} />);
            wrapper.find('.next-switch').simulate('click');
            assert.equal(callback.callCount, 3);
            wrapper.find('button[data-reset]').simulate('click');
            assert(callback.calledWith('switch', undefined, true, 'reset'));
            assert(callback.calledWith('input', undefined, 'abc', 'reset'));
            wrapper.unmount();
        });
        it('should trigger by setValue', () => {
            const callback = sinon.spy();
            const wrapper = mount(<Demo onWatchChange={callback} />);
            wrapper.find('button[data-setValue]').simulate('click');
            assert(callback.calledWith('switch', true, false, 'setValue'));

            wrapper.find('button[data-setValues]').simulate('click');
            assert(callback.calledWith('switch', false, true, 'setValue'));
            assert(callback.calledWith('input', 'xyz', 'abc', 'setValue'));
            wrapper.unmount();
        });
        it('should unwatch work', () => {
            const callback = sinon.spy();
            const wrapper = mount(<Demo onUnmount={callback} />);
            wrapper.unmount();
            assert(callback.calledOnce);
            const field = callback.getCall(0).args[0];
            for (const set of Object.values(field.listeners)) {
                assert(!set.size);
            }
        });
    });
});
