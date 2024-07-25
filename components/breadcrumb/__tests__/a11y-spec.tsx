import React from 'react';
import Breadcrumb from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Breadcrumb A11y', () => {
    it('should not have any violations when empty', async () => {
        await testReact(<Breadcrumb />);
    });
    it('should not have any violations for breadcrumb items', async () => {
        await testReact(
            <Breadcrumb>
                <Breadcrumb.Item link="javascript:void(0);">Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    T-shirts&nbsp; <b>78,999</b> Results
                </Breadcrumb.Item>
            </Breadcrumb>
        );
    });
    it('should not have any violations for max node limit', async () => {
        await testReact(
            <Breadcrumb maxNode={2}>
                <Breadcrumb.Item>1</Breadcrumb.Item>
                <Breadcrumb.Item>2</Breadcrumb.Item>
                <Breadcrumb.Item>3</Breadcrumb.Item>
            </Breadcrumb>
        );
    });
    it('should not have any violations for separator', async () => {
        await testReact(
            <Breadcrumb separator="/">
                <Breadcrumb.Item>1</Breadcrumb.Item>
                <Breadcrumb.Item>2</Breadcrumb.Item>
                <Breadcrumb.Item>3</Breadcrumb.Item>
            </Breadcrumb>
        );
    });
});
