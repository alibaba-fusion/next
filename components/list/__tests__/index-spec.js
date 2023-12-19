import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import List from '../index';
import Icon from '../../icon';
import Loading from '../../loading';
import '../style';

Enzyme.configure({ adapter: new Adapter() });

const data = [
    {
        title: 'A Title',
        img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
        money: '$20',
    },
    {
        title: 'B Title',
        img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
        money: '$10',
    },
    {
        title: 'Title',
        img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
        money: '$20',
    },
    {
        title: 'Title',
        img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
        money: '$20',
    },
];
/*eslint-disable*/
describe('List', () => {
    let wrapper;

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it('should render', () => {
        wrapper = mount(
            <List size="small" header={<div>Notifications</div>}>
                <List.Item extra={'$20'} title="Title">
                    List Item 1
                </List.Item>
                <List.Item extra={'$20'} title="Title">
                    List Item 2
                </List.Item>
                <List.Item extra={'$20'} title="Title">
                    List Item 3
                </List.Item>
                <List.Item extra={'$20'} title="Title">
                    List Item 4
                </List.Item>
                <List.Item extra={'$20'} title="Title">
                    List Item 5
                </List.Item>
            </List>
        );

        assert(wrapper.find('.next-list-item').length === 5);
        assert(wrapper.find('.next-list-header').length > 0);
        assert(wrapper.find('.next-list-small').length > 0);
    });

    it('should RTL render', () => {
        wrapper = mount(
            <List rtl footer={<div>footer</div>}>
                <List.Item media={'$20'} description="List Item 1" />
                <List.Item media={'$20'} description="List Item 2" />
                <List.Item media={'$20'} description="List Item 3" />
                <List.Item media={'$20'} description="List Item 4" />
                <List.Item media={'$20'} description="List Item 5" />
            </List>
        );

        assert(wrapper.find('[dir]').length === 1);
    });

    it('should support datasource & renderItem', () => {
        wrapper = mount(
            <List
                size="small"
                dataSource={data}
                renderItem={item => (
                    <List.Item extra={item.money} title={item.title}>
                        List Item 1
                    </List.Item>
                )}
            />
        );

        assert(wrapper.find('.next-list-item').length === 4);
    });

    it('should support loading', () => {
        wrapper = mount(
            <List
                size="small"
                loading
                dataSource={data}
                renderItem={item => (
                    <List.Item extra={item.money} title={item.title}>
                        List Item 1
                    </List.Item>
                )}
            />
        );

        assert(wrapper.find('.next-list-loading'));
    });

    it('should support loadingComponent', () => {
        const indicator = (
            <div>
                <Icon type="loading" />
            </div>
        );

        const CustomLoading = props => <Loading indicator={indicator} {...props} />;

        wrapper = mount(
            <List
                size="small"
                loading
                dataSource={data}
                loadingComponent={CustomLoading}
                renderItem={item => (
                    <List.Item extra={item.money} title={item.title}>
                        List Item 1
                    </List.Item>
                )}
            />
        );

        assert(wrapper.find('.next-icon-loading'));
    });

    it('should support emptyContent', () => {
        wrapper = mount(<List size="small" header={<div>Notifications</div>} />);

        assert(wrapper.find('.next-list-empty').length);

        wrapper.setProps({
            dataSource: [],
        });
        assert(wrapper.find('.next-list-empty').length);

        wrapper.setProps({
            dataSource: null,
        });
        assert(wrapper.find('.next-list-empty').length);
    });
});
