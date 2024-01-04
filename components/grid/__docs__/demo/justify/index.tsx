import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="justify-demo">
        <div className="grid-fixed-demo-title">start</div>
        <Row justify="start">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>

        <div className="grid-fixed-demo-title">center</div>
        <Row justify="center">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>

        <div className="grid-fixed-demo-title">end</div>
        <Row justify="end">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>

        <div className="grid-fixed-demo-title">space-between</div>
        <Row justify="space-between">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>

        <div className="grid-fixed-demo-title">space-around</div>
        <Row justify="space-around">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
    </div>,
    mountNode
);
