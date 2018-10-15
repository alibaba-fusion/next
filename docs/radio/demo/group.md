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
    BUTTON: 'button',
};

const ItemDirection = {
    HORIZON: 'hoz',
    VERTICAL: 'ver',
};

class RadioGroup extends React.Component {
    state = {
        shape: Shape.NORMAL,
        itemDirection: ItemDirection.HORIZON,
    }

    onShapeChange = (shape) => {
        this.setState({ shape });
    }

    onItemDirectionChange = (itemDirection) => {
        this.setState({ itemDirection });
    }

    render() {
        return (
            <div>
                <h5>Choose a shape</h5>
                <p>
                    <Radio.Group
                        shape="button"
                        value={this.state.shape}
                        onChange={this.onShapeChange}
                    >
                        <Radio value={Shape.NORMAL}>Normal</Radio>
                        <Radio value={Shape.BUTTON}>Button</Radio>
                    </Radio.Group>
                </p>
                <h5>Choose an align-type of the item</h5>
                <p>
                    <Radio.Group
                        shape="button"
                        value={this.state.itemDirection}
                        onChange={this.onItemDirectionChange}
                    >
                        <Radio value={ItemDirection.HORIZON}>Horizon</Radio>
                        <Radio
                            value={ItemDirection.VERTICAL}
                            disabled={this.state.shape === Shape.BUTTON}
                        >Vertical</Radio>
                    </Radio.Group>
                </p>
                <div className="rendered-container">
                    <h3>Rendered Result</h3>
                    <Radio.Group
                        shape={this.state.shape}
                        itemDirection={this.state.itemDirection}
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
