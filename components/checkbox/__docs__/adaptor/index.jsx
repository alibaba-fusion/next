import React from 'react';
import { Checkbox } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

const _propsValue = ({ state = '', label, className = '', ...others }) =>{
    const isHovered = ['hover', 'indeterminateHover', 'checkedHover'].indexOf(state) !== -1;
    const isChecked = state.indexOf('checked') !== -1;
    const isDisabled = ['disabled', 'indeterminateDisabled', 'checkedDisabled'].indexOf(state) !== -1;
    const isIndeterminated = state.indexOf('indeterminate') !== -1;
    return {
        ...others,
        className:isHovered ? 'hovered' : '',
        [className]:className,
        indeterminate:isIndeterminated,
        checked: isChecked,
        disabled: isDisabled,
    };
};

export default {
    name: 'Checkbox',
    editor: () => ({
        props: [{
            name: 'state',
            label: 'Status',
            type: Types.enum,
            options: ['normal', 'hover', 'disabled', 'indeterminate', 'indeterminateHover', 'indeterminateDisabled', 'checked', 'checkedHover', 'checkedDisabled'],
            default: 'normal'
        }, {
            name: 'label',
            type: Types.string,
            default: 'pear'
        }]
    }),
    propsValue: _propsValue,
    adaptor: ({ state = '', label, className = '', ...others }) => {
        const props = _propsValue({ state, label, className, ...others });
        return (
            <Checkbox {...props}>{label}</Checkbox>
        );
    },
    content: () => ({
        options: [{
            name: 'label',
            options: ['show', 'hide'],
            default: 'show'
        }],
        transform: (props, { label }) => {
            return {
                ...props,
                label: label === 'show' ? props.label : ''
            };
        },
    })
};
