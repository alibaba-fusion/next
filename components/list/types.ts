import { ReactElement, ReactNode } from 'react';
import { LoadingProps } from '../loading';
import { CommonProps } from '../util';

type HTMLAttributesWeak = Omit<React.HTMLAttributes<HTMLElement>, 'title'>;
/**
 * @api List
 */
export interface ListProps<DataItem = unknown>
    extends React.HTMLAttributes<HTMLElement>,
        CommonProps {
    /**
     * 列表头部
     * @en List header
     */
    header?: ReactNode;
    /**
     * 列表尾部
     * @en List footer
     */
    footer?: ReactNode;
    /**
     * 列表尺寸
     * @en List size
     * @defaultValue 'medium'
     */
    size?: 'medium' | 'small';
    /**
     * 是否显示分割线
     * @en Whether to show the divider
     * @defaultValue true
     */
    divider?: boolean;
    /**
     * children
     */
    children?: ReactNode;
    /**
     * 列表项数据源
     * @en List item data source
     */
    dataSource?: DataItem[];
    /**
     * 当使用 dataSource 时，可以用 renderItem 自定义渲染列表项
     * @param current - 当前遍历的项 - The current item
     * @param index - 当前遍历的项的索引 - The index of the current item
     * @returns - 自定义渲染的 ReactElement - The ReactElement be customized
     */
    renderItem?: (current: DataItem, index: number) => ReactElement;
    /**
     * loading 状态控制
     * @en Loading state control
     * @defaultValue false
     */
    loading?: boolean;
    /**
     * 自定义 Loading 组件
     * @en Custom Loading component
     * @param props - 透传 props - Pass through props
     * @returns - 自定义的 Loading 组件 - Custom Loading component
     * @remarks 请务必透传 props, 使用方式： loadingComponent=\{props =\> \<Loading \{...props\}/\>\}
     */
    loadingComponent?: (props: LoadingProps) => ReactElement;
    /**
     * 当列表为空时显示的内容
     * @en The content displayed when the list is empty
     */
    emptyContent?: ReactNode;
}
/**
 * @api List.Item
 */
export interface ListItemProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 列表元素的标题
     * @en The title of the list item
     */
    title?: ReactNode;
    /**
     * 列表元素的描述内容
     * @en The description of the list item
     */
    description?: ReactNode;
    /**
     * 列表元素的头像 / 图标 / 图片内容
     * @en The avatar / icon / image content of the list item
     */
    media?: ReactNode;
    /**
     * 额外内容
     * @en Extra content
     */
    extra?: ReactNode;
}
