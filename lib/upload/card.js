'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _zhCn = require('../locale/zh-cn.js');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _upload = require('./upload');

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Upload.Card
 * @description 继承 Upload 的 API，除非特别说明
 */
var Card = (_temp = _class = function (_Base) {
    (0, _inherits3.default)(Card, _Base);

    function Card(props) {
        (0, _classCallCheck3.default)(this, Card);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Base.call(this, props));

        _initialiseProps.call(_this);

        var value = void 0;
        /* istanbul ignore else */
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        _this.state = {
            value: typeof value === 'undefined' ? [] : value,
            uploaderRef: _this.uploaderRef
        };
        return _this;
    }
    /* eslint react/no-did-mount-set-state: [0] */


    Card.prototype.componentDidMount = function componentDidMount() {
        this.setState({ uploaderRef: this.uploaderRef });
    };

    Card.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if ('value' in nextProps && nextProps.value !== prevState.value) {
            return {
                value: typeof nextProps.value === 'undefined' ? [] : [].concat(nextProps.value)
            };
        }

        return null;
    };

    Card.prototype.isUploading = function isUploading() {
        return this.state.uploaderRef.isUploading();
    };

    Card.prototype.saveRef = function saveRef(ref) {
        this.saveUploaderRef(ref);
    };

    Card.prototype.render = function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            action = _props.action,
            disabled = _props.disabled,
            prefix = _props.prefix,
            locale = _props.locale,
            className = _props.className,
            style = _props.style,
            limit = _props.limit,
            onPreview = _props.onPreview,
            onRemove = _props.onRemove,
            onCancel = _props.onCancel,
            timeout = _props.timeout;


        var isExceedLimit = this.state.value.length >= limit;
        var uploadButtonCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'upload-list-item'] = true, _classNames[prefix + 'hidden'] = isExceedLimit, _classNames));

        var children = this.props.children || locale.card.addPhoto;

        var onRemoveFunc = disabled ? _util.func.prevent : onRemove;
        var othersForList = _util.obj.pickOthers(Card.propTypes, this.props);
        var othersForUpload = _util.obj.pickOthers(_list2.default.propTypes, othersForList);
        return _react2.default.createElement(
            _list2.default,
            (0, _extends3.default)({
                className: className,
                style: style,
                listType: 'card',
                closable: true,
                locale: locale,
                value: this.state.value,
                onRemove: onRemoveFunc,
                onCancel: onCancel,
                onPreview: onPreview,
                uploader: this.state.uploaderRef
            }, othersForList),
            _react2.default.createElement(
                _upload2.default,
                (0, _extends3.default)({}, othersForUpload, {
                    shape: 'card',
                    disabled: disabled,
                    action: action,
                    timeout: timeout,
                    value: this.state.value,
                    onProgress: this.onProgress,
                    onChange: this.onChange,
                    ref: function ref(_ref) {
                        return _this2.saveRef(_ref);
                    },
                    className: uploadButtonCls
                }),
                children
            )
        );
    };

    return Card;
}(_base2.default), _class.displayName = 'Card', _class.propTypes = {
    prefix: _propTypes2.default.string,
    locale: _propTypes2.default.object,
    children: _propTypes2.default.object,
    value: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    /**
     * 点击图片回调
     */
    onPreview: _propTypes2.default.func,
    /**
     * 改变时候的回调
     */
    onChange: _propTypes2.default.func,
    /**
     * 点击移除的回调
     */
    onRemove: _propTypes2.default.func,
    /**
     * 取消上传的回调
     */
    onCancel: _propTypes2.default.func
}, _class.defaultProps = {
    prefix: 'next-',
    locale: _zhCn2.default.Upload,
    onChange: _util.func.noop,
    onPreview: _util.func.noop
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onProgress = function (value) {
        _this3.setState({
            value: value
        });
    };

    this.onChange = function (value, file) {
        if (!('value' in _this3.props)) {
            _this3.setState({
                value: value
            });
        }
        _this3.props.onChange(value, file);
    };
}, _temp);
exports.default = (0, _reactLifecyclesCompat.polyfill)(Card);
module.exports = exports['default'];