import _extends from 'babel-runtime/helpers/extends';
import _typeof from 'babel-runtime/helpers/typeof';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _initialiseProps;

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { obj, env } from '../util';
import Base from './base';

function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    } else {
        window.clearTimeout(nextFrameId);
    }
}

var hiddenStyle = {
    visibility: 'hidden',
    position: 'absolute',
    zIndex: '-1000',
    top: '-1000px',
    overflowY: 'hidden',
    left: 0,
    right: 0
};

/**
 * Input.TextArea
 * @order 2
 */
var TextArea = (_temp = _class = function (_Base) {
    _inherits(TextArea, _Base);

    function TextArea(props) {
        _classCallCheck(this, TextArea);

        var _this = _possibleConstructorReturn(this, _Base.call(this, props));

        _initialiseProps.call(_this);

        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        _this.state = {
            value: typeof value === 'undefined' ? '' : value
        };
        return _this;
    }

    TextArea.prototype.componentDidMount = function componentDidMount() {
        var autoHeight = this.props.autoHeight;
        if (autoHeight) {
            if ((typeof autoHeight === 'undefined' ? 'undefined' : _typeof(autoHeight)) === 'object') {
                /* eslint-disable react/no-did-mount-set-state */
                this.setState(this._getMinMaxHeight(autoHeight, this.state.value));
            } else {
                this.setState({
                    height: this._getHeight(this.state.value),
                    overflowY: 'hidden'
                });
            }
        }
    };

    TextArea.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        _Base.prototype.componentWillReceiveProps.call(this, nextProps);

        if (this.props.autoHeight && this.props.value !== nextProps.value) {
            this._resizeTextArea(nextProps.value);
        }
    };

    TextArea.prototype._getMinMaxHeight = function _getMinMaxHeight(_ref, value) {
        var minRows = _ref.minRows,
            maxRows = _ref.maxRows;

        var node = ReactDOM.findDOMNode(this.helpRef);
        node.setAttribute('rows', minRows);
        var minHeight = node.clientHeight;

        node.setAttribute('rows', maxRows);
        var maxHeight = node.clientHeight;

        node.setAttribute('rows', '1');
        var height = this._getHeight(value);

        return {
            minHeight: minHeight,
            maxHeight: maxHeight,
            height: height,
            overflowY: height <= maxHeight ? 'hidden' : undefined
        };
    };

    TextArea.prototype._getHeight = function _getHeight(value) {
        var node = ReactDOM.findDOMNode(this.helpRef);
        node.value = value;

        return node.scrollHeight;
    };

    TextArea.prototype.ieHack = function ieHack(value) {
        // Fix: textarea dit not support maxLength in ie9
        /* istanbul ignore if */
        if (env.ieVersion && this.props.maxLength && this.props.multiple) {
            var maxLength = parseInt(this.props.maxLength);
            var len = this.getValueLength(value, true);
            if (len > maxLength && this.props.cutString) {
                value = value.replace(/\n/g, '\n\n');
                value = value.substr(0, maxLength);
                value = value.replace(/\n\n/g, '\n');
            }
        }

        this.props.autoHeight && this._resizeTextArea(value);

        return value;
    };

    // `Enter` was considered to be two chars in chrome , but one char in ie.
    // so we make all `Enter` to be two chars


    TextArea.prototype.getValueLength = function getValueLength(value) {
        var nv = '' + value;
        var strLen = this.props.getValueLength(nv);
        if (typeof strLen !== 'number') {
            strLen = nv.length;
        }
        /* istanbul ignore if */
        if (env.ieVersion) {
            return strLen + nv.split('\n').length - 1;
        }
        return strLen;
    };

    TextArea.prototype.saveTextAreaRef = function saveTextAreaRef(textArea) {
        this.inputRef = textArea;
    };

    TextArea.prototype.saveHelpRef = function saveHelpRef(ref) {
        this.helpRef = ref;
    };

    TextArea.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            rows = _props.rows,
            style = _props.style,
            className = _props.className,
            autoHeight = _props.autoHeight,
            prefix = _props.prefix,
            rtl = _props.rtl,
            hasBorder = _props.hasBorder;


        var cls = classNames(this.getClass(), (_classNames = {}, _classNames[prefix + 'input-textarea'] = true, _classNames[prefix + 'noborder'] = !hasBorder, _classNames[className] = !!className, _classNames));

        var props = this.getProps();
        // custom data attributes are assigned to the top parent node
        // data-类自定义数据属性分配到顶层node节点
        var dataProps = obj.pickAttrsWith(this.props, 'data-');
        // Custom props are transparently transmitted to the core input node by default
        // 自定义属性默认透传到核心node节点：input
        var others = obj.pickOthers(_extends({}, dataProps, TextArea.propTypes), this.props);

        var textareStyle = _extends({}, props.style, {
            height: this.state.height,
            minHeight: this.state.minHeight,
            maxHeight: this.state.maxHeight,
            overflowY: this.state.overflowY
        });

        var wrapStyle = autoHeight ? _extends({}, style, {
            position: 'relative'
        }) : style;

        return React.createElement(
            'span',
            _extends({
                className: cls,
                style: wrapStyle,
                dir: rtl ? 'rtl' : undefined
            }, dataProps),
            React.createElement('textarea', _extends({}, others, props, {
                'data-real': true,
                rows: rows,
                style: textareStyle,
                ref: this.saveRef.bind(this),
                onKeyDown: this.onKeyDown.bind(this)
            })),
            autoHeight ? React.createElement('textarea', {
                'data-fake': true,
                ref: this.saveHelpRef.bind(this),
                style: _extends({}, props.style, hiddenStyle),
                rows: '1'
            }) : null,
            this.renderControl()
        );
    };

    return TextArea;
}(Base), _class.propTypes = _extends({}, Base.propTypes, {
    /**
     * 是否有边框
     */
    hasBorder: PropTypes.bool,
    /**
     * 状态
     * @enumdesc 错误
     */
    state: PropTypes.oneOf(['error']),
    /**
     * 自动高度 true / {minRows: 2, maxRows: 4}
     */
    autoHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    /**
     * 多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)
     */
    rows: PropTypes.number
}), _class.defaultProps = _extends({}, Base.defaultProps, {
    hasBorder: true,
    rows: 4,
    autoHeight: false
}), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this._resizeTextArea = function (value) {
        if (_this2.nextFrameActionId) {
            clearNextFrameAction(_this2.nextFrameActionId);
        }
        _this2.nextFrameActionId = onNextFrame(function () {
            var height = _this2._getHeight(value);
            var maxHeight = _this2.state.maxHeight ? _this2.state.maxHeight : Infinity;

            _this2.setState({
                height: _this2._getHeight(value),
                overflowY: height <= maxHeight ? 'hidden' : undefined
            });
        });
    };
}, _temp);
export { TextArea as default };