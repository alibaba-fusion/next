import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';

import SharedPT from '../prop-types';
import { func, obj } from '../../util';
import defaultLocale from '../../locale/zh-cn';

import Button from '../../button';

const { renderNode } = func;

function normalizePreset(preset) {
    if (Array.isArray(preset)) {
        return preset;
    } else {
        return Object.keys(preset).map(key => {
            return {
                label: key,
                value: preset[key],
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
        preset: PT.oneOfType([PT.array, PT.object]),
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
        if (!this.props.preset) {
            return null;
        }

        const preset = normalizePreset(this.props.preset);

        return preset.map(({ label, value, ...rest }, index) => {
            const buttonProps = obj.pickProps(rest, Button);

            return (
                <Button
                    text={preset.length === 1}
                    size="small"
                    type={preset.length === 1 ? 'primary' : 'secondary'}
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
        const { showOk, locale, onOk, oKable, extraRender } = this.props;

        const classNames = classnames(prefixCls, {
            [`${prefixCls}-with-actions`]: showOk,
        });

        const extraNode = renderNode(extraRender);

        const rangesCls = classnames(`${prefixCls}-ranges`, {
            [`${prefixCls}-ranges-only`]: !showOk && !extraNode,
        });

        return (
            <div className={classNames}>
                <React.Fragment>
                    {extraNode ? <div className={`${prefixCls}-extra`}>{extraNode}</div> : null}
                    <div className={rangesCls}>{this.renderRanges()}</div>
                    {showOk ? (
                        <div className={`${prefixCls}-actions`}>
                            <Button
                                size="small"
                                disabled={!oKable}
                                onClick={onOk}
                                className={`${prefixCls}-ok`}
                                type="primary"
                            >
                                {locale.ok}
                            </Button>
                        </div>
                    ) : null}
                </React.Fragment>
            </div>
        );
    }
}

export default polyfill(FooterPanel);
