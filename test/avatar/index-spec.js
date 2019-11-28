import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Avatar from '../../src/avatar';
import Icon from '../../src/icon';
import '../../src/avatar/style.js';
import '../../src/icon/style.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Avatar', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Avatar />);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it("should render", () => {
        const avatar = wrapper.find('.next-avatar');
        assert(avatar.hasClass('next-avatar'));
    });

    it("should render src", (done) => {
        const link = 'https://img.alicdn.com/tfs/TB1EHhicAH0gK0jSZPiXXavapXa-904-826.png';
        let avatar = wrapper.find('.next-avatar');
        assert(avatar.hasClass('next-avatar'));

        avatar = wrapper.setProps({ src: link });
        assert(avatar.find('img').props().src === link);

        let error = 0;
        avatar = wrapper.setProps({ src: 'unexist', onError: () => {
            error += 1;
        } });
        setTimeout(()=> {
            assert(error === 1);
            done();
        }, 200);
    });

    it("should render icon", () => {
        let avatar = wrapper.find('.next-avatar');
        avatar = wrapper.setProps({ icon: 'account' });
        assert(avatar.find('.next-icon-account'));

        avatar = wrapper.setProps({ icon: <Icon type="atm"/> });
        assert(avatar.find('.next-icon-atm'));
    });

    it("should render letters", () => {
        let avatar = wrapper.find('.next-avatar');
        avatar = wrapper.setProps({ children: 'U' });

        assert(avatar.find('.next-avatar').instance().innerHTML === 'U');
    });
});
