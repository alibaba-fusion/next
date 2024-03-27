import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import { Switch } from '@alifd/next';

export default {
    name: 'Switch',
    editor: () => ({
        props: [
            {
                name: 'state',
                label: 'Status',
                type: Types.enum,
                options: ['on', 'off', 'disabledOn', 'disabledOff'],
                default: 'off',
            },
            {
                name: 'size',
                type: Types.enum,
                options: ['medium', 'small'],
                default: 'medium',
            },
            {
                name: 'showLabel',
                label: 'Label',
                type: Types.bool,
                default: false,
            },
        ],
    }),
    adaptor: ({ state, size, showLabel, ...others }) => {
        return (
            <Switch
                {...others}
                checked={['on', 'disabledOn'].indexOf(state) !== -1}
                checkedChildren={showLabel ? 'on' : ''}
                unCheckedChildren={showLabel ? 'off' : ''}
                disabled={state.indexOf('disabled') !== -1}
                size={size}
            />
        );
    },
};
