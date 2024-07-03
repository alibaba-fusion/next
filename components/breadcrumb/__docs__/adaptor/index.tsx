import React from 'react';
import { Breadcrumb } from '@alifd/next';
import type { BreadcrumbProps } from '@alifd/next/types/breadcrumb';
import { Types, parseData } from '@alifd/adaptor-helper';

interface adaptorProps extends BreadcrumbProps {
    ellipsis: boolean;
    data?: { icon: boolean; default: string };
}

const _propsValue = ({ ellipsis, data, ...others }: adaptorProps) => {
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
    adaptor: ({ ellipsis, data, ...others }: adaptorProps) => {
        const props: BreadcrumbProps = _propsValue({ ellipsis, ...others });
        const list = parseData(data).filter((it: { type: string }) => it.type === 'node');
        return (
            <Breadcrumb {...props}>
                {list.map((item: { value: string }, index: number) => (
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
        transform: (props: BreadcrumbProps, { ellipsis }: { ellipsis: 'yes' | 'no' }) => {
            return {
                ...props,
                ellipsis: ellipsis === 'yes',
            };
        },
    }),
};
