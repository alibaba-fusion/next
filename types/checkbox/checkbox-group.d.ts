import * as React from 'react';
import * as PropTypes from 'prop-types';
import type { GroupProps, GroupState, ValueItem } from './types';
/** Checkbox.Group */
declare class CheckboxGroup extends React.Component<GroupProps, GroupState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        disabled: PropTypes.Requireable<boolean>;
        dataSource: PropTypes.Requireable<
            NonNullable<
                (string | null | undefined)[] | (object | null | undefined)[] | null | undefined
            >
        >;
        value: PropTypes.Requireable<
            NonNullable<string | number | boolean | any[] | null | undefined>
        >;
        defaultValue: PropTypes.Requireable<
            NonNullable<string | number | boolean | any[] | null | undefined>
        >;
        children: PropTypes.Requireable<(PropTypes.ReactElementLike | null | undefined)[]>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        direction: PropTypes.Requireable<string>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        dataSource: never[];
        onChange: () => void;
        prefix: string;
        direction: string;
        isPreview: boolean;
    };
    static childContextTypes: {
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        __group__: PropTypes.Requireable<boolean>;
        selectedValue: PropTypes.Requireable<any[]>;
        disabled: PropTypes.Requireable<boolean>;
    };
    constructor(props: GroupProps);
    getChildContext(): {
        __group__: boolean;
        onChange: (currentValue: ValueItem, event: React.ChangeEvent<HTMLInputElement>) => void;
        selectedValue: ValueItem[];
        disabled: boolean | undefined;
    };
    static getDerivedStateFromProps(nextProps: GroupProps): {
        value: ValueItem[];
    } | null;
    onChange(currentValue: ValueItem, event: React.ChangeEvent<HTMLInputElement>): void;
    render(): React.JSX.Element;
}
declare const _default: typeof CheckboxGroup;
export default _default;
