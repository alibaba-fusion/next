import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Divider from '../index';
import '../style';

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

describe('Divider', () => {
    let wrapper;

    beforeEach(() => {
        const overlay = document.querySelectorAll('.next-overlay-wrapper');
        overlay.forEach(dom => {
            document.body.removeChild(dom);
        });
    });

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should render', () => {
        wrapper = render(<Divider />);
        assert(document.querySelector('.next-divider'));
    });

    it('should render dashed', () => {
        wrapper = render(<Divider dashed />);
        assert(document.querySelector('.next-divider-dashed'));
    });

    it('should render text right', () => {
        wrapper = render(<Divider orientation="right">Right Text</Divider>);

        assert(document.querySelector('.next-divider-with-text-right'));
        assert(document.querySelector('.next-divider-inner-text').innerHTML === 'Right Text');
    });
});
