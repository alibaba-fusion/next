import React, { Component, createRef } from 'react';
import Input from '../../input';
import Field from '../index';
import type { ValidateErrorGroup } from '../types';

describe('options', () => {
    it('should support autoUnmount', () => {
        class Demo extends Component {
            state = {
                show: true,
            };
            field = new Field(this);

            render() {
                const init = this.field.init;
                return (
                    <div>
                        <Input {...init('input', { initValue: '1' })} />
                        {this.state.show ? <Input {...init('input2', { initValue: '2' })} /> : null}
                    </div>
                );
            }
        }
        const ref = createRef<Demo>();
        cy.mount(<Demo ref={ref} />).then(() => {
            cy.wrap(ref.current).should('be.ok');
            ref.current!.setState({ show: false });
            cy.wrap(ref.current!.field.getValues()).should('not.have.property', 'input2');
        });
    });

    it('should support autoUnmount with same name', () => {
        class Demo extends Component {
            state = {
                show: true,
            };
            field = new Field(this);

            render() {
                const init = this.field.init;
                return (
                    <div>
                        {this.state.show ? (
                            <Input {...init('input', { initValue: '1' })} key="1" />
                        ) : (
                            <Input {...init('input', { initValue: '2' })} key="2" />
                        )}
                    </div>
                );
            }
        }
        const ref = createRef<Demo>();
        cy.mount(<Demo ref={ref} />).then(() => {
            cy.wrap(ref.current).should('be.ok');
            ref.current!.setState({ show: false });
            cy.wrap(ref.current!.field.getValues()).should('have.property', 'input').and('eq', '1');
        });
    });

    it('should support autoUnmount=false', () => {
        class Demo extends Component {
            state = {
                show: true,
            };
            field = new Field(this, { autoUnmount: false });

            render() {
                const { init } = this.field;
                return (
                    <div>
                        <Input {...init('input')} />
                        {this.state.show && <Input {...init('input2', { initValue: 'test2' })} />}
                    </div>
                );
            }
        }
        const ref = createRef<Demo>();
        cy.mount(<Demo ref={ref} />).then(() => {
            cy.wrap(ref.current).should('be.ok');
            const ins = ref.current!;
            ins.setState({ show: false });
            cy.wrap(ins.field.getValue('input2')).should('eq', 'test2');
        });
    });

    it('scrollToFirstError', () => {
        class Demo extends Component {
            field = new Field(this, { scrollToFirstError: true });

            render() {
                const init = this.field.init;
                return (
                    <div style={{ height: 300, overflow: 'auto' }}>
                        <div style={{ height: 400 }}></div>
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
                        <div style={{ height: 400 }}></div>
                    </div>
                );
            }
        }
        const ref = React.createRef<Demo>();
        cy.mount(<Demo ref={ref} />);
        cy.get('input').should('not.be.visible');
        cy.then(async () => {
            const comp = ref.current!;
            cy.wrap(comp).should('be.ok');
            const errors = await new Promise<ValidateErrorGroup | null>(resolve => {
                comp.field.validate(errors => {
                    resolve(errors);
                });
            });
            cy.wrap(errors).should('deep.equal', { input: { errors: ['cant be null'] } });
            cy.get('input').should('be.visible');
        });
    });

    describe('defaultValue', () => {
        it('should support `defaultValue`', () => {
            const inputValue = 'my value';
            const field = new Field({});
            field.init('input', { props: { defaultValue: inputValue } });
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should support `defaultValue` with different value name and make camel case', () => {
            const inputValue = 'my value';
            const field = new Field({});
            field.init('input', {
                valueName: 'myValue',
                props: { defaultMyValue: inputValue },
            });
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should support `defaultValue` with falsy value', () => {
            const inputValue = 0;
            const field = new Field({});
            field.init('input', { props: { defaultValue: inputValue } });
            assert.equal(field.getValue('input'), inputValue);
        });
    });

    describe('values', () => {
        it('should shallow copy values with parseName=false', () => {
            const inputValues = { a: 1, b: 2 };
            const field = new Field(
                {},
                {
                    values: inputValues,
                }
            );
            field.setValue('b', 20);

            assert.equal(field.getValue('b'), 20);
            assert.equal(inputValues.b, 2);
        });
        it('should shallow copy values with parseName=true', () => {
            const inputValues = { a: [1, 2, 3, 4], b: { c: 5 } };
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: inputValues,
                }
            );
            field.setValue('a.0', 100);
            assert.equal(field.getValue('a.0'), 100);
            assert.equal(inputValues.a[0], 1);

            field.setValue('b.c', 50);
            assert.equal(field.getValue('b.c'), 50);
            assert.equal(inputValues.b.c, 5);
        });
        it('should set default field input values when given `values` in constructor', () => {
            const inputValue = 'my value';
            const field = new Field(
                {},
                {
                    values: {
                        input: inputValue,
                    },
                }
            );
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should set default field input values when given falsy `values` in constructor', () => {
            const inputValue = 0;
            const field = new Field(
                {},
                {
                    values: {
                        input: inputValue,
                    },
                }
            );
            field.init('input');
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should set default field input values when given `values` and `parseName` = true in constructor', () => {
            const inputValue = 'my value';
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: {
                        input: {
                            child: inputValue,
                        },
                    },
                }
            );
            field.init('input.child');
            assert.equal(field.getValue('input.child'), inputValue);
        });

        it('should allow access with `getValue` before init when given `values` in constructor', () => {
            const inputValue = 'my value';
            const field = new Field(
                {},
                {
                    values: {
                        input: inputValue,
                    },
                }
            );
            assert.equal(field.getValue('input'), inputValue);
        });

        it('should allow access to with `getValues` before init when given `values` in constructor', () => {
            const inputValue = 'my value';
            const field = new Field(
                {},
                {
                    values: {
                        input: inputValue,
                    },
                }
            );
            assert.equal(field.getValues().input, inputValue);
        });

        it('should use setValues instead of constructor values on field that has not been initialized', () => {
            const inputValue = 'my value';
            const field = new Field(
                {},
                {
                    values: {
                        input: inputValue,
                    },
                }
            );
            field.setValue('input', 1);
            assert.equal(field.getValue('input'), 1);
        });

        it('should reset `input` to undefined when given `values` in constructor and call `reset`', () => {
            const fieldDefault = 'field default value';
            const field = new Field(
                {},
                {
                    values: {
                        input: fieldDefault,
                    },
                }
            );
            field.init('input');
            field.reset();
            assert.equal(field.getValue('input'), undefined);
        });

        it('should reset `input` to constructor `undefined` after calling `resetToDefault`', () => {
            const fieldDefault = 'field default value';
            const field = new Field(
                {},
                {
                    values: {
                        input: fieldDefault,
                    },
                }
            );
            field.init('input');
            field.resetToDefault('input');
            assert.equal(field.getValue('input'), undefined);
        });

        it('should reset `input` to undefined when given `values` in constructor and call `reset`', () => {
            const fieldDefault = 'field default value';
            const field = new Field(
                {},
                {
                    values: {
                        input: fieldDefault,
                    },
                }
            );
            field.init('input');
            field.reset();
            assert.equal(field.getValue('input'), undefined);
        });

        it('should return `{}` for `getValues after all fields are removed', () => {
            const fieldDefault = 'field default value';
            const field = new Field(
                {},
                {
                    values: {
                        input: fieldDefault,
                    },
                }
            );
            field.init('input');
            field.remove('input');
            assert.equal(Object.keys(field.getValues()).length, 0);
        });

        it('should return `undefined` after `remove` then re-`init`', () => {
            const field = new Field({}, { values: { input: 4 } });
            field.init('input');
            field.remove('input');
            field.init('input');

            assert(field.getValue('input') === undefined);
        });

        it('should set the value to constructor value even with initValue from init', () => {
            const inputValue = 0;
            const field = new Field(
                {},
                {
                    values: {
                        input: inputValue,
                    },
                }
            );
            field.init('input', { initValue: 1 });
            assert.equal(field.getValue('input'), inputValue);
        });
    });

    describe('should support parseName', () => {
        it('getValues', () => {
            const field = new Field({}, { parseName: true });
            field.init('user.name', { initValue: 'frankqian' });
            field.init('user.pwd', { initValue: 12345 });
            field.init('option[0]', { initValue: 'option1' });
            field.init('option[1]', { initValue: 'option2' });
            const values = field.getValues<{
                user: { name: string; pwd: number };
                option: string[];
            }>();

            assert(Object.keys(values).length === 2);
            assert(values.user.name === 'frankqian');
            assert(values.user.pwd === 12345);
            assert(values.option[0] === 'option1');

            assert(field.getValue('option[1]') === 'option2');
        });
        it('should get constructor value of `name` if `getValue` called before init', () => {
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: { a: { b: 1 } },
                }
            );
            assert(field.getValue('a.b') === 1);
        });

        it('should return constructor value for `names` if `getValues` called before init', () => {
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: { a: 1, b: 2, c: 3 },
                }
            );
            const { a, b } = field.getValues(['a', 'b']);
            assert(a === 1);
            assert(b === 2);
        });
        it('should return all of constructor value if `getValues` called with no names before init', () => {
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: { a: 1, b: 2, c: 3 },
                }
            );
            const { a, b, c } = field.getValues();
            assert(a === 1);
            assert(b === 2);
            assert(c === 3);
        });
        it('setValues', () => {
            const field = new Field({}, { parseName: true });
            field.init('user.name', { initValue: 'frankqian' });
            field.init('user.pwd', { initValue: 12345 });
            field.init('option[0]', { initValue: 'option1' });
            field.init('option[1]', { initValue: 'option2' });

            let values = field.getValues<{
                user: { name: string; pwd: number | string };
                option: string[];
            }>();
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
        });

        it('should allow access with `getValue` before init when given `values` in constructor', () => {
            const fieldDefault = 'field default value';
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: {
                        input: {
                            myValue: fieldDefault,
                        },
                    },
                }
            );
            assert.equal(field.getValue('input.myValue'), fieldDefault);
        });

        it('should allow access to with `getValues` before init when given `values` in constructor', () => {
            const fieldDefault = 'field default value';
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: {
                        input: {
                            myValue: fieldDefault,
                        },
                    },
                }
            );
            assert.equal(
                field.getValues<{ input: { myValue: string } }>().input.myValue,
                fieldDefault
            );
        });

        it('should use setValue instead of constructor values on field that has not been initialized', () => {
            const fieldDefault = 'field default value';
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: {
                        input: {
                            myValue: fieldDefault,
                        },
                    },
                }
            );
            field.setValue('input.myValue', 1);
            assert.equal(field.getValue('input.myValue'), 1);
        });

        it('should remove top level field after removed', () => {
            const fieldDefault = 'field default value';
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: {
                        input: {
                            myValue: fieldDefault,
                        },
                    },
                }
            );
            field.init('input.myValue');
            field.remove('input.myValue');
            assert.deepEqual(field.getValues(), { input: {} });
        });

        it('should return `{}` for `getValues after `remove()`', () => {
            const fieldDefault = 'field default value';
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: {
                        input: {
                            myValue: fieldDefault,
                        },
                    },
                }
            );
            field.init('input.myValue');
            field.setValue('input.value2', fieldDefault);
            field.remove();
            assert.equal(Object.keys(field.getValues()).length, 0);
        });

        it('should return `undefined` after `remove` then re-`init`', () => {
            const fieldDefault = 'field default value';
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: {
                        input: {
                            myValue: fieldDefault,
                        },
                    },
                }
            );
            field.init('input.myValue');
            field.remove('input.myValue');
            field.init('input.myValue');

            assert(field.getValue('input.myValue') === undefined);
        });

        it('should return all setValues', () => {
            const fieldDefault = 'field default value';
            const field = new Field(
                {},
                {
                    parseName: true,
                }
            );
            field.setValues({
                input: {
                    myValue: fieldDefault,
                },
            });

            assert.deepEqual(field.getValues(), {
                input: { myValue: fieldDefault },
            });
        });

        it('should return all setValues and initValues', () => {
            const fieldDefault = 'field default value';
            const otherDefault = 'other default value';
            const field = new Field(
                {},
                {
                    parseName: true,
                }
            );
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
        describe('reset', () => {
            it('should reset all to undefined when call `reset`', () => {
                const fieldDefault = 'field default value';
                const field = new Field(
                    {},
                    {
                        parseName: true,
                    }
                );
                field.setValue('input.myValue', fieldDefault);
                field.setValue('input.otherValue', fieldDefault);
                field.reset();
                assert.equal(field.getValue('input.myValue'), undefined);
                assert.equal(field.getValue('input.otherValue'), undefined);
            });

            it('should reset all to undefined when given `values` in constructor and call `reset`', () => {
                const fieldDefault = 'field default value';
                const field = new Field(
                    {},
                    {
                        parseName: true,
                        values: {
                            input: {
                                myValue: fieldDefault,
                                otherValue: fieldDefault,
                            },
                        },
                    }
                );
                field.init('input.myValue');
                field.init('input.otherValue');
                field.reset();
                assert.equal(field.getValue('input.myValue'), undefined);
                assert.equal(field.getValue('input.otherValue'), undefined);
            });

            it('should reset only `input.myValue` to undefined when given `values` in constructor and pass `input.myValue` to `reset`', () => {
                const fieldDefault = 'field default value';
                const field = new Field(
                    {},
                    {
                        parseName: true,
                        values: {
                            input: {
                                myValue: fieldDefault,
                                otherValue: fieldDefault,
                            },
                        },
                    }
                );
                field.init('input.myValue');
                field.reset('input.myValue');
                assert.equal(field.getValue('input.myValue'), undefined);
                assert.equal(field.getValue('input.otherValue'), fieldDefault);
            });

            it('should reset all to undefined when call `resetToDefault` with no defaults', () => {
                const fieldDefault = 'field default value';
                const field = new Field(
                    {},
                    {
                        parseName: true,
                    }
                );
                field.setValue('input.myValue', fieldDefault);
                field.setValue('input.otherValue', fieldDefault);
                field.resetToDefault();
                assert.equal(field.getValue('input.myValue'), undefined);
                assert.equal(field.getValue('input.otherValue'), undefined);
            });

            it('should reset all to undefined when given `values` in constructor and call `resetToDefault`', () => {
                const fieldDefault = 'field default value';
                const secondValue = 'second';
                const field = new Field(
                    {},
                    {
                        parseName: true,
                        values: {
                            input: {
                                myValue: fieldDefault,
                                otherValue: fieldDefault,
                            },
                        },
                    }
                );
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

            it('should reset `input.myValue` which inited to undefined when given `values` in constructor and call `resetToDefault`', () => {
                const fieldDefault = 'field default value';
                const secondValue = 'second';
                const field = new Field(
                    {},
                    {
                        parseName: true,
                        values: {
                            input: {
                                myValue: fieldDefault,
                                otherValue: fieldDefault,
                            },
                        },
                    }
                );
                field.init('input.myValue');
                field.setValue('input.myValue', secondValue);
                field.setValue('input.otherValue', secondValue);

                field.init('input.myValue');

                field.resetToDefault('input.myValue');
                assert.equal(field.getValue('input.myValue'), undefined);
                assert.equal(field.getValue('input.otherValue'), secondValue);
            });
        });

        it('should set the value to constructor value even with initValue from init', () => {
            const fieldDefault = 0;
            const initValue = 'other default value';
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: {
                        input: {
                            myValue: fieldDefault,
                        },
                    },
                }
            );

            field.init('input.myValue', { initValue });

            assert.deepEqual(field.getValues(), {
                input: {
                    myValue: fieldDefault,
                },
            });
        });

        // Fix https://github.com/alibaba-fusion/next/issues/4525
        it('overwrite values by setValues', () => {
            const field = new Field(
                {},
                {
                    parseName: true,
                    values: {
                        one: [
                            [
                                {
                                    b: { name: 'zhangsan', age: 17 },
                                },
                            ],
                        ],
                        two: { code: '555' },
                    },
                }
            );
            const name = field.init('one.0.0.b.name');
            const age = field.init('one.0.0.b.age');
            const code = field.init('two.code');
            assert.equal(name.value, 'zhangsan');
            assert.equal(age.value, 17);
            assert.equal(code.value, '555');

            field.setValues({
                one: [
                    [
                        {
                            b: null,
                        },
                    ],
                ],
                two: '',
            });
            assert.equal(field.init('one.0.0.b.name').value, undefined);
            assert.equal(field.init('one.0.0.b.age').value, undefined);
            assert.equal(field.init('two.code').value, undefined);
        });
    });

    describe('should support autoValidate=false', () => {
        it('options.autoValidate=true', () => {
            const field = new Field({}, { autoValidate: true });
            const { value, ...inited } = field.init('input', {
                rules: [{ minLength: 10 }],
            });

            cy.mount(<Input {...inited} />);
            cy.get('input').type('test');
            cy.then(() => {
                cy.wrap(field.getError('input')).should('not.be.null');
            });
        });
        it('options.autoValidate=false', () => {
            const field = new Field({}, { autoValidate: false });
            const { value, ...inited } = field.init('input', {
                rules: [{ minLength: 10 }],
            });

            cy.mount(<Input {...inited} />);
            cy.get('input').type('test');
            cy.then(() => {
                cy.wrap(field.getError('input')).should('be.null');
                field.validateCallback('input');
                cy.wrap(field.getError('input')).should('not.be.null');
            });
        });
        it('props.autoValidate=false', () => {
            const field = new Field({});
            const { value, ...inited } = field.init('input', {
                autoValidate: false,
                rules: [{ minLength: 10 }],
            });

            cy.mount(<Input {...inited} />);
            cy.get('input').type('test');
            cy.then(() => {
                cy.wrap(field.getError('input')).should('be.null');
                field.validateCallback('input');
                cy.wrap(field.getError('input')).should('not.be.null');
            });

            cy.mount(<Input {...inited} />);
            cy.get('input').type('test');
            cy.then(() => {
                cy.wrap(field.getError('input')).should('be.null');
                field.validateCallback('input');
                cy.wrap(field.getError('input')).should('not.be.null');
            });
        });
    });
});
