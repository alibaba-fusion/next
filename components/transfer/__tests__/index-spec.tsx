import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import { dom } from '../../util';
import Transfer from '../index';
import Tree from '../../tree/index';
import '../style';

/* eslint-disable react/jsx-filename-extension, react/no-multi-comp */
/* global describe it afterEach */

Enzyme.configure({ adapter: new Adapter() });
const TreeNode = Tree.Node;
const { hasClass, getOffset } = dom;
const dataSource = [
    { label: '0', value: '0', disabled: true },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
];

describe('Transfer', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should render by dataSource', () => {
        wrapper = mount(<Transfer dataSource={dataSource} />);
        compareDomAndDataSource(wrapper, 0, dataSource);
        assert(findFooterCount(wrapper, 0) === '4');
    });

    it('should render by defaultValue', () => {
        wrapper = mount(<Transfer defaultValue={['1']} dataSource={dataSource} />);
        compareDomAndDataSource(wrapper, 0, [
            { label: '0', value: '0' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
        ]);
        compareDomAndDataSource(wrapper, 1, [{ label: '1', value: '1' }]);
        assert(findFooterCount(wrapper, 0) === '3');
        assert(findFooterCount(wrapper, 1) === '1');
    });

    it('should render by value', () => {
        wrapper = mount(<Transfer defaultValue={['1']} value={['2']} dataSource={dataSource} />);
        compareDomAndDataSource(wrapper, 0, [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '3', value: '3' },
        ]);
        compareDomAndDataSource(wrapper, 1, [{ label: '2', value: '2' }]);
        assert(findFooterCount(wrapper, 0) === '3');
        assert(findFooterCount(wrapper, 1) === '1');
    });

    it('should render by defaultLeftChecked and defaultRightChecked', () => {
        wrapper = mount(
            <Transfer
                defaultValue={['1']}
                defaultLeftChecked={['2']}
                defaultRightChecked={['1']}
                dataSource={dataSource}
            />
        );

        assert(findFooterCount(wrapper, 0) === '1/3');
        assert(findFooterCheckbox(wrapper, 0).hasClass('indeterminate'));
        assert(findItemCheckbox(wrapper, 0, 1).hasClass('checked'));

        assert(findFooterCount(wrapper, 1) === '1/1');
        assert(findFooterCheckbox(wrapper, 1).hasClass('checked'));
        assert(findItemCheckbox(wrapper, 1, 0).hasClass('checked'));
    });

    it('should render by check checkbox of item and checkbox of footer', () => {
        wrapper = mount(<Transfer defaultValue={['1']} dataSource={dataSource} />);

        checkSingle(findItem(wrapper, 0, 1));
        assert(findItemCheckbox(wrapper, 0, 1).hasClass('checked'));
        assert(findFooterCheckbox(wrapper, 0).hasClass('indeterminate'));
        assert(findFooterCount(wrapper, 0) === '1/3');

        checkSingle(findItem(wrapper, 0, 2));
        assert(findItemCheckbox(wrapper, 0, 2).hasClass('checked'));
        assert(findFooterCheckbox(wrapper, 0).hasClass('checked'));
        assert(findFooterCount(wrapper, 0) === '2/3');

        checkAll(findFooterCheckbox(wrapper, 0), false);
        assert(!findFooterCheckbox(wrapper, 0).hasClass('checked'));
        assert(!findItemCheckbox(wrapper, 0, 1).hasClass('checked'));
        assert(!findItemCheckbox(wrapper, 0, 2).hasClass('checked'));
        assert(findFooterCount(wrapper, 0) === '3');

        checkAll(findFooterCheckbox(wrapper, 0), true);
        assert(findFooterCheckbox(wrapper, 0).hasClass('checked'));
        assert(findItemCheckbox(wrapper, 0, 1).hasClass('checked'));
        assert(findItemCheckbox(wrapper, 0, 2).hasClass('checked'));
        assert(findFooterCount(wrapper, 0) === '2/3');

        checkSingle(findItem(wrapper, 0, 2));
        assert(!findItemCheckbox(wrapper, 0, 2).hasClass('checked'));
        assert(!findFooterCheckbox(wrapper, 0).hasClass('checked'));
        assert(findFooterCount(wrapper, 0) === '1/3');
    });

    it('should render search box when set showSearch', () => {
        const dataSource = [
            { label: 'a', value: '0' },
            { label: 'b', value: '1' },
            { label: <i>abc</i>, value: '2' },
        ];

        wrapper = mount(
            <Transfer
                showSearch
                searchProps={{
                    hasClear: true,
                }}
                searchPlaceholder="input something..."
                dataSource={dataSource}
            />
        );

        assert(wrapper.find('span.next-search').length === 2);
        const search = findPanel(wrapper, 0).find('span.next-search');
        const input = search.find('input');
        if (input.instance().placeholder) {
            assert(input.instance().placeholder === 'input something...');
        }
        input.simulate('change', { target: { value: 'a' } });

        assert(findItems(wrapper, 0).length === 2);
        assert(findItemText(wrapper, 0, 0) === 'a');
        assert(findItemText(wrapper, 0, 1) === 'abc');
    });

    it('should render search box when set showSearch（array）', () => {
        const dataSource = [
            { label: 'a', value: '0' },
            { label: 'b', value: '1' },
            { label: <i>abc</i>, value: '2' },
        ];

        wrapper = mount(
            <Transfer
                showSearch={[true, false]}
                searchProps={[
                    {
                        hasClear: true,
                    },
                    {
                        size: 'large',
                    },
                ]}
                searchPlaceholder="input something..."
                dataSource={dataSource}
            />
        );

        assert(wrapper.find('span.next-search').length === 1);
        const search = findPanel(wrapper, 0).find('span.next-search');
        const input = search.find('input');
        if (input.instance().placeholder) {
            assert(input.instance().placeholder === 'input something...');
        }
        input.simulate('change', { target: { value: 'a' } });

        assert(findItems(wrapper, 0).length === 2);
        assert(findItemText(wrapper, 0, 0) === 'a');
        assert(findItemText(wrapper, 0, 1) === 'abc');
    });

    it('should custom style and text', () => {
        const dataSource = [
            {
                label: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                value: '0',
            },
        ];

        wrapper = mount(
            <Transfer
                className="custom"
                listStyle={{ width: '200px' }}
                titles={['Source', 'Target']}
                operations={['>>', '<<']}
                dataSource={dataSource}
            />
        );

        assert(wrapper.find('div.next-transfer.custom').length === 1);
        assert(
            findPanel(wrapper, 0).find('ul.next-transfer-panel-list').props().style.width ===
                '200px'
        );
        assert(findHeaderTitle(wrapper, 0) === 'Source');
        assert(findHeaderTitle(wrapper, 1) === 'Target');
        assert(wrapper.find('div.next-transfer-operations button').at(0).text().trim() === '>>');
        assert(wrapper.find('div.next-transfer-operations button').at(1).text().trim() === '<<');
    });

    it('should move items between the panels', () => {
        const dataSource = [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
        ];

        let value, data, extra, changeCalled;

        const handleChange = (v, d, e) => {
            assert.deepEqual(value, v);
            assert.deepEqual(data, d);
            assert.deepEqual(extra, e);
            changeCalled = true;
        };

        wrapper = mount(<Transfer dataSource={dataSource} onChange={handleChange} />);
        const l2r = () => wrapper.find('div.next-transfer-operations button').at(0);
        const r2l = () => wrapper.find('div.next-transfer-operations button').at(1);

        assert(l2r().prop('disabled'));
        assert(l2r().hasClass('next-btn-normal'));
        assert(r2l().prop('disabled'));
        assert(r2l().hasClass('next-btn-normal'));

        checkSingle(findItemCheckbox(wrapper, 0, 0));
        checkSingle(findItemCheckbox(wrapper, 0, 1));
        assert(!l2r().prop('disabled'));
        assert(l2r().hasClass('next-btn-primary'));

        value = ['0', '1'];
        data = [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
        ];
        extra = {
            leftValue: ['2'],
            leftData: [{ label: '2', value: '2' }],
            movedValue: ['0', '1'],
            movedData: [
                { label: '0', value: '0' },
                { label: '1', value: '1' },
            ],
            direction: 'right',
        };
        l2r().simulate('click');
        assert(changeCalled);
        assert(findItems(wrapper, 0).length === 1);
        assert(findItemText(wrapper, 0, 0) === '2');
        assert(findItems(wrapper, 1).length === 2);
        assert(findItemText(wrapper, 1, 0) === '0');
        assert(findItemText(wrapper, 1, 1) === '1');

        changeCalled = false;
        checkSingle(findItemCheckbox(wrapper, 1, 0));
        assert(!r2l().prop('disabled'));
        assert(r2l().hasClass('next-btn-primary'));
        value = ['1'];
        data = [{ label: '1', value: '1' }];
        extra = {
            leftValue: ['0', '2'],
            leftData: [
                { label: '0', value: '0' },
                { label: '2', value: '2' },
            ],
            movedValue: ['0'],
            movedData: [{ label: '0', value: '0' }],
            direction: 'left',
        };
        r2l().simulate('click');
        assert(changeCalled);
        assert(findItems(wrapper, 0).length === 2);
        assert(findItemText(wrapper, 0, 0) === '0');
        assert(findItemText(wrapper, 0, 1) === '2');
        assert(findItems(wrapper, 1).length === 1);
        assert(findItemText(wrapper, 1, 0) === '1');
    });

    it('should move items between the panels under control', () => {
        const dataSource = [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
        ];

        let value, data, extra, changeCalled;

        const handleChange = (v, d, e) => {
            assert.deepEqual(value, v);
            assert.deepEqual(data, d);
            assert.deepEqual(extra, e);
            changeCalled = true;
        };

        wrapper = mount(<Transfer value={[]} dataSource={dataSource} onChange={handleChange} />);
        const l2r = () => wrapper.find('div.next-transfer-operations button').at(0);
        const r2l = () => wrapper.find('div.next-transfer-operations button').at(1);

        assert(l2r().prop('disabled'));
        assert(l2r().hasClass('next-btn-normal'));
        assert(r2l().prop('disabled'));
        assert(r2l().hasClass('next-btn-normal'));

        checkSingle(findItemCheckbox(wrapper, 0, 0));
        checkSingle(findItemCheckbox(wrapper, 0, 1));
        assert(!l2r().prop('disabled'));
        assert(l2r().hasClass('next-btn-primary'));

        value = ['0', '1'];
        data = [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
        ];
        extra = {
            leftValue: ['2'],
            leftData: [{ label: '2', value: '2' }],
            movedValue: ['0', '1'],
            movedData: [
                { label: '0', value: '0' },
                { label: '1', value: '1' },
            ],
            direction: 'right',
        };
        l2r().simulate('click');
        assert(changeCalled);
        wrapper.setProps({
            value,
        });

        assert(findItems(wrapper, 0).length === 1);
        assert(findItemText(wrapper, 0, 0) === '2');
        assert(findItems(wrapper, 1).length === 2);
        assert(findItemText(wrapper, 1, 0) === '0');
        assert(findItemText(wrapper, 1, 1) === '1');

        changeCalled = false;
        checkSingle(findItemCheckbox(wrapper, 1, 0));
        assert(!r2l().prop('disabled'));
        assert(r2l().hasClass('next-btn-primary'));
        value = ['1'];
        data = [{ label: '1', value: '1' }];
        extra = {
            leftValue: ['0', '2'],
            leftData: [
                { label: '0', value: '0' },
                { label: '2', value: '2' },
            ],
            movedValue: ['0'],
            movedData: [{ label: '0', value: '0' }],
            direction: 'left',
        };
        r2l().simulate('click');
        assert(changeCalled);

        wrapper.setProps({
            value,
        });
        assert(findItems(wrapper, 0).length === 2);
        assert(findItemText(wrapper, 0, 0) === '0');
        assert(findItemText(wrapper, 0, 1) === '2');
        assert(findItems(wrapper, 1).length === 1);
        assert(findItemText(wrapper, 1, 0) === '1');
    });

    it('should support simple mode', () => {
        const dataSource = [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
        ];

        let value, data, extra, changeCalled;

        const handleChange = (v, d, e) => {
            assert.deepEqual(value, v);
            assert.deepEqual(data, d);
            assert.deepEqual(extra, e);
            changeCalled = true;
        };

        wrapper = mount(<Transfer mode="simple" dataSource={dataSource} onChange={handleChange} />);
        assert(wrapper.find('div.next-transfer-operations i.next-icon-switch').length);
        assert(!findItem(wrapper, 0, 0).find('.next-checkbox-wrapper').length);
        assert(
            findFooter(wrapper, 0).find('a.next-transfer-panel-move-all').text().trim() ===
                '移动全部'
        );

        value = ['0'];
        data = [{ label: '0', value: '0' }];
        extra = {
            leftValue: ['1', '2'],
            leftData: [
                { label: '1', value: '1' },
                { label: '2', value: '2' },
            ],
            movedValue: ['0'],
            movedData: [{ label: '0', value: '0' }],
            direction: 'right',
        };
        findItem(wrapper, 0, 0).simulate('click');
        assert(changeCalled);
        assert(findItems(wrapper, 0).length === 2);
        assert(findItemText(wrapper, 0, 0) === '1');
        assert(findItemText(wrapper, 0, 1) === '2');
        assert(findItems(wrapper, 1).length === 1);
        assert(findItemText(wrapper, 1, 0) === '0');

        changeCalled = false;
        value = [];
        data = [];
        extra = {
            leftValue: ['0', '1', '2'],
            leftData: [
                { label: '0', value: '0' },
                { label: '1', value: '1' },
                { label: '2', value: '2' },
            ],
            movedValue: ['0'],
            movedData: [{ label: '0', value: '0' }],
            direction: 'left',
        };
        findItem(wrapper, 1, 0).simulate('click');
        assert(changeCalled);
        assert(findItems(wrapper, 0).length === 3);
        assert(findItemText(wrapper, 0, 0) === '0');
        assert(findItemText(wrapper, 0, 1) === '1');
        assert(findItemText(wrapper, 0, 2) === '2');
        assert(findItems(wrapper, 1).length === 0);

        changeCalled = false;
        value = ['0', '1', '2'];
        data = [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
        ];
        extra = {
            leftValue: [],
            leftData: [],
            movedValue: ['0', '1', '2'],
            movedData: [
                { label: '0', value: '0' },
                { label: '1', value: '1' },
                { label: '2', value: '2' },
            ],
            direction: 'right',
        };
        findFooter(wrapper, 0).find('a.next-transfer-panel-move-all').simulate('click');
        assert(changeCalled);
        assert(findItems(wrapper, 0).length === 0);
        assert(findItems(wrapper, 1).length === 3);
        assert(findItemText(wrapper, 1, 0) === '0');
        assert(findItemText(wrapper, 1, 1) === '1');
        assert(findItemText(wrapper, 1, 2) === '2');

        changeCalled = false;
        value = [];
        data = [];
        extra = {
            leftValue: ['0', '1', '2'],
            leftData: [
                { label: '0', value: '0' },
                { label: '1', value: '1' },
                { label: '2', value: '2' },
            ],
            movedValue: ['0', '1', '2'],
            movedData: [
                { label: '0', value: '0' },
                { label: '1', value: '1' },
                { label: '2', value: '2' },
            ],
            direction: 'left',
        };
        findFooter(wrapper, 1).find('a.next-transfer-panel-move-all').simulate('click');
        assert(changeCalled);
        assert(findItems(wrapper, 0).length === 3);
        assert(findItemText(wrapper, 0, 0) === '0');
        assert(findItemText(wrapper, 0, 1) === '1');
        assert(findItemText(wrapper, 0, 2) === '2');
        assert(findItems(wrapper, 1).length === 0);
    });

    it('should highlight moved item', done => {
        wrapper = mount(
            <Transfer defaultLeftChecked={['0']} dataSource={[{ label: '0', value: '0' }]} />
        );
        wrapper.find('div.next-transfer-operations button').at(0).simulate('click');
        const item = findItem(wrapper, 1, 0);
        setTimeout(() => {
            assert(hasClass(item.instance(), 'next-focused'));
        }, 100);
        setTimeout(() => {
            assert(!hasClass(item.instance(), 'next-highlight'));
            done();
        }, 1000);
    });

    it('should support rtl prop', () => {
        wrapper = mount(
            <Transfer rtl defaultLeftChecked={['0']} dataSource={[{ label: '0', value: '0' }]} />
        );
        assert(wrapper.find('div').at(0).props().dir === 'rtl');
    });

    it('should support sorting items', () => {
        let value, position, sortCalled;
        const handleSort = (v, p) => {
            assert.deepEqual(value, v);
            assert.deepEqual(position, p);
            sortCalled = true;
        };

        wrapper = mount(<Transfer dataSource={dataSource} onSort={handleSort} />);
        let dragItem = findItem(wrapper, 0, 1);
        let dropItem = findItem(wrapper, 0, 3);
        let dropDom = dropItem.instance();
        let referenceY = getOffset(dropDom).top + dropDom.offsetHeight / 2;

        value = ['0', '2', '3', '1'];
        position = 'left';
        dragItem.simulate('dragStart');
        dropItem.simulate('dragOver', { pageY: referenceY + 1 });
        dragItem.simulate('dragEnd');
        dropItem.simulate('drop');
        dragItem.simulate('dragStart');
        dropItem.simulate('dragOver', { pageY: referenceY + 1 });
        dropItem.simulate('drop');
        assert(sortCalled);
        assert(findItemText(wrapper, 0, 0) === '0');
        assert(findItemText(wrapper, 0, 1) === '2');
        assert(findItemText(wrapper, 0, 2) === '3');
        assert(findItemText(wrapper, 0, 3) === '1');

        dragItem = findItem(wrapper, 0, 1);
        dropItem = findItem(wrapper, 0, 3);
        dropDom = dropItem.instance();
        referenceY = getOffset(dropDom).top + dropDom.offsetHeight / 2;

        sortCalled = false;
        value = ['0', '3', '2', '1'];
        position = 'left';
        dragItem.simulate('dragStart');
        dropItem.simulate('dragOver', { pageY: referenceY - 1 });
        dropItem.simulate('drop');
        assert(sortCalled);
        assert(findItemText(wrapper, 0, 0) === '0');
        assert(findItemText(wrapper, 0, 1) === '3');
        assert(findItemText(wrapper, 0, 2) === '2');
        assert(findItemText(wrapper, 0, 3) === '1');
    });

    it('should support id on panel elements', () => {
        wrapper = mount(
            <Transfer dataSource={dataSource} id="transfer-test" titles={['left', 'right']} />
        );
        assert(wrapper.find('#transfer-test-panel-footer-left').length === 1);
        assert(wrapper.find('#transfer-test-panel-footer-right').length === 1);
        assert(wrapper.find('#transfer-test-panel-header-left').length === 1);
        assert(wrapper.find('#transfer-test-panel-header-right').length === 1);
    });

    it('should disabled item not move', () => {
        wrapper = mount(
            <Transfer
                mode="simple"
                defaultLeftChecked={['0']}
                defaultValue={['0']}
                value={['1', '2', '3']}
                dataSource={dataSource}
            />
        );
        findFooter(wrapper, 0).find('a.next-transfer-panel-move-all').simulate('click');
        assert(findItems(wrapper, 0).length === 1);
        assert(findItems(wrapper, 1).length === 3);
    });
    it('should customer panel work well', () => {
        const treeDataSource = [
            {
                label: 'Form',
                key: '2',
                value: '2',
                selectable: false,
                children: [
                    {
                        label: 'Input',
                        key: '4',
                        value: '4',
                    },
                    {
                        label: 'Field',
                        key: '7',
                        value: '7',
                    },
                    {
                        label: 'Select',
                        key: '5',
                        value: '5',
                    },
                ],
            },
        ];

        function getTreeDataSource(dataSource = [], value) {
            return dataSource.map(({ children, ...props }) => (
                <TreeNode
                    {...props}
                    disabled={props.disabled || value.includes(props.value)}
                    key={props.value}
                >
                    {getTreeDataSource(children, value)}
                </TreeNode>
            ));
        }
        const transferDataSource = [];
        function flatten(list = []) {
            list.forEach(item => {
                transferDataSource.push(item);
                flatten(item.children);
            });
        }
        flatten(treeDataSource);
        wrapper = mount(
            <Transfer dataSource={transferDataSource}>
                {({ position, onChange, value }) => {
                    if (position === 'left') {
                        return (
                            <Tree
                                checkable
                                editable
                                style={{ padding: '10px' }}
                                checkedKeys={value}
                                onCheck={(keys, extra) => {
                                    const newValues = extra.checkedNodes.map(
                                        item => item.props.value
                                    );
                                    onChange(position, newValues);
                                }}
                            >
                                {getTreeDataSource(treeDataSource, value)}
                            </Tree>
                        );
                    }
                }}
            </Transfer>
        );
        wrapper.find('.next-checkbox').at(0).simulate('click');
    });
    it('should onSelect work well', () => {
        const onSelect = (sourceSelectedValue, targetSelectedValue, trigger) => {
            assert(trigger === 'source', 'position should be source');
            assert(
                sourceSelectedValue && sourceSelectedValue[0] === '1',
                'checked value should be 1'
            );
        };
        wrapper = mount(
            <Transfer
                defaultValue={['1']}
                value={['2']}
                dataSource={dataSource}
                onSelect={onSelect}
            />
        );
        compareDomAndDataSource(wrapper, 0, [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '3', value: '3' },
        ]);
        compareDomAndDataSource(wrapper, 1, [{ label: '2', value: '2' }]);
        assert(findFooterCount(wrapper, 0) === '3');
        assert(findFooterCount(wrapper, 1) === '1');
        wrapper.find('.next-checkbox').at(1).simulate('click');
    });
    it('should support virtual list', () => {
        const dataSource = (() => {
            const dataSource = [];

            for (let i = 0; i < 10000; i++) {
                dataSource.push({
                    label: `content${i}`,
                    value: `${i}`,
                    disabled: i % 4 === 0,
                });
            }

            return dataSource;
        })();

        wrapper = mount(<Transfer mode="simple" useVirtual dataSource={dataSource} />);
        assert(wrapper.find('div.next-transfer-operations i.next-icon-switch').length);
        assert(findItems(wrapper, 0).length === 10);
    });
});

function findPanel(wrapper, panelIndex) {
    return wrapper.find('div.next-transfer-panel').at(panelIndex);
}

function findHeader(wrapper, panelIndex) {
    return findPanel(wrapper, panelIndex).find('div.next-transfer-panel-header');
}

function findHeaderTitle(wrapper, panelIndex) {
    return findHeader(wrapper, panelIndex).text().trim();
}

function findFooter(wrapper, panelIndex) {
    return findPanel(wrapper, panelIndex).find('div.next-transfer-panel-footer');
}

function findFooterCount(wrapper, panelIndex) {
    return findFooter(wrapper, panelIndex)
        .find('span.next-transfer-panel-count')
        .text()
        .trim()
        .split(/\s/)[0];
}

function findFooterCheckbox(wrapper, panelIndex) {
    return findFooter(wrapper, panelIndex).find('label.next-checkbox-wrapper');
}

function findItems(wrapper, panelIndex) {
    return findPanel(wrapper, panelIndex).find('li.next-transfer-panel-item');
}

function findItem(wrapper, panelIndex, itemIndex) {
    return findItems(wrapper, panelIndex).at(itemIndex);
}

function findItemText(wrapper, panelIndex, itemIndex) {
    return findItem(wrapper, panelIndex, itemIndex).find('span.next-menu-item-text').text().trim();
}

function findItemCheckbox(wrapper, panelIndex, itemIndex) {
    return findItem(wrapper, panelIndex, itemIndex).find('label.next-checkbox-wrapper');
}

function checkAll(checkbox, checked) {
    checkbox.find('input').simulate('change', { target: { checked } });
}

function checkSingle(item) {
    item.simulate('click');
}

function compareDomAndDataSource(wrapper, panelIndex, dataSource) {
    findItems(wrapper, panelIndex).forEach((item, index) => {
        assert(item.find('span.next-menu-item-text').text().trim() === dataSource[index].label);
        if (dataSource[index].disabled) {
            assert(item.hasClass('next-disabled'));
            assert(item.find('label.next-checkbox-wrapper').hasClass('disabled'));
        }
    });
}
