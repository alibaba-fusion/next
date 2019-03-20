import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import Input from '../../src/input';
import Form from '../../src/form';
import Field from '../../src/field/index';

Enzyme.configure({ adapter: new Adapter() });

const FormItem = Form.Item;

describe('field', () => {
    describe('render', () => {
        it('should support Form', done => {
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
                                    assert(
                                        this.field.getValue('input') === '3'
                                    );
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
        it('should support PureComponent', done => {
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

        it('should support origin input/checkbox/radio', done => {
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
                                <input
                                    type="radio"
                                    {...init('radio', { valueName: 'checked' })}
                                />
                            </FormItem>
                            <button
                                onClick={() => {
                                    assert(
                                        this.field.getValue('input') === '3'
                                    );
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
    });
    describe('init', () => {
        it('init(input)', done => {
            let field = new Field();
            let inited = field.init('input');

            assert(typeof inited['ref'] === 'function');
            assert(inited['id'] === 'input');
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
        it('initValue', done => {
            let field = new Field();
            let inited = field.init('input', { initValue: 2 });

            assert(inited.value === 2);
            field.init('input', { initValue: 24 });
            assert(inited.value === 2);

            assert(field.init('input2', { initValue: '' }).value === '');

            done();
        });
        it('valueName', done => {
            let field = new Field();
            let inited = field.init('input', {
                initValue: true,
                valueName: 'checked',
            });
            assert(inited.checked === true);

            done();
        });

        it('props', done => {
            let field = new Field();
            let inited = field.init('input', {
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

        it('custom Event: onChange', done => {
            const onChange = sinon.spy();
            let field = new Field(null, { onChange });
            let inited = field.init('input', {
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

            let field2 = new Field(null, {
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

        it('getValueFromEvent', done => {
            let field = new Field(null, {
                onChange: (name, value) => {
                    assert(value === 'test!');
                },
            });

            let inited = field.init('input', {
                getValueFromEvent: a => {
                    assert(a === 'test');
                    return a + '!';
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

        it('rules', done => {
            let field = new Field();
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
    });

    describe('behaviour', () => {
        it('getValue & getValues & setValue & setValues', done => {
            let field = new Field();
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

        it('setError & setErrors & getError & getErrors', done => {
            let field = new Field();
            field.setError('input', 'error1');

            field.init('input');
            field.init('input2');

            field.setError('input', 'error1');
            assert(field.getError('input')[0] === 'error1');
            assert(field.getErrors(['input'])['input'][0] === 'error1');

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
        it('getState', done => {
            let field = new Field();

            field.init('input');

            field.setError('input', 'error1');

            assert(field.getState('input') === 'error');
            assert(field.getState('') === '');

            done();
        });

        it('validate', done => {
            let field = new Field();
            let inited = field.init('input', {
                rules: [{ required: true, message: 'cant be null' }],
            });

            const wrapper = mount(<Input {...inited} />);
            wrapper.find('input').simulate('change', {
                target: {
                    value: '',
                },
            });

            field.validate((error, value, cb) => {
                assert(error['input']['errors'][0] === 'cant be null');
            });
            field.validate('input', (error, value, cb) => {
                assert(error['input']['errors'][0] === 'cant be null');
            });
            field.validate(['input'], (error, value, cb) => {
                assert(error['input']['errors'][0] === 'cant be null');
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

        it('reset', done => {
            let field = new Field();
            field.init('input', { initValue: '1' });

            field.reset();
            assert(field.getValue('input') === undefined);

            field.init('input2', { initValue: '4' });
            field.setValue('input2', '33');

            field.resetToDefault();
            assert(field.getValue('input2') === '4');

            done();
        });
        it('remove', done => {
            let field = new Field();
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
        it('spliceArray', done => {
            let field = new Field();
            field.init('input.0', { initValue: 0 });
            field.init('input.1', { initValue: 1 });
            field.init('input.2', { initValue: 2 });

            field.spliceArray('input.{index}', 1);

            assert(field.getValue('input.0') === 0);
            assert(field.getValue('input.1') === 2);
            assert(field.getValue('input.2') === undefined);

            field.spliceArray('input.{index}', 0);
            assert(field.getValue('input.0') === 2);
            assert(field.getValue('input.1') === undefined);
            assert(field.getValue('input.2') === undefined);

            done();
        });
    });
});
