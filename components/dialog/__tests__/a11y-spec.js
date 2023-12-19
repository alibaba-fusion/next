import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Dialog from '../index';
import '../style';
import { test, unmount } from '../../util/__tests__/legacy/a11y/validate';
import { roleType, isHeading, isButton } from '../../util/__tests__/legacy/a11y/checks';

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
            unmount();
        });

        it('should not have any violations', async () => {
            wrapper = await mount(<Dialog visible title="Accessible Header" />);
            return test('.next-overlay-wrapper');
        });

        it('should have accessible header', () => {
            wrapper = mount(<Dialog visible title="Accessible Header" />);
            assert(isHeading('.next-dialog-header', wrapper));
        });

        it('should have accessible close button', () => {
            wrapper = mount(<Dialog visible title="Accessible Header" />);
            assert(isButton('.next-dialog-close', wrapper));
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

        it('should not have any violations', async () => {
            hide = Dialog.alert({
                title: 'Title',
                content: 'Content',
                animation: false,
                className: 'dialog-a11y-tests',
            }).hide;
            return test('.dialog-a11y-tests');
        });

        it('should have role `alertdialog` for alert dialog', () => {
            hide = Dialog.alert({
                title: 'Title',
                content: 'Content',
                animation: false,
            }).hide;
            assert(roleType('alertdialog', document.querySelector('.next-dialog')));
        });

        it('should have role `alertdialog` for show dialog', () => {
            hide = Dialog.show({
                title: 'Title',
                content: 'Content',
                animation: false,
            }).hide;
            assert(roleType('alertdialog', document.querySelector('.next-dialog')));
        });

        it('should have role `alertdialog` for confirm dialog', () => {
            hide = Dialog.confirm({
                title: 'Title',
                content: 'Content',
                animation: false,
            }).hide;
            assert(roleType('alertdialog', document.querySelector('.next-dialog')));
        });
    });
});
