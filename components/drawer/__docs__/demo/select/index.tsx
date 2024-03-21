import React from 'react';
import ReactDOM from 'react-dom';
import { Radio, Drawer, Select } from '@alifd/next';
import type { SelectProps } from '@alifd/next/lib/select';
import type { RadioProps } from '@alifd/next/lib/radio';

interface onToggleHighlightItemProps {
    deep: number;
    value: string;
    label: string;
}

const Option = Select.Option;

const onChange: SelectProps['onChange'] = value => {
    console.log(value);
};

const onBlur: SelectProps['onBlur'] = e => {
    console.log(/onblur/, e);
};

const onToggleHighlightItem = (item: onToggleHighlightItemProps, type: 'up' | 'down') => {
    console.log(item, type);
};

class Demo extends React.Component {
    state = {
        placement: 'right',
    };

    onPlacementChange: RadioProps['onChange'] = dir => {
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
