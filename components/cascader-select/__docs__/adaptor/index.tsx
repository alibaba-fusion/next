import React from 'react';
import { Types, parseData, NodeType } from '@alifd/adaptor-helper';
import { CascaderSelect } from '@alifd/next';

let index = 1000;
const createDataSource = (
    list: Array<any>,
    map: { selecteds: string[]; expandeds: string[] }
): Array<any> => {
    if (!list) return [];
    return list
        .filter(item => item.type === NodeType.node)
        .map(({ value, children, state }) => {
            const key = String(index++);
            if (state === 'active') {
                if (!children || children.length === 0) {
                    map.selecteds.push(key);
                } else {
                    map.expandeds.push(key);
                }
            }

            return {
                value: key,
                label: value,
                disabled: state === 'disabled',
                children: createDataSource(children, map),
            };
        });
};
export default {
    name: 'CascaderSelect',
    editor: () => ({
        props: [
            {
                name: 'size',
                type: Types.enum,
                options: ['large', 'medium', 'small'],
                default: 'medium',
            },
            {
                name: 'state',
                label: 'Status',
                type: Types.enum,
                options: ['normal', 'expanded', 'disabled'],
                default: 'normal',
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
        ],
        data: {
            active: true,
            disabled: true,
            icon: true,
            default:
                '*1\n\t*1-1\n\t\t1-1-1\n\t\t1-1-2\n\t\t1-1-3\n\t\t1-1-4\n\t\t*1-1-5\n\t1-2\n\t1-3\n\t1-4\n\t1-5\n2\n\t2-1\n\t2-2\n\t2-3\n\t2-4\n\t2-5\n3\n\t3-1\n\t3-2\n\t3-3\n\t3-4\n\t3-5\n4\n\t4-1\n\t4-2\n\t4-3\n\t4-4\n\t4-5\n5\n\t5-1\n\t5-2\n\t5-3\n\t5-4\n\t5-5',
        },
    }),
    adaptor: ({
        shape,
        size,
        state,
        width,
        border,
        checkbox,
        label,
        data,
        style = {},
        ...others
    }: any) => {
        const list = parseData(data);
        const map = { selecteds: [], expandeds: [] };
        const dataSource = createDataSource(list, map);
        const value = map.selecteds;

        return (
            <CascaderSelect
                {...others}
                popupProps={{ needAdjust: false }}
                key={new Date().getTime()}
                defaultExpandedValue={map.expandeds}
                style={{ width: width <= 0 ? '' : width, ...style }}
                label={label}
                popupContainer={node => node}
                hasBorder={border}
                size={size}
                multiple={checkbox}
                value={value}
                visible={state === 'expanded'}
                disabled={state === 'disabled'}
                dataSource={dataSource}
            />
        );
    },
    content: () => ({
        options: [
            {
                name: 'checkbox',
                options: ['yes', 'no'],
                default: 'no',
            },
            {
                name: 'border',
                options: ['show', 'hide'],
                default: 'show',
            },
            {
                name: 'label',
                options: ['yes', 'no'],
                default: 'no',
            },
        ],
        transform: (props: any, { checkbox, border, label }: any) => {
            return {
                ...props,
                checkbox: checkbox === 'yes',
                border: border === 'show',
                label: label === 'yes' ? 'Label' : '',
            };
        },
    }),
    demoOptions: (demo: any) => {
        const { node } = demo;
        const { props = {} } = node;
        if (props.state === 'expanded') {
            return { ...demo, height: 300 };
        }

        return demo;
    },
};
