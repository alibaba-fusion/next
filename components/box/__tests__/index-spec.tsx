import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Box from '../index';
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

describe('Box', () => {
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
        wrapper = render(
            <Box direction="row" wrap className="border-box" spacing={30}>
                <Box
                    className="border-box height-100 width-150"
                    direction="row"
                    wrap
                    spacing={8}
                    padding={10}
                >
                    <Box className="border-box height-30 width-30 dashed" />
                    <Box className="border-box height-30 width-30" />
                    <Box className="border-box height-30 width-30" />
                    <Box className="border-box height-30 width-30" />
                    <Box
                        className="border-box height-30 width-30 dashed"
                        margin={[3, 6]}
                        style={{ marginRight: 10 }}
                    />
                    <Box className="border-box height-30 width-30" />
                </Box>

                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
            </Box>
        );

        assert(wrapper.find('.next-box'));
    });

    it('justify should work when wrap and spacing setted', () => {
        wrapper = mount(
            <Box className="test" wrap spacing={20} direction="row" justify="center">
                <Box className="box-180-50" />
                <Box className="box-180-50" />
                <Box className="box-180-50" />
                <Box className="box-180-50" />
            </Box>
        );

        const style = wrapper.find('.test').at(2).prop('style');
        const { justifyContent } = style;
        assert(justifyContent === 'center');
    });
});
