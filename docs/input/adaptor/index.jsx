import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import { Input  } from '@alifd/next';

export default {
    name: 'Input',
    shape: [{
        label: 'Textfield',
        value: 'textfield'
    }, {
        label: 'Textarea',
        value: 'textarea'
    }, {
        label: 'Addon',
        value: 'addon'
    }],
    editor: (shape = 'textfield') => {
        return {
            props: [...(
                shape === 'textarea' ? [] : [{
                    name: 'size',
                    type: Types.enum,
                    options: ['large', 'medium', 'small'],
                    default: 'medium'
                }]
            ), ...(
                shape === 'addon' ? [] : [{
                    name: 'state',
                    label: 'Status',
                    type: Types.enum,
                    options: ['normal', 'focused', 'disabled', 'error', ...(shape === 'textfield' ? ['success', 'loading'] : [])],
                    default: 'normal'
                }]
            ), {
                name: 'widget',
                type: Types.enum,
                options: shape === 'textarea' ? ['none', 'length'] : ['none', 'length', 'clear'],
                default: 'none'
            }, {
                name: 'width',
                type: Types.number,
                default: 200
            },
            ...(shape === 'textarea' ? [{
                name: 'rows',
                type: Types.number,
                default: 4,
            }] : []),
            ...(shape !== 'addon' ? [{
                name: 'border',
                type: Types.bool,
                default: true,
            }] : []),
            {
                name: 'label',
                type: Types.string,
                default: ''
            }, {
                name: 'placeholder',
                type: Types.string,
                default: 'Please Input'
            },
            ...(shape === 'addon' ? [{
                name: 'prefix',
                type: Types.string,
                default: 'https://'
            }, {
                name: 'suffix',
                type: Types.string,
                default: '.com'
            }] : [])],
            data: {
                default: shape === 'textarea' ? 'multiple line' : shape === 'addon' ? 'alibaba' : ''
            }
        };
    },
    adaptor: ({
        shape,
        size,
        state,
        widget,
        width,
        rows,
        border,
        label,
        placeholder,
        prefix = '',
        suffix = '',
        style = {},
        className = '',
        data,
        ...others
    }) => {
        const props = {
            ...others,
            label,
            hasBorder: border,
            placeholder,
            className,
            style: {
                width,
                ...style
            },
            value: data
        };

        if (widget === 'length') {
            props.hasLimitHint = true;
            props.maxLength = 15;
        } else if (widget === 'clear') {
            props.hasClear = true;
        }

        if (size) {
            props.size = size;
        }

        switch(state) {
            case 'focused':
                props.className = `${className} next-focus`;
                break;
            case 'disabled':
                props.disabled = true;
                break;
            case 'error':
            case 'loading':
            case 'success':
                props.state = state;
                break;
            default: break;
        }


        if (rows && rows > 0) {
            props.rows = rows;
        }

        if (shape === 'addon') {
            props.addonTextAfter = suffix;
            props.addonTextBefore = prefix;
        }

        if (shape === 'textarea') {
            return <Input.TextArea {...props}/>;
        }

        return <Input {...props} />;
    },
    content: (shape) => {
        if (shape === 'textfield') {
            return {
                options: [{
                    name: 'clear',
                    options: ['show', 'hide'],
                    default: 'hide',
                }],
                transform: (props, { clear }) => {
                    return {
                        ...props,
                        widget: clear === 'show' ? 'clear' : 'none',
                        data: clear === 'show' ? 'Input ...' : props.value,
                    };
                }
            };
        }

        return {
            options: [],
            transform: p => p
        };
    }
};
