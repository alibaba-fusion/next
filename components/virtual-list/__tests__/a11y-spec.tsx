import React from 'react';
import VirtualList from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

const generateData = (len: number) => {
    const dataSource = [];

    for (let i = 0; i < len; i++) {
        dataSource.push(<li key={`${i}-test`}>{i}</li>);
    }

    return dataSource;
};

describe('VirtualList A11y', () => {
    it('should not have any violations', async () => {
        await testReact(<VirtualList>{generateData(10)}</VirtualList>);
    });

    it('should not have any violations for jump index', async () => {
        await testReact(<VirtualList jumpIndex={50}>{generateData(10)}</VirtualList>);
    });
});
