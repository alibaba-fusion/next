import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import simulateEvent from 'simulate-event';
import assert from 'power-assert';
import sinon from 'sinon';
import Range from '../index';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';

/* eslint-disable react/no-multi-comp */
Enzyme.configure({ adapter: new Adapter() });

describe('Range A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });
    it('should not have any violations for range without tips', async () => {
        wrapper = await testReact(
            <div>
                <Range defaultValue={10} hasTip={false} tooltipVisible={false} />
            </div>
        );
        return wrapper;
    });

    /**
     * TODO: 'aria-expanded' is added by 'Overlay' by default which conflicts with `role = slider` with respect to a11y standards.
     * To fix this will require structural change, ignore temporarily.
     */
    it.skip('should not have any violations for range with tips', async () => {
        wrapper = await testReact(
            <div>
                <Range
                    defaultValue={512}
                    hasTip={true}
                    tooltipVisible={true}
                    min={0}
                    max={1024}
                    step={128}
                    marks={[0, 1024]}
                />
            </div>
        );
        return wrapper;
    });
});
