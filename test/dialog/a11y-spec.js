import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Dialog from '../../src/dialog/index';
import '../../src/dialog/style.js';
import a11y from '../util/a11y';
import isHeading from '../util/a11y/checks/isHeading';
import isButton from '../util/a11y/checks/isButton';
import roleType from '../util/a11y/checks/roleType';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */

Enzyme.configure({ adapter: new Adapter() });

describe('Dialog A11y', () => {
    describe('Basic', () => {
        let wrapper;

        afterEach(() => {
            if (wrapper && wrapper.unmount) {
                wrapper.unmount();
                wrapper = null;
            }
            a11y.afterEach();
        });

        it('should not have any violations', (done) => {
            wrapper = a11y.test(<Dialog visible />, done);
        });

        it('should have accessible `close` button', () => {
            wrapper = mount(<Dialog visible />);
            assert(isButton('.next-dialog-close', wrapper));
        });

        // TODO: test dialog buttons for accessiblity

        it('should have accessible dialog heading', () => {
            wrapper = mount(<Dialog visible title="my heading"/>);
            assert(isHeading(wrapper.find('.next-dialog-header')));
        });

        it('should have role dialog', () => {
            wrapper = mount(<Dialog visible/>);
            assert(roleType('dialog', wrapper.find('.next-dialog')));
        });
    });

    describe('Show', () => {
        let hide;

        afterEach(() => {
            if (hide && typeof hide === 'function') {
                hide();
                hide = null;
            }
        });

        it('should have role `alertdialog` for alert dialog', () => {
            hide = Dialog.alert({
                title: 'Title',
                content: 'Content',
                animation: false
            }).hide;
            assert(roleType('alertdialog', document.querySelector('.next-dialog')));
        });

        it('should have role `alertdialog` for show dialog', () => {
            hide = Dialog.show({
                title: 'Title',
                content: 'Content',
                animation: false
            }).hide;
            assert(roleType('alertdialog', document.querySelector('.next-dialog')));
        });

        it('should have role `alertdialog` for confirm dialog', () => {
            hide = Dialog.confirm({
                title: 'Title',
                content: 'Content',
                animation: false
            }).hide;
            assert(roleType('alertdialog', document.querySelector('.next-dialog')));
        });
    });
});

