import React from 'react';
import { Loading } from '@alifd/next';

export default {
    name: 'Loading',
    editor: () => ({
        props: [
            {
                name: 'size',
                type: 'enum',
                options: ['large', 'medium'],
                default: 'medium',
            },
        ],
    }),
    adaptor: ({ size, ...others }: any) => {
        return (
            <Loading {...others} size={size}>
                <div style={{ textAlign: 'center', padding: '20px', display: 'block' }} />
            </Loading>
        );
    },
};
