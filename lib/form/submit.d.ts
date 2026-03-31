import React from 'react';
import PropTypes from 'prop-types';
import type { SubmitProps } from './types';
declare class Submit extends React.Component<SubmitProps> {
    static displayName: string;
    static propTypes: {
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        validate: PropTypes.Requireable<NonNullable<boolean | any[] | null | undefined>>;
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
export default Submit;
