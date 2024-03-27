import React, { useState } from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import { dom, KEYCODE } from '../../util';
import TreeSelect from '../index';
import '../style';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */
/* global describe it beforeEach */

Enzyme.configure({ adapter: new Adapter() });

const TreeNode = TreeSelect.Node;
const { hasClass } = dom;

const dataSource = [
    {
        label: '服装',
        className: 'k-1',
        value: '1',
        children: [
            {
                label: '男装',
                value: '2',
                className: 'k-2',
                disabled: true,
                children: [
                    {
                        label: '外套',
                        className: 'k-4',
                        value: '4',
                    },
                    {
                        label: '夹克',
                        className: 'k-5',
                        value: '5',
                    },
                ],
            },
            {
                label: '女装',
                value: '3',
                className: 'k-3',
                children: [
                    {
                        label: '裙子',
                        className: 'k-6',
                        value: '6',
                    },
                ],
            },
        ],
    },
];

function freeze(dataSource) {
    return Object.freeze([
        ...dataSource.map(item => {
            const { children } = item;
            item.children = children && freeze(children);
            return Object.freeze({ ...item });
        }),
    ]);
}

function cloneData(data, valueMap = {}) {
    const loop = data =>
        data.map(item => {
            let newItem;

            if (item.value in valueMap) {
                newItem = { ...item, ...valueMap[item.value] };
            } else {
                newItem = { ...item };
            }
            if (newItem.children) {
                newItem.children = loop(newItem.children);
            }

            return newItem;
        });

    return loop(data);
}

function flattenData(dataSource) {
    const flattenList = [];
    const drill = data => {
        data.forEach(item => {
            const { children, ...newItem } = item;
            flattenList.push(newItem);
            children && children.length && drill(children);
        });
    };

    drill(dataSource);

    return flattenList;
}

function assertDataAndNodes(dataSource) {
    const labels = Array.prototype.map.call(
        document.querySelectorAll('li.next-tree-node .next-tree-node-label'),
        item => item.textContent
    );

    assert(flattenData(dataSource).every((item, index) => item.label === labels[index]));
}

function findTreeNodeByValue(value, container = document) {
    return container.querySelector(`.k-${value}`);
}

function createMap(data) {
    const map = {};

    const loop = (data, prefix = '0') => {
        data.forEach((item, index) => {
            const { value, label, children, ...rests } = item;
            const pos = `${prefix}-${index}`;
            map[value] = { ...rests, value, label, pos, key: pos };
            if (children && children.length) {
                loop(children, pos);
            }
        })
    }
    loop(data);

    return map;
}

function selectTreeNode(value, container) {
    ReactTestUtils.Simulate.click(findTreeNodeByValue(value, container).querySelector('.next-tree-node-label'));
}

function checkTreeNode(value) {
    const input = findTreeNodeByValue(value).querySelector('.next-checkbox input');
    ReactTestUtils.Simulate.click(input);
}

function assertSelected(value, selected, container) {
    assert(hasClass(findTreeNodeByValue(value, container).querySelector('.next-tree-node-inner'), 'next-selected') === selected);
}

function assertChecked(value, checked) {
    assert(hasClass(findTreeNodeByValue(value).querySelector('.next-checkbox-wrapper'), 'checked') === checked);
}

function getLabels(wrapper) {
    return wrapper.find('span.next-tag-body').map(node => node.text().trim());
}


const _v2n = createMap(dataSource);

describe('TreeSelect', () => {
    let wrapper;

    beforeEach(() => {
        const nodeListArr = [].slice.call(document.querySelectorAll('.next-overlay-wrapper'));

        nodeListArr.forEach(node => {
            node.parentNode.removeChild(node);
        });
    });

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should show dropdown when click select box', done => {
        wrapper = mount(<TreeSelect dataSource={dataSource} />);
        wrapper.find('.next-select').simulate('click');
        setTimeout(() => {
            assert(document.querySelector('.next-tree-select-dropdown'));
            done();
        }, 1000);
    });

    it('should show dropdown when set defaultVisible to true', () => {
        wrapper = mount(<TreeSelect defaultVisible />);
        assert(document.querySelector('.next-tree-select-dropdown'));
    });

    it('should render by loop TreeNode', () => {
        const loop = data =>
            data.map(item => {
                return (
                    <TreeNode key={item.value} {...item}>
                        {item.children ? loop(item.children) : null}
                    </TreeNode>
                );
            });
        wrapper = mount(
            <TreeSelect defaultVisible treeDefaultExpandAll>
                {loop(dataSource)}
            </TreeSelect>
        );
        assertDataAndNodes(dataSource);

        const newDataSource = [...dataSource];
        newDataSource.push({
            label: '鞋',
            value: '7',
        });
        wrapper.setProps({
            children: loop(newDataSource),
        });
        assertDataAndNodes(newDataSource);
    });

    it('should render by dataSource', () => {
        wrapper = mount(<TreeSelect defaultVisible treeDefaultExpandAll dataSource={dataSource} />);
        assertDataAndNodes(dataSource);

        const newDataSource = [...dataSource];
        newDataSource.push({
            label: '鞋',
            value: '7',
        });
        wrapper.setProps({
            dataSource: newDataSource,
        });
        assertDataAndNodes(newDataSource);
    });

    it('should render by defaultValue', () => {
        wrapper = mount(<TreeSelect defaultValue="4" defaultVisible treeDefaultExpandAll dataSource={dataSource} />);
        assertSelected('4', true);

        wrapper.setProps({ defaultValue: '6' });
        wrapper.update();
        assertSelected('6', false);
    });

    it('should render by detail defaultValue', () => {
        wrapper = mount(
            <TreeSelect
                defaultValue={{ label: '外套', value: '4' }}
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
            />
        );
        assertSelected('4', true);

        wrapper.setProps({ defaultValue: { label: '裙子', value: '6' } });
        wrapper.update();
        assertSelected('6', false);
    });

    it('should render by value', () => {
        wrapper = mount(
            <TreeSelect
                defaultValue="4"
                value="6"
                multiple
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
            />
        );
        assertSelected('4', false);
        assertSelected('6', true);

        const newValue = ['4', '6'];
        wrapper.setProps({ value: newValue });
        wrapper.update();
        assertSelected('4', true);
        assertSelected('6', true);
    });

    it('should render by detail value', () => {
        wrapper = mount(
            <TreeSelect
                defaultValue={{ label: '外套', value: '4' }}
                value={{ label: '裙子', value: '6' }}
                multiple
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
            />
        );
        assertSelected('4', false);
        assertSelected('6', true);

        const newValue = [
            { label: '外套', value: '4' },
            { label: '裙子', value: '6' },
        ];
        wrapper.setProps({ value: newValue });
        wrapper.update();
        assertSelected('4', true);
        assertSelected('6', true);
    });

    it('should render by defaultValue when enable treeCheckable', () => {
        wrapper = mount(
            <TreeSelect defaultValue="4" defaultVisible treeCheckable treeDefaultExpandAll dataSource={dataSource} />
        );
        assertChecked('4', true);

        wrapper.setProps({ defaultValue: '6' });
        wrapper.update();
        assertChecked('6', false);
    });

    it('should render by value when enable treeCheckable', () => {
        wrapper = mount(
            <TreeSelect
                defaultValue="4"
                value="6"
                defaultVisible
                treeCheckable
                treeDefaultExpandAll
                dataSource={dataSource}
            />
        );
        assertChecked('4', false);
        assertChecked('6', true);

        const newValue = ['4', '6'];
        wrapper.setProps({ value: newValue });
        wrapper.update();
        assertChecked('4', true);
        assertChecked('6', true);
    });

    it('should trigger onChange and close dropdown when select tree node', done => {
        let triggered = false;
        const expectValue = '4';
        const expectItem = _v2n[expectValue];
        const handleChange = (value, data) => {
            triggered = true;
            assert(value === expectValue);
            assert.deepEqual(data, expectItem);
        };

        wrapper = mount(
            <TreeSelect defaultVisible treeDefaultExpandAll dataSource={dataSource} onChange={handleChange} />
        );
        selectTreeNode(expectValue);
        wrapper.update();
        assert(triggered);

        setTimeout(() => {
            assert(
                !document.querySelector('.next-overlay-wrapper') ||
                    document.querySelector('.next-overlay-wrapper').style.display === 'none'
            );
            done();
        }, 1000);
    });

    it('should not trigger onChange but close dropdown when select selected node', done => {
        let triggered = false;
        const value = '4';
        const handleChange = () => {
            triggered = true;
        };

        wrapper = mount(
            <TreeSelect
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
                value={value}
                onChange={handleChange}
            />
        );
        selectTreeNode(value);
        wrapper.update();
        assert(!triggered);

        setTimeout(() => {
            assert(
                !document.querySelector('.next-overlay-wrapper') ||
                    document.querySelector('.next-overlay-wrapper').style.display === 'none'
            );
            done();
        }, 1000);
    });

    it('should trigger onChange but not close dropdown when select node and enable multiple', done => {
        let triggered = false;
        const initValue = '4';
        const appendValue = '6';
        const expectValue = [initValue, appendValue];
        const handleChange = (value, data) => {
            triggered = true;
            assert.deepEqual(value, expectValue);
            assert.deepEqual(data, expectValue.map(v => _v2n[v]));
        };

        wrapper = mount(
            <TreeSelect
                defaultVisible
                multiple
                treeDefaultExpandAll
                dataSource={dataSource}
                value={initValue}
                onChange={handleChange}
            />
        );
        selectTreeNode(appendValue);
        wrapper.update();
        assert(triggered);

        setTimeout(() => {
            assert(
                document.querySelector('.next-overlay-wrapper') &&
                    document.querySelector('.next-overlay-wrapper').style.display !== 'none'
            );
            done();
        }, 1000);
    });

    it('should trigger onChange when check node', () => {
        let triggered = false;
        const initValue = '4';
        const appendValue = '6';
        const expectValue = ['4', '3'];
        const handleChange = (value, data) => {
            triggered = true;
            assert.deepEqual(value, expectValue);
            assert.deepEqual(data, expectValue.map(v => _v2n[v]));
        };
        wrapper = mount(
            <TreeSelect
                defaultVisible
                treeCheckable
                treeDefaultExpandAll
                dataSource={cloneData(dataSource, {
                    2: { disabled: false },
                })}
                value={initValue}
                onChange={handleChange}
            />
        );
        checkTreeNode(appendValue);
        wrapper.update();
        assert(triggered);
    });

    it('should trigger onChange when check node and enable treeCheckStrictly', () => {
        let triggered = false;
        const appendValue = '6';
        const expectValue = [appendValue];
        const handleChange = (value, data) => {
            triggered = true;
            assert.deepEqual(value, expectValue);
            assert.deepEqual(data, expectValue.map(v => _v2n[v]));
        };

        wrapper = mount(
            <TreeSelect
                defaultVisible
                treeCheckable
                treeCheckStrictly
                treeDefaultExpandAll
                dataSource={dataSource}
                onChange={handleChange}
            />
        );
        checkTreeNode(appendValue);
        wrapper.update();
        assert(triggered);
    });

    it('should render tag when defaultValue [{ label, value}]', () => {
        wrapper = mount(
            <TreeSelect
                defaultValue={[{ label: 'test1', value: '123' }]}
                treeDefaultExpandAll
                treeCheckable
                preserveNonExistentValue
                dataSource={dataSource}
            />
        );

        assert.deepEqual(getLabels(wrapper), ['test1']);
    });

    it('should set parent node checked if all child nodes is checked even treeCheckedStrategy is "child"', () => {
        wrapper = mount(
            <TreeSelect
                defaultVisible
                treeCheckable
                treeDefaultExpandAll
                dataSource={dataSource}
                style={{ width: 200 }}
                treeCheckedStrategy="child"
                value={['6']}
            />
        );

        assertChecked('3', true);
    });

    it('should render parent tag when set treeCheckedStrategy to all', () => {
        wrapper = mount(
            <TreeSelect
                treeCheckable
                dataSource={cloneData(dataSource, {
                    2: { disabled: false },
                })}
                defaultValue={['6']}
                treeCheckedStrategy="parent"
            />
        );
        assert.deepEqual(getLabels(wrapper), ['女装']);
    });

    it('should render child tag when set treeCheckedStrategy to all', () => {
        wrapper = mount(
            <TreeSelect treeCheckable dataSource={dataSource} defaultValue={['6']} treeCheckedStrategy="child" />
        );
        assert.deepEqual(getLabels(wrapper), ['裙子']);
    });

    it('should render all tag when set treeCheckedStrategy to all', () => {
        wrapper = mount(
            <TreeSelect
                defaultVisible
                treeDefaultExpandAll
                treeCheckable
                dataSource={cloneData(dataSource, {
                    2: { disabled: false },
                })}
                defaultValue={['6']}
                treeCheckedStrategy="all"
            />
        );
        assert.deepEqual(getLabels(wrapper), ['女装', '裙子']);

        wrapper
            .find('div.next-tag')
            .at(0)
            .find('.next-icon-close')
            .simulate('click');
        wrapper.update();
        assert.deepEqual(getLabels(wrapper), []);
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

        wrapper = mount(<TreeSelect dataSource={dataSource} isPreview defaultValue={'2975'} />);
        assert(wrapper.find('.next-form-preview').length > 0);
        assert(wrapper.find('.next-form-preview').text() === '西安市');
        wrapper.setProps({
            renderPreview: items => {
                assert(items.length === 1);
                assert(items[0].label === '西安市');
                return 'Hello World';
            },
        });
        assert(wrapper.find('.next-form-preview').text() === 'Hello World');
    });

    it('should trigger onChange when remove tag', () => {
        let triggered = false;
        const value = ['6'];
        const handleChange = (value, data) => {
            triggered = true;
            assert.deepEqual(value, []);
            assert.deepEqual(data, []);
        };

        wrapper = mount(
            <TreeSelect
                defaultVisible
                multiple
                treeDefaultExpandAll
                dataSource={dataSource}
                value={value}
                onChange={handleChange}
            />
        );
        wrapper.find('.next-icon-close').simulate('click');
        wrapper.update();
        assert(triggered);
    });

    it('should support multiple with hasClear', done => {
        wrapper = mount(
            <TreeSelect
                multiple
                hasClear
                dataSource={dataSource}
                value={['yyy', 'abcd']}
                onChange={value => {
                    assert(value === null);
                    done();
                }}
            />
        );

        wrapper.find('i.next-icon-delete-filling').simulate('click');
    });

    it('should trigger onSearch when search some keyword', () => {
        let triggered = false;
        const searchedValue = '外套';
        const handleSearch = value => {
            triggered = true;
            assert(value === searchedValue);
        };

        wrapper = mount(
            <TreeSelect
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
                showSearch
                onSearch={handleSearch}
            />
        );
        wrapper.find('.next-select-trigger-search input').simulate('change', { target: { value: '外套' } });
        wrapper.update();
        assert(triggered);
    });

    it('should hightlight matched node when search some keyword', () => {
        wrapper = mount(
            <TreeSelect defaultVisible treeDefaultExpandAll showSearch>
                <TreeNode label="string" value="string" key="string">
                    <TreeNode
                        label={<i>react-element</i>}
                        value="react-element"
                        key="react-element"
                        className="react-element"
                    />
                </TreeNode>
            </TreeSelect>
        );

        wrapper.find('.next-select-trigger-search input').simulate('change', { target: { value: 'element' } });
        wrapper.update();
        const node = document.querySelector('.react-element');
        assert(hasClass(node, 'next-filtered'));
    });

    it('should ignore case when search', () => {
        const treeData = [
            {
                label: 'Component',
                value: '1',
                selectable: false,
                children: [
                    {
                        label: 'Form',
                        value: '2',
                        children: [
                            {
                                label: 'Input',
                                value: '4',
                            },
                        ],
                    },
                ],
            },
        ];
        wrapper = mount(<TreeSelect defaultVisible dataSource={treeData} treeDefaultExpandAll showSearch />);

        ['INPUT', 'input'].forEach(kw => {
            wrapper.find('.next-select-trigger-search input').simulate('change', { target: { value: kw } });
            wrapper.update();

            const node = document.querySelector('.next-filtered');
            assert(node && node.querySelector('.next-tree-node-label') !== 'Input');
        });
    });

    // https://github.com/alibaba-fusion/next/issues/2029
    it('fix bug after setState onSearch', () => {
        function Demo() {
            const [data, setData] = useState([{ label: 'element', key: '0', className: 'react-element' }]);

            function handleChange() {
                setData([{ label: 'react-element-new', key: '1', className: 'react-element-new' }]);
            }
            return (
                <TreeSelect defaultVisible treeDefaultExpandAll showSearch dataSource={data} onSearch={handleChange} />
            );
        }

        wrapper = mount(<Demo />);

        wrapper.find('.next-select-trigger-search input').simulate('change', { target: { value: 'element' } });
        wrapper.update();

        assert(!hasClass(document.querySelector('.react-element'), 'next-filtered'));
        assert(hasClass(document.querySelector('.react-element-new'), 'next-filtered'));
    });

    it('should only show matched node and its parent node when search some keyword', () => {
        wrapper = mount(<TreeSelect defaultVisible treeDefaultExpandAll dataSource={dataSource} showSearch />);
        wrapper.find('.next-select-trigger-search input').simulate('change', { target: { value: '外套' } });
        wrapper.update();

        const expectTreeData = [
            {
                label: '服装',
                value: '1',
                children: [
                    {
                        label: '男装',
                        value: '2',
                        children: [
                            {
                                label: '外套',
                                value: '4',
                            },
                        ],
                    },
                ],
            },
        ];
        assertDataAndNodes(expectTreeData);

        ['3', '5'].forEach(v => assert(findTreeNodeByValue(v).style.display === 'none'));
    });

    it('should support search well when use virtual', () => {
        const data = cloneData(dataSource);

        data[0].children = data[0].children.concat(
            new Array(100).fill().map((__, index) => {
                index = String(index);
                return {
                    value: index,
                    label: index,
                };
            })
        );
        wrapper = mount(
            <TreeSelect
                defaultVisible
                treeDefaultExpandAll
                dataSource={data}
                showSearch
                style={{ width: 200 }}
                useVirtual
                treeProps={{
                    style: { maxHeight: '100px', overflow: 'auto' },
                }}
            />
        );
        wrapper.find('.next-select-trigger-search input').simulate('change', { target: { value: 77 } });
        wrapper.update();

        const expectTreeData = [
            {
                label: '服装',
                value: '1',
                children: [
                    {
                        label: '77',
                        value: '77',
                    },
                ],
            },
        ];
        assertDataAndNodes(expectTreeData);
    });

    // https://github.com/alibaba-fusion/next/issues/2271
    it('fix search bug when useVirtual', () => {
        const data = cloneData(dataSource);

        data[0].children = data[0].children.concat(
            new Array(100).fill().map((__, index) => {
                index = String(index);
                return {
                    value: index,
                    label: index,
                };
            })
        );
        wrapper = mount(
            <TreeSelect
                defaultVisible
                useVirtual
                treeCheckable
                treeDefaultExpandAll
                dataSource={data}
                showSearch
                style={{ width: 200 }}
                treeProps={{
                    style: { maxHeight: '100px', overflow: 'auto' },
                }}
            />
        );
        wrapper.find('.next-select-trigger-search input').simulate('change', { target: { value: 77 } });

        wrapper.find('.next-tree-node[value="77"] input').simulate('click');
        wrapper.update();

        assert(wrapper.find('.next-tree-node[value="1"] .indeterminate').length);
    });

    it('should render not found if dataSource is empty or there is no search result', () => {
        wrapper = mount(<TreeSelect showSearch defaultVisible dataSource={[]} />);
        assert(document.querySelector('.next-tree-select-not-found').textContent.trim() === 'Not Found');

        wrapper.setProps({ dataSource });
        wrapper.update();
        assert(document.querySelector('.next-tree'));

        wrapper.find('.next-select-trigger-search input').simulate('change', { target: { value: '哈哈' } });
        wrapper.update();
        assert(document.querySelector('.next-tree-select-not-found').textContent.trim() === 'Not Found');
    });

    it('should turn off local search when filterLocal is false', () => {
        wrapper = mount(
            <TreeSelect
                defaultVisible
                filterLocal={false}
                treeDefaultExpandAll
                dataSource={dataSource}
                showSearch
                style={{ width: 200 }}
                useVirtual
                treeProps={{
                    style: { maxHeight: '100px', overflow: 'auto' },
                }}
            />
        );

        wrapper.find('.next-select-trigger-search input').simulate('change', { target: { value: '外套' } });
        wrapper.update();

        assertDataAndNodes(dataSource);
    });

    it('should not clear search value when autoClearSearch is false', () => {
        wrapper = mount(
            <TreeSelect dataSource={dataSource} showSearch autoClearSearch={false} style={{ width: 200 }} />
        );

        wrapper.find('.next-select-trigger-search input').simulate('change', { target: { value: '外套' } });
        wrapper.find('.next-tree-node[value="4"]').simulate('click');
        wrapper.update();

        assert(wrapper.find('.next-select-trigger-search input').prop('value') === '外套');
    });

    it('fix issues use isPreview when value is empty', () => {
        wrapper = mount(<TreeSelect isPreview dataSource={dataSource} />);
        assert(wrapper.find('.next-form-preview').instance().textContent === '');
    });

    it('should support immutable ', () => {
        wrapper = mount(<TreeSelect defaultVisible treeDefaultExpandAll dataSource={freeze(dataSource)} />);
        assertDataAndNodes(dataSource);
    });

    it('should support keyboard', done => {
        wrapper = mount(
            <TreeSelect
                dataSource={cloneData(dataSource, {
                    2: {
                        disabled: false,
                    },
                })}
            />
        );
        wrapper.find('.next-select').simulate('click');

        setTimeout(() => {
            assert(document.querySelector('.next-tree'));
            wrapper.find('.next-select-trigger-search input').simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(
                document.activeElement ===
                    document.querySelectorAll(
                        '.next-tree  > .next-tree-node > .next-tree-node-inner > .next-tree-node-label-wrapper'
                    )[0]
            );
            done();
        }, 2000);
    });

    it('should support single line display', () => {
        wrapper = mount(
            <TreeSelect
                dataSource={dataSource}
                treeCheckable
                treeCheckStrictly
                treeCheckedStrategy="all"
                tagInline
                value={['1', '2', '3']}
            />
        );

        assert(wrapper.find('.next-select-tag-compact').length > 0);
        assert(
            wrapper
                .find('.next-select-tag-compact')
                .text()
                .includes('3/6')
        );
    });

    it('should support valueRender', () => {
        wrapper = mount(
            <TreeSelect
                dataSource={dataSource}
                value={['2']}
                valueRender={(item, paths) => {
                    return paths.map(t => t.label).join('/');
                }}
            />
        );
        assert(wrapper.find('.next-select-values').length > 0);
        assert(
            wrapper
                .find('.next-select-values')
                .text()
                .trim() === '服装/男装'
        );
    });

    describe('should support useDetailValue', () => {
        it('Support dataSource mode', () => {
            const div = document.createElement('div');
            document.body.appendChild(div);
            const handleChange = value => {
                assert(typeof value === 'object');
                assert(value.value === '1');
            };
            const wrapper = mount(
                <TreeSelect
                    followTrigger
                    useDetailValue
                    defaultVisible
                    treeDefaultExpandAll
                    dataSource={dataSource}
                    onChange={handleChange}
                />,
                { attachTo: div }
            );
            selectTreeNode('1', div);
            wrapper.unmount();
        });
        it('Support children mode', () => {
            const div = document.createElement('div');
            document.body.appendChild(div);
            const handleChange = value => {
                assert(typeof value === 'object');
                assert(value.value === '1');
            };
            const wrapper = mount(
                <TreeSelect
                    followTrigger
                    useDetailValue
                    defaultVisible
                    treeDefaultExpandAll
                    onChange={handleChange}
                >
                    <TreeNode key="1" className="k-1" value="1" label="Component">
                        <TreeNode key="2" value="2" label="Form">
                            <TreeNode key="4" value="4" label="Input" />
                            <TreeNode key="5" value="5" label="Select" disabled />
                        </TreeNode>
                        <TreeNode key="3" value="3" label="Display">
                            <TreeNode key="6" value="6" label="Table" />
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>,
                { attachTo: div }
            );
            selectTreeNode('1', div);
            wrapper.unmount();
        });
        it('Control mode available', () => {
            const div = document.createElement('div');
            document.body.appendChild(div);

            function App() {
                const [value, setValue] = useState({ label: 'Component', value: '1' });

                return (
                    <TreeSelect
                        followTrigger
                        useDetailValue
                        visible
                        treeDefaultExpandAll
                        value={value}
                        onChange={v => {
                            assert(v && typeof v === 'object' && v.value);
                            setValue(v);
                        }}
                    >
                        <TreeNode key="1" value="1" label="Component">
                            <TreeNode key="2" className="k-2" value="2" label="Form">
                                <TreeNode key="4" value="4" label="Input" />
                                <TreeNode key="5" value="5" label="Select" disabled />
                            </TreeNode>
                            <TreeNode key="3" value="3" label="Display">
                                <TreeNode key="6" value="6" label="Table" />
                            </TreeNode>
                        </TreeNode>
                    </TreeSelect>
                );
            }

            const wrapper = mount(<App />, { attachTo: div });
            assert(wrapper.find('.next-select-values').text().trim() === 'Component');
            selectTreeNode('2', div);
            assert(wrapper.find('.next-select-values').text().trim() === 'Form');
            assertSelected('2', true, div);
            wrapper.unmount();
        });
    });

});
