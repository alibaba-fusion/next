import React from 'react';
import { Badge } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export default {
    name: 'Badge',
    editor: () => ({
        props: [
            {
                name: 'level',
                label: 'Type',
                type: Types.enum,
                options: ['dot', 'number'],
                default: 'dot',
            },
            {
                name: 'count',
                type: Types.number,
                default: 12,
            },
        ],
    }),
    adaptor: ({ level, count, ...others }: any) => {
        return <Badge {...others} dot={level === 'dot'} count={level === 'number' ? count : 0} />;
    },
    content: () => ({
        options: [
            {
                name: 'use',
                options: ['independent', 'withOthers'],
                default: 'withOthers',
            },
        ],
        transform: (props: any, { use }: any) => {
            if (use === 'withOthers') {
                return {
                    ...props,
                    children: {
                        adaptor: 'div',
                        props: {
                            style: {
                                width: '42px',
                                height: '42px',
                                borderRadius: '50%',
                                background: '#eee',
                                display: 'inline-block',
                            },
                        },
                    },
                };
            }
            return props;
        },
    }),
};
