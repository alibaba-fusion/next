import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
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
        className: PT.string,
        prefix: PT.string,
        locale: PT.object,
        showOk: PT.bool,
        preset: PT.oneOfType([PT.array, PT.object]),
        onOk: PT.func,
        oKable: PT.bool,
        extraRender: SharedPT.render,
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

        return preset.map(({ label, value, ...restProps }, index) => {
            const buttonProps = obj.pickProps(Button.propTypes, restProps);

            const handleClick = () => {
                const date = typeof value === 'function' ? value() : value;
                this.props.onChange(date, 'CLICK_PRESET');
            };
            return (
                <Button
                    text={preset.length === 1}
                    size="small"
                    type={preset.length === 1 ? 'primary' : 'secondary'}
                    key={`${label}-${index}`}
                    // onClick={() =>
                    //     func.invoke(this.props, 'onChange', [
                    //         typeof value === 'function' ? value() : value,
                    //         'CLICK_PRESET',
                    //     ])
                    // }
                    onClick={handleClick}
                    {...buttonProps}
                >
                    {label}
                </Button>
            );
        });
    };

    render() {
        const { prefixCls } = this;
        const { showOk, locale, onOk, oKable, extraRender, className } = this.props;

        const classNames = classnames(prefixCls, className, {
            [`${prefixCls}-with-actions`]: showOk,
        });

        const extraNode = renderNode(extraRender);
        const rangeNode = this.renderRanges();
        const actionsNode = (
            <Button size="small" disabled={!oKable} onClick={onOk} className={`${prefixCls}-ok`} type="primary">
                {locale.ok}
            </Button>
        );

        const showFooter = showOk || extraNode || rangeNode;
        const rangesCls = classnames(`${prefixCls}-preset`, {
            [`${prefixCls}-preset-only`]: !showOk && !extraNode,
        });

        return showFooter ? (
            <div className={classNames}>
                {extraNode ? <div className={`${prefixCls}-extra`}>{extraNode}</div> : null}
                {rangeNode ? <div className={rangesCls}>{rangeNode}</div> : null}
                {showOk ? <div className={`${prefixCls}-actions`}>{actionsNode}</div> : null}
            </div>
        ) : null;
    }
}

export default polyfill(FooterPanel);
