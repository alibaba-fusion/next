import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Grid from '../../src/grid';

/* eslint-disable react/jsx-filename-extension */
/* global describe it beforeEach afterEach */

const { Row, Col } = Grid;

Enzyme.configure({ adapter: new Adapter() });

describe('Row', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Row />);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it('should have class', () => {
        wrapper.setProps({
            wrap: true,
            fixed: true,
            fixedWidth: 'xxs',
            justify: 'end',
            align: 'center',
        });
        const row = wrapper.find('.next-row');
        assert(
            row.hasClass('next-row-wrap') &&
                row.hasClass('next-row-fixed') &&
                row.hasClass('next-row-fixed-xxs') &&
                row.hasClass('next-row-justify-end') &&
                row.hasClass('next-row-align-center')
        );
    });

    it('should apply gutter', () => {
        wrapper.setProps({
            gutter: 16,
            children: [<Col key="1" span="12" />, <Col key="2" span="12" />],
        });
        const rowStyle = wrapper.find('.next-row').props().style;
        assert(
            rowStyle.marginLeft === '-8px' && rowStyle.marginRight === '-8px'
        );

        const colStyle = wrapper.find('.next-col').getElements()[0].props.style;
        assert(
            colStyle.paddingLeft === '8px' && colStyle.paddingRight === '8px'
        );
    });

    it('should receive className prop', () => {
        wrapper.setProps({ className: 'custom' });
        assert(wrapper.find('.next-row').hasClass('custom'));
    });

    it('should receive style prop', () => {
        wrapper.setProps({ style: { color: 'red' } });
        assert(wrapper.find('.next-row').prop('style').color === 'red');
    });

    it('should have hidden class', () => {
        wrapper.setProps({ hidden: true });
        assert(wrapper.find('.next-row').hasClass('next-row-hidden'));

        wrapper.setProps({ hidden: 's' });
        assert(wrapper.find('.next-row').hasClass('next-row-s-hidden'));

        wrapper.setProps({ hidden: ['s', 'm'] });
        assert(
            wrapper.find('.next-row-s-hidden').hasClass('next-row-m-hidden')
        );
    });

    it('should rendered as custom element type', () => {
        wrapper.setProps({ component: 'ul' });
        assert(wrapper.find('.next-row').type() === 'ul');
    });
});

describe('Col', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Col />);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it('should have class', () => {
        wrapper.setProps({
            span: 1,
            fixedSpan: 2,
            offset: 3,
            fixedOffset: 4,
            align: 'center',
        });

        const col = wrapper.find('.next-col');
        assert(
            col.hasClass('next-col-1') &&
                col.hasClass('next-col-fixed-2') &&
                col.hasClass('next-col-offset-3') &&
                col.hasClass('next-col-offset-fixed-4') &&
                col.hasClass('next-col-center')
        );
    });

    it('should have break point class', () => {
        wrapper.setProps({ s: 2 });
        assert(wrapper.find('.next-col').hasClass('next-col-s-2'));

        wrapper.setProps({ s: { span: 2, offset: 2 } });
        assert(wrapper.find('.next-col-s-2').hasClass('next-col-s-offset-2'));
    });

    it('should have hidden class', () => {
        wrapper.setProps({ hidden: true });
        assert(wrapper.find('.next-col').hasClass('next-col-hidden'));

        wrapper.setProps({ hidden: 's' });
        assert(wrapper.find('.next-col').hasClass('next-col-s-hidden'));

        wrapper.setProps({ hidden: ['s', 'm'] });
        assert(
            wrapper.find('.next-col-s-hidden').hasClass('next-col-m-hidden')
        );
    });

    it('should receive className prop', () => {
        wrapper.setProps({ className: 'custom' });
        assert(wrapper.find('.next-col').hasClass('custom'));
    });

    it('should receive style prop', () => {
        wrapper.setProps({ style: { color: 'red' } });
        assert(wrapper.find('.next-col').prop('style').color === 'red');
    });

    it('should rendered as custom element type', () => {
        wrapper.setProps({ component: 'li' });
        assert(wrapper.find('.next-col').type() === 'li');
    });
});
