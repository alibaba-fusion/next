import React, {
    Component,
    type MouseEvent,
    type KeyboardEvent,
    type ComponentType,
    type HTMLAttributes,
    type ReactElement,
} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';
import Affix from '../affix';
import Icon from '../icon';
import { KEYCODE, dom, env, type CommonProps } from '../util';
import { isBoolean, getCollapseMap } from './util';
import type {
    ShellBaseProps,
    ShellState,
    LayoutItem,
    ShellNavigationProps,
    ShellLocalNavigationProps,
    ShellAncillaryProps,
    ShellToolDockProps,
} from './types';

type CollapseKey = 'Navigation' | 'LocalNavigation' | 'Ancillary' | 'ToolDock';
type CommonAttributes = HTMLAttributes<HTMLElement> & CommonProps;
type LayoutItemAttribute = Omit<LayoutItem, 'header'>;
type LayoutProps = LayoutItemAttribute & {
    header?: LayoutItem;
};

/** Shell */
export default function ShellBase(props: { componentName?: string }) {
    const { componentName } = props;
    class Shell extends Component<ShellBaseProps, ShellState> {
        static Branding: ComponentType<CommonAttributes>;
        static Action: ComponentType<CommonAttributes>;
        static MultiTask: ComponentType<CommonAttributes>;
        static AppBar: ComponentType<CommonAttributes>;
        static Content: ComponentType<CommonAttributes>;
        static Footer: ComponentType<CommonAttributes>;
        static ToolDockItem: ComponentType<CommonAttributes>;
        static Page: ComponentType<CommonAttributes>;
        static Navigation: ComponentType<ShellNavigationProps>;
        static LocalNavigation: ComponentType<ShellLocalNavigationProps>;
        static Ancillary: ComponentType<ShellAncillaryProps>;
        static ToolDock: ComponentType<ShellToolDockProps>;

        static displayName = componentName;

        static _typeMark = componentName;

        static propTypes = {
            ...ConfigProvider.propTypes,
            prefix: PropTypes.string,
            device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
            type: PropTypes.oneOf(['light', 'dark', 'brand']),
            fixedHeader: PropTypes.bool,
        };

        static defaultProps = {
            prefix: 'next-',
            device: 'desktop',
            type: 'light',
            fixedHeader: false,
        };

        public layout: LayoutProps;
        public headerRef: HTMLDivElement;
        public navigationFixed: boolean;
        public toolDockFixed: boolean;
        public navRef: HTMLDivElement;
        public localNavRef: HTMLDivElement;
        public submainRef: HTMLDivElement;
        public toolDockRef: HTMLDivElement;

        constructor(props: ShellBaseProps) {
            super(props);

            const deviceMap = getCollapseMap(props.device);
            this.layout = {};

            this.state = {
                controll: false,
                collapseMap: deviceMap,
                device: props.device,
            };
        }

        static getDerivedStateFromProps(
            nextProps: Readonly<ShellBaseProps>,
            prevState: Readonly<ShellState>
        ) {
            const { device } = prevState;

            if (nextProps.device !== device) {
                const deviceMap = getCollapseMap(nextProps.device);
                return {
                    controll: false,
                    collapseMap: deviceMap,
                    device: nextProps.device,
                };
            }

            return {};
        }

        componentDidMount() {
            this.checkAsideFixed();
        }

        componentDidUpdate(prevProps: Readonly<ShellBaseProps>) {
            if (prevProps.device !== this.props.device) {
                const deviceMapBefore = getCollapseMap(prevProps.device);
                const deviceMapAfter = getCollapseMap(this.props.device);

                Object.keys(deviceMapAfter).forEach((block: CollapseKey) => {
                    const { props } = (this.layout[block] as ReactElement) || {};
                    if (deviceMapBefore[block] !== deviceMapAfter[block]) {
                        if (props && typeof props.onCollapseChange === 'function') {
                            props.onCollapseChange(deviceMapAfter[block]);
                        }
                    }
                });
            }

            setTimeout(() => {
                // 如果左侧边栏固定
                this.checkAsideFixed();
            }, 201);
        }

        checkAsideFixed = () => {
            const { fixedHeader } = this.props;

            if (!fixedHeader) {
                return;
            }

            let headerHeight;
            if (this.headerRef && (this.navigationFixed || this.toolDockFixed)) {
                headerHeight = dom.getStyle(this.headerRef, 'height');
            }

            if (this.navigationFixed) {
                const style: { marginLeft?: string | number } = {};
                style.marginLeft = dom.getStyle(this.navRef, 'width');
                dom.addClass(this.navRef, 'fixed');
                headerHeight && dom.setStyle(this.navRef, { top: headerHeight });
                dom.setStyle(this.localNavRef || this.submainRef, style);
            }

            if (this.toolDockFixed) {
                const style: { marginRight?: string | number } = {};
                style.marginRight = dom.getStyle(this.toolDockRef, 'width');
                dom.addClass(this.toolDockRef, 'fixed');
                headerHeight && dom.setStyle(this.toolDockRef, { top: headerHeight });
                dom.setStyle(this.localNavRef || this.submainRef, style);
            }
        };

        setChildCollapse = (child: ReactElement, mark: CollapseKey) => {
            const { device, collapseMap, controll } = this.state;
            const { collapse } = child.props;
            const deviceMap = getCollapseMap(device);
            const props: { collapse?: boolean; miniable?: boolean } = {};

            // 非受控模式
            if (isBoolean(collapse) === false) {
                props.collapse = controll ? collapseMap[mark] : deviceMap[mark];
                // props.collapse = collapseMap[mark];
            }

            if (device !== 'phone' && mark === 'Navigation') {
                props.miniable = true;
            }

            return React.cloneElement(child, props);
        };

        toggleAside = (
            mark: CollapseKey,
            props: {
                onCollapseChange?: (collapse?: boolean) => void;
                collapse?: boolean;
            },
            e: KeyboardEvent | MouseEvent
        ) => {
            const { device, collapseMap } = this.state;
            const deviceMap = getCollapseMap(device);
            const current = props.collapse;

            const newCollapseMap = {
                ...deviceMap,
                ...collapseMap,
                [mark]: !current,
            };
            this.setState({
                controll: true,
                collapseMap: newCollapseMap,
            });

            if (props && typeof props.onCollapseChange === 'function') {
                props.onCollapseChange(newCollapseMap[mark]);
            }

            const { children } = this.props;
            let com;
            if (mark === 'Navigation') {
                com = children!
                    .filter(
                        (child: ReactElement<ShellNavigationProps>) =>
                            child &&
                            (child.type as unknown as { _typeMark: string })._typeMark.replace(
                                'Shell_',
                                ''
                            ) === mark &&
                            child.props.direction !== 'hoz'
                    )
                    .pop();
            } else {
                com = children!
                    .filter(
                        child =>
                            child &&
                            (child.type as unknown as { _typeMark: string })._typeMark.replace(
                                'Shell_',
                                ''
                            ) === mark
                    )
                    .pop();
            }

            const {
                triggerProps = {},
            }: {
                triggerProps?: {
                    onClick?: (e: KeyboardEvent | MouseEvent, collapsed: boolean) => void;
                };
            } = com!.props;

            if (typeof triggerProps.onClick === 'function') {
                triggerProps.onClick(e, this.state.collapseMap[mark]);
            }
        };

        toggleNavigation = (e: KeyboardEvent | MouseEvent) => {
            const mark = 'Navigation';
            const { props } = this.layout[mark] as ReactElement;

            if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
                return;
            }

            this.toggleAside(mark, props, e);
        };

        toggleLocalNavigation = (e: KeyboardEvent | MouseEvent) => {
            const mark = 'LocalNavigation';
            const { props } = this.layout[mark] as ReactElement;

            if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
                return;
            }

            this.toggleAside(mark, props, e);
        };

        toggleAncillary = (e: KeyboardEvent | MouseEvent) => {
            const mark = 'Ancillary';
            const { props } = this.layout[mark] as ReactElement;

            if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
                return;
            }

            this.toggleAside(mark, props, e);
        };

        toggleToolDock = (e: KeyboardEvent | MouseEvent) => {
            const mark = 'ToolDock';
            const { props } = this.layout[mark] as ReactElement;

            if ('keyCode' in e && e.keyCode !== KEYCODE.ENTER) {
                return;
            }

            this.toggleAside(mark, props, e);
        };

        saveHeaderRef = (ref: HTMLDivElement) => {
            this.headerRef = ref;
        };
        saveLocalNavRef = (ref: HTMLDivElement) => {
            this.localNavRef = ref;
        };

        saveNavRef = (ref: HTMLDivElement) => {
            this.navRef = ref;
        };

        saveSubmainRef = (ref: HTMLDivElement) => {
            this.submainRef = ref;
        };

        saveToolDockRef = (ref: HTMLDivElement) => {
            this.toolDockRef = ref;
        };

        renderShell = (props: ShellBaseProps) => {
            const { prefix, children, className, type, fixedHeader, ...others } = props;

            const { device } = this.state;

            const layout: LayoutProps = {};
            layout.header = {};
            let hasToolDock = false,
                needNavigationTrigger = false,
                needDockTrigger = false;

            React.Children.map(children, child => {
                if (child && typeof child.type === 'function') {
                    const mark = (child.type as unknown as { _typeMark: string })._typeMark.replace(
                        'Shell_',
                        ''
                    );
                    switch (mark) {
                        case 'Branding':
                        case 'Action':
                            layout.header![mark] = child;
                            break;
                        case 'MultiTask':
                            layout.taskHeader = child;
                            break;
                        case 'LocalNavigation':
                            if (!layout[mark]) {
                                layout[mark] = [];
                            }
                            layout[mark] = this.setChildCollapse(child, mark);
                            break;
                        case 'Ancillary':
                            if (!layout[mark]) {
                                layout[mark] = [];
                            }

                            layout[mark] = this.setChildCollapse(child, mark);
                            break;
                        case 'ToolDock':
                            hasToolDock = true;

                            if (!layout[mark]) {
                                layout[mark] = [];
                            }

                            this.toolDockFixed = child.props.fixed!;
                            layout[mark] = this.setChildCollapse(child, mark);

                            break;
                        case 'AppBar':
                        case 'Content':
                        case 'Footer':
                            layout.content || (layout.content = []);
                            (layout.content as Array<ReactElement>).push(child);
                            break;
                        case 'Page':
                            layout.page || (layout.page = []);
                            layout.page = child;
                            break;
                        case 'Navigation':
                            if (child.props.direction === 'hoz') {
                                layout.header![mark] = child;
                            } else {
                                if (!layout[mark]) {
                                    layout[mark] = [];
                                }

                                needNavigationTrigger = true;
                                this.navigationFixed = child.props.fixed!;
                                const childN = this.setChildCollapse(child, mark);
                                layout[mark] = childN;
                            }
                            break;
                        default:
                            break;
                    }
                }
            });

            const headerCls = classnames({
                [`${prefix}shell-header`]: true,
                [`${prefix}shell-fixed-header`]: fixedHeader,
            });

            const mainCls = classnames({
                [`${prefix}shell-main`]: true,
            });

            const pageCls = classnames({
                [`${prefix}shell-page`]: true,
            });

            const submainCls = classnames({
                [`${prefix}shell-sub-main`]: true,
            });

            const asideCls = classnames({
                [`${prefix}shell-aside`]: true,
            });

            const toolDockCls = classnames({
                [`${prefix}aside-tooldock`]: true,
            });

            const navigationCls = classnames({
                [`${prefix}aside-navigation`]: true,
                [`${prefix}shell-collapse`]:
                    layout.Navigation && (layout.Navigation as ReactElement)!.props.collapse,
            });

            if (hasToolDock) {
                if (device === 'phone') {
                    needDockTrigger = true;
                }
            }

            // 如果存在垂直模式的 Navigation, 则需要在 Branding 上出现 trigger
            if (needNavigationTrigger) {
                const branding = layout.header.Branding as ReactElement;
                const collapse = (layout.Navigation as ReactElement)!.props.collapse;
                let trigger = (layout.Navigation as ReactElement)!.props.trigger;

                if ('trigger' in (layout.Navigation as ReactElement)!.props) {
                    trigger =
                        (trigger &&
                            React.cloneElement(trigger, {
                                onClick: this.toggleNavigation,
                                'aria-expanded': !collapse,
                            })) ||
                        trigger;
                } else {
                    const aria = {
                        'aria-expanded': !collapse,
                        'aria-label': 'toggle',
                    };
                    trigger = (
                        <div
                            key="nav-trigger"
                            role="button"
                            tabIndex={0}
                            {...aria}
                            className="nav-trigger"
                            onClick={this.toggleNavigation}
                            onKeyDown={this.toggleNavigation}
                        >
                            {collapse ? (
                                <Icon size="small" type="toggle-right" />
                            ) : (
                                <Icon size="small" type="toggle-left" />
                            )}
                        </div>
                    );
                }

                if (!branding) {
                    trigger && (layout.header.Branding = trigger);
                } else {
                    layout.header.Branding = React.cloneElement(branding, {}, [
                        trigger,
                        branding.props.children,
                    ]);
                }
            }

            // 如果存在 toolDock, 则需要在 Action 上出现 trigger
            if (needDockTrigger) {
                const action = layout.header.Action as ReactElement;
                const collapse = (layout.ToolDock as ReactElement).props.collapse;
                let trigger = (layout.ToolDock as ReactElement).props.trigger;

                if ('trigger' in (layout.ToolDock as ReactElement).props) {
                    trigger =
                        (trigger &&
                            React.cloneElement(trigger, {
                                onClick: this.toggleToolDock,
                                'aria-expanded': !collapse,
                            })) ||
                        trigger;
                } else {
                    const aria = {
                        'aria-expanded': !collapse,
                        'aria-label': 'toggle',
                    };
                    trigger = (
                        <div
                            key="dock-trigger"
                            tabIndex={0}
                            role="button"
                            {...aria}
                            className="dock-trigger"
                            onClick={this.toggleToolDock}
                            onKeyDown={this.toggleToolDock}
                        >
                            <Icon size="small" type="add" />
                        </div>
                    );
                }

                if (!action) {
                    layout.header.Action = trigger;
                } else {
                    layout.header.Action = React.cloneElement(action, {}, [
                        action.props.children,
                        trigger,
                    ]);
                }
            }

            let headerDom: ReactElement | [] = [],
                contentArr = [],
                taskHeaderDom = null;
            const innerArr = [];

            if (layout.taskHeader) {
                const taskHeaderCls = classnames({
                    [`${prefix}shell-task-header`]: true,
                });

                taskHeaderDom = (
                    <section key="task-header" className={taskHeaderCls}>
                        {layout.taskHeader}
                    </section>
                );
            }

            // 按照dom结构，innerArr 包括 LocalNavigation content Ancillary
            if (layout.LocalNavigation) {
                const collapse = (layout.LocalNavigation as ReactElement).props.collapse;
                let trigger = (layout.LocalNavigation as ReactElement).props.trigger;

                if ('trigger' in (layout.LocalNavigation as ReactElement).props) {
                    trigger =
                        (trigger &&
                            React.cloneElement(trigger, {
                                onClick: this.toggleLocalNavigation,
                                'aria-expanded': !collapse,
                            })) ||
                        trigger;
                } else {
                    const aria = {
                        'aria-expanded': !collapse,
                        'aria-label': 'toggle',
                    };
                    trigger = (
                        <div
                            key="local-nav-trigger"
                            role="button"
                            tabIndex={0}
                            {...aria}
                            className="local-nav-trigger aside-trigger"
                            onClick={this.toggleLocalNavigation}
                            onKeyDown={this.toggleLocalNavigation}
                        >
                            {collapse ? (
                                <Icon size="small" type="arrow-right" />
                            ) : (
                                <Icon size="small" type="arrow-left" />
                            )}
                        </div>
                    );
                }

                const localNavCls = classnames(asideCls, {
                    [`${prefix}aside-localnavigation`]: true,
                });

                innerArr.push(
                    <aside key="localnavigation" className={localNavCls} ref={this.saveLocalNavRef}>
                        {React.cloneElement(layout.LocalNavigation as ReactElement, {}, [
                            <div key="wrapper" className={`${prefix}shell-content-wrapper`}>
                                {(layout.LocalNavigation as ReactElement).props.children}
                            </div>,
                            trigger,
                        ])}
                    </aside>
                );
            }

            if (layout.content) {
                innerArr.push(
                    <section key="submain" className={submainCls} ref={this.saveSubmainRef}>
                        {layout.content}
                    </section>
                );
            }

            if (layout.Ancillary) {
                const collapse = (layout.Ancillary as ReactElement).props.collapse;
                let trigger = (layout.Ancillary as ReactElement).props.trigger;

                if ('trigger' in (layout.Ancillary as ReactElement).props) {
                    trigger =
                        (trigger &&
                            React.cloneElement(trigger, {
                                onClick: this.toggleAncillary,
                                'aria-expanded': !collapse,
                            })) ||
                        trigger;
                } else {
                    const aria = {
                        'aria-expanded': !collapse,
                        'aria-label': 'toggle',
                    };
                    trigger = (
                        <div
                            key="ancillary-trigger"
                            role="button"
                            tabIndex={0}
                            {...aria}
                            className="ancillary-trigger aside-trigger"
                            onClick={this.toggleAncillary}
                            onKeyDown={this.toggleAncillary}
                        >
                            {collapse ? (
                                <Icon size="small" type="arrow-left" />
                            ) : (
                                <Icon size="small" type="arrow-right" />
                            )}
                        </div>
                    );
                }

                const ancillaryCls = classnames(asideCls, {
                    [`${prefix}aside-ancillary`]: true,
                });

                innerArr.push(
                    <aside key="ancillary" className={ancillaryCls}>
                        {React.cloneElement(layout.Ancillary as ReactElement, {}, [
                            <div key="wrapper" className={`${prefix}shell-content-wrapper`}>
                                {(layout.Ancillary as ReactElement).props.children}
                            </div>,
                            trigger,
                        ])}
                    </aside>
                );
            }

            // 按照dom结构, arr 包括 header Navigation ToolDock 和 innerArr
            if (Object.keys(layout.header).length > 0) {
                const dom = (
                    <header key="header" className={headerCls} ref={this.saveHeaderRef}>
                        {layout.header.Branding}
                        {layout.header.Navigation}
                        {layout.header.Action}
                    </header>
                );
                if (fixedHeader && env.ieVersion) {
                    headerDom = <Affix style={{ zIndex: 9 }}>{dom}</Affix>;
                } else {
                    headerDom = dom;
                }
            }

            layout.Navigation &&
                contentArr.push(
                    <aside key="navigation" className={navigationCls} ref={this.saveNavRef}>
                        {React.cloneElement(layout.Navigation as ReactElement, {
                            className: classnames(
                                asideCls,
                                (layout.Navigation as ReactElement).props.className
                            ),
                        })}
                    </aside>
                );

            // const contentArea = innerArr.length > 0
            //     ? <section key="main" className={mainCls}>{innerArr}</section>
            //     : layout.page;

            // contentArr.push(contentArea);
            contentArr = contentArr.concat(
                innerArr.length > 0
                    ? innerArr
                    : [
                          <section key="page" ref={this.saveSubmainRef} className={submainCls}>
                              {layout.page}
                          </section>,
                      ]
            );

            layout.ToolDock &&
                contentArr.push(
                    <aside key="tooldock" className={toolDockCls} ref={this.saveToolDockRef}>
                        {React.cloneElement(layout.ToolDock as ReactElement, {
                            className: classnames(
                                asideCls,
                                (layout.ToolDock as ReactElement).props.className
                            ),
                            key: 'tooldock',
                        })}
                    </aside>
                );

            const cls = classnames({
                [`${prefix}shell`]: true,
                [`${prefix}shell-${device}`]: true,
                [`${prefix}shell-${type}`]: true,
                [className!]: !!className,
            });

            if (componentName === 'Page') {
                return <section className={pageCls}>{children}</section>;
            }

            this.layout = layout;

            return (
                <section className={cls} {...others}>
                    {headerDom}
                    {taskHeaderDom}
                    <section className={mainCls}>{contentArr}</section>
                </section>
            );
        };

        render() {
            return this.renderShell(this.props);
        }
    }

    return polyfill(Shell);
}
