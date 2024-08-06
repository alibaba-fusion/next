import React, { Component } from 'react';
import type { CloseableProps } from './types';
declare class Closeable extends Component<CloseableProps> {
    static defaultProps: {
        disabled: boolean;
        type: string;
    };
    render(): React.JSX.Element;
}
export default Closeable;
