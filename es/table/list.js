import _typeof from 'babel-runtime/helpers/typeof';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ListHeader from './list-header';
import ListFooter from './list-footer';
import RowComponent from './list/row';
import BodyComponent from './list/body';
import HeaderComponent from './fixed/header';
import WrapperComponent from './fixed/wrapper';
import { statics } from './util';

export default function list(BaseComponent) {
    var _class, _temp2;

    var ListTable = (_temp2 = _class = function (_React$Component) {
        _inherits(ListTable, _React$Component);

        function ListTable() {
            var _temp, _this, _ret;

            _classCallCheck(this, ListTable);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
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
                    var itemCopy = _extends({}, item);
                    itemCopy.__level = level;
                    ret.push(itemCopy);
                    if (itemCopy.children) {
                        loop(itemCopy.children, level + 1);
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
                others = _objectWithoutProperties(_props, ['components', 'children', 'className', 'prefix']);

            var isList = false,
                ret = [];
            Children.forEach(children, function (child) {
                if (child) {
                    if (['function', 'object'].indexOf(_typeof(child.type)) > -1) {
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

                components = _extends({}, components);
                components.Row = components.Row || RowComponent;
                components.Body = components.Body || BodyComponent;
                components.Header = components.Header || HeaderComponent;
                components.Wrapper = components.Wrapper || WrapperComponent;
                className = classnames((_classnames = {}, _classnames[prefix + 'table-group'] = true, _classnames[className] = className, _classnames));
            }
            return React.createElement(BaseComponent, _extends({}, others, {
                components: components,
                children: ret.length > 0 ? ret : undefined,
                className: className,
                prefix: prefix
            }));
        };

        return ListTable;
    }(React.Component), _class.ListHeader = ListHeader, _class.ListFooter = ListFooter, _class.ListRow = RowComponent, _class.ListBody = BodyComponent, _class.propTypes = _extends({}, BaseComponent.propTypes), _class.defaultProps = _extends({}, BaseComponent.defaultProps), _class.childContextTypes = {
        listHeader: PropTypes.any,
        listFooter: PropTypes.any,
        rowSelection: PropTypes.object
    }, _temp2);
    ListTable.displayName = 'ListTable';

    statics(ListTable, BaseComponent);
    return ListTable;
}