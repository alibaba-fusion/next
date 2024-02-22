import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from './types';
/**
 * Typography.Text
 */
declare class Text extends React.Component<TextProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        delete: PropTypes.Requireable<boolean>;
        mark: PropTypes.Requireable<boolean>;
        underline: PropTypes.Requireable<boolean>;
        strong: PropTypes.Requireable<boolean>;
        code: PropTypes.Requireable<boolean>;
        component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        rtl: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        delete: boolean;
        mark: boolean;
        underline: boolean;
        strong: boolean;
        code: boolean;
        component: string;
        rtl: boolean;
    };
    wrapChildren(children: React.ReactNode, wrapper: keyof JSX.IntrinsicElements): React.ReactNode;
    render(): React.JSX.Element;
}
export type { Text };
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    TextProps & import('../config-provider/types').ComponentCommonProps,
    Text,
    {}
>;
export default _default;
