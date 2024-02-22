import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Drawer from '../index';
import '../style';
import { test, unmount } from '../../util/__tests__/legacy/a11y/validate';
import { roleType, isHeading, isButton } from '../../util/__tests__/legacy/a11y/checks';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */

Enzyme.configure({ adapter: new Adapter() });

describe('Drawer A11y', () => {
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
            wrapper = await mount(<Drawer visible />);
            return test('.next-overlay-wrapper');
        });
    });
});
