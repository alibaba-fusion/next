import React from 'react';
import { Types, parseData, NodeType, ContentType } from '@alifd/adaptor-helper';
import { Timeline } from '@alifd/next';

export default {
    name: 'Timeline',
    editor: () => ({
        props: [
            {
                name: 'state',
                label: 'Status',
                type: Types.enum,
                options: ['normal', 'success', 'error'],
                default: 'normal',
            },
            {
                name: 'timeLeft',
                label: 'Position',
                type: Types.bool,
                default: false,
            },
            {
                name: 'content',
                Type: Types.enum,
                options: ['titleAndContentAndTime', 'title', 'titleAndContent', 'timeAndTime'],
                default: 'titleAndContentAndTime',
            },
            {
                name: 'height',
                type: Types.number,
                default: 300,
            },
        ],
        data: {
            active: true,
            icon: true,
            default: [
                'Signed\n\tSigned, sign Alibaba is a small post office, thanks to the use of STO, look forward to once again at your service\n\tJun, 10, 2016 10:30:00',
                '[atm]Ship\n\tExpress has arrived in Hangzhou, Zhejiang Binjiang company\n\tJun, 10, 2016 09:30:00',
                'Ship\n\tZhejiang Hangzhou Riverside company sent a member for you to send pieces\n\tJun, 10, 2016 09:03:00',
                'Ship\n\tZhejiang Hangzhou Transshipment Center has been issued\n\tJun, 10, 2016 06:10:00',
            ].join('\n'),
        },
    }),
    adaptor: ({ state, timeLeft, content, height, style, data, ...others }: any) => {
        interface IListItem {
            value: any[];
            type: any;
            children: { value: any[] }[];
        }
        const list = (parseData(data, { parseContent: true }) as IListItem[]).filter(
            ({ type }) => type === NodeType.node
        );
        const array: any[] = [];

        list.forEach((item, index) => {
            const { value = '' } = item.value.find(({ type }) => type === ContentType.icon) || {};
            const obj: any = {
                title: item.value
                    .filter(({ type }) => type === ContentType.text)
                    .map(({ value }) => value)
                    .join(''),
                icon: value,
            };

            item.children.forEach((it, index) => {
                if (index === 0) {
                    obj.content = it.value
                        .filter(({ type }) => type === ContentType.text)
                        .map(({ value }) => value)
                        .join('');
                } else if (index === 1) {
                    obj[timeLeft ? 'time' : 'timeLeft'] = it.value
                        .filter(({ type }) => type === ContentType.text)
                        .map(({ value }) => value)
                        .join('');
                }
            });

            if (index === 0) {
                obj.state = state === 'normal' ? 'process' : state;
            }

            array.push(obj);
        });

        return (
            <Timeline {...others} style={{ minHeight: height, ...style }}>
                {array.map(({ title, icon, content, time, timeLeft, state }, index) => (
                    <Timeline.Item
                        key={index}
                        state={state}
                        title={title}
                        icon={icon}
                        time={time}
                        timeLeft={timeLeft}
                        content={content}
                    />
                ))}
            </Timeline>
        );
    },
};
