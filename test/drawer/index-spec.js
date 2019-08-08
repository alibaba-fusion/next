import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'power-assert';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { dom } from '../../src/util';
import Drawer from '../../src/drawer/index';
import '../../src/drawer/style.js';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */
/* global describe it beforeEach */
const { hasClass } = dom;

const render = element => {
    let inc;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(element, container, function() {
        inc = this;
    });
    return {
        setProps: props => {
            const clonedElement = React.cloneElement(element, props);
            ReactDOM.render(clonedElement, container);
        },
        unmount: () => {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
        },
        instance: () => {
            return inc;
        },
        find: selector => {
            return container.querySelectorAll(selector);
        },
    };
};

describe('Drawer', () => {
    let wrapper;
    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should support placement', () => {
        ['top', 'left', 'bottom', 'right'].forEach(dir => {
            wrapper && wrapper.unmount();

            wrapper = render(<Drawer visible placement={dir}/>);
            assert(
                hasClass(
                    document.querySelector('.next-drawer'),
                    `next-drawer-${dir}`
                )
            );
        });
    });

})

