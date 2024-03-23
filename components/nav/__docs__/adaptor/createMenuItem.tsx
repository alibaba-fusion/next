import React from 'react';
import { Nav } from '@alifd/next';
import { ContentType } from '@alifd/adaptor-helper';
import { createContents } from './createContents';
import type { DataSourceOption } from './types';

export function createMenuItem(item: DataSourceOption) {
    const { value } =
        ((Array.isArray(item.value) && item.value) || []).find(
            item => item && typeof item === 'object' && item.type === ContentType.icon
        ) || {};
    if (item.children && item.children.length > 0) {
        return (
            // TODO SubNav 并不支持 disabled 属性 （disabled={item.state === 'disabled'}）
            <Nav.SubNav
                key={item.key}
                icon={value}
                label={
                    Array.isArray(item.value)
                        ? item.value
                              .filter(({ type }) => type === ContentType.text)
                              .map(({ value }) => value)
                              .join('')
                        : ''
                }
            >
                {createContents(item.children)}
            </Nav.SubNav>
        );
    }

    return (
        <Nav.Item
            key={item.key}
            icon={value}
            className={item.state === 'hover' ? 'next-focused' : ''}
            disabled={item.state === 'disabled'}
            children={(Array.isArray(item.value) ? item.value : ([] as Record<string, any>[])).map(
                ({ type, value }) => (type === 'icon' ? null : value)
            )}
        />
    );
}
