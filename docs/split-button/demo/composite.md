# 复合使用

- order: 3

复合使用菜单，监听菜单行为展示左侧操作。

:::lang=en-us
# Composite

- order: 3

A more complex use case, control menu with attributes from Menu.

:::

---

````jsx
import { SplitButton } from '@alifd/next';

const { Item } = SplitButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

class CompositeSplitButton extends React.Component {
    state = {
        visible: false,
        label: 'Choose Action'
    }

    onSelect = val => {
        this.setState({
            visible: false,
            label: val
        });
    }

    changeVisible = visible => {
        this.setState({
            visible
        });
    }

    render() {
        const { visible, label } = this.state;
        return (<SplitButton label={label} visible={visible} onVisibleChange={this.changeVisible} onItemClick={this.onSelect} type="primary">{menu}</SplitButton>);
    }
}

ReactDOM.render(<CompositeSplitButton />, mountNode);
````
