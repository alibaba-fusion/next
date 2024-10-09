import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { func, obj } from '../util';
import type { ResetProps } from './types';

class Reset extends React.Component<ResetProps> {
    static propTypes = {
        names: PropTypes.array,
        onClick: PropTypes.func,
        toDefault: PropTypes.bool,
        field: PropTypes.object,
        children: PropTypes.node,
    };

    static defaultProps = {
        onClick: func.noop,
    };

    static contextTypes = {
        _formField: PropTypes.object,
    };

    handleClick = () => {
        const { names, toDefault, onClick } = this.props;
        const field = this.context._formField || this.props.field;

        if (!field) {
            onClick!();
            return;
        }

        if (toDefault) {
            field.resetToDefault(names);
        } else {
            field.reset(names);
        }

        onClick!();
    };

    render() {
        const { children } = this.props;

        return (
            <Button {...obj.pickOthers(Reset.propTypes, this.props)} onClick={this.handleClick}>
                {children}
            </Button>
        );
    }
}

export default Reset;
