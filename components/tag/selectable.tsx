import * as React from 'react';
import * as cn from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { obj, func } from '../util';
import Tag from './tag';
import { SelectableProps, SelectableState } from './types';

const { noop, bindCtx } = func;

/**
 * Tag.Selectable
 */
class Selectable extends React.Component<SelectableProps, SelectableState> {
    static defaultProps: Partial<SelectableProps> = {
        onChange: noop,
    };

    constructor(props: SelectableProps) {
        super(props);
        const { checked, defaultChecked } = props;
        // 如果checked属性传递了，就使用checked的值，否则使用defaultChecked的值，如果defaultChecked也没提供，那么默认为false。
        const isChecked = checked ?? defaultChecked ?? false;
        this.state = {
            checked: isChecked,
        };
        bindCtx(this, ['handleClick']);
    }

    static getDerivedStateFromProps(
        nextProps: SelectableProps,
        prevState: SelectableState
    ): SelectableState | null {
        if (nextProps.checked !== undefined && nextProps.checked !== prevState.checked) {
            return {
                checked: nextProps.checked,
            };
        }
        return null;
    }

    handleClick(e: React.MouseEvent<HTMLDivElement>) {
        e?.preventDefault();
        // IE9 不支持 pointer-events，还是可能会触发 click 事件
        if (this.props.disabled) {
            return false;
        }

        const { checked } = this.state;

        this.setState({
            checked: !checked,
        });

        this.props.onChange?.(!checked, e);
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
        const clazz = cn(this.props.className, {
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

const polyfilledSelectable = polyfill(Selectable);
export { polyfilledSelectable as Selectable };
