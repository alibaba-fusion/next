import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import Search from '../index';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Search issues', function () {
    // Fix https://github.com/alibaba-fusion/next/issues/4049
    it('Enter search should be called once when autoHighlightFirstItem=false', function () {
        const onSearch = sinon.spy();
        const wrapper = mount(
            <Search dataSource={['a']} onSearch={onSearch} autoHighlightFirstItem={false} />
        );
        // has matched item
        wrapper.find('input').simulate('change', { target: { value: 'a' } });
        wrapper.find('input').simulate('keydown', { keyCode: 13 });
        assert(onSearch.calledOnceWith('a'));
        // does not has matched item
        wrapper.find('input').simulate('change', { target: { value: 'b' } });
        wrapper.find('input').simulate('keydown', { keyCode: 13 });
        assert(onSearch.calledTwice);
        assert(onSearch.calledWith('b'));
        wrapper.unmount();
    });
});
