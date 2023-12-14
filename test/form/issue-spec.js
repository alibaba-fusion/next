import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Input from '../../src/input';
import Form from '../../src/form';
import RGrid from '../../src/responsive-grid';

const FormItem = Form.Item;
Enzyme.configure({ adapter: new Adapter() });

describe('Form issues', () => {
    // https://github.com/alibaba-fusion/next/issues/4513
    it('should form pass common props to ResponsiveGrid', () => {
        const wrapper = mount(
            <Form responsive device="phone" rtl prefix="xxx-" warning>
                <FormItem label="name" name="name">
                    <Input />
                </FormItem>
            </Form>
        );
        assert.equal(wrapper.find(RGrid).prop('device'), 'phone');
        assert.equal(wrapper.find(RGrid).prop('rtl'), true);
        assert.equal(wrapper.find(RGrid).prop('prefix'), 'xxx-');
        assert.equal(wrapper.find(RGrid).prop('warning'), true);
    });
});
