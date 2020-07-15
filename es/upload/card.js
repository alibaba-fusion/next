import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _initialiseProps;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';

import zhCN from '../locale/zh-cn.js';
import { func, obj } from '../util';
import Base from './base';
import List from './list';
import Upload from './upload';

/**
 * Upload.Card
 * @description 继承 Upload 的 API，除非特别说明
 */
var Card = (_temp = _class = function (_Base) {
    _inherits(Card, _Base);

    function Card(props) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, _Base.call(this, props));

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
            timeout = _props.timeout,
            isPreview = _props.isPreview;


        var isExceedLimit = this.state.value.length >= limit;
        var uploadButtonCls = classNames((_classNames = {}, _classNames[prefix + 'upload-list-item'] = true, _classNames[prefix + 'hidden'] = isExceedLimit, _classNames));

        var children = this.props.children || locale.card.addPhoto;

        var onRemoveFunc = disabled ? func.prevent : onRemove;
        var othersForList = obj.pickOthers(Card.propTypes, this.props);
        var othersForUpload = obj.pickOthers(List.propTypes, othersForList);
        return React.createElement(
            List,
            _extends({
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
            React.createElement(
                Upload,
                _extends({}, othersForUpload, {
                    shape: 'card',
                    prefix: prefix,
                    disabled: disabled,
                    action: action,
                    timeout: timeout,
                    isPreview: isPreview,
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
}(Base), _class.displayName = 'Card', _class.propTypes = {
    prefix: PropTypes.string,
    locale: PropTypes.object,
    children: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    /**
     * 点击图片回调
     */
    onPreview: PropTypes.func,
    /**
     * 改变时候的回调
     */
    onChange: PropTypes.func,
    /**
     * 点击移除的回调
     */
    onRemove: PropTypes.func,
    /**
     * 取消上传的回调
     */
    onCancel: PropTypes.func
}, _class.defaultProps = {
    prefix: 'next-',
    locale: zhCN.Upload,
    onChange: func.noop,
    onPreview: func.noop
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


export default polyfill(Card);