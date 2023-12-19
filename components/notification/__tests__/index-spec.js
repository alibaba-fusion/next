import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Notification from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('notification', () => {
    const delay = time => new Promise(resolve => setTimeout(resolve, time));

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

        Notification.close(key);

        key = Notification.open({
            title: '哈哈',
            content: '嘿嘿',
        });

        const dom = document.querySelector('.next-message');

        assert(!!dom);

        Notification.close(key);
    });
});
