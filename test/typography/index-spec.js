import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Typography from '../../src/typography/index';

// import ReactDOM from 'react-dom';

const { Paragraph, Text, H1, H2, H3, H4, H5, H6 } = Typography;

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Typography', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    describe('Paragraph', () => {
        it('default class check', () => {
            wrapper = mount(<Paragraph />);
            assert(
                wrapper
                    .find('.next-typography-paragraph')
                    .exists()
            );
        });

        it('props `rtl` should be ok', () => {
            wrapper = mount(<Paragraph rtl />);
            assert(wrapper.find('.next-typography-paragraph').last().props().dir === 'rtl');
        });
    });

    describe('Typography', () => {
        it('default class check', () => {
            wrapper = mount(<Typography />);
            assert(
                wrapper
                    .find('.next-typography')
                    .exists()
            );
            assert(
                wrapper
                    .find('.next-typography').type() === 'article'
            );
        });
    });

    describe('Title', () => {
        it('default class check', () => {
            wrapper = mount(<H1 />);
            assert(
                wrapper
                    .find('.next-typography-title')
                    .exists()
            );
        });

        it('h1 tag check', () => {
            wrapper = mount(<H1 />);
            assert(
                wrapper
                    .find('.next-typography-title').last().type()
                    === 'h1'
            );
        });

        it('h2 tag check', () => {
            wrapper = mount(<H2 />);
            assert(
                wrapper
                    .find('.next-typography-title').last().type()
                    === 'h2'
            );
        });

        it('h3 tag check', () => {
            wrapper = mount(<H3 />);
            assert(
                wrapper
                    .find('.next-typography-title').last().type()
                    === 'h3'
            );
        });

        it('h4 tag check', () => {
            wrapper = mount(<H4 />);
            assert(
                wrapper
                    .find('.next-typography-title').last().type()
                    === 'h4'
            );
        });

        it('h5 tag check', () => {
            wrapper = mount(<H5 />);
            assert(
                wrapper
                    .find('.next-typography-title').last().type()
                    === 'h5'
            );
        });

        it('h6 tag check', () => {
            wrapper = mount(<H6 />);
            assert(
                wrapper
                    .find('.next-typography-title').last().type()
                    === 'h6'
            );
        });
    });

    describe('Text', () => {
        it('default class check', () => {
            wrapper = mount(<Text />);
            assert(
                wrapper
                    .find('.next-typography')
                    .exists()
            );
        });
        it('default different style', () => {
            wrapper = mount(<Text strong />);
            assert(
                wrapper
                    .find('strong')
                    .exists()
            );

            wrapper.setProps({
                underline: true,
            });
            assert(
                wrapper
                    .find('u')
                    .exists()
            );

            wrapper.setProps({
                delete: true,
            });
            assert(
                wrapper
                    .find('del')
                    .exists()
            );

            wrapper.setProps({
                code: true,
            });
            assert(
                wrapper
                    .find('code')
                    .exists()
            );

            wrapper.setProps({
                mark: true,
            });
            assert(
                wrapper
                    .find('mark')
                    .exists()
            );
        });
    })
});
