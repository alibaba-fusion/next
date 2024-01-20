import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import cloneDeep from 'lodash.clonedeep';
import { KEYCODE } from '../../util';
import Cascader from '../index';
import '../style';

/* eslint-disable react/jsx-filename-extension, no-unused-expressions  */
/* global describe it afterEach */

Enzyme.configure({ adapter: new Adapter() });

function freeze(dataSource) {
    return dataSource.map(item => {
        const { children } = item;
        children && freeze(children);
        return Object.freeze({ ...item });
    });
}

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

describe('Cascader', () => {
    let wrapper;

    afterEach(() => {
        const overlay = document.querySelectorAll('.next-overlay-wrapper');
        overlay.forEach(dom => {
            document.body.removeChild(dom);
        });
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should render single cascader', () => {
        const defaultValue = '2975';
        const defaultExpandedValue = ['2973', '2974'];
        let changeCalled = false;
        let expandCalled = false;
        const handleChange = (v, d, e) => {
            changeCalled = true;
            assert(v === '2980');
            delete d.children;
            delete d._source;
            assert.deepEqual(d, {
                value: '2980',
                label: '铜川',
                pos: '0-0-1',
            });
            e.selectedPath.forEach(d => {
                delete d.children;
                delete d._source;
            });
            assert.deepEqual(e, {
                selectedPath: [
                    {
                        value: '2973',
                        label: '陕西',
                        pos: '0-0',
                    },
                    {
                        value: '2980',
                        label: '铜川',
                        pos: '0-0-1',
                    },
                ],
            });
        };
        const handleExpand = ev => {
            expandCalled = true;
            assert.deepEqual(ev, ['2973', '2980']);
        };
        wrapper = mount(
            <Cascader
                defaultValue={defaultValue}
                defaultExpandedValue={defaultExpandedValue}
                dataSource={ChinaArea}
                onChange={handleChange}
                onExpand={handleExpand}
            />
        );
        compareDOMAndData(wrapper, defaultValue, defaultExpandedValue);

        findItem(wrapper, 1, 1).simulate('click');
        compareDOMAndData(wrapper, '2980', ['2973', '2980']);
        assert(changeCalled);
        assert(expandCalled);
    });

    it('should render single cascader under control', () => {
        let value = '2975';
        let expandedValue = ['2973', '2974'];
        let changeCalled = false;
        let expandCalled = false;
        const handleChange = (v, d, e) => {
            changeCalled = true;
            assert(v === '2980');
            delete d.children;
            delete d._source;
            assert.deepEqual(d, {
                value: '2980',
                label: '铜川',
                pos: '0-0-1',
            });
            e.selectedPath.forEach(d => {
                delete d.children;
                delete d._source;
            });
            assert.deepEqual(e, {
                selectedPath: [
                    {
                        value: '2973',
                        label: '陕西',
                        pos: '0-0',
                    },
                    {
                        value: '2980',
                        label: '铜川',
                        pos: '0-0-1',
                    },
                ],
            });
            value = v;
            wrapper.setProps({ value });
        };
        const handleExpand = ev => {
            expandCalled = true;
            assert.deepEqual(ev, ['2973', '2980']);

            expandedValue = ev;
            wrapper.setProps({ value, expandedValue });
        };
        wrapper = mount(
            <Cascader
                defaultValue="2973"
                defaultExpandedValue={['2973']}
                value={value}
                expandedValue={expandedValue}
                onChange={handleChange}
                onExpand={handleExpand}
            />
        );
        compareDOMAndData(wrapper, value, expandedValue);

        wrapper.setProps({ dataSource: ChinaArea });

        findItem(wrapper, 1, 1).simulate('click');
        compareDOMAndData(wrapper, value, expandedValue);
        assert(changeCalled);
        assert(expandCalled);

        wrapper.setProps({
            defaultValue: '2974',
            defaultExpandedValue: ['2973', '2974'],
        });
        compareDOMAndData(wrapper, value, expandedValue);
    });

    it('should not trigger onChange when click the selected item', () => {
        const handleChange = () => {
            assert(false);
        };
        wrapper = mount(
            <Cascader
                defaultValue="2980"
                defaultExpandedValue={['2973', '2980']}
                dataSource={ChinaArea}
                onChange={handleChange}
            />
        );
        findItem(wrapper, 1, 1).simulate('click');
    });

    it('should support remove title', () => {
        const data = cloneDeep(ChinaArea);

        data[0].title = '';

        wrapper = mount(<Cascader dataSource={data} />);
        assert(wrapper.find('.next-menu-item').at(0).getDOMNode().getAttribute('title') === '');
        assert(wrapper.find('.next-menu-item').at(1).getDOMNode().getAttribute('title') === '四川');
        delete data[0].title;
    });

    it('could only select leaf item when set canOnlySelectLeaf to true', () => {
        const handleChange = () => {
            assert(false);
        };
        wrapper = mount(
            <Cascader
                defaultExpandedValue={['2973', '2974']}
                canOnlySelectLeaf
                dataSource={ChinaArea}
                onChange={handleChange}
            />
        );
        findItem(wrapper, 1, 1).simulate('click');
    });

    it('could only check checkbox of leaf item when set canOnlyCheckLeaf to true', () => {
        wrapper = mount(
            <Cascader
                multiple
                defaultExpandedValue={['2973', '2974']}
                canOnlyCheckLeaf
                dataSource={ChinaArea}
            />
        );
        assert(findItem(wrapper, 0, 0).find('label.next-checkbox').length === 0);
    });

    it('should expand menu by hover when set expandTriggerType to hover', () => {
        let expandedValue;
        let expandCalled = false;
        const handleExpand = value => {
            expandCalled = true;
            assert.deepEqual(expandedValue, value);
        };
        wrapper = mount(
            <Cascader
                defaultValue="2975"
                defaultExpandedValue={['2973', '2974']}
                expandTriggerType="hover"
                dataSource={ChinaArea}
                onExpand={handleExpand}
            />
        );
        expandedValue = ['2973', '2980'];
        findItem(wrapper, 1, 1).simulate('mouseenter');
        assert(expandCalled);
        expandCalled = false;

        expandedValue = ['2973', '2974'];
        wrapper.simulate('mouseleave');
        assert(expandCalled);
        expandCalled = false;
    });

    it('should render multiple cascader', done => {
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
        let value;
        let data;
        let extra;
        const handleChange = (v, d, e) => {
            d = filter$Source(d);
            const item = {
                ...e.currentData,
            };
            delete item._source;
            delete item.children;
            e = {
                ...e,
                currentData: item,
                checkedData: filter$Source(e.checkedData),
                indeterminateData: filter$Source(e.indeterminateData),
            };
            assert.deepEqual(value, sortByValue(v, true));
            assert.deepEqual(data, sortByValue(d));
            e.checkedData = sortByValue(e.checkedData);
            e.indeterminateData = sortByValue(e.indeterminateData);
            assert.deepEqual(extra, e);
            changeCalled = true;
        };
        wrapper = mount(
            <Cascader
                multiple
                defaultValue={['2975']}
                defaultExpandedValue={['2973', '2974']}
                dataSource={dataSource}
                onChange={handleChange}
            />
        );

        const item00 = findItem(wrapper, 0, 0);
        const item10 = findItem(wrapper, 1, 0);
        const item20 = findItem(wrapper, 2, 0);
        compareIndeterminate(item00);
        compareIndeterminate(item10);
        compareChecked(item20);

        (value = ['2973']), (data = [{ value: '2973', label: '陕西', pos: '0-0' }]);
        extra = {
            checked: true,
            currentData: { value: '2973', label: '陕西', pos: '0-0' },
            checkedData: [
                { value: '2973', label: '陕西', pos: '0-0' },
                { value: '2974', label: '西安', pos: '0-0-0' },
                { value: '2975', label: '西安市', pos: '0-0-0-0' },
                { value: '2976', label: '高陵县', pos: '0-0-0-1' },
                { value: '2980', label: '铜川', pos: '0-0-1' },
            ],
            indeterminateData: [],
        };
        checkItem(item00, true);
        compareChecked(findItem(wrapper, 0, 0));
        findItem(wrapper, 1).forEach(compareChecked);
        findItem(wrapper, 2).forEach(compareChecked);
        assert(changeCalled);
        changeCalled = false;

        setTimeout(() => {
            (value = ['2980']), (data = [{ value: '2980', label: '铜川', pos: '0-0-1' }]);
            extra = {
                checked: false,
                currentData: { value: '2974', label: '西安', pos: '0-0-0' },
                checkedData: [{ value: '2980', label: '铜川', pos: '0-0-1' }],
                indeterminateData: [{ value: '2973', label: '陕西', pos: '0-0' }],
            };
            checkItem(findItem(wrapper, 1, 0), false);
            compareIndeterminate(findItem(wrapper, 0, 0));
            compareNotChecked(findItem(wrapper, 1, 0));
            findItem(wrapper, 2).forEach(compareNotChecked);
            assert(changeCalled);
            done();
        }, 20);
    });

    it('should render multiple cascader when set checkStrictly to true', () => {
        let changeCalled = false;
        let value;
        let data;
        let extra;
        const handleChange = (v, d, e) => {
            d.forEach(d => delete d._source);
            e.checkedData.forEach(d => delete d._source);
            delete e.currentData._source;
            assert.deepEqual(value, sortByValue(v, true));
            assert.deepEqual(data, sortByValue(d));
            e.checkedData = sortByValue(e.checkedData);
            assert.deepEqual(extra, e);
            changeCalled = true;
        };
        wrapper = mount(
            <Cascader
                checkStrictly
                multiple
                defaultValue={['2975']}
                defaultExpandedValue={['2973', '2974']}
                dataSource={ChinaArea}
                onChange={handleChange}
            />
        );

        const item00 = findItem(wrapper, 0, 0);
        const item20 = findItem(wrapper, 2, 0);
        compareChecked(item20);

        (value = ['2973', '2975']),
            (data = [
                { value: '2973', label: '陕西', pos: '0-0' },
                { value: '2975', label: '西安市', pos: '0-0-0-0' },
            ]);
        extra = {
            checked: true,
            currentData: { value: '2973', label: '陕西', pos: '0-0' },
            checkedData: [
                { value: '2973', label: '陕西', pos: '0-0' },
                { value: '2975', label: '西安市', pos: '0-0-0-0' },
            ],
        };
        checkItem(item00, true);
        compareChecked(findItem(wrapper, 0, 0));
        assert(changeCalled);
        changeCalled = false;

        (value = ['2973']), (data = [{ value: '2973', label: '陕西', pos: '0-0' }]);
        extra = {
            checked: false,
            currentData: { value: '2975', label: '西安市', pos: '0-0-0-0' },
            checkedData: [{ value: '2973', label: '陕西', pos: '0-0' }],
        };
        checkItem(findItem(wrapper, 2, 0), false);
        compareNotChecked(findItem(wrapper, 2, 0));
        assert(changeCalled);
    });

    it('should compute expanded value auto if set value but not set expanded value', () => {
        wrapper = mount(<Cascader defaultValue={['2975']} dataSource={ChinaArea} />);
        const item00 = findItem(wrapper, 0, 0);
        assert(item00.hasClass('next-cascader-menu-item'));
        const item10 = findItem(wrapper, 1, 0);
        assert(item10.hasClass('next-cascader-menu-item'));
    });

    it('should load data asynchronously when set loadData', done => {
        const newWrapper = mount(
            <Cascader
                dataSource={[
                    {
                        value: '2973',
                        label: '陕西',
                        isLeaf: false,
                    },
                ]}
                loadData={onLoadData}
            />
        );

        function onLoadData() {
            return new Promise(resolve => {
                setTimeout(() => {
                    newWrapper.setProps(
                        {
                            dataSource: [
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
                                                    isLeaf: true,
                                                },
                                                {
                                                    value: '2976',
                                                    label: '高陵县',
                                                    isLeaf: true,
                                                },
                                            ],
                                        },
                                        {
                                            value: '2980',
                                            label: '铜川',
                                            children: [
                                                {
                                                    value: '2981',
                                                    label: '铜川市',
                                                    isLeaf: true,
                                                },
                                                {
                                                    value: '2982',
                                                    label: '宜君县',
                                                    isLeaf: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        resolve
                    );
                }, 500);
            });
        }

        const item00 = findItem(newWrapper, 0, 0);
        item00.simulate('click');
        assert(findItem(newWrapper, 0, 0).find('.next-cascader-menu-icon-loading').length > 0);

        setTimeout(() => {
            assert(findItem(newWrapper, 1, 0).text().trim() === '西安');
            assert(findItem(newWrapper, 1, 1).text().trim() === '铜川');
            done();
        }, 1000);
    });

    it('should support listClassName and listStyle', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(
            <Cascader
                dataSource={ChinaArea}
                listStyle={{ width: '400px', height: '400px' }}
                listClassName="custom"
            />,
            div
        );

        const list = div.querySelector('.next-cascader-menu-wrapper');
        assert(list.style.width === '400px');
        assert(list.style.height === '400px');
        assert(
            window.getComputedStyle(list.querySelector('.next-cascader-menu')).width === '400px'
        );
        assert(
            window.getComputedStyle(list.querySelector('.next-cascader-menu')).height === '400px'
        );
        assert(list.className.indexOf('custom') !== -1);

        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('should support keyboard', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(<Cascader dataSource={ChinaArea} />, div);

        const item00 = findRealItem(0, 0);
        item00.click();
        try {
            assert(document.activeElement === item00);
            const assertAE = assertActiveElement();
            assertAE(KEYCODE.DOWN, findRealItem(0, 1));
            assertAE(KEYCODE.UP, item00);
            assertAE(KEYCODE.RIGHT, () => findRealItem(1, 0));
            assertAE(KEYCODE.LEFT, item00);
            assert(document.querySelectorAll('.next-cascader-menu').length === 1);

            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        } catch (err) {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
            throw new Error(err);
        }
    });

    it('should set the style of the cascader inner node', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(
            <Cascader
                id="cascader-style"
                defaultValue={['2975']}
                dataSource={ChinaArea}
                style={{ width: '700px' }}
                listStyle={{ width: '200px' }}
            />,
            div
        );

        const inner = document.querySelector('#cascader-style .next-cascader-inner');
        assert(inner.style.width === '600px');
        const lists = document.querySelectorAll('.next-cascader-menu-wrapper');
        assert(lists[lists.length - 1].className.indexOf('next-has-right-border') > -1);

        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('support immutable data source', () => {
        wrapper = mount(<Cascader id="cascader-style" dataSource={freeze(ChinaArea)} immutable />);
    });

    it('should support rtl', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(
            <Cascader
                id="cascader-style"
                rtl
                defaultValue={['2975']}
                dataSource={ChinaArea}
                style={{ width: '700px' }}
                listStyle={{ width: '200px' }}
            />,
            div
        );

        assert(document.getElementById('cascader-style').dir === 'rtl');
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    // Fix https://github.com/alibaba-fusion/next/issues/4472
    it('Empty items at first level can collapse the next level panel while cross value', () => {
        const dataSource = [
            {
                label: '1',
                value: '1',
            },
            {
                label: '2',
                value: '2',
                children: [
                    {
                        label: '2_1',
                        value: '2_1',
                    },
                ],
            },
        ];
        const wrapper = mount(<Cascader value={['2_1']} multiple dataSource={dataSource} />);
        assert(wrapper.find('.next-cascader-menu-wrapper').length === 2);
        const el = wrapper.find('.next-menu-item[title="1"]').getDOMNode();
        assert(el);
        ReactTestUtils.Simulate.click(el);
        wrapper.update();
        assert(wrapper.find('.next-cascader-menu-wrapper').length === 1);
    });
});

function compareDOMAndData(wrapper, value, expandedValue) {
    let itemsData = ChinaArea;
    const menus = wrapper.find('ul.next-cascader-menu');
    menus.forEach((menu, i) => {
        let expandedIndex;
        menu.find('li.next-cascader-menu-item').forEach((item, j) => {
            assert(item.text().trim() === itemsData[j].label);
            if (itemsData[j].value === value) {
                assert(item.find('li.next-selected').length === 1);
            }
            if (itemsData[j].value === expandedValue[i]) {
                assert(item.hasClass('next-expanded'));
                expandedIndex = j;
            }
        });

        if (i < menus.length - 1) {
            itemsData = itemsData[expandedIndex].children;
        }
    });
}

function findItem(wrapper, menuIndex, itemIndex) {
    return wrapper
        .find('ul.next-cascader-menu')
        .at(menuIndex)
        .find('li.next-cascader-menu-item')
        .at(itemIndex);
}

function checkItem(item, check) {
    const checkbox = item.find('.next-checkbox-wrapper input');
    checkbox.simulate('change', { target: { checked: check } });
}

function compareChecked(item) {
    const checkbox = item.find('.next-checkbox-wrapper');
    assert(checkbox.hasClass('checked'));
    assert(!checkbox.hasClass('indeterminate'));
}

function compareIndeterminate(item) {
    const checkbox = item.find('.next-checkbox-wrapper');
    assert(checkbox.hasClass('indeterminate'));
    assert(!checkbox.hasClass('checked'));
}

function compareNotChecked(item) {
    const checkbox = item.find('.next-checkbox-wrapper');
    assert(!checkbox.hasClass('indeterminate'));
    assert(!checkbox.hasClass('checked'));
}

function sortByValue(data, isValue = false) {
    if (!isValue) {
        data.forEach(d => delete d.children);
    }

    return data.sort((prev, next) => {
        if (isValue) {
            return prev - next;
        }

        return prev.value - next.value;
    });
}

function assertActiveElement() {
    let activeElement = document.activeElement;

    return (keyCode, next) => {
        ReactTestUtils.Simulate.keyDown(activeElement, { keyCode });
        next = typeof next === 'function' ? next() : next;
        assert(document.activeElement === next);
        activeElement = next;
    };
}

function findRealItem(listIndex, itemIndex) {
    return document
        .querySelectorAll('.next-cascader-menu')
        [listIndex].querySelectorAll('.next-cascader-menu-item')[itemIndex];
}

function filter$Source(data) {
    if (!data) return;

    return [...data].map(it => {
        const item = {
            ...it,
        };
        delete item._source;
        return item;
    });
}
