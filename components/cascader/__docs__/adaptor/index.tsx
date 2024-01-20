import React from 'react';
import { Types, NodeType, parseData } from '@alifd/adaptor-helper';
import { Cascader, Icon } from '@alifd/next';

let index = 1000;
const createDataSource = (list, map = {}) => {
    if (!list) return [];
    return list
        .filter(item => item.type === NodeType.node)
        .map(({ value, children, state }) => {
            const key = String(index++);
            if (state === 'active') {
                if (!children || children.length === 0) {
                    map.selecteds.push(key);
                } else {
                    map.expandeds.push(key);
                }
            }

            return {
                value: key,
                label: value,
                disabled: state === 'disabled',
                children: createDataSource(children, map),
            };
        });
};
export default {
    name: 'Cascader',
    editor: () => ({
        props: [
            {
                name: 'checkbox',
                type: Types.bool,
                default: false,
            },
            {
                name: 'width',
                type: Types.number,
                default: 120,
            },
        ],
        data: {
            active: true,
            disable: true,
            icon: true,
            default:
                'Option1\n\tOption1-1\n\tOption1-2\n\tOption1-3\n\tOption1-4\n\tOption1-5\n\tOption1-6\nOption2\n\tOption2-1\n\tOption2-2\n\tOption2-3\n\tOption2-4\n\tOption2-5\n\tOption2-6\nOption3\n\tOption3-1\n\tOption3-2\n\tOption3-3\n\tOption3-4\n\tOption3-5\n\tOption3-6\nOption4\n\tOption4-1\n\tOption4-2\n\tOption4-3\n\tOption4-4\n\tOption4-5\n\tOption4-6\nOption5\n\tOption5-1\n\tOption5-2\n\tOption5-3\n\tOption5-4\n\tOption5-5\n\tOption5-6\nOption6\n\tOption6-1\n\tOption6-2\n\tOption6-3\n\tOption6-4\n\tOption6-5\n\tOption6-6',
        },
    }),
    adaptor: ({ checkbox, width, data, ...others }) => {
        const list = parseData(data);
        const map = { selecteds: [], expandeds: [] };
        const dataSource = createDataSource(list, map);
        const value = map.selecteds;
        const itemRender = ({ label = '' }) => {
            return label
                .replace(/(\[.*?\])/g, '\n$1\n')
                .split('\n')
                .filter(v => !!v)
                .map((d, i) => {
                    let icon;
                    switch (true) {
                        case /^\[(.*)\]$/.test(d):
                            icon = RegExp.$1;
                            if (!icon) return '';
                            return (
                                <Icon
                                    style={{ marginRight: '4px' }}
                                    type={icon}
                                    size="small"
                                    key={icon + i}
                                />
                            );
                        default:
                            return d;
                    }
                });
        };

        return (
            <Cascader
                {...others}
                itemRender={itemRender}
                canOnlySelectLeaf
                listStyle={{ width: width <= 0 ? '' : width }}
                dataSource={dataSource}
                expandedValue={map.expandeds}
                value={value}
                multiple={checkbox}
            />
        );
    },
};
