/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import Input from '../../input';
import Field from '../index';

Enzyme.configure({ adapter: new Adapter() });

/* global describe it */
describe('rules', () => {
    it('required', function (done) {
        const field = new Field(this);
        const inited = field.init('input', {
            rules: [
                {
                    required: true,
                    message: 'cant be null',
                },
            ],
        });

        const wrapper = mount(<Input {...inited} />);
        wrapper.find('input').simulate('change', {
            target: {
                value: '',
            },
        });

        assert(field.getError('input')[0] === 'cant be null');

        // validator can't callback when option.rules is an empty Array
        mount(<Input {...field.init('input', { rules: [] })} />);

        const callback = sinon.spy();
        field.validate(callback);

        assert(callback.calledOnce === true);

        done();
    });
    it('triger', function (done) {
        const field = new Field(this);
        const inited = field.init('input', {
            rules: [
                {
                    required: true,
                    trigger: 'onBlur',
                    message: 'cant be null',
                },
            ],
        });

        const wrapper = mount(<Input {...inited} />);
        wrapper.find('input').simulate('blur');

        assert(field.getError('input')[0] === 'cant be null');

        const inited2 = field.init('input2', {
            rules: [
                {
                    required: true,
                    trigger: ['onBlur'],
                    message: 'cannot be null',
                },
            ],
        });

        const wrapper2 = mount(<Input {...inited2} />);
        wrapper2.find('input').simulate('blur');

        assert(field.getError('input2')[0] === 'cannot be null');

        done();
    });
    it('validator', function (done) {
        const field = new Field(this);
        const inited = field.init('input', {
            rules: [
                {
                    validator: (rule, value, callback) => {
                        if (!value) {
                            callback('不能为空！');
                        } else {
                            callback();
                        }
                    },
                },
            ],
        });

        const wrapper = mount(<Input {...inited} />);
        wrapper.find('input').simulate('change', {
            target: {
                value: '',
            },
        });

        assert(field.getError('input')[0] === '不能为空！');
        done();
    });
});
