import React, { type ReactNode } from 'react';
import { Types } from '@alifd/adaptor-helper';
import { Dialog, Message, Button } from '@alifd/next';
import locale from '../../../locale/en-us';
import type { InnerProps } from '../../types';

type AdaptorProps = InnerProps & {
    confirmButtonText?: ReactNode;
    cancelButtonText?: ReactNode;
    data?: ReactNode;
    mask?: boolean;
    okButtonPosition?: 'left' | 'right';
    level?: 'normal' | 'alert' | 'confirm';
    width?: number;
};

export default {
    name: 'Dialog',
    editor: () => ({
        props: [
            {
                name: 'level',
                type: Types.enum,
                options: ['normal', 'alert', 'confirm'],
                default: 'normal',
            },
            {
                name: 'footerAlign',
                label: 'Button Position',
                type: Types.enum,
                options: ['left', 'right', 'center'],
                default: 'right',
            },
            {
                name: 'okButtonPosition',
                label: 'Button Order',
                type: Types.enum,
                options: ['left', 'right'],
                default: 'left',
            },
            {
                name: 'mask',
                type: Types.bool,
                default: false,
            },
            {
                name: 'width',
                type: Types.number,
                default: 400,
            },
            {
                name: 'height',
                type: Types.number,
                default: 160,
            },
            {
                name: 'title',
                type: Types.string,
                default: 'Welcome to Alibaba.com',
            },
            {
                name: 'confirmButtonText',
                label: 'Confirm Text',
                type: Types.string,
                default: 'OK',
            },
            {
                name: 'cancelButtonText',
                label: 'Cancel Text',
                type: Types.string,
                default: 'Cancel',
            },
        ],
        data: {
            default: 'Start your business here by searching a popular product',
        },
    }),
    adaptor: ({
        level,
        footerAlign,
        okButtonPosition,
        mask,
        width,
        height,
        title,
        style,
        className,
        confirmButtonText,
        cancelButtonText,
        data,
        ...others
    }: AdaptorProps) => {
        const dialogStyle: InnerProps['style'] = {
            position: mask ? 'absolute' : 'relative',
            width: width,
            zIndex: 1,
            maxWidth: 'none',
            ...(mask
                ? {
                      left: 20,
                      top: 20,
                  }
                : style),
        };

        const props: InnerProps = {
            ...(mask ? {} : { ...others }),
            className: level === 'normal' ? className : `${className || ''} next-dialog-quick`,
            style: dialogStyle,
            footerAlign: footerAlign,
            footerActions: okButtonPosition === 'left' ? ['ok', 'cancel'] : ['cancel', 'ok'],
            locale: locale.Dialog,
            height: `${height}px`,
            footer:
                okButtonPosition === 'left'
                    ? [
                          <Button key="1" className="next-dialog-btn" type="primary">
                              {confirmButtonText}
                          </Button>,
                          <Button key="2" className="next-dialog-btn">
                              {cancelButtonText}
                          </Button>,
                      ]
                    : [
                          <Button key="1" className="next-dialog-btn">
                              {cancelButtonText}
                          </Button>,
                          <Button key="2" className="next-dialog-btn" type="primary">
                              {confirmButtonText}
                          </Button>,
                      ],
        };

        let dialog;
        switch (level) {
            case 'alert':
                dialog = (
                    <Dialog.Inner {...props}>
                        <Message
                            size="large"
                            shape="addon"
                            type="warning"
                            title={title}
                            className="next-dialog-message"
                        >
                            {data}
                        </Message>
                    </Dialog.Inner>
                );
                break;
            case 'confirm':
                dialog = (
                    <Dialog.Inner {...props}>
                        <Message
                            size="large"
                            shape="addon"
                            type="help"
                            title={title}
                            className="next-dialog-message"
                        >
                            {data}
                        </Message>
                    </Dialog.Inner>
                );
                break;
            default:
                dialog = (
                    <Dialog.Inner {...props} title={title}>
                        {data}
                    </Dialog.Inner>
                );
                break;
        }

        return mask ? (
            <div
                className={`next-overlay-wrapper opened ${className}`}
                {...others}
                style={{
                    position: 'relative',
                    width: width! + 40,
                    height: (height as number) + 40,
                    ...style,
                }}
            >
                <div className="next-overlay-backdrop" style={{ position: 'relative' }} />
                {dialog}
            </div>
        ) : (
            dialog
        );
    },
    content: () => ({
        options: [
            {
                name: 'title',
                options: ['show', 'hide'],
                default: 'show',
            },
            {
                name: 'overlay',
                options: ['show', 'hide'],
                default: 'hide',
            },
            {
                name: 'footerAlign',
                options: ['left', 'center', 'right'],
                default: 'right',
            },
            {
                name: 'okButtonPosition',
                options: ['left', 'right'],
                default: 'right',
            },
        ],
        transform: (
            props: AdaptorProps,
            { title, overlay, footerAlign, okButtonPosition }: AdaptorProps & { overlay?: string }
        ) => {
            return {
                ...props,
                title: title === 'hide' ? '' : title,
                mask: overlay === 'show',
                footerAlign,
                okButtonPosition,
            };
        },
    }),
};
