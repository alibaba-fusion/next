import React, { type MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { Radio, Grid } from '@alifd/next';

const { Row, Col } = Grid;
const RadioGroup = Radio.Group;

class ControlApp extends React.Component {
    state = {
        value: 'orange',
        other: 0,
    };

    onChange = (value: string) => {
        this.setState({
            value: value,
        });
        console.log('onChange', value);
    };

    onClick(e: MouseEvent) {
        console.log('onClick', e);
    }

    render() {
        return (
            <div>
                <p style={{ fontSize: 14 }}>Grid Layout:</p>
                <RadioGroup onChange={this.onChange} style={{ width: '1000px' }}>
                    <Row>
                        <Col span="8">
                            <Radio value="apple1" onClick={this.onClick}>
                                Apple
                            </Radio>
                        </Col>
                        <Col span="8">
                            <Radio value="pear1" onClick={this.onClick}>
                                Pear
                            </Radio>
                        </Col>
                        <Col span="8">
                            <Radio value="banana1" onClick={this.onClick}>
                                Banana
                            </Radio>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col span="8">
                            <Radio value="peach" onClick={this.onClick}>
                                Peach
                            </Radio>
                        </Col>
                        <Col span="8">
                            <Radio value="watermelon" onClick={this.onClick}>
                                Watermelon
                            </Radio>
                        </Col>
                        <Col span="8">
                            <Radio value="strawberry" onClick={this.onClick}>
                                Strawberry
                            </Radio>
                        </Col>
                    </Row>
                </RadioGroup>
            </div>
        );
    }
}

ReactDOM.render(<ControlApp />, mountNode);
