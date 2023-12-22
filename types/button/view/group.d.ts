import * as React from 'react';
import { Component } from 'react';
import * as PropTypes from 'prop-types';
import { GroupProps } from '../types';
/**
 * Button.Group
 */
declare class ButtonGroup extends Component<GroupProps> {
    static propTypes: {
        rtl: PropTypes.Requireable<boolean>;
        prefix: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        size: string;
    };
    render(): React.JSX.Element;
}
declare const _default: {
    new (
        props: GroupProps & import('../../config-provider/types').ComponentCommonProps,
        context?: unknown
    ): import('../../config-provider/types').ConfiguredComponent<
        GroupProps & import('../../config-provider/types').ComponentCommonProps,
        ButtonGroup
    >;
    contextType?: React.Context<any> | undefined;
} & {
    propTypes: {
        rtl: PropTypes.Requireable<boolean>;
        prefix: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    defaultProps: {
        prefix: string;
        size: string;
    };
};
export default _default;
