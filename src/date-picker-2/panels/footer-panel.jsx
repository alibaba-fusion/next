import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';

import SharedPT from '../prop-types';
import { func } from '../../util';
import defaultLocale from '../../locale/zh-cn';

import Button from '../../button';

const { isFunction, renderNode } = func;

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
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        showOk: PT.bool,
        ranges: PT.oneOfType([PT.array, PT.object]),
        onOk: PT.func,
        oKable: PT.bool,
        extraRender: SharedPT.render,
    };

    static defaultProps = {
        locale: defaultLocale.DatePicker,
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}picker-footer`;
    }

    renderRanges = () => {
        if (!('ranges' in this.props) || !this.props.ranges) {
            return null;
        }

        const ranges = normalizeRanges(this.props.ranges);

        return ranges.map(({ name, label, value, ...rest }, index) => {
            const buttonProps = pickProps(rest, Button.propTypes);

            return (
                <Button
                    size="small"
                    type="secondary"
                    key={name || index}
                    onClick={() => func.call(this.props, 'onChange', [isFunction(value) ? value() : value, true])}
                    {...buttonProps}
                >
                    {label || name}
                </Button>
            );
        });
    };

    render() {
        const { prefixCls } = this;
        const { showOk, locale, onOk, oKable, extraRender } = this.props;

        const classNames = classnames(prefixCls, {
            [`${prefixCls}-with-actions`]: showOk,
        });

        const extraNode = renderNode(extraRender, null);

        return (
            <div className={classNames}>
                {extraNode ? <div className={`${prefixCls}-extra`}>{extraNode}</div> : null}
                <div className={`${prefixCls}-ranges`}>{this.renderRanges()}</div>
                <div className={`${prefixCls}-actions`}>
                    {showOk ? (
                        <Button size="small" disabled={!oKable} onClick={onOk} type="primary">
                            {locale.ok}
                        </Button>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default polyfill(FooterPanel);
