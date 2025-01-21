import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Radio } from '@alifd/next';
import type { NavProps } from '@alifd/next/types/nav';

type AppState = Pick<
    NavProps,
    'iconOnly' | 'hasTooltip' | 'hasArrow' | 'iconOnlyWidth' | 'iconTextOnly'
> & {
    width?: number;
};

const { Item, SubNav } = Nav;

class App extends React.Component {
    state: AppState = {
        iconOnly: false,
        hasTooltip: true,
        hasArrow: true,
        iconOnlyWidth: '100%',
        iconTextOnly: false,
        width: 200,
    };

    setValue(name: keyof AppState, value: string) {
        this.setState({
            [name]: value === 'true',
        });
    }

    iconfontChange(value: string) {
        const props: AppState = {};
        props.iconOnly = value === 'true';
        if (props.iconOnly) {
            props.width = 40;
        } else {
            props.width = 200;
        }
        this.setState(props);
    }

    render() {
        const { iconOnly, hasTooltip, hasArrow, iconTextOnly } = this.state;
        return (
            <div>
                <div className="demo-ctl">
                    <Radio.Group
                        shape="button"
                        size="medium"
                        value={iconOnly && iconTextOnly ? 'trueText' : iconOnly ? 'true' : 'false'}
                        onChange={this.iconfontChange.bind(this)}
                    >
                        <Radio value="true">iconOnly=true</Radio>
                        <Radio value="false">iconOnly=false</Radio>
                    </Radio.Group>
                </div>
                <div style={{ width: this.state.width }}>
                    <Nav
                        iconOnlyWidth={this.state.iconOnlyWidth}
                        iconOnly={iconOnly}
                        iconTextOnly={iconTextOnly}
                        hasArrow={hasArrow}
                        hasTooltip={hasTooltip}
                        hozInLine
                    >
                        <Item icon="account">三个字</Item>
                        <Item icon="account">四个字的</Item>
                        <Item icon="account">五个字导航</Item>
                        <Item icon={'atm'}>六个字的导航</Item>
                        <Item icon={<span>QAQ</span>}>七个字的长导航</Item>
                        <SubNav icon="account" label="Sub Nav">
                            <Item icon="account">Item 1</Item>
                            <Item icon="account">Item 2</Item>
                            <Item icon="account">Item 3</Item>
                            <Item icon="account">Item 4</Item>
                        </SubNav>
                    </Nav>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
