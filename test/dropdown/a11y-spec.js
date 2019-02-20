import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dropdown from '../../src/dropdown/index';
import '../../src/dropdown/style';
import { afterEach as a11yAfterEach, test, mountReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

const wrapperClassName = 'js-a11y-test';

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Dropdown A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        a11yAfterEach();
    });

    it('should not have any violations', async () => {
        wrapper = await mountReact(<Dropdown trigger={<a>Hello dropdown</a>} visible wrapperClassName={wrapperClassName}>
            <div>dropdown</div>
        </Dropdown>);
        return test(`.${wrapperClassName}`);
    });
});
