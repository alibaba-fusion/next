import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Switch, Radio } from '@alifd/next';
import type { NavProps } from '@alifd/next/es/nav';

const { Item, SubNav } = Nav;

class App extends React.Component {
    state = {
        collapse: false,
        embeddable: false,
    };

    onChange = (val: boolean) => {
        this.setState({
            collapse: val,
        });
    };

    changeEmbeddable = (embeddable: boolean) => {
        this.setState({
            embeddable,
        });
    };

    render() {
        const { collapse, embeddable } = this.state;
        let iconOnly, mode;

        if (collapse) {
            iconOnly = true;
            mode = 'popup';
        } else {
            iconOnly = false;
            mode = 'inline';
        }

        return (
            <div>
                <Switch defaultChecked={false} onChange={this.onChange} size="small" />
                <div className="demo-ctl">
                    <Radio.Group
                        shape="button"
                        size="medium"
                        value={embeddable}
                        onChange={this.changeEmbeddable}
                    >
                        <Radio value>embeddable=true</Radio>
                        <Radio value={false}>embeddable=false</Radio>
                    </Radio.Group>
                </div>
                <Nav
                    style={{ width: '200px' }}
                    embeddable={embeddable}
                    defaultOpenAll
                    defaultSelectedKeys={['0-1']}
                    iconOnly={iconOnly}
                    hasArrow={false}
                    hasTooltip
                    mode={mode as NavProps['mode']}
                >
                    <Item icon="calendar"> Schedule </Item>
                    <Item icon="email"> Email </Item>
                    <Item icon="help"> Help </Item>
                    <SubNav icon="set" label="Settings">
                        <Item icon="account"> Account </Item>
                        <Item icon="exit"> Exit </Item>
                    </SubNav>
                </Nav>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
