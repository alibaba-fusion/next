import React, { useState } from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import assert from 'power-assert';
import Input from '../index';

Enzyme.configure({ adapter: new Adapter() });
function delay(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}
/* eslint-disable no-undef, react/jsx-filename-extension */
describe('TextArea', () => {
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

        it('should textarea isPreview', () => {
            ReactDOM.render(
                <Input.TextArea id="ispreview-input" isPreview defaultValue="abc" />,
                parent
            );
            assert(document.querySelectorAll('#ispreview-input')[0].innerText === 'abc');
        });

        it('should textarea isPreview compatible value null', () => {
            ReactDOM.render(
                <Input.TextArea id="ispreview-input-null" isPreview value={null} />,
                parent
            );
            assert(document.querySelectorAll('#ispreview-input-null')[0].innerText === '');
        });

        it('should textarea renderPreview', () => {
            ReactDOM.render(
                <Input.TextArea
                    id="renderpreview-input"
                    isPreview
                    defaultValue="abc"
                    renderPreview={() => 'ddd'}
                />,
                parent
            );

            assert(document.querySelectorAll('#renderpreview-input')[0].innerText === 'ddd');
        });
        it('should support hasClear ,close #4334', async () => {
            const ref = { current: null };
            function Demo() {
                const [value, setValue] = useState('aaa');
                ref.current = { value };
                return (
                    <Input.TextArea
                        value={value}
                        placeholder="TextArea"
                        aria-label="TextArea"
                        hasClear
                        onChange={v => setValue(v)}
                    />
                );
            }
            mount(<Demo />, { attachTo: parent });
            await delay(100);
            const btn = parent.querySelector('.next-input-clear');
            ReactTestUtils.Simulate.click(btn);
            assert(ref.current.value === '');
        });
    });

    describe('behavior', () => {
        // 判断事件是否执行
        it('should support onChange/onFocus/onBlur events', () => {
            const onChange = sinon.spy();
            const onFocus = sinon.spy();
            const onBlur = sinon.spy();
            const wrapper = mount(
                <Input.TextArea onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
            );
            wrapper.find('textarea').simulate('change', { target: { value: '20' } });
            assert(onChange.calledOnce);
            wrapper.find('textarea').simulate('focus');
            assert(onFocus.calledOnce);
            wrapper.find('textarea').simulate('blur');
            assert(onBlur.calledOnce);
        });

        it('should support defaultValue and can be changed', done => {
            let onChange = value => {
                    assert(value === '20');
                },
                wrapper = mount(<Input.TextArea defaultValue={'123'} onChange={onChange} />);

            assert(wrapper.find('textarea').prop('value') === '123');

            wrapper.find('textarea').simulate('change', { target: { value: '20' } });
            assert(wrapper.find('textarea').prop('value') === '20');

            wrapper.setProps({ value: 'helloworld' });
            assert(wrapper.find('textarea').prop('value') === 'helloworld');

            done();
        });

        it('should support value and can not be changed', done => {
            let onChange = value => {
                    assert(value === '20');
                },
                wrapper = mount(<Input.TextArea value={'123'} onChange={onChange} />);

            assert(wrapper.find('textarea').prop('value') === '123');

            wrapper.find('textarea').simulate('change', { target: { value: '20' } });
            assert(wrapper.find('textarea').prop('value') === '123');

            wrapper.setProps({ value: 'helloworld' });
            assert(wrapper.find('textarea').prop('value') === 'helloworld');

            done();
        });

        it('should work with value and onChange under control', done => {
            class App extends React.Component {
                state = {
                    value: '123',
                };
                onChange = value => {
                    this.setState({
                        value,
                    });
                };

                render() {
                    return <Input.TextArea value={this.state.value} onChange={this.onChange} />;
                }
            }

            const wrapper = mount(<App />);

            assert(wrapper.find('textarea').prop('value') === '123');

            wrapper.find('textarea').simulate('change', { target: { value: '20' } });
            assert(wrapper.find('textarea').prop('value') === '20');

            done();
        });

        it('should support dsiabled', done => {
            const wrapper = mount(<Input.TextArea disabled />);

            assert(wrapper.find('textarea').prop('disabled'));
            done();
        });

        it('should support maxLength & hasLimitHint', done => {
            const wrapper = mount(
                <Input.TextArea defaultValue={'abcd'} maxLength={10} hasLimitHint />
            );
            assert(!wrapper.find('.next-input-len').hasClass('next-error'));

            wrapper.find('textarea').simulate('change', { target: { value: '12345678901' } });
            assert(wrapper.find('.next-input-len').hasClass('next-error'));

            const wrapper2 = mount(<Input.TextArea maxLength={10} hasLimitHint />);
            wrapper2.find('textarea').simulate('change', { target: { value: 'abc\nabc\n' } });

            //ie 浏览器下面认为\n是两个字符串所以展示各有不同，这里不做校验了
            // expect(wrapper2.find('.next-input-len').text()).to.be.equal('8/10');

            done();
        });

        it('should support state', () => {
            const wrapper = mount(<Input.TextArea state="error" />);
            assert(wrapper.find('.next-input').hasClass('next-error'));
        });

        it('should support onFocus & onBlur', done => {
            const wrapper2 = mount(
                <Input.TextArea
                    defaultValue={'123'}
                    onFocus={e => {
                        assert(e.target.value === '123');
                    }}
                />
            );
            wrapper2.find('textarea').simulate('focus');

            const wrapper3 = mount(
                <Input.TextArea
                    defaultValue={'123'}
                    onBlur={e => {
                        assert(e.target.value === '123');
                    }}
                />
            );
            wrapper3.find('textarea').simulate('blur');

            done();
        });

        it('should support getInputNode', done => {
            class App extends React.Component {
                render() {
                    return (
                        <Input.TextArea
                            ref="textarea"
                            onFocus={e => {
                                assert(
                                    this.refs.textarea.getInstance().getInputNode() !== undefined
                                );
                            }}
                        />
                    );
                }
            }
            const wrapper = mount(<App />);

            wrapper.find('textarea').simulate('focus');

            done();
        });

        it('should support getValueLength', done => {
            const getValueLength = sinon.spy();
            mount(
                <Input.TextArea
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
                    <Input.TextArea
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

        it('should support autoHeight', done => {
            const wrapper = mount(<Input.TextArea defaultValue="abcdef" autoHeight />);
            // console.log(wrapper.find('textarea[data-real]').instance().clientHeight)
            // let originHeight = wrapper.find('textarea[data-real]').instance().clientHeight;
            wrapper
                .find('textarea[data-real]')
                .simulate('change', { target: { value: '1\n2\n3\n4\n5\n' } });

            // assert(wrapper.find('textarea[data-real]').at(0).getElement().clientHeight > originHeight);

            const wrapper2 = mount(
                <Input.TextArea defaultValue="abcdef" autoHeight={{ minRows: 2, maxRows: 4 }} />
            );
            // console.log(wrapper2.find('textarea[data-real]').instance().clientHeight)
            // let originHeight = wrapper2.find('textarea[data-real]').instance().clientHeight;
            wrapper2
                .find('textarea[data-real]')
                .simulate('change', { target: { value: '1\n2\n3\n4\n5\n' } });
            wrapper2
                .find('textarea[data-real]')
                .simulate('change', { target: { value: '1\n2\n3\n4' } });

            //

            done();
        });

        it('should support focus', done => {
            class App extends React.Component {
                render() {
                    return <Input.TextArea ref="textarea" />;
                }
            }
            const wrapper = mount(<App />);
            wrapper.ref('textarea').getInstance().focus();
            wrapper.update();
            // assert(wrapper.find('.next-input').hasClass('next-focus'));

            done();
        });
    });
    describe('react api', () => {
        it('calls componentWillReceiveProps', done => {
            const wrapper = mount(<Input.TextArea autoHeight defaultValue={19} />);
            wrapper.setProps({ value: '30' });
            assert(wrapper.find('textarea[data-real]').prop('value') === '30');

            // value = undefined 时候清空数据
            wrapper.setProps({ value: undefined });
            assert(wrapper.find('textarea[data-real]').prop('value') === '');

            done();
        });

        it('support null to reset', done => {
            const wrapper = mount(<Input.TextArea defaultValue={19} />);

            // value = null 时候清空数据
            wrapper.setProps({ value: null });
            assert(wrapper.find('textarea[data-real]').prop('value') === '');
            done();
        });
    });
});
