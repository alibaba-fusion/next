import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Button from '../../src/button';
import Affix from '../../src/affix/index';

Enzyme.configure({ adapter: new Adapter() });

class AffixDemo extends React.Component {

    render() {
        return (<div className="affix-demo" ref={ref => {this.container = ref; }} style={{ height: 100, overflowY: 'scroll' }}>
            <div className="affix-wrapper" style={{ padding: 60, height: 300, background: '#eee' }}>
                <Affix container={() => this.container} ref={ref => { this.affix = ref; } }>
                    <Button>hello world</Button>
                </Affix>
            </div>
        </div>)
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
                    <Button type = "secondary"> Hello World </Button>
                </Affix>
            </div>);
            assert(wrapper.find('div.next-affix').length === 0);
        });

        it('shoud render with affixTop', () => {
            const style = { padding: '40px 0' };
            wrapper = mount(<div style={style}>
                <Affix offsetTop={0}>
                    <Button type = "secondary"> Hello World </Button>
                </Affix>
            </div>);
            assert(wrapper.find('.next-affix').length === 0);
        });

        it('shoud render with affixBottom', () => {
            const style = { padding: '40px 0' };
            wrapper = mount(<div style={style}>
                <Affix offsetBottom={0}>
                    <Button type = "secondary"> Hello World </Button>
                </Affix>
            </div>);
            assert(wrapper.find('.next-affix').length === 0);
        });

        it('should render with specified target', () => {
            wrapper = mount(<AffixDemo />, { attachTo: document.getElementById('react-app')});
            let affix = wrapper.find('div.next-affix');
            assert(affix.length === 0);

            const affixDemo = wrapper.find('div.affix-demo');

            affixDemo.simulate('scroll', {
                deltaY: 200,
            });

            affix = wrapper.find('div.next-affix');
            console.log(affix);
        });
    });
});
