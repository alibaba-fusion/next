import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Loading from '../../src/loading/index';
import Overlay from '../../src/overlay';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Test', () => {
    describe('render', () => {
        let wrapper1;
        let wrapper2;

        afterEach(() => {
            if (wrapper1) {
                wrapper1.unmount();
                wrapper1 = null;
            }
            if (wrapper2) {
                wrapper2.unmount();
                wrapper2 = null;
            }
        });
        it('should render default', () => {
            wrapper1 = mount(<Loading />);
            assert(wrapper1.find('.next-loading').length === 1);
        });
        it('should render medium size', () => {
            wrapper1 = mount(<Loading />);
            assert(wrapper1.find('.next-loading-fusion-reactor').length === 1);

            wrapper2 = mount(<Loading size="medium" />);
            assert(
                wrapper2.find('.next-loading-medium-fusion-reactor').length ===
                    1
            );
        });

        it('should show fullscreen', () => {
            wrapper1 = mount(<Loading fullScreen />);
            assert(
                wrapper1.find(Overlay).length ===
                    1
            );
        });
    });

    describe('behavior', () => {
        let wrapper1;
        let wrapper2;

        afterEach(() => {
            if (wrapper1) {
                wrapper1.unmount();
                wrapper1 = null;
            }
            if (wrapper2) {
                wrapper2.unmount();
                wrapper2 = null;
            }
        });
        it('should support tip', () => {
            wrapper1 = mount(<Loading tip="hello world" />);
            assert(
                wrapper1.find('.next-loading-tip-content').text() ===
                    'hello world'
            );
        });
        it('should support indicator', () => {
            const indicator = <div className="custom-loading-dom" />;
            wrapper1 = mount(
                <Loading tip="hello world" indicator={indicator} />
            );
            assert(wrapper1.find('.next-loading-indicator').contains(indicator));
        });
        it('should support visible', () => {
            wrapper1 = mount(<Loading tip="hello world" />);
            assert(wrapper1.find('.next-loading').hasClass('next-open'));
            wrapper2 = mount(
                <Loading tip="hello world" visible={false} />
            );
            assert(!wrapper2.find('.next-loading').hasClass('next-open'));
        });
        it('should support inline', () => {
            wrapper1 = mount(<Loading tip="hello world" />);
            assert(
                wrapper1.find('.next-loading').hasClass('next-loading-inline')
            );
            wrapper2 = mount(
                <Loading tip="hello world" inline={false} />
            );
            assert(
                !wrapper2.find('.next-loading').hasClass('next-loading-inline')
            );
        });
    });
});
