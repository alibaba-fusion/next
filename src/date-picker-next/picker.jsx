import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import SharedPT from './shared-prop-types';

import { func, datejs } from '../util';
import { getFromPropOrState, isFunction } from './util';

import { DATE_PICKER_TYPE, DATE_INPUT_TYPE } from './constant';
import { CALENDAR_MODE } from '../calendar-next/constant';
import { Popup } from '../overlay';
import DateInput from './panels/date-input';
import DatePanel from './panels/date-panel';
import RangePanel from './panels/range-panel';
import FooterPanel from './panels/footer-panel';

const { bindCtx } = func;

function isEqual(v1, v2) {
    const _equal = (a, b) => a === b || datejs(a).valueOf() === datejs(b).valueOf();

    if (Array.isArray(v1)) {
        return Array.isArray(v2) && v1.every((v, index) => _equal(v, v2[index]));
    } else {
        return _equal(v1, v2);
    }
}

class Picker extends React.Component {
    static propTypes = {
        value: SharedPT.value,
        mode: PT.any,
        defaultValue: SharedPT.value,
        type: SharedPT.type,
        isRange: PT.bool,
        format: PT.oneOfType([PT.string, PT.func]),
        inputReadOnly: PT.bool,
        visible: PT.bool,
        trigger: PT.oneOfType([PT.func, PT.object]),
        showTime: PT.bool,
        showOk: PT.bool,
    };

    static defaultProps = {
        inputReadOnly: false,
        type: DATE_PICKER_TYPE.DATE,
        format: 'YYYY-MM-DD',
        showTime: false,
        mode: CALENDAR_MODE.DATE,
    };

    constructor(props) {
        super(props);

        const value = this.checkAndRectify(
            'value' in props
                ? props.value
                : 'defaultValue' in props
                ? props.defaultValue
                : props.type === DATE_PICKER_TYPE.RANGE
                ? [null, null]
                : null
        );

        this.state = {
            type: props.type,
            value,
            visible: false,
            inputValue: this.getInputValue(value),
            inputType: null,
            hasChangedInputType: false,
        };

        bindCtx(this, [
            'getInputValue',
            'handleMouseDown',
            'handleVisibleChange',
            'handleInputFocus',
            'onOk',
            'onChange',
            'onClick',
            'onDateInput',
            'onInputTypeChange',
            'handleChange',
            'onVisibleChange',
            'renderNode',
        ]);

        this.getFromPropOrState = getFromPropOrState.bind(this);
    }

    static getDerivedStateFromProps(props) {
        return {
            isRange: props.type === DATE_PICKER_TYPE.RANGE,
            showOk: props.showOk || props.showTime,
        };
    }

    // ---------------> utils

    /**
     * 校验日期数据，范围选择模式下为数组，校验通过的时候返回备选值，注意，备选值也需要进行校验，如果还校验失败则返回null值
     * 日期值可以是：
     *  时间戳：1605263461196
     *  日期字符串：2020-11-11
     *  日期对象：moment、dayjs或Date对象
     * @param {*} value
     * @return 返回moment或dayjs对象，范围选择模式下，返回moment或dayjs对象的长度为2的数组
     */
    checkAndRectify(value) {
        const check = value => {
            // moment(undefined) === moment()
            // 这里期望的是一个空值
            if (value === undefined) {
                value = null;
            }
            value = datejs(value);

            return value.isValid() ? value : null;
        };

        if (this.props.type === DATE_PICKER_TYPE.RANGE) {
            if (!Array.isArray(value)) {
                console.warn('无效数据格式，range模式下必须是数组: ', value);
                return [null, null];
            }
            return [0, 1].map(i => check(value[i]));
        } else {
            return check(value);
        }
    }

    // 返回日期字符串
    getInputValue(value) {
        return Array.isArray(value) ? value.map(v => this.formater(v)) : this.formater(value);
    }

    formater(v) {
        const { format } = this.props;
        return v ? (isFunction(format) ? format(v) : v.format(format)) : '';
    }

    // ---------------> event handle

    // 判断弹层是否显示
    handleVisibleChange(visible, type) {
        // 点击非组件内
        if (type === 'docClick') {
            this.onVisibleChange(visible);
            // if (visible === false) {
            //     const input = this.dateInput && this.dateInput.input;
            //     input.blur();
            // }
        }
    }

    handleInputFocus(inputType) {
        let input;
        inputType = inputType !== undefined ? inputType : this.state.inputType;

        if (this.dateInput && (input = this.dateInput.input)) {
            if (this.state.isRange) {
                input = input[inputType];
            }

            input && input.focus();
        }
    }

    handleMouseDown(e) {
        e.preventDefault();
    }

    onVisibleChange(visible) {
        if (visible !== this.state.visible) {
            this.setState({
                visible,
                hasChangedInputType: false,
            });
            func.call(this.props, 'onVisibleChange', visible);
        }
    }

    onDateInput(v) {
        this.setState({
            inputValue: v,
        });
    }

    /*
     * 处理日期Change
     * - 数据检验纠正
     * - 判断触发onChange事件
     */
    handleChange(v) {
        const { value, showOk, isRange, hasChangedInputType, inputType } = this.state;
        const { BEGIN, END } = DATE_INPUT_TYPE;

        v = this.checkAndRectify(v, value);

        this.setState({
            value: v,
            inputValue: this.getInputValue(v),
        });

        if (isRange && !hasChangedInputType) {
            this.handleInputFocus(inputType === BEGIN ? END : BEGIN);
        } else if (!showOk) {
            this.onChange(v);
        }
    }

    onChange(v) {
        func.call(this.props, 'onChagne', [v]);
        this.onVisibleChange(false);
    }

    onOk() {
        const { value } = this.state;
        const result = func.call(this.props, 'onOk', [value]);

        if (result !== false) {
            this.onChange(value);
        }
    }

    onInputTypeChange(v) {
        if (v !== this.state.inputType) {
            const hasChangedInputType = this.state.inputType !== null && true;

            this.setState({
                inputType: v,
                hasChangedInputType,
            });
        }
    }

    onClick() {
        this.state.visible ||
            this.setState({
                visible: true,
            });
    }

    // ---------------> render

    renderNode(name, defaultRender) {
        let node = defaultRender;

        if (name in this.props) {
            node = this.props[name];
        }

        if (isFunction(node)) {
            node = node.call(this, this.state);
        }
        return node;
    }

    render() {
        const {
            checkAndRectify,
            getInputValue,
            handleChange,
            handleVisibleChange,
            handleMouseDown,
            onDateInput,
            onInputTypeChange,
            renderNode,
        } = this;
        const { props, state, onClick, onOk } = this;
        const { inputReadOnly, showTime, preset, mode } = props;
        const { isRange, inputType } = state;

        const visible = this.getFromPropOrState('visible');

        let { inputValue, value } = state;

        // value受控模式
        if ('value' in props) {
            value = checkAndRectify(props.value);
            inputValue = getInputValue(value);
        }

        // 渲染触发层
        const triggerNode = renderNode(
            'trigger',
            <DateInput
                isRange={isRange}
                value={inputValue}
                inputType={inputType}
                readOnly={inputReadOnly}
                onChange={handleChange}
                onInput={onDateInput}
                onClick={onClick}
                ref={el => (this.dateInput = el)}
                onInputTypeChange={onInputTypeChange}
            />
        );

        // 渲染弹出层
        const sharedDateProps = {
            value,
            showTime,
            mode,
            onChange: handleChange,
        };
        const DateNode = this.state.isRange
            ? renderNode('dateNode', <RangePanel inputType={inputType} {...sharedDateProps} />)
            : renderNode('rangeNode', <DatePanel {...sharedDateProps} />);

        // 底部
        const footerNode = renderNode(
            'footer',
            <FooterPanel onOk={onOk} onChange={handleChange} preset={preset} />
        );

        return (
            <Popup
                key="date-picker-popup"
                visible={visible}
                triggerType="click"
                onVisibleChange={handleVisibleChange}
                trigger={triggerNode}
                shouldVisable
            >
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <div
                    onMouseDown={handleMouseDown}
                    style={{ resize: 'both', overflow: 'auto', width: '600px' }}
                >
                    {DateNode}
                    {footerNode}
                </div>
            </Popup>
        );
    }
}

export default polyfill(Picker);
