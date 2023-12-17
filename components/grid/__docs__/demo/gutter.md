# 列间距

- order: 2

列与列间距默认为0，可以通过设置 `Row` 的 `gutter` 属性来改变列间距。

:::lang=en-us
# Columns spacing

- order: 2

The spacing of the columns defaults to 0. You can change the column spacing by setting the `gutter` property of `Row`.
:::

----

````jsx
import { Range, Grid } from '@alifd/next';

const { Row, Col } = Grid;

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gutter: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(gutter) {
        this.setState({
            gutter
        });
    }

    render() {
        const { gutter } = this.state;

        return (
            <div className="gutter-demo">
                <Range value={gutter} onChange={this.handleChange} marks={4} step={4} max={16} hasTip={false} style={{ width: '400px', marginLeft: '20px', marginTop: '30px' }} />
                <Row gutter={gutter}>
                    <Col span="6"><div className="demo-col-inset">col-6</div></Col>
                    <Col span="6"><div className="demo-col-inset">col-6</div></Col>
                    <Col span="6"><div className="demo-col-inset">col-6</div></Col>
                    <Col span="6"><div className="demo-col-inset">col-6</div></Col>
                </Row>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.gutter-demo .grid-fixed-demo-title {
    margin-left: 20px;
}

.gutter-demo .next-row {
    margin: 10px 0;
}

.gutter-demo .demo-col-inset {
    border:1px solid #CCC;
    border-radius: 3px;
    background-color:#ECECEC;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
````
