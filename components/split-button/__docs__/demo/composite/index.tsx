import React from 'react';
import ReactDOM from 'react-dom';
import { SplitButton } from '@alifd/next';

const { Item } = SplitButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

class CompositeSplitButton extends React.Component {
    state = {
        visible: false,
        label: 'Choose Action',
    };

    onSelect = (val: string) => {
        this.setState({
            visible: false,
            label: val,
        });
    };

    changeVisible = (visible: boolean) => {
        this.setState({
            visible,
        });
    };

    render() {
        const { visible, label } = this.state;
        return (
            <SplitButton
                label={label}
                visible={visible}
                onVisibleChange={this.changeVisible}
                onItemClick={this.onSelect}
                type="secondary"
            >
                {menu}
            </SplitButton>
        );
    }
}

ReactDOM.render(<CompositeSplitButton />, mountNode);
