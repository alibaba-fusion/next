import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="hidden-demo">
        <div className="grid-fixed-demo-title">
            Hide columns under all breakpoints, resize browser to see if the second column is hidden
            or shown
        </div>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="16" hidden>
                col-16
            </Col>
        </Row>

        <div className="grid-fixed-demo-title">
            Hide columns under a breakpoint such as xs, resize browser to see if the second column
            is hidden or shown
        </div>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="16" hidden="xs">
                col-16
            </Col>
        </Row>

        <div className="grid-fixed-demo-title">
            Hide columns under some breakpoints such as xs and s, resize browser to see if the
            second column is hidden or shown
        </div>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="16" hidden={['xs', 's']}>
                col-16
            </Col>
        </Row>
    </div>,
    mountNode
);
