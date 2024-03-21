import React from 'react';
import Tag from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

const { Selectable, Group, Closable } = Tag;

describe('Tag A11y', () => {
    it('should not have any violations', async () => {
        await testReact(<Tag>Test</Tag>, { incomplete: true });
    });

    it('should not have any violations when disabled', async () => {
        await testReact(<Tag disabled>Test</Tag>, {
            incomplete: true,
        });
    });

    it('should not have any violations when closable', async () => {
        await testReact(<Closable />, { incomplete: true });
    });

    it('should not have any violations when closable and disabled', async () => {
        await testReact(<Closable disabled />, { incomplete: true });
    });

    it('should not have any violations when closable and checked', async () => {
        await testReact(<Closable disabled />, { incomplete: true });
    });

    it('should not have any violations when selectable', async () => {
        await testReact(<Selectable />, { incomplete: true });
    });

    it('should not have any violations when selectable and checked', async () => {
        await testReact(<Selectable checked />, { incomplete: true });
    });

    it('should not have any violations when group with child node', async () => {
        await testReact(
            <Group>
                <div>Hello World</div>
            </Group>,
            { incomplete: true }
        );
    });
});
