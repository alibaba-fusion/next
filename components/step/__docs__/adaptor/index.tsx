import React from 'react';
import { Types, parseData, NodeType, ContentType } from '@alifd/adaptor-helper';
import { Step } from '@alifd/next';
import type { IContent } from '@alifd/adaptor-helper/types/parse-data';
import type { ItemProps, StepShape } from '../../types';

const _propsValue = ({ shape, level, location }: any) => {
    return {
        shape: shape,
        direction: level,
        labelPlacement: location === 'right' ? 'hoz' : 'ver',
    };
};

export default {
    name: 'Step',
    shape: ['circle', 'arrow', 'dot'],
    editor: (shape: StepShape) => {
        if (shape === 'arrow') {
            return {
                props: [
                    {
                        name: 'state',
                        type: Types.enum,
                        options: ['normal', 'disabled'],
                        default: 'normal',
                    },
                    {
                        name: 'width',
                        type: Types.number,
                        default: 500,
                    },
                ],
                data: {
                    active: true,
                    disabled: true,
                    default: 'Step 1\nStep 2\n*Step 3\nStep 4',
                },
            };
        }

        return {
            props: [
                {
                    name: 'level',
                    label: 'Orientation',
                    type: Types.enum,
                    options: [
                        { value: 'hoz', label: 'Horizontal' },
                        { value: 'ver', label: 'Vertical' },
                    ],
                },
                ...(shape === 'circle'
                    ? [
                          {
                              name: 'state',
                              type: Types.enum,
                              options: ['normal', 'percent', 'disabled'],
                              default: 'normal',
                          },
                          {
                              name: 'location',
                              type: Types.enum,
                              options: ['down', 'right'],
                              default: 'down',
                          },
                      ]
                    : [
                          {
                              name: 'state',
                              label: 'Status',
                              type: Types.enum,
                              options: ['normal', 'disabled'],
                              default: 'normal',
                          },
                      ]),
                {
                    name: 'width',
                    type: Types.number,
                    default: 600,
                },
                {
                    name: 'height',
                    type: Types.number,
                    default: 300,
                },
            ],
            data: {
                active: true,
                disabled: true,
                default:
                    'Step 1\n\tOpen the door Put the elephant into the fridge\n*Step 2\n\tOpen the door Put the elephant into the fridge\nStep 3\n\tOpen the door Put the elephant into the fridge\nStep 4\n\tOpen the door Put the elephant into the fridge',
            },
        };
    },
    propsValue: _propsValue,
    adaptor: ({ shape, level, state, location, width, height, data, style, ...others }: any) => {
        const list = parseData(data, { parseContent: true }).filter(
            ({ type }) => type === NodeType.node
        );
        const dataSouce: (ItemProps & { key: number })[] = [];
        let current = 0;
        list.forEach((item, index) => {
            const { value = '' } =
                (item.value as IContent[]).find(({ type }) => type === ContentType.icon) || {};
            dataSouce.push({
                key: index,
                icon: value,
                title: (item.value as IContent[])
                    .filter(({ type }) => type === ContentType.text)
                    .map(({ value }) => value)
                    .join(''),
                content:
                    item.children && item.children.length > 0
                        ? (item.children[0].value as IContent[])
                              .filter(({ type }) => type === ContentType.text)
                              .map(({ value }) => value)
                              .join('')
                        : '',
                disabled: state === 'disabled' || item.state === 'disabled',
            });

            if (item.state === 'active') {
                current = index;
            }
        });

        if (state === 'percent' && dataSouce[current]) {
            dataSouce[current].percent = 60;
        }

        return (
            <div
                {...others}
                style={{
                    width,
                    height,
                    ...style,
                }}
            >
                <Step
                    current={current}
                    shape={shape}
                    direction={level}
                    labelPlacement={location === 'right' ? 'hoz' : 'ver'}
                >
                    {dataSouce.map(item => (
                        <Step.Item
                            key={item.key}
                            title={item.title}
                            content={item.content}
                            icon={item.icon}
                            percent={item.percent}
                            disabled={item.disabled}
                        />
                    ))}
                </Step>
            </div>
        );
    },
    demoOptions: (demo: any) => {
        if (demo.node.props.level === 'hoz') {
            demo.node.props = {
                ...demo.node.props,
                width: 600,
                height: 120,
            };
        } else if (demo.node.props.level === 'ver') {
            demo.node.props = {
                ...demo.node.props,
                width: 200,
                height: 300,
            };
        }

        return demo;
    },
};
