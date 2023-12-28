import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ParagraphProps } from './types';
/**
 * Typography.Paragraph
 */
declare class Paragraph extends React.Component<ParagraphProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    };
    static defaultProps: {
        prefix: string;
        type: string;
        size: string;
        component: string;
    };
    render(): React.JSX.Element;
}
declare const _default: {
    new (
        props: ParagraphProps & import('../config-provider/types').ComponentCommonProps,
        context?: unknown
    ): import('../config-provider/types').ConfiguredComponent<
        ParagraphProps & import('../config-provider/types').ComponentCommonProps,
        Paragraph
    >;
    contextType?: React.Context<any> | undefined;
} & {
    propTypes: {
        prefix: PropTypes.Requireable<string>;
        component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    };
    defaultProps: {
        prefix: string;
        type: string;
        size: string;
        component: string;
    };
};
export default _default;
