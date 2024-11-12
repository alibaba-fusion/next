import React from 'react';
import PropTypes from 'prop-types';
import type { SplitButtonProps } from './types';
import { type MenuProps } from '../menu';
declare class SplitButton extends React.Component<SplitButtonProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        type: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        component: PropTypes.Requireable<string>;
        ghost: PropTypes.Requireable<string | boolean>;
        defaultSelectedKeys: PropTypes.Requireable<any[]>;
        selectedKeys: PropTypes.Requireable<any[]>;
        selectMode: PropTypes.Requireable<string>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onItemClick: PropTypes.Requireable<(...args: any[]) => any>;
        triggerProps: PropTypes.Requireable<object>;
        autoWidth: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        defaultVisible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        popupTriggerType: PropTypes.Requireable<string>;
        popupAlign: PropTypes.Requireable<string>;
        popupStyle: PropTypes.Requireable<object>;
        popupClassName: PropTypes.Requireable<string>;
        popupProps: PropTypes.Requireable<object>;
        popupContainer: PropTypes.Requireable<any>;
        followTrigger: PropTypes.Requireable<boolean>;
        menuProps: PropTypes.Requireable<object>;
        leftButtonProps: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        type: string;
        size: string;
        autoWidth: boolean;
        popupTriggerType: string;
        onVisibleChange: () => void;
        onItemClick: () => void;
        onSelect: () => void;
        defaultSelectedKeys: never[];
        menuProps: {};
        leftButtonProps: {};
    };
    static Item: typeof import('../menu/view/selectable-item').default;
    static Divider: typeof import('../menu/view/divider').default;
    static Group: typeof import('../menu/view/group').default;
    static getDerivedStateFromProps(nextProps: SplitButtonProps): {
        visible?: boolean | undefined;
        selectedKeys?: string[] | undefined;
    };
    state: {
        selectedKeys: string[];
        visible: boolean | undefined;
    };
    private wrapper;
    private menu;
    componentDidMount(): void;
    selectMenuItem: MenuProps['onSelect'];
    clickMenuItem: MenuProps['onItemClick'];
    onPopupOpen: () => void;
    onVisibleChange: NonNullable<SplitButtonProps['onVisibleChange']>;
    _menuRefHandler: (
        ref: import('../config-provider/types').ConfiguredComponent<
            MenuProps & import('../config-provider/types').ComponentCommonProps,
            import('../menu/view/menu').Menu
        >
    ) => void;
    _wrapperRefHandler: (
        ref: import('../config-provider/types').ConfiguredComponent<
            import('../button').GroupProps &
                import('../config-provider/types').ComponentCommonProps,
            import('../button/view/group').ButtonGroup
        >
    ) => void;
    render(): React.JSX.Element;
}
export type { SplitButtonProps };
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    SplitButtonProps & import('../config-provider/types').ComponentCommonProps,
    SplitButton,
    {}
> & {
    Group: typeof import('../menu/view/group').default;
    Item: typeof import('../menu/view/selectable-item').default;
    Divider: typeof import('../menu/view/divider').default;
};
export default _default;
