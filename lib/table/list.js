"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var list_header_1 = require("./list-header");
var list_footer_1 = require("./list-footer");
var row_1 = require("./list/row");
var body_1 = require("./list/body");
var header_1 = require("./fixed/header");
var wrapper_1 = require("./fixed/wrapper");
var util_1 = require("./util");
function list(BaseComponent) {
    var ListTable = /** @class */ (function (_super) {
        tslib_1.__extends(ListTable, _super);
        function ListTable() {
            var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
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
                    var itemCopy = tslib_1.__assign({}, item);
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
            var _b = this.props, components = _b.components, children = _b.children, className = _b.className, prefix = _b.prefix, others = tslib_1.__rest(_b, ["components", "children", "className", "prefix"]);
            var isList = false, ret = [];
            react_1.Children.forEach(children, function (child) {
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
                components = tslib_1.__assign({}, components);
                components.Row = components.Row || row_1.default;
                components.Body = components.Body || body_1.default;
                components.Header = components.Header || header_1.default;
                components.Wrapper = components.Wrapper || wrapper_1.default;
                className = (0, classnames_1.default)((_a = {},
                    _a["".concat(prefix, "table-group")] = true,
                    _a[className] = className,
                    _a));
            }
            return (react_1.default.createElement(BaseComponent, tslib_1.__assign({}, others, { components: components, children: ret.length > 0 ? ret : undefined, className: className, prefix: prefix })));
        };
        ListTable.ListHeader = list_header_1.default;
        ListTable.ListFooter = list_footer_1.default;
        ListTable.ListRow = row_1.default;
        ListTable.ListBody = body_1.default;
        ListTable.propTypes = tslib_1.__assign({}, BaseComponent.propTypes);
        ListTable.defaultProps = tslib_1.__assign({}, BaseComponent.defaultProps);
        ListTable.childContextTypes = {
            listHeader: prop_types_1.default.any,
            listFooter: prop_types_1.default.any,
            rowSelection: prop_types_1.default.object,
        };
        return ListTable;
    }(react_1.default.Component));
    (0, util_1.statics)(ListTable, BaseComponent);
    return ListTable;
}
exports.default = list;
