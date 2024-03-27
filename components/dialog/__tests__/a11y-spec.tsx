import React from 'react';
import Dialog from '../index';
import '../style';
import { test } from '../../util/__tests__/a11y/validate';
import { roleType, isHeading, isButton } from '../../util/__tests__/a11y/checks';

const wrapperSelector = '.next-overlay-wrapper';

describe('Dialog A11y', () => {
    describe('Basic', () => {
        it('should not have any violations', () => {
            cy.mount(<Dialog visible title="Accessible Header" />);
            cy.then(() => {
                test(wrapperSelector);
            });
        });

        it('should have accessible header', () => {
            cy.mount(<Dialog visible title="Accessible Header" />);
            cy.then(() => {
                expect(isHeading('.next-dialog-header', wrapperSelector)).to.be.true;
            });
        });

        it('should have accessible close button', () => {
            cy.mount(<Dialog visible title="Accessible Header" />);
            cy.then(() => {
                expect(isButton('.next-dialog-close', wrapperSelector)).to.be.true;
            });
        });
    });

    describe('Show', () => {
        let hide: () => void | null;

        afterEach(() => {
            if (hide && typeof hide === 'function') {
                hide();
                (hide as unknown as null) = null;
            }
        });

        it('should not have any violations', () => {
            hide = Dialog.alert({
                title: 'Title',
                content: 'Content',
                animation: false,
                className: 'dialog-a11y-tests',
            }).hide;
            test('.dialog-a11y-tests');
        });

        it('should have role `alertdialog` for alert dialog', () => {
            hide = Dialog.alert({
                title: 'Title',
                content: 'Content',
                animation: false,
            }).hide;
            expect(roleType('alertdialog', '.next-dialog', wrapperSelector)).to.be.true;
        });

        it('should have role `alertdialog` for show dialog', () => {
            hide = Dialog.show({
                title: 'Title',
                content: 'Content',
                animation: false,
            }).hide;
            expect(roleType('alertdialog', '.next-dialog', wrapperSelector)).to.be.true;
        });

        it('should have role `alertdialog` for confirm dialog', () => {
            hide = Dialog.confirm({
                title: 'Title',
                content: 'Content',
                animation: false,
            }).hide;
            expect(roleType('alertdialog', '.next-dialog', wrapperSelector)).to.be.true;
        });
    });
});
