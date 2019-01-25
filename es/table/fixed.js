import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { dom } from '../util';
import HeaderComponent from './fixed/header';
import BodyComponent from './fixed/body';
import WrapperComponent from './fixed/wrapper';
import { statics } from './util';

export default function fixed(BaseComponent) {
    var _class, _temp2;

    /** Table */
    var FixedTable = (_temp2 = _class = function (_React$Component) {
        _inherits(FixedTable, _React$Component);

        function FixedTable() {
            var _temp, _this, _ret;

            _classCallCheck(this, FixedTable);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getNode = function (type, node, lockType) {
                lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : '';
                _this['' + type + lockType + 'Node'] = node;
                if (type === 'header' && !lockType) {
                    _this.innerHeaderNode = _this.headerNode.querySelector('div');
                }
            }, _this.onBodyScroll = function () {
                _this.scrollTo(_this.bodyNode.scrollLeft, _this.bodyNode.scrollTop);
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        FixedTable.prototype.getChildContext = function getChildContext() {
            return {
                fixedHeader: this.props.fixedHeader,
                maxBodyHeight: this.props.maxBodyHeight,
                onBodyScroll: this.onBodyScroll,
                getNode: this.getNode
            };
        };

        FixedTable.prototype.componentDidMount = function componentDidMount() {
            this.adjustFixedHeaderSize();
        };

        FixedTable.prototype.componentDidUpdate = function componentDidUpdate() {
            this.adjustFixedHeaderSize();
        };

        FixedTable.prototype.adjustFixedHeaderSize = function adjustFixedHeaderSize() {
            var _props = this.props,
                hasHeader = _props.hasHeader,
                fixedHeader = _props.fixedHeader,
                maxBodyHeight = _props.maxBodyHeight;

            if (hasHeader && fixedHeader && !this.props.lockType) {
                if (this.bodyNode.scrollHeight <= maxBodyHeight) {
                    dom.setStyle(this.headerNode, 'paddingRight', 0);
                } else {
                    dom.setStyle(this.headerNode, 'paddingRight', dom.scrollbar().width);
                }
            }
        };

        FixedTable.prototype.scrollTo = function scrollTo(x) {
            if (this.innerHeaderNode) {
                this.innerHeaderNode.scrollLeft = x;
            }
        };

        FixedTable.prototype.render = function render() {
            /* eslint-disable no-unused-vars, prefer-const */
            var _props2 = this.props,
                components = _props2.components,
                className = _props2.className,
                prefix = _props2.prefix,
                fixedHeader = _props2.fixedHeader,
                maxBodyHeight = _props2.maxBodyHeight,
                others = _objectWithoutProperties(_props2, ['components', 'className', 'prefix', 'fixedHeader', 'maxBodyHeight']);

            if (fixedHeader) {
                var _classnames;

                components = _extends({}, components);
                if (!components.Header) {
                    components.Header = HeaderComponent;
                }
                if (!components.Body) {
                    components.Body = BodyComponent;
                }
                if (!components.Wrapper) {
                    components.Wrapper = WrapperComponent;
                }
                className = classnames((_classnames = {}, _classnames[prefix + 'table-fixed'] = true, _classnames[className] = className, _classnames));
            }
            return React.createElement(BaseComponent, _extends({}, others, { components: components, className: className, prefix: prefix }));
        };

        return FixedTable;
    }(React.Component), _class.FixedHeader = HeaderComponent, _class.FixedBody = BodyComponent, _class.FixedWrapper = WrapperComponent, _class.propTypes = _extends({
        /**
          * 是否具有表头
          */
        hasHeader: PropTypes.bool,
        /**
          * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
          */
        fixedHeader: PropTypes.bool,
        /**
         * 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条
         */
        maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }, BaseComponent.propTypes), _class.defaultProps = _extends({}, BaseComponent.defaultProps, {
        hasHeader: true,
        fixedHeader: false,
        maxBodyHeight: 200,
        components: {},
        refs: {},
        prefix: 'next-'
    }), _class.childContextTypes = {
        fixedHeader: PropTypes.bool,
        maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        onBodyScroll: PropTypes.func,
        getNode: PropTypes.func
    }, _temp2);
    FixedTable.displayName = 'FixedTable';

    statics(FixedTable, BaseComponent);
    return FixedTable;
}