import React from 'react';
import ReactDOM from 'react-dom';
import {
    Demo,
    DemoFunctionDefineForObject,
    DemoGroup,
    DemoHead,
    initDemo,
} from '../../../demo-helper';
import Button from '../../../button';
import Icon from '../../../icon';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../../demo-helper/style';
import '../../../button/style';
import { ButtonProps } from '../../types';

type ButtonType = NonNullable<ButtonProps['type']>;

/* eslint-disable */
const i18nMap = {
    'zh-cn': {
        button: '按钮',
        warningButton: '警告按钮',
        ghostButton: '幽灵按钮',
        groupButton: '按钮组合',
        textButton: '文字按钮',
        normal: '普通',
        primary: '主要',
        secondary: '次要',
        light: '浅色',
        dark: '深色',
        hover: '悬浮',
        active: '激活',
        disabled: '禁用',
        goback: '后退',
        goforward: '前进',
    },
    'en-us': {
        button: 'Button',
        warningButton: 'Warning Button',
        ghostButton: 'Ghost Button',
        groupButton: 'Group Button',
        textButton: 'Text Button',
        normal: 'Normal',
        primary: 'Primary',
        secondary: 'Secondary',
        light: 'Light',
        dark: 'Dark',
        hover: 'Hover',
        active: 'Active',
        disabled: 'Disabled',
        goback: 'Go Back',
        goforward: 'Go Forward',
    },
};

const ButtonGroup = Button.Group;

function renderButton(type: ButtonType, i18n: Record<string, string>, children: React.ReactNode) {
    return (
        <Demo title={i18n[type]} key={type}>
            <DemoHead cols={['L', 'M', 'S']} />
            <DemoGroup label={i18n.normal}>
                <Button type={type} size="large">
                    {children}
                </Button>
                <Button type={type} size="medium">
                    {children}
                </Button>
                <Button type={type} size="small">
                    {children}
                </Button>
            </DemoGroup>
            <DemoGroup label={i18n.hover}>
                <Button type={type} size="large" className="hover">
                    {children}
                </Button>
                <Button type={type} size="medium" className="hover">
                    {children}
                </Button>
                <Button type={type} size="small" className="hover">
                    {children}
                </Button>
            </DemoGroup>
            <DemoGroup label={i18n.active}>
                <Button type={type} size="large" className="active">
                    {children}
                </Button>
                <Button type={type} size="medium" className="active">
                    {children}
                </Button>
                <Button type={type} size="small" className="active">
                    {children}
                </Button>
            </DemoGroup>
            <DemoGroup label={i18n.disabled}>
                <Button type={type} size="large" disabled>
                    {children}
                </Button>
                <Button type={type} size="medium" disabled>
                    {children}
                </Button>
                <Button type={type} size="small" disabled>
                    {children}
                </Button>
            </DemoGroup>
        </Demo>
    );
}

function renderWarningButton(
    type: ButtonType,
    i18n: Record<string, string>,
    children: React.ReactNode
) {
    return (
        <Demo title={i18n[type]} key={type}>
            <DemoHead cols={['L', 'M', 'S']} />
            <DemoGroup label={i18n.normal}>
                <Button warning type={type} size="large">
                    {children}
                </Button>
                <Button warning type={type} size="medium">
                    {children}
                </Button>
                <Button warning type={type} size="small">
                    {children}
                </Button>
            </DemoGroup>
            <DemoGroup label={i18n.hover}>
                <Button warning type={type} size="large" className="hover">
                    {children}
                </Button>
                <Button warning type={type} size="medium" className="hover">
                    {children}
                </Button>
                <Button warning type={type} size="small" className="hover">
                    {children}
                </Button>
            </DemoGroup>
            <DemoGroup label={i18n.active}>
                <Button warning type={type} size="large" className="active">
                    {children}
                </Button>
                <Button warning type={type} size="medium" className="active">
                    {children}
                </Button>
                <Button warning type={type} size="small" className="active">
                    {children}
                </Button>
            </DemoGroup>
            <DemoGroup label={i18n.disabled}>
                <Button warning type={type} size="large" disabled>
                    {children}
                </Button>
                <Button warning type={type} size="medium" disabled>
                    {children}
                </Button>
                <Button warning type={type} size="small" disabled>
                    {children}
                </Button>
            </DemoGroup>
        </Demo>
    );
}

function renderTextButton(
    type: ButtonType,
    i18n: Record<string, string>,
    children: React.ReactNode
) {
    return (
        <Demo title={i18n[type]} key={type}>
            <DemoHead cols={['L', 'M', 'S']} />
            <DemoGroup label={i18n.normal}>
                <Button text type={type} size="large">
                    {children}
                </Button>
                <Button text type={type} size="medium">
                    {children}
                </Button>
                <Button text type={type} size="small">
                    {children}
                </Button>
            </DemoGroup>
            <DemoGroup label={i18n.hover}>
                <Button text type={type} size="large" className="hover">
                    {children}
                </Button>
                <Button text type={type} size="medium" className="hover">
                    {children}
                </Button>
                <Button text type={type} size="small" className="hover">
                    {children}
                </Button>
            </DemoGroup>
            <DemoGroup label={i18n.disabled}>
                <Button text type={type} size="large" disabled>
                    {children}
                </Button>
                <Button text type={type} size="medium" disabled>
                    {children}
                </Button>
                <Button text type={type} size="small" disabled>
                    {children}
                </Button>
            </DemoGroup>
        </Demo>
    );
}

function renderGhostButton(
    type: 'light' | 'dark',
    i18n: Record<string, string>,
    children: React.ReactNode
) {
    let style = {};

    if (type === 'dark') {
        style = {
            backgroundColor: '#333',
            color: '#FFF',
        };
    }

    return (
        <Demo title={i18n[type]} key={type} style={style}>
            <DemoHead cols={['L', 'M', 'S']} />
            <DemoGroup label={i18n.normal}>
                <Button ghost={type} size="large">
                    {children}
                </Button>
                <Button ghost={type} size="medium">
                    {children}
                </Button>
                <Button ghost={type} size="small">
                    {children}
                </Button>
            </DemoGroup>
            <DemoGroup label={i18n.hover}>
                <Button ghost={type} size="large" className="hover">
                    {children}
                </Button>
                <Button ghost={type} size="medium" className="hover">
                    {children}
                </Button>
                <Button ghost={type} size="small" className="hover">
                    {children}
                </Button>
            </DemoGroup>
            <DemoGroup label={i18n.disabled}>
                <Button ghost={type} size="large" disabled>
                    {children}
                </Button>
                <Button ghost={type} size="medium" disabled>
                    {children}
                </Button>
                <Button ghost={type} size="small" disabled>
                    {children}
                </Button>
            </DemoGroup>
        </Demo>
    );
}

interface FunctionGroupButtonProps {
    title: string;
    locale: Record<string, string>;
    types: ButtonType[];
}
class FunctionGroupButton extends React.Component<
    FunctionGroupButtonProps,
    {
        demoFunction: Record<string, DemoFunctionDefineForObject>;
    }
> {
    constructor(props: FunctionGroupButtonProps) {
        super(props);

        this.state = {
            demoFunction: {
                'arrow-type': {
                    label: '图标类型',
                    value: 'none',
                    enum: [
                        {
                            label: '无',
                            value: 'none',
                        },
                        {
                            label: '箭头',
                            value: 'arrow',
                        },
                        {
                            label: '只有图标',
                            value: 'only-icon',
                        },
                    ],
                },
            },
        };
    }

    onFunctionChange = (ret: Record<string, DemoFunctionDefineForObject>) => {
        this.setState({
            demoFunction: ret,
        });
    };

    render() {
        const { title, locale, types } = this.props;
        const { demoFunction } = this.state;
        const children = locale.button;
        const iconType = demoFunction['arrow-type'].value;

        let left: React.ReactNode, middle: React.ReactNode, right: React.ReactNode;

        switch (iconType) {
            case 'none': {
                left = children;
                middle = children;
                right = children;
                break;
            }
            case 'arrow': {
                left = [<Icon type="arrow-left" key="icon" />, locale.goback];
                middle = children;
                right = [locale.goforward, <Icon type="arrow-right" key="icon" />];
                break;
            }
            case 'only-icon': {
                left = <Icon type="set" />;
                middle = <Icon type="atm" />;
                right = <Icon type="download" />;
            }
        }

        return (
            <Demo
                title={title}
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                {types.map(type => {
                    return (
                        <Demo title={locale[type]} key={type}>
                            <DemoHead cols={['L', 'M', 'S']} />
                            <DemoGroup label={locale.normal}>
                                <ButtonGroup size="large">
                                    <Button type={type}>{left}</Button>
                                    <Button type={type}>{middle}</Button>
                                    <Button type={type}>{right}</Button>
                                </ButtonGroup>
                                <ButtonGroup size="medium">
                                    <Button type={type}>{left}</Button>
                                    <Button type={type}>{middle}</Button>
                                    <Button type={type}>{right}</Button>
                                </ButtonGroup>
                                <ButtonGroup size="small">
                                    <Button type={type}>{left}</Button>
                                    <Button type={type}>{middle}</Button>
                                    <Button type={type}>{right}</Button>
                                </ButtonGroup>
                            </DemoGroup>
                        </Demo>
                    );
                })}
            </Demo>
        );
    }
}

interface FunctionDemoProps {
    noArrow?: boolean;
    title: string;
    locale: Record<string, string>;
    types: ButtonType[];
    buttonRender: (
        type: ButtonType,
        locale: Record<string, string>,
        children: React.ReactNode
    ) => React.ReactNode;
}

class FunctionDemo extends React.Component<
    FunctionDemoProps,
    {
        demoFunction: Record<string, DemoFunctionDefineForObject>;
    }
> {
    constructor(props: FunctionDemoProps) {
        super(props);
        let iconList;
        if (props.noArrow) {
            iconList = [
                {
                    label: '无',
                    value: 'none',
                },
                {
                    label: '旺旺',
                    value: 'atm',
                },
                {
                    label: '设置',
                    value: 'set',
                },
            ];
        } else {
            iconList = [
                {
                    label: '无',
                    value: 'none',
                },
                {
                    label: '左箭头',
                    value: 'arrow-left',
                },
                {
                    label: '右箭头',
                    value: 'arrow-right',
                },
                {
                    label: '下箭头',
                    value: 'arrow-down',
                },
                {
                    label: '上箭头',
                    value: 'arrow-up',
                },
                {
                    label: '旺旺',
                    value: 'atm',
                },
            ];
        }

        this.state = {
            demoFunction: {
                'arrow-type': {
                    label: '图标类型',
                    value: 'none',
                    enum: iconList,
                },
            },
        };
    }

    onFunctionChange = (ret: Record<string, DemoFunctionDefineForObject>) => {
        this.setState({
            demoFunction: ret,
        });
    };

    render() {
        const { title, locale, types, buttonRender } = this.props;
        const { demoFunction } = this.state;
        const iconType = demoFunction['arrow-type'].value as string;
        const iconPosition =
            ['arrow-right', 'arrow-up', 'arrow-down'].indexOf(iconType) > -1 ? 'after' : 'before';
        const children: React.ReactNode[] = [locale.button];

        if (iconType !== 'none') {
            const icon = <Icon type={iconType} key="icon" />;
            if (iconPosition === 'before') {
                children.unshift(icon);
            } else {
                children.push(icon);
            }
        }

        return (
            <Demo
                title={title}
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                {types.map(type => buttonRender(type, locale, children))}
            </Demo>
        );
    }
}

function render(i18n: Record<string, string>, lang: string) {
    return ReactDOM.render(
        // @ts-expect-error ConfigProvider is not support lang
        <ConfigProvider lang={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <FunctionDemo
                    title={i18n.button}
                    locale={i18n}
                    buttonRender={renderButton}
                    types={['normal', 'primary', 'secondary']}
                />
                <FunctionDemo
                    title={i18n.textButton}
                    locale={i18n}
                    buttonRender={renderTextButton}
                    types={['normal', 'primary', 'secondary']}
                />
                <FunctionDemo
                    title={i18n.warningButton}
                    locale={i18n}
                    buttonRender={renderWarningButton}
                    types={['normal', 'primary']}
                    noArrow
                />
                <FunctionDemo
                    title={i18n.ghostButton}
                    locale={i18n}
                    buttonRender={renderGhostButton as unknown as FunctionDemoProps['buttonRender']}
                    types={['light', 'dark'] as unknown as ButtonType[]}
                />
                <FunctionGroupButton
                    title={i18n.groupButton}
                    locale={i18n}
                    types={['normal', 'primary', 'secondary']}
                />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('button');
