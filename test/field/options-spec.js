import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Input from '../../src/input';
import Field from '../../src/field/index';

Enzyme.configure({ adapter: new Adapter() });

/*global describe it */
describe('options', () => {
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
        const wrapper = mount(<Demo />);
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
        const wrapper = mount(<Demo />);
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
                                // console.log(this.field);
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
        const wrapper = mount(<Demo />);
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
        const wrapper = mount(<Demo />);
        wrapper.find('button').simulate('click');

        done();
    });

    it('values', function(done) {
        class Demo extends React.Component {
            constructor(props) {
                super(props);
                this.field = new Field(this, {
                    values: {
                        input: 'ttt',
                    },
                });
            }

            render() {
                const init = this.field.init;
                return (
                    <div>
                        <Input {...init('input')} />
                        <button
                            onClick={() => {
                                assert(this.field.getValue('input') === 'ttt');
                            }}
                        >
                            click
                        </button>
                    </div>
                );
            }
        }
        const wrapper = mount(<Demo />);
        wrapper.find('button').simulate('click');

        done();
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

            const wrapper = mount(<Input {...inited} />);
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

            const wrapper = mount(<Input {...inited} />);
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

            const wrapper = mount(<Input {...inited} />);
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
