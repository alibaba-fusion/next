import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="align-demo">
        <div className="grid-fixed-demo-title">top</div>
        <Row align="top">
            <Col span="8" style={{ height: '100px', lineHeight: '100px' }}>
                col-8
            </Col>
            <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>
                col-8
            </Col>
            <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>
                col-8
            </Col>
        </Row>

        <div className="grid-fixed-demo-title">center</div>
        <Row align="center">
            <Col span="8" style={{ height: '100px', lineHeight: '100px' }}>
                col-8
            </Col>
            <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>
                col-8
            </Col>
            <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>
                col-8
            </Col>
        </Row>

        <div className="grid-fixed-demo-title">bottom</div>
        <Row align="bottom">
            <Col span="8" style={{ height: '100px', lineHeight: '100px' }}>
                col-8
            </Col>
            <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>
                col-8
            </Col>
            <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>
                col-8
            </Col>
        </Row>

        <div className="grid-fixed-demo-title">baseline</div>
        <Row align="baseline">
            <Col span="8" style={{ height: '100px', paddingTop: '20px', fontSize: '30px' }}>
                col-8
            </Col>
            <Col span="8" style={{ height: '50px', paddingTop: '20px', fontSize: '20px' }}>
                col-8
            </Col>
            <Col span="8" style={{ height: '150px', paddingTop: '20px', fontSize: '40px' }}>
                col-8
            </Col>
        </Row>

        <div className="grid-fixed-demo-title">stretch</div>
        <Row align="stretch" style={{ height: '150px' }}>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>

        <div className="grid-fixed-demo-title">override</div>
        <Row align="top">
            <Col align="bottom" span="8" style={{ height: '100px', lineHeight: '100px' }}>
                col-8
            </Col>
            <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>
                col-8
            </Col>
            <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>
                col-8
            </Col>
        </Row>
    </div>,
    mountNode
);
