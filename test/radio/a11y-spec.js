import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Radio from '../../src/radio/index';
import '../../src/radio/style';
import { unmount, testReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

const list = [
    {
        value: 'apple',
        label: 'Apple',
        disabled: false,
    },
    {
        value: 'pear',
        label: 'Pear',
    },
    {
        value: 'orange',
        label: 'Orange',
        disabled: true,
    },
];

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Radio A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it.skip('should not have any violations for different states', async () => {
        wrapper = await testReact(
            <div>
                <Radio defaultChecked>test 1</Radio>&nbsp;
                <Radio checked>test 1</Radio>&nbsp;
                <Radio disabled>test 1</Radio>&nbsp;
                <Radio checked disabled>
                    test 1
                </Radio>
                &nbsp;
                <Radio />
            </div>
        );
        return wrapper;
    });

    it.skip('should not have any violations for various label methods', async () => {
        wrapper = await testReact(
            <div>
                <Radio id="apple">Apple</Radio>&nbsp;
                <Radio id="banana" />
                <label htmlFor="banana" className="next-radio-label">
                    Banana
                </label>
                &nbsp;
                <Radio id="apple2" label="Apple" className="testClassname" />
            </div>
        );
        return wrapper;
    });

    it.skip('should not have any violations for group', async () => {
        wrapper = await testReact(
            <div>
                <Radio.Group
                    dataSource={list}
                    shape="button"
                    size="small"
                    value="apple"
                />
            </div>
        );
        return wrapper;
    });
});
