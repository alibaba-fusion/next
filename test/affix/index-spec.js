import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import ReactTestUtils from 'react-dom/test-utils';
import Button from '../../src/button';
import Affix from '../../src/affix/index';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable react/jsx-filename-extension, react/no-multi-comp, react/prop-types, react/prefer-stateless-function */
/* global describe, it, beforeEach, afterEach */

class AffixDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            affixed: false,
            offsetTop: 0,
        };
    }

    changeOffset() {
        const { offsetTop } = this.state;
        this.setState({
            offsetTop: offsetTop + 10,
        });
    }


    render() {
        const { offsetTop } = this.state;
        return (<div className="affix-demo" ref={ref => {
            this.container = ref;
        }} style={{ height: 100, overflowY: 'scroll' }}>
            <div className="affix-wrapper" style={{ padding: 60, height: 300, background: '#eee' }}>
                <Affix id="affix" offsetTop={offsetTop} container={() => this.container} ref={
                    ref => {
                        this.affix = ref;
                    }
                }>
                    <Button
                        onClick={this.changeOffset.bind(this)}>hello world</Button>
                </Affix>
            </div>
        </div>);
    }
}

// TODO: 目前没有找到测试 scroll 事件的好办法
describe('Affix', () => {
    describe('render', () => {
        let wrapper, parent;

        beforeEach(() => {
            parent = document.createElement('div');
            parent.setAttribute('id', 'react-app');
            document.body.appendChild(parent);
        });

        afterEach(() => {
            parent = null;
            if (wrapper) {
                wrapper.unmount();
            }
        });

        it('should render', () => {
            const style = { padding: '40px 0' };
            wrapper = mount(<div style={style}>
                <Affix>
                    <Button type="secondary"> Hello World </Button>
                </Affix>
            </div>);
            assert(wrapper.find('div.next-affix').length === 0);
        });

        it('shoud render with affixTop', () => {
            const style = { padding: '40px 0' };
            wrapper = mount(<div style={style}>
                <Affix offsetTop={0}>
                    <Button type="secondary"> Hello World </Button>
                </Affix>
            </div>);
            assert(wrapper.find('.next-affix').length === 0);
        });

        it('shoud render with affixBottom', () => {
            const style = { padding: '40px 0' };
            wrapper = mount(<div style={style}>
                <Affix offsetBottom={0}>
                    <Button type="secondary"> Hello World </Button>
                </Affix>
            </div>);
            assert(wrapper.find('.next-affix').length === 0);
        });

        it('should render with specified target', () => {
            wrapper = mount(<AffixDemo />, { attachTo: document.getElementById('react-app')});
            const affix = wrapper.find('div.next-affix');
            assert(affix.length === 0);

            const affixDemo = wrapper.find('div.affix-demo');

            affixDemo.simulate('scroll', {
                deltaY: 200,
            });
        });

        it('should receive offset change', () => {
            wrapper = mount(<AffixDemo />, { attachTo: document.getElementById('react-app')});
            const affix = wrapper.find('div.next-affix');
            assert(affix.length === 0);
            const rect = document.querySelectorAll('.next-affix-top');
            ReactTestUtils.Simulate.click(rect[0].firstChild, {
                pageX: rect.left,
                pageY: rect.top
            });
            ReactTestUtils.Simulate.click(rect[0].firstChild, {
                pageX: rect.left,
                pageY: rect.top
            });
            ReactTestUtils.Simulate.click(rect[0].firstChild, {
                pageX: rect.left,
                pageY: rect.top
            });
            const affixDemo = wrapper.find('div.affix-demo');

            affixDemo.simulate('scroll', {
                deltaY: 200,
            });
        });
    });
});
