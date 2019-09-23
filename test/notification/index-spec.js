import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Notification from '../../src/notification';

Enzyme.configure({ adapter: new Adapter() });

describe('notification', () => {
    afterEach(() => {
        Notification.destroy();
    })
    it('should render normal notification', () => {
        let key = Notification.open({});

        assert(!key);

        key = Notification.open({
            title: '哈哈',
            content: '嘿嘿'
        });

        Notification.close(key);

        key = Notification.open({
            title: '哈哈',
            content: '嘿嘿'
        });

        const dom  = document.querySelector('.next-message');

        assert(!!dom);

        Notification.close(key);
    });

    it('should render timeout close notification', done => {
        let called = false;
        Notification.open({
            title: '哈哈',
            content: '嘿嘿',
            duration: 3000,
            onClose: () => {
                called = true;
            }
        });
        setTimeout(() => {
            assert(called);
            done();
        }, 5001)
    });
})
