import React from 'react';
import PropTypes from 'prop-types';
import { checkMomentObj } from '../utils';
import type { TimeMenuListItem, TimeMenuProps } from '../types';
declare class TimeMenu extends React.Component<TimeMenuProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        mode: PropTypes.Requireable<string>;
        step: PropTypes.Requireable<number>;
        activeIndex: PropTypes.Requireable<number>;
        value: typeof checkMomentObj;
        disabledItems: PropTypes.Requireable<(...args: any[]) => any>;
        renderTimeMenuItems: PropTypes.Requireable<(...args: any[]) => any>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        disabled: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        step: number;
        disabledItems: () => boolean;
        renderTimeMenuItems: (list: unknown) => unknown;
        onSelect: () => void;
        disabled: boolean;
    };
    menu: HTMLUListElement | null;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TimeMenuProps): void;
    scrollToSelected(duration?: number): void;
    _menuRefHandler: (ref: HTMLUListElement | null) => void;
    createMenuItems: (list: Array<TimeMenuListItem>) => React.JSX.Element[];
    render(): React.JSX.Element;
}
export default TimeMenu;
