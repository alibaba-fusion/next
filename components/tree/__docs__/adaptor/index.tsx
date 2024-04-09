import { NodeType, Types, parseData } from '@alifd/adaptor-helper';
import { Tree } from '@alifd/next';
import React from 'react';
import type { TreeProps } from '../../types';

const createDataSouce = (
    list: any[],
    keys = { selected: [], expanded: [] } as { selected: string[]; expanded: string[] },
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
    name: 'Tree',
    shape: ['normal', 'line'],
    editor: () => ({
        props: [
            {
                name: 'select',
                label: 'Selection Mode',
                type: Types.enum,
                options: ['node', 'label'],
                default: 'label',
            },
            {
                name: 'checkbox',
                type: Types.bool,
                default: false,
            },
        ],
        data: {
            active: true,
            dsiabled: true,
            default:
                'Trunk\n\t-Branch\n\t\t*Branch\n\t\t\tLeaf\n\t\tLeaf\n\t*Branch\n\t\tLeaf\n\t\tLeaf',
        },
    }),
    adaptor: ({
        shape,
        select,
        checkbox,
        data,
        ...others
    }: TreeProps & {
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
            dataSource,
            key: new Date().getTime(),
            checkable: checkbox,
            showLine: shape === 'line',
            isNodeBlock: select === 'node',
            expandedKeys: keys.expanded,
            [checkbox ? 'checkedKeys' : 'selectedKeys']: keys.selected,
        };

        return <Tree {...props} />;
    },
};
