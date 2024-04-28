import React from 'react';
import Input from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Input A11y', () => {
    it('should not have any violations', async () => {
        await testReact(<Input aria-label="a11y input" defaultValue="123" />);
    });

    it('should not have any violations when value set', async () => {
        await testReact(
            <div>
                <Input aria-label="a11y input" defaultValue="123" />
                <Input id="a11yTest2" label="a11y test value" value="123" />
            </div>
        );
    });

    it('should not have any violations when clear button', async () => {
        await testReact(<Input aria-label="a11y input" hasClear />);
    });

    it('should not have any violations when any state is set', async () => {
        await testReact(
            <div>
                <Input aria-label="a11y input error" defaultValue="123" state="error" />
                <Input aria-label="a11y input loading" defaultValue="123" state="loading" />
                <Input aria-label="a11y input success" defaultValue="123" state="success" />
            </div>
        );
    });

    it('should not have any violations when autoComplete', async () => {
        await testReact(<Input aria-label="a11y input" autoComplete="on" />);
    });

    it('should not have any violations when autoFocus', async () => {
        await testReact(<Input aria-label="a11y input" autoFocus />);
    });

    it('should not have any violations when using addons', async () => {
        await testReact(
            <Input
                addonTextAfter=".com"
                addonBefore={<span>before</span>}
                aria-label="a11y input"
            />
        );
    });
});
