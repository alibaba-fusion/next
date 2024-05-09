import React from 'react';
import Message from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Message A11y', () => {
    it('should not have any violations when various types', async () => {
        await testReact(
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
    });

    it('should not have any violations when various shapes', async () => {
        await testReact(
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
    });

    it('should not have any violations when various sizes', async () => {
        await testReact(
            <div>
                <Message title="medium" size="medium">
                    Content Content Content Content
                </Message>
                <Message title="large" size="large">
                    Content Content Content Content
                </Message>
            </div>
        );
    });

    it('should not have any violations when closable', async () => {
        await testReact(
            <div>
                <Message title="closable" closeable>
                    Content Content Content Content
                </Message>
            </div>
        );
    });
});
