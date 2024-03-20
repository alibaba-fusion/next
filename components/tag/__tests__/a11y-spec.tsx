import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tag from '../index';
import '../style';
import { testReact, unmount } from '../../util/__tests__/legacy/a11y/validate';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach*/

Enzyme.configure({ adapter: new Adapter() });

const { Selectable, Group, Closable } = Tag;

describe('Tag A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations', async () => {
        wrapper = await testReact(<Tag>Test</Tag>, { incomplete: true });
        return wrapper;
    });

    it('should not have any violations when disabled', async () => {
        wrapper = await testReact(<Tag disabled>Test</Tag>, {
            incomplete: true,
        });
        return wrapper;
    });

    it('should not have any violations when closable', async () => {
        wrapper = await testReact(<Closable />, { incomplete: true });
        return wrapper;
    });

    it('should not have any violations when closable and disabled', async () => {
        wrapper = await testReact(<Closable disabled />, { incomplete: true });
        return wrapper;
    });

    it('should not have any violations when closable and checked', async () => {
        wrapper = await testReact(<Closable disabled />, { incomplete: true });
        return wrapper;
    });

    it('should not have any violations when selectable', async () => {
        wrapper = await testReact(<Selectable />, { incomplete: true });
        return wrapper;
    });

    it('should not have any violations when selectable and checked', async () => {
        wrapper = await testReact(<Selectable checked />, { incomplete: true });
        return wrapper;
    });

    it('should not have any violations when group with child node', async () => {
        wrapper = await testReact(
            <Group>
                <div>Hello World</div>
            </Group>,
            { incomplete: true }
        );
        return wrapper;
    });
});
