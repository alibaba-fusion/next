import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import enUS from '../../../locale/en-us';
import type { PaginationProps } from '../../types';
import Pagination from '../../pagination';

export default {
    name: 'Pagination',
    shape: ['normal', 'simple', 'mini'],
    editor: () => ({
        props: [
            {
                name: 'size',
                type: Types.enum,
                options: ['large', 'medium', 'small'],
                default: 'medium',
            },
            {
                name: 'sizeSelector',
                label: 'Widget',
                type: Types.enum,
                options: ['none', 'filter', 'dropdown'],
                default: 'none',
            },
            {
                name: 'control',
                label: 'Arrow Style',
                type: Types.enum,
                options: ['textAndIcon', 'onlyIcon', 'noBorder'],
                default: 'textAndIcon',
            },
        ],
    }),
    adaptor: ({
        shape,
        size,
        sizeSelector,
        control,
        ...others
    }: {
        shape: PaginationProps['type'];
        size: PaginationProps['size'];
        sizeSelector: PaginationProps['pageSizeSelector'] | 'none';
        control: 'textAndIcon' | 'onlyIcon' | 'noBorder';
    }) => {
        return (
            <Pagination
                {...others}
                type={shape}
                size={size}
                current={4}
                shape={
                    (
                        {
                            textAndIcon: 'normal',
                            onlyIcon: 'arrow-only',
                            noBorder: 'no-border',
                        } as const
                    )[control]
                }
                locale={enUS.Pagination}
                pageSizeSelector={sizeSelector === 'none' ? false : sizeSelector}
            />
        );
    },
    content: () => ({
        options: [
            {
                name: 'control',
                options: ['textAndIcon', 'onlyIcon', 'noBorder'],
                default: 'textAndIcon',
            },
        ],
        transform: (props: any, { control }: any) => {
            return {
                ...props,
                control,
            };
        },
    }),
};
