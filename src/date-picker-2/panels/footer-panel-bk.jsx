import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import { func } from '../../util';
import { call } from '../util';

import Button from '../../button';

const { noop, bindCtx, isFunction } = func;

function pickProps(obj, fields) {
    const newObj = {};

    if (!Array.isArray(fields)) {
        if (typeof fields === 'object') {
            fields = Object.keys(fields);
        } else {
            fields = [fields];
        }
    }

    for (const k in obj) {
        if (fields.includes(k)) {
            newObj[k] = obj[k];
        }
    }
    return newObj;
}

function normalizePreset(preset) {
    if (!Array.isArray(preset)) {
        preset = [preset];
    }
    return preset;
}

function getValue(value) {
    return isFunction(value) ? value() : value;
}

class FooterPanel extends React.PureComponent {
    static propTypes = {
        showOk: PT.bool,
        preset: PT.any,
        onOk: PT.func,
    };

    static defaultProps = {
        showOk: true,
        onOk: noop,
    };

    constructor(props) {
        super(props);

        bindCtx(this, ['renderPreset']);
    }

    renderPreset() {
        if (!('preset' in this.props) || !this.props.preset) {
            return null;
        }

        const preset = normalizePreset(this.props.preset);

        return preset.map(({ name, label, value, ...rest }, index) => {
            const buttonProps = pickProps(rest, Button.propTypes);

            return (
                <Button
                    key={name || index}
                    onClick={() => call(this.props, 'onChange', getValue(value))}
                    {...buttonProps}
                >
                    {label || name}
                </Button>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderPreset()}
                <Button onClick={this.props.onOk} style={{ float: 'right' }} type="primary">
                    确认
                </Button>
            </div>
        );
    }
}

export default polyfill(FooterPanel);
