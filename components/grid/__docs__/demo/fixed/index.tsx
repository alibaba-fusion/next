import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="mixin-demo">
        <div className="grid-fixed-demo-title">
            Two-column layout, left column fixed, right column adaptive
        </div>
        <Row>
            <Col fixedSpan="16">col-fixed-16</Col>
            <Col>col</Col>
        </Row>

        <div className="grid-fixed-demo-title">
            Two-column layout, right column fixed, left column adaptive
        </div>
        <Row>
            <Col>col</Col>
            <Col fixedSpan="16">col-fixed-16</Col>
        </Row>

        <div className="grid-fixed-demo-title">
            Three-column layout, left column and right column fixed, middle column adaptive
        </div>
        <Row>
            <Col fixedSpan="8">col-fixed-8</Col>
            <Col>col</Col>
            <Col fixedSpan="8">col-fixed-8</Col>
        </Row>
    </div>,
    mountNode
);
