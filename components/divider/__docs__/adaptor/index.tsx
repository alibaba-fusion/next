import React from 'react';
import { Divider } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export default {
    name: 'Divider',
    editor: () => ({
        props: [
            {
                name: 'orientation',
                type: Types.enum,
                options: ['center', 'left', 'right'],
                default: 'center',
            },
            {
                name: 'direction',
                type: Types.enum,
                options: ['hoz', 'ver'],
                default: 'hoz',
            },
            {
                name: 'dashed',
                type: Types.bool,
                default: false,
            },
            {
                name: 'text',
                type: Types.string,
                default: '',
            },
        ],
    }),
    adaptor: ({ orientation, direction, dashed, text, ...others }) => {
        return (
            <Divider
                dashed={dashed}
                direction={direction}
                orientation={orientation}
                children={text}
                {...others}
            />
        );
    },
    content: () => ({}),
};
