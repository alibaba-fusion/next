import React from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import '../../style';
import {
    Demo,
    DemoFunctionDefineForObject,
    DemoGroup,
    DemoHead,
    initDemo,
} from '../../../demo-helper';
import Nav from '../../index';
import { NavProps } from '../../types';

interface FuncDemoProps {
    i18n: Record<string, string>;
}
const { Item, Group, SubNav } = Nav;

const i18nMaps = {
    'en-us': {
        item: 'Nav Item ',
        option: 'Option ',
        group: 'Group Title',
    },
    'zh-cn': {
        item: '导航项 ',
        option: '选项 ',
        group: '分组标题',
    },
};

class FuncDemo extends React.Component<
    FuncDemoProps,
    {
        demoFunction: Record<string, DemoFunctionDefineForObject>;
    }
> {
    onFunctionChange(demoFunction: Record<string, DemoFunctionDefineForObject>) {
        this.setState({
            demoFunction,
        });
    }

    renderNav(
        direction: NavProps['direction'],
        type: NavProps['type'],
        selectedKeys?: NavProps['defaultSelectedKeys'] | null,
        className?: string
    ) {
        // eslint-disable-next-line
        const { i18n } = this.props;
        const { demoFunction } = this.state;
        const activeDirection =
            demoFunction.activeDirection && demoFunction.activeDirection.value !== 'false'
                ? demoFunction.activeDirection.value
                : null;
        const iconOnly = demoFunction.iconOnly && demoFunction.iconOnly.value === 'true';
        const hasGroup = demoFunction.hasGroup && demoFunction.hasGroup.value === 'true';
        const hasIcons =
            direction === 'ver' ||
            (demoFunction.hasIcons && demoFunction.hasIcons.value === 'true');
        const itemStyle = iconOnly ? {} : { minWidth: '100px' };

        const items = [];
        const subItems = [];

        for (let i = 1; i < 5; i++) {
            if (i === 2) {
                items.push(
                    <Item
                        style={itemStyle}
                        key={i}
                        icon={hasIcons && 'account'}
                        className={className}
                    >
                        {i18n.item}
                        {i}
                    </Item>
                );
            } else {
                items.push(
                    <Item style={itemStyle} key={i} icon={hasIcons && 'account'}>
                        {i18n.item}
                        {i}
                    </Item>
                );
            }
        }

        for (let i = 6; i < 10; i++) {
            subItems.push(
                <Item key={i} icon={hasIcons && 'account'}>
                    {i18n.option}
                    {i}
                </Item>
            );
        }

        return (
            <Nav
                defaultOpenAll
                type={type}
                direction={direction}
                activeDirection={activeDirection as NavProps['activeDirection']}
                iconOnly={iconOnly}
                defaultSelectedKeys={selectedKeys as NavProps['defaultSelectedKeys']}
            >
                {hasGroup ? <Group label={i18n.group}>{items}</Group> : items}
                <SubNav key="5" icon={hasIcons && 'account'} label={`${i18n.item}5`}>
                    {subItems}
                </SubNav>
            </Nav>
        );
    }
}

class FuncDemoHoz extends FuncDemo {
    constructor(props: FuncDemoProps) {
        super(props);

        this.state = {
            demoFunction: {
                activeDirection: {
                    label: '选中线条位置',
                    value: 'bottom',
                    enum: [
                        {
                            label: '底部',
                            value: 'bottom',
                        },
                        {
                            label: '顶部',
                            value: 'top',
                        },
                        {
                            label: '无',
                            value: 'false',
                        },
                    ],
                },
                hasIcons: {
                    label: '是否显示icon',
                    value: 'true',
                    enum: [
                        {
                            label: '显示',
                            value: 'true',
                        },
                        {
                            label: '不显示',
                            value: 'false',
                        },
                    ],
                },
            },
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    renderHozType(title: string, type: NavProps['type']) {
        return (
            <Demo title={title}>
                <DemoGroup label="Normal">{this.renderNav('hoz', type)}</DemoGroup>
                <DemoGroup label="Hover">
                    {this.renderNav('hoz', type, null, 'next-focused')}
                </DemoGroup>
                <DemoGroup label="Selected">{this.renderNav('hoz', type, ['2'])}</DemoGroup>
            </Demo>
        );
    }

    render() {
        const { demoFunction } = this.state;

        return (
            <Demo
                title="Horizontal"
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                {this.renderHozType('Normal', 'normal')}
                {this.renderHozType('Primary', 'primary')}
                {this.renderHozType('Secondary', 'secondary')}
                {this.renderHozType('Line', 'line')}
            </Demo>
        );
    }
}

class FuncDemoVer extends FuncDemo {
    constructor(props: FuncDemoProps) {
        super(props);

        this.state = {
            demoFunction: {
                activeDirection: {
                    label: '选中线条位置',
                    value: 'right',
                    enum: [
                        {
                            label: '左边',
                            value: 'left',
                        },
                        {
                            label: '右边',
                            value: 'right',
                        },
                        {
                            label: '无',
                            value: 'false',
                        },
                    ],
                },
                iconOnly: {
                    label: '仅显示图标',
                    value: 'false',
                    enum: [
                        {
                            label: '是',
                            value: 'true',
                        },
                        {
                            label: '否',
                            value: 'false',
                        },
                    ],
                },
                hasGroup: {
                    label: '有无分组',
                    value: 'false',
                    enum: [
                        {
                            label: '有',
                            value: 'true',
                        },
                        {
                            label: '无',
                            value: 'false',
                        },
                    ],
                },
            },
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    renderVerType(title: string, type: NavProps['type']) {
        return (
            <Demo title={title}>
                <DemoHead cols={['Normal', 'Hover', 'Selected']} />
                <DemoGroup label={title}>
                    {this.renderNav('ver', type)}
                    {this.renderNav('ver', type, null, 'next-focused')}
                    {this.renderNav('ver', type, ['2'])}
                </DemoGroup>
            </Demo>
        );
    }

    render() {
        const { demoFunction } = this.state;

        return (
            <Demo
                title="Vertical"
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                {this.renderVerType('Normal', 'normal')}
                {this.renderVerType('Primary', 'primary')}
                {this.renderVerType('Secondary', 'secondary')}
                {this.renderVerType('Line', 'line')}
            </Demo>
        );
    }
}

const render = (i18n: Record<string, string>) => {
    ReactDOM.render(
        <div className="demo-container">
            <FuncDemoHoz i18n={i18n} />
            <FuncDemoVer i18n={i18n} />
        </div>,
        document.getElementById('container')
    );
};

window.renderDemo = function (lang) {
    render(i18nMaps[lang || 'en-us']);
};
window.renderDemo('en-us');
initDemo('nav');
