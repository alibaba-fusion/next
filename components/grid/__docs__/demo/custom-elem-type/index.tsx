import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="basic-demo">
        <div className="grid-fixed-demo-title">Rendered as `ul` and `li`</div>
        <Row component="ul">
            <Col span="12" component="li">
                col-12
            </Col>
            <Col span="12" component="li">
                col-12
            </Col>
        </Row>
    </div>,
    mountNode
);
