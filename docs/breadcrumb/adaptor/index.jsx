import React from 'react';
import { Breadcrumb } from '@alifd/next';
import { Types, parseData } from '@alifd/adaptor-helper';

export default {
    name: 'Breadcrumb',
    editor: () => ({
        props: [{
            name: 'ellipsis',
            type: Types.bool,
            default: false
        }],
        data: {
            icon: true,
            default: 'Home\nAll Categories\nWomen\'s Clothing\nBlouses & Shirts 78,999 T-shirts'
        }
    }),
    adaptor: ({ ellipsis, data, ...others }) => {
        const props = ellipsis ? { maxNode: 3 } : {};
        const list = parseData(data).filter((it) => it.type === 'node');
        return (
            <Breadcrumb {...others} {...props}>
                {
                    list.map((item, index) => <Breadcrumb.Item style={{ overflow: 'visible' }} key={`item_${index}`}>{item.value}</Breadcrumb.Item>)
                }
            </Breadcrumb>
        );
    },
    content: () => ({
        options: [{
            name: 'ellipsis',
            options: ['yes', 'no'],
            default: 'no'
        }],
        transform: (props, { ellipsis }) => {
            return {
                ...props,
                ellipsis: ellipsis === 'yes'
            };
        }
    })

};
