import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import Collapse from '../index';

Enzyme.configure({ adapter: new Adapter() });

const Panel = Collapse.Panel;

/* global describe, it */
/* eslint-disable react/jsx-filename-extension */

describe('Collapse', () => {
    describe('render', () => {
        it('[normal] Should render null', () => {
            const wrapper = mount(<Collapse />);
            assert(wrapper.find(Collapse).length === 1);
        });
        it('[normal] Should render from children', () => {
            const wrapper = mount(
                <Collapse>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                    <div>others</div>
                </Collapse>
            );
            assert(wrapper.find(Collapse).length === 1);
            assert(wrapper.find(Panel).length === 2);
        });

        it('hidden panel should be hidden', () => {
            const wrapper = mount(
                <Collapse>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                </Collapse>
            );
            const el = wrapper.find('.next-collapse-panel-hidden');
            assert(el.length === 2);
        });

        it('Should render from dataSource', () => {
            const list = [
                {
                    title: 'Well, hello there',
                    content:
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                },
                {
                    title: 'Well, hello there',
                    content:
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                },
            ];
            const wrapper = mount(<Collapse dataSource={list} />);
            assert(wrapper.find(Panel).length === 2);
        });

        it('should default expand keys passed in `defaultExpandedKeys`', () => {
            const wrapper = mount(
                <Collapse defaultExpandedKeys={[]}>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                    <div>others</div>
                </Collapse>
            );
            assert(wrapper.find(Collapse).length === 1);
            assert(wrapper.find(Panel).length === 2);
        });
    });

    describe('defaultExpandedKeys', () => {
        describe('default mode', () => {
            it('should expand panel with string key', () => {
                const wrapper = mount(
                    <Collapse defaultExpandedKeys={['2']}>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                const el = wrapper.find('.next-collapse-panel').at(2);
                assert(el.hasClass('next-collapse-panel-expanded'));
            });

            it('should expand panel with number key', () => {
                const wrapper = mount(
                    <Collapse defaultExpandedKeys={[2]}>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                const el = wrapper.find('.next-collapse-panel').at(2);
                assert(el.hasClass('next-collapse-panel-expanded'));
            });

            it('should close default expanded string keys', () => {
                const wrapper = mount(
                    <Collapse defaultExpandedKeys={['2']}>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                wrapper.find('.next-collapse-panel-title').at(2).simulate('click');
                assert(wrapper.find('.next-collapse-panel-expanded').length === 0);
            });

            it('should close default expanded number keys', () => {
                const wrapper = mount(
                    <Collapse defaultExpandedKeys={[2]}>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                wrapper.find('.next-collapse-panel-title').at(2).simulate('click');
                assert(wrapper.find('.next-collapse-panel-expanded').length === 0);
            });

            it('should open default expanded datasource using number keys', () => {
                const list = [
                    {
                        title: 'Well, hello there',
                        key: 0,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title: 'Well, hello there',
                        key: 1,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                ];
                const wrapper = mount(<Collapse dataSource={list} defaultExpandedKeys={[1]} />);
                const el = wrapper.find('.next-collapse-panel').at(1);
                assert(el.hasClass('next-collapse-panel-expanded'));
            });

            it('should close default expanded datasource using number keys on click', () => {
                const list = [
                    {
                        title: 'Well, hello there',
                        key: 0,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title: 'Well, hello there',
                        key: 1,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                ];
                const wrapper = mount(<Collapse dataSource={list} defaultExpandedKeys={[1]} />);
                wrapper.find('.next-collapse-panel-title').at(1).simulate('click');
                assert(wrapper.find('.next-collapse-panel-expanded').length === 0);
            });
        });

        describe('accordian mode', () => {
            it('should expand panel with string key', () => {
                const wrapper = mount(
                    <Collapse defaultExpandedKeys={['2']} accordion>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                const el = wrapper.find('.next-collapse-panel').at(2);
                assert(el.hasClass('next-collapse-panel-expanded'));
            });

            it('should expand panel with number key', () => {
                const wrapper = mount(
                    <Collapse defaultExpandedKeys={[2]} accordion>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                const el = wrapper.find('.next-collapse-panel').at(2);
                assert(el.hasClass('next-collapse-panel-expanded'));
            });

            it('should close default expanded string keys', () => {
                const wrapper = mount(
                    <Collapse defaultExpandedKeys={['2']} accordion>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                wrapper.find('.next-collapse-panel-title').at(2).simulate('click');
                assert(wrapper.find('.next-collapse-panel-expanded').length === 0);
            });

            it('should close default expanded number keys', () => {
                const wrapper = mount(
                    <Collapse defaultExpandedKeys={[2]} accordion>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                wrapper.find('.next-collapse-panel-title').at(2).simulate('click');
                assert(wrapper.find('.next-collapse-panel-expanded').length === 0);
            });

            it('should open default expanded datasource using number keys', () => {
                const list = [
                    {
                        title: 'Well, hello there',
                        key: 0,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title: 'Well, hello there',
                        key: 1,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                ];
                const wrapper = mount(
                    <Collapse dataSource={list} defaultExpandedKeys={[1]} accordion />
                );
                const el = wrapper.find('.next-collapse-panel').at(1);
                assert(el.hasClass('next-collapse-panel-expanded'));
            });

            it('should close default expanded datasource using number keys on click', () => {
                const list = [
                    {
                        title: 'Well, hello there',
                        key: 0,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title: 'Well, hello there',
                        key: 1,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                ];
                const wrapper = mount(
                    <Collapse dataSource={list} defaultExpandedKeys={[1]} accordion />
                );
                wrapper.find('.next-collapse-panel-title').at(1).simulate('click');
                assert(wrapper.find('.next-collapse-panel-expanded').length === 0);
            });
        });
    });

    describe('event', () => {
        it('Should expanded by click', () => {
            const collapse = (
                <Collapse>
                    <Panel title="Pannel Title1">Pannel Content1</Panel>
                    <Panel title="Pannel Title2">Pannel Content2</Panel>
                    <Panel title="Pannel Title3">Pannel Content3</Panel>
                </Collapse>
            );
            const wrapper = mount(collapse);

            wrapper.find('.next-collapse-panel-title').first().simulate('click');
            assert(wrapper.find('.next-collapse-panel-expanded').length === 1);
            wrapper.find('.next-collapse-panel-title').at(1).simulate('click');
            assert(wrapper.find('.next-collapse-panel-expanded').length === 2);
            wrapper.find('.next-collapse-panel-title').at(1).simulate('click');
            assert(wrapper.find('.next-collapse-panel-expanded').length === 1);
        });

        it('Should expanded by space key', () => {
            const collapse = (
                <Collapse id="test-id">
                    <Panel title="Pannel Title1">Pannel Content1</Panel>
                    <Panel title="Pannel Title2">Pannel Content2</Panel>
                    <Panel title="Pannel Title3">Pannel Content3</Panel>
                </Collapse>
            );
            const wrapper = mount(collapse);

            wrapper.find('.next-collapse-panel-title').first().simulate('keyDown', { keyCode: 32 });
            assert(wrapper.find('.next-collapse-panel-expanded').length === 1);
            wrapper.find('.next-collapse-panel-title').at(1).simulate('keyDown', { keyCode: 32 });
            assert(wrapper.find('.next-collapse-panel-expanded').length === 2);
            wrapper.find('.next-collapse-panel-title').at(1).simulate('keyDown', { keyCode: 32 });
            assert(wrapper.find('.next-collapse-panel-expanded').length === 1);
        });
        it('should support accordion', () => {
            const collapse = (
                <Collapse accordion>
                    <Panel title="Pannel Title1">Pannel Content1</Panel>
                    <Panel title="Pannel Title2">Pannel Content2</Panel>
                    <Panel title="Pannel Title3">Pannel Content3</Panel>
                </Collapse>
            );
            const wrapper = mount(collapse);
            wrapper.find('.next-collapse-panel-title').first().simulate('click');
            assert(wrapper.find('.next-collapse-panel-expanded').length === 1);
            wrapper.find('.next-collapse-panel-title').at(1).simulate('click');
            assert(wrapper.find('.next-collapse-panel-expanded').length === 1);
            wrapper.find('.next-collapse-panel-title').at(2).simulate('click');
            assert(wrapper.find('.next-collapse-panel-expanded').length === 1);
        });

        it('disabled', () => {
            const collapse = (
                <Collapse disabled>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                </Collapse>
            );
            const wrapper = mount(collapse);
            wrapper.find('.next-collapse-panel-title').first().simulate('click'); //模拟点击
            assert(wrapper.find('.next-collapse-panel-expanded').length === 0);
        });

        it('[onExpand] Call when the trigger', () => {
            const onExpand = sinon.spy();

            const collapse = (
                <Collapse onExpand={onExpand}>
                    <Panel title="Pannel Title1">Pannel Content1</Panel>
                    <Panel title="Pannel Title2">Pannel Content2</Panel>
                </Collapse>
            );
            const wrapper = mount(collapse);
            wrapper.find('.next-collapse-panel-title').first().simulate('click'); //模拟点击

            assert(onExpand.calledOnce);
        });

        it('under Control', () => {
            const collapse = (
                <Collapse expandedKeys={['1']}>
                    <Panel title="Pannel Title1">Pannel Content1</Panel>
                    <Panel title="Pannel Title2">Pannel Content2</Panel>
                </Collapse>
            );
            const wrapper = mount(collapse);
            wrapper.find('.next-collapse-panel-title').first().simulate('click'); //模拟点击

            assert(wrapper.find('.next-collapse-panel-expanded').length === 1);
        });
    });
    describe('react api', () => {
        it('calls componentWillReceiveProps', done => {
            const collapse = (
                <Collapse>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                </Collapse>
            );
            const wrapper = mount(collapse);

            wrapper.setProps({ expandedKeys: ['0'] });
            assert(wrapper.find('.next-collapse-panel-expanded').length === 1);
            done();
        });
    });
    describe('panel', () => {
        it('id should be auto add', done => {
            const collapse = (
                <Collapse>
                    <Panel id="test-id-1" title="Pannel Title">
                        Pannel Content
                    </Panel>
                </Collapse>
            );
            const wrapper = mount(collapse);
            assert(wrapper.find('#test-id-1-heading').length === 1);
            assert(wrapper.find('#test-id-1-region').length === 1);
            done();
        });
        it('all id should be auto add', done => {
            const collapse = (
                <Collapse id="test-id-2">
                    <Panel title="Pannel Title 1">Pannel Content</Panel>
                    <Panel title="Pannel Title 2">Pannel Content</Panel>
                </Collapse>
            );
            const wrapper = mount(collapse);

            assert(wrapper.find('.next-collapse#test-id-2').length === 1);
            const panels = wrapper.find('.next-collapse-panel');
            assert(panels.length === 2);
            assert(panels.at(0).getDOMNode().id);
            assert(panels.at(1).getDOMNode().id);
            done();
        });
    });
});
