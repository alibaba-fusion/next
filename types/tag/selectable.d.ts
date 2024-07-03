import React, { Component, type KeyboardEvent, type MouseEvent } from 'react';
import type { SelectableProps } from './types';
export interface SelectableState {
    checked: boolean | undefined;
}
declare class Selectable extends Component<SelectableProps, SelectableState> {
    static defaultProps: Partial<SelectableProps>;
    static getDerivedStateFromProps(
        props: SelectableProps,
        state: SelectableState
    ): {
        checked: boolean;
    } | null;
    constructor(props: SelectableProps);
    handleClick(e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>): false | undefined;
    render(): React.JSX.Element;
}
declare const _default: typeof Selectable;
export default _default;
