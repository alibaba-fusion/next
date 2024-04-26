import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import assert from 'power-assert';
import Input from '../index';
import Icon from '../../icon/index';
import ConfigProvider from '../../config-provider';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */

describe('input', () => {
    describe('render', () => {
        let parent;

        beforeEach(() => {
            parent = document.createElement('div');
            document.body.appendChild(parent);
        });

        afterEach(() => {
            document.body.removeChild(parent);
            parent = null;
        });

        it('should isPreview', () => {
            ReactDOM.render(<Input id="ispreview-input" isPreview defaultValue="abc" />, parent);
            assert(document.querySelectorAll('#ispreview-input')[0].innerText === 'abc');
        });

        it('should renderPreview', () => {
            ReactDOM.render(
                <Input
                    id="renderpreview-input"
                    isPreview
                    defaultValue="abc"
                    renderPreview={() => 'ddd'}
                />,
                parent
            );

            assert(document.querySelectorAll('#renderpreview-input')[0].innerText === 'ddd');
        });
    });

    describe('render', () => {
        it('should accept defaultValue & value', () => {
            let wrapper = mount(<Input defaultValue="123" />),
                wrapper2 = mount(<Input value="123" />);
            assert(wrapper.props().defaultValue === '123');
            assert(wrapper2.props().value === '123');
        });
        it('should accept addonBefore & addonAfter', () => {
            const wrapper = mount(<Input addonBefore="test" addonAfter="test2" />);
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
            wrapper.find('input').simulate('change', { target: { value: '20' } });
            assert(onChange.calledOnce);
            wrapper.find('input').simulate('focus');
            assert(onFocus.calledOnce);
            wrapper.find('input').simulate('blur');
            assert(onBlur.calledOnce);
            wrapper.find('input').simulate('keydown', { keyCode: 13 });
            assert(onPressEnter.calledOnce);
        });

        it('simulates onCompositionStart/onCompositionUpdate/onCompositionEnd events', () => {
            const onCompositionStart = sinon.spy();
            const onCompositionUpdate = sinon.spy();
            const onCompositionEnd = sinon.spy();
            const onChange = sinon.spy();
            const wrapper = mount(
                <Input
                    composition
                    onCompositionStart={onCompositionStart}
                    onCompositionUpdate={onCompositionUpdate}
                    onCompositionEnd={onCompositionEnd}
                    onChange={onChange}
                />
            );
            wrapper.find('input').simulate('compositionstart', { target: { value: 'zh' } });
            assert(onCompositionStart.calledOnce);
            wrapper.find('input').simulate('compositionupdate', { target: { value: 'zhon' } });
            assert(onCompositionUpdate.calledOnce);
            wrapper.find('input').simulate('compositionend', { target: { value: '中' } });
            assert(onCompositionEnd.calledOnce);
            assert(onChange.calledOnce);
        });

        it('Navitve onCompositionStart/onCompositionUpdate/onCompositionEnd events', () => {
            const onCompositionStart = sinon.spy();
            const onCompositionUpdate = sinon.spy();
            const onCompositionEnd = sinon.spy();
            const wrapper = mount(
                <Input
                    onCompositionStart={onCompositionStart}
                    onCompositionUpdate={onCompositionUpdate}
                    onCompositionEnd={onCompositionEnd}
                />
            );
            wrapper.find('input').simulate('compositionstart', { target: { value: 'zh' } });
            assert(onCompositionStart.calledOnce);
            wrapper.find('input').simulate('compositionupdate', { target: { value: 'zhon' } });
            assert(onCompositionUpdate.calledOnce);
            wrapper.find('input').simulate('compositionend', { target: { value: '中' } });
            assert(onCompositionEnd.calledOnce);
        });

        it('should support onChange', done => {
            let onChange = value => {
                    assert(value === '20');
                },
                wrapper = mount(<Input defaultValue={123} onChange={onChange} />);

            wrapper.find('input').simulate('change', { target: { value: '20' } });
            assert(wrapper.find('input').prop('value') === '20');

            done();
        });

        it('should support trim', done => {
            let onChange = value => {
                    assert(value === '20');
                },
                wrapper = mount(<Input trim onChange={onChange} />);

            wrapper.find('input').simulate('change', { target: { value: ' 20 ' } });
            assert(wrapper.find('input').prop('value') === '20');

            done();
        });

        it('should support placeholder', done => {
            const wrapper = mount(<Input placeholder="holder" />);

            assert(wrapper.props().placeholder === 'holder');
            done();
        });

        it('should support dsiabled', done => {
            const wrapper = mount(<Input disabled />);

            assert(wrapper.find('input').prop('disabled'));
            done();
        });

        it('should support string hint', done => {
            const wrapper = mount(<Input hint="calendar" />);
            assert(wrapper.find('input .next-icon-calendar'));

            done();
        });

        it('should support node hint', done => {
            const wrapper = mount(<Input hint={<Icon type="smile" />} />);
            assert(wrapper.find('input .next-icon-smile'));

            done();
        });

        it('should support maxLength & hasLimitHint', done => {
            const wrapper = mount(<Input defaultValue={'abcd'} maxLength={10} hasLimitHint />);
            assert(!wrapper.find('.next-input-len').hasClass('next-error'));

            wrapper.find('input').simulate('change', { target: { value: '12345678901' } });
            assert(wrapper.find('.next-input-len').hasClass('next-error'));

            const wrapper2 = mount(<Input.TextArea maxLength={10} hasLimitHint />);
            wrapper2.find('textarea').simulate('change', { target: { value: 'abc\nabc\n' } });

            //ie 浏览器下面认为\n是两个字符串所以展示各有不同，这里不做校验了
            // expect(wrapper2.find('.next-input-len').text()).to.be.equal('8/10');

            done();
        });

        it('should support state', done => {
            const wrapper = mount(<Input state="error" />);
            assert(wrapper.find('.next-input').hasClass('next-error'));

            const wrapper2 = mount(<Input state="success" />);
            assert(wrapper2.find('i.next-input-success-icon').length === 1);

            const wrapper3 = mount(<Input state="loading" />);
            assert(wrapper3.find('i.next-input-loading-icon').length === 1);

            done();
        });

        it('should support onPressEnter & onFocus & onBlur', done => {
            let onPressEnter = e => {
                    assert(e.target.value === '123');
                },
                wrapper = mount(<Input defaultValue={'123'} onPressEnter={onPressEnter} />);
            wrapper.find('input').simulate('keydown', { keyCode: 13 });

            const wrapper2 = mount(
                <Input
                    defaultValue={'123'}
                    onFocus={e => {
                        assert(e.target.value === '123');
                    }}
                />
            );
            wrapper2.find('input').simulate('focus');

            const wrapper3 = mount(
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
                wrapper = mount(<Input defaultValue="abcdef" hasClear onChange={onChange} />);

            assert(wrapper.find('.next-icon').hasClass('next-input-clear-icon'));
            wrapper.find('.next-icon').simulate('click');
            assert(wrapper.find('input').prop('value') === '');

            done();
        });

        it('should support getValueLength', done => {
            const getValueLength = sinon.spy();
            mount(<Input defaultValue="abcdef" maxLength={10} getValueLength={getValueLength} />);
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

            const wrapper2 = mount(
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
                                assert(this.refs.input.getInstance().getInputNode() !== undefined);
                                done();
                            }}
                        />
                    );
                }
            }
            const wrapper = mount(<App />);

            wrapper.find('input').simulate('focus');
        });

        it('should support htmlType=number', done => {
            let onChange = value => {
                    assert(value === 20);
                    done();
                },
                wrapper = mount(
                    <Input defaultValue="abcdef" htmlType="number" onChange={onChange} />
                );

            wrapper.find('input').simulate('change', { target: { value: '20' } });
        });

        it('should support htmlType=number value="" ', done => {
            let onChange = value => {
                    assert(value === '');
                    done();
                },
                wrapper = mount(
                    <Input defaultValue="abcdef" htmlType="number" onChange={onChange} />
                );

            wrapper.find('input').simulate('change', { target: { value: '' } });
        });

        it('should support ConfigProvider defaultProps', () => {
            const config = {
                Input: {
                    disabled: true,
                },
            };
            const wrapper = mount(
                <ConfigProvider defaultPropsConfig={config}>
                    <Input />
                </ConfigProvider>
            );

            assert(wrapper.find('input').prop('disabled') === true);
        });
    });
    describe('react api', () => {
        it('calls componentWillReceiveProps', done => {
            const wrapper = mount(<Input defaultValue={19} />);
            wrapper.setProps({ value: '30' });
            assert(wrapper.find('input').prop('value') === '30');

            // value = undefined 时候清空数据
            wrapper.setProps({ value: undefined });
            assert(wrapper.find('input').prop('value') === '');
            done();
        });

        it('support null to reset', done => {
            const wrapper = mount(<Input defaultValue={19} />);

            // value = null 时候清空数据
            wrapper.setProps({ value: null });
            assert(wrapper.find('input').prop('value') === '');
            done();
        });
    });
});
