import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="wrap-demo">
        <div className="grid-fixed-demo-title">No wrap</div>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="8">col-8</Col>
        </Row>
        <div className="grid-fixed-demo-title">Wrap</div>
        <Row wrap>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="8">col-8</Col>
        </Row>
    </div>,
    mountNode
);
