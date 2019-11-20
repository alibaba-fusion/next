import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import assert from 'power-assert';
import Switch from '../../src/switch/index';

Enzyme.configure({ adapter: new Adapter() });

describe('Switch', () => {
    it('on', () => {
        const wrapper = mount(<Switch checked />);
        assert(wrapper.find('.next-switch-on').length === 1);
    });
    it('off', () => {
        const wrapper = mount(<Switch />);
        assert(wrapper.find('.next-switch-off').length === 1);
    });
    it('size', () => {
        const wrapper = mount(<Switch size="small" />);
        assert(wrapper.find('.next-switch-small').length === 1);
    });
    it('defaultChecked and disabled', () => {
        const wrapper = mount(<Switch defaultChecked disabled />);
        assert(wrapper.find('.next-switch-on').length === 1);
        wrapper.find('.next-switch').simulate('click');
        assert(wrapper.find('.next-switch-on').length === 1);
    });
    it('children setting and onChange', () => {
        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    checked: false,
                };
                this.onChange = this.onChange.bind(this);
            }

            render() {
                return (
                    <div>
                        <Switch
                            checkedChildren="开"
                            unCheckedChildren="关"
                            checked={this.state.checked}
                            onChange={this.onChange}
                        />
                    </div>
                );
            }

            onChange(checked) {
                this.setState({ checked });
            }
        }
        const wrapper = mount(<App />);
        assert(wrapper.find('.next-switch-children').text() === '关');
        wrapper.find('.next-switch').simulate('click');
        assert(wrapper.find('.next-switch-children').text() === '开');
        //非受控的onChange
        const onChange = sinon.spy();
        const wrapper1 = mount(
            <Switch
                checkedChildren="开"
                unCheckedChildren="关"
                onChange={onChange}
            />
        );
        assert(wrapper1.find('.next-switch-children').text() === '关');
        wrapper1.find('.next-switch').simulate('click');
        assert(wrapper1.find('.next-switch-children').text() === '开');
        assert(onChange.called);
    });
    it('onClick', () => {
        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    checked: false,
                };
                this.onChange = this.onChange.bind(this);
            }
            render() {
                return (
                    <div>
                        <Switch
                            checkedChildren="开"
                            unCheckedChildren="关"
                            checked={this.state.checked}
                            onChange={this.onChange}
                            onClick={this.props.clickCallback}
                        />
                    </div>
                );
            }

            onChange(checked) {
                this.setState({ checked });
            }
        }
        const onClick = sinon.spy();
        const wrapper = mount(<App clickCallback={onClick} />);
        wrapper.find('.next-switch').simulate('click');
        assert(onClick.called);
    });

    it('onKeydown', () => {
        const wrapper = mount(<Switch defaultChecked={false} />);
        wrapper.simulate('keydown', {
            keyCode: 13,
        });
        assert(wrapper.find('.next-switch-on').length === 1);
    });
    it('checked === undefined', () => {
        const wrapper = mount(<Switch checked />);
        wrapper.setProps({
            checked: undefined,
        });
        assert(wrapper.find('.next-switch-off').length === 1);
    });
    it('should render readonly switch', () => {
        const wrapper = mount(<Switch readOnly />);
        assert(wrapper.find('.next-switch-off').length === 1);
        wrapper.find('.next-switch').simulate('click');
        assert(wrapper.find('.next-switch-off').length === 1);
    });
    it('should renderPreview', () => {
        const wrapper = mount(
            <Switch
                id="render-preview"
                isPreview
                renderPreview={() => 'preview switch'}
            />
        );

        assert(wrapper.getDOMNode().innerText === 'preview switch');
    });
});
