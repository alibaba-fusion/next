import React from 'react';
import { Types, parseData } from '@alifd/adaptor-helper';
import { Tab, Icon } from '@alifd/next';

// 定义属性接口
interface AdaptorProps {
    shape: 'pure' | 'wrapped' | 'text' | 'capsule';
    size: 'medium' | 'small';
    closable: boolean;
    overflow?: 'slide' | 'dropdown';
    width?: number;
    position?: 'top' | 'left' | 'right';
    style?: React.CSSProperties;
    data: any;
}

export default {
    name: 'Tab',
    shape: ['pure', 'wrapped', 'text', 'capsule'],
    editor: (shape = 'pure') => {
        const props: Array<{
            name: string;
            type: any;
            options?: string[];
            default: any;
            label?: string;
        }> = [
            {
                name: 'size',
                type: Types.enum,
                options: ['medium', 'small'],
                default: 'medium',
            },
            {
                name: 'closable',
                type: Types.bool,
                default: false,
            },
        ];

        if (['pure', 'wrapped', 'text'].indexOf(shape) !== -1) {
            props.push({
                name: 'overflow',
                label: 'Overflow Indicator',
                type: Types.enum,
                options: ['slide', 'dropdown'],
                default: 'slide',
            });
            props.push({
                name: 'width',
                type: Types.number,
                default: 480,
            });
        }

        if (shape === 'wrapped') {
            props.splice(props.length - 2, 0, {
                name: 'position',
                type: Types.enum,
                options: ['top', 'left', 'right'],
                default: 'top',
            });
        }

        return {
            props,
            data: {
                active: true,
                disable: true,
                default: 'Tab 1\n*Tab 2\nTab 3',
            },
        };
    },
    adaptor: ({
        shape,
        size,
        closable,
        overflow,
        width,
        position,
        style = {},
        data,
        ...others
    }: AdaptorProps) => {
        const list = parseData(data, { parseContent: true });
        const activeKey = list.findIndex((item: any) => item.state === 'active');

        return (
            <Tab
                {...others}
                style={{ minWidth: style.width ? 0 : width, ...style }}
                activeKey={activeKey}
                shape={shape}
                size={size}
                excessMode={overflow}
                tabPosition={position}
            >
                {list.map((item: any, index: number) => (
                    <Tab.Item
                        key={index}
                        title={item.value.map(
                            ({ type, value }: { type: string; value: string }, i: number) =>
                                type === 'icon' ? <Icon key={`icon_${i}`} type={value} /> : value
                        )}
                        closeable={closable}
                        disabled={item.state === 'disabled'}
                    />
                ))}
            </Tab>
        );
    },
};
