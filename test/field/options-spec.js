/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Input from '../../src/input';
import Field from '../../src/field/index';

Enzyme.configure({ adapter: new Adapter() });

/*global describe it afterEach */
describe('options', () => {
    let wrapper;
    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    })
    it('should support autoUnmount', function(done) {
        class Demo extends React.Component {
            state = {
                show: true,
            };
            field = new Field(this);

            render() {
                const init = this.field.init;
                return (
                    <div>
                        <Input {...init('input')} />{' '}
                        {this.state.show ? <Input {...init('input2')} /> : null}
                        <button
                            onClick={() => {
                                assert(
                                    'input2' in this.field.getValues() === false
                                );
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
        wrapper.setState({ show: false });
        wrapper.update();
        wrapper.find('button').simulate('click');
    });

    it('should support autoUnmount with same name', function(done) {
        class Demo extends React.Component {
            state = {
                show: true,
            };
            field = new Field(this);

            render() {
                const init = this.field.init;
                return (
                    <div>
                        {this.state.show ? (
                            <Input {...init('input')} key="1" />
                        ) : (
                            <Input {...init('input')} key="2" />
                        )}
                        <button
                            onClick={() => {
                                assert(
                                    'input' in this.field.getValues() === true
                                );
                            }}
                        >
                            click
                        </button>
                    </div>
                );
            }
        }
        wrapper = mount(<Demo />);
        wrapper.setState({ show: false });
        wrapper.find('button').simulate('click');

        done();
    });

    it('should support autoUnmount=false', function(done) {
        class Demo extends React.Component {
            state = {
                show: true,
            };
            field = new Field(this, { autoUnmount: false });

            render() {
                const init = this.field.init;
                return (
                    <div>
                        <Input {...init('input')} />
                        {this.state.show ? (
                            <Input
                                {...init('input2', { initValue: 'test2' })}
                            />
                        ) : null}
                        <button
                            onClick={() => {
                                assert(
                                    this.field.getValue('input2') === 'test2'
                                );
                            }}
                        >
                            click
                        </button>
                    </div>
                );
            }
        }
        wrapper = mount(<Demo />);
        wrapper.setState({ show: false });
        wrapper.find('button').simulate('click');

        done();
    });

    it('scrollToFirstError', function(done) {
        class Demo extends React.Component {
            constructor(props) {
                super(props);
                this.field = new Field(this, { scrollToFirstError: true });
            }

            render() {
                const init = this.field.init;
                return (
                    <div>
                        <Input
                            {...init('input', {
                                rules: [
                                    { required: true, message: 'cant be null' },
                                ],
                            })}
                        />
                        <button
                            onClick={() => {
                                this.field.validate((error, value, cb) => {
                                    assert(
                                        error.input.errors[0] === 'cant be null'
                                    );
                                });
                            }}
                        >
                            click
                        </button>
                    </div>
                );
            }
        }
        wrapper = mount(<Demo />);
        wrapper.find('button').simulate('click');

        done();
    });

    describe('values', () => {
        it('should set default field input values when given `values` in constructor', function() {
            const inputValue = 'my value';
            const field = new Field(this, {
                values: {
                    input: inputValue
                },
            });
            field.init('input');
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should set default field input values when given `values` and `parseName` = true in constructor', function() {
            const inputValue = 'my value';
            const field = new Field(this, {
                parseName: true,
                values: {
                    input: {
                        child: inputValue,
                    },
                },
            });
            field.init('input.child');
            assert.equal(field.getValue('input.child'), inputValue);
        });

        it('should allow access to field values before init when given `values` in constructor', function() {
            const inputValue = 'my value';
            const field = new Field(this, {
                values: {
                    input: inputValue,
                },
            });
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should reset `input` to undefined when given `values` in constructor and call `reset`', function() {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                values: {
                    input: fieldDefault,
                },
            });
            field.init('input');
            field.reset();
            assert.equal(field.getValue('input'), undefined);
        });

        it('should reset `input` to constructor `values` after calling `resetToDefault`', function() {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                values: {
                    input: fieldDefault,
                },
            });
            field.init('input');
            field.resetToDefault('input');
            assert.equal(field.getValue('input'), fieldDefault);
        });

        it('should reset `input` to undefined when given `values` and `parseName` = true in constructor and call `reset`', function() {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                parseName: true,
                values: {
                    input: {
                        child: fieldDefault
                    },
                },
            });
            field.init('input.child');
            field.reset();
            assert.equal(field.getValue('input.child'), undefined);
        });

        it('should reset `input` to undefined when given `values` and `parseName` = true in constructor and call `resetToDefault`', function() {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                parseName: true,
                values: {
                    input: {
                        child: fieldDefault
                    },
                },
            });
            field.init('input.child');
            field.resetToDefault('input.child');
            assert.equal(field.getValue('input.child'), fieldDefault);
        });
    });

    describe('should support parseName', () => {
        it('getValues', function(done) {
            const field = new Field(this, { parseName: true });
            field.init('user.name', { initValue: 'frankqian' });
            field.init('user.pwd', { initValue: 12345 });
            field.init('option[0]', { initValue: 'option1' });
            field.init('option[1]', { initValue: 'option2' });

            const values = field.getValues();

            assert(Object.keys(values).length === 2);
            assert(values.user.name === 'frankqian');
            assert(values.user.pwd === 12345);
            assert(values.option[0] === 'option1');

            assert(field.getValue('option[1]') === 'option2');

            done();
        });
        it('setValues', function(done) {
            const field = new Field(this, { parseName: true });
            field.init('user.name', { initValue: 'frankqian' });
            field.init('user.pwd', { initValue: 12345 });
            field.init('option[0]', { initValue: 'option1' });
            field.init('option[1]', { initValue: 'option2' });

            field.setValues({
                user: {
                    pwd: 'helloworld',
                },
                option: ['test1', 'test2'],
            });

            const values = field.getValues();

            assert(Object.keys(values).length === 2);

            assert(values.user.name === 'frankqian');
            assert(values.user.pwd === 'helloworld');
            assert(values.option[0] === 'test1');

            done();
        });
    });

    describe('should support autoValidate=false', () => {
        it('options.autoValidate=true', function(done) {
            const field = new Field(this, { autoValidate: true });
            const inited = field.init('input', { rules: [{ minLength: 10 }] });

            wrapper = mount(<Input {...inited} />);
            wrapper.find('input').simulate('change', {
                target: {
                    value: 'test',
                },
            });

            assert(field.getError('input') !== null);

            done();
        });
        it('options.autoValidate=false', function(done) {
            const field = new Field(this, { autoValidate: false });
            const inited = field.init('input', { rules: [{ minLength: 10 }] });

            wrapper = mount(<Input {...inited} />);
            wrapper.find('input').simulate('change', {
                target: {
                    value: 'test',
                },
            });

            assert(field.getError('input') === null);

            field.validate('input');
            assert(field.getError('input') !== null);

            done();
        });
        it('props.autoValidate=false', function(done) {
            const field = new Field(this);
            const inited = field.init('input', {
                autoValidate: false,
                rules: [{ minLength: 10 }],
            });

            wrapper = mount(<Input {...inited} />);
            wrapper.find('input').simulate('change', {
                target: {
                    value: 'test',
                },
            });

            assert(field.getError('input') === null);

            field.validate('input');
            assert(field.getError('input') !== null);

            done();
        });
    });
});
