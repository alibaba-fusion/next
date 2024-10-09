import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { func, obj } from '../util';
import type { SubmitProps } from './types';

class Submit extends React.Component<SubmitProps> {
    static propTypes = {
        onClick: PropTypes.func,
        validate: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
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
        const { onClick, validate } = this.props;
        const field = this.context._formField || this.props.field;

        if (!field) {
            onClick!();
            return;
        }

        if (validate === true) {
            field.validate((errors: unknown[]) => {
                onClick!(field.getValues(), errors, field);
            });
        } else if (Array.isArray(validate)) {
            field.validate(validate, (errors: unknown[]) => {
                onClick!(field.getValues(), errors, field);
            });
        } else {
            onClick!(field.getValues(), null, field);
        }
    };

    render() {
        const { children } = this.props;

        return (
            <Button {...obj.pickOthers(Submit.propTypes, this.props)} onClick={this.handleClick}>
                {children}
            </Button>
        );
    }
}

export default Submit;
