/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import Input from '../../input';
import Field from '../index';

/*global describe it afterEach */
describe('options', () => {
    it('should support autoUnmount', function () {
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
                    </div>
                );
            }
        }
        const ref = React.createRef<Demo>();
        cy.mount(<Demo ref={ref} />);
        cy.then(() => {
            ref.current!.setState({ show: false });
        }).then(() => {
            expect('input2' in ref.current!.field.getValues<Record<string, unknown>>()).to.equal(
                false
            );
        });
    });

    it('should support autoUnmount with same name', function (done) {
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
                        <button>click</button>
                    </div>
                );
            }
        }
        const ref = React.createRef<Demo>();
        cy.mount(<Demo ref={ref} />);
        cy.then(() => {
            ref.current!.setState({ show: false });
        }).then(() => {
            expect('input' in ref.current!.field.getValues<Record<string, unknown>>()).to.equal(
                true
            );
            done();
        });
    });

    it('should support autoUnmount=false', function (done) {
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
                            <Input {...init('input2', { initValue: 'test2' })} />
                        ) : null}
                        <button>click</button>
                    </div>
                );
            }
        }

        const ref = React.createRef<Demo>();
        cy.mount(<Demo ref={ref} />);
        cy.then(() => {
            ref.current!.setState({ show: false });
        }).then(() => {
            expect(ref.current!.field.getValues<any>().input2).to.equal('test2');
            done();
        });
    });

    it('scrollToFirstError', function (done) {
        class Demo extends React.Component {
            constructor(props: any) {
                super(props);
                this.field = new Field(this, { scrollToFirstError: true });
            }
            field: Field;

            render() {
                const init = this.field.init;
                return (
                    <div>
                        <Input
                            {...init('input', {
                                rules: [{ required: true, message: 'cant be null' }],
                            })}
                        />
                        <button
                            onClick={() => {
                                this.field.validate((error: any) => {
                                    assert(error.input.errors[0] === 'cant be null');
                                });
                            }}
                        >
                            click
                        </button>
                    </div>
                );
            }
        }
        const ref = React.createRef<Demo>();
        cy.mount(<Demo ref={ref} />);
        cy.then(() => {
            ref.current!.setState({ show: false });
        }).then(() => {
            ref.current!.field.validate((error: any) => {
                expect(error.input.errors[0]).to.equal('cant be null');
                done();
            });
        });
    });

    describe('defaultValue', () => {
        it('should support `defaultValue`', function () {
            const inputValue = 'my value';
            const field = new Field(this);
            field.init('input', { props: { defaultValue: inputValue } });
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should support `defaultValue` with different value name and make camel case', function () {
            const inputValue = 'my value';
            const field = new Field(this);
            field.init('input', { valueName: 'myValue', props: { defaultMyValue: inputValue } });
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should support `defaultValue` with falsy value', function () {
            const inputValue = 0;
            const field = new Field(this);
            field.init('input', { props: { defaultValue: inputValue } });
            assert.equal(field.getValue('input'), inputValue);
        });
    });

    describe('values', () => {
        it('should shallow copy values with parseName=false', function () {
            const inputValues = { a: 1, b: 2 };
            const field = new Field(this, {
                values: inputValues,
            });
            field.setValue('b', 20);

            assert.equal(field.getValue('b'), 20);
            assert.equal(inputValues.b, 2);
        });
        it('should shallow copy values with parseName=true', function () {
            const inputValues = { a: [1, 2, 3, 4], b: { c: 5 } };
            const field = new Field(this, {
                parseName: true,
                values: inputValues,
            });
            field.setValue('a.0', 100);
            assert.equal(field.getValue('a.0'), 100);
            assert.equal(inputValues.a[0], 1);

            field.setValue('b.c', 50);
            assert.equal(field.getValue('b.c'), 50);
            assert.equal(inputValues.b.c, 5);
        });
        it('should set default field input values when given `values` in constructor', function () {
            const inputValue = 'my value';
            const field = new Field(this, {
                values: {
                    input: inputValue,
                },
            });
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should set default field input values when given falsy `values` in constructor', function () {
            const inputValue = 0;
            const field = new Field(this, {
                values: {
                    input: inputValue,
                },
            });
            field.init('input');
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should set default field input values when given `values` and `parseName` = true in constructor', function () {
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

        it('should allow access with `getValue` before init when given `values` in constructor', function () {
            const inputValue = 'my value';
            const field = new Field(this, {
                values: {
                    input: inputValue,
                },
            });
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should allow access to with `getValues` before init when given `values` in constructor', function () {
            const inputValue = 'my value';
            const field = new Field(this, {
                values: {
                    input: inputValue,
                },
            });
            assert.equal(field.getValues<{ input: string }>().input, inputValue);
        });

        it('should use setValues instead of constructor values on field that has not been initialized', function () {
            const inputValue = 'my value';
            const field = new Field(this, {
                values: {
                    input: inputValue,
                },
            });
            field.setValue('input', 1);
            assert.equal(field.getValue('input'), 1);
        });

        it('should reset `input` to undefined when given `values` in constructor and call `reset`', function () {
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

        it('should reset `input` to constructor `undefined` after calling `resetToDefault`', function () {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                values: {
                    input: fieldDefault,
                },
            });
            field.init('input');
            field.resetToDefault('input');
            assert.equal(field.getValue('input'), undefined);
        });

        it('should reset `input` to undefined when given `values` in constructor and call `reset`', function () {
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

        it('should return `{}` for `getValues after all fields are removed', function () {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                values: {
                    input: fieldDefault,
                },
            });
            field.init('input');
            field.remove('input');
            assert.equal(Object.keys(field.getValues()).length, 0);
        });

        it('should return `undefined` after `remove` then re-`init`', function () {
            const field = new Field(this, { values: { input: 4 } });
            field.init('input');
            field.remove('input');
            field.init('input');

            assert(field.getValue('input') === undefined);
        });

        it('should set the value to constructor value even with initValue from init', function () {
            const inputValue = 0;
            const field = new Field(this, {
                values: {
                    input: inputValue,
                },
            });
            field.init('input', { initValue: 1 });
            assert.equal(field.getValue('input'), inputValue);
        });
    });

    describe('should support parseName', () => {
        it('getValues', function (done) {
            const field = new Field(this, { parseName: true });
            field.init('user.name', { initValue: 'frankqian' });
            field.init('user.pwd', { initValue: 12345 });
            field.init('option[0]', { initValue: 'option1' });
            field.init('option[1]', { initValue: 'option2' });
            const values = field.getValues<any>();

            assert(Object.keys(values).length === 2);
            assert(values.user.name === 'frankqian');
            assert(values.user.pwd === 12345);
            assert(values.option[0] === 'option1');

            assert(field.getValue('option[1]') === 'option2');

            done();
        });
        it('should get constructor value of `name` if `getValue` called before init', function () {
            const field = new Field(this, {
                parseName: true,
                values: { a: { b: 1 } },
            });
            assert(field.getValue('a.b') === 1);
        });

        it('should return constructor value for `names` if `getValues` called before init', function () {
            const field = new Field(this, { parseName: true, values: { a: 1, b: 2, c: 3 } });
            const { a, b } = field.getValues<any>(['a', 'b']);
            assert(a === 1);
            assert(b === 2);
        });
        it('should return all of constructor value if `getValues` called with no names before init', function () {
            const field = new Field(this, { parseName: true, values: { a: 1, b: 2, c: 3 } });
            const { a, b, c } = field.getValues<any>();
            assert(a === 1);
            assert(b === 2);
            assert(c === 3);
        });
        it('setValues', function (done) {
            const field = new Field(this, { parseName: true });
            field.init('user.name', { initValue: 'frankqian' });
            field.init('user.pwd', { initValue: 12345 });
            field.init('option[0]', { initValue: 'option1' });
            field.init('option[1]', { initValue: 'option2' });

            let values = field.getValues<any>();
            assert(values.user.name === 'frankqian');
            assert(values.user.pwd === 12345);
            assert(values.option[0] === 'option1');
            assert(values.option[1] === 'option2');

            field.setValues({
                user: {
                    pwd: 'helloworld',
                },
                option: ['test1', 'test2'],
            });

            values = field.getValues();

            assert(Object.keys(values).length === 2);

            assert(values.user.name === 'frankqian');
            assert(values.user.pwd === 'helloworld');
            assert(values.option[0] === 'test1');

            done();
        });

        it('should allow access with `getValue` before init when given `values` in constructor', function () {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                parseName: true,
                values: {
                    input: {
                        myValue: fieldDefault,
                    },
                },
            });
            assert.equal(field.getValue('input.myValue'), fieldDefault);
        });

        it('should allow access to with `getValues` before init when given `values` in constructor', function () {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                parseName: true,
                values: {
                    input: {
                        myValue: fieldDefault,
                    },
                },
            });
            assert.equal(field.getValues<any>().input.myValue, fieldDefault);
        });

        it('should use setValue instead of constructor values on field that has not been initialized', function () {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                parseName: true,
                values: {
                    input: {
                        myValue: fieldDefault,
                    },
                },
            });
            field.setValue('input.myValue', 1);
            assert.equal(field.getValue('input.myValue'), 1);
        });

        it('should remove top level field after removed', function () {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                parseName: true,
                values: {
                    input: {
                        myValue: fieldDefault,
                    },
                },
            });
            field.init('input.myValue');
            field.remove('input.myValue');
            assert.equal(field.getValues<any>().input.myValue, undefined);
        });

        it('should return `{}` for `getValues after `remove()`', function () {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                parseName: true,
                values: {
                    input: {
                        myValue: fieldDefault,
                    },
                },
            });
            field.init('input.myValue');
            field.setValue('input.value2', fieldDefault);
            /* @ts-expect-error field type error */
            field.remove();
            assert.equal(Object.keys(field.getValues()).length, 0);
        });

        it('should return `undefined` after `remove` then re-`init`', function () {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                parseName: true,
                values: {
                    input: {
                        myValue: fieldDefault,
                    },
                },
            });
            field.init('input.myValue');
            field.remove('input.myValue');
            field.init('input.myValue');

            assert(field.getValue('input.myValue') === undefined);
        });

        it('should return all setValues', function () {
            const fieldDefault = 'field default value';
            const field = new Field(this, {
                parseName: true,
            });
            field.setValues({
                input: {
                    myValue: fieldDefault,
                },
            });

            assert.deepEqual(field.getValues(), {
                input: { myValue: fieldDefault },
            });
        });

        it('should return all setValues and initValues', function () {
            const fieldDefault = 'field default value';
            const otherDefault = 'other default value';
            const field = new Field(this, {
                parseName: true,
            });
            field.setValues({
                input: {
                    myValue: fieldDefault,
                },
            });

            field.init('input.otherValue', { initValue: otherDefault });

            assert.deepEqual(field.getValues(), {
                input: {
                    myValue: fieldDefault,
                    otherValue: otherDefault,
                },
            });
        });
        describe('reset', function () {
            it('should reset all to undefined when call `reset`', function () {
                const fieldDefault = 'field default value';
                const field = new Field(this, {
                    parseName: true,
                });
                field.setValue('input.myValue', fieldDefault);
                field.setValue('input.otherValue', fieldDefault);
                field.reset();
                assert.equal(field.getValue('input.myValue'), undefined);
                assert.equal(field.getValue('input.otherValue'), undefined);
            });

            it('should reset all to undefined when given `values` in constructor and call `reset`', function () {
                const fieldDefault = 'field default value';
                const field = new Field(this, {
                    parseName: true,
                    values: {
                        input: {
                            myValue: fieldDefault,
                            otherValue: fieldDefault,
                        },
                    },
                });
                field.init('input.myValue');
                field.init('input.otherValue');
                field.reset();
                assert.equal(field.getValue('input.myValue'), undefined);
                assert.equal(field.getValue('input.otherValue'), undefined);
            });

            it('should reset only `input.myValue` to undefined when given `values` in constructor and pass `input.myValue` to `reset`', function () {
                const fieldDefault = 'field default value';
                const field = new Field(this, {
                    parseName: true,
                    values: {
                        input: {
                            myValue: fieldDefault,
                            otherValue: fieldDefault,
                        },
                    },
                });
                field.init('input.myValue');
                field.reset('input.myValue');
                assert.equal(field.getValue('input.myValue'), undefined);
                assert.equal(field.getValue('input.otherValue'), fieldDefault);
            });

            it('should reset all to undefined when call `resetToDefault` with no defaults', function () {
                const fieldDefault = 'field default value';
                const field = new Field(this, {
                    parseName: true,
                });
                field.setValue('input.myValue', fieldDefault);
                field.setValue('input.otherValue', fieldDefault);
                field.resetToDefault();
                assert.equal(field.getValue('input.myValue'), undefined);
                assert.equal(field.getValue('input.otherValue'), undefined);
            });

            it('should reset all to undefined when given `values` in constructor and call `resetToDefault`', function () {
                const fieldDefault = 'field default value';
                const secondValue = 'second';
                const field = new Field(this, {
                    parseName: true,
                    values: {
                        input: {
                            myValue: fieldDefault,
                            otherValue: fieldDefault,
                        },
                    },
                });
                field.init('input.myValue');
                field.init('input.otherValue');
                field.setValue('input.myValue', secondValue);
                field.setValue('input.otherValue', secondValue);

                // simulation rerender
                field.init('input.myValue');
                field.init('input.otherValue');

                field.resetToDefault();
                assert.equal(field.getValue('input.myValue'), undefined);
                assert.equal(field.getValue('input.otherValue'), undefined);
            });

            it('should reset `input.myValue` which inited to undefined when given `values` in constructor and call `resetToDefault`', function () {
                const fieldDefault = 'field default value';
                const secondValue = 'second';
                const field = new Field(this, {
                    parseName: true,
                    values: {
                        input: {
                            myValue: fieldDefault,
                            otherValue: fieldDefault,
                        },
                    },
                });
                field.init('input.myValue');
                field.setValue('input.myValue', secondValue);
                field.setValue('input.otherValue', secondValue);

                field.init('input.myValue');

                field.resetToDefault('input.myValue');
                assert.equal(field.getValue('input.myValue'), undefined);
                assert.equal(field.getValue('input.otherValue'), secondValue);
            });
        });

        it('should set the value to constructor value even with initValue from init', function () {
            const fieldDefault = 0;
            const initValue = 'other default value';
            const field = new Field(this, {
                parseName: true,
                values: {
                    input: {
                        myValue: fieldDefault,
                    },
                },
            });

            field.init('input.myValue', { initValue });

            assert.deepEqual(field.getValues(), {
                input: {
                    myValue: fieldDefault,
                },
            });
        });
    });

    describe('should support autoValidate=false', () => {
        it('options.autoValidate=true', function () {
            const field = new Field(this, { autoValidate: true });
            const inited = field.init('input', { rules: [{ minLength: 10 }] }) as any;

            cy.mount(<Input {...inited} />);
            cy.get('input').type('test');
            cy.then(() => {
                assert(field.getError('input') !== null);
            });
        });
        it('options.autoValidate=false', function () {
            const field = new Field(this, { autoValidate: false });
            const inited = field.init('input', { rules: [{ minLength: 10 }] }) as any;

            cy.mount(<Input {...inited} />);
            cy.get('input').type('test');
            cy.then(() => {
                assert(field.getError('input') === null);
                field.validate('input');
                assert(field.getError('input') !== null);
            });
        });
        it('props.autoValidate=false', function () {
            const field = new Field(this);
            const inited = field.init('input', {
                autoValidate: false,
                rules: [{ minLength: 10 }],
            } as any) as any;

            cy.mount(<Input {...inited} />);
            cy.get('input').type('test');
            cy.then(() => {
                assert(field.getError('input') === null);
                field.validate('input');
                assert(field.getError('input') !== null);
            });
        });
    });
});
