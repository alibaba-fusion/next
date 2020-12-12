import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';

import SharedPT from '../prop-types';
import { func } from '../../util';
import defaultLocale from '../../locale/zh-cn';

import Button from '../../button';

const { renderNode } = func;

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
                label: key,
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
        footerRender: SharedPT.render,
    };

    static defaultProps = {
        locale: defaultLocale.DatePicker,
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}date-picker2-footer`;
    }

    renderRanges = () => {
        if (!('ranges' in this.props) || !this.props.ranges) {
            return null;
        }

        const ranges = normalizeRanges(this.props.ranges);

        return ranges.map(({ label, value, ...rest }, index) => {
            const buttonProps = pickProps(rest, Button.propTypes);

            return (
                <Button
                    text={ranges.length === 1}
                    size="small"
                    type={ranges.length === 1 ? 'primary' : 'secondary'}
                    key={`${label}-${index}`}
                    onClick={() =>
                        func.call(this.props, 'onChange', [typeof value === 'function' ? value() : value, true, true])
                    }
                    {...buttonProps}
                >
                    {label}
                </Button>
            );
        });
    };

    render() {
        const { prefixCls } = this;
        const { showOk, locale, onOk, oKable, extraRender, footerRender } = this.props;

        const classNames = classnames(prefixCls, {
            [`${prefixCls}-with-actions`]: showOk,
        });

        const footerNode = renderNode(footerRender);
        const extraNode = renderNode(extraRender, null);

        const rangesCls = classnames(`${prefixCls}-ranges`, {
            [`${prefixCls}-ranges-only`]: !showOk && !extraNode,
        });

        return (
            <div className={classNames}>
                {footerNode ? (
                    footerNode
                ) : (
                    <React.Fragment>
                        {extraNode ? <div className={`${prefixCls}-extra`}>{extraNode}</div> : null}
                        <div className={rangesCls}>{this.renderRanges()}</div>
                        {showOk ? (
                            <div className={`${prefixCls}-actions`}>
                                <Button size="small" disabled={!oKable} onClick={onOk} type="primary">
                                    {locale.ok}
                                </Button>
                            </div>
                        ) : null}
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export default polyfill(FooterPanel);
