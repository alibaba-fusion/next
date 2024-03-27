import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@alifd/next';

type BreakPoints = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

const { Row, Col } = Grid;

const breakpoints = {
    xxs: 320,
    xs: 480,
    s: 720,
    m: 990,
    l: 1200,
    xl: 1500,
} as Record<BreakPoints, number>;

class Demo extends React.Component {
    handleResize: () => void;

    componentDidMount() {
        const row = ReactDOM.findDOMNode(this.refs.fixCol);

        this.handleResize = () => {
            let point = '' as BreakPoints;
            const innerWidth =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
            const keys = Object.keys(breakpoints) as BreakPoints[];
            for (let i = 0; i < keys.length; i++) {
                const width = breakpoints[keys[i]];
                const nextWidth = breakpoints[keys[i + 1]];
                if (innerWidth > width && (innerWidth < nextWidth || !nextWidth)) {
                    point = keys[i];
                    break;
                }
            }

            if (point) {
                (row as Element).innerHTML = `${breakpoints[point]}px`;
            }
        };
        window.addEventListener('resize', this.handleResize);

        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <div className="type-demo">
                <div className="grid-fixed-demo-title">Default</div>
                <Row>
                    <Col>100%</Col>
                </Row>
                <div className="grid-fixed-demo-title">Set fixed to true</div>
                <Row ref="fixedRow" fixed>
                    <Col ref="fixCol" />
                </Row>
                <div className="grid-fixed-demo-title">Set fixedWidth to 's'</div>
                <Row fixedWidth="s">
                    <Col>720px</Col>
                </Row>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
