import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Message from '../index';
import '../style';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */
Enzyme.configure({ adapter: new Adapter() });
const render = element => {
    let inc;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(element, container, function () {
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

describe('Message issues', () => {
    let wrapper;

    afterEach(() => {
        wrapper && wrapper.unmount();
    });

    // Fix: https://github.com/alibaba-fusion/next/issues/3910
    // rest message symbol icon 'vertical-align: top'
    it('should align icon & content', () => {
        wrapper = render(
            <Message defaultVisible animation={false}>
                content
            </Message>
        );
        assert(wrapper.find('.next-message').length === 1);
        const icon = wrapper.find('.next-message-symbol-icon')[0];
        const content = wrapper.find('.next-message-content')[0];
        assert(icon);
        assert(content);
        const iconPos = icon.getBoundingClientRect();
        const contentPos = content.getBoundingClientRect();
        assert(iconPos.height);
        assert(iconPos.height === contentPos.height);
        assert(iconPos.y === contentPos.y);
    });
});
