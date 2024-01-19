import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Grid } from '@alifd/next';

const { Row, Col } = Grid;

const tabs = (function (length) {
    const arr = [];
    for (let i = 1; i < length; i++) {
        arr.push({ tab: `tab ${i}`, key: i, content: `tab ${i} content` });
    }
    return arr;
})(15);

ReactDOM.render(
    <div className="custom-wrapper">
        <Row className="custom-row">
            <Col fixedSpan="12" className="custom-col-sidebar">
                Sidebar
            </Col>
            <Col className="custom-col-content">
                <Tab>
                    {tabs.map(item => (
                        <Tab.Item key={item.key} title={item.tab}>
                            {item.content}
                        </Tab.Item>
                    ))}
                </Tab>
            </Col>
        </Row>
    </div>,
    mountNode
);
