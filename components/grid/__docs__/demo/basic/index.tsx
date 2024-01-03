import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="basic-demo">
        <div className="grid-fixed-demo-title">One</div>
        <Row>
            <Col span="24">col-24</Col>
        </Row>

        <div className="grid-fixed-demo-title">Two</div>
        <Row>
            <Col span="12">col-12</Col>
            <Col span="12">col-12</Col>
        </Row>

        <div className="grid-fixed-demo-title">Three</div>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>

        <div className="grid-fixed-demo-title">Four</div>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>

        <div className="grid-fixed-demo-title">Five</div>
        <Row>
            <Col span="1p5">col-1p5</Col>
            <Col span="1p5">col-1p5</Col>
            <Col span="1p5">col-1p5</Col>
            <Col span="1p5">col-1p5</Col>
            <Col span="1p5">col-1p5</Col>
        </Row>

        <div className="grid-fixed-demo-title">Six</div>
        <Row>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
    </div>,
    mountNode
);
