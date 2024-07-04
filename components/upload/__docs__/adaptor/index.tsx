import React, { type CSSProperties } from 'react';
import { Types, parseData, NodeType } from '@alifd/adaptor-helper';
import { Upload } from '@alifd/next';
import locale from '../../../locale/en-us';

const getSize = (size?: string) => {
    if (!size) return 0;
    const UNIT = ['T', 'G', 'MB', 'KB', 'B'];
    for (let i = 0; i < UNIT.length; i++) {
        const unit = UNIT[i];
        const index = size.indexOf(unit);
        if (index !== -1) {
            const number = Number(size.substring(0, index)) || 0;
            switch (i) {
                case 0:
                    return number * 1024 * 1024 * 1024 * 1024;
                case 1:
                    return number * 1024 * 1024 * 1024;
                case 2:
                    return number * 1024 * 1024;
                case 3:
                    return number * 1024;
                case 4:
                    return number;
            }
        }
    }
};
export default {
    name: 'Upload',
    shape: [
        {
            label: 'File Upload',
            value: 'normal',
        },
        'image',
        'card',
        'drag',
    ],
    editor: (shape = 'normal') => {
        return {
            normal: {
                props: [
                    {
                        name: 'state',
                        label: 'Status',
                        type: Types.enum,
                        options: ['uploading', 'done', 'error'],
                        default: 'uploading',
                    },
                    {
                        name: 'close',
                        label: 'Close Included',
                        type: Types.bool,
                        default: false,
                    },
                    {
                        name: 'width',
                        type: Types.number,
                        default: 500,
                    },
                    {
                        name: 'progress',
                        type: Types.number,
                        default: 50,
                    },
                    {
                        name: 'filesize',
                        type: Types.string,
                        default: '11MB',
                    },
                    {
                        name: 'filename',
                        type: Types.string,
                        default: 'xxx.png',
                    },
                ],
            },
            image: {
                props: [
                    {
                        name: 'state',
                        label: 'Status',
                        type: Types.enum,
                        options: ['uploading', 'done', 'error'],
                        default: 'uploading',
                    },
                    {
                        name: 'close',
                        label: 'Close Included',
                        type: Types.bool,
                        default: false,
                    },
                    {
                        name: 'width',
                        type: Types.number,
                        default: 500,
                    },
                    {
                        name: 'progress',
                        type: Types.number,
                        default: 50,
                    },
                    {
                        name: 'filesize',
                        type: Types.string,
                        default: '11MB',
                    },
                    {
                        name: 'filename',
                        type: Types.string,
                        default: 'xxx.png',
                    },
                ],
            },
            card: {
                props: [
                    {
                        name: 'state',
                        label: 'Status',
                        type: Types.enum,
                        options: ['normal', 'disabled', 'uploading', 'done', 'error'],
                        default: 'string',
                    },
                    {
                        name: 'progress',
                        type: Types.number,
                        default: 20,
                    },
                    {
                        name: 'filename',
                        type: Types.string,
                        default: 'xxx.png',
                    },
                ],
            },
            drag: {
                props: [
                    {
                        name: 'state',
                        label: 'Status',
                        type: Types.enum,
                        options: ['normal', 'over', 'uploading', 'disabled', 'done', 'error'],
                        default: 'over',
                    },
                    {
                        name: 'width',
                        type: Types.number,
                        default: 500,
                    },
                    {
                        name: 'height',
                        type: Types.number,
                        default: 200,
                    },
                    {
                        name: 'title',
                        type: Types.string,
                        default: 'Click or Drag the file to this area to upload',
                    },
                    {
                        name: 'description',
                        type: Types.string,
                        default:
                            'Support docx, xls, PDF, rar, zip, PNG, JPG and other files upload',
                    },
                    {
                        name: 'progress',
                        type: Types.number,
                        default: 20,
                    },
                ],
                data: {
                    default: 'xxx.png\nxx2.png',
                },
            },
        }[shape];
    },
    adaptor: ({
        shape,
        state,
        close,
        width,
        height,
        progress,
        filesize,
        filename,
        title,
        description,
        style,
        data,
        ...others
    }: {
        shape?: 'normal' | 'image' | 'card' | 'drag';
        state: 'uploading' | 'done' | 'error' | 'disabled' | 'over';
        close: boolean;
        width: number;
        height: number;
        progress: number;
        filesize: string;
        filename: string;
        title: string;
        description: string;
        style: CSSProperties;
        data: string;
        [key: string]: any;
    }) => {
        if (shape === 'normal') {
            return (
                <Upload
                    {...others}
                    style={{
                        width,
                        ...style,
                    }}
                    limit={1}
                    listType="text"
                    closable={close}
                    value={[
                        {
                            name: filename,
                            state,
                            percent: progress,
                            size: getSize(filesize),
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                />
            );
        }

        if (shape === 'image') {
            return (
                <Upload
                    {...others}
                    style={{
                        width,
                        ...style,
                    }}
                    limit={1}
                    listType="image"
                    closable={close}
                    value={[
                        {
                            name: filename,
                            state,
                            percent: progress,
                            size: getSize(filesize),
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                />
            );
        }

        if (shape === 'card') {
            return (
                <Upload.Card
                    {...others}
                    style={style}
                    limit={1}
                    disabled={state === 'disabled'}
                    value={
                        ['normal', 'disabled'].indexOf(state) === -1
                            ? [
                                  {
                                      name: filename,
                                      state,
                                      percent: progress,
                                      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                  },
                              ]
                            : []
                    }
                />
            );
        }

        const list = parseData(data).filter(({ type }: any) => type === NodeType.node);

        return (
            <Upload.Dragger
                {...others}
                style={{
                    width,
                    height,
                    ...style,
                }}
                locale={{
                    ...locale.Upload,
                    drag: {
                        text: title,
                        hint: description,
                    },
                }}
                disabled={state === 'disabled'}
                className={`${state === 'over' ? 'next-upload-drag-over' : ''} ${
                    others.className || ''
                }`}
                listType={'text'}
                value={
                    ['normal', 'over', 'disabled'].indexOf(state) === -1
                        ? list.map((item: any) => {
                              return {
                                  name: item.value as string,
                                  state,
                                  percent: progress,
                              };
                          })
                        : []
                }
            />
        );
    },
};
