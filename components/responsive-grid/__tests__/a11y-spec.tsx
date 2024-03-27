import React from 'react';
import ResponsiveGrid from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

const { Cell } = ResponsiveGrid;

describe('ResponsiveGrid A11y', () => {
    it('should render', () => {
        testReact(
            <ResponsiveGrid gap={10} device="desktop">
                <Cell className="mygrid grid-12" colSpan={12}>
                    12
                </Cell>
                <Cell className="mygrid grid-6" colSpan={6}>
                    6
                </Cell>
                <Cell className="mygrid grid-6" colSpan={6}>
                    6
                </Cell>
                <Cell className="mygrid grid-3" colSpan={3}>
                    3
                </Cell>
                <Cell className="mygrid grid-3" colSpan={3}>
                    3
                </Cell>
                <Cell className="mygrid grid-3" colSpan={3}>
                    3
                </Cell>
            </ResponsiveGrid>
        );
    });

    it('should render in tablet', () => {
        testReact(
            <ResponsiveGrid gap={10} device="tablet">
                <Cell className="mygrid grid-12" colSpan={12}>
                    12
                </Cell>
                <Cell className="mygrid grid-6" colSpan={6}>
                    6
                </Cell>
                <Cell className="mygrid grid-6" colSpan={6}>
                    6
                </Cell>
                <Cell className="mygrid grid-3" colSpan={{ desktop: 4, tablet: 8 }}>
                    4 tablet: 8
                </Cell>
                <Cell className="mygrid grid-3" colSpan={4}>
                    3
                </Cell>
                <Cell className="mygrid grid-3" colSpan={4}>
                    3
                </Cell>
            </ResponsiveGrid>
        );
    });

    it('should render in phone', () => {
        testReact(
            <ResponsiveGrid gap={10} device="phone">
                <Cell className="mygrid grid-12" colSpan={12}>
                    12
                </Cell>
                <Cell className="mygrid grid-6" colSpan={6}>
                    6
                </Cell>
                <Cell className="mygrid grid-6" colSpan={6}>
                    6
                </Cell>
                <Cell className="mygrid grid-3" colSpan={{ desktop: 3, phone: 2 }}>
                    3 phone: 2
                </Cell>
                <Cell className="mygrid grid-3" colSpan={3}>
                    3
                </Cell>
                <Cell className="mygrid grid-3" colSpan={3}>
                    3
                </Cell>
            </ResponsiveGrid>
        );
    });
});
