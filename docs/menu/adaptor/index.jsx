/* eslint-disable no-use-before-define */
import React from 'react';
import { Types, parseData, ContentType } from '@alifd/adaptor-helper';
import { Menu, Icon } from '@alifd/next';

const createDataSouce = (list, keys = { selected: [], expanded: [] }, level = 0, prefix='') => {
    const array = [];
    let group = [];
    let grouping = false;
    let index = 0;

    list.forEach((item) => {
        switch(item.type) {
            // eslint-disable-next-line no-case-declarations
            case 'node':
                const key = `${prefix || level }-${index++}`;

                if (item.children && item.children.length > 0) {
                    item.children = createDataSouce(item.children, keys, level + 1, key);
                }

                if (grouping) {
                    group.push({
                        ...item,
                        key,
                    });
                } else {
                    array.push({
                        ...item,
                        key
                    });
                }

                if (item.state === 'active') {
                    if (item.children && item.children.length > 0) {
                        keys.expanded.push(key);
                    } else {
                        keys.selected.push(key);
                    }
                }

                return;
            case 'comment':
                if (group.length > 0) {
                    array.push({
                        type: 'group',
                        value: grouping,
                        children: group,
                        key: `${prefix || level }-${index++}`
                    });
                    group = [];
                }
                grouping = item.value;
                return;
            case 'divider':
                if (group.length > 0) {
                    array.push({
                        type: 'group',
                        value: grouping,
                        children: group,
                        key: `${prefix || level }-${index++}`
                    });
                    group = [];
                }
                grouping = false;
                array.push({
                    type: 'divider',
                    key: `${prefix || level }-${index++}`,
                });
                return;
            default: return;
        }
    });

    if (group.length > 0) {
        array.push({
            type: 'group',
            value: grouping,
            children: group,
            key: `${prefix || level }-${index++}`
        });
        group = [];
    }

    return array;
};

const createMenuItem = (item, selectType) => {
    if (item.children.length > 0) {
        return (
            <Menu.SubMenu key={item.key} disabled={item.state === 'disabled'} label={item.value ? item.value.filter(({ type }) => type === ContentType.text).map(({ value }) => value).join('') : ''}>
                {createContents(item.children, selectType)}
            </Menu.SubMenu>
        );
    }

    let Item = Menu.Item;

    if (selectType === 'checkbox') {
        Item = Menu.CheckboxItem;
    } else if (selectType === 'radio') {
        Item = Menu.RadioItem;
    }

    return <Item key={item.key} checked={item.state === 'active'} disabled={item.state === 'disabled'} children={item.value.map(({ type, value }, index) => type === 'icon' ? <Icon key={`icon_${index}`} type={value} size="small" style={{ marginRight: '4px' }} /> : value)} />;
};

const createContents = (array = [], selectType) => {

    return array.map((item) => {
        if (item.type === 'group' && item.children.length > 0) {
            return <Menu.Group key={item.key} label={item.value}>{item.children.map(it => createMenuItem(it, selectType))}</Menu.Group>;
        }

        if (item.type === 'divider') {
            return <Menu.Divider key={item.key}/>;
        }

        return createMenuItem(item, selectType);
    });
};

export default {
    name: "Menu",
    editor: () => ({
        props: [{
            name: 'selectType',
            label: 'Selection Mode',
            type: Types.enum,
            options: ['checkbox', 'radio', 'checkLeft', 'checkRight'],
            default: 'checkLeft'
        }, {
            name: 'nestMode',
            label: 'Subset Structure',
            type: Types.enum,
            options: ['inline', 'popup'],
            default: 'inline',
        }, {
            name: 'width',
            type: Types.number,
            default: 150
        }],
        data: {
            active: true,
            disable: true,
            group: true,
            icon: true,
            default: '#Group1\noption1\n*option2\n\tsub option3\n\t-sub option4\n\tsub option5\n---\n#Group2\noption1\n*option2'
        }
    }),
    adaptor: ({ selectType, nestMode, width, style, data, ...others }) => {
        const list = parseData(data, { parseContent: true });
        const keys = { selected: [], expanded: [] };
        const array = createDataSouce(list, keys);

        return (
            <Menu {...others} selectMode="multiple" popupProps={{ needAdjust: false, container: node => node }} isSelectIconRight={selectType === 'checkRight'} openKeys={keys.expanded} selectedKeys={keys.selected} style={{ width, ...style }} mode={nestMode === 'popup' ? 'popup' : 'inline'}>
                {
                    createContents(array, selectType)
                }
            </Menu>
        );
    },
    content: () => ({
        options: [{
            name: 'group',
            options: ['yes', 'no'],
            default: 'no'
        }, {
            name: 'icon',
            options: ['yes', 'no'],
            default: 'no'
        }, {
            name: 'selectType',
            options: ['checkbox', 'radio', 'checkLeft', 'checkRight'],
            default: 'checkLeft',
        }],
        transform: (props, { group, icon, selectType }) => {
            const iconStr = icon === 'yes' ? '[picture]' : '';
            const prefix = (props.data || '').indexOf('*') !== -1 ? '*' : (props.data || '').indexOf('-') !== -1 ? '-' : '';
            if (group === 'yes') {
                props.data = `#group1\n${prefix}${iconStr}option1\n${iconStr}option2\n---\n#group2\n${iconStr}option3\n${iconStr}option4`;
            } else if (icon === 'yes') {
                props.data = `${iconStr}option1\n${iconStr}option2\n${iconStr}option3\n${iconStr}option4`;
            }
            return {
                ...props,
                selectType,
            };
        }
    })
};
