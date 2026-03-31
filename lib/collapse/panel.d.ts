import React, { type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import { type PanelProps } from './types';
/** Collapse.Panel */
declare class Panel extends React.Component<PanelProps> {
    static propTypes: {
        /**
         * 样式类名的品牌前缀
         */
        prefix: PropTypes.Requireable<string>;
        /**
         * 子组件接受行内样式
         */
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<any>;
        isExpanded: PropTypes.Requireable<boolean>;
        /**
         * 是否禁止用户操作
         */
        disabled: PropTypes.Requireable<boolean>;
        /**
         * 标题
         */
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 扩展 class
         */
        className: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        id: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        isExpanded: boolean;
        onClick: () => void;
    };
    static isNextPanel: boolean;
    onKeyDown: (e: KeyboardEvent<HTMLElement>) => void;
    render(): React.JSX.Element;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<PanelProps & import("../config-provider/types").ComponentCommonProps, Panel, {}> & {
    isNextPanel: boolean;
};
export default _default;
