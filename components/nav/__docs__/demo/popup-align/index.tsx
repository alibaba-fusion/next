import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Radio } from '@alifd/next';
import type { NavProps } from '@alifd/next/types/nav';

type AppState = Pick<NavProps, 'popupAlign'>;
const { Item, SubNav } = Nav;

class App extends React.Component {
    state: AppState = {
        popupAlign: 'outside',
    };

    setValue(popupAlign: AppState['popupAlign']) {
        this.setState({
            popupAlign,
        });
    }

    render() {
        const { popupAlign } = this.state;

        return (
            <div>
                <div className="demo-ctl">
                    <Radio.Group
                        shape="button"
                        size="medium"
                        value={popupAlign}
                        onChange={this.setValue.bind(this)}
                    >
                        <Radio value="follow">popupAlign="follow"</Radio>
                        <Radio value="outside">popupAlign="outside"</Radio>
                    </Radio.Group>
                </div>
                <Nav style={{ height: 400, width: 240 }} mode="popup" popupAlign={popupAlign}>
                    <SubNav key="sub-nav-1" label="Sub Nav 1">
                        <Item key="1">Item 1</Item>
                    </SubNav>
                    <SubNav key="sub-nav-2" label="Sub Nav 2">
                        <Item key="1">Item 1</Item>
                        <Item key="2">Item 2</Item>
                    </SubNav>
                    <SubNav key="sub-nav-3" label="Sub Nav 3">
                        <Item key="1">Item 1</Item>
                        <Item key="2">Item 2</Item>
                        <Item key="3">Item 3</Item>
                    </SubNav>
                    <SubNav key="sub-nav-4" label="Sub Nav 4">
                        <Item key="1">Item 1</Item>
                        <Item key="2">Item 2</Item>
                        <Item key="3">Item 3</Item>
                        <Item key="4">Item 4</Item>
                    </SubNav>
                </Nav>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
