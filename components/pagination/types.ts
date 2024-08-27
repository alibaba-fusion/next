import { type ReactNode, type HTMLAttributes } from 'react';
import type { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
import type { SelectProps } from '../select';
import { type Locale } from '../locale/types';

interface HTMLAttributesWeak extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {}

/**
 * @api Pagination
 */
export interface PaginationProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 分页组件类型
     * @en Set the type of Pagination component
     * @defaultValue 'normal'
     */
    type?: 'normal' | 'simple' | 'mini';

    /**
     * 前进后退按钮样式
     * @en Forward Back Button Style
     * @defaultValue 'normal'
     */
    shape?: 'normal' | 'arrow-only' | 'arrow-prev-only' | 'no-border';

    /**
     * 分页组件大小
     * @en Set the size of Pagination
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * （受控）当前页码
     * @en （controlled）Current page number
     * @defaultValue 1
     */
    current?: number;

    /**
     * （非受控）初始页码
     * @en (uncontrolled）Initial page number
     * @defaultValue 1
     */
    defaultCurrent?: number;

    /**
     * 页码发生改变时的回调函数
     * @en Callback function when page number changes
     */
    onChange?: (current: number, e: object) => void;

    /**
     * 总记录数
     * @en total pages number
     * @defaultValue 100
     */
    total?: number;

    /**
     * 总数的渲染函数
     * @en The rendering functions of total number
     */
    totalRender?: (total: number, range: number[]) => void;

    /**
     * 页码显示的数量，更多的使用...代替
     * @en The number of pages displayed, more use '...' instead
     * @defaultValue 5
     */
    pageShowCount?: number;

    /**
     * 一页中的记录数
     * @en How many records in a page
     * @defaultValue 10
     */
    pageSize?: number;

    /**
     * 每页显示选择器类型
     * @en Set to display selector type per page size
     * @defaultValue false
     */
    pageSizeSelector?: false | 'filter' | 'dropdown';

    /**
     * 每页显示选择器可选值
     * @en Display selector selectable records-number per page
     * @defaultValue [5, 10, 20]
     */
    pageSizeList?: Array<number> | Array<{ label: string; value: number }>;

    /**
     * 自定义页码渲染函数，函数作用于页码button以及当前页/总页数的数字渲染
     * @en Custom page number rendering function, function for page number button and digital rendering of current page/total page count
     * @defaultValue index =\> index
     */
    pageNumberRender?: (index: number) => ReactNode;

    /**
     * 每页显示选择器在组件中的位置
     * @en Set the position of pageSize selector
     * @defaultValue 'start'
     */
    pageSizePosition?: 'start' | 'end';

    /**
     * 存在每页显示选择器时是否使用浮动布局
     * @en Is there a floating layout when pageSize selector is displayed
     * @defaultValue false
     */
    useFloatLayout?: boolean;

    /**
     * 每页显示记录数量改变时的回调函数
     * @en The callback function trigget when the number of pageSize selector changes
     */
    onPageSizeChange?: (pageSize: number) => void;

    /**
     * 当分页数为1时，是否隐藏分页器
     * @en Whether to hide the pager when the number of pages is 1
     * @defaultValue false
     */
    hideOnlyOnePage?: boolean;

    /**
     * type 设置为 normal 时，在页码数超过5页后，会显示跳转输入框与按钮，当设置 showJump 为 false 时，不再显示该跳转区域
     * @en When the number of pagination is 1, if the hidden pager type is set to normal, after the page number exceeds 5 pages, the jump input box and button will be displayed. When showJump is set to false, the jump zone is no longer displayed.
     * @defaultValue true
     */
    showJump?: boolean;

    /**
     * 设置页码按钮的跳转链接，它的值为一个包含 \{page\} 的模版字符串，如：http://www.taobao.com/\{page\}
     * @en Set the jump link url of the page number button. Its value is a template string containing \{page\}, such as：http://www.taobao.com/\{page\}
     */
    link?: string;

    /**
     * 弹层组件属性，透传给Popup
     * @en Props for Popup
     */
    popupProps?: PopupProps;
    /**
     * 页码选择器下拉组件属性，透传给Select
     * @en Props for Select
     */
    selectProps?: SelectProps;
    /**
     * 多语言文案
     * @en International text
     * @skip
     */
    locale?: Locale['Pagination'];
}

export interface PaginationState {
    current: number;
    currentPageSize: number;
    inputValue: string;
}
