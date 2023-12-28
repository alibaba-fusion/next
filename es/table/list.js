import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
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
    var ListTable = /** @class */ (function (_super) {
        __extends(ListTable, _super);
        function ListTable() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
            _this.state = {};
            return _this;
        }
        ListTable.prototype.getChildContext = function () {
            return {
                listHeader: this.listHeader,
                listFooter: this.listFooter,
                rowSelection: this.rowSelection,
            };
        };
        ListTable.prototype.normalizeDataSource = function (dataSource) {
            var ret = [];
            var loop = function (dataSource, level) {
                dataSource.forEach(function (item) {
                    var itemCopy = __assign({}, item);
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
        ListTable.prototype.render = function () {
            var _a;
            var _this = this;
            /* eslint-disable prefer-const */
            var _b = this.props, components = _b.components, children = _b.children, className = _b.className, prefix = _b.prefix, others = __rest(_b, ["components", "children", "className", "prefix"]);
            var isList = false, ret = [];
            Children.forEach(children, function (child) {
                if (child) {
                    if (['function', 'object'].indexOf(typeof child.type) > -1) {
                        if (child.type._typeMark === 'listHeader') {
                            _this.listHeader = child.props;
                            isList = true;
                        }
                        else if (child.type._typeMark === 'listFooter') {
                            _this.listFooter = child.props;
                        }
                        else {
                            ret.push(child);
                        }
                    }
                    else {
                        ret.push(child);
                    }
                }
            });
            this.rowSelection = this.props.rowSelection;
            if (isList) {
                components = __assign({}, components);
                components.Row = components.Row || RowComponent;
                components.Body = components.Body || BodyComponent;
                components.Header = components.Header || HeaderComponent;
                components.Wrapper = components.Wrapper || WrapperComponent;
                className = classnames((_a = {},
                    _a["".concat(prefix, "table-group")] = true,
                    _a[className] = className,
                    _a));
            }
            return (React.createElement(BaseComponent, __assign({}, others, { components: components, children: ret.length > 0 ? ret : undefined, className: className, prefix: prefix })));
        };
        ListTable.ListHeader = ListHeader;
        ListTable.ListFooter = ListFooter;
        ListTable.ListRow = RowComponent;
        ListTable.ListBody = BodyComponent;
        ListTable.propTypes = __assign({}, BaseComponent.propTypes);
        ListTable.defaultProps = __assign({}, BaseComponent.defaultProps);
        ListTable.childContextTypes = {
            listHeader: PropTypes.any,
            listFooter: PropTypes.any,
            rowSelection: PropTypes.object,
        };
        return ListTable;
    }(React.Component));
    statics(ListTable, BaseComponent);
    return ListTable;
}
