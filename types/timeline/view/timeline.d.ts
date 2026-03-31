import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { TimelineProps, TimelineState } from '../types';
/** Timeline */
declare class Timeline extends Component<TimelineProps, TimelineState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        fold: PropTypes.Requireable<any[]>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        locale: PropTypes.Requireable<object>;
        animation: PropTypes.Requireable<boolean>;
        mode: PropTypes.Requireable<string>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        rtl: boolean;
        fold: never[];
        locale: Partial<{
            expand: string;
            fold: string;
        }> & {
            momentLocale?: string | undefined;
        };
        animation: boolean;
        mode: string;
    };
    constructor(props: TimelineProps);
    static getDerivedStateFromProps(
        nextProps: TimelineProps,
        prevState: TimelineState
    ):
        | {
              fold: import('../types').FoldItem[];
              innerUpdate: boolean;
          }
        | {
              fold: import('../types').FoldItem[] | undefined;
              innerUpdate?: undefined;
          }
        | null;
    toggleFold(folderIndex: number, total: number): void;
    render(): React.JSX.Element;
}
declare const _default: import('../../config-provider/types').ConfiguredComponentClass<
    TimelineProps & import('../../config-provider/types').ComponentCommonProps,
    Timeline,
    {}
>;
export default _default;
