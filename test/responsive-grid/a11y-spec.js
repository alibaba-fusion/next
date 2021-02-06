import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResponsiveGrid from '../../src/responsive-grid/index';
import '../../src/responsive-grid/style';
import { unmount, testReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });
const { Cell } = ResponsiveGrid;
/* eslint-disable no-undef, react/jsx-filename-extension */
describe('ResponsiveGrid A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should render', async () => {
        wrapper = await testReact(<ResponsiveGrid gap={10} device="desktop">
        <Cell className="mygrid grid-12" colSpan={12}>12</Cell>
        <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
        <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
        <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
        <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
        <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
      </ResponsiveGrid>);
        return wrapper;
    });

    it('should render in tablet', async () => {
        wrapper = await testReact(<ResponsiveGrid gap={10} device="tablet">
        <Cell className="mygrid grid-12" colSpan={12}>12</Cell>
        <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
        <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
        <Cell className="mygrid grid-3" colSpan={{desktop: 4, tablet: 8}}>4 tablet: 8</Cell>
        <Cell className="mygrid grid-3" colSpan={4}>3</Cell>
        <Cell className="mygrid grid-3" colSpan={4}>3</Cell>
      </ResponsiveGrid>);
        return wrapper;
    });

    it('should render in phone', async () => {
        wrapper = await testReact(<ResponsiveGrid gap={10} device="phone">
        <Cell className="mygrid grid-12" colSpan={12}>12</Cell>
        <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
        <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
        <Cell className="mygrid grid-3" colSpan={{desktop: 3, phone: 2}}>3 phone: 2</Cell>
        <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
        <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
      </ResponsiveGrid>);
        return wrapper;
    });
});
