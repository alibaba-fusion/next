# 分组

- order: 1

使用 `<Radio.Group>` 渲染 `<Radio>` 分组。

:::lang=en-us
# Grouping

- order: 0

Grouping `<Radio>` with `<Radio.Group>`.
:::

---

````jsx
import { Radio } from '@alifd/next';

const Shape = {
    NORMAL: 'normal',
    BUTTON: 'button'
};

const direction = {
    HORIZON: 'hoz',
    VERTICAL: 'ver'
};

class RadioGroup extends React.Component {
    state = {
        shape: Shape.NORMAL,
        direction: direction.HORIZON
    }

    onShapeChange = (shape) => {
        this.setState({ shape });
    }

    ondirectionChange = (direction) => {
        this.setState({ direction });
    }

    render() {
        return (
            <div>
                <h5>Choose a shape</h5>
                <div>
                    <Radio.Group
                        shape="button"
                        value={this.state.shape}
                        onChange={this.onShapeChange}
                    >
                        <Radio value={Shape.NORMAL}>Normal</Radio>
                        <Radio value={Shape.BUTTON}>Button</Radio>
                    </Radio.Group>
                </div>
                <h5>Choose an align-type of the item</h5>
                <div>
                    <Radio.Group
                        shape="button"
                        value={this.state.direction}
                        onChange={this.ondirectionChange}
                    >
                        <Radio value={direction.HORIZON}>Horizon</Radio>
                        <Radio
                            value={direction.VERTICAL}
                            disabled={this.state.shape === Shape.BUTTON}
                        >Vertical</Radio>
                    </Radio.Group>
                </div>
                <div className="rendered-container">
                    <h3>Rendered Result</h3>
                    <Radio.Group
                        shape={this.state.shape}
                        direction={this.state.direction}
                    >
                        <Radio value="react">React</Radio>
                        <Radio value="vue">Vue</Radio>
                        <Radio value="angular">Angular</Radio>
                    </Radio.Group>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<RadioGroup />, mountNode);
````

````css
.rendered-container {
    margin: 32px 0 0;
    padding: 0 24px 24px;
    border: 3px dashed #aaa;
    border-radius: 11px;
}
````
