import * as React from 'react';
import * as PropTypes from 'prop-types';
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
declare const _default: {
    new (
        props: TextProps & import('../config-provider/types').ComponentCommonProps,
        context?: unknown
    ): import('../config-provider/types').ConfiguredComponent<
        TextProps & import('../config-provider/types').ComponentCommonProps,
        Text
    >;
    contextType?: React.Context<any> | undefined;
} & {
    propTypes: {
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
    defaultProps: {
        prefix: string;
        delete: boolean;
        mark: boolean;
        underline: boolean;
        strong: boolean;
        code: boolean;
        component: string;
        rtl: boolean;
    };
};
export default _default;
