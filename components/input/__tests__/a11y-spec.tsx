import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../index';
import '../style';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Input A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations', async () => {
        wrapper = await testReact(<Input aria-label="a11y input" defaultValue="123" />);
        return wrapper;
    });

    it('should not have any violations when value set', async () => {
        wrapper = await testReact(
            <div>
                <Input aria-label="a11y input" defaultValue="123" />
                <Input id="a11yTest2" label="a11y test value" value="123" />
            </div>
        );
        return wrapper;
    });

    it('should not have any violations when clear button', async () => {
        wrapper = await testReact(<Input aria-label="a11y input" hasClear />);
        return wrapper;
    });

    it('should not have any violations when any state is set', async () => {
        wrapper = await testReact(
            <div>
                <Input aria-label="a11y input error" defaultValue="123" state="error" />
                <Input aria-label="a11y input loading" defaultValue="123" state="loading" />
                <Input aria-label="a11y input success" defaultValue="123" state="success" />
            </div>
        );
        return wrapper;
    });

    it('should not have any violations when autoComplete', async () => {
        wrapper = await testReact(<Input aria-label="a11y input" autoComplete="on" />);
        return wrapper;
    });

    it('should not have any violations when autoFocus', async () => {
        wrapper = await testReact(<Input aria-label="a11y input" autoFocus />);
        return wrapper;
    });

    it('should not have any violations when using addons', async () => {
        wrapper = await testReact(
            <Input
                addonTextAfter=".com"
                addonBefore={<span>before</span>}
                aria-label="a11y input"
            />
        );
        return wrapper;
    });
});
