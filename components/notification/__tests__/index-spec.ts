import * as React from 'react';
import Notification from '../index';

describe('notification', () => {
    const delay = (time: number | undefined) => new Promise(resolve => setTimeout(resolve, time));

    afterEach(() => {
        Notification.destroy();
    });

    it('should render timeout close notification', async () => {
        let called = false;
        Notification.open({
            title: '哈哈',
            content: '嘿嘿333',
            duration: 100,
            onClose: () => {
                called = true;
            },
        });
        await delay(500);
        assert(called);
    });

    it('should render normal notification', () => {
        let key = Notification.open({});

        assert(!key);

        key = Notification.open({
            title: '哈哈',
            content: '嘿嘿',
        });

        Notification.close(key as string);

        key = Notification.open({
            title: '哈哈',
            content: '嘿嘿',
        });

        cy.get('.next-message').should('exist');
        Notification.close(key as string);
    });
});
