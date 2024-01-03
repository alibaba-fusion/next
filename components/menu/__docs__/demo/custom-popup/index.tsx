import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from '@alifd/next';

const { PopupItem } = Menu;

class Demo extends React.Component {
    render() {
        const popupProps = {
            target: () => ReactDOM.findDOMNode(this),
            offset: [-1, 0],
            animation: false,
        };

        return (
            <Menu className="my-custom-menu" popupProps={popupProps}>
                <PopupItem key="0" label="Popup item 1">
                    <div className="my-custom-content">Custom content 1</div>
                </PopupItem>
                <PopupItem key="1" label="Popup item 2">
                    <div className="my-custom-content">Custom content 2</div>
                </PopupItem>
                <PopupItem key="2" label="Popup item 3">
                    <div className="my-custom-content">Custom content 3</div>
                </PopupItem>
                <PopupItem key="3" label="Popup item 4">
                    <div className="my-custom-content">Custom content 4</div>
                </PopupItem>
            </Menu>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
