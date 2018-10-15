# 设置行的宽度

- order: 7

默认 `Row` 的宽度被设置为100%，可以通过设置 `fixed` 属性为 true，来让 `Row` 的宽度不立刻随着是视口大小变动而变动，而是在某个断点下维持固定的宽度，也可以通过设置 `fixedWidth` 属性为某一断点值，从而固定 `Row` 的宽度，不再随着视口大小变动而变动。

:::lang=en-us
# Set the width of the row

- order: 7

The default width of the `Row` is set to 100%. You can set the `fixed` property to true so that the width of `Row` does not immediately change with the size of the viewport. Instead, it is maintained at a certain breakpoint. You can also set the `fixedWidth` property to a certain breakpoint value, thus fixing the width of `Row`, no longer changing with the size of the viewport.
:::

------

````jsx
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

const breakpoints = {
    xxs: 320,
    xs: 480,
    s: 720,
    m: 990,
    l: 1200,
    xl: 1500
};

class Demo extends React.Component {
    componentDidMount() {
        const row = ReactDOM.findDOMNode(this.refs.fixCol);

        this.handleResize = () => {
            let point = '';
            const innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            const keys = Object.keys(breakpoints);
            for (let i = 0; i < keys.length; i++) {
                const width = breakpoints[keys[i]];
                const nextWidth = breakpoints[keys[i + 1]];
                if (innerWidth > width && (innerWidth < nextWidth || !nextWidth)) {
                    point = keys[i];
                    break;
                }
            }

            if (point) {
                row.innerHTML = `${breakpoints[point]}px`;
            }
        };
        window.addEventListener('resize', this.handleResize);

        this.handleResize();
    }

    componentWillUnmount() {
        window.removeListener('resize', this.handleResize);
    }

    render() {
        return (
            <div className="type-demo">
                <div className="demo-title">Default</div>
                <Row>
                    <Col>100%</Col>
                </Row>
                <div className="demo-title">Set fixed to true</div>
                <Row ref="fixedRow" fixed>
                    <Col ref="fixCol" />
                </Row>
                <div className="demo-title">Set fixedWidth to 's'</div>
                <Row fixedWidth="s">
                    <Col>720px</Col>
                </Row>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.type-demo .demo-title {
    margin-left: 20px;
}

.type-demo .next-row {
    margin: 10px 0;
}

.type-demo .next-col {
    border:1px solid #CCC;
    border-radius: 3px;
    background-color:#ECECEC;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
````
