import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Button from '../../src/button';
import Balloon from '../../src/balloon/index';

/* eslint-disable react/no-multi-comp */

// import Button from '../../src/button';

Enzyme.configure({ adapter: new Adapter() });
const Tooltip = Balloon.Tooltip;
const trigger = (
    <span className="trigger" onMouseEnter={() => {}}>
        xiachi
    </span>
);
describe('Tooltip', () => {
    let defaultWrapper = {};

    beforeEach(function() {
        defaultWrapper = mount(
            <Tooltip trigger={trigger} triggetType="hover">
                i am tooltip content
            </Tooltip>
        );
    });
    afterEach(function() {
        defaultWrapper.unmount();
        const nodeListArr = [].slice.call(
            document.querySelectorAll('.next-balloon-tooltip')
        );
        nodeListArr.forEach((node, index) => {
            node.parentNode.removeChild(node);
        });
    });
    // trigger不传,默认用空的<span></span>填充
    it('trigger default is span', () => {
        const wrapper = mount(<Tooltip>test</Tooltip>);
        // console.log(wrapper.debug());
        assert(wrapper.find('span').length === 1);
    });

    // it('tooltip should trigger on hover', (done) => {
    //     defaultWrapper.find('.trigger').simulate('mouseenter');
    //     // setTimeout(function() {
    //     assert(document.querySelector('.next-balloon-tooltip') !== null);
    //         // done();
    //     // }, 500);
    // });
    it('tooltip should have the trigger element', () => {
        assert(defaultWrapper.find('.trigger').text() === 'xiachi');
    });

    it('text not string should throw an error', () => {
        try {
            defaultWrapper.setProps({
                text: 2,
            });
        } catch (e) {
            assert(e instanceof Error);
        }
    });

    it('trigger is disabled button, hover enter and leave, popup should resolve', done => {
        defaultWrapper.setProps({
            trigger: (
                <Button
                    disabled
                    id="balloon-btn"
                    style={{ color: 'red', display: 'inline' }}
                >
                    button
                </Button>
            ),
        });
        // hover on the <span> which is specially added for disabled pattern
        defaultWrapper.find('span').simulate('mouseenter');
        setTimeout(function() {
            assert(document.querySelector('.next-balloon-tooltip') !== null);

            defaultWrapper.find('span').simulate('mouseleave');

            setTimeout(function() {
                assert(
                    document.querySelector('.next-balloon-tooltip') === null
                );
                done();
            }, 600);
        }, 300);
    });

    it('trigger can be string', done => {
        defaultWrapper.setProps({
            trigger: 'trigger',
        });
        defaultWrapper.find('span').simulate('mouseenter');
        setTimeout(function() {
            assert(document.querySelector('.next-balloon-tooltip') !== null);
            done();
        }, 300);
    });
});
