import React, { Component, type KeyboardEvent, type MouseEvent } from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { obj, func } from '../util';
import Tag from './tag';
import type { SelectableProps } from './types';

const { noop, bindCtx } = func;

interface SelectableState {
    checked: boolean | undefined;
}

class Selectable extends Component<SelectableProps, SelectableState> {
    static defaultProps: Partial<SelectableProps> = {
        onChange: noop,
    };

    static getDerivedStateFromProps(props: SelectableProps, state: SelectableState) {
        if (props.checked !== undefined && props.checked !== state.checked) {
            return {
                checked: props.checked,
            };
        }

        return null;
    }

    constructor(props: SelectableProps) {
        super(props);

        this.state = {
            checked: 'checked' in props ? props.checked : props.defaultChecked || false,
        };

        bindCtx(this, ['handleClick']);
    }

    handleClick(e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) {
        e && e.preventDefault();
        // IE9 不支持 pointer-events，还是可能会触发 click 事件
        if (this.props.disabled) {
            return false;
        }

        const { checked } = this.state;

        this.setState({
            checked: !checked,
        });

        this.props.onChange!(!checked, e);
    }

    render() {
        const attrFilterTarget = [
            'checked',
            'defaultChecked',
            'onChange',
            'className',
            // 防止这些额外的参数影响 tag 的类型
            '_shape',
            'closable',
        ];

        const others = obj.pickOthers(attrFilterTarget, this.props);
        const isChecked = 'checked' in this.props ? this.props.checked : this.state.checked;
        const clazz = classNames(this.props.className, {
            checked: isChecked,
        });
        return (
            <Tag
                {...others}
                role="checkbox"
                _shape="checkable"
                aria-checked={isChecked}
                className={clazz}
                onClick={this.handleClick}
            />
        );
    }
}

export default polyfill(Selectable);
