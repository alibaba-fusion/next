import React from 'react';
import { Nav } from '@alifd/next';
import { createMenuItem } from './createMenuItem';
import type { DataSourceOption } from './types';

export function createContents(array: DataSourceOption[] = []) {
    return array.map(item => {
        if (item.type === 'group' && item.children && item.children.length > 0) {
            return (
                <Nav.Group key={item.key} label={item.value}>
                    {item.children.map(it => createMenuItem(it))}
                </Nav.Group>
            );
        }

        if (item.type === 'divider') {
            return <Nav.Divider key={item.key} />;
        }

        return createMenuItem(item);
    });
}
