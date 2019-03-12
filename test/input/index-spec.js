import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import assert from 'power-assert';
import Input from '../../src/input/index';

Enzyme.configure({ adapter: new Adapter() });

describe('input', () => {
    describe('render', () => {
        it('should accept defaultValue & value', () => {
            let wrapper = mount(<Input defaultValue="123" />),
                wrapper2 = mount(<Input value="123" />);
            assert(wrapper.props().defaultValue === '123');
            assert(wrapper2.props().value === '123');
        });
        it('should accept addonBefore & addonAfter', () => {
            let wrapper = mount(
                <Input addonBefore="test" addonAfter="test2" />
            );
            assert(wrapper.find('span.next-input-group-addon').length === 2);
            assert(wrapper.props().addonAfter === 'test2');
        });
    });

    describe('behavior', () => {
        // 判断事件是否执行
        it('simulates onChange/onFocus/onBlur/onPressEnter events', () => {
            const onChange = sinon.spy();
            const onFocus = sinon.spy();
            const onBlur = sinon.spy();
            const onPressEnter = sinon.spy();
            const wrapper = mount(
                <Input
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onPressEnter={onPressEnter}
                />
            );
            wrapper
                .find('input')
                .simulate('change', { target: { value: '20' } });
            assert(onChange.calledOnce);
            wrapper.find('input').simulate('focus');
            assert(onFocus.calledOnce);
            wrapper.find('input').simulate('blur');
            assert(onBlur.calledOnce);
            wrapper.find('input').simulate('keydown', { keyCode: 13 });
            assert(onPressEnter.calledOnce);
        });
        it('should support onChange', done => {
            let onChange = value => {
                    assert(value === '20');
                },
                wrapper = mount(
                    <Input defaultValue={123} onChange={onChange} />
                );

            wrapper
                .find('input')
                .simulate('change', { target: { value: '20' } });
            assert(wrapper.find('input').prop('value') === '20');

            done();
        });

        it('should support trim', done => {
            let onChange = value => {
                    assert(value === '20');
                },
                wrapper = mount(<Input trim onChange={onChange} />);

            wrapper
                .find('input')
                .simulate('change', { target: { value: ' 20 ' } });
            assert(wrapper.find('input').prop('value') === '20');

            done();
        });

        it('should support placeholder', done => {
            let wrapper = mount(<Input placeholder="holder" />);

            assert(wrapper.props().placeholder === 'holder');
            done();
        });

        it('should support dsiabled', done => {
            let wrapper = mount(<Input disabled />);

            assert(wrapper.find('input').prop('disabled'));
            done();
        });

        it('should support maxLength & hasLimitHint', done => {
            let wrapper = mount(
                <Input defaultValue={'abcd'} maxLength={10} hasLimitHint />
            );
            assert(!wrapper.find('.next-input-len').hasClass('next-error'));

            wrapper
                .find('input')
                .simulate('change', { target: { value: '12345678901' } });
            assert(wrapper.find('.next-input-len').hasClass('next-error'));

            let wrapper2 = mount(
                <Input.TextArea maxLength={10} hasLimitHint />
            );
            wrapper2
                .find('textarea')
                .simulate('change', { target: { value: 'abc\nabc\n' } });

            //ie 浏览器下面认为\n是两个字符串所以展示各有不同，这里不做校验了
            // expect(wrapper2.find('.next-input-len').text()).to.be.equal('8/10');

            done();
        });

        it('should support state', done => {
            let wrapper = mount(<Input state="error" />);
            assert(wrapper.find('.next-input').hasClass('next-error'));

            let wrapper2 = mount(<Input state="success" />);
            assert(wrapper2.find('.next-icon-success-filling').length === 1);

            let wrapper3 = mount(<Input state="loading" />);
            assert(wrapper3.find('.next-icon-loading').length === 1);

            done();
        });

        it('should support onPressEnter & onFocus & onBlur', done => {
            let onPressEnter = e => {
                    assert(e.target.value === '123');
                },
                wrapper = mount(
                    <Input defaultValue={'123'} onPressEnter={onPressEnter} />
                );
            wrapper.find('input').simulate('keydown', { keyCode: 13 });

            let wrapper2 = mount(
                <Input
                    defaultValue={'123'}
                    onFocus={e => {
                        assert(e.target.value === '123');
                    }}
                />
            );
            wrapper2.find('input').simulate('focus');

            let wrapper3 = mount(
                <Input
                    defaultValue={'123'}
                    onBlur={e => {
                        assert(e.target.value === '123');
                    }}
                />
            );
            wrapper3.find('input').simulate('blur');

            done();
        });

        it('should support hasClear', done => {
            let onChange = value => {
                    assert(value === '');
                },
                wrapper = mount(
                    <Input defaultValue="abcdef" hasClear onChange={onChange} />
                );

            assert(
                wrapper.find('.next-icon').hasClass('next-icon-delete-filling')
            );
            wrapper.find('.next-icon').simulate('click');
            assert(wrapper.find('input').prop('value') === '');

            // hasClear with disabled
            let wrapper2 = mount(
                <Input defaultValue="abcdef" hasClear disabled />
            );
            wrapper2.find('.next-icon').simulate('click');
            assert(wrapper2.find('input').prop('value') === 'abcdef');

            done();
        });

        it('should support getValueLength', done => {
            let getValueLength = sinon.spy();
            mount(
                <Input
                    defaultValue="abcdef"
                    maxLength={10}
                    getValueLength={getValueLength}
                />
            );
            assert(getValueLength.calledOnce);

            let getValueLength2 = value => {
                    return 1;
                },
                wrapper = mount(
                    <Input
                        defaultValue="abcdef"
                        maxLength={10}
                        hasLimitHint
                        getValueLength={getValueLength2}
                    />
                );
            assert(wrapper.find('.next-input-len').text() === '1/10');

            let wrapper2 = mount(
                <Input.TextArea
                    defaultValue="abcdef"
                    maxLength={10}
                    hasLimitHint
                    getValueLength={getValueLength2}
                />
            );
            assert(wrapper2.find('.next-input-len').text() === '1/10');

            done();
        });

        it('should support getInputNode', done => {
            class App extends React.Component {
                render() {
                    return (
                        <Input
                            ref="input"
                            onFocus={e => {
                                assert(
                                    this.refs.input
                                        .getInstance()
                                        .getInputNode() !== undefined
                                );
                                done();
                            }}
                        />
                    );
                }
            }
            let wrapper = mount(<App />);

            wrapper.find('input').simulate('focus');
        });

        it('should support htmlType=number', done => {
            let onChange = value => {
                    assert(value === 20);
                    done();
                },
                wrapper = mount(
                    <Input
                        defaultValue="abcdef"
                        htmlType="number"
                        onChange={onChange}
                    />
                );

            wrapper
                .find('input')
                .simulate('change', { target: { value: '20' } });
        });

        it('should support htmlType=number value="" ', done => {
            let onChange = value => {
                    assert(value === '');
                    done();
                },
                wrapper = mount(
                    <Input
                        defaultValue="abcdef"
                        htmlType="number"
                        onChange={onChange}
                    />
                );

            wrapper.find('input').simulate('change', { target: { value: '' } });
        });
    });
    describe('react api', () => {
        it('calls componentWillReceiveProps', done => {
            let wrapper = mount(<Input defaultValue={19} />);
            wrapper.setProps({ value: '30' });
            assert(wrapper.find('input').prop('value') === '30');

            // value = undefined 时候清空数据
            wrapper.setProps({ value: undefined });
            assert(wrapper.find('input').prop('value') === '');
            done();
        });
    });
});
