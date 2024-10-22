import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GroupProps } from '../types';
/**
 * Button.Group
 */
declare class ButtonGroup extends Component<GroupProps> {
    static displayName: string;
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
export type { ButtonGroup };
declare const _default: import("../../config-provider/types").ConfiguredComponentClass<GroupProps & import("../../config-provider/types").ComponentCommonProps, ButtonGroup, {}>;
export default _default;
