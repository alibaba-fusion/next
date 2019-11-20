import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import NumberPicker from '../../src/number-picker/index';

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
    });

    describe('behavior', () => {
        it('simulates onChange/onClick/onFocus/onDisabled events', () => {
            const onChange = sinon.spy();
            const onFocus = sinon.spy();

            const wrapper = mount(
                <NumberPicker onChange={onChange} onFocus={onFocus} />
            );

            wrapper
                .find('button')
                .at(0)
                .simulate('click');
            assert(onChange.calledOnce);

            wrapper
                .find('input')
                .simulate('change', { target: { value: '5' } });
            assert(onChange.calledTwice);

            wrapper.find('input').simulate('blur');
            wrapper.find('input').simulate('focus');
            assert(onFocus.calledOnce);
        });

        it('should support defaultValue and can be changed', done => {
            let onChange = value => {
                    assert(value === 20);
                },
                wrapper = mount(
                    <NumberPicker defaultValue={123} onChange={onChange} />
                );

            assert(wrapper.find('input').prop('value') === 123);

            wrapper
                .find('input')
                .simulate('change', { target: { value: '20' } });
            assert(wrapper.find('input').prop('value') === 20);

            done();
        });

        it('should support value and can not be changed', done => {
            let onChange = value => {
                    assert(value === 20);
                },
                wrapper = mount(
                    <NumberPicker value={123} onChange={onChange} />
                );

            assert(wrapper.find('input').prop('value') === 123);

            wrapper
                .find('input')
                .simulate('change', { target: { value: '20' } });
            assert(wrapper.find('input').prop('value') === 123);

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
                    return (
                        <NumberPicker
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                    );
                }
            }

            const wrapper = mount(<App />);

            assert(wrapper.find('input').prop('value') === 123);

            wrapper
                .find('input')
                .simulate('change', { target: { value: '20' } });
            assert(wrapper.find('input').prop('value') === 20);

            done();
        });

        it('should work with value and onChange and min under control', done => {
            class App extends React.Component {
                state = {
                };
                onChange = value => {
                    this.setState({
                        value,
                    });
                };

                render() {
                    return (
                        <NumberPicker
                            min={6}
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                    );
                }
            }

            const wrapper = mount(<App />);

            wrapper
                .find('input')
                .simulate('change', { target: { value: '1' } });
            assert(wrapper.find('input').prop('value') == '1');

            done();
        });

        // 特殊输入检测
        it('should support input with -/-0/-0./0./0.0 ', () => {
            const onChange = sinon.spy();
            const wrapper = mount(
                <NumberPicker defaultValue={0} onChange={onChange} />
            );

            wrapper
                .find('input')
                .simulate('change', { target: { value: ' ' } });
            assert(onChange.calledOnce);

            wrapper
                .find('input')
                .simulate('change', { target: { value: '  ' } });
            assert(!onChange.calledTwice);

            wrapper
                .find('input')
                .simulate('change', { target: { value: '-' } });
            assert(!onChange.calledTwice);

            wrapper
                .find('input')
                .simulate('change', { target: { value: '-0.' } });
            assert(!onChange.calledTwice);

            wrapper
                .find('input')
                .simulate('change', { target: { value: '-0.0' } });
            assert(!onChange.calledTwice);

            wrapper
                .find('input')
                .simulate('change', { target: { value: '0.' } });
            assert(!onChange.calledTwice);

            wrapper
                .find('input')
                .simulate('change', { target: { value: '0.0' } });
            assert(!onChange.calledTwice);

            wrapper.find('input').simulate('blur');
            assert(onChange.calledTwice);
        });

        it('should accept disabled ', () => {
            const wrapper = mount(<NumberPicker defaultValue={0} disabled />);

            wrapper
                .find('button')
                .at(0)
                .simulate('click');
            assert(wrapper.find('input').prop('value') === 0);
        });

        it('should support click add && reduce', done => {
            let onChange = value => {
                    assert(value === 4);
                },
                wrapper = mount(
                    <NumberPicker defaultValue={3} onChange={onChange} />
                );

            wrapper
                .find('button')
                .at(0)
                .simulate('click');
            wrapper
                .find('button')
                .at(1)
                .simulate('mousedown');

            let onChange2 = value => {
                    assert(value === 2);
                },
                wrapper2 = mount(
                    <NumberPicker defaultValue={3} onChange={onChange2} />
                );

            wrapper2
                .find('button')
                .at(1)
                .simulate('click');

            done();
        });

        it('should support editable', done => {
            let onChange = value => {
                    assert(value === 20);
                },
                wrapper = mount(
                    <NumberPicker
                        defaultValue={123}
                        editable
                        onChange={onChange}
                    />
                );

            wrapper
                .find('input')
                .simulate('change', { target: { value: '20' } });

            let onChange2 = value => {
                    assert(value === 124);
                },
                wrapper2 = mount(
                    <NumberPicker
                        defaultValue={123}
                        editable={false}
                        onChange={onChange2}
                    />
                );

            wrapper2
                .find('button')
                .at(0)
                .simulate('click');

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

            wrapper
                .find('button')
                .at(0)
                .simulate('click');
            wrapper
                .find('button')
                .at(0)
                .simulate('click');

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

            wrapper2
                .find('button')
                .at(1)
                .simulate('click');
            wrapper2
                .find('button')
                .at(1)
                .simulate('click');

            assert(onDisabled.calledTwice);
            assert(
                mount(
                    <NumberPicker
                        defaultValue={22}
                        max={20}
                        onChange={onChange}
                    />
                ).prop('max') === 20
            );
            assert(
                mount(
                    <NumberPicker
                        defaultValue={17}
                        min={18}
                        onChange={onChange}
                    />
                ).prop('min') === 18
            );

            let onChange3 = (value, e) => {
                    assert(value === 20);
                },
                wrapper3 = mount(
                    <NumberPicker
                        max={20}
                        min={18}
                        step={3}
                        onChange={onChange3}
                    />
                );
            // litter then min wont trigger onChange, so here can be passed
            wrapper3
                .find('input')
                .simulate('change', { target: { value: '1' } });
            assert(wrapper3.find('input').prop('value') === '1');

            // tigger onChange and value will be set to  max
            wrapper3
                .find('input')
                .simulate('change', { target: { value: '21' } });

            done();
        });

        it('should be equal min while next value < min by click +', done => {
            let onChange = value => {
                    assert(value === 30);
                    done();
                },
                wrapper = mount(
                    <NumberPicker
                        defaultValue={5}
                        min={30}
                        step={3}
                        onChange={onChange}
                    />
                );

            wrapper
                .find('button')
                .at(0)
                .simulate('click');
        });

        it('should be equal max while next value > max by click -', done => {
            let onChange = value => {
                    assert(value === 30);
                    done();
                },
                wrapper = mount(
                    <NumberPicker
                        defaultValue={205}
                        max={30}
                        step={3}
                        onChange={onChange}
                    />
                );

            wrapper
                .find('button')
                .at(1)
                .simulate('click');
        });

        it('should support precision', done => {
            const wrapper = mount(
                <NumberPicker defaultValue={0.121} step={0.01} precision={3} />
            );

            wrapper
                .find('button')
                .at(0)
                .simulate('click');
            wrapper
                .find('button')
                .at(0)
                .simulate('click');

            assert(wrapper.find('input').prop('value') === 0.141);

            done();
        });

        it('should consider [。] as [.]', done => {
            const wrapper = mount(
                <NumberPicker defaultValue={1.2} step={0.01} precision={3} />
            );

            wrapper
                .find('input')
                .simulate('change', { target: { value: '3。9' } });
            assert(wrapper.find('input').prop('value') === 3.9);

            done();
        });

        it('should support onCorrect', done => {
            const onCorrect = sinon.spy();
            const wrapper = mount(
                <NumberPicker
                    defaultValue={1}
                    min={1}
                    max={3}
                    onCorrect={onCorrect}
                />
            );
            wrapper
                .find('input')
                .simulate('change', { target: { value: '21' } });
            assert(onCorrect.calledOnce);

            let onCorrect2 = obj => {
                    assert(obj.currentValue === 20);
                    assert(obj.oldValue === '21');
                },
                wrapper2 = mount(
                    <NumberPicker
                        defaultValue={19}
                        max={20}
                        step={3}
                        onCorrect={onCorrect2}
                    />
                );
            wrapper2
                .find('input')
                .simulate('change', { target: { value: '21' } });

            done();
        });

        it('should support onKeyDown & onFocus & onBlur', done => {
            let onChange = value => {
                    assert(value === 20);
                },
                wrapper = mount(
                    <NumberPicker defaultValue={19} onChange={onChange} />
                );
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
            wrapper3
                .find('input')
                .simulate('change', { target: { value: '-' } });
            wrapper3.find('input').simulate('focus');
            wrapper3.find('input').simulate('blur');

            done();
        });

        it('should support Integer & Float ', done => {
            let onChange = value => {
                    assert(value === 3);
                },
                wrapper = mount(
                    <NumberPicker defaultValue={19} onChange={onChange} />
                );
            wrapper
                .find('input')
                .simulate('change', { target: { value: '3.3' } });

            let onChange2 = value => {
                    assert(value === 3.3);
                },
                wrapper2 = mount(
                    <NumberPicker
                        defaultValue={19}
                        onChange={onChange2}
                        step={0.2}
                    />
                );
            wrapper2
                .find('input')
                .simulate('change', { target: { value: '3.3' } });

            let onChange3 = value => {
                    assert(value === 3);
                },
                wrapper3 = mount(
                    <NumberPicker
                        defaultValue={19}
                        onChange={onChange3}
                        step={0.2}
                    />
                );
            wrapper3
                .find('input')
                .simulate('change', { target: { value: '3.' } });

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
            wrapper1
                .find('button')
                .at(0)
                .simulate('click');
            wrapper2
                .find('button')
                .at(1)
                .simulate('click');
        });

        it('will render value in custom if `format` is settled', () => {
            const format = val => `${val} %`;
            const defaultValue = 1000;

            const wrapper = mount(
                <NumberPicker defaultValue={defaultValue} format={format} />
            );
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

            wrapper
                .find('button')
                .at(0)
                .simulate('click');
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

            wrapper
                .find('button')
                .at(1)
                .simulate('click');
        });
    });
});
