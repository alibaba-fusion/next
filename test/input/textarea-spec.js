import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import assert from 'power-assert';
import Input from '../../src/input/index';

Enzyme.configure({adapter: new Adapter()});


describe('TextArea', () => {
    describe('behavior', () => {
        // 判断事件是否执行
        it('should support onChange/onFocus/onBlur events', () => {
            const onChange = sinon.spy();
            const onFocus = sinon.spy();
            const onBlur = sinon.spy();
            const wrapper = mount(
                <Input.TextArea onChange={onChange} onFocus={onFocus} onBlur={onBlur}/>
            );
            wrapper.find('textarea').simulate('change', {target: {value: '20'}});
            assert(onChange.calledOnce);
            wrapper.find('textarea').simulate('focus');
            assert(onFocus.calledOnce);
            wrapper.find('textarea').simulate('blur');
            assert(onBlur.calledOnce);
        });

        it('should support defaultValue and can be changed', (done) => {
            let onChange = (value) => {
                assert(value === '20');
            }, wrapper = mount(<Input.TextArea defaultValue={'123'} onChange={onChange}/>);

            assert(wrapper.find('textarea').prop('value') === '123');

            wrapper.find('textarea').simulate('change', {target: {value: '20'}});
            assert(wrapper.find('textarea').prop('value') === '20');

            done();
        });

        it('should support value and can not be changed', (done) => {
            let onChange = (value) => {
                assert(value === '20');
            }, wrapper = mount(<Input.TextArea value={'123'} onChange={onChange}/>);

            assert(wrapper.find('textarea').prop('value') === '123');

            wrapper.find('textarea').simulate('change', {target: {value: '20'}});
            assert(wrapper.find('textarea').prop('value') === '123');

            done();
        });

        it('should work with value and onChange under control', (done) => {
            class App extends React.Component {
                state = {
                    value: '123'
                };
                onChange = (value) => {
                    this.setState({
                        value
                    })
                };

                render() {
                    return <Input.TextArea value={this.state.value} onChange={this.onChange}/>
                }
            }

            let wrapper = mount(<App/>);

            assert(wrapper.find('textarea').prop('value') === '123');

            wrapper.find('textarea').simulate('change', {target: {value: '20'}});
            assert(wrapper.find('textarea').prop('value') === '20');

            done();
        });

        it('should support dsiabled', (done) => {
            let wrapper = mount(<Input.TextArea disabled/>);

            assert(wrapper.find('textarea').prop('disabled'));
            done();
        });

        it('should support maxLength & hasLimitHint', (done) => {
            let wrapper = mount(<Input.TextArea defaultValue={"abcd"} maxLength={10} hasLimitHint/>);
            assert(!wrapper.find('.next-input-len').hasClass('next-error'));

            wrapper.find('textarea').simulate('change', {target: {value: '12345678901'}});
            assert(wrapper.find('.next-input-len').hasClass('next-error'));

            let wrapper2 = mount(<Input.TextArea maxLength={10} hasLimitHint/>);
            wrapper2.find('textarea').simulate('change', {target: {value: 'abc\nabc\n'}});

            //ie 浏览器下面认为\n是两个字符串所以展示各有不同，这里不做校验了
            // expect(wrapper2.find('.next-input-len').text()).to.be.equal('8/10');

            done();
        });

        it('should support state', () => {
            let wrapper = mount(<Input.TextArea state="error"/>);
            assert(wrapper.find('.next-input').hasClass('next-error'));
        });

        it('should support onFocus & onBlur', (done) => {
            let wrapper2 = mount(<Input.TextArea defaultValue={'123'} onFocus={(e) => {
                assert(e.target.value === '123');
            }}/>);
            wrapper2.find('textarea').simulate('focus');

            let wrapper3 = mount(<Input.TextArea defaultValue={'123'} onBlur={(e) => {
                assert(e.target.value === '123');
            }}/>);
            wrapper3.find('textarea').simulate('blur');

            done();
        });

        it('should support getInputNode', (done) => {
            class App extends React.Component {
                render() {
                    return (
                        <Input.TextArea ref='textarea' onFocus={(e) => {
                            assert(this.refs.textarea.getInstance().getInputNode() !== undefined)
                        }}/>
                    );
                }
            }
            let wrapper = mount(<App/>);

            wrapper.find('textarea').simulate('focus');

            done();
        });

        it('should support getValueLength', (done) => {
            let getValueLength = sinon.spy();
            mount(<Input.TextArea defaultValue="abcdef" maxLength={10} getValueLength={getValueLength}/>);
            assert(getValueLength.calledOnce);


            let getValueLength2 = (value) => {
                return 1;
            }, wrapper = mount(<Input.TextArea defaultValue="abcdef" maxLength={10} hasLimitHint
                                               getValueLength={getValueLength2}/>);
            assert(wrapper.find('.next-input-len').text() === '1/10');

            let wrapper2 = mount(<Input.TextArea defaultValue="abcdef" maxLength={10} hasLimitHint
                                                 getValueLength={getValueLength2}/>);
            assert(wrapper2.find('.next-input-len').text() === '1/10');

            done();
        });

        it('should support autoHeight', (done) => {
            let wrapper = mount(<Input.TextArea defaultValue="abcdef" autoHeight/>);
            // console.log(wrapper.find('textarea[data-real]').instance().clientHeight)
            // let originHeight = wrapper.find('textarea[data-real]').instance().clientHeight;
            wrapper.find('textarea[data-real]').simulate('change', {target: {value: '1\n2\n3\n4\n5\n'}});

            // assert(wrapper.find('textarea[data-real]').at(0).getElement().clientHeight > originHeight);

            let wrapper2 = mount(<Input.TextArea defaultValue="abcdef" autoHeight={{minRows:2, maxRows:4}}/>);
            // console.log(wrapper2.find('textarea[data-real]').instance().clientHeight)
            // let originHeight = wrapper2.find('textarea[data-real]').instance().clientHeight;
            wrapper2.find('textarea[data-real]').simulate('change', {target: {value: '1\n2\n3\n4\n5\n'}});
            wrapper2.find('textarea[data-real]').simulate('change', {target: {value: '1\n2\n3\n4'}});

            //

            done();
        });

        it('should support focus', (done) => {
            class App extends React.Component {
                render() {
                    return (
                        <Input.TextArea ref='textarea'/>
                    );
                }
            }
            let wrapper = mount(<App/>);
            wrapper.ref('textarea').getInstance().focus();
            wrapper.update();
            // assert(wrapper.find('.next-input').hasClass('next-focus'));

            done();
        });

    });
    describe('react api', () => {
        it('calls componentWillReceiveProps', (done) => {
            let wrapper = mount(<Input.TextArea autoHeight defaultValue={19}/>);
            wrapper.setProps({value: '30'});
            assert(wrapper.find('textarea[data-real]').prop('value') === '30');

            // value = undefined 时候清空数据
            wrapper.setProps({value: undefined});
            assert(wrapper.find('textarea[data-real]').prop('value') === '');

            done();
        });
    });
});
