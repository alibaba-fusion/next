import React from 'react';
import PT from 'prop-types';
import type { Dayjs, ManipulateType } from 'dayjs';
import type { HeaderPanelProps } from '../types';
declare class HeaderPanel extends React.PureComponent<HeaderPanelProps> {
    static propTypes: {
        rtl: PT.Requireable<boolean>;
        prefix: PT.Requireable<string>;
        locale: PT.Requireable<object>;
        mode: PT.Requireable<any>;
        shape: PT.Requireable<string>;
        value: PT.Requireable<any>;
        panelMode: PT.Requireable<any>;
        panelValue: PT.Requireable<any>;
        validValue: PT.Requireable<any>;
        showTitle: PT.Requireable<boolean>;
        showModeSwitch: PT.Requireable<boolean>;
        onModeChange: PT.Requireable<(...args: any[]) => any>;
        onPanelValueChange: PT.Requireable<(...args: any[]) => any>;
        onPanelModeChange: PT.Requireable<(...args: any[]) => any>;
        onPrev: PT.Requireable<(...args: any[]) => any>;
        onNext: PT.Requireable<(...args: any[]) => any>;
        onSuperPrev: PT.Requireable<(...args: any[]) => any>;
        onSuperNext: PT.Requireable<(...args: any[]) => any>;
        titleRender: PT.Requireable<(...args: any[]) => any>;
        /**
         * 扩展操作区域渲染
         */
        renderHeaderExtra: PT.Requireable<(...args: any[]) => any>;
        /**
         * 自定义头部渲染
         */
        headerRender: PT.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        showTitle: boolean;
    };
    prefixCls: string;
    constructor(props: HeaderPanelProps);
    createPanelBtns: ({
        unit,
        num,
        isSuper,
    }: {
        unit: ManipulateType;
        num?: number | undefined;
        isSuper?: boolean | undefined;
    }) => React.JSX.Element[];
    handleClick(
        value: Dayjs,
        {
            unit,
            num,
            isSuper,
            isNext,
        }: {
            unit: ManipulateType;
            num: number;
            isSuper?: boolean;
            isNext?: boolean;
        }
    ): void;
    renderModeSwitch: () => React.JSX.Element;
    renderMonthSelect: () => React.JSX.Element;
    renderYearSelect(): React.JSX.Element;
    renderTextField(): React.JSX.Element;
    renderPanelHeader(): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    renderInner(): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    render(): React.JSX.Element;
}
declare const _default: typeof HeaderPanel;
export default _default;
