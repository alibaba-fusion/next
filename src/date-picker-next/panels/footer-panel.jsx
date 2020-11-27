import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import { func } from '../../util';
import defaultLocale from '../../locale/zh-cn';

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

class FooterPanel extends React.PureComponent {
    static propTypes = {
        prefix: PT.string,
        rtl: PT.bool,
        locale: PT.object,
        showOk: PT.bool,
        preset: PT.any,
        onOk: PT.func,
    };

    static defaultProps = {
        showOk: true,
        onOk: noop,
        prefix: 'next-',
        rtl: false,
        locale: defaultLocale.DatePicker,
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}date-picker-footer`;

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
                    onClick={() =>
                        func.call(this.props, 'onChange', [isFunction(value) ? value() : value])
                    }
                    {...buttonProps}
                >
                    {label || name}
                </Button>
            );
        });
    }

    render() {
        const { prefixCls } = this;

        return (
            <div className={prefixCls}>
                {this.renderPreset()}
                {/* <div className={`${prefixCls}-actions`}>
                    <Button onClick={this.props.onOk} type="primary">
                        {this.props.locale.ok}
                    </Button>
                </div> */}
            </div>
        );
    }
}

export default polyfill(FooterPanel);
