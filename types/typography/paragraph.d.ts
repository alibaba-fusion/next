import React from 'react';
import PropTypes from 'prop-types';
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
export type { Paragraph };
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    ParagraphProps & import('../config-provider/types').ComponentCommonProps,
    Paragraph,
    {}
>;
export default _default;
