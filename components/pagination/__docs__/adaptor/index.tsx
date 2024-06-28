import React from 'react';
import { Pagination } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';
import enUS from '../../../locale/en-us';

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
    adaptor: ({ shape, size, sizeSelector, control, ...others }) => {
        return (
            <Pagination
                {...others}
                type={shape}
                size={size}
                current={4}
                shape={
                    {
                        textAndIcon: 'normal',
                        onlyIcon: 'arrow-only',
                        noBorder: 'no-border',
                    }[control]
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
        transform: (props, { control }) => {
            return {
                ...props,
                control,
            };
        },
    }),
};
