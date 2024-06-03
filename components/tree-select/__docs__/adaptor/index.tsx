import React from 'react';
import { Types, parseData, NodeType } from '@alifd/adaptor-helper';
import { TreeSelect } from '@alifd/next';
import type { TreeSelectProps } from '@alifd/next/lib/tree-select';

const createDataSouce = (
    list: any[],
    keys: { selected: string[]; expanded: string[] } = { selected: [], expanded: [] },
    level = 0,
    prefix = ''
) => {
    const array: any[] = [];
    let index = 0;

    list.forEach(item => {
        const key = `${prefix || level}-${index++}`;

        if (item.children && item.children.length > 0) {
            item.children = createDataSouce(item.children, keys, level + 1, key);
        }
        array.push({
            label: item.value,
            value: key,
            disabled: item.state === 'disabled',
            key,
            children: item.children,
        });

        if (item.state === 'active') {
            if (item.children && item.children.length > 0) {
                keys.expanded.push(key);
            } else {
                keys.selected.push(key);
            }
        }

        return;
    });

    return array;
};

export default {
    name: 'TreeSelect',
    editor: () => ({
        props: [
            {
                name: 'state',
                label: 'Status',
                type: Types.enum,
                options: ['normal', 'expanded', 'disabled'],
                default: 'normal',
            },
            {
                name: 'size',
                type: Types.enum,
                options: ['large', 'medium', 'small'],
                default: 'medium',
            },
            {
                name: 'width',
                type: Types.number,
                default: 300,
            },
            {
                name: 'border',
                type: Types.bool,
                default: true,
            },
            {
                name: 'checkbox',
                type: Types.bool,
                default: false,
            },
            {
                name: 'label',
                type: Types.string,
                default: '',
            },
            {
                name: 'placeholder',
                type: Types.string,
                default: 'Please Select',
            },
        ],
        data: {
            active: true,
            disabled: true,
            default:
                '*Trunk\n\t-Branch\n\t\t*Branch\n\t\t\tLeaf\n\t\tLeaf\n\t*Branch\n\t\tLeaf\n\t\tLeaf',
        },
    }),
    adaptor: ({
        state,
        size,
        width,
        border,
        checkbox,
        label,
        placeholder,
        data,
        style,
        ...others
    }: TreeSelectProps & {
        state: 'normal' | 'expanded' | 'disabled';
        width: number;
        border: boolean;
        shape: 'normal' | 'line';
        select: 'node' | 'label';
        checkbox: boolean;
        data: string;
    }) => {
        const list = parseData(data).filter(({ type }: any) => type === NodeType.node);
        const keys = { selected: [], expanded: [] };
        const dataSource = createDataSouce(list, keys);

        const props = {
            ...others,
            style: { width, ...style },
            size,
            dataSource,
            key: new Date().getTime(),
            multiple: checkbox,
            treeCheckable: checkbox,
            treeDefaultExpandAll: true,
            hasBorder: border,
            disabled: state === 'disabled',
            visible: state === 'expanded',
            label,
            placeholder,
            popupContainer: (node: HTMLElement) => node,
            popupProps: { needAdjust: false },
            value: checkbox ? keys.selected : keys.selected[0],
        };

        return <TreeSelect {...props} />;
    },
    demoOptions: (demo: any) => {
        if (demo.node.props.state === 'expanded') {
            demo.height = 300;
        }
        return demo;
    },
};
