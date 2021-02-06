import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import ResponsiveGrid from '../../src/responsive-grid';
import '../../src/responsive-grid/style.js';

Enzyme.configure({ adapter: new Adapter() });
const { Cell } = ResponsiveGrid;

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

const App = (props) => {
    return (<ResponsiveGrid {...props}>
        <Cell className="mygrid grid-12" colSpan={12} key="0">12</Cell>
        <Cell className="mygrid grid-6" colSpan={6} key="1">6</Cell>
        <Cell className="mygrid grid-6" colSpan={6} key="2">6</Cell>
        <Cell className="mygrid grid-3" colSpan={3} key="3">3</Cell>
        <Cell className="mygrid grid-3" colSpan={3} key="4">3</Cell>
        <Cell className="mygrid grid-3" colSpan={3} key="5">3</Cell>
        <Cell className="mygrid grid-3" colSpan={3} key="6">3</Cell>
        <Cell className="mygrid grid-3" id="r-grid-tablet-8" colSpan={{desktop: 4, tablet: 8}} key="7">4 tablet: 8</Cell>
        <Cell className="mygrid grid-3" colSpan={4} key="8">3</Cell>
        <Cell className="mygrid grid-3" colSpan={4} key="9">3</Cell>
        <Cell className="mygrid grid-3" id="r-grid-phone-2" colSpan={{desktop: 3, phone: 2}} key="10">3 phone: 2</Cell>
    </ResponsiveGrid>)
}

describe('ResponsiveGrid', () => {
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

    it("should render", () => {
        wrapper = render(<ResponsiveGrid />);
        assert(document.querySelector('.next-responsive-grid'));
    });

    it("should render", () => {
        wrapper = render(<App />);
        assert(document.querySelector('.next-responsive-grid'));
        assert(wrapper.find('#r-grid-tablet-8')[0].style.gridArea === 'span 1 / span 4');
        assert(wrapper.find('#r-grid-phone-2')[0].style.gridArea === 'span 1 / span 3');
    });

    it("should render in tablet", () => {
        wrapper = render(<App device="tablet"/>)
        assert(wrapper.find('#r-grid-tablet-8')[0].style.gridArea === 'span 1 / span 8');
        assert(wrapper.find('#r-grid-phone-2')[0].style.gridArea === 'span 1 / span 2');
    });

    it("should render in phone", () => {
        wrapper = render(<App device="phone"/>)
        assert(wrapper.find('#r-grid-tablet-8')[0].style.gridArea === 'span 1 / span 2');
        assert(wrapper.find('#r-grid-phone-2')[0].style.gridArea === 'span 1 / span 2');
    });
});
