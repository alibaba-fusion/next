import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import Radio from '../../src/radio/index';
import '../../src/radio/style.js';

/* eslint-disable */
Enzyme.configure({ adapter: new Adapter() });


const RadioGroup = Radio.Group;

describe('Radio.Group', () => {
    let list, numberList;
    beforeEach('mock data', () => {
        list = [
            {
                value: 'apple',
                label: '苹果',
                disabled: true
            }, {
                value: 'pear',
                label: '梨'
            }, {
                value: 'orange',
                label: '橙子'
            }
        ];
        numberList = [
            {
                value: 0,
                label: '0',
                disabled: true
            }, {
                value: 1,
                label: '1'
            }, {
                value: 2,
                label: '2'
            }
        ]
    });
    describe('[render] control', () => {
        const wrapper1 = shallow(<RadioGroup value={'apple'} dataSource={list} />);

        it('should contain `apple`', () => {
            assert(wrapper1.dive().state().value === 'apple');
        });

        it('should have three children with mock data', () => {
            const wrapper2 = mount(<RadioGroup dataSource={numberList} />);
            assert(wrapper2.find('.next-radio').length === 3);
            assert(wrapper2.find('.next-radio.disabled').length === 1);
        });
    });

    describe('[render] uncontrol', () => {
        it('should have three children with mock data', () => {
            const wrapper = mount(<RadioGroup defaultValue={'pear'} dataSource={list} />);
            wrapper.find('input').first().simulate('change', {
                target: {checked: true}
            });
            assert(wrapper.find('.next-radio-group').children().length === 3);
        });
    });

    describe('[render] nest', () => {
        const wrapper = shallow(<RadioGroup value="watermelon">
                    <Radio id="apple" value="apple" className="apple">苹果</Radio>
                    <Radio id="pear" value="pear">梨子</Radio>
                    <Radio id="watermelon" value="watermelon">西瓜</Radio>
                </RadioGroup>);

        it('should contain `pear` and `watermelon`', () => {
            assert(wrapper.dive().state().value === 'watermelon');
        });

        it('should have two children with nest <Radio />', () => {
            const wrapper = mount(
                <RadioGroup value="watermelon">
                    <Radio id="apple" value="apple" disabled>苹果</Radio>
                    <Radio id="pear" value="pear">梨子</Radio>
                    <Radio id="watermelon" value="watermelon">西瓜</Radio>
                </RadioGroup>
            );
            const target = wrapper.find('.next-radio-group');
            assert(target.children().length === 3);
            assert(target.find('.next-radio.disabled').length === 1);
        });
    });

    describe('[render] button shape', () => {
        describe('small button', () => {
            let wrapper;
            const container = document.createElement('div');
            container.style.visibility = 'hidden';
            document.body.appendChild(container);
            before((done) => {
                ReactDOM.render(
                    <RadioGroup shape="button" size="small" defaultValue={'apple'} dataSource={list} />,
                    container,
                    function init() {
                        done();
                    }
                );
            });
            it('should be 20px height', () => {
                assert(container.querySelector('.next-radio-wrapper').getBoundingClientRect().height === 20);
            });
        });

        describe('medium button', () => {
            let wrapper;
            const container = document.createElement('div');
            container.style.visibility = 'hidden';
            document.body.appendChild(container);
            before((done) => {
                ReactDOM.render(
                    <RadioGroup shape="button" size="medium" defaultValue={'apple'} dataSource={list} />,
                    container,
                    function init() {
                        done();
                    }
                );
            });
            it('should be 28px height', () => {
                assert(container.querySelector('.next-radio-wrapper').getBoundingClientRect().height === 28);
            });
        });

        describe('large button', () => {
            let wrapper;
            const container = document.createElement('div');
            container.style.visibility = 'hidden';
            document.body.appendChild(container);
            before((done) => {
                ReactDOM.render(
                    <RadioGroup shape="button" size="large" defaultValue={'apple'} dataSource={list} />,
                    container,
                    function init() {
                        done();
                    }
                );
            });
            it('should be 40px height', () => {
                assert(Math.abs(container.querySelector('.next-radio-wrapper').getBoundingClientRect().height - 40) < 0.0001);
            });
        });

        describe('default tagName', () => {
            let wrapper;
            const container = document.createElement('div');
            container.style.visibility = 'hidden';
            document.body.appendChild(container);
            before((done) => {
                ReactDOM.render(
                    <RadioGroup shape="button" size="large" defaultValue={'apple'} dataSource={list} />,
                    container,
                    function init() {
                        done();
                    }
                );
            });
            it('should be div', () => {
                assert(container.querySelector('div.next-radio-group'));
            });
        });

        describe('customer tagName', () => {
            let wrapper;
            const container = document.createElement('div');
            container.style.visibility = 'hidden';
            document.body.appendChild(container);
            before((done) => {
                ReactDOM.render(
                    <RadioGroup component="footer" shape="button" size="large" defaultValue={'apple'} dataSource={list} />,
                    container,
                    function init() {
                        done();
                    }
                );
            });
            it('should be footer', () => {
                assert(container.querySelector('footer.next-radio-group'));
            });
        });
    });

    describe('[events] simulate change', () => {
        it('should call `onChange`', () => {
            const onChange = sinon.spy();
            const wrapper1 = mount(<RadioGroup onChange={onChange} value={'pear'} dataSource={list} />);
            wrapper1.find('input').first().simulate('change');
            assert(onChange.calledOnce);
        });
    });
    describe('disabled && value === undefined', () => {
        it('should support disabled', () => {

            const wrapper = mount(<RadioGroup defaultValue={0} dataSource={numberList} />);
            wrapper.setProps({
                disabled: true
            });
            assert(wrapper.find('.next-radio-group.disabled').length === 1);

        });
        it('should support value === undefined', () => {

            const wrapper = shallow(<RadioGroup defaultValue={0} dataSource={numberList} />);
            assert(wrapper.dive().state().value === 0);
            wrapper.setProps({
                value: undefined
            });
            assert(wrapper.dive().state().value === undefined);

        });
    });
    describe('[behavior] controlled', () => {
        it('should support controlled `value`', () => {
            const wrapper = shallow(<RadioGroup value={'pear'} dataSource={list} />);
            assert(wrapper.dive().state().value === 'pear');

            wrapper.setProps({
                value: 'apple'
            });
            assert(wrapper.dive().state().value === 'apple');
        });

        it('should support controlled `disabled`', () => {
            const wrapper = mount(<RadioGroup disabled={false} value={'pear'} dataSource={list} />);
            assert(!wrapper.props().disabled);
            assert(wrapper.find('.next-radio.disabled').length === 1);

            wrapper.setProps({
                disabled: true
            });
            assert(wrapper.props().disabled);
            assert(wrapper.find('.next-radio-group.disabled').length === 1);
            wrapper.setProps({
                disabled: true,
                value: undefined
            });
            assert(wrapper.props().disabled);
            assert(wrapper.find('.next-radio-group.disabled').length === 1);
            assert(wrapper.find('.next-radio.disabled').length === list.length);
        });
        // for issue https://github.com/facebook/react/issues/8727
        it('change 3 times for react@15.6.1', () => {
            class NestApp extends React.Component {
                state = {
                    value: 'orange'
                }

                onChange = (value) => {
                    this.setState({
                        value
                    });
                }

                render() {
                    return (
                        <RadioGroup value={this.state.value} onChange={this.onChange}>
                            <Radio id="apple" value="apple">苹果</Radio>
                            <Radio id="watermelon" value="watermelon">西瓜</Radio>
                            <Radio id="orange" value="orange">橙子</Radio>
                        </RadioGroup>
                    );
                }
            }
            const wrapper = mount(<NestApp />);

            wrapper.find('input#apple').simulate('change');
            assert(wrapper.find('input#apple').prop('checked'));
            assert(wrapper.state().value === 'apple');

            wrapper.find('input#watermelon').simulate('change');
            assert(!wrapper.find('input#apple').prop('checked'));
            assert(wrapper.find('input#watermelon').prop('checked'));
            assert(wrapper.state().value === 'watermelon');

            wrapper.find('input#apple').simulate('change');
            assert(wrapper.find('input#apple').prop('checked'));
            assert(wrapper.state().value === 'apple');

        });
    });

    describe('value === 0', () => {
        it('should support value === 0', () => {

            const wrapper = shallow(<RadioGroup defaultValue={0} dataSource={numberList} />).dive();
            assert(wrapper.state().value === 0);
            wrapper.setProps({
                value: 1
            });
            assert(wrapper.state().value === 1);
        });
    });
    describe('string array ', () => {
        it('should support string array', () => {
            const wrapper = mount(<RadioGroup defaultValue={0} dataSource={['apple', 'orange', 'pear']}/>);
            assert(wrapper.find('.next-radio-group').children().length === 3);
        });
    });

    describe('Radio shape', () => {
        it('shape = button', () => {
            const wrapper = mount(<RadioGroup shape="button" dataSource={['apple', 'orange', 'pear']}/>);
            assert(wrapper.find('.next-radio-button').children().length === 3);
        });
    });

});
