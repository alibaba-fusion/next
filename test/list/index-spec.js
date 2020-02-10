import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import List from '../../src/list';
import '../../src/list/style.js';

Enzyme.configure({ adapter: new Adapter() });

/*eslint-disable*/
describe('List', () => {
    let wrapper;

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it("should render", () => {
        wrapper = mount(
            <List size="small" header={<div>Notifications</div>}>
                <List.Item extra={'$20'} title="Title">List Item 1</List.Item>
                <List.Item extra={'$20'} title="Title">List Item 2</List.Item>
                <List.Item extra={'$20'} title="Title">List Item 3</List.Item>
                <List.Item extra={'$20'} title="Title">List Item 4</List.Item>
                <List.Item extra={'$20'} title="Title">List Item 5</List.Item>
            </List>
        );

        assert(wrapper.find('.next-list-item').length === 5);
        assert(wrapper.find('.next-list-header').length > 0);
        assert(wrapper.find('.next-list-small').length > 0);
    });

    it("should RTL render", () => {
        wrapper = mount(
            <List rtl footer={<div>footer</div>}>
                <List.Item media={'$20'} description="List Item 1" />
                <List.Item media={'$20'} description="List Item 2" />
                <List.Item media={'$20'} description="List Item 3" />
                <List.Item media={'$20'} description="List Item 4" />
                <List.Item media={'$20'} description="List Item 5" />
            </List>
        );

        assert(wrapper.find('[dir]').length === 1)
    });
});
