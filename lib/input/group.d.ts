import React from 'react';
import PropTypes from 'prop-types';
import type { GroupProps } from './types';
/**
 * Input.Group
 */
declare class Group extends React.Component<GroupProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        addonBefore: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        addonBeforeClassName: PropTypes.Requireable<string>;
        addonAfter: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        addonAfterClassName: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
    };
    render(): React.JSX.Element;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<GroupProps & import("../config-provider/types").ComponentCommonProps, Group, {}>;
export default _default;
