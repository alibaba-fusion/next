import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="breakpoint-demo">
        <div className="grid-fixed-demo-title">Resize browser to see how each column changes</div>
        <Row>
            <Col xs={12} s={8} m={6}>
                Col
            </Col>
            <Col xs={6} s={8} m={6}>
                Col
            </Col>
            <Col xs={6} s={8} m={12}>
                Col
            </Col>
        </Row>
    </div>,
    mountNode
);
