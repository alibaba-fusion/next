import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tag from '../../src/tag';
import '../../src/tag/style.js';
import a11y from '../util/a11y';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach*/

Enzyme.configure({ adapter: new Adapter() });

const {Selectable, Group, Closable} = Tag;



describe('Tag', () => {

    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        a11y.afterEach();
    });

    it('should not have any violations', (done) => {
        wrapper = a11y.test(<Tag>Test</Tag>, done, { incomplete: true });
    });

    it('should not have any violations when disabled', (done) => {
        wrapper = a11y.test(<Tag disabled>Test</Tag>, done, { incomplete: true });
    });

    it('should not have any violations when closable', (done) => {
        wrapper = a11y.test(<Closable />, done, { incomplete: true });
    });

    it('should not have any violations when closable and disabled', (done) => {
        wrapper = a11y.test(<Closable disabled />, done, { incomplete: true });
    });

    it('should not have any violations when closable and checked', (done) => {
        wrapper = a11y.test(<Closable disabled />, done, { incomplete: true });
    });

    it('should not have any violations when selectable', (done) => {
        wrapper = a11y.test(<Selectable />, done, { incomplete: true });
    });

    it('should not have any violations when selectable and checked', (done) => {
        wrapper = a11y.test(<Selectable checked />, done, { incomplete: true });
    });

    it('should not have any violations when group with child node', (done) => {
        const node = <div>Hello World</div>;
        wrapper = a11y.test(<Group >{node}</Group>, done, { incomplete: true });
    });
});
