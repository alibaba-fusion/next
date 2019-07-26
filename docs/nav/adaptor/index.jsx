/* eslint-disable no-use-before-define */
import React from 'react';
import { Types, parseData, ContentType } from '@alifd/adaptor-helper';
import { Nav } from '@alifd/next';

const createDataSouce = (list, keys = { selected: [], expanded: {} }, level = 0, prefix='') => {
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

const createMenuItem = (item) => {
    const { value } = (item.value || []).find(item => item.type === ContentType.icon) || {};
    if (item.children.length > 0) {
        return (
            <Nav.SubNav key={item.key} icon={value} disabled={item.state === 'disabled'} label={item.value ? item.value.filter(({ type }) => type === ContentType.text).map(({ value }) => value).join('') : ''}>
                {createContents(item.children)}
            </Nav.SubNav>
        );
    }

    return <Nav.Item key={item.key} icon={value} className={item.state === 'hover' ? 'next-focused' : ''} disabled={item.state === 'disabled'} children={item.value.map(({ type, value }, index) => type === 'icon' ? null : value)} />;
};

const createContents = (array = []) => {

    return array.map((item) => {
        if (item.type === 'group' && item.children.length > 0) {
            return <Nav.Group key={item.key} label={item.value}>{item.children.map(it => createMenuItem(it))}</Nav.Group>;
        }

        if (item.type === 'divider') {
            return <Nav.Divider key={item.key}/>;
        }

        return createMenuItem(item);
    });
};


export default {
    name: 'Nav',
    shape: [{
        label: 'Horizontal',
        value: 'hoz'
    }, {
        label: 'Vertical',
        value: 'ver'
    }],
    editor: (shape = 'hoz') => ({
        props: [{
            name: 'level',
            type: Types.enum,
            options: ['normal', 'primary', 'secondary', 'line'],
            default: 'normal'
        }, {
            name: 'selectLinePosition',
            type: Types.enum,
            options: shape === 'hoz' ? ['top', 'bottom', 'none'] : ['left', 'right', 'none'],
            default: shape === 'hoz' ? 'bottom' : 'right'
        }, {
            name: 'width',
            type: Types.number,
            default: shape === 'hoz' ? 640 : 200
        },
        ...(shape === 'ver' ? [{
            name: 'height',
            type: Types.number,
            default: shape === 'hoz' ? '' : 600
        }, {
            name: 'iconOnly',
            type: Types.bool,
            default: false,
        }] : [])],
        data: {
            active: true,
            hover: true,
            group: true,
            icon: true,
            default: `[account]Nav Item 1\n[account]Nav Item 2\n[account]Nav Item 3\n${shape === 'ver' ? '*' : ''}[account]Nav Item 4\n\t[account]Option 1\n\t[account]Option 2\n\t[account]Option 3\n\t[account]Option 4`
        }
    }),
    adaptor: ({ shape, level, selectLinePosition, width, height, data, style, iconOnly = false, ...others}) => {
        const list = parseData(data, { parseContent: true });
        const keys = { selected: [], expanded: [] };
        const dataSouce = createDataSouce(list, keys);

        return (
            <Nav
                {...others}
                type={level}
                direction={shape}
                iconOnly={iconOnly}
                openKeys={keys.expanded}
                selectedKeys={keys.selected}
                activeDirection={
                    selectLinePosition === 'none' ?
                        null :
                        selectLinePosition
                }
                style={{
                    width,
                    height,
                    ...style
                }}
            >
                {createContents(dataSouce)}
            </Nav>
        );
    }
};
