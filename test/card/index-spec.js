import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Button from '../../src/button';
import Card from '../../src/card/index';
import '../../src/card/style.js';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable */
describe('Card', () => {
    const commonProps = {
        style: { width: 300 },
        title: 'Title',
        subTitle: 'sub title',
        extra: 'Link',
    };

    describe('render', () => {
        let wrapper;

        afterEach(() => {
            wrapper = null;
        });

        it('should render card', () => {
            wrapper = mount(<Card {...commonProps}>Card content</Card>);
            assert(wrapper.find('.next-card').length === 1);
            assert(wrapper.find('.next-card-head-show-bullet').length === 1);
            assert(wrapper.find('.next-card-head-show-underline').length === 0);
        });

        it('should render without title bullet', () => {
            wrapper = mount(
                <Card {...commonProps} showTitleBullet={false}>
                    Card Content
                </Card>
            );
            assert(wrapper.find('.next-card-head-show-bullet').length === 0);
        });

        it('should render without head underline', () => {
            wrapper = mount(
                <Card {...commonProps} showHeadDivider={false}>
                    Card Content
                </Card>
            );
            assert(wrapper.find('.next-card-head-show-underline').length === 0);
        });

        it('should render without head', () => {
            wrapper = mount(
                <Card {...commonProps} title={null}>
                    Card Content
                </Card>
            );
            assert(wrapper.find('.next-card-head').length === 0);
        });

        it('should render media & actions', () => {
            wrapper = mount(
                <Card
                    {...commonProps}
                    media={<img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" />}
                    actions={<Button text type="primary">Button</Button>}
                >
                    Card Content
                </Card>
            );

            assert(wrapper.find('.next-card-media').length > 0);
            assert(wrapper.find('.next-card-actions').length > 0);
        });

        it('should render free', () => {
            wrapper = mount(
                <Card
                    style= {{ width: 300 }}
                    free
                >
                    <Card.Media>
                        <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" />
                    </Card.Media>
                    <Card.Header title="Title" subTitle="Sub Title" extra={<Button type="primary" text>Link</Button>} />
                    <Card.Divider />
                    <Card.Content>
                        Card Content
                    </Card.Content>
                    <Card.Actions>
                        <Button type="primary" key="action1" text>Action 1</Button>
                        <Button type="primary" key="action2" text>Action 2</Button>
                    </Card.Actions>
                </Card>
            );

            assert(wrapper.find('.next-card-free').length > 0);
            // assert(wrapper.find('.next-card-actions').length > 0);
        });
    });

    describe('action', () => {
        let wrapper, parent;

        beforeEach(() => {
            parent = document.createElement('div');
            parent.setAttribute('id', 'react-app');
            document.body.appendChild(parent);
        });

        afterEach(() => {
            document.body.removeChild(parent);
            parent = null;
            wrapper = null;
        });

        it('should expand card', done => {
            wrapper = mount(
                <Card {...commonProps}>
                    <div style={{ height: 600 }} />
                </Card>,
                { attachTo: parent }
            );
            assert(wrapper.find('.next-icon-arrow-down.expand').length === 0);
            wrapper.find(Button).simulate('click');
            assert(wrapper.find('.next-icon-arrow-down.expand').length === 1);
            done();
        });
    });
});
