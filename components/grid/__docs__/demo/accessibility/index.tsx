import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
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
    </div>,
    mountNode
);
