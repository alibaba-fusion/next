import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { KEYCODE } from '../util';
import ConfigProvider from '../config-provider';

/** Switch*/
class Switch extends React.Component {
    static contextTypes = {
        prefix: PropTypes.string
    }
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        pure: PropTypes.bool,
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * 自定义内敛样式
         */
        style: PropTypes.object,
        /**
         * 打开时的内容
         */
        checkedChildren: PropTypes.any,
        /**
         * 关闭时的内容
         */
        unCheckedChildren: PropTypes.any,
        /**
         * 开关状态改变是触发此事件
         * @param {Boolean} checked 是否为打开状态
         * @param {Event} e DOM事件对象
         */
        onChange: PropTypes.func,
        /**
         * 开关当前的值(针对受控组件)
         */
        checked: PropTypes.bool,
        /**
         * 开关默认值 (针对非受控组件)
         */
        defaultChecked: PropTypes.bool,
        /**
         * 表示开关被禁用
         */
        disabled: PropTypes.bool,
        /**
         * switch的尺寸
         * @enumdesc 正常大小, 缩小版大小
         */
        size: PropTypes.oneOf(['medium', 'small']),
        /**
         * 鼠标点击事件
         * @param {Event} e DOM事件对象
         */
        onClick: PropTypes.func,
        /**
         * 键盘按键事件
         * @param {Event} e DOM事件对象
         */
        onKeyDown: PropTypes.func
    };
    static defaultProps = {
        prefix: 'next-',
        disabled: false,
        size: 'medium',
        onChange: () => {
        }
    };

    constructor(props, context) {
        super(props, context);

        const checked = props.checked || props.defaultChecked;
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.state = {
            checked
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            let checked = nextProps.checked;
            if (checked === undefined) {
                checked = false;
            }
            this.setState({
                checked: checked
            });
        }
    }

    onChange(ev) {
        const checked = !this.state.checked;

        if (!('checked' in this.props)) {
            this.setState({
                checked
            });
        }
        this.props.onChange(checked, ev);
        this.props.onClick && this.props.onClick(ev);
    }

    onKeyDown(e) {
        if (e.keyCode === KEYCODE.ENTER || e.keyCode === KEYCODE.SPACE) {
            this.onChange(e);
        }
        this.props.onKeyDown && this.props.onKeyDown(e);
    }

    render() {
        /* eslint-disable no-unused-vars */
        const {prefix, className, disabled, size, checkedChildren, unCheckedChildren, rtl, ...others } = this.props,
            status = this.state.checked ? 'on' : 'off';
        const children = this.state.checked ? checkedChildren : unCheckedChildren;

        let _size = size;
        if (_size !== 'small' && _size !== 'medium') {
            _size = 'medium';
        }

        const classes = classNames({
            [`${prefix}switch`]: true,
            [`${prefix}switch-${status}`]: true,
            [`${prefix}switch-${_size}`]: true,
            [className]: className
        });
        let attrs;

        if (!disabled) {
            attrs = {
                onClick: this.onChange,
                tabIndex: 0,
                onKeyDown: this.onKeyDown,
                disabled: disabled
            };
        } else {
            attrs = {
                disabled: disabled
            };
        }

        return (
            <div {...others} className={classes} {...attrs} aria-checked={this.state.checked}>
                <div className={`${this.props.prefix}switch-children`}>{children}</div>
            </div>
        );
    }
}

export default ConfigProvider.config(Switch);
