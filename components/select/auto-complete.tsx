import React, { type ChangeEvent, type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';

import { func, obj, KEYCODE } from '../util';
import Input from '../input';
import Base, { type BaseState } from './base';
import type { AutoCompleteProps, ObjectItem, VisibleChangeType } from './types';

const { bindCtx, noop } = func;

export interface AutoCompleteState extends BaseState {
    value: string;
    highlightKey: string;
}

/**
 * Select.AutoComplete
 */
class AutoComplete extends Base<AutoCompleteProps, AutoCompleteState> {
    static propTypes = {
        ...Base.propTypes,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onChange: PropTypes.func,
        dataSource: PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.shape({
                    value: PropTypes.string,
                    label: PropTypes.any,
                    disabled: PropTypes.bool,
                    children: PropTypes.array,
                }),
                PropTypes.string,
            ])
        ),
        fillProps: PropTypes.string,
        itemRender: PropTypes.func,
        onKeyDown: PropTypes.func,
        highlightHolder: PropTypes.bool,
        style: PropTypes.object,
    };

    static defaultProps = {
        ...Base.defaultProps,
        onKeyDown: noop,
        fillProps: 'value',
    };
    isInputing: boolean;

    constructor(props: AutoCompleteProps) {
        super(props);

        this.isAutoComplete = true;
        this.isInputing = false;

        this.dataStore.setOptions({ key: this.state.value });
        Object.assign(this.state, {
            dataSource: this.setDataSource(props),
        });

        bindCtx(this, ['handleTriggerKeyDown', 'handleMenuSelect', 'handleItemClick']);
    }

    static getDerivedStateFromProps(nextProps: AutoCompleteProps, prevState: AutoCompleteState) {
        const state = {};

        if ('value' in nextProps && nextProps.value !== prevState.value) {
            Object.assign(state, {
                value: nextProps.value,
            });
        }

        if ('visible' in nextProps && nextProps.visible !== prevState.visible) {
            Object.assign(state, {
                visible: nextProps.visible,
            });
        }

        if (Object.keys(state).length) {
            return state;
        }

        return null;
    }

    componentDidUpdate(prevProps: AutoCompleteProps) {
        const props = this.props;

        if ('value' in props) {
            this.dataStore.setOptions({ key: props.value });
        }

        if (props.filter !== prevProps.filter) {
            this.dataStore.setOptions({
                filter: props.filter,
            });
        }
        if (props.filterLocal !== prevProps.filterLocal) {
            this.dataStore.setOptions({
                filterLocal: props.filterLocal,
            });
        }

        if (prevProps.children !== props.children || prevProps.dataSource !== props.dataSource) {
            this.setState({
                dataSource: this.setDataSource(props),
            });

            // remote dataSource and focused
            // 因为 autoComplete 没有下拉数据不展示，搜索并且有数据了需要自动展示下拉
            if (!props.filterLocal && this.isInputing) {
                this.shouldControlPopup(props, 'update');
            }
            if (!props.filterLocal && !props.popupContent) {
                this.setFirstHightLightKeyForMenu();
            }
        }
    }

    shouldControlPopup(props = this.props, type: VisibleChangeType) {
        const hasPopup = props.popupContent || this.dataStore.getMenuDS().length;
        if (hasPopup) {
            this.setVisible(true, type);
        } else {
            this.setVisible(false, type);
        }
    }

    handleMenuSelect(keys: string[]) {
        const key = keys[0];

        const mapDS = this.dataStore.getMapDS();

        if (key in mapDS) {
            const item = mapDS[key];
            this.handleSelectEvent(key, item, 'itemClick');
        }
    }

    handleItemClick() {
        this.setVisible(false, 'itemClick');
    }

    handleSelectEvent(key: string, item: ObjectItem, triggerType: VisibleChangeType) {
        const value = ((item && item[this.props.fillProps!]) as string) || key;

        if (triggerType === 'itemClick' || triggerType === 'enter') {
            // 点击 item 的时候不会触发关闭，需要手动关闭，其它类型比如 keyDown 等都会有其它事件句柄处理
            this.setVisible(false, triggerType);
        }

        this.handleChange(value, triggerType, item);
    }

    handleChange = (
        value: string,
        proxy: ChangeEvent<HTMLElement> | VisibleChangeType,
        item?: ObjectItem
    ) => {
        const { disabled, readOnly, filterLocal } = this.props;

        if (disabled || readOnly) {
            return false;
        }

        const actionType = typeof proxy === 'string' ? proxy : 'change';

        this.isInputing = actionType === 'change';

        if (filterLocal) {
            this.setState({
                dataSource: this.dataStore.updateByKey(value),
            });

            this.shouldControlPopup(this.props, actionType);
            this.setFirstHightLightKeyForMenu(value);
        }

        // 非受控模式清空内部数据
        if (!('value' in this.props)) {
            this.setState({
                value: value,
            });
        }

        // 不自动高亮的情况下，highlightKey 根据 value 精确值走，也就是被选中元素自动高亮，这样也不会影响不在选项内的用户搜索操作
        if (!this.props.autoHighlightFirstItem) {
            this.setState({
                highlightKey: value,
            });
        }

        this.props.onChange!(value, actionType, item);

        if (actionType === 'itemClick' || actionType === 'enter') {
            // 点击 item 的时候不会触发关闭，需要手动关闭，其它类型比如 keyDown 等都会有其它事件句柄处理
            this.setVisible(false, actionType);
        }
    };

    handleVisibleChange(visible: boolean, type: VisibleChangeType) {
        if (
            !('visible' in this.props) &&
            visible &&
            !this.props.popupContent &&
            !this.dataStore.getMenuDS().length
        ) {
            return;
        }

        this.setVisible(visible, type);
    }

    beforeClose() {
        this.isInputing = false;
    }

    /**
     * Handle trigger keydown event
     */
    handleTriggerKeyDown(e: KeyboardEvent<HTMLElement>) {
        const { popupContent, onToggleHighlightItem, onKeyDown } = this.props;
        if (popupContent) {
            e.stopPropagation(); // stopPropagation can make use onChange trigger while typing space('') in Input
            return onKeyDown!(e);
        }

        switch (e.keyCode) {
            case KEYCODE.UP:
                e.preventDefault();
                onToggleHighlightItem!(this.toggleHighlightItem(-1), 'up');
                break;
            case KEYCODE.DOWN:
                e.preventDefault();
                onToggleHighlightItem!(this.toggleHighlightItem(1), 'down');
                break;
            case KEYCODE.ENTER:
                e.preventDefault();
                this.chooseHighlightItem();
                break;
            case KEYCODE.SPACE:
                // stopPropagation can make use onChange triggerd while typing space('') in Input
                e.stopPropagation();
                break;
            case KEYCODE.ESC:
                e.preventDefault();
                this.state.visible && this.setVisible(false, 'esc');
                break;
            default:
                break;
        }

        onKeyDown!(e);
    }

    // 回车 选择高亮的 item
    chooseHighlightItem() {
        if (!this.state.visible) {
            return false;
        }

        const { highlightKey } = this.state;
        const highlightItem = this.dataStore.getEnableDS().find(item => {
            return highlightKey === `${item.value}`;
        });

        if (highlightItem) {
            this.handleSelectEvent(highlightKey!, highlightItem, 'enter');
        }
    }

    hasClear() {
        const { hasClear, readOnly, disabled } = this.props;
        const { value } = this.state;

        return value && hasClear && !readOnly && !disabled;
    }

    /**
     * 选择器
     * @override
     * @param props -
     */
    renderSelect(props = this.props) {
        const {
            placeholder,
            size,
            prefix,
            className,
            style,
            label,
            readOnly,
            disabled,
            highlightHolder,
            locale,
            hasClear,
            state,
            rtl,
        } = props;
        const others = obj.pickOthers(AutoComplete.propTypes, props);
        const othersData = obj.pickAttrsWith(others, 'data-');

        const value = this.state.value;
        const visible = this.state.visible;

        // // 下拉箭头
        // const arrowNode = this.renderArrowNode(props, () => {
        //     this.focusInput();
        //     this.setVisible(!this.state.visible);
        // });

        // trigger className
        const triggerClazz = classNames(
            [
                `${prefix}select`,
                `${prefix}select-auto-complete`,
                `${prefix}size-${size}`,
                className,
            ],
            {
                [`${prefix}active`]: visible,
                [`${prefix}disabled`]: disabled,
            }
        );

        // highlightKey into placeholder
        // compatible with selectPlaceHolder. TODO: removed in 2.0 version
        let _placeholder =
            placeholder || locale!.autoCompletePlaceholder || locale!.autoCompletePlaceHolder;
        if (highlightHolder && visible) {
            _placeholder = this.state.highlightKey || _placeholder;
        }

        // Input props
        const _inputProps = {
            ...obj.pickOthers(othersData, others),
            state: state,
            ref: this.saveInputRef,
            hasClear: hasClear,
            value,
            size,
            disabled,
            readOnly,
            placeholder: _placeholder,
            label,
            // extra: arrowNode,
            onChange: this.handleChange as (
                value: string,
                e: ChangeEvent<HTMLInputElement>
            ) => void,
            onKeyDown: this.handleTriggerKeyDown,
        };

        return (
            <span
                {...othersData}
                className={triggerClazz}
                style={style}
                dir={rtl ? 'rtl' : undefined}
                ref={this.saveSelectRef}
                onClick={this.focusInput}
            >
                <Input
                    role="combobox"
                    aria-autocomplete="list"
                    aria-disabled={disabled}
                    aria-expanded={this.state.visible ? 'true' : 'false'}
                    {..._inputProps}
                />
                <span className={`${prefix}sr-only`} aria-live="polite">
                    {this.state.srReader}
                </span>
            </span>
        );
    }

    render() {
        if (this.hasClear()) {
            // clear 按钮点击后，会在 dom 结构中被删除掉，需要将其额外设置为安全节点，防止触发弹层的显示或隐藏
            const safeNode = this.props.popupProps!.safeNode || [];
            const safeNodes = Array.isArray(safeNode) ? safeNode : [safeNode];
            //@ts-expect-error 确实没有 clearNode，后续应该做删除处理
            safeNodes.push(() => this.clearNode);
            this.props.popupProps!.safeNode = safeNodes;
        }

        return super.render(Object.assign({}, this.props, { canCloseByTrigger: false }));
    }
}

export default polyfill(AutoComplete);
