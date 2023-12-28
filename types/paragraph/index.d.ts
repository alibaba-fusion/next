import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ParagraphProps } from './types';
/** Paragraph */
declare class Paragraph extends React.Component<ParagraphProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        /**
         * 额外的样式名 会附加到 root dom 上
         */
        className: PropTypes.Requireable<string>;
        /**
         * 什么方式展示段落
         * - 'long' :  展示所有文本
         * - 'short' : 展示三行以内（非强制）
         */
        type: PropTypes.Requireable<string>;
        /**
         * 组件大小。
         * - 'medium' : 中号
         * - 'short' : 小号
         */
        size: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        type: string;
        size: string;
    };
    constructor(props: ParagraphProps);
    render(): React.JSX.Element;
}
export type { ParagraphProps };
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
        /**
         * 额外的样式名 会附加到 root dom 上
         */
        className: PropTypes.Requireable<string>;
        /**
         * 什么方式展示段落
         * - 'long' :  展示所有文本
         * - 'short' : 展示三行以内（非强制）
         */
        type: PropTypes.Requireable<string>;
        /**
         * 组件大小。
         * - 'medium' : 中号
         * - 'short' : 小号
         */
        size: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        prefix: string;
        type: string;
        size: string;
    };
};
export default _default;
