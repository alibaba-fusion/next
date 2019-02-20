import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Overlay from '../../src/overlay/index';
import { test, afterEach as a11yAfterEach } from '../util/a11y/validate';
import '../../src/progress/style.js';

const { Popup } = Overlay;
Enzyme.configure({ adapter: new Adapter() });

const divId = 'a11y-root';
const delay = time => new Promise(resolve => setTimeout(resolve, time));

const render = element => {
    const container = document.createElement('div');
    container.className = 'container';
    container.id = divId;
    document.body.appendChild(container);
    const el = element(container);
    ReactDOM.render(el, container);
    return {
        unmount: () => {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
        },
        container
    };
};

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Overlay A11y', () => {
    let wrapper;

    beforeEach(() => {
        const nodeListArr = [].slice.call(document.querySelectorAll('.next-overlay-wrapper'));

        nodeListArr.forEach((node) => {
            node.parentNode.removeChild(node);
        });
    });

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        a11yAfterEach();
    });

    it('should not have any violations', async function() {
        wrapper = render((container) => <Overlay visible container={container}><div>Hello World</div></Overlay>);
        await delay(500);
        return test(wrapper.container);
    });

    it('should not have any violations for Popup', async function() {
        wrapper = render((container) => (<Popup container={container} visible trigger={<button>Open</button>} triggerType="click" canCloseByTrigger={false}>
            <span className="content">Hello World From Popup!</span>
        </Popup>));
        await delay(500);
        return test(wrapper.container);
    });
});
