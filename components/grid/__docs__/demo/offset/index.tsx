import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="offset-demo">
        <div className="grid-fixed-demo-title">Normal offset, set offset from 1 to 24</div>
        <Row>
            <Col offset="0">offset-0</Col>
        </Row>
        <Row>
            <Col offset="4">offset-4</Col>
        </Row>
        <Row>
            <Col offset="8">offset-8</Col>
        </Row>
        <Row>
            <Col offset="12">offset-12</Col>
        </Row>

        <div className="grid-fixed-demo-title">Adaptive offset</div>
        <Row>
            <Col>col</Col>
            <Col offset="12">offset-12</Col>
        </Row>
    </div>,
    mountNode
);
