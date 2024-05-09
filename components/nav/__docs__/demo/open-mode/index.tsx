import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Radio } from '@alifd/next';
import type { NavProps } from '@alifd/next/types/nav';

type AppState = Pick<NavProps, 'openMode'>;

const { Item, SubNav } = Nav;

class App extends React.Component {
    state: AppState = {
        openMode: 'single',
    };

    setValue(openMode: AppState['openMode']) {
        this.setState({
            openMode,
        });
    }

    render() {
        const { openMode } = this.state;

        return (
            <div>
                <div className="demo-ctl">
                    <Radio.Group
                        shape="button"
                        size="medium"
                        value={openMode}
                        onChange={this.setValue.bind(this)}
                    >
                        <Radio value="single">openMode="single"</Radio>
                        <Radio value="multiple">openMode="multiple"</Radio>
                    </Radio.Group>
                </div>
                <Nav style={{ width: 240 }} openMode={openMode} defaultOpenKeys={['0-0']}>
                    <SubNav label="Sub Nav 1">
                        <Item>Item 1</Item>
                    </SubNav>
                    <SubNav label="Sub Nav 2">
                        <Item>Item 1</Item>
                        <Item>Item 2</Item>
                        <SubNav label="Sub Nav 1">
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                        </SubNav>
                        <SubNav label="Sub Nav 2">
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                        </SubNav>
                    </SubNav>
                    <SubNav label="Sub Nav 3">
                        <Item>Item 1</Item>
                        <Item>Item 2</Item>
                        <Item>Item 3</Item>
                        <SubNav label="Sub Nav 1">
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                            <Item>Item 3</Item>
                        </SubNav>
                        <SubNav label="Sub Nav 2">
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                            <Item>Item 3</Item>
                        </SubNav>
                        <SubNav label="Sub Nav 3">
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                            <Item>Item 3</Item>
                        </SubNav>
                    </SubNav>
                    <Item>Item</Item>
                </Nav>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
