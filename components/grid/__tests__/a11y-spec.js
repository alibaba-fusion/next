import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Grid from '../../src/grid';
import { unmount, testReact } from '../util/a11y/validate';

/* eslint-disable react/jsx-filename-extension */
/* global describe it beforeEach afterEach */

const { Row, Col } = Grid;

Enzyme.configure({ adapter: new Adapter() });

describe('Row a11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations', async () => {
        wrapper = await testReact(
            <div role="grid">
                <Row>
                    <Col span={6}>1</Col>
                    <Col span={6}>2</Col>
                    <Col span={6}>3</Col>
                    <Col span={6}>4</Col>
                </Row>
                <Row>
                    <Col span={6} offset={6}>
                        1
                    </Col>
                    <Col span={6} offset={6}>
                        2
                    </Col>
                </Row>
            </div>
        );
        return wrapper;
    });
});
