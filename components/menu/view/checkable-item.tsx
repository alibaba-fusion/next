import React, { Component, type ComponentProps, type KeyboardEvent, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../checkbox';
import Radio from '../../radio';
import { func, obj, KEYCODE, htmlId, type ClassPropsWithDefault } from '../../util';
import Item from './item';
import type { CheckableItemProps, ChildItemPropsInMenu } from '../types';

const noop = {};
const { bindCtx } = func;
const { pickOthers } = obj;

export type CheckableItemWithDefaultsProps = ClassPropsWithDefault<
    CheckableItemProps,
    typeof CheckableItem.defaultProps
>;

export type CheckableItemInMenuProps = ChildItemPropsInMenu<CheckableItemWithDefaultsProps>;

export default class CheckableItem extends Component<CheckableItemProps> {
    static propTypes = {
        _key: PropTypes.string,
        root: PropTypes.object,
        disabled: PropTypes.bool,
        inlineIndent: PropTypes.number,
        checked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        onChange: PropTypes.func,
        checkType: PropTypes.oneOf(['checkbox', 'radio']),
        checkDisabled: PropTypes.bool,
        helper: PropTypes.node,
        children: PropTypes.node,
        onKeyDown: PropTypes.func,
        onClick: PropTypes.func,
        id: PropTypes.string,
    };

    static defaultProps = {
        disabled: false,
        checked: false,
        indeterminate: false,
        checkType: 'checkbox',
        checkDisabled: false,
        onChange: noop,
    };

    readonly props: CheckableItemWithDefaultsProps;
    id: string;

    constructor(props: CheckableItemProps) {
        super(props);

        bindCtx(this, ['stopPropagation', 'handleKeyDown', 'handleClick']);
        this.id = htmlId.escapeForId(`checkable-item-${props.id || props._key}`);
    }

    stopPropagation(e: MouseEvent) {
        e.stopPropagation();
    }

    handleCheck(e: MouseEvent | KeyboardEvent) {
        const { checkType, checked, onChange } = this.props;
        if (!(checkType === 'radio' && checked)) {
            onChange(!checked, e);
        }
    }

    handleKeyDown(e: KeyboardEvent) {
        if (e.keyCode === KEYCODE.SPACE && !this.props.checkDisabled) {
            this.handleCheck(e);
        }

        this.props.onKeyDown && this.props.onKeyDown(e);
    }

    handleClick(e: MouseEvent | KeyboardEvent) {
        this.handleCheck(e);

        this.props.onClick && this.props.onClick(e);
    }

    renderCheck() {
        const { root, checked, indeterminate, disabled, checkType, checkDisabled, onChange } = this
            .props as CheckableItemInMenuProps;
        const { labelToggleChecked } = root.props;
        const Check = checkType === 'radio' ? Radio : Checkbox;

        const checkProps: ComponentProps<typeof Check> = {
            tabIndex: -1,
            checked,
            disabled: disabled || checkDisabled,
        };
        if (checkType === 'checkbox') {
            (checkProps as ComponentProps<typeof Checkbox>).indeterminate = indeterminate;
        }
        if (!labelToggleChecked) {
            checkProps.onChange = onChange;
            checkProps.onClick = this.stopPropagation;
        }

        return <Check aria-labelledby={this.id} {...checkProps} />;
    }

    render() {
        const { _key, root, checked, disabled, onClick, helper, children } = this
            .props as CheckableItemInMenuProps;
        const { prefix, labelToggleChecked } = root.props;
        const others = pickOthers(CheckableItem.propTypes, this.props);

        const newProps = {
            _key,
            root,
            disabled,
            type: 'item' as const,
            onClick,
            onKeyDown: this.handleKeyDown,
            ...others,
        };
        if (labelToggleChecked && !disabled) {
            newProps.onClick = this.handleClick;
        }

        let title;
        if (typeof children === 'string') {
            title = children;
        }

        return (
            <Item aria-checked={checked} title={title} {...newProps}>
                {this.renderCheck()}
                <span className={`${prefix}menu-item-text`} id={this.id}>
                    {children}
                </span>
                {helper ? <div className={`${prefix}menu-item-helper`}>{helper}</div> : null}
            </Item>
        );
    }
}
