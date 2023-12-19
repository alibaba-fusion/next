import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Balloon from '../index';

Enzyme.configure({ adapter: new Adapter() });

function wait(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}

describe('Balloon issues', function() {
    describe('https://github.com/alibaba-fusion/next/issues/4137', function() {
        it('autoAdjust when in the fixed box and followTrigger=true', async function() {
            const rootNode = document.createElement('div');
            document.body.appendChild(rootNode);
            const wrapper = mount(
                <div style={{ position: 'fixed', bottom: 0, left: 10 }}>
                    <Balloon
                        v2
                        triggerType="click"
                        title="Balloon Title"
                        trigger={<button className="trigger">trigger</button>}
                        align="t"
                        followTrigger
                        animation={false}
                    >
                        long overlay content,long overlay content,long overlay content,long overlay content,long overlay
                        content,long overlay content,long overlay content
                    </Balloon>
                </div>,
                { attachTo: rootNode }
            );
            const trigger = rootNode.querySelector('.trigger');
            assert(trigger);
            ReactTestUtils.Simulate.click(trigger);
            await wait(100);
            const overlay = rootNode.querySelector('.next-balloon');
            assert(overlay);
            const rect = overlay.getBoundingClientRect();
            // will adjust into viewport
            assert(rect.left >= 0);
            assert(rect.top + rect.height + trigger.offsetHeight < document.documentElement.clientHeight);
            wrapper.unmount();
            document.body.removeChild(rootNode);
        });
        it('autoAdjust when in the fixed box and followTrigger=false', async function() {
            const rootNode = document.createElement('div');
            document.body.appendChild(rootNode);
            const overlayClassName = `overlay-${Math.random()
                .toString(36)
                .slice(2)}`;
            const wrapper = mount(
                <div style={{ position: 'fixed', bottom: 0, left: 10 }}>
                    <Balloon
                        v2
                        triggerType="click"
                        title="Balloon Title"
                        trigger={<button className="trigger">trigger</button>}
                        align="t"
                        popupClassName={overlayClassName}
                        animation={false}
                    >
                        long overlay content,long overlay content,long overlay content,long overlay content,long overlay
                        content,long overlay content,long overlay content
                    </Balloon>
                </div>,
                { attachTo: rootNode }
            );
            const trigger = rootNode.querySelector('.trigger');
            assert(trigger);
            ReactTestUtils.Simulate.click(trigger);
            await wait(100);
            // adjust to tl, will render .next-balloon-bottom-left
            assert(document.querySelector(`.${overlayClassName}.next-balloon-bottom-left`));
            wrapper.unmount();
            document.body.removeChild(rootNode);
        });
    });
});
