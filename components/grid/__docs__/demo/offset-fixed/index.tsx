import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="offset-fixed-demo">
        <div className="grid-fixed-demo-title">Normal offset, set offset from 1 to 30</div>
        <Row>
            <Col fixedOffset="0">offset-fixed-0</Col>
        </Row>
        <Row>
            <Col fixedOffset="4">offset-fixed-4</Col>
        </Row>
        <Row>
            <Col fixedOffset="8">offset-fixed-8</Col>
        </Row>
        <Row>
            <Col fixedOffset="12">offset-fixed-12</Col>
        </Row>

        <div className="grid-fixed-demo-title">Adaptive offset</div>
        <Row>
            <Col>col</Col>
            <Col fixedOffset="12">offset-fixed-12</Col>
        </Row>
    </div>,
    mountNode
);
