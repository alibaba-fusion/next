import React from 'react';
import Big from 'big.js';
import NumberPicker, { type NumberPickerProps } from '../index';
import '../style';

/* global describe it */
describe('number-picker', () => {
    describe('render', () => {
        it('should accept defaultValue & value', () => {
            cy.mount(<NumberPicker defaultValue={123} />).as('numberPicker');
            cy.get('@numberPicker').its('component.props.defaultValue').should('eq', 123);
            cy.mount(<NumberPicker value={234} />).as('numberPicker');
            cy.get('@numberPicker').its('component.props.value').should('eq', 234);
        });
        it('should accept type ', () => {
            cy.mount(<NumberPicker type="inline" />).as('numberPicker');
            cy.get('@numberPicker').its('component.props.type').should('eq', 'inline');
        });
        it('should not tab trigger ', () => {
            cy.mount(<NumberPicker />).as('numberPicker');
            cy.get('@numberPicker')
                .document()
                .find('button')
                .eq(0)
                .should('have.attr', 'tabIndex', -1);
            cy.get('@numberPicker')
                .document()
                .find('button')
                .eq(1)
                .should('have.attr', 'tabIndex', -1);
            cy.mount(<NumberPicker type="inline" />).as('numberPickerInline');
            cy.get('@numberPickerInline')
                .document()
                .find('button')
                .eq(0)
                .should('have.attr', 'tabIndex', -1);
            cy.get('@numberPickerInline')
                .document()
                .find('button')
                .eq(1)
                .should('have.attr', 'tabIndex', -1);
        });
        it('should compare max or min the changes', () => {
            class App extends React.Component {
                state = {
                    value: 10,
                    max: 8,
                };

                setMax = () => {
                    this.setState({
                        max: 5,
                    });
                };

                onChange = (value: number) => {
                    this.setState({
                        value,
                    });
                };

                render() {
                    return (
                        <div>
                            <button onClick={this.setMax}>setMax to 15</button>
                            <NumberPicker
                                value={this.state.value}
                                onChange={this.onChange}
                                max={this.state.max}
                            />
                        </div>
                    );
                }
            }

            cy.mount(<App />).as('DOM');
            cy.get('@DOM').document().find('input').as('input');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.attr', 'value', 8);

            cy.get('@DOM').document().find('button').eq(0).as('button');
            cy.get('@button').click();
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.attr', 'value', 5);
        });
        it('if max or min were undefined or null should infinity', () => {
            cy.mount(<NumberPicker max={10} defaultValue={10} min={10} />).as('numberPicker');
            cy.get('@numberPicker').document().find('input').as('input');
            cy.get('@numberPicker').document().find('button').eq(0).as('up');
            cy.get('@numberPicker').document().find('button').eq(1).as('down');

            cy.get('@up').click();
            cy.get('@input').should('have.attr', 'value', 10);

            cy.get('@down').click();
            cy.get('@input').should('have.attr', 'value', 10);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            cy.get('@numberPicker').then(({ component, rerender }: any) => {
                return rerender(React.cloneElement(component, { max: undefined }));
            });
            cy.get('@up').click();
            cy.get('@input').should('have.attr', 'value', 11);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            cy.get('@numberPicker').then(({ component, rerender }: any) => {
                return rerender(React.cloneElement(component, { min: undefined }));
            });
            cy.get('@down').click();
            cy.get('@down').click();
            cy.get('@input').should('have.attr', 'value', 9);
        });
    });

    describe('stringMode', () => {
        it('should support big number not within [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER] in stringMode ', () => {
            cy.mount(
                <NumberPicker
                    defaultValue={Number.MAX_SAFE_INTEGER}
                    style={{ width: '100%' }}
                    stringMode
                />
            ).as('NumberPicker');
            cy.get('@NumberPicker')
                .its('component.props.defaultValue')
                .should('eq', Number.MAX_SAFE_INTEGER);
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type(`${Number.MAX_SAFE_INTEGER}2333`);
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', `${Number.MAX_SAFE_INTEGER}2333`);
            cy.get('@input').clear();
            cy.get('@input').type(`${Number.MAX_SAFE_INTEGER}a2333`);
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', `${Number.MAX_SAFE_INTEGER}2333`);
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.value', `${Number.MAX_SAFE_INTEGER}2333`);
            cy.get('@input').clear();
            cy.get('@input').type(`${Number.MAX_SAFE_INTEGER}2333.1`);
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', `${Number.MAX_SAFE_INTEGER}2333.1`);
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.value', `${Number.MAX_SAFE_INTEGER}2333`);

            const step = '0.000000000000000000000001';
            class App extends React.Component {
                state = {
                    value: `${Number.MIN_SAFE_INTEGER}`,
                };
                onChange = (value: number) => {
                    this.setState({
                        value,
                    });
                };

                render() {
                    return (
                        <NumberPicker
                            value={this.state.value}
                            onChange={this.onChange}
                            step={step}
                            stringMode
                            style={{ width: '100%' }}
                        />
                    );
                }
            }
            cy.mount(<App />).as('NumberPicker2');
            cy.get('@NumberPicker2').document().find('input').as('input2');
            cy.get('@input2').should('have.attr', 'value', `${Number.MIN_SAFE_INTEGER}`);
            cy.get('@input2').clear();
            cy.get('@input2').type(`${Number.MAX_SAFE_INTEGER}2333`);
            cy.get('@input2').trigger('focus');
            cy.get('@input2').should('have.value', `${Number.MAX_SAFE_INTEGER}2333`);
            cy.get('@input2').trigger('blur');
            cy.get('@input2').should('have.value', `${Number.MAX_SAFE_INTEGER}2333`);
            cy.get('@input2').clear();
            cy.get('@input2').type(`${Number.MAX_SAFE_INTEGER}a2333`);
            cy.get('@input2').trigger('focus');
            cy.get('@input2').should('have.value', `${Number.MAX_SAFE_INTEGER}2333`);
            cy.get('@input2').trigger('blur');
            cy.get('@input2').should('have.value', `${Number.MAX_SAFE_INTEGER}2333`);
            cy.get('@input2').clear();
            cy.get('@input2').type(`${Number.MAX_SAFE_INTEGER}.2333`);
            cy.get('@input2').trigger('focus');
            cy.get('@input2').should('have.value', `${Number.MAX_SAFE_INTEGER}.2333`);
            cy.get('@input2').trigger('blur');
            cy.get('@input2').should('have.value', `${Number.MAX_SAFE_INTEGER}.2333`);
        });

        it('should support big number when triggering step whether under control or not', () => {
            cy.mount(
                <NumberPicker
                    defaultValue={Number.MAX_SAFE_INTEGER}
                    style={{ width: '100%' }}
                    stringMode
                />
            ).as('NumberPicker');
            cy.get('@NumberPicker')
                .its('component.props.defaultValue')
                .should('eq', Number.MAX_SAFE_INTEGER);
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').should('have.value', `${Number.MAX_SAFE_INTEGER}`);
            cy.get('@NumberPicker').document().find('button').eq(0).click();
            const PlusBigNumber = Big(Number.MAX_SAFE_INTEGER).plus(1).toFixed(0);
            cy.get('@input').should('have.value', PlusBigNumber);
            cy.get('@NumberPicker').document().find('button').eq(1).click();
            cy.get('@input').should('have.value', `${Number.MAX_SAFE_INTEGER}`);
            cy.get('@NumberPicker').document().find('button').eq(1).click();
            const MinusBigNumber = Big(Number.MAX_SAFE_INTEGER).minus(1).toFixed(0);
            cy.get('@input').should('have.value', MinusBigNumber);

            const step = '0.000000000000000000000001';
            const precision = step.length - step.indexOf('.') - 1;
            class App extends React.Component {
                state = {
                    value: `${Number.MIN_SAFE_INTEGER}`,
                };
                onChange = (value: number) => {
                    this.setState({
                        value,
                    });
                };

                render() {
                    return (
                        <NumberPicker
                            value={this.state.value}
                            onChange={this.onChange}
                            step={step}
                            style={{ width: '100%' }}
                            stringMode
                        />
                    );
                }
            }

            cy.mount(<App />).as('NumberPicker2');
            cy.get('@NumberPicker2').document().find('input').as('input2');
            cy.get('@input2').should('have.attr', 'value', `${Number.MIN_SAFE_INTEGER}`);
            cy.get('@NumberPicker2').document().find('button').eq(0).click();
            const PlusBigNumber2 = Big(Number.MIN_SAFE_INTEGER).plus(step).toFixed(precision);
            cy.get('@input2').should('have.value', PlusBigNumber2);
            cy.get('@NumberPicker2').document().find('button').eq(1).click();
            const MinusBigNumber2 = Big(Number.MIN_SAFE_INTEGER).toFixed(precision);
            cy.get('@input2').should('have.value', MinusBigNumber2);
            cy.get('@NumberPicker2').document().find('button').eq(1).click();
            const MinusBigNumber3 = Big(Number.MIN_SAFE_INTEGER).minus(step).toFixed(precision);
            cy.get('@input2').should('have.value', MinusBigNumber3);
        });

        it('should support max & min props change', () => {
            const step = '0.000000000000000000000001';
            const precision = step.length - step.indexOf('.') - 1;
            class App extends React.Component {
                state = {
                    value: `${Number.MAX_SAFE_INTEGER}`,
                    max: Infinity,
                    min: -Infinity,
                };
                onChange = (value: number | string) => {
                    this.setState({
                        value,
                        max: value === `${Number.MAX_SAFE_INTEGER}000` ? 20 : Infinity,
                        min: value === `${Number.MAX_SAFE_INTEGER}000` ? 0 : -Infinity,
                    });
                };

                render() {
                    const { value, max, min } = this.state;
                    return (
                        <NumberPicker
                            max={max}
                            min={min}
                            value={value}
                            onChange={this.onChange}
                            step={step}
                            style={{ width: '100%' }}
                            stringMode
                        />
                    );
                }
            }
            cy.mount(<App />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').should('have.attr', 'value', `${Number.MAX_SAFE_INTEGER}`);
            cy.get('@input').clear();
            cy.get('@input').type(`${Number.MAX_SAFE_INTEGER}123456789`);
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', `${Number.MAX_SAFE_INTEGER}123456789`);
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.value', `${Number.MAX_SAFE_INTEGER}123456789`);
            cy.get('@input').clear();
            cy.get('@input').type(`${Number.MAX_SAFE_INTEGER}000`);
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', `${Number.MAX_SAFE_INTEGER}000`);
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.value', Big(20).toFixed(precision));
        });

        it('should delete 0 at beginning when blur', () => {
            cy.mount(
                <NumberPicker
                    defaultValue={Number.MAX_SAFE_INTEGER}
                    style={{ width: '100%' }}
                    stringMode
                />
            ).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type(`0${Number.MAX_SAFE_INTEGER}123`);
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', `0${Number.MAX_SAFE_INTEGER}123`);
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.value', `${Number.MAX_SAFE_INTEGER}123`);
        });
    });

    describe('behavior', () => {
        it('simulates onChange/onClick/onFocus/onDisabled events', () => {
            const onFocus = cy.spy();
            const onChange = cy.spy();
            cy.mount(<NumberPicker onChange={onChange} onFocus={onFocus} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('button').eq(0).click();
            cy.wrap(onChange).should('be.calledOnce');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').type(`5`);
            cy.get('@input').trigger('focus');
            cy.wrap(onChange).should('be.calledTwice');
            cy.get('@input').trigger('blur');
            cy.get('@input').trigger('focus');
            cy.wrap(onFocus).should('be.calledThrice');
        });

        it('should support defaultValue and can be changed', () => {
            const onChange = (value: number) => {
                assert(value === 1234);
            };
            cy.mount(<NumberPicker defaultValue={123} onChange={onChange} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').should('have.attr', 'value', 123);
            cy.get('@input').type('4');
            cy.get('@input').should('have.value', '1234');
        });

        it('should support value and can not be changed', () => {
            const onChange = (value: number) => {
                assert(value === 1234);
            };
            cy.mount(<NumberPicker value={123} onChange={onChange} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').should('have.attr', 'value', 123);
            cy.get('@input').type('4');
            cy.get('@input').should('have.value', '1234');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.attr', 'value', 123);
        });

        it('should only input -.1234567890', () => {
            cy.mount(<NumberPicker />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').type('-1.');
            cy.get('@input').should('have.value', '-1.');
            cy.get('@input').clear();
            cy.get('@input').type('-1.a');
            cy.get('@input').should('have.value', '-1.');
            cy.get('@input').clear();
            cy.get('@input').type('-1.13a2');
            cy.get('@input').should('have.value', '-1.132');
        });

        it('onChange value 1.9 -> 1. should input displayValue === 1. onchange value === 1', () => {
            const onChange = (value: number) => {
                assert(value === 1 || value === undefined);
            };
            cy.mount(<NumberPicker value={1.9} onChange={onChange} precision={1} />).as(
                'NumberPicker'
            );
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('1.');
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '1.');

            cy.mount(<NumberPicker value={1} onChange={onChange} precision={1} />).as(
                'NumberPicker2'
            );
            cy.get('@NumberPicker2').document().find('input').as('input2');
            cy.get('@input2').clear();
            cy.get('@input2').type('1.');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').should('have.value', '1.');
            cy.get('@input2').trigger('blur');
            cy.get('@input2').should('have.attr', 'value', 1);
        });

        it('should leave out digits larger than precision set', () => {
            cy.mount(<NumberPicker defaultValue={0} precision={1} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('0.34');
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '0.34');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.attr', 'value', 0.3);

            cy.mount(<NumberPicker defaultValue={1} />).as('NumberPicker2');
            cy.get('@NumberPicker2').document().find('input').as('input2');
            cy.get('@input2').clear();
            cy.get('@input2').type('0.');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').should('have.value', '0.');
            cy.get('@input2').trigger('blur');
            cy.get('@input2').should('have.attr', 'value', 0);
            cy.get('@input2').clear();
            cy.get('@input2').type('0.24');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').should('have.value', '0.24');
            cy.get('@input2').trigger('blur');
            cy.get('@input2').should('have.attr', 'value', 0);
            cy.get('@input2').clear();
            cy.get('@input2').type('0.2.4');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').should('have.value', '0.2.4');
            cy.get('@input2').trigger('blur');
            cy.get('@input2').should('have.attr', 'value', 0);
        });

        it('should ignore more than one . or -, cut at second . or -', () => {
            cy.mount(<NumberPicker defaultValue={0} precision={2} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('0.3.4');
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '0.3.4');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.attr', 'value', 0.3);

            cy.get('@input').clear();
            cy.get('@input').type('0.3');
            cy.get('@input').trigger('focus');
            cy.get('@input').type('.');
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '0.3.');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.attr', 'value', 0.3);

            cy.get('@input').clear();
            cy.get('@input').type('-0.3');
            cy.get('@input').trigger('focus');
            cy.get('@input').type('-');
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '-0.3-');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.attr', 'value', -0.3);

            cy.get('@input').clear();
            cy.get('@input').type('-1.34');
            cy.get('@input').trigger('focus');
            cy.get('@input').type('5-4');
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '-1.345-4');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.attr', 'value', -1.34);

            const onChange = cy.spy();
            cy.mount(
                <NumberPicker
                    defaultValue={0}
                    precision={2}
                    onChange={onChange}
                    style={{ width: '100%' }}
                />
            ).as('NumberPicker2');
            cy.get('@NumberPicker2').document().find('input').as('input2');
            cy.get('@input2').clear();
            cy.get('@input2').type('-0');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').type('.');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').type('-');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').type('3');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').should('have.value', '-0.-3');
            cy.get('@input2').trigger('blur');
            cy.get('@input2').should('have.attr', 'value', '-0');
            cy.wrap(onChange).should('have.been.called');
        });

        it('should work with value and onChange under control', () => {
            class App extends React.Component {
                state = {
                    value: 123,
                };
                onChange = (value: number) => {
                    this.setState({
                        value,
                    });
                };

                render() {
                    return <NumberPicker value={this.state.value} onChange={this.onChange} />;
                }
            }
            cy.mount(<App />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').should('have.attr', 'value', 123);
            cy.get('@input').clear();
            cy.get('@input').type('20');
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '20');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.attr', 'value', 20);
        });

        it('should not correct "" as 0 when blur', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const onChange = (value: any) => {
                assert(value === undefined);
            };
            cy.mount(<NumberPicker defaultValue={0} onChange={onChange} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '');
            cy.get('@input').trigger('blur');
        });

        it('should work with value and onChange and min under control', () => {
            class App extends React.Component {
                state: { value?: number } = {};
                onChange = (value: number) => {
                    this.setState({
                        value,
                    });
                };

                render() {
                    return (
                        <NumberPicker min={6} value={this.state.value} onChange={this.onChange} />
                    );
                }
            }
            cy.mount(<App />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('1');
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '1');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.attr', 'value', 6);
        });

        it('should support input with -.x or .x or -0.0x', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const onChange: any = (value: number) => {
                assert(value === -0.2 || value === undefined);
            };
            cy.mount(<NumberPicker defaultValue={-0.3} onChange={onChange} precision={1} />).as(
                'NumberPicker'
            );
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('-.2');
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '-.2');
            cy.get('@input').clear();
            cy.get('@input').type('-.');
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '-.');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.attr', 'value', '');

            cy.mount(<NumberPicker defaultValue={-0.2} onChange={onChange} precision={1} />).as(
                'NumberPicker2'
            );
            cy.get('@NumberPicker2').document().find('input').as('input2');
            cy.get('@input2').clear();
            cy.get('@input2').type('-.2');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').should('have.value', '-.2');
            cy.get('@input2').trigger('blur');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').should('have.value', '-0.2');

            const onChange3 = (value: number) => {
                assert(value === 0.3 || value === undefined);
            };
            cy.mount(<NumberPicker defaultValue={0.2} onChange={onChange3} precision={1} />).as(
                'NumberPicker3'
            );
            cy.get('@NumberPicker3').document().find('input').as('input3');
            cy.get('@input3').clear();
            cy.get('@input3').type('.3');
            cy.get('@input3').trigger('focus');
            cy.get('@input3').should('have.value', '.3');
            cy.get('@input3').trigger('blur');
            cy.get('@input3').trigger('focus');
            cy.get('@input3').should('have.value', '0.3');

            const onChange4 = cy.spy();
            cy.mount(<NumberPicker defaultValue={0.3} onChange={onChange4} precision={1} />).as(
                'NumberPicker4'
            );
            cy.get('@NumberPicker4').document().find('input').as('input4');
            cy.get('@input4').clear();
            cy.get('@input4').type('.3');
            cy.get('@input4').trigger('focus');
            cy.get('@input4').should('have.value', '.3');
            cy.wrap(onChange4).should('be.calledTwice');
            cy.get('@input4').trigger('blur');
            cy.get('@input4').should('have.value', '0.3');
            cy.wrap(onChange4).should('be.calledTwice');

            const onChange5 = cy.spy();
            cy.mount(<NumberPicker defaultValue={0.3} onChange={onChange5} precision={1} />).as(
                'NumberPicker5'
            );
            cy.get('@NumberPicker5').document().find('input').as('input5');
            cy.get('@input5').clear();
            cy.get('@input5').type('-0.');
            cy.get('@input5').trigger('focus');
            cy.get('@input5').should('have.value', '-0.');
            cy.wrap(onChange5).should('be.calledTwice');
            cy.get('@input5').trigger('blur');
            cy.get('@input5').should('have.value', '-0');
            cy.wrap(onChange5).should('be.calledTwice');

            cy.mount(<NumberPicker defaultValue={0} precision={2} />).as('NumberPicker6');
            cy.get('@NumberPicker6').document().find('input').as('input6');
            cy.get('@input6').clear();
            cy.get('@input6').type('-0.0');
            cy.get('@input6').trigger('focus');
            cy.get('@input6').trigger('blur');
            cy.get('@input6').should('have.value', '-0');
            cy.get('@input6').clear();
            cy.get('@input6').type('-0.0');
            cy.get('@input6').trigger('focus');
            cy.get('@input6').should('have.value', '-0.0');
            cy.get('@input6').clear();
            cy.get('@input6').type('-0.01');
            cy.get('@input6').trigger('focus');
            cy.get('@input6').trigger('blur');
            cy.get('@input6').should('have.value', '-0.01');
        });

        it('should support input with -0 ', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const onChange: any = (value: number) => {
                assert(value === -0 || value === undefined);
            };
            cy.mount(<NumberPicker defaultValue={-0.3} onChange={onChange} precision={1} />).as(
                'NumberPicker'
            );
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('-0');
            cy.get('@input').trigger('focus');
            cy.get('@input').trigger('blur');
            cy.get('@input').clear();
            cy.get('@input').type('-0.');
            cy.get('@input').trigger('focus');
            cy.get('@input').trigger('blur');

            const onChange2 = cy.spy();
            cy.mount(<NumberPicker defaultValue={-0.3} onChange={onChange2} precision={1} />).as(
                'NumberPicker2'
            );
            cy.get('@NumberPicker2').document().find('input').as('input2');
            cy.get('@input2').clear();
            cy.get('@input2').type('-0.');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').should('have.value', '-0.');
            cy.wrap(onChange2).should('be.calledTwice');
            cy.get('@input2').trigger('blur');
            cy.get('@input2').should('have.value', '-0');
            cy.wrap(onChange2).should('be.calledTwice');

            const onChange3 = cy.spy();
            cy.mount(<NumberPicker defaultValue={-0.3} onChange={onChange3} precision={1} />).as(
                'NumberPicker3'
            );
            cy.get('@NumberPicker3').document().find('input').as('input3');
            cy.get('@input3').clear();
            cy.get('@input3').type('-3');
            cy.get('@input3').clear();
            cy.get('@input3').type('-0');
            cy.get('@input3').trigger('focus');
            cy.get('@input3').should('have.value', '-0');
            cy.wrap(onChange3).should('have.callCount', 4);
        });

        // 特殊输入检测
        it('should support input with -/-0/-0./0./0.0 ', () => {
            const onChange = cy.spy();
            cy.mount(<NumberPicker defaultValue={0} onChange={onChange} precision={1} />).as(
                'NumberPicker'
            );
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type(' ');
            cy.get('@input').trigger('focus');
            cy.wrap(onChange).should('be.calledOnce');
            cy.get('@input').clear();
            cy.get('@input').type('  ');
            cy.get('@input').trigger('focus');
            cy.wrap(onChange).should('be.calledOnce');
            cy.get('@input').clear();
            cy.get('@input').type('-');
            cy.get('@input').trigger('focus');
            cy.wrap(onChange).should('be.calledOnce');
            cy.get('@input').clear();
            cy.get('@input').type('-0.');
            cy.get('@input').trigger('focus');
            cy.wrap(onChange).should('be.calledTwice');
            cy.get('@input').clear();
            cy.get('@input').type('-0.0');
            cy.get('@input').trigger('focus');
            cy.wrap(onChange).should('have.callCount', 4);
            cy.get('@input').clear();
            cy.get('@input').type('0.');
            cy.get('@input').trigger('focus');
            cy.wrap(onChange).should('have.callCount', 6);
            cy.get('@input').clear();
            cy.get('@input').type('0.0');
            cy.get('@input').trigger('focus');
            cy.wrap(onChange).should('have.callCount', 8);
            cy.get('@input').trigger('blur');
            cy.wrap(onChange).should('have.callCount', 8);
        });

        it('should accept disabled ', () => {
            cy.mount(<NumberPicker defaultValue={0} disabled />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('button').eq(0).as('up');
            cy.get('@NumberPicker').document().find('button').eq(1).as('down');
            cy.get('@up').should('have.attr', 'disabled');
            cy.get('@down').should('have.attr', 'disabled');
        });

        it('should support click add && reduce', () => {
            const onChange = (value: number) => {
                assert(value === 4);
            };
            cy.mount(<NumberPicker defaultValue={3} onChange={onChange} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('button').eq(0).as('up');
            cy.get('@NumberPicker').document().find('button').eq(1).as('down');
            cy.get('@up').click();
            cy.get('@down').trigger('mousedown');

            const onChange2 = (value: number) => {
                assert(value === 2);
            };
            cy.mount(<NumberPicker defaultValue={3} onChange={onChange2} />).as('NumberPicker2');
            cy.get('@NumberPicker2').document().find('button').eq(1).as('down');
            cy.get('@down').click();
        });

        it('should support editable', () => {
            const onChange = (value: number) => {
                assert(value === 2 || value === 20 || value === undefined);
            };
            cy.mount(<NumberPicker defaultValue={123} editable onChange={onChange} />).as(
                'NumberPicker'
            );
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('20');
            cy.get('@input').trigger('focus');

            const onChange2 = (value: number) => {
                assert(value === 124);
            };
            cy.mount(<NumberPicker defaultValue={123} editable={false} onChange={onChange2} />).as(
                'NumberPicker2'
            );
            cy.get('@NumberPicker2').document().find('button').eq(0).click();
        });

        it('should support max & min', () => {
            const onChange = (value: number) => {
                assert(value === 20);
            };
            const onDisabled = cy.spy();
            cy.mount(
                <NumberPicker
                    defaultValue={19}
                    max={20}
                    step={3}
                    onDisabled={onDisabled}
                    onChange={onChange}
                />
            ).as('NumberPicker');
            cy.get('@NumberPicker').document().find('button').eq(0).as('up');
            cy.get('@up').click();
            cy.get('@up').click();
            cy.wrap(onDisabled).should('be.calledOnce');

            const onChange2 = (value: number) => {
                assert(value === 18);
            };
            const onDisabled2 = cy.spy();
            cy.mount(
                <NumberPicker
                    defaultValue={19}
                    max={20}
                    min={18}
                    step={3}
                    onDisabled={onDisabled2}
                    onChange={onChange2}
                />
            ).as('NumberPicker2');
            cy.get('@NumberPicker2').document().find('button').eq(1).as('down2');
            cy.get('@down2').click();
            cy.get('@down2').click();
            cy.wrap(onDisabled2).should('be.calledOnce');

            cy.mount(<NumberPicker defaultValue={22} max={20} />).as('NumberPicker3');
            cy.get('@NumberPicker3').its('component.props.max').should('eq', 20);

            cy.mount(<NumberPicker defaultValue={17} min={18} />).as('NumberPicker4');
            cy.get('@NumberPicker4').its('component.props.min').should('eq', 18);

            const onChange5 = (value: number) => {
                assert(value === 18 || value === 20 || value === undefined);
            };
            cy.mount(<NumberPicker max={20} min={18} step={3} onChange={onChange5} />).as(
                'NumberPicker5'
            );
            cy.get('@NumberPicker5').document().find('input').as('input5');
            cy.get('@input5').clear();
            cy.get('@input5').type('1');
            cy.get('@input5').trigger('focus');
            cy.get('@input5').should('have.value', '1');
            cy.get('@input5').trigger('blur');
            cy.get('@input5').should('have.value', '18');
            cy.get('@input5').clear();
            cy.get('@input5').type('21');
            cy.get('@input5').trigger('focus');
            cy.get('@input5').trigger('blur');
            cy.get('@input5').should('have.value', '20');
        });

        it('should avoid input - when min >= 0', () => {
            const onChange = (value: number) => {
                assert(value === 0);
            };
            cy.mount(<NumberPicker min={0} onChange={onChange} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('-');
            cy.get('@input').trigger('focus');
            cy.get('@input').type('2');
            cy.get('@input').trigger('focus');
            cy.get('@input').trigger('blur');

            cy.mount(<NumberPicker defaultValue={-2} min={0} onChange={onChange} />).as(
                'NumberPicker2'
            );
            cy.get('@NumberPicker2').document().find('input').as('input2');
            cy.get('@input2').trigger('blur');
            cy.get('@input2').type('-');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').type('21');
            cy.get('@input2').trigger('focus');
            cy.get('@input2').trigger('blur');
        });
        it('should be equal min while next value < min by click +', () => {
            const onChange = (value: number) => {
                assert(value === 30);
            };
            cy.mount(<NumberPicker defaultValue={5} min={30} step={3} onChange={onChange} />).as(
                'NumberPicker'
            );
            cy.get('@NumberPicker').document().find('button').eq(0).as('up');
            cy.get('@up').click();
        });

        it('should be equal max while next value > max by click -', () => {
            const onChange = (value: number) => {
                assert(value === 30);
            };
            cy.mount(<NumberPicker defaultValue={205} max={30} step={3} onChange={onChange} />).as(
                'NumberPicker'
            );
            cy.get('@NumberPicker').document().find('button').eq(1).as('down');
            cy.get('@down').click();
        });

        it('should not input number large then max', () => {
            cy.mount(<NumberPicker max={10} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('100');
            cy.get('@input').trigger('focus');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.value', '10');
            cy.get('@input').clear();
            cy.get('@input').type('5');
            cy.get('@input').trigger('focus');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.value', '5');
        });

        it('should support precision', () => {
            cy.mount(<NumberPicker defaultValue={0.121} step={0.01} precision={3} />).as(
                'NumberPicker'
            );
            cy.get('@NumberPicker').document().find('button').eq(0).as('up');
            cy.get('@up').click();
            cy.get('@up').click();
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').should('have.value', 0.141);
        });

        it('should consider [。] as [.]', () => {
            const onChange = (value: number) => {
                assert(value === 3 || value === 3.9 || value === undefined);
            };
            cy.mount(
                <NumberPicker defaultValue={1.2} step={0.01} precision={3} onChange={onChange} />
            ).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('3。9');
            cy.get('@input').trigger('focus');
            cy.get('@input').should('have.value', '3.9');
        });

        it('should support onCorrect', () => {
            const onCorrect = cy.spy();
            cy.mount(<NumberPicker defaultValue={1} min={1} max={3} onCorrect={onCorrect} />).as(
                'NumberPicker'
            );
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('21');
            cy.get('@input').trigger('focus');
            cy.get('@input').trigger('blur');
            cy.wrap(onCorrect).should('be.calledOnce');

            const onCorrect2 = (obj: { currentValue: number; oldValue: string }) => {
                assert(obj.currentValue === 20);
                assert(obj.oldValue === '21');
            };
            cy.mount(
                <NumberPicker defaultValue={19} max={20} step={3} onCorrect={onCorrect2} />
            ).as('NumberPicker2');
            cy.get('@NumberPicker2').document().find('input').as('input2');
            cy.get('@input2').clear();
            cy.get('@input2').type('21');
            cy.get('@input2').trigger('focus');
        });

        it('should support onKeyDown & onFocus & onBlur', () => {
            const onChange = (value: number) => {
                assert(value === 20);
            };
            cy.mount(<NumberPicker defaultValue={19} onChange={onChange} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').trigger('keydown', { keyCode: 38 });

            const onChange2 = (value: number) => {
                assert(value === 18);
            };
            cy.mount(<NumberPicker defaultValue={19} onChange={onChange2} />).as('NumberPicker2');
            cy.get('@NumberPicker2').document().find('input').as('input2');
            cy.get('@input2').trigger('keydown', { keyCode: 40 });

            const onChange3 = (value: number) => {
                assert(value === undefined);
            };
            cy.mount(<NumberPicker defaultValue={19} onChange={onChange3} />).as('NumberPicker3');
            cy.get('@NumberPicker3').document().find('input').as('input3');
            cy.get('@input3').clear();
            cy.get('@input3').type('-');
            cy.get('@input3').trigger('focus');
            cy.get('@input3').trigger('blur');
        });

        it('should support Integer & Float ', () => {
            const onChange = (value: number) => {
                assert(value === 3 || value === undefined);
            };
            cy.mount(<NumberPicker defaultValue={19} onChange={onChange} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').clear();
            cy.get('@input').type('3.3');
            cy.get('@input').trigger('focus');

            const onChange2 = (value: number) => {
                assert(value === 3 || value === 3.3 || value === undefined);
            };
            cy.mount(<NumberPicker defaultValue={19} onChange={onChange2} step={0.2} />).as(
                'NumberPicker2'
            );
            cy.get('@NumberPicker2').document().find('input').as('input2');
            cy.get('@input2').clear();
            cy.get('@input2').type('3.3');
            cy.get('@input2').trigger('focus');

            const onChange3 = (value: number) => {
                assert(value === 3 || value === undefined);
            };
            cy.mount(<NumberPicker defaultValue={19} onChange={onChange3} step={0.2} />).as(
                'NumberPicker3'
            );
            cy.get('@NumberPicker3').document().find('input').as('input3');
            cy.get('@input3').clear();
            cy.get('@input3').type('3.');
            cy.get('@input3').trigger('focus');
        });

        it('should support e.triggerType ', () => {
            const onChange: NumberPickerProps['onChange'] = (value, e) => {
                assert(e.triggerType === 'up');
            };
            cy.mount(<NumberPicker onChange={onChange} />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('button').eq(0).as('up');
            cy.get('@up').click();

            const onChange2: NumberPickerProps['onChange'] = (value, e) => {
                assert(e.triggerType === 'down');
            };
            cy.mount(<NumberPicker onChange={onChange2} />).as('NumberPicker2');
            cy.get('@NumberPicker2').document().find('button').eq(1).as('down');
            cy.get('@down').click();
        });

        it('will render value in custom if `format` is settled', () => {
            const format = (val: number) => `${val} %`;
            const defaultValue = 1000;
            cy.mount(<NumberPicker defaultValue={defaultValue} format={format} />).as(
                'NumberPicker'
            );
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').trigger('blur');
            cy.get('@input').should('have.value', format(defaultValue));
        });
    });

    describe('react api', () => {
        it('should retain the initial defaultValue when props change', () => {
            class App extends React.Component {
                state: { value?: number } = { value: 19 };
                changeDefalutValue = (value: number) => {
                    this.setState({
                        value,
                    });
                };

                render() {
                    return (
                        <>
                            <NumberPicker defaultValue={this.state.value} />
                            <button onClick={() => this.changeDefalutValue(30)}>
                                点击变更defaultValue
                            </button>
                        </>
                    );
                }
            }
            cy.mount(<App />).as('NumberPicker');
            cy.get('@NumberPicker').document().find('input').as('input');
            cy.get('@input').should('have.value', '19');
            cy.get('@NumberPicker').document().find('button').eq(2).as('button');
            cy.get('@button').click();
            cy.get('@input').should('have.value', '19');
        });

        it('calls componentWillReceiveProps', () => {
            cy.mount(<NumberPicker value={30} />).as('NumberPicker2');
            cy.get('@NumberPicker2').document().find('input').should('have.value', 30);

            cy.mount(<NumberPicker value={undefined} />).as('NumberPicker3');
            cy.get('@NumberPicker3').document().find('input').should('have.value', '');

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const value: any = null;
            cy.mount(<NumberPicker value={value} />).as('NumberPicker4');
            cy.get('@NumberPicker4').document().find('input').should('have.value', '');
        });
    });

    describe('chrome bug hack', () => {
        it('0.28 + 0.01 should be 0.29 not 0.29000000000000004', () => {
            const onChange = (value: number) => {
                assert(value === 0.29);
            };
            cy.mount(
                <NumberPicker defaultValue={0.28} onChange={onChange} step={0.01} precision={2} />
            ).as('NumberPicker');
            cy.get('@NumberPicker').document().find('button').eq(0).as('up');
            cy.get('@up').click();
        });

        it('0.29 - 0.01 should be 0.28 not 0.27999999999999997', () => {
            const onChange = (value: number) => {
                assert(value === 0.28);
            };
            cy.mount(
                <NumberPicker defaultValue={0.29} onChange={onChange} step={0.01} precision={2} />
            ).as('NumberPicker');
            cy.get('@NumberPicker').document().find('button').eq(1).as('down');
            cy.get('@down').click();
        });
    });
});
