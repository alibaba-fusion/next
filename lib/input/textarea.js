'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('../util');

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

// safari in mac
var isMacSafari = typeof navigator !== 'undefined' && navigator && navigator.userAgent ? navigator.userAgent.match(/^((?!chrome|android|windows).)*safari/i) : false;

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
    (0, _inherits3.default)(TextArea, _Base);

    function TextArea(props) {
        (0, _classCallCheck3.default)(this, TextArea);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Base.call(this, props));

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
            if ((typeof autoHeight === 'undefined' ? 'undefined' : (0, _typeof3.default)(autoHeight)) === 'object') {
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

    TextArea.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (this.props.autoHeight && this.props.value !== prevProps.value) {
            this._resizeTextArea(this.props.value);
        }
    };

    TextArea.prototype._getMinMaxHeight = function _getMinMaxHeight(_ref, value) {
        var minRows = _ref.minRows,
            maxRows = _ref.maxRows;

        var node = _reactDom2.default.findDOMNode(this.helpRef);
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
        var node = _reactDom2.default.findDOMNode(this.helpRef);
        node.value = value;

        return node.scrollHeight;
    };

    TextArea.prototype.ieHack = function ieHack(value) {
        // Fix: textarea dit not support maxLength in ie9
        /* istanbul ignore if */
        if (_util.env.ieVersion === 9 && this.props.maxLength) {
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

    /**
     * value.length !== maxLength  in ie/safari(mac) while value has `Enter`
     * about maxLength compute: `Enter` was considered to be one char(\n) in chrome , but two chars(\r\n) in ie/safari(mac).
     * so while value has `Enter`, we should let display length + 1
     */


    TextArea.prototype.getValueLength = function getValueLength(value) {
        var _props = this.props,
            maxLength = _props.maxLength,
            cutString = _props.cutString;


        var nv = '' + value;
        var strLen = this.props.getValueLength(nv);
        if (typeof strLen !== 'number') {
            strLen = nv.length;
        }

        /* istanbul ignore if */
        if (_util.env.ieVersion || isMacSafari) {
            strLen = strLen + nv.split('\n').length - 1;
            if (strLen > maxLength && cutString) {
                strLen = maxLength;
            }
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
        var _classNames, _classNames2;

        var _props2 = this.props,
            rows = _props2.rows,
            style = _props2.style,
            className = _props2.className,
            autoHeight = _props2.autoHeight,
            isPreview = _props2.isPreview,
            renderPreview = _props2.renderPreview,
            prefix = _props2.prefix,
            rtl = _props2.rtl,
            hasBorder = _props2.hasBorder;


        var cls = (0, _classnames2.default)(this.getClass(), (_classNames = {}, _classNames[prefix + 'input-textarea'] = true, _classNames[prefix + 'noborder'] = !hasBorder, _classNames[className] = !!className, _classNames));

        var props = this.getProps();
        // custom data attributes are assigned to the top parent node
        // data-类自定义数据属性分配到顶层node节点
        var dataProps = _util.obj.pickAttrsWith(this.props, 'data-');
        // Custom props are transparently transmitted to the core input node by default
        // 自定义属性默认透传到核心node节点：input
        var others = _util.obj.pickOthers((0, _extends3.default)({}, dataProps, TextArea.propTypes), this.props);

        var textareStyle = (0, _extends3.default)({}, props.style, {
            height: this.state.height,
            minHeight: this.state.minHeight,
            maxHeight: this.state.maxHeight,
            overflowY: this.state.overflowY
        });

        var previewCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'input-textarea'] = true, _classNames2[prefix + 'form-preview'] = true, _classNames2[className] = !!className, _classNames2));

        var wrapStyle = autoHeight ? (0, _extends3.default)({}, style, { position: 'relative' }) : style;

        if (isPreview) {
            var value = props.value;

            if ('renderPreview' in this.props) {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({}, others, { className: previewCls }),
                    renderPreview(value, this.props)
                );
            }
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: previewCls }),
                value.split('\n').map(function (data, i) {
                    return _react2.default.createElement(
                        'p',
                        { key: 'p-' + i },
                        data
                    );
                })
            );
        }

        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({
                className: cls,
                style: wrapStyle,
                dir: rtl ? 'rtl' : undefined
            }, dataProps),
            _react2.default.createElement('textarea', (0, _extends3.default)({}, others, props, {
                'data-real': true,
                rows: rows,
                style: textareStyle,
                ref: this.saveRef.bind(this),
                onKeyDown: this.onKeyDown.bind(this)
            })),
            autoHeight ? _react2.default.createElement('textarea', {
                'data-fake': true,
                ref: this.saveHelpRef.bind(this),
                style: (0, _extends3.default)({}, props.style, hiddenStyle),
                rows: '1'
            }) : null,
            this.renderControl()
        );
    };

    return TextArea;
}(_base2.default), _class.propTypes = (0, _extends3.default)({}, _base2.default.propTypes, {
    /**
     * 是否有边框
     */
    hasBorder: _propTypes2.default.bool,
    /**
     * 状态
     * @enumdesc 错误
     */
    state: _propTypes2.default.oneOf(['error', 'warning']),
    /**
     * 自动高度 true / {minRows: 2, maxRows: 4}
     */
    autoHeight: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
    /**
     * 多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)
     */
    rows: _propTypes2.default.number,
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: _propTypes2.default.func
}), _class.defaultProps = (0, _extends3.default)({}, _base2.default.defaultProps, {
    hasBorder: true,
    isPreview: false,
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
exports.default = TextArea;
module.exports = exports['default'];