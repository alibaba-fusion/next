import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import { KEYCODE } from '../../src/util';
import CascaderSelect from '../../src/cascader-select';
import '../../src/cascader-select/style.js';

/* eslint-disable react/jsx-filename-extension  */
/* global describe it afterEach */

Enzyme.configure({ adapter: new Adapter() });

const ChinaArea = [
    {
        value: '2973',
        label: '陕西',
        children: [
            {
                value: '2974',
                label: '西安',
                children: [
                    { value: '2975', label: '西安市' },
                    { value: '2976', label: '高陵县' },
                ],
            },
            {
                value: '2980',
                label: '铜川',
                children: [
                    { value: '2981', label: '铜川市' },
                    { value: '2982', label: '宜君县' },
                ],
            },
        ],
    },
    {
        value: '3078',
        label: '四川',
    },
];

describe('CascaderSelect', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should show dropdown when set defaultVisible to true', () => {
        wrapper = mount(
            <CascaderSelect dataSource={ChinaArea} defaultVisible />
        );
        assert(document.querySelector('.next-cascader-select-dropdown'));
    });

    it('should show dropdown when click select box', done => {
        wrapper = mount(<CascaderSelect dataSource={ChinaArea} />);
        assert(!document.querySelector('.next-cascader-select-dropdown'));
        wrapper.find('.next-select').simulate('click');
        setTimeout(() => {
            assert(document.querySelector('.next-cascader-select-dropdown'));
            done();
        }, 500);
    });

    it('should render single cascader select', () => {
        let changeCalled = false;
        const handleChange = () => {
            changeCalled = true;
        };

        wrapper = mount(
            <CascaderSelect
                defaultVisible
                defaultValue="2975"
                dataSource={ChinaArea}
                onChange={handleChange}
            />
        );
        assert(
            wrapper
                .find('span.next-select-inner em')
                .text()
                .trim() === '陕西 / 西安 / 西安市'
        );

        const item21 = findItem(2, 1);
        ReactTestUtils.Simulate.click(item21);
        assert(changeCalled);
        assert(
            wrapper
                .find('span.next-select-inner em')
                .text()
                .trim() === '陕西 / 西安 / 高陵县'
        );
        wrapper.setProps({ displayRender: label => label.join('-') });
        assert(
            wrapper
                .find('span.next-select-inner em')
                .text()
                .trim() === '陕西-西安-高陵县'
        );
    });

    it('should render single cascader under control', () => {
        let changeCalled = false;
        const handleChange = value => {
            changeCalled = true;
            wrapper.setProps({ value });
        };

        wrapper = mount(
            <CascaderSelect
                defaultVisible
                defaultValue="2976"
                value="2975"
                dataSource={ChinaArea}
                onChange={handleChange}
            />
        );
        assert(
            wrapper
                .find('span.next-select-inner em')
                .text()
                .trim() === '陕西 / 西安 / 西安市'
        );

        const item21 = findItem(2, 1);
        ReactTestUtils.Simulate.click(item21);
        assert(changeCalled);
        assert(
            wrapper
                .find('span.next-select-inner em')
                .text()
                .trim() === '陕西 / 西安 / 高陵县'
        );
    });

    it('should change select box display when expand item if set changeOnSelect to true', () => {
        wrapper = mount(
            <CascaderSelect
                changeOnSelect
                defaultVisible
                dataSource={ChinaArea}
            />
        );

        const item00 = findItem(0, 0);
        ReactTestUtils.Simulate.click(item00);
        wrapper.update();
        assert(
            wrapper
                .find('span.next-select-inner em')
                .text()
                .trim() === '陕西'
        );

        const item10 = findItem(1, 0);
        ReactTestUtils.Simulate.click(item10);
        wrapper.update();
        assert(
            wrapper
                .find('span.next-select-inner em')
                .text()
                .trim() === '陕西 / 西安'
        );

        const item20 = findItem(2, 0);
        ReactTestUtils.Simulate.click(item20);
        wrapper.update();
        assert(
            wrapper
                .find('span.next-select-inner em')
                .text()
                .trim() === '陕西 / 西安 / 西安市'
        );
    });

    it('should render multiple cascader', () => {
        const dataSource = [
            {
                value: '2973',
                label: '陕西',
                children: [
                    {
                        value: '2974',
                        label: '西安',
                        children: [
                            {
                                value: '2975',
                                label: '西安市',
                            },
                            {
                                value: '2976',
                                label: '高陵县',
                            },
                        ],
                    },
                    {
                        value: '2980',
                        label: '铜川',
                    },
                ],
            },
        ];
        let changeCalled = false;
        const handleChange = (v, d, e) => {
            assert.deepEqual(v, ['2980']);
            assert.deepEqual(d, [
                {
                    value: '2980',
                    label: '铜川',
                    pos: '0-0-1',
                },
            ]);
            delete e.indeterminateData[0].children;
            assert.deepEqual(e, {
                checked: false,
                currentData: { value: '2975', label: '西安市', pos: '0-0-0-0' },
                checkedData: [{ value: '2980', label: '铜川', pos: '0-0-1' }],
                indeterminateData: [
                    { value: '2973', label: '陕西', pos: '0-0' },
                ],
            });
            changeCalled = true;
        };

        wrapper = mount(
            <CascaderSelect
                multiple
                defaultVisible
                defaultValue={['2975', '2980']}
                dataSource={dataSource}
                onChange={handleChange}
            />
        );
        assert.deepEqual(getLabels(wrapper), ['铜川', '西安市']);

        const removeLink = wrapper.find('span.next-tag-close-btn').at(1);
        removeLink.simulate('click');
        assert.deepEqual(getLabels(wrapper), ['铜川']);
        assert(changeCalled);

        wrapper.setProps({
            displayRender: labelPath => labelPath.join(' / '),
        });
        assert.deepEqual(getLabels(wrapper), ['陕西 / 铜川']);
    });

    it('should render multiple cascader when set checkStrictly to true', () => {
        const dataSource = [
            {
                value: '2973',
                label: '陕西',
                children: [
                    {
                        value: '2974',
                        label: '西安',
                        children: [
                            {
                                value: '2975',
                                label: '西安市',
                            },
                            {
                                value: '2976',
                                label: '高陵县',
                            },
                        ],
                    },
                    {
                        value: '2980',
                        label: '铜川',
                    },
                ],
            },
        ];
        let changeCalled = false;
        const handleChange = (v, d, e) => {
            assert.deepEqual(v, ['2980']);
            assert.deepEqual(d, [
                {
                    value: '2980',
                    label: '铜川',
                    pos: '0-0-1',
                },
            ]);
            assert.deepEqual(e, {
                checked: false,
                currentData: { value: '2975', label: '西安市', pos: '0-0-0-0' },
                checkedData: [{ value: '2980', label: '铜川', pos: '0-0-1' }],
            });
            changeCalled = true;
        };
        const wrapper = mount(
            <CascaderSelect
                multiple
                defaultVisible
                checkStrictly
                defaultValue={['2975', '2980']}
                dataSource={dataSource}
                onChange={handleChange}
            />
        );
        assert.deepEqual(getLabels(wrapper), ['西安市', '铜川']);

        const removeLink = wrapper.find('span.next-tag-close-btn').at(0);
        removeLink.simulate('click');
        assert.deepEqual(getLabels(wrapper), ['铜川']);
        assert(changeCalled);
    });

    it('should support searching when it is a single cascader select', () => {
        wrapper = mount(
            <CascaderSelect
                showSearch
                defaultVisible
                defaultValue="2975"
                dataSource={ChinaArea}
            />
        );
        wrapper
            .find('.next-select-trigger-search input')
            .simulate('change', { target: { value: '哈哈' } });
        wrapper.update();
        assert(
            document
                .querySelector('.next-cascader-select-not-found')
                .textContent.trim() === 'Not Found'
        );

        wrapper
            .find('.next-select-trigger-search input')
            .simulate('change', { target: { value: '高陵' } });
        wrapper.update();
        assert(
            document
                .querySelector('.next-cascader-filtered-list')
                .textContent.trim() === '陕西 / 西安 / 高陵县'
        );
        assert(
            document
                .querySelector('.next-cascader-filtered-list em')
                .textContent.trim() === '高陵'
        );

        ReactTestUtils.Simulate.click(
            document.querySelector('.next-cascader-filtered-item')
        );
        wrapper.update();
        assert(
            wrapper
                .find('span.next-select-inner em')
                .text()
                .trim() === '陕西 / 西安 / 高陵县'
        );
    });

    it('should support searching when it is a multiple cascader select', () => {
        wrapper = mount(
            <CascaderSelect
                multiple
                showSearch
                defaultVisible
                defaultValue="2975"
                dataSource={ChinaArea}
            />
        );
        wrapper
            .find('.next-select-trigger-search input')
            .simulate('change', { target: { value: '哈哈' } });
        wrapper.update();
        assert(
            document
                .querySelector('.next-cascader-select-not-found')
                .textContent.trim() === 'Not Found'
        );

        wrapper
            .find('.next-select-trigger-search input')
            .simulate('change', { target: { value: '高陵' } });
        wrapper.update();
        assert(
            document
                .querySelector('.next-cascader-filtered-list')
                .textContent.trim() === '陕西 / 西安 / 高陵县'
        );
        assert(
            document
                .querySelector('.next-cascader-filtered-list em')
                .textContent.trim() === '高陵'
        );

        // const checkbox = document.querySelector('.next-cascader-filtered-item input');
        // ReactTestUtils.Simulate.change(checkbox, { target: { checked: true } });
        // wrapper.update();

        // assert.deepEqual(getLabels(wrapper), ['西安市', '高陵县']);
    });

    it('should support keyborad', done => {
        wrapper = mount(<CascaderSelect dataSource={ChinaArea} />);
        wrapper.find('.next-select').simulate('click');
        setTimeout(() => {
            let cascader = document.querySelectorAll('.next-cascader');
            cascader = cascader[cascader.length - 1];
            assert(cascader);
            wrapper
                .find('.next-select-trigger-search input')
                .simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(document.activeElement === findRealItem(cascader, 0, 0));
            done();
        }, 2000);
    });

    it('should support signle value not in dataSource', () => {
        const VALUE = '222333';
        let called = false;
        const valueRender = item => {
            assert(!item.label);
            assert(item.value === VALUE);
            called = true;
        };
        wrapper = mount(
            <CascaderSelect
                dataSource={ChinaArea}
                defaultValue={VALUE}
                valueRender={valueRender}
            />
        );
        assert(called);
    });

    it('should support multiple value not in dataSource', () => {
        const VALUE = '222333';
        let called = false;
        const valueRender = item => {
            assert(!item.label);
            assert(item.value === VALUE);
            called = true;
        };
        wrapper = mount(
            <CascaderSelect
                multiple
                displayRender={(displayPath, item) => item.label || ''}
                dataSource={ChinaArea}
                valueRender={valueRender}
            />
        );
        wrapper.setProps({
            value: VALUE,
        });
        assert(called);
        wrapper.setProps({
            valueRender: item => item.label,
            onChange: value => {
                assert.deepEqual(value, [VALUE, '2973']);
            },
        });
        const item00 = findItem(0, 0);
        ReactTestUtils.Simulate.click(item00);
    });

    it('should support preview mode render', () => {
        const dataSource = [
            {
                value: '2973',
                label: '陕西',
                children: [
                    {
                        value: '2974',
                        label: '西安',
                        children: [
                            {
                                value: '2975',
                                label: '西安市',
                            },
                            {
                                value: '2976',
                                label: '高陵县',
                            },
                        ],
                    },
                    {
                        value: '2980',
                        label: '铜川',
                    },
                ],
            },
        ];

        wrapper = mount(
            <CascaderSelect
                dataSource={dataSource}
                isPreview
                defaultValue={'2975'}
            />
        );
        assert(wrapper.find('.next-form-preview').length > 0);
        assert(
            wrapper.find('.next-form-preview').text() === '陕西 / 西安 / 西安市'
        );
        wrapper.setProps({
            renderPreview: items => {
                assert(items.length === 1);
                assert(items[0].label === '陕西 / 西安 / 西安市');
                return 'Hello World';
            },
        });
        assert(wrapper.find('.next-form-preview').text() === 'Hello World');
    });

    it('should support setting resultAutoWidth to false', done => {
        const width = '120px';
        const container = document.createElement('div');

        document.body.appendChild(container);

        act(() => {
            ReactDOM.render(
                <CascaderSelect
                    popupProps={{ className: 'result-auto-width-popup' }}
                    className="cs-auto-width"
                    style={{ width }}
                    multiple
                    resultAutoWidth={false}
                    showSearch
                    defaultVisible
                    defaultValue="2975"
                    dataSource={ChinaArea}
                />,
                container
            );
        });

        const iptElem = document.querySelector('.cs-auto-width input');

        ReactTestUtils.Simulate.input(iptElem);
        iptElem.value = '杭州';
        ReactTestUtils.Simulate.change(iptElem);

        setTimeout(() => {
            const popEl = document.querySelector('.result-auto-width-popup');

            assert(popEl.style.width === '');

            popEl.remove();
            container.remove();
            done();
        }, 50);
    });

    it('should support expandedValue', () => {
        wrapper = mount(
            <CascaderSelect
                popupProps={{ className: 'myCascaderSelect' }}
                dataSource={ChinaArea}
                expandedValue={['2973', '2974']}
                defaultVisible
            />
        );
        assert(findRealItem(document.querySelector('.myCascaderSelect'), 2, 1));
    });
});

function findItem(menuIndex, itemIndex) {
    return document.querySelectorAll('.next-cascader-menu')[menuIndex].children[
        itemIndex
    ];
}

function getLabels(wrapper) {
    return wrapper.find('span.next-tag-body').map(node => node.text().trim());
}

function findRealItem(cascader, listIndex, itemIndex) {
    return cascader
        .querySelectorAll('.next-cascader-menu')
        [listIndex].querySelectorAll('.next-cascader-menu-item')[itemIndex];
}
