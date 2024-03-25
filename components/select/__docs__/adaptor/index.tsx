import React from 'react';
import { Types, parseData, NodeType } from '@alifd/adaptor-helper';
import { Select } from '@alifd/next';
import { type SelectProps } from '@alifd/next/lib/select';

export default {
    name: 'Select',
    editor: () => ({
        props: [
            {
                name: 'level',
                label: 'Type',
                type: Types.enum,
                options: ['single', 'multiple'],
                default: 'single',
            },
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
                name: 'border',
                type: Types.bool,
                default: true,
            },
            {
                name: 'width',
                type: Types.number,
                default: 200,
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
            disable: true,
            active: true,
            default: 'Option 1\n*Option 2\nOption 3\nOption 4\nOption 5',
        },
    }),
    adaptor: ({
        level,
        size,
        state,
        border,
        width,
        label,
        placeholder,
        data,
        style,
        ...others
    }: any) => {
        const list = (parseData(data) as { type: string; value?: string; state?: string }[]).filter(
            ({ type }) => NodeType.node === type
        );
        const dataSource: SelectProps['dataSource'] = [];
        const value: number[] = [];

        list.forEach((item, index) => {
            dataSource.push({
                label: item.value,
                value: index,
                disabled: item.state === 'disabled',
            });
            if (item.state === 'active') {
                value.push(index);
            }
        });

        return (
            <Select
                {...others}
                style={{
                    width,
                    ...style,
                }}
                mode={level}
                size={size}
                visible={state === 'expanded'}
                popupContainer={node => node}
                popupProps={{ needAdjust: false }}
                dataSource={dataSource}
                disabled={state === 'disabled'}
                value={level === 'single' ? value[0] : value}
                label={label}
                placeholder={placeholder}
                hasBorder={border}
            />
        );
    },
    demoOptions: (demo: any) => {
        if (demo.node.props.state === 'expanded') {
            return {
                ...demo,
                height: 300,
            };
        }

        if (demo.node.props.state === 'normal') {
            demo.node.props.data = demo.node.props.data.replace('*', '');
        }

        return demo;
    },
};
