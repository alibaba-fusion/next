import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Message from '../index';
import '../style';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Message A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations when various types', async () => {
        wrapper = await testReact(
            <div>
                <Message title="Success" type="success">
                    Content Content Content Content
                </Message>
                <Message title="Warning" type="warning">
                    Content Content Content Content
                </Message>
                <Message title="Error" type="error">
                    Content Content Content Content
                </Message>
                <Message title="Notice" type="notice">
                    Content Content Content Content
                </Message>
                <Message title="Help" type="help">
                    Content Content Content Content
                </Message>
                <Message title="Loading" type="loading">
                    Content Content Content Content
                </Message>
            </div>
        );
        return wrapper;
    });

    it('should not have any violations when various shapes', async () => {
        wrapper = await testReact(
            <div>
                <Message title="inline" shape="inline">
                    Content Content Content Content
                </Message>
                <Message title="addon" shape="addon">
                    Content Content Content Content
                </Message>
                <Message title="toast" shape="toast">
                    Content Content Content Content
                </Message>
            </div>
        );
        return wrapper;
    });

    it('should not have any violations when various sizes', async () => {
        wrapper = await testReact(
            <div>
                <Message title="medium" size="medium">
                    Content Content Content Content
                </Message>
                <Message title="large" size="large">
                    Content Content Content Content
                </Message>
            </div>
        );
        return wrapper;
    });

    it('should not have any violations when closable', async () => {
        wrapper = await testReact(
            <div>
                <Message title="closable" closeable>
                    Content Content Content Content
                </Message>
            </div>
        );

        return wrapper;
    });
});
