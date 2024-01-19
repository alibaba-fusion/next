import React from 'react';
import ReactDOM from 'react-dom';
import { Radio, Drawer, Select } from '@alifd/next';

const Option = Select.Option;

const onChange = function (value) {
    console.log(value);
};
const onBlur = function (e) {
    console.log(/onblur/, e);
};

const onToggleHighlightItem = function (item, type) {
    console.log(item, type);
};

class Demo extends React.Component {
    state = {
        placement: 'right',
    };

    onPlacementChange = dir => {
        this.setState({
            placement: dir,
        });
    };

    render() {
        const drawerProps = {
            placement: this.state.placement,
            closeMode: 'mask',
            bodyStyle: { padding: 0 },
        };
        return (
            <div>
                <Radio.Group
                    dataSource={['right', 'bottom', 'left', 'top']}
                    defaultValue={'right'}
                    onChange={this.onPlacementChange}
                />
                <br />
                <br />
                <Select
                    id="basic-demo"
                    popupComponent={Drawer}
                    popupProps={drawerProps}
                    autoWidth={false}
                    onChange={onChange}
                    onBlur={onBlur}
                    onToggleHighlightItem={onToggleHighlightItem}
                    defaultValue="jack"
                    aria-label="name is"
                    hasClear
                >
                    <Option value="jack">Jack</Option>
                    <Option value="frank">Frank</Option>
                    <Option value="hugo">Hugo</Option>
                </Select>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
