import React from 'react';
import { Types, parseData, NodeType } from '@alifd/adaptor-helper';
import { Transfer } from '@alifd/next';
import locale from '../../../locale/en-us';

export default {
    name: 'Transfer',
    editor: () => ({
        props: [
            {
                name: 'level',
                label: 'Type',
                type: Types.enum,
                options: ['normal', 'simple'],
                default: 'normal',
            },
            {
                name: 'search',
                type: Types.bool,
                default: false,
            },
            {
                name: 'sourcePanelTitle',
                label: 'Source Title',
                type: Types.string,
                default: 'Title',
            },
            {
                name: 'targetPanelTitle',
                label: 'Target Title',
                type: Types.string,
                default: 'Title',
            },
        ],
        data: {
            disabled: true,
            active: true,
            default: `Content1\nContent2\n*Content3\n*Content4\n*Content5\nContent6\nContent7\nContent8\nContent9\nContent10`,
        },
    }),
    adaptor: ({ level, search, sourcePanelTitle, targetPanelTitle, data, ...others }) => {
        const list = parseData(data).filter(({ type }) => type === NodeType.node);
        const keys = [];
        const dataSource = list.map((item, i) => {
            if (item.state === 'active') {
                keys.push(`${i}`);
            }
            return {
                label: `${item.value}`,
                value: `${i}`,
                disabled: item.state === 'disabled',
            };
        });

        return (
            <Transfer
                {...others}
                key={new Date().getTime()}
                locale={locale.Transfer}
                mode={level}
                showSearch={search}
                searchPlaceholder="Please Input"
                dataSource={dataSource}
                defaultLeftChecked={keys}
                titles={[sourcePanelTitle, targetPanelTitle]}
            />
        );
    },
};
