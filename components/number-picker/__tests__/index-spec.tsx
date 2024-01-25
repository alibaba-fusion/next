import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import NumberPicker from '../index';
import Big from 'big.js';

Enzyme.configure({ adapter: new Adapter() });

/* global describe it */
describe('number-picker', () => {
    describe('render', () => {
        it('should accept defaultValue & value', () => {
            let wrapper = mount(<NumberPicker defaultValue={123} />),
                wrapper2 = mount(<NumberPicker value={123} />);
            assert(wrapper.props().defaultValue === 123);
            assert(wrapper2.props().value === 123);
        });
        it('should accept type ', () => {
            const wrapper = mount(<NumberPicker type="inline" />);
            assert(wrapper.props().type === 'inline');
        });
        it('should not tab trigger ', () => {
            const wrapper = mount(<NumberPicker />);
            const wrapper1 = mount(<NumberPicker type="inline" />);
            assert(wrapper.find('button').at(0).prop('tabIndex') === -1);
            assert(wrapper.find('button').at(1).prop('tabIndex') === -1);
            assert(wrapper1.find('button').at(0).prop('tabIndex') === -1);
            assert(wrapper1.find('button').at(1).prop('tabIndex') === -1);
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

                onChange = value => {
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

            let wrapper = mount(<App />);

            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 8);

            wrapper.find('button').at(0).simulate('click');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 5);
        });
        it('if max or min were undefined or null should infinity', () => {
            const wrapper = mount(<NumberPicker max={10} defaultValue={10} min={10} />);
            wrapper.find('button').at(0).simulate('click');
            assert(wrapper.find('input').props('value').value === 10);
            wrapper.setProps({ max: undefined });
            wrapper.find('button').at(0).simulate('click');
            assert(wrapper.find('input').props('value').value === 11);
            wrapper.find('button').at(1).simulate('click');
            wrapper.find('button').at(1).simulate('click');
            assert(wrapper.find('input').props('value').value === 10);
            wrapper.setProps({ min: undefined });
            wrapper.find('button').at(1).simulate('click');
            assert(wrapper.find('input').props('value').value === 9);
        });
    });

    describe('stringMode', () => {
        it('should support big number not within [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER] in stringMode ', () => {
            const step = '0.000000000000000000000001';
            class App extends React.Component {
                state = {
                    value: `${Number.MIN_SAFE_INTEGER}`,
                };
                onChange = value => {
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
                        />
                    );
                }
            }
            let wrapper = mount(<NumberPicker defaultValue={Number.MAX_SAFE_INTEGER} stringMode />),
                wrapper2 = mount(<App />);
            assert(wrapper.props().defaultValue === Number.MAX_SAFE_INTEGER);
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}`);

            wrapper
                .find('input')
                .simulate('change', { target: { value: `${Number.MAX_SAFE_INTEGER}2333` } });
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}2333`);
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}2333`);
            wrapper
                .find('input')
                .simulate('change', { target: { value: `${Number.MAX_SAFE_INTEGER}a2333` } });
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}2333`);
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}2333`);
            wrapper
                .find('input')
                .simulate('change', { target: { value: `${Number.MAX_SAFE_INTEGER}2333.1` } });
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}2333.1`);
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}2333`);

            assert(wrapper2.find('input').prop('value') === `${Number.MIN_SAFE_INTEGER}`);
            wrapper2
                .find('input')
                .simulate('change', { target: { value: `${Number.MAX_SAFE_INTEGER}2333` } });
            assert(wrapper2.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}2333`);
            wrapper2.find('input').simulate('blur');
            assert(wrapper2.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}2333`);
            wrapper2
                .find('input')
                .simulate('change', { target: { value: `${Number.MAX_SAFE_INTEGER}a2333` } });
            assert(wrapper2.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}2333`);
            wrapper2.find('input').simulate('blur');
            assert(wrapper2.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}2333`);
            wrapper2
                .find('input')
                .simulate('change', { target: { value: `${Number.MAX_SAFE_INTEGER}.2333` } });
            assert(wrapper2.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}.2333`);
            wrapper2.find('input').simulate('blur');
            assert(wrapper2.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}.2333`);
        });

        it('should support big number when triggering step whether under control or not', () => {
            const step = '0.000000000000000000000001';
            const precision = step.length - step.indexOf('.') - 1;
            class App extends React.Component {
                state = {
                    value: `${Number.MIN_SAFE_INTEGER}`,
                };
                onChange = value => {
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
                        />
                    );
                }
            }
            let wrapper = mount(<NumberPicker defaultValue={Number.MAX_SAFE_INTEGER} stringMode />),
                wrapper2 = mount(<App />);
            assert(wrapper.props().defaultValue === Number.MAX_SAFE_INTEGER);
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}`);
            assert(wrapper2.find('input').prop('value') === `${Number.MIN_SAFE_INTEGER}`);

            wrapper.find('button').at(0).simulate('click');
            assert(
                wrapper.find('input').prop('value') ===
                    Big(Number.MAX_SAFE_INTEGER).plus(1).toFixed(0)
            );
            wrapper.find('button').at(1).simulate('click');
            assert(wrapper.find('input').prop('value') === Big(Number.MAX_SAFE_INTEGER).toFixed(0));
            wrapper.find('button').at(1).simulate('click');
            assert(
                wrapper.find('input').prop('value') ===
                    Big(Number.MAX_SAFE_INTEGER).minus(1).toFixed(0)
            );

            wrapper2.find('button').at(0).simulate('click');
            assert(
                wrapper2.find('input').prop('value') ===
                    Big(Number.MIN_SAFE_INTEGER).plus(step).toFixed(precision)
            );
            wrapper2.find('button').at(1).simulate('click');
            assert(
                wrapper2.find('input').prop('value') ===
                    Big(Number.MIN_SAFE_INTEGER).toFixed(precision)
            );
            wrapper2.find('button').at(1).simulate('click');
            assert(
                wrapper2.find('input').prop('value') ===
                    Big(Number.MIN_SAFE_INTEGER).minus(step).toFixed(precision)
            );
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
                onChange = value => {
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
                            stringMode
                        />
                    );
                }
            }
            let wrapper = mount(<App />);
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}`);
            wrapper
                .find('input')
                .simulate('change', { target: { value: `${Number.MAX_SAFE_INTEGER}123456789` } });
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}123456789`);
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}123456789`);
            wrapper
                .find('input')
                .simulate('change', { target: { value: `${Number.MAX_SAFE_INTEGER}000` } });
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}000`);
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === Big(20).toFixed(precision));
        });

        it('should delete 0 at beginning when blur', () => {
            const wrapper = mount(
                <NumberPicker defaultValue={Number.MAX_SAFE_INTEGER} stringMode />
            );
            wrapper
                .find('input')
                .simulate('change', { target: { value: `0${Number.MAX_SAFE_INTEGER}123` } });
            assert(wrapper.find('input').prop('value') === `0${Number.MAX_SAFE_INTEGER}123`);
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === `${Number.MAX_SAFE_INTEGER}123`);
        });
    });

    describe('behavior', () => {
        it('simulates onChange/onClick/onFocus/onDisabled events', () => {
            const onChange = sinon.spy();
            const onFocus = sinon.spy();

            const wrapper = mount(<NumberPicker onChange={onChange} onFocus={onFocus} />);

            wrapper.find('button').at(0).simulate('click');
            assert(onChange.calledOnce);

            wrapper.find('input').simulate('change', { target: { value: '5' } });
            assert(onChange.calledTwice);

            wrapper.find('input').simulate('blur');
            wrapper.find('input').simulate('focus');
            assert(onFocus.calledOnce);
        });

        it('should support defaultValue and can be changed', done => {
            let onChange = value => {
                    assert(value === 20);
                    done();
                },
                wrapper = mount(<NumberPicker defaultValue={123} onChange={onChange} />);

            assert(wrapper.find('input').prop('value') === 123);

            wrapper.find('input').simulate('change', { target: { value: '20' } });
            assert(wrapper.find('input').prop('value') === '20');
        });

        it('should support value and can not be changed', done => {
            let onChange = value => {
                    assert(value === 20);
                },
                wrapper = mount(<NumberPicker value={123} onChange={onChange} />);

            assert(wrapper.find('input').prop('value') === 123);

            wrapper.find('input').simulate('change', { target: { value: '20' } });
            assert(wrapper.find('input').prop('value') === '20');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 123);

            done();
        });

        it('should only input -.1234567890', () => {
            let wrapper = mount(<NumberPicker />);
            wrapper.find('input').simulate('change', { target: { value: '-1.' } });
            assert(wrapper.find('input').prop('value') === '-1.');
            wrapper.find('input').simulate('change', { target: { value: '-1.a' } });
            assert(wrapper.find('input').prop('value') === '-1.');
            wrapper.find('input').simulate('change', { target: { value: '-1.13a2' } });
            assert(wrapper.find('input').prop('value') === '-1.132');
        });

        it('onChange value 1.9 -> 1. should input displayValue === 1. onchange value === 1', done => {
            const onChange = value => {
                assert(value === 1);
                done();
            };
            let wrapper = mount(<NumberPicker value={1.9} onChange={onChange} precision={1} />);
            wrapper.find('input').simulate('change', { target: { value: '1.' } });
            assert(wrapper.find('input').prop('value') === '1.');
            wrapper.setProps({ value: 1 });
            assert(wrapper.find('input').prop('value') === '1.');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 1);
        });

        it('should leave out digits larger than precision set', done => {
            let wrapper = mount(<NumberPicker defaultValue={0} precision={1} />);

            wrapper.find('input').simulate('change', { target: { value: '0.34' } });
            assert(wrapper.find('input').prop('value') === '0.34');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 0.3);

            wrapper = mount(<NumberPicker defaultValue={1} />);

            wrapper.find('input').simulate('change', { target: { value: '0.' } });
            assert(wrapper.find('input').prop('value') === '0.');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 0);

            wrapper.find('input').simulate('change', { target: { value: '0.24' } });
            assert(wrapper.find('input').prop('value') === '0.24');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 0);

            wrapper.find('input').simulate('change', { target: { value: '0.2.4' } });
            assert(wrapper.find('input').prop('value') === '0.2.4');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 0);

            done();
        });

        it('should ignore more than one . or -, cut at second . or -', done => {
            let wrapper = mount(<NumberPicker defaultValue={0} precision={2} />);

            wrapper.find('input').simulate('change', { target: { value: '0.3.4' } });
            assert(wrapper.find('input').prop('value') === '0.3.4');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 0);

            wrapper.find('input').simulate('change', { target: { value: '0.3' } });
            wrapper.find('input').simulate('change', { target: { value: '0.3.' } });
            assert(wrapper.find('input').prop('value') === '0.3.');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 0.3);

            wrapper.find('input').simulate('change', { target: { value: '-0.3' } });
            wrapper.find('input').simulate('change', { target: { value: '-0.3-' } });
            assert(wrapper.find('input').prop('value') === '-0.3-');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === -0.3);

            wrapper.find('input').simulate('change', { target: { value: '-1.34' } });
            wrapper.find('input').simulate('change', { target: { value: '-1.345-4' } });
            assert(wrapper.find('input').prop('value') === '-1.345-4');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === -1.34);

            const onChange = value => {
                assert(value === 0);
            };
            wrapper = mount(<NumberPicker defaultValue={0} precision={2} onChange={onChange} />);

            wrapper.find('input').simulate('change', { target: { value: '-0' } });
            wrapper.find('input').simulate('change', { target: { value: '-0.' } });
            wrapper.find('input').simulate('change', { target: { value: '-0.-' } });
            wrapper.find('input').simulate('change', { target: { value: '-0.-3' } });
            assert(wrapper.find('input').prop('value') === '-0.-3');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 0);
            assert(!onChange.calledOnce);

            done();
        });

        it('should work with value and onChange under control', done => {
            class App extends React.Component {
                state = {
                    value: 123,
                };
                onChange = value => {
                    this.setState({
                        value,
                    });
                };

                render() {
                    return <NumberPicker value={this.state.value} onChange={this.onChange} />;
                }
            }

            const wrapper = mount(<App />);

            assert(wrapper.find('input').prop('value') === 123);

            wrapper.find('input').simulate('change', { target: { value: '20' } });
            assert(wrapper.find('input').prop('value') === '20');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') === 20);

            done();
        });

        it('should not correct "" as 0 when blur', done => {
            const onChange = value => {
                assert(value === undefined);
                done();
            };
            const wrapper = mount(<NumberPicker defaultValue={0} onChange={onChange} />);

            wrapper.find('input').simulate('change', { target: { value: '' } });
            assert(wrapper.find('input').prop('value') === '');
            wrapper.find('input').simulate('blur');
        });

        it('should work with value and onChange and min under control', done => {
            class App extends React.Component {
                state = {};
                onChange = value => {
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

            const wrapper = mount(<App />);

            wrapper.find('input').simulate('change', { target: { value: '1' } });
            // 不合法输入不触发 onChange，故受控模式不合法输入无法获取
            assert(wrapper.find('input').prop('value') == '1');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') == 6);

            done();
        });

        it('should support input with -.x or .x or -0.0x', () => {
            let onChange = value => {
                assert(value === -0.2);
            };
            let wrapper = mount(
                <NumberPicker defaultValue={-0.3} onChange={onChange} precision={1} />
            );

            wrapper.find('input').simulate('change', { target: { value: '-.2' } });
            assert(wrapper.find('input').prop('value') == '-.2');
            wrapper.find('input').simulate('change', { target: { value: '-.' } });
            assert(wrapper.find('input').prop('value') == '-.');
            wrapper.simulate('blur');
            assert(wrapper.find('input').prop('value') == '-.');

            wrapper = mount(<NumberPicker defaultValue={-0.2} onChange={onChange} precision={1} />);

            wrapper.find('input').simulate('change', { target: { value: '-.2' } });
            assert(wrapper.find('input').prop('value') == '-.2');
            wrapper.find('input').simulate('blur');
            wrapper.find('input').simulate('focus');
            assert(wrapper.find('input').prop('value') == '-0.2');

            onChange = value => {
                assert(value === 0.3);
            };
            wrapper = mount(<NumberPicker defaultValue={0.2} onChange={onChange} precision={1} />);
            wrapper.find('input').simulate('change', { target: { value: '.3' } });
            assert(wrapper.find('input').prop('value') == '.3');
            wrapper.find('input').simulate('blur');
            wrapper.find('input').simulate('focus');
            assert(wrapper.find('input').prop('value') == '0.3');

            onChange = sinon.spy();

            wrapper = mount(<NumberPicker defaultValue={0.3} onChange={onChange} precision={1} />);

            wrapper.find('input').simulate('change', { target: { value: '.3' } });
            assert(onChange.notCalled);
            assert(wrapper.find('input').prop('value') == '.3');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') == '0.3');
            // 值实际无变化，不触发onChange
            assert(onChange.notCalled);

            wrapper = mount(<NumberPicker defaultValue={0.3} onChange={onChange} precision={1} />);

            wrapper.find('input').simulate('change', { target: { value: '-0.' } });
            assert(onChange.calledOnce);
            assert(wrapper.find('input').prop('value') == '-0.');
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') == '-0');
            assert(onChange.calledOnce);

            wrapper = mount(<NumberPicker defaultValue={0} precision={2} />);

            wrapper.find('input').simulate('change', { target: { value: '-0.0' } });
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') == '-0');
            wrapper.find('input').simulate('change', { target: { value: '-0.0' } });
            assert(wrapper.find('input').prop('value') == '-0.0');
            wrapper.find('input').simulate('change', { target: { value: '-0.01' } });
            wrapper.find('input').simulate('blur');
            assert(wrapper.find('input').prop('value') == '-0.01');
        });

        it('should support input with -0 ', () => {
            let onChange = value => {
                assert(value === -0);
            };
            let wrapper = mount(
                <NumberPicker defaultValue={-0.3} onChange={onChange} precision={1} />
            );

            wrapper.find('input').simulate('change', { target: { value: '-0' } });
            wrapper.find('input').simulate('blur');

            wrapper.find('input').simulate('change', { target: { value: '-0.' } });
            wrapper.find('input').simulate('blur');

            onChange = sinon.spy();

            wrapper = mount(<NumberPicker defaultValue={-0.3} onChange={onChange} precision={1} />);

            wrapper.find('input').simulate('change', { target: { value: '-0.' } });
            assert(onChange.calledOnce);
            assert(wrapper.find('input').prop('value') == '-0.');
            wrapper.find('input').simulate('blur');
            assert(onChange.calledOnce);
            assert(wrapper.find('input').prop('value') == '-0');

            onChange = sinon.spy();

            wrapper = mount(<NumberPicker defaultValue={-0.3} onChange={onChange} precision={1} />);

            wrapper.find('input').simulate('change', { target: { value: '-3' } });
            wrapper.find('input').simulate('change', { target: { value: '-0' } });
            assert(onChange.calledTwice);
            assert(wrapper.find('input').prop('value') == '-0');
        });

        // 特殊输入检测
        it('should support input with -/-0/-0./0./0.0 ', () => {
            const onChange = sinon.spy();
            const wrapper = mount(
                <NumberPicker defaultValue={0} onChange={onChange} precision={1} />
            );

            wrapper.find('input').simulate('change', { target: { value: ' ' } });
            // ''会触发onChange
            assert(onChange.calledOnce);

            wrapper.find('input').simulate('change', { target: { value: '  ' } });
            assert(!onChange.calledTwice);

            wrapper.find('input').simulate('change', { target: { value: '-' } });
            assert(!onChange.calledTwice);

            wrapper.find('input').simulate('change', { target: { value: '-0.' } });
            assert(onChange.calledTwice);

            // 以下 实际值无变化，不触发onChange
            wrapper.find('input').simulate('change', { target: { value: '-0.0' } });
            assert(onChange.calledTwice);

            wrapper.find('input').simulate('change', { target: { value: '0.' } });
            assert(onChange.calledTwice);

            wrapper.find('input').simulate('change', { target: { value: '0.0' } });
            assert(onChange.calledTwice);

            wrapper.find('input').simulate('blur');
            assert(onChange.calledTwice);
        });

        it('should accept disabled ', () => {
            const wrapper = mount(<NumberPicker defaultValue={0} disabled />);

            wrapper.find('button').at(0).simulate('click');
            assert(wrapper.find('input').prop('value') === 0);
        });

        it('should support click add && reduce', done => {
            let onChange = value => {
                    assert(value === 4);
                },
                wrapper = mount(<NumberPicker defaultValue={3} onChange={onChange} />);

            wrapper.find('button').at(0).simulate('click');
            wrapper.find('button').at(1).simulate('mousedown');

            let onChange2 = value => {
                    assert(value === 2);
                },
                wrapper2 = mount(<NumberPicker defaultValue={3} onChange={onChange2} />);

            wrapper2.find('button').at(1).simulate('click');

            done();
        });

        it('should support editable', done => {
            let onChange = value => {
                    assert(value === 20);
                },
                wrapper = mount(<NumberPicker defaultValue={123} editable onChange={onChange} />);

            wrapper.find('input').simulate('change', { target: { value: '20' } });

            let onChange2 = value => {
                    assert(value === 124);
                },
                wrapper2 = mount(
                    <NumberPicker defaultValue={123} editable={false} onChange={onChange2} />
                );

            wrapper2.find('button').at(0).simulate('click');

            done();
        });

        it('should support max & min', done => {
            let onChange = value => {
                    assert(value === 20);
                },
                onDisabled = sinon.spy(),
                wrapper = mount(
                    <NumberPicker
                        defaultValue={19}
                        max={20}
                        step={3}
                        onDisabled={onDisabled}
                        onChange={onChange}
                    />
                );

            wrapper.find('button').at(0).simulate('click');
            wrapper.find('button').at(0).simulate('click');

            assert(onDisabled.calledOnce);

            let onChange2 = value => {
                    assert(value === 18);
                },
                wrapper2 = mount(
                    <NumberPicker
                        defaultValue={19}
                        max={20}
                        min={18}
                        step={3}
                        onDisabled={onDisabled}
                        onChange={onChange2}
                    />
                );

            wrapper2.find('button').at(1).simulate('click');
            wrapper2.find('button').at(1).simulate('click');

            assert(onDisabled.calledTwice);
            assert(
                mount(<NumberPicker defaultValue={22} max={20} onChange={onChange} />).prop(
                    'max'
                ) === 20
            );
            assert(
                mount(<NumberPicker defaultValue={17} min={18} onChange={onChange} />).prop(
                    'min'
                ) === 18
            );

            let onChange3 = (value, e) => {
                    assert(value === 20);
                },
                wrapper3 = mount(<NumberPicker max={20} min={18} step={3} onChange={onChange3} />);
            // litter then min wont trigger onChange, so here can be passed
            wrapper3.find('input').simulate('change', { target: { value: '1' } });
            assert(wrapper3.find('input').prop('value') === '1');

            // tigger onChange and value will be set to  max
            wrapper3.find('input').simulate('change', { target: { value: '21' } });

            done();
        });

        it('should avoid input - when min >= 0', done => {
            let onChange = value => {
                    assert(value === 0);
                },
                wrapper = mount(<NumberPicker min={0} onChange={onChange} />);
            wrapper.find('input').simulate('change', { target: { value: '-' } });
            wrapper.find('input').simulate('change', { target: { value: '-2' } });
            wrapper = mount(<NumberPicker defaultValue={-2} min={0} onChange={onChange} />);
            wrapper.find('input').simulate('change', { target: { value: '-' } });
            wrapper.find('input').simulate('change', { target: { value: '-21' } });
            done();
        });
        it('should be equal min while next value < min by click +', done => {
            let onChange = value => {
                    assert(value === 30);
                    done();
                },
                wrapper = mount(
                    <NumberPicker defaultValue={5} min={30} step={3} onChange={onChange} />
                );

            wrapper.find('button').at(0).simulate('click');
        });

        it('should be equal max while next value > max by click -', done => {
            let onChange = value => {
                    assert(value === 30);
                    done();
                },
                wrapper = mount(
                    <NumberPicker defaultValue={205} max={30} step={3} onChange={onChange} />
                );

            wrapper.find('button').at(1).simulate('click');
        });

        it('should not input number large then max', () => {
            let wrapper = mount(<NumberPicker max={10} />);
            wrapper.find('input').simulate('change', { target: { value: '100' } });
            assert(wrapper.find('input').prop('value') === '10');
            wrapper.find('input').simulate('change', { target: { value: '5' } });
            assert(wrapper.find('input').prop('value') === '5');
        });

        it('should support precision', done => {
            const wrapper = mount(<NumberPicker defaultValue={0.121} step={0.01} precision={3} />);

            wrapper.find('button').at(0).simulate('click');
            wrapper.find('button').at(0).simulate('click');

            assert(wrapper.find('input').prop('value') === 0.141);

            done();
        });

        it('should consider [。] as [.]', done => {
            const onChange = value => {
                assert(value === 3.9);
                done();
            };

            const wrapper = mount(
                <NumberPicker defaultValue={1.2} step={0.01} precision={3} onChange={onChange} />
            );

            wrapper.find('input').simulate('change', { target: { value: '3。9' } });
            assert(wrapper.find('input').prop('value') === '3.9');
        });

        it('should support onCorrect', done => {
            const onCorrect = sinon.spy();
            const wrapper = mount(
                <NumberPicker defaultValue={1} min={1} max={3} onCorrect={onCorrect} />
            );
            wrapper.find('input').simulate('change', { target: { value: '21' } });
            wrapper.find('input').simulate('blur');
            assert(onCorrect.calledOnce);

            let onCorrect2 = obj => {
                    assert(obj.currentValue === 20);
                    assert(obj.oldValue === '21');
                },
                wrapper2 = mount(
                    <NumberPicker defaultValue={19} max={20} step={3} onCorrect={onCorrect2} />
                );
            wrapper2.find('input').simulate('change', { target: { value: '21' } });

            done();
        });

        it('should support onKeyDown & onFocus & onBlur', done => {
            let onChange = value => {
                    assert(value === 20);
                },
                wrapper = mount(<NumberPicker defaultValue={19} onChange={onChange} />);
            wrapper.find('input').simulate('keydown', { keyCode: 38 });

            const wrapper2 = mount(
                <NumberPicker
                    defaultValue={19}
                    onChange={value => {
                        assert(value === 18);
                    }}
                />
            );
            wrapper2.find('input').simulate('keydown', { keyCode: 40 });

            const wrapper3 = mount(
                <NumberPicker
                    defaultValue={19}
                    onChange={value => {
                        assert(value === 19);
                    }}
                />
            );
            wrapper3.find('input').simulate('change', { target: { value: '-' } });
            wrapper3.find('input').simulate('focus');
            wrapper3.find('input').simulate('blur');

            done();
        });

        it('should support Integer & Float ', done => {
            let onChange = value => {
                    assert(value === 3);
                },
                wrapper = mount(<NumberPicker defaultValue={19} onChange={onChange} />);
            wrapper.find('input').simulate('change', { target: { value: '3.3' } });

            let onChange2 = value => {
                    assert(value === 3.3);
                },
                wrapper2 = mount(
                    <NumberPicker defaultValue={19} onChange={onChange2} step={0.2} />
                );
            wrapper2.find('input').simulate('change', { target: { value: '3.3' } });

            let onChange3 = value => {
                    assert(value === 3);
                },
                wrapper3 = mount(
                    <NumberPicker defaultValue={19} onChange={onChange3} step={0.2} />
                );
            wrapper3.find('input').simulate('change', { target: { value: '3.' } });

            done();
        });

        it('should support e.triggerType ', done => {
            let upClicked = false,
                downClicked = false;
            const onChange1 = (value, e) => {
                assert(e.triggerType === 'up');
                upClicked = true;
                if (upClicked && downClicked) done();
            };

            const onChange2 = (value, e) => {
                assert(e.triggerType === 'down');
                downClicked = true;
                if (upClicked && downClicked) done();
            };

            const wrapper1 = mount(<NumberPicker onChange={onChange1} />);
            const wrapper2 = mount(<NumberPicker onChange={onChange2} />);
            wrapper1.find('button').at(0).simulate('click');
            wrapper2.find('button').at(1).simulate('click');
        });

        it('will render value in custom if `format` is settled', () => {
            const format = val => `${val} %`;
            const defaultValue = 1000;

            const wrapper = mount(<NumberPicker defaultValue={defaultValue} format={format} />);
            assert(wrapper.find('input').prop('value') === '1000 %');
        });
    });

    describe('react api', () => {
        it('calls componentWillReceiveProps', done => {
            const wrapper = mount(<NumberPicker defaultValue={19} />);

            wrapper.setProps({ defaultValue: 30 });
            assert(wrapper.find('input').prop('value') === 19);

            wrapper.setProps({ value: 30 });
            assert(wrapper.find('input').prop('value') === 30);

            wrapper.setProps({ value: undefined });
            assert(wrapper.find('input').prop('value') === '');

            wrapper.setProps({ value: null });
            assert(wrapper.find('input').prop('value') === '');

            done();
        });
    });
    describe('chrome bug hack', () => {
        it('0.28 + 0.01 should be 0.29 not 0.29000000000000004', done => {
            let onChange = value => {
                    assert(value === 0.29);
                    done();
                },
                wrapper = mount(
                    <NumberPicker
                        defaultValue={0.28}
                        onChange={onChange}
                        step={0.01}
                        precision={2}
                    />
                );

            wrapper.find('button').at(0).simulate('click');
        });
        it('0.29 - 0.01 should be 0.28 not 0.27999999999999997', done => {
            let onChange = value => {
                    assert(value === 0.28);
                    done();
                },
                wrapper = mount(
                    <NumberPicker
                        defaultValue={0.29}
                        onChange={onChange}
                        step={0.01}
                        precision={2}
                    />
                );

            wrapper.find('button').at(1).simulate('click');
        });
    });
});
