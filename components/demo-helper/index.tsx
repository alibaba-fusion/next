/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import md5 from 'md5';

interface DemoItem {
    hidden?: boolean;
    exists?: boolean;
    title?: string;
    [key: string]: unknown;
}

type ShowType = 'none' | 'hidden';

declare global {
    interface Window {
        compName: string;
        DEMO_VARIABLE?: {
            showType?: ShowType;
            demoItems?: Record<string, DemoItem>;
        };
        renderDemo: (lang?: 'en-us' | 'zh-cn') => void;
    }
    let renderDemo: Window['renderDemo'];
}

export interface DemoFunctionDefineForArray {
    name: string;
    label: string;
    value: unknown;
    enum: Array<string>;
}

export interface DemoFunctionDefineForObject {
    name?: string;
    label: string;
    value: unknown;
    enum: Array<{ label: string; value: string | boolean }>;
}

const COL = '{Col}';
const LABEL = '{Label}';
const TITLE = '{Title}';
const { showType = 'none', demoItems = {} } = window.DEMO_VARIABLE || {};
const callback: Array<(...args: unknown[]) => unknown> = [];
const COOL: Record<
    string,
    Array<{ name: string; enum: Array<string | boolean>; value?: unknown }>
> = {};
const FUN: Record<string, Record<string, DemoFunctionDefineForObject>> = {};
let demoCount = 0;

class DisplaySwitch extends React.Component<{
    onClick: React.MouseEventHandler;
    hidden?: boolean;
}> {
    static propTypes = {
        onClick: PropTypes.func,
        hidden: PropTypes.bool,
    };

    static defaultProps = {
        onClick: () => {},
    };

    render() {
        const status = this.props.hidden ? 'hide' : 'browse';

        return <i className={`demo-icon demo-icon-${status}`} onClick={this.props.onClick} />;
    }
}

function sendMessage(compName: string, type: string, body?: unknown) {
    const parent = window.parent;

    if (parent !== window) {
        parent.postMessage(
            {
                from: 'demo',
                type: type,
                body: body,
                compName: compName,
            },
            '*'
        );
    }
}

// TODO: { functions, statements, sizes }

function convertArrayToObject(
    demoFunction?: DemoFunctionDefineForArray[] | Record<string, DemoFunctionDefineForObject>
) {
    const objDemoFunction: Record<string, DemoFunctionDefineForObject> = {};
    if (Array.isArray(demoFunction)) {
        demoFunction.forEach(demo => {
            objDemoFunction[demo.name] = {
                label: demo.label,
                value: demo.value,
                enum: demo.enum.map(e => {
                    let label = e;
                    if (e === 'true') {
                        label = '是';
                    } else if (e === 'false') {
                        label = '否';
                    }

                    return {
                        label: label,
                        value: e,
                    };
                }),
            };
        });
        return objDemoFunction;
    }
    return demoFunction;
}

function convertObjectToArray(demoFunction: Record<string, DemoFunctionDefineForObject>) {
    const arrayDemo: DemoFunctionDefineForArray[] = [];
    Object.keys(demoFunction).forEach(name => {
        const demo = demoFunction[name];
        arrayDemo.push({
            name: name,
            label: demo.label,
            value: demo.value,
            enum: demo.enum.map(e => {
                return String(e.value);
            }),
        });
    });
    return arrayDemo;
}

/**
 * XyzAbc -\> xyz-abc
 * @param str - 驼峰字符串
 * @returns 输出规范化的字符串
 */
function deCamelize(str: string) {
    const matches = str.match(/([A-Z][a-z]{2,})/g);
    if (matches === null) {
        // return str.toLowerCase();
        return str;
    }
    return matches.toString().replace(',', '-').toLowerCase();
}

/**
 * 格式化词组 'AbcZex XyzYxx' -\> 'abc-zex xyz-yxx'
 * @param str - 驼峰词组
 * @returns 输出格式化的词组
 */
function formatTitle(str: unknown) {
    if (!str || typeof str !== 'string') {
        return;
    }
    return str.split(' ').map(deCamelize).join(' ');
}

interface BaseProps {
    demoIndex?: string;
    showType?: ShowType;
    demoItems?: Record<string, DemoItem>;
    demoScope?: unknown;
    demoTitle?: string;
    switchVisible?: (demoIndex: string) => unknown;
}

interface DemoProps extends Omit<BaseProps, 'demoTitle'> {
    parentDisplayName?: string;
    defaultBackground?: 'dark' | 'light';
    title: string;
    demoTitle?: string;
    block?: boolean;
    className?: string;
    switchBackground?: boolean;
    demoFunction?: DemoFunctionDefineForArray[] | Record<string, DemoFunctionDefineForObject>;
    onFunctionChange?: (
        demoFunction: Record<string, DemoFunctionDefineForObject> | DemoFunctionDefineForArray[]
    ) => unknown;
    style?: React.CSSProperties;
}

interface DemoState {
    demoIndex: string;
    demoItems: Record<string, DemoItem>;
    showType: ShowType;
    background: DemoProps['defaultBackground'];
    initDate: number;
}

class Demo extends React.Component<DemoProps, DemoState> {
    static displayName = 'Demo';

    static propTypes = {
        parentDisplayName: PropTypes.string,
        defaultBackground: PropTypes.oneOf(['dark', 'light']),
        title: PropTypes.string,
        block: PropTypes.bool,
        children: PropTypes.any,
        className: PropTypes.string,
        demoIndex: PropTypes.string,
        demoItems: PropTypes.object,
        demoScope: PropTypes.object,
        demoTitle: PropTypes.string,
        showType: PropTypes.string,
        switchVisible: PropTypes.func,
        switchBackground: PropTypes.bool,
        demoFunction: PropTypes.object,
        onFunctionChange: PropTypes.func,
        style: PropTypes.object,
    };

    static defaultProps = {
        defaultBackground: 'light',
        block: false,
        onFunctionChange: () => {},
    };

    static getDerivedStateFromProps(nextProps: DemoProps) {
        if ('defaultBackground' in nextProps) {
            return {
                background: nextProps.defaultBackground,
            };
        }
        return {};
    }

    constructor(props: DemoProps) {
        super(props);

        this.state = {
            demoIndex: props.demoIndex || `${demoCount++}`,
            demoItems: props.demoItems || demoItems,
            showType: props.showType || showType,
            background: props.defaultBackground,
            initDate: new Date().getTime(),
        };

        if (!props.demoIndex) {
            callback.push(this.setVisible.bind(this));
        }
    }

    setVisible<K extends keyof DemoState>(data: Pick<DemoState, K>) {
        if ('demoIndex' in data) {
            delete data.demoIndex;
        }

        this.setState(data);
    }

    switchVisible(demoIndex: string) {
        const demoItems = this.props.demoItems || this.state.demoItems;

        // TIP: 清理无效数据
        Object.keys(demoItems).forEach(key => {
            if (demoItems[key].existed) {
                delete demoItems[key].existed;
            } else {
                delete demoItems[key];
            }
        });

        if (!demoItems[demoIndex]) {
            return;
        }

        const { hidden = false } = demoItems[demoIndex];
        const childKeys = Object.keys(demoItems).filter(key =>
            new RegExp(`^${demoIndex.replace(/\*/, '(\\*|\\d+)')}`).test(key)
        );

        // TIP: 更新当前控制器
        demoItems[demoIndex].hidden = !hidden;
        // TIP: 更新下级控制器
        childKeys.forEach(key => {
            if (key.indexOf('*') > -1) {
                demoItems[key].hidden = !hidden;
            }
        });
        // TIP: 更新 DEMO
        childKeys.forEach(key => {
            if (key.indexOf('*') < 0) {
                demoItems[key].hidden =
                    (demoItems[key.replace(/\d+$/, '*')] || {}).hidden ||
                    (demoItems[key.replace(/\d+-(\d+)$/, '*-$1')] || {}).hidden ||
                    !hidden;
            }
        });
        // TIP: 同步上级控制器
        this.syncVisible(demoIndex, demoItems);

        sendMessage(window.compName, 'displayed', {
            demoIndex,
            demoItems,
        });
    }

    syncVisible(demoIndex: string, demoItems: Record<string, DemoItem>) {
        let index = demoIndex.replace(/(-(\*|\d+)){2}$/, '-\\d+-\\d+');

        if (index !== demoIndex) {
            const itemKeys = Object.keys(demoItems).filter(
                key => new RegExp(`^${index}`).test(key) && key.indexOf('*') < 0
            );
            const hidden = demoItems[itemKeys[0] || demoIndex].hidden;
            let sameValue = true;

            itemKeys.forEach(key => {
                if (!!demoItems[key].hidden !== hidden) {
                    sameValue = false;
                }
            });

            index = demoIndex.replace(/-(\*|\d+)-(\*|\d+)$/, '-*');

            demoItems[index].hidden = (sameValue && hidden) || false;

            this.syncVisible(index, demoItems);
        }
    }

    switchBackground() {
        const background = this.state.background === 'light' ? 'dark' : 'light';

        this.setState({
            background: background,
        });
    }

    onFunctionChange(
        name: string,
        e: { stopPropagation: () => unknown; currentTarget: { value: unknown } }
    ) {
        e.stopPropagation();

        const value = e.currentTarget.value;
        const demoFunction = convertArrayToObject(this.props.demoFunction);

        let nextDemoFunction:
            | Record<string, DemoFunctionDefineForObject>
            | DemoFunctionDefineForArray[] = {};
        if (demoFunction) {
            Object.keys(demoFunction).forEach(funcName => {
                const func = demoFunction[funcName];

                if (funcName === name) {
                    func.value = value;
                }

                (nextDemoFunction as Record<string, DemoFunctionDefineForObject>)[funcName] = func;
            });
        }

        if (Array.isArray(this.props.demoFunction)) {
            nextDemoFunction = convertObjectToArray(nextDemoFunction);
        }

        this.props.onFunctionChange!(nextDemoFunction);
        return false;
    }

    render() {
        let isDemoShape = false;
        let hasDemoLevel = false;
        let children;

        const block = this.props.block ? 'block' : undefined;
        const index = this.props.demoIndex || this.state.demoIndex;
        const demoItems = this.props.demoItems || this.state.demoItems;
        const demoScope = this.props.demoScope || this;
        const demoTitle = this.props.demoTitle
            ? `${this.props.demoTitle} -> ${this.props.title || TITLE}`
            : this.props.title || TITLE;
        const showType = this.props.showType || this.state.showType;
        const switchVisible = this.props.switchVisible || this.switchVisible;
        const { background, initDate } = this.state;
        const { className, switchBackground, style } = this.props;
        const demoFunction = convertArrayToObject(this.props.demoFunction);

        if (this.props.children) {
            isDemoShape = this.props.parentDisplayName !== 'Demo';

            let first;
            if (Array.isArray(this.props.children)) {
                first = this.props.children[0];
            } else {
                first = this.props.children;
            }

            hasDemoLevel = first.type.displayName === 'Demo';
        }

        // 注入 demoFunction 到 window.COOL
        if (isDemoShape && this.props.title && demoFunction) {
            FUN[this.props.title] = {};
            Object.keys(demoFunction).forEach(funcName => {
                const func = demoFunction[funcName];
                func.name = funcName;
                FUN[this.props.title][funcName] = func;
            });
        }

        let demoShapeLevel: string;
        if ((isDemoShape && !hasDemoLevel) || !isDemoShape) {
            demoShapeLevel = demoTitle.split(' -> ').join('_');

            const body = React.Children.map(this.props.children, (child, i) => {
                return React.cloneElement(child as React.ReactElement, {
                    block: this.props.block,
                    demoIndex: `${index}-${i}`,
                    demoItems,
                    demoScope,
                    demoTitle,
                    demoShapeLevel,
                    showType,
                    switchVisible,
                });
            });

            children = (
                <table className={block}>
                    <tbody>{body}</tbody>
                </table>
            );
        } else {
            children = React.Children.map(this.props.children, (child, i) => {
                return React.cloneElement(child as React.ReactElement, {
                    parentDisplayName: 'Demo',
                    defaultBackground: background,
                    demoIndex: `${index}-${i}`,
                    demoItems,
                    demoScope,
                    demoTitle,
                    demoFunction,
                    showType,
                    switchVisible,
                });
            });
        }

        const functionSelect: React.ReactNode[] = [];
        if (isDemoShape && demoFunction) {
            Object.keys(demoFunction).forEach((funcName, i) => {
                const func = demoFunction[funcName];
                const tmpRadio: React.ReactNode[] = [];
                const name = md5(`${funcName}-${initDate}`);

                func.enum.forEach((enumObj, j) => {
                    const checked = enumObj.value.toString() === func.value;

                    tmpRadio.push(
                        <label key={j}>
                            <input
                                type="radio"
                                name={name}
                                data-func={funcName}
                                value={enumObj.value.toString()}
                                onChange={this.onFunctionChange.bind(this, funcName)}
                                defaultChecked={checked}
                            />
                            {enumObj.label.toString()}
                        </label>
                    );
                });

                functionSelect.push(
                    <li key={i}>
                        <span title={func.label}>{func.label}:</span>
                        {tmpRadio}
                    </li>
                );
            });
        }

        const demoIndex = `${index}-*`;
        const { hidden = false } = demoItems[demoIndex] || {};

        if (showType === 'hidden' || !hidden) {
            if (!demoItems[demoIndex]) {
                demoItems[demoIndex] = {
                    hidden: false,
                    title: demoTitle,
                };
            } else {
                demoItems[demoIndex].title = demoTitle;
            }
            demoItems[demoIndex].existed = true;

            const wrapCls = classNames({
                'demo pc': true,
                [`demo-${background}`]: background,
                [className!]: className,
            });
            const switchCls = classNames({
                'demo-switch': true,
                'demo-switch-on': background === 'dark',
                'demo-switch-off': background === 'light',
            });

            const customProps: React.HTMLAttributes<HTMLDivElement> = {};
            if (this.props.title) {
                // 注入 demo 的标题，用于按需选取
                customProps.title = formatTitle(this.props.title);
            }

            return (
                <div className={wrapCls} style={style} {...customProps}>
                    <div className="demo-header">
                        <span>{this.props.title || TITLE}</span>
                        {showType === 'hidden' && (
                            <DisplaySwitch
                                hidden={hidden}
                                onClick={switchVisible.bind(demoScope, demoIndex)}
                            />
                        )}
                        {isDemoShape && switchBackground ? (
                            <div className="demo-switch-wrapper">
                                <span>背景颜色</span>
                                <div
                                    className={switchCls}
                                    onClick={this.switchBackground.bind(this)}
                                >
                                    <div className="demo-switch-trigger" />
                                    <div className="demo-switch-children">
                                        {background === 'light' ? '深' : '浅'}
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    {isDemoShape && demoFunction ? (
                        <ul className="demo-select">{functionSelect}</ul>
                    ) : null}
                    <div className="demo-body">{children}</div>
                </div>
            );
        } else {
            return null;
        }
    }
}

interface DemoGroupProps extends BaseProps {
    label: string | boolean;
    block?: boolean;
    height?: React.CSSProperties['height'];
    className?: string;
    demoShapeLevel?: string;
}

class DemoGroup extends React.Component<DemoGroupProps> {
    static displayName = 'DemoGroup';

    static propTypes = {
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        block: PropTypes.bool,
        height: PropTypes.string,
        children: PropTypes.any,
        className: PropTypes.string,
        demoIndex: PropTypes.string,
        demoItems: PropTypes.object,
        demoScope: PropTypes.object,
        demoTitle: PropTypes.string,
        demoShapeLevel: PropTypes.string,
        showType: PropTypes.string,
        switchVisible: PropTypes.func,
    };

    static defaultProps = {
        block: false,
        height: '',
    };

    render() {
        const {
            demoIndex: index,
            demoItems = {},
            demoScope = this,
            showType,
            switchVisible = () => {},
        } = this.props;
        const demoIndex = `${index}-*`;
        const demoTitle = `${this.props.demoTitle} -> ${this.props.label || LABEL}`;
        const demoShapeLevel = this.props.demoShapeLevel;
        const { hidden = false } = demoItems[demoIndex] || {};

        // 解析
        if (demoShapeLevel) {
            if (!COOL[demoShapeLevel]) {
                COOL[demoShapeLevel] = [];
            }

            if (this.props.label) {
                let ret = false;
                COOL[demoShapeLevel].forEach((item, index) => {
                    if (item.name === 'statement') {
                        ret = true;
                        COOL[demoShapeLevel][index].enum.push(this.props.label);
                    }
                });
                if (!ret) {
                    COOL[demoShapeLevel].push({
                        name: 'statement',
                        enum: [this.props.label],
                    });
                }
            }
        }

        // 获得默认值
        const defaultCool: Record<string, unknown> = {};
        defaultCool.title = this.props.demoTitle;
        defaultCool.shape = demoShapeLevel;
        defaultCool.statement = this.props.label;
        COOL[demoShapeLevel!].forEach(item => {
            if (item.value) {
                defaultCool[item.name] = item.value;
            }
        });

        const children = React.Children.map(this.props.children, (child, i) => {
            const { demoIndex: index, demoItems = {}, showType, block } = this.props;
            const demoIndex = `${index}-${i}`;
            const { hidden = false } = demoItems[demoIndex] || {};
            const classes = classNames({
                'demo-item': !hidden,
                'demo-item-hidden': hidden,
                block: block,
            });

            COOL[demoShapeLevel!].forEach(item => {
                if (item.name === 'size') {
                    defaultCool.size = item.enum[i];
                }
            });

            if (showType === 'hidden' || !hidden) {
                if (!demoItems[demoIndex]) {
                    demoItems[demoIndex] = {
                        hidden: false,
                    };
                }
                demoItems[demoIndex].existed = true;

                const cloneChild = React.cloneElement(child as React.ReactElement, {
                    'data-cool': JSON.stringify(defaultCool),
                });

                return (
                    <td className="wrap" style={{ height: this.props.height || undefined }}>
                        <div className={classes} key={i}>
                            {cloneChild}
                        </div>
                    </td>
                );
            } else {
                return null;
            }
        });

        if (showType === 'hidden' || !hidden) {
            if (!demoItems[demoIndex]) {
                demoItems[demoIndex] = {
                    hidden: false,
                    title: demoTitle,
                };
            } else {
                demoItems[demoIndex].title = demoTitle;
            }
            demoItems[demoIndex].existed = true;

            return (
                <tr className="demo-group">
                    {this.props.label === false ? null : (
                        <td className="label" style={{ height: this.props.height || undefined }}>
                            <span>{this.props.label || LABEL}</span>
                            {showType === 'hidden' && (
                                <DisplaySwitch
                                    hidden={hidden}
                                    onClick={switchVisible.bind(demoScope, demoIndex)}
                                />
                            )}
                        </td>
                    )}
                    {children}
                </tr>
            );
        } else {
            return null;
        }
    }
}

interface DemoHeadProps extends BaseProps {
    cols: string[];
    theme?: unknown;
    demoIndex?: string;
    demoShapeLevel?: string;
}

class DemoHead extends React.Component<DemoHeadProps> {
    static displayName = 'DemoHead';

    static propTypes = {
        cols: PropTypes.array,
        theme: PropTypes.object,
        demoIndex: PropTypes.string,
        demoItems: PropTypes.object,
        demoScope: PropTypes.object,
        demoTitle: PropTypes.string,
        demoShapeLevel: PropTypes.string,
        showType: PropTypes.string,
        switchVisible: PropTypes.func,
    };

    static defaultProps = {
        cols: [],
    };

    render() {
        const cols = this.props.cols.map((col, i) => {
            const {
                demoIndex: index,
                demoItems = {},
                demoScope = this,
                showType,
                switchVisible = () => {},
            } = this.props;
            const demoIndex = `${index!.replace(/-\d+$/, '-*')}-${i}`;
            const demoTitle = `${this.props.demoTitle} -> ${col || COL}`;
            const demoShapeLevel = this.props.demoShapeLevel;
            const { hidden = false } = demoItems[demoIndex] || {};

            // 解析
            if (demoShapeLevel) {
                if (!COOL[demoShapeLevel]) {
                    COOL[demoShapeLevel] = [];
                }

                if (col) {
                    let ret = false;
                    COOL[demoShapeLevel].forEach((item, index) => {
                        if (item.name === 'size') {
                            ret = true;
                            COOL[demoShapeLevel][index].enum.push(col);
                        }
                    });
                    if (!ret) {
                        COOL[demoShapeLevel].push({
                            name: 'size',
                            enum: [col],
                        });
                    }
                }
            }

            if (showType === 'hidden' || !hidden) {
                if (!demoItems[demoIndex]) {
                    demoItems[demoIndex] = {
                        hidden: false,
                        title: demoTitle,
                    };
                } else {
                    demoItems[demoIndex].title = demoTitle;
                }
                demoItems[demoIndex].existed = true;

                return (
                    <td key={i}>
                        {col || COL}
                        {showType === 'hidden' && (
                            <DisplaySwitch
                                hidden={hidden}
                                onClick={switchVisible.bind(demoScope, demoIndex)}
                            />
                        )}
                    </td>
                );
            } else {
                return null;
            }
        });

        return (
            <tr className="demo-head">
                <td />
                {cols}
            </tr>
        );
    }
}

if (window.addEventListener) {
    window.addEventListener('message', event => {
        const data = event.data;
        if (event.origin !== location.origin || !data || data.from !== 'config') {
            return;
        }

        if (data.type === 'displayed') {
            callback.forEach(callback => {
                callback(data.body);
            });
        }
    });
}

function initDemo(compName: string) {
    window.compName = compName;

    // 追加信息到页面
    // @ts-expect-error fixme: pass id is invalid when document.createElement('script')
    const info = document.createElement('script', {
        id: 'fusion-cool',
    });
    info.innerHTML = `window.COOL = {'${compName}': ${JSON.stringify(
        COOL
    )}, 'functions': ${JSON.stringify(FUN)}}`;
    document.body.appendChild(info);

    sendMessage(compName, 'loaded');
}

export { Demo, DemoHead, DemoGroup, initDemo };
