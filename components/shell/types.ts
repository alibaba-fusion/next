import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import type { CommonProps } from '../util';

/**
 * @api Shell
 */
export interface ShellProps extends HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 预设屏幕宽度，会影响Navigation LocalNavigation Ancillary等是否占据空间
     * @en Preset screen width, tt determines whether Navigation LocalNavigation Ancillarytake space or not
     * @defaultValue 'desktop'
     * @remarks
     * 可选值：
     * **phone** 手机，
     * **tablet** 平板，
     * **desktop** PC电脑。
     * -
     * options:
     * **phone** phone,
     * **tablet** tablet,
     * **desktop** desktop.
     */
    device?: 'tablet' | 'desktop' | 'phone';
    /**
     * 样式类型，分浅色主题、深色主题、主题色主题
     * @en type of Shell
     * @remarks
     * 可选值：
     * **light** 浅色，
     * **dark** 深色，
     * **brand** 主题色。
     * -
     * options:
     * **light** light,
     * **dark** dark,
     * **brand** brand.
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
     * @remarks
     * 可选值：
     * **hoz** hoz，
     * **ver** ver。
     * -
     * options:
     * **hoz** hoz,
     * **ver** ver.
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
     * @remarks
     * 可选值：
     * **left** left，
     * **right** right，
     * **center** center。
     * -
     * options:
     * **left** left,
     * **right** right,
     * **center** center.
     * @defaultValue 'right'
     */
    align?: 'left' | 'right' | 'center';
    /**
     * 	默认按钮触发的展开收起状态
     * @en this will be triggered when collapse changed by inner icon
     * @defaultValue func.noop
     */
    onCollapseChange?: (collapse?: boolean) => void;
    /**
     * 	菜单展开、收起的触发元素，默认在左上角，不想要可以设置 null 来去掉
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
     * 	默认按钮触发的展开收起状态
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
     * 	默认按钮触发的展开收起状态
     * @en this will be triggered when collapse changed by inner icon
     * @defaultValue func.noop
     */
    onCollapseChange?: (collapse?: boolean) => void;
    /**
     * 是否固定，且需要在在 Shell fixedHeader时生效
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
     * 	默认按钮触发的展开收起状态
     * @en this will be triggered when collapse changed by inner icon
     * @defaultValue func.noop
     */
    onCollapseChange?: (collapse?: boolean) => void;
}

export interface ShellBaseProps extends ShellProps {
    componentName?: string;
    triggerProps?: object;
    fixed?: boolean;
    component?: ReactElement | unknown;
    children?: Array<ReactElement | null>;
    collapse?: boolean;
    miniable?: boolean;
    onCollapseChange?: (collapsed: boolean) => void;
    direction?: 'hoz' | 'ver';
    align?: 'left' | 'right' | 'center';
}

export interface LayoutItem {
    [key: string]: ReactElement | Array<ReactElement>;
}

export interface ShellState {
    controll: boolean;
    collapseMap: {
        Navigation: boolean;
        LocalNavigation: boolean;
        Ancillary: boolean;
        ToolDock: boolean;
    };
    device?: 'tablet' | 'desktop' | 'phone';
}
