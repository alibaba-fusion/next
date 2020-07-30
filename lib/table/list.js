'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = list;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _listHeader = require('./list-header');

var _listHeader2 = _interopRequireDefault(_listHeader);

var _listFooter = require('./list-footer');

var _listFooter2 = _interopRequireDefault(_listFooter);

var _row = require('./list/row');

var _row2 = _interopRequireDefault(_row);

var _body = require('./list/body');

var _body2 = _interopRequireDefault(_body);

var _header = require('./fixed/header');

var _header2 = _interopRequireDefault(_header);

var _wrapper = require('./fixed/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(BaseComponent) {
    var _class, _temp2;

    var ListTable = (_temp2 = _class = function (_React$Component) {
        (0, _inherits3.default)(ListTable, _React$Component);

        function ListTable() {
            var _temp, _this, _ret;

            (0, _classCallCheck3.default)(this, ListTable);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
        }

        ListTable.prototype.getChildContext = function getChildContext() {
            return {
                listHeader: this.listHeader,
                listFooter: this.listFooter,
                rowSelection: this.rowSelection
            };
        };

        ListTable.prototype.normalizeDataSource = function normalizeDataSource(dataSource) {
            var ret = [];
            var loop = function loop(dataSource, level) {
                dataSource.forEach(function (item) {
                    item.__level = level;
                    ret.push(item);
                    if (item.children) {
                        loop(item.children, level + 1);
                    }
                });
            };
            loop(dataSource, 0);
            this.ds = ret;
            return ret;
        };

        ListTable.prototype.render = function render() {
            var _this2 = this;

            /* eslint-disable prefer-const */
            var _props = this.props,
                components = _props.components,
                children = _props.children,
                className = _props.className,
                prefix = _props.prefix,
                others = (0, _objectWithoutProperties3.default)(_props, ['components', 'children', 'className', 'prefix']);

            var isList = false,
                ret = [];
            _react.Children.forEach(children, function (child) {
                if (child) {
                    if (typeof child.type === 'function') {
                        if (child.type._typeMark === 'listHeader') {
                            _this2.listHeader = child.props;
                            isList = true;
                        } else if (child.type._typeMark === 'listFooter') {
                            _this2.listFooter = child.props;
                        } else {
                            ret.push(child);
                        }
                    } else {
                        ret.push(child);
                    }
                }
            });
            this.rowSelection = this.props.rowSelection;
            if (isList) {
                var _classnames;

                components = (0, _extends3.default)({}, components);
                components.Row = components.Row || _row2.default;
                components.Body = components.Body || _body2.default;
                components.Header = components.Header || _header2.default;
                components.Wrapper = components.Wrapper || _wrapper2.default;
                className = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'table-group'] = true, _classnames[className] = className, _classnames));
            }
            return _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, others, {
                components: components,
                children: ret,
                className: className,
                prefix: prefix
            }));
        };

        return ListTable;
    }(_react2.default.Component), _class.ListHeader = _listHeader2.default, _class.ListFooter = _listFooter2.default, _class.ListRow = _row2.default, _class.ListBody = _body2.default, _class.propTypes = (0, _extends3.default)({}, BaseComponent.propTypes), _class.defaultProps = (0, _extends3.default)({}, BaseComponent.defaultProps), _class.childContextTypes = {
        listHeader: _propTypes2.default.any,
        listFooter: _propTypes2.default.any,
        rowSelection: _propTypes2.default.object
    }, _temp2);
    ListTable.displayName = 'ListTable';

    (0, _util.statics)(ListTable, BaseComponent);
    return ListTable;
}
module.exports = exports['default'];