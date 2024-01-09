import React from 'react';
import Grid from '../index';
import { testReact } from '../../util/__tests__/a11y/validate';

const { Row, Col } = Grid;

describe('Row a11y', () => {
    it('should not have any violations', async () => {
        await testReact(
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
    });
});
