import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import { func } from '../../util';
import defaultLocale from '../../locale/zh-cn';

import Button from '../../button';

const { bindCtx, isFunction } = func;

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

function normalizeRanges(ranges) {
    if (Array.isArray(ranges)) {
        return ranges;
    } else {
        return Object.keys(ranges).map(key => {
            return {
                name: key,
                value: ranges[key],
            };
        });
    }
}

class FooterPanel extends React.PureComponent {
    static propTypes = {
        prefix: PT.string,
        rtl: PT.bool,
        locale: PT.object,
        showOk: PT.bool,
        showTime: PT.bool,
        ranges: PT.oneOfType([PT.array, PT.object]),
        onOk: PT.func,
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        locale: defaultLocale.DatePicker,
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}picker-footer`;

        bindCtx(this, ['renderRanges']);
    }

    renderRanges() {
        if (!('ranges' in this.props) || !this.props.ranges) {
            return null;
        }

        const ranges = normalizeRanges(this.props.ranges);

        return ranges.map(({ name, label, value, ...rest }, index) => {
            const buttonProps = pickProps(rest, Button.propTypes);

            return (
                <Button
                    text
                    type="primary"
                    key={name || index}
                    onClick={() => func.call(this.props, 'onChange', [isFunction(value) ? value() : value])}
                    {...buttonProps}
                >
                    {label || name}
                </Button>
            );
        });
    }

    render() {
        const { prefixCls } = this;
        const { showTime, showOk } = this.props;

        const shouldShowOk = showTime && showOk !== false;

        return (
            <div className={prefixCls}>
                {this.renderRanges()}
                <div className={`${prefixCls}-actions`}>
                    {shouldShowOk ? (
                        <Button onClick={this.props.onOk} type="primary">
                            {this.props.locale.ok}
                        </Button>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default polyfill(FooterPanel);
