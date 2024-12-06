declare const _default: typeof FooterPanel;
export default _default;
declare class FooterPanel extends React.PureComponent<any, any, any> {
    static propTypes: {
        rtl: PT.Requireable<boolean>;
        className: PT.Requireable<string>;
        prefix: PT.Requireable<string>;
        locale: PT.Requireable<object>;
        showOk: PT.Requireable<boolean>;
        preset: PT.Requireable<object>;
        onOk: PT.Requireable<(...args: any[]) => any>;
        oKable: PT.Requireable<boolean>;
        extraRender: PT.Requireable<NonNullable<((...args: any[]) => any) | PT.ReactNodeLike>>;
    };
    static defaultProps: {
        locale: Partial<{
            placeholder: string;
            datetimePlaceholder: string;
            monthPlaceholder: string;
            weekPlaceholder: string;
            yearPlaceholder: string;
            now: string;
            selectTime: string;
            selectDate: string;
            ok: string;
            clear: string;
            startPlaceholder: string;
            endPlaceholder: string;
            hour: string;
            minute: string;
            second: string;
            monthBeforeYear?: boolean | undefined;
        }> & {
            momentLocale?: string | undefined;
        };
    };
    constructor(props: any);
    prefixCls: string;
    renderRanges: () => React.JSX.Element[] | null;
    render(): React.JSX.Element | null;
}
import React from 'react';
import PT from 'prop-types';
