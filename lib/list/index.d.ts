/// <reference types="react" />

import { ReactNode, Component, ComponentType } from 'react';
import { LoadingProps } from '../loading';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}

export interface ListProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 列表头部
     */
    header?: ReactNode;
    /**
     * 列表尾部
     */
    footer?: ReactNode;
    /**
     * 列表尺寸
     */
    size?: 'medium' | 'small';
    /**
     * 是否显示分割线
     */
    divider?: boolean;
    /**
     * children
     */
    children?: ReactNode;
    dataSource?: any[];
    /**
     * 当使用 dataSource 时，可以用 renderItem 自定义渲染列表项
     * @param {Any} current 当前遍历的项
     * @param {Number} index 当前遍历的项的索引
     */
    renderItem?: (current: any, index: number) => any;
    loading?: boolean;
    /**
     * 自定义 Loading 组件
     * 请务必透传 props, 使用方式： loadingComponent={props => <Loading {...props}/>}
     */
    loadingComponent?: (props: LoadingProps) => ReactNode;
    emptyContent?: ReactNode;
}

export interface ListItemProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 列表元素的标题
     */
    title?: ReactNode;
    /**
     * 列表元素的描述内容
     */
    description?: ReactNode;
    /**
     * 列表元素的头像 / 图标 / 图片内容
     */
    media?: ReactNode;
    /**
     * 额外内容
     */
    extra?: ReactNode;
}

export default class List extends Component<ListProps, any> {
    static Item: ComponentType<ListItemProps>;
}
