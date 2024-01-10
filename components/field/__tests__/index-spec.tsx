/* eslint-disable react/no-multi-comp */
import React, { useState, useEffect } from 'react';
import Switch from '../../switch';
import '../../switch/style';
import Input from '../../input';
import Form from '../../form';
import Field from '../index';

const FormItem = Form.Item;

/* eslint-disable react/jsx-filename-extension */
/*global describe it afterEach */
describe('field', () => {
    describe('render', () => {
        it('should support Form', function () {
            class Demo extends React.Component {
                constructor(props: any) {
                    super(props);
                    this.field = new Field(this) as Field;
                }
                field: Field;

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
            cy.mount(<Demo />);
            cy.get('button').click();
        });
        it('should support PureComponent', function () {
            class Demo extends React.PureComponent {
                constructor(props: any) {
                    super(props);
                    this.field = new Field(this, { forceUpdate: true }) as Field;
                }
                field: Field;

                render() {
                    const init = this.field.init;
                    return <Input {...init('input')} />;
                }
            }
            cy.mount(<Demo />);
            cy.get('input').type('test');
            cy.get('input').should('have.value', 'test');

            // PureComponent will not render by second update use this.setState();
            // so you should use this.fourceUpdate
            cy.get('input').clear();
            cy.get('input').type('test2');
            cy.get('input').should('have.value', 'test2');
        });

        it('should support origin input/checkbox/radio', function () {
            class Demo extends React.Component {
                constructor(props: any) {
                    super(props);
                    this.field = new Field(this);
                }
                field: Field;

                render() {
                    const init = this.field.init as any;
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
            cy.mount(<Demo />);
            cy.get('button').click();
            cy.get('input[type="checkbox"]').click();
            cy.get('input[type="radio"]').click();
        });
        it('should support hooks', function () {
            function Demo() {
                const field = Field.useField() as Field;

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
            cy.mount(<Demo />);
            cy.get('button').click();
        });
    });
    describe('init', () => {
        it('init(input)', function (done) {
            const field = new Field(this);
            const inited = field.init('input');

            assert(typeof (inited as any).ref === 'function');
            assert(inited.id === 'input');
            assert((inited as any)['data-meta'] === 'Field');
            assert('onChange' in inited);

            field.init('input', {
                rules: [
                    {
                        required: true,
                    },
                ],
            });

            field.init('input');
            assert((field as any)._get('input').rules.length === 0);

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
            assert((inited as any).checked === true);

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
            assert((inited as any).a === 1);
            assert((inited as any).checked === true);

            done();
        });

        class Demo extends React.Component<any> {
            constructor(props: any) {
                super(props);
                this.field = new Field(this, { onChange: props.onChange });
            }
            field: Field;
            render() {
                const field = this.field;
                return <Input {...field.init('input')} />;
            }
        }
        it('custom Event: onChange', function () {
            const onChange1 = cy.spy();
            const ref = React.createRef<Demo>();
            cy.mount(<Demo ref={ref} onChange={onChange1} />);
            cy.get('input').type('test');
            cy.wrap(onChange1).should('be.calledWith', 'input', 'test');
            cy.then(() => {
                assert(ref.current!.field.getValue('input') === 'test');
            });
        });
        it('getValueFromEvent', function () {
            const field = new Field(this, {});

            const { value, ...inited } = field.init('input', {
                getValueFromEvent: (a: any) => {
                    return `${a}!`;
                },
            } as any) as any;

            cy.mount(<Input {...inited} />);
            cy.get('input').type('test');
            cy.then(() => {
                expect(field.getValue('input')).equal('test!');
            });
        });
        it('getValueFormatter & setValueFormatter', function () {
            const field = new Field(this, {
                onChange: (name, value) => {
                    assert(value === 'test!');
                },
            });

            const inited = field.init('input', {
                initValue: 'abcd',
                getValueFormatter: a => {
                    return `test!`;
                },
                setValueFormatter: a => {
                    return `test!!`;
                },
            }) as any;

            cy.mount(<Input {...inited} />);
            cy.get('input').type('test');
            cy.then(() => {
                expect(field.getValue('input')).equal('test!');
            });
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

            assert((field as any)._get('input').rules.length === 1);

            field.init('input2', {
                rules: {
                    required: true,
                },
            });

            assert((field as any)._get('input2').rules.length === 1);

            done();
        });

        it('should support control through `setState`', function () {
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
                                    this.setState({
                                        inputValue: 'end',
                                    });
                                }}
                            >
                                click
                            </button>
                            <button id="get">click</button>
                        </div>
                    );
                }
            }
            const ref = React.createRef<Demo>();
            cy.mount(<Demo ref={ref} />).then(() => {
                assert(ref.current!.field.getValue('input') === 'start');
            });
            cy.get('#set').click();
            cy.then(() => {
                assert(ref.current!.field.getValue('input') === 'end');
            });
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

            cy.mount(<Demo />);
            cy.get('#set').click();
            cy.get('#get').click();
        });
    });

    describe('behaviour', () => {
        it('getValue & getValues & setValue & setValues', function () {
            const field = new Field(this);
            field.init('input', { initValue: 1 });
            field.init('input2', { initValue: 2 });
            field.init('input3.name', { initValue: 3 });

            field.setValue('input', 2);
            assert(field.getValue('input') === 2);
            assert(field.getValue('input3.name') === 3);
            assert(Object.keys(field.getValues()).length === 3);
            assert((field.getValues() as any).input === 2);

            field.setValues({ input: 3, input2: 4 });

            assert(field.getValue('input') === 3);
            assert(field.getValue('input2') === 4);
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
            assert.equal((field.getValues() as any).input, 1);
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
            assert((field.getError('input') as string[])[0] === 'error1');
            assert(field.getErrors(['input']).input[0] === 'error1');

            field.setError('input2', ['error2']);
            assert((field.getError('input2') as string[])[0] === 'error2');

            field.setErrors({ input: 'error 1', input2: 'error 2' });
            field.setError('input', '');

            assert(field.getError('input') === null);
            assert((field.getError('input2') as string[])[0] === 'error 2');

            field.setError('input', (<span>hello</span>) as any);
            assert(React.isValidElement((field.getError('input') as string[])[0]) === true);

            done();
        });
        it('getState', function (done) {
            const field = new Field(this);

            field.init('input');

            field.setError('input', 'error1');

            assert(field.getState('input') === 'error');
            assert((field.getState('') as any) === '');

            done();
        });

        it('validate', function (done) {
            const field = new Field(this);
            const inited = field.init('input', {
                rules: [{ required: true, message: 'cant be null' }],
            }) as any;

            cy.mount(<Input {...inited} />);
            cy.get('input').clear();

            cy.then(() => {
                field.validate((error: any) => {
                    assert(error.input.errors[0] === 'cant be null');
                });
                field.validate('input', (error: any) => {
                    assert(error.input.errors[0] === 'cant be null');
                });
                field.validate(['input'], (error: any) => {
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
                field.validate(['input2'], (error: any) => {
                    assert(error === null);
                });
                done();
            });

            // field.init('input3', {initValue:0, rules: [{required: true, message:'cant be 0' }]});
            // field.validate(['input3'], (error, value, cb)=> {
            //     assert(error === 'cant be 0');
            // })
        });

        it('should show setError on validate', function (done) {
            const field = new Field(this);
            const inited = field.init('input') as any;
            cy.mount(<Input {...inited} />);

            cy.get('input').then(() => {
                field.setError('input', 'my error');
                field.validate('input', (err: any) => {
                    assert(err.input.errors[0] === 'my error');
                    done();
                });
            });
        });

        it('should merge setError and rules on validate', function (done) {
            const field = new Field(this);
            const inited = field.init('input') as any;
            const inited2 = field.init('input2', {
                rules: [{ required: true, message: 'cant be null' }],
            }) as any;
            cy.mount(
                <div>
                    <Input {...inited} />
                    <Input {...inited2} />
                </div>
            );

            cy.get('input').then($input => {
                field.setError('input', 'my error');
                field.validate((err: any) => {
                    assert(err.input.errors[0] === 'my error');
                    assert(err.input2.errors[0] === 'cant be null');
                    done();
                });
            });
        });

        it('should overwrite setError errors when using rules', function (done) {
            const field = new Field(this);

            const inited = field.init('input', {
                rules: [{ required: true, message: 'cant be null' }],
            }) as any;
            cy.mount(<Input {...inited} />);

            cy.then(() => {
                field.setError('input', 'my error');
                field.validate((err: any) => {
                    assert(err.input.errors.length === 1);
                    assert(err.input.errors[0] === 'cant be null');
                    done();
                });
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
            assert((field as any)._get('input') === null);
            assert((field as any)._get('input2') !== null);

            field.remove(['input', 'input2']);
            assert((field as any)._get('input') === null);
            assert((field as any)._get('input2') === null);

            done();
        });
        describe('spliceArray', function () {
            it('should remove the middle field item', () => {
                const field = new Field(this);
                field.init('input.0', { initValue: 0 });
                field.init('input.1', { initValue: 1 });
                field.init('input.2', { initValue: 2 });

                (field as any).spliceArray('input.{index}', 1);

                assert(field.getValue('input.0') === 0);
                assert(field.getValue('input.1') === 2);
                assert(field.getValue('input.2') === undefined);

                field.init('key.0.id', { initValue: 0 });
                field.init('key.1.id', { initValue: 1 });
                field.init('key.2.id', { initValue: 2 });

                (field as any).spliceArray('key.{index}', 1);

                assert(field.getValue('key.0.id') === 0);
                assert(field.getValue('key.1.id') === 2);
                assert(field.getValue('key.2.id') === undefined);
            });

            it('should remove the first 2 field items', () => {
                const field = new Field(this);
                field.init('input.0', { initValue: 0 });
                field.init('input.1', { initValue: 1 });
                field.init('input.2', { initValue: 2 });

                (field as any).spliceArray('input.{index}', 1);
                (field as any).spliceArray('input.{index}', 0);
                assert(field.getValue('input.0') === 2);
                assert(field.getValue('input.1') === undefined);
                assert(field.getValue('input.2') === undefined);

                field.init('key.0.id', { initValue: 0 });
                field.init('key.1.id', { initValue: 1 });
                field.init('key.2.id', { initValue: 2 });

                (field as any).spliceArray('key.{index}', 1);
                (field as any).spliceArray('key.{index}', 0);

                assert(field.getValue('key.0.id') === 2);
                assert(field.getValue('key.1.id') === undefined);
                assert(field.getValue('key.2.id') === undefined);
            });

            it('should make no change `keymatch` does not contain `{index}', () => {
                const field = new Field(this);
                field.init('input.0', { initValue: 0 });
                field.init('input.1', { initValue: 1 });
                field.init('input.2', { initValue: 2 });

                (field as any).spliceArray('input', 0);
                assert(field.getValue('input.0') === 0);
                assert(field.getValue('input.1') === 1);
                assert(field.getValue('input.2') === 2);
            });

            it('should remove the middle field item when parseName=true', () => {
                const field = new Field(this, { parseName: true });
                field.init('input.0', { initValue: 0 });
                field.init('input.1', { initValue: 1 });
                field.init('input.2', { initValue: 2 });

                (field as any).spliceArray('input.{index}', 1);

                assert(field.getValue('input.0') === 0);
                assert(field.getValue('input.1') === 2);
                assert(field.getValue('input.2') === undefined);
                assert((field as any).getValue('input').length === 2);
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
        function Demo({ onWatchChange, options, onUnmount }: any) {
            const [showInput, setShowInput] = useState(false);
            const field = Field.useField(options) as Field;
            Field.useWatch(field, ['switch', 'input'], (name, value, oldValue, triggerType) => {
                onWatchChange && onWatchChange(name, value, oldValue, triggerType);
                if (name === 'switch') {
                    setShowInput(value as boolean);
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
            const callback = cy.spy();
            cy.mount(<Demo onWatchChange={callback} />);
            cy.wrap(callback).should('be.calledOnceWith', 'switch', false, undefined, 'init');
        });
        it('should not trigger when has init value', () => {
            const callback = cy.spy();
            cy.mount(<Demo onWatchChange={callback} options={{ values: { switch: true } }} />);
            cy.wrap(callback).should('not.be.called');
        });
        it('should trigger by change', () => {
            const callback = cy.spy();
            cy.mount(<Demo onWatchChange={callback} />);
            cy.wrap(callback).should('be.calledWith', 'switch', false, undefined, 'init');
            cy.get('.next-switch').click();
            cy.wrap(callback).should('be.calledWith', 'switch', true, false, 'change');
            cy.wrap(callback).should('be.calledWith', 'input', 'abc', undefined, 'init');
            cy.get('.next-input input').clear();
            cy.get('.next-input input').type('xyz');
            cy.wrap(callback).should('be.calledWith', 'input', '', 'abc', 'change');
            cy.wrap(callback).should('be.calledWith', 'input', 'x', '', 'change');
            cy.wrap(callback).should('be.calledWith', 'input', 'xy', 'x', 'change');
            cy.wrap(callback).should('be.calledWith', 'input', 'xyz', 'xy', 'change');
            cy.wrap(callback).should('have.callCount', 7);
        });
        it('should trigger by unmount', () => {
            const callback = cy.spy();
            cy.mount(<Demo onWatchChange={callback} />);
            cy.get('.next-switch').click();
            cy.get('.next-input').should('exist');
            cy.get('.next-switch').click();
            cy.wrap(callback).should('be.calledWith', 'input', undefined, 'abc', 'unmount');
        });
        it('should trigger by reset', () => {
            const callback = cy.spy();
            cy.mount(<Demo onWatchChange={callback} />);
            cy.get('.next-switch').click();
            cy.wrap(callback).should('have.callCount', 3);
            cy.get('button[data-reset]').click();
            cy.wrap(callback).should('be.calledWith', 'switch', undefined, true, 'reset');
            cy.wrap(callback).should('be.calledWith', 'input', undefined, 'abc', 'reset');
        });
        it('should trigger by setValue', () => {
            const callback = cy.spy();
            cy.mount(<Demo onWatchChange={callback} />);
            cy.get('button[data-setValue]').click();
            cy.wrap(callback).should('be.calledWith', 'switch', true, false, 'setValue');

            cy.get('button[data-setValues]').click();
            cy.wrap(callback).should('be.calledWith', 'switch', false, true, 'setValue');
            cy.wrap(callback).should('be.calledWith', 'input', 'xyz', 'abc', 'setValue');
        });
        it('should unwatch work', () => {
            const callback = cy.spy();
            cy.mount(<Demo onUnmount={callback} />);
            cy.mount(<div></div>);
            cy.wrap(callback).should('be.calledOnce');
        });
    });
});
