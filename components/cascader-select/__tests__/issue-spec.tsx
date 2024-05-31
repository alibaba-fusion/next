import React, { createRef, useState } from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import CascaderSelect from '../index';
import '../style';

/* eslint-disable react/jsx-filename-extension  */
/* global describe it beforeEach */
/* global describe it afterEach */

Enzyme.configure({ adapter: new Adapter() });

function delay(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

const ChinaAreaData = [
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
    {
        children: [
            {
                value: '3372',
                label: '乌鲁木齐',
                children: [
                    {
                        value: '3373',
                        label: '乌鲁木齐市',
                    },
                    {
                        value: '3374',
                        label: '乌鲁木齐县',
                    },
                ],
            },
        ],
        value: '3371',
        label: '新疆',
    },
];

describe('CascaderSelect issues', function () {
    this.timeout(1000000);
    let wrapper, root;
    beforeEach(() => {
        root = document.createElement('div');
        document.body.appendChild(root);
    });
    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should sync expandedValue when visible=false and props.value changed ', async () => {
        const ref = createRef();

        function Demo() {
            const [value, setValue] = useState('2975');
            const [visible, setVisible] = useState(false);
            ref.current = { setValue, setVisible };
            return (
                <CascaderSelect
                    followTrigger
                    value={value}
                    visible={visible}
                    dataSource={ChinaAreaData}
                    onChange={v => setValue(v)}
                />
            );
        }
        wrapper = mount(<Demo />, {
            attachTo: root,
        });
        assert(
            root.querySelector('span.next-select-inner em').textContent.trim() ===
                '陕西 / 西安 / 西安市'
        );
        ref.current.setVisible(true);
        await delay(100);
        assert(isExpanded('陕西', 0, 0, root));
        assert(isExpanded('西安', 1, 0, root));
        assert(isSelected('西安市', 2, 0, root));
        ref.current.setVisible(false);
        await delay(500);
        ref.current.setValue('3373');
        assert(
            root.querySelector('span.next-select-inner em').textContent.trim() ===
                '新疆 / 乌鲁木齐 / 乌鲁木齐市'
        );
        ref.current.setVisible(true);
        await delay(100);
        assert(isExpanded('新疆', 0, 2, root));
        assert(isExpanded('乌鲁木齐', 1, 0, root));
        assert(isSelected('乌鲁木齐市', 2, 0, root));
    });
});

function findItem(menuIndex, itemIndex, root = document) {
    return root.querySelectorAll('.next-cascader-menu')[menuIndex].children[itemIndex];
}

function isExpanded(text, menuIndex, itemIndex, root = document) {
    const item = findItem(menuIndex, itemIndex, root);
    return !!item && item.textContent.trim() === text && item.classList.contains('next-expanded');
}

function isSelected(text, menuIndex, itemIndex, root = document) {
    const item = findItem(menuIndex, itemIndex, root);
    return !!item && item.textContent.trim() === text && item.classList.contains('next-selected');
}
