import React from 'react';
import ReactDOM from 'react-dom';
import { Range, Grid } from '@alifd/next';

const { Row, Col } = Grid;

class Demo extends React.Component<any, { gutter: number }> {
    constructor(props: any) {
        super(props);

        this.state = {
            gutter: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(gutter: number) {
        this.setState({
            gutter,
        });
    }

    render() {
        const { gutter } = this.state;

        return (
            <div className="gutter-demo">
                <Range
                    value={gutter}
                    onChange={this.handleChange}
                    marks={4}
                    step={4}
                    max={16}
                    hasTip={false}
                    style={{ width: '400px', marginLeft: '20px', marginTop: '30px' }}
                />
                <Row gutter={gutter}>
                    <Col span="6">
                        <div className="demo-col-inset">col-6</div>
                    </Col>
                    <Col span="6">
                        <div className="demo-col-inset">col-6</div>
                    </Col>
                    <Col span="6">
                        <div className="demo-col-inset">col-6</div>
                    </Col>
                    <Col span="6">
                        <div className="demo-col-inset">col-6</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
