import React from 'react';
import PropTypes from 'prop-types';
import type { ResetProps } from './types';
declare class Reset extends React.Component<ResetProps> {
    static displayName: string;
    static propTypes: {
        names: PropTypes.Requireable<any[]>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        toDefault: PropTypes.Requireable<boolean>;
        field: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        onClick: () => void;
    };
    static contextTypes: {
        _formField: PropTypes.Requireable<object>;
    };
    handleClick: () => void;
    render(): React.JSX.Element;
}
export default Reset;
