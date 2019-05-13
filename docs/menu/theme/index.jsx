import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import '../../../src/menu/style.js';
import '../../../src/icon/style.js';
import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import Menu from '../../../src/menu';
import Icon from '../../../src/icon';

const i18nMaps = {
    'en-us': {
        option: 'Option '
    },
    'zh-cn': {
        option: '选项'
    }
};

class FunctionDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                hasGroup: {
                    label: '有无分组',
                    value: 'false',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                hasIcon: {
                    label: '有无图标',
                    value: 'false',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                checkType: {
                    label: '有无 checkbox 或 radio',
                    value: 'checkLeft',
                    enum: [{
                        label: 'checkbox',
                        value: 'checkbox'
                    }, {
                        label: 'radio',
                        value: 'radio'
                    }, {
                        label: 'check on left',
                        value: 'checkLeft'
                    }, {
                        label: 'check on right',
                        value: 'checkRight'
                    }]
                }
            }
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    onFunctionChange(demoFunction) {
        this.setState({
            demoFunction
        });
    }

    renderGroup(key, children) {
        const hasGroup = this.state.demoFunction.hasGroup.value === 'true';

        if (hasGroup) {
            return <Menu.Group label={key} >{children}</Menu.Group>;
        }

        return children;
    }

    renderItem(key, others = {}) {
        const hasIcon = this.state.demoFunction.hasIcon.value === 'true';
        const checkType = this.state.demoFunction.checkType.value;

        // eslint-disable-next-line
        const { i18n } = this.props;
        let children = `${i18n.option}${key}`;
        if (hasIcon) {
            children = [
                <Icon key="icon" type="picture" size="small" style={{ marginRight: '4px' }} />,
                children
            ];
        }

        let Item = Menu.Item;
        let isSelectIconRight = false;
        switch (checkType) {
            case 'checkbox':
                Item = Menu.CheckboxItem;
                break;
            case 'radio':
                Item = Menu.RadioItem;
                break;
            case 'checkLeft':
                delete others.checked;
                break;
            case 'checkRight':
                isSelectIconRight = true;
                delete others.checked;
                break;
            default:
                break;

        }

        return <Item key={key} isSelectIconRight={isSelectIconRight} {...others}>{children}</Item>;
    }
}

class FunctionDemoNormal extends FunctionDemo {
    render() {
        const { demoFunction } = this.state;
        const hasGroup = demoFunction.hasGroup.value === 'true';

        return (
            <Demo title="Normal" demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
                <Demo title="Normal">
                    <DemoGroup label="Normal">
                        <Menu>
                            {this.renderGroup('Group 1', [
                                this.renderItem('1'),
                                this.renderItem('2'),
                            ])}
                            {hasGroup ? <Menu.Divider /> : null}
                            {this.renderGroup('Group 2', [
                                this.renderItem('3'),
                                this.renderItem('4'),
                            ])}
                        </Menu>
                    </DemoGroup>
                    <DemoGroup label="Selected">
                        <Menu selectMode="multiple" selectedKeys={['1']}>
                            {this.renderGroup('Group 1', [
                                this.renderItem('1', { checked: true }),
                                this.renderItem('2'),
                            ])}
                            {hasGroup ? <Menu.Divider /> : null}
                            {this.renderGroup('Group 2', [
                                this.renderItem('3'),
                                this.renderItem('4'),
                            ])}
                        </Menu>
                    </DemoGroup>
                    <DemoGroup label="Disabled">
                        <Menu>
                            {this.renderGroup('Group 1', [
                                this.renderItem('1'),
                                this.renderItem('2', { disabled: true }),
                            ])}
                            {hasGroup ? <Menu.Divider /> : null}
                            {this.renderGroup('Group 2', [
                                this.renderItem('3'),
                                this.renderItem('4'),
                            ])}
                        </Menu>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

class FunctionDemoNest extends FunctionDemo {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                hasIcon: {
                    label: '有无图标',
                    value: 'false',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                checkType: {
                    label: '有无 checkbox 或 radio',
                    value: 'false',
                    enum: [{
                        label: 'checkbox',
                        value: 'checkbox'
                    }, {
                        label: 'radio',
                        value: 'radio'
                    }, {
                        label: 'check on left',
                        value: 'checkLeft'
                    }, {
                        label: 'check on right',
                        value: 'checkRight'
                    }]
                }
            }
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    render() {
        const { i18n } = this.props;
        const { demoFunction } = this.state;

        return (
            <Demo title="Nest" demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
                <Demo title="Normal">
                    <DemoGroup label="Inline">
                        <Menu selectMode="single" autoFocus={false} openKeys={['2']} focusedKey="2" selectedKeys={['2-1']} style={{ width: '150px' }}>
                            <Menu.SubMenu key="1" label="Sub 1">
                                <Menu.Item key="1-1">{`${i18n.option}1`}</Menu.Item>
                                <Menu.Item key="1-2">{`${i18n.option}2`}</Menu.Item>
                                <Menu.Item key="1-3">{`${i18n.option}3`}</Menu.Item>
                                <Menu.Item key="1-4">{`${i18n.option}4`}</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="2" label="Sub 2">
                                {this.renderItem('2-1', { checked: true })}
                                {this.renderItem('2-2', { disabled: true })}
                                {this.renderItem('2-3')}
                                {this.renderItem('2-4')}
                            </Menu.SubMenu>
                            <Menu.SubMenu key="3" label="Sub 3">
                                <Menu.Item key="3-1">{`${i18n.option}1`}</Menu.Item>
                                <Menu.Item key="3-2">{`${i18n.option}2`}</Menu.Item>
                                <Menu.Item key="3-3">{`${i18n.option}3`}</Menu.Item>
                                <Menu.Item key="3-4">{`${i18n.option}4`}</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="4" label="Sub 4">
                                <Menu.Item key="4-1">{`${i18n.option}1`}</Menu.Item>
                                <Menu.Item key="4-2">{`${i18n.option}2`}</Menu.Item>
                                <Menu.Item key="4-3">{`${i18n.option}3`}</Menu.Item>
                                <Menu.Item key="4-4">{`${i18n.option}4`}</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </DemoGroup>
                    <DemoGroup label="Popup">
                        <Menu style={{ marginBottom: '50px' }} popupProps={{ needAdjust: false }} selectMode="single" autoFocus={false} mode="popup" openKeys={['2']} focusedKey="2" selectedKeys={['2-1']}>
                            <Menu.SubMenu key="1" label="Sub 1">
                                <Menu.Item key="1-1">{`${i18n.option}1`}</Menu.Item>
                                <Menu.Item key="1-2">{`${i18n.option}2`}</Menu.Item>
                                <Menu.Item key="1-3">{`${i18n.option}3`}</Menu.Item>
                                <Menu.Item key="1-4">{`${i18n.option}4`}</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="2" label="Sub 2">
                                {this.renderItem('2-1', { checked: true })}
                                {this.renderItem('2-2', { disabled: true })}
                                {this.renderItem('2-3')}
                                {this.renderItem('2-4')}
                            </Menu.SubMenu>
                            <Menu.SubMenu key="3" label="Sub 3">
                                <Menu.Item key="3-1">{`${i18n.option}1`}</Menu.Item>
                                <Menu.Item key="3-2">{`${i18n.option}2`}</Menu.Item>
                                <Menu.Item key="3-3" disabled>{`${i18n.option}3`}</Menu.Item>
                                <Menu.Item key="3-4">{`${i18n.option}4`}</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="4" label="Sub 4">
                                <Menu.Item key="4-1">{`${i18n.option}1`}</Menu.Item>
                                <Menu.Item key="4-2">{`${i18n.option}2`}</Menu.Item>
                                <Menu.Item key="4-3">{`${i18n.option}3`}</Menu.Item>
                                <Menu.Item key="4-4">{`${i18n.option}4`}</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

const render = i18n => {
    ReactDOM.render((
        <div className="demo-container">
            <FunctionDemoNormal i18n={i18n} />
            <FunctionDemoNest i18n={i18n} />
        </div>
    ), document.getElementById('container'));
};

window.renderDemo = function(lang) {
    render(i18nMaps[lang]);
};
window.renderDemo('en-us');
initDemo('menu');
