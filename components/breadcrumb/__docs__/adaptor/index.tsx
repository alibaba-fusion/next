import React from 'react';
import { Breadcrumb } from '@alifd/next';
import { Types, parseData } from '@alifd/adaptor-helper';

const _propsValue = ({ ellipsis, data, ...others }) => {
    const props = ellipsis ? { maxNode: 3 } : {};
    return {
        ...props,
        ...others,
    };
};

export default {
    name: 'Breadcrumb',
    editor: () => ({
        props: [
            {
                name: 'ellipsis',
                type: Types.bool,
                default: false,
            },
        ],
        data: {
            icon: true,
            default: "Home\nAll Categories\nWomen's Clothing\nBlouses & Shirts 78,999 T-shirts",
        },
    }),
    propsValue: _propsValue,
    adaptor: ({ ellipsis, data, ...others }) => {
        const props = _propsValue({ ellipsis, ...others });
        const list = parseData(data).filter(it => it.type === 'node');
        return (
            <Breadcrumb {...props}>
                {list.map((item, index) => (
                    <Breadcrumb.Item style={{ overflow: 'visible' }} key={`item_${index}`}>
                        {item.value}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        );
    },
    content: () => ({
        options: [
            {
                name: 'ellipsis',
                options: ['yes', 'no'],
                default: 'no',
            },
        ],
        transform: (props, { ellipsis }) => {
            return {
                ...props,
                ellipsis: ellipsis === 'yes',
            };
        },
    }),
};
