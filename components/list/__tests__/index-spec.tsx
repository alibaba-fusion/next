import React from 'react';
import List from '../index';
import Icon from '../../icon';
import Loading from '../../loading';
import '../style';

interface DataItem {
    title: string;
    img: string;
    money: string;
}
const data: DataItem[] = [
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
    it('should render', () => {
        cy.mount(
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

        cy.get('.next-list-item').should('have.length', 5);
        cy.get('.next-list-header');
        cy.get('.next-list-small');
    });

    it('should RTL render', () => {
        cy.mount(
            <List rtl footer={<div>footer</div>}>
                <List.Item media={'$20'} description="List Item 1" />
                <List.Item media={'$20'} description="List Item 2" />
                <List.Item media={'$20'} description="List Item 3" />
                <List.Item media={'$20'} description="List Item 4" />
                <List.Item media={'$20'} description="List Item 5" />
            </List>
        );
        cy.get('[dir]').should('have.length', 1);
    });

    it('should support datasource & renderItem', () => {
        cy.mount(
            <List
                size="small"
                dataSource={data}
                renderItem={(item: DataItem) => (
                    <List.Item extra={item.money} title={item.title}>
                        List Item 1
                    </List.Item>
                )}
            />
        );
        cy.get('.next-list-item').should('have.length', 4);
    });

    it('should support loading', () => {
        cy.mount(
            <List
                size="small"
                loading
                dataSource={data}
                renderItem={(item: DataItem) => (
                    <List.Item extra={item.money} title={item.title}>
                        List Item 1
                    </List.Item>
                )}
            />
        );
        cy.get('.next-list-loading');
    });

    it('should support loadingComponent', () => {
        const indicator = (
            <div>
                <Icon type="loading" />
            </div>
        );

        const CustomLoading = (props: any) => <Loading indicator={indicator} {...props} />;

        cy.mount(
            <List
                size="small"
                loading
                dataSource={data}
                loadingComponent={CustomLoading}
                renderItem={(item: DataItem) => (
                    <List.Item extra={item.money} title={item.title}>
                        List Item 1
                    </List.Item>
                )}
            />
        );
        cy.get('.next-list-loading');
    });

    it('should support emptyContent', () => {
        cy.mount(<List size="small" header={<div>Notifications</div>} />);
        cy.get('.next-list-empty');

        cy.mount(<List dataSource={[]} />);
        cy.get('.next-list-empty');

        cy.mount(<List dataSource={undefined} />);
        cy.get('.next-list-empty');
    });
});
