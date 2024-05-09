import React, {
    Component,
    isValidElement,
    type HTMLAttributes,
    type KeyboardEvent,
    type MouseEvent,
    type ReactElement,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../../icon';
import { func, obj, KEYCODE, type ClassPropsWithDefault } from '../../util';
import Item from './item';
import type { ChildItemPropsInMenu, ItemProps } from '../types';

const { bindCtx } = func;
const { pickOthers } = obj;

export type ItemWithDefaultsProps = ClassPropsWithDefault<
    ItemProps,
    typeof SelectableItem.defaultProps
>;

export type ItemInMenuProps = ChildItemPropsInMenu<ItemWithDefaultsProps>;

export default class SelectableItem extends Component<ItemProps> {
    static menuChildType = 'item';

    static propTypes = {
        _key: PropTypes.string,
        root: PropTypes.object,
        selected: PropTypes.bool,
        onSelect: PropTypes.func,
        inlineIndent: PropTypes.number,
        disabled: PropTypes.bool,
        helper: PropTypes.node,
        children: PropTypes.node,
        className: PropTypes.string,
        onKeyDown: PropTypes.func,
        onClick: PropTypes.func,
        needIndent: PropTypes.bool,
        hasSelectedIcon: PropTypes.bool,
        isSelectIconRight: PropTypes.bool,
        icons: PropTypes.object,
    };

    static defaultProps = {
        disabled: false,
        needIndent: true,
        icons: {},
    };

    readonly props: ItemWithDefaultsProps;

    constructor(props: ItemProps) {
        super(props);

        bindCtx(this, ['handleKeyDown', 'handleClick']);
    }

    getSelected() {
        const { _key, root, selected } = this.props as ItemInMenuProps;
        const { selectMode } = root.props;
        const { selectedKeys } = root.state;
        return selected || (!!selectMode && selectedKeys.indexOf(_key) > -1);
    }

    handleSelect(e: MouseEvent | KeyboardEvent) {
        const { _key, root, onSelect } = this.props as ItemInMenuProps;
        if (onSelect) {
            onSelect(!this.getSelected(), this, e);
        } else {
            root.handleSelect(_key, !this.getSelected(), this);
        }
    }

    handleKeyDown(e: KeyboardEvent) {
        if (e.keyCode === KEYCODE.SPACE && !this.props.disabled) {
            this.handleSelect(e);
        }

        this.props.onKeyDown && this.props.onKeyDown(e);
    }

    handleClick(e: MouseEvent) {
        this.handleSelect(e);

        this.props.onClick && this.props.onClick(e);
    }

    renderSelectedIcon(selected: boolean) {
        const { root, inlineIndent, needIndent, hasSelectedIcon, isSelectIconRight, type } = this
            .props as ItemInMenuProps;
        const {
            prefix,
            hasSelectedIcon: rootSelectedIcon,
            isSelectIconRight: rootSelectIconRight,
            icons,
        } = root.props;

        let iconsSelect = icons.select as ReactElement;

        if (!isValidElement(icons.select) && icons.select) {
            iconsSelect = <span>{icons.select}</span>;
        }

        const cls = cx({
            [`${prefix}menu-icon-selected`]: true,
            [`${prefix}menu-symbol-icon-selected`]: !iconsSelect,
            [`${prefix}menu-icon-right`]:
                ('isSelectIconRight' in this.props ? isSelectIconRight : rootSelectIconRight) &&
                type !== 'submenu',
        });

        return ('hasSelectedIcon' in this.props ? hasSelectedIcon : rootSelectedIcon) && selected
            ? React.cloneElement(iconsSelect || <Icon type="select" />, {
                  // @ts-expect-error FIXME: inlineIndent 可能为 undefined，此时表达式恒为 false，这里需要明确这个逻辑
                  style: needIndent && inlineIndent > 0 ? { left: `${inlineIndent}px` } : null,
                  className: cls,
              })
            : null;
    }

    render() {
        const { _key, root, className, disabled, helper, children, needIndent } = this
            .props as ItemInMenuProps;
        const { prefix } = root.props;
        const others = pickOthers(SelectableItem.propTypes, this.props);
        const selected = this.getSelected();

        const newProps: Partial<ItemProps> = {
            _key,
            root,
            disabled,
            type: 'item',
            className: cx(
                {
                    [`${prefix}selected`]: selected,
                },
                className
            ),
            onKeyDown: this.handleKeyDown,
            onClick: !disabled ? this.handleClick : this.props.onClick,
            needIndent,
            ...others,
        };

        if (!('title' in newProps) && typeof children === 'string') {
            newProps.title = children;
        }

        const textProps: HTMLAttributes<HTMLSpanElement> = {};

        if ('selectMode' in root.props) {
            textProps['aria-selected'] = selected;
        }

        return (
            <Item {...newProps}>
                {this.renderSelectedIcon(selected)}
                <span className={`${prefix}menu-item-text`} {...textProps}>
                    {children}
                </span>
                {helper ? <div className={`${prefix}menu-item-helper`}>{helper}</div> : null}
            </Item>
        );
    }
}
