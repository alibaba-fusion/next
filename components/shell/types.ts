import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import type { CommonProps } from '../util';

/**
 * @api Shell
 */
export interface ShellProps extends HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 预设屏幕宽度，会影响 `Navigation`、`LocalNavigation`、`Ancillary` 等是否占据空间
     * @en Preset screen width, which determines whether `Navigation` `LocalNavigation` `Ancillary` take space or not
     * @defaultValue 'desktop'
     */
    device?: 'tablet' | 'desktop' | 'phone';
    /**
     * 样式类型，分浅色主题、深色主题、主题色主题
     * @en type of Shell
     * @defaultValue 'light'
     */
    type?: 'light' | 'dark' | 'brand';
    /**
     * 是否固定Header，采用sticky布局，不支持 IE11
     * @en fixed header or not. Doesn't work under IE11
     * @defaultValue false
     */
    fixedHeader?: boolean;
}

/**
 * @api Shell.Navigation
 */
export interface ShellNavigationProps extends HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 方向
     * @en header or asider
     * @defaultValue 'hoz'
     */
    direction?: 'hoz' | 'ver';
    /**
     * 是否折叠(折叠成只有icon状态)
     * @en collapse or not
     * @defaultValue false
     */
    collapse?: boolean;
    /**
     * 横向模式下，导航排布的位置
     * @en Arrangement of Navigation when direction is hoz
     * @defaultValue 'right'
     */
    align?: 'left' | 'right' | 'center';
    /**
     * 默认按钮触发的展开收起状态
     * @en this will be triggered when collapse changed by inner icon
     * @defaultValue func.noop
     */
    onCollapseChange?: (collapse?: boolean) => void;
    /**
     * 菜单展开、收起的触发元素，默认在左上角，不想要可以设置 null 来去掉
     * @en trigger of Shell.Navigation, it placed on top and left of the page, you can set null to remove it
     */
    trigger?: ReactNode;
    /**
     * 是否固定，且需要在在 Shell fixedHeader时生效
     * @en fixed or not, only worked when Shell fixedHeader is true
     * @defaultValue false
     */
    fixed?: boolean;
}

/**
 * @api Shell.LocalNavigation
 */
export interface ShellLocalNavigationProps extends HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 是否折叠（完全收起）
     * @en collapse or not
     * @defaultValue false
     */
    collapse?: boolean;
    /**
     * 默认按钮触发的展开收起状态
     * @en this will be triggered when collapse changed by inner icon
     * @defaultValue func.noop
     */
    onCollapseChange?: (collapse?: boolean) => void;
}

/**
 * @api Shell.ToolDock
 */
export interface ShellToolDockProps extends HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 是否折叠（完全收起）
     * @en collapse or not
     * @defaultValue false
     */
    collapse?: boolean;
    /**
     * 默认按钮触发的展开收起状态
     * @en this will be triggered when collapse changed by inner icon
     * @defaultValue func.noop
     */
    onCollapseChange?: (collapse?: boolean) => void;
    /**
     * 是否固定，且需要在在 Shell fixedHeader 时生效
     * @en fixed or not, only worked when Shell fixedHeader is true
     * @defaultValue false
     */
    fixed?: boolean;
}

/**
 * @api Shell.Ancillary
 */
export interface ShellAncillaryProps extends HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 是否折叠（完全收起）
     * @en collapse or not
     * @defaultValue false
     */
    collapse?: boolean;
    /**
     * 默认按钮触发的展开收起状态
     * @en this will be triggered when collapse changed by inner icon
     * @defaultValue func.noop
     */
    onCollapseChange?: (collapse?: boolean) => void;
}

export type CommonAttributes = HTMLAttributes<HTMLElement> & CommonProps;

export type CollapseMap = {
    Navigation: boolean;
    LocalNavigation: boolean;
    Ancillary: boolean;
    ToolDock: boolean;
};

export type LayoutProps = {
    header?: {
        Action?: ReactElement;
        Branding?: ReactElement;
        Navigation?: ReactElement;
    };
    Navigation?: ReactElement;
    LocalNavigation?: ReactElement;
    MultiTask?: ReactElement;
    Ancillary?: ReactElement;
    ToolDock?: ReactElement;
    taskHeader?: ReactElement;
    content?: Array<ReactElement>;
    page?: ReactElement | [];
};

export interface ShellBaseProps extends ShellProps {
    component?: ReactElement | unknown;
    children?: Array<ReactElement | null>;
}

export interface BaseProps
    extends HTMLAttributes<HTMLElement>,
        CommonProps,
        ShellNavigationProps,
        ShellLocalNavigationProps,
        ShellToolDockProps,
        ShellAncillaryProps {
    triggerProps?: object;
    miniable?: boolean;
    component?: ReactElement | unknown;
}

export interface ShellState {
    controll: boolean;
    collapseMap: CollapseMap;
    device?: 'tablet' | 'desktop' | 'phone';
}

export type ChildElement = React.ReactElement<
    ShellProps,
    (string | React.JSXElementConstructor<ShellProps>) & { _typeMark: string }
>;
