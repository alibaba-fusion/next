import React from 'react';
import { Types, parseData, NodeType } from '@alifd/adaptor-helper';
import { Radio } from '@alifd/next';

export default {
    name: 'Radio',
    shape: ['normal', { value: 'button', label: 'Radio Button' }],
    editor: (shape = 'normal') => {
        if (shape === 'button') {
            return {
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
                        options: ['normal', 'disabled'],
                        default: 'normal',
                    },
                ],
                data: {
                    hover: true,
                    disable: true,
                    active: true,
                    default: `Cell 1\n*Cell 2\nCell 3`,
                },
            };
        }
        return {
            props: [
                {
                    name: 'state',
                    label: 'Status',
                    type: Types.enum,
                    options: [
                        'normal',
                        'hover',
                        'disabled',
                        'checked',
                        'checkedHover',
                        'checkedDisabled',
                    ],
                    default: 'normal',
                },
                {
                    name: 'label',
                    type: Types.string,
                    default: 'label',
                },
            ],
        };
    },
    adaptor: ({ shape, size, state = '', label, data, ...others }) => {
        if (shape === 'normal') {
            return (
                <Radio
                    {...others}
                    disabled={['disabled', 'checkedDisabled'].indexOf(state) !== -1}
                    className={`${others.className || ''} ${
                        ['hover', 'checkedHover'].indexOf(state) !== -1 ? 'hovered' : ''
                    }`}
                    checked={state.indexOf('checked') !== -1}
                    label={label}
                />
            );
        }

        const list = parseData(data).filter(({ type }) => type === NodeType.node);

        return (
            <Radio.Group
                {...others}
                size={size}
                shape="button"
                value={list.findIndex(item => item.state === 'active')}
            >
                {list.map((item, index) => (
                    <Radio
                        key={`key_${index}`}
                        className={item.state === 'hover' ? 'hovered' : ''}
                        value={index}
                        disabled={item.state === 'disabled' || state === 'disabled'}
                    >
                        {item.value}
                    </Radio>
                ))}
            </Radio.Group>
        );
    },
};
