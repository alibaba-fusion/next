import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import assert from 'power-assert';
import Select from '../../select';
import Button from '../../button';
import Input from '../index';

Enzyme.configure({ adapter: new Adapter() });

const select = (
    <Select>
        <option value="1">1</option>
    </Select>
);
const button = <Button>search</Button>;

describe('input-group', () => {
    describe('render', () => {
        it('should accept addonBefore', () => {
            let wrapper = mount(
                <Input.Group addonBefore={select}>
                    <Input hasClear defaultValue="abc" style={{ width: '100%' }} />
                </Input.Group>
            );
            assert(wrapper.find('span.next-input-group-addon').length === 1);
            assert(wrapper.find('span.next-input-group-addon.next-before').length === 1);
            assert(wrapper.find('span.next-input-group-addon.next-after').length === 0);
        });

        it('should accept addonAfter', () => {
            let wrapper = mount(
                <Input.Group addonAfter={button}>
                    <Input hasClear defaultValue="abc" style={{ width: '100%' }} />
                </Input.Group>
            );
            assert(wrapper.find('span.next-input-group-addon').length === 1);
            assert(wrapper.find('span.next-input-group-addon.next-before').length === 0);
            assert(wrapper.find('span.next-input-group-addon.next-after').length === 1);
        });
    });
});
