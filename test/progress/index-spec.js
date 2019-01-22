import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Axe from 'axe-core';
import Progress from '../../src/progress/index';
import '../../src/progress/style.js';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Line', () => {
    describe('render', () => {
        let wrapper;

        afterEach(() => {
            if (wrapper) {
                wrapper.unmount();
                wrapper = null;
            }
        });

        it('should render a line progress', () => {
            wrapper = mount(<Progress percent={30} />);
            const lineOverlay = wrapper.find('.next-progress-line-overlay').instance();
            assert(lineOverlay.style.width === '30%');
        });

        it('should render a line progress without text', () => {
            wrapper = mount(<Progress percent={30} textRender={() => false} />);
            assert(wrapper.find('.next-progress-line-text').length === 0);
        });

        it('should render a line progress use custom text', () => {
            wrapper = mount(<Progress percent={66} textRender={(percent) => `${percent}/100`} />);
            assert(wrapper.find('.next-progress-line-text').text() === '66/100');
        });

        it('should render a line progress with border', () => {
            wrapper = mount(<Progress percent={66} hasBorder />);
            assert(wrapper.find('.next-progress-line-show-border').length === 1);
        });
    });

    describe('action', () => {
        it('should change percent', () => {
            const wrapper = mount(<Progress percent={30} />);
            assert(wrapper.props().percent === 30);

            wrapper.setProps({ percent: 60 });
            assert(wrapper.props().percent === 60);

            const lineOverlay = wrapper.find('.next-progress-line-overlay').instance();
            assert(lineOverlay.style.width === '60%');
        });

        it('should change style in progressive mode', () => {
            const wrapper = mount(<Progress percent={30} progressive />);
            assert(wrapper.find('.next-progress-line-overlay-started').length === 1);

            wrapper.setProps({ percent: 60 });
            assert(wrapper.find('.next-progress-line-overlay-middle').length === 1);

            wrapper.setProps({ percent: 90 });
            assert(wrapper.find('.next-progress-line-overlay-finishing').length === 1);
        });
    });

    describe('a11y', () => {
        it('should not have any violations', (done) => {
            const div = document.createElement('div');
            document.body.appendChild(div);
            mount(<Progress percent={30} />, { attachTo: div });

            Axe.run('.next-progress-line', {}, function(error, results) {
                if (error) {
                    return error;
                }

                assert(results.violations.length === 0);
                done();
            });
        });
    });
});

describe('Circle', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    describe('render', () => {
        it('should render a circle progress', () => {
            const wrapper = mount(<Progress percent={30} shape="circle" />);
            assert(wrapper.find('.next-progress-circle-overlay').length === 1);
        });

        it('should render a circle progress without text', () => {
            const wrapper = mount(<Progress shape="circle" percent={30} textRender={() => false} />);
            assert(wrapper.find('.next-progress-circle-text').length === 0);
        });

        it('should render a circle progress use custom text', () => {
            const wrapper = mount(<Progress shape="circle" percent={66} textRender={(percent) => (percent / 10)} />);
            assert(wrapper.find('.next-progress-circle-text').text() === '6.6');
        });
    });

    describe('action', () => {
        it('should change percent', () => {
            const wrapper = mount(<Progress shape="circle" percent={30} />);
            assert(wrapper.props().percent === 30);
            wrapper.setProps({ percent: 60 });
            assert(wrapper.props().percent === 60);
        });

        it('should change style in progressive mode', () => {
            const wrapper = mount(<Progress shape="circle" percent={30} progressive />);
            assert(wrapper.find('.next-progress-circle-overlay-started').length === 1);

            wrapper.setProps({ percent: 60 });
            assert(wrapper.find('.next-progress-circle-overlay-middle').length === 1);

            wrapper.setProps({ percent: 90 });
            assert(wrapper.find('.next-progress-circle-overlay-finishing').length === 1);
        });
    });

    describe('a11y', () => {
        it('should not have any violations', (done) => {
            const div = document.createElement('div');
            document.body.appendChild(div);
            mount(<Progress shape="circle" percent={30} />, { attachTo: div });

            Axe.run('.next-progress-circle', {}, function(error, results) {
                if (error) {
                    return error;
                }

                assert(results.violations.length === 0);
                done();
            });
        });
    });
});


