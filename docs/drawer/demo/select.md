# 抽屉式选择

- order: 1

将 Select 的弹出模式换成 Drawer

:::lang=en-us
# Drawer Select

- order: 1

Select width drawer
:::
---

````jsx
import { Radio, Drawer, Select } from '@alifd/next';

const Option = Select.Option;

const onChange = function (value) {
    console.log(value);
};
const onBlur = function (e) {
    console.log(/onblur/,e);
};

const onToggleHighlightItem = function (item, type) {
    console.log(item, type);
};

class Demo extends React.Component {
    state = {
        placement: 'right'
    };

    onPlacementChange = dir => {
        this.setState({
            placement: dir
        });
    }

    render() {
        return (
            <div>
                <Radio.Group
                    dataSource={['right', 'bottom', 'left', 'top']}
                    defaultValue={'right'}
                    onChange={this.onPlacementChange}
                /> &nbsp;&nbsp;&nbsp;&nbsp;

                <Select id="basic-demo" popupComponent={Drawer} popupProps={{placement: this.state.placement}} autoWidth={false} onChange={onChange} onBlur={onBlur} onToggleHighlightItem={onToggleHighlightItem} defaultValue="jack" aria-label="name is" hasClear>
                    <Option value="jack">Jack</Option>
                    <Option value="frank">Frank</Option>
                    <Option value="hugo">Hugo</Option>
                </Select>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
