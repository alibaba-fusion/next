"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
/**
 * Table.Column
 * @order 0
 **/
var Column = /** @class */ (function (_super) {
    tslib_1.__extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.prototype.render = function () {
        return null;
    };
    Column.propTypes = {
        /**
         * 指定列对应的字段，支持`a.b`形式的快速取值
         */
        dataIndex: prop_types_1.default.string,
        /**
         * 行渲染的逻辑
         * value, rowIndex, record, context四个属性只可读不可被更改
         * Function(value, index, record) => Element
         */
        cell: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.node, prop_types_1.default.func]),
        /**
         * 表头显示的内容
         */
        title: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.node, prop_types_1.default.func]),
        /**
         * 写到 header 单元格上的title属性
         */
        htmlTitle: prop_types_1.default.string,
        /**
         * 是否支持排序
         */
        sortable: prop_types_1.default.bool,
        /**
         * 排序的方向。
         * 设置 ['desc', 'asc']，表示降序、升序
         * 设置 ['desc', 'asc', 'default']，表示表示降序、升序、不排序
         * @version 1.23
         */
        sortDirections: prop_types_1.default.arrayOf(prop_types_1.default.oneOf(['desc', 'asc', 'default'])),
        /**
         * 列宽，注意在锁列的情况下一定需要配置宽度
         */
        width: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        /**
         * 单元格的对齐方式
         */
        align: prop_types_1.default.oneOf(['left', 'center', 'right']),
        /**
         * 单元格标题的对齐方式, 不配置默认读取align值
         */
        alignHeader: prop_types_1.default.oneOf(['left', 'center', 'right']),
        /**
         * 生成标题过滤的菜单, 格式为`[{label:'xxx', value:'xxx'}]`
         */
        filters: prop_types_1.default.arrayOf(prop_types_1.default.shape({
            label: prop_types_1.default.string,
            value: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
        })),
        /**
         * 过滤的模式是单选还是多选
         */
        filterMode: prop_types_1.default.oneOf(['single', 'multiple']),
        /**
         * filter 模式下传递给 Menu 菜单的属性， 默认继承 `Menu` 组件的API
         * @property {Boolean} subMenuSelectable 默认为`false` subMenu是否可选择
         * @property {Boolean} isSelectIconRight 默认为`false` 是否将选中图标居右。注意：SubMenu 上的选中图标一直居左，不受此API控制
         */
        filterMenuProps: prop_types_1.default.object,
        filterProps: prop_types_1.default.object,
        /**
         * 是否支持锁列,可选值为`left`,`right`, `true`
         */
        lock: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.string]),
        /**
         * 是否支持列宽调整, 当该值设为true，table的布局方式会修改为fixed.
         */
        resizable: prop_types_1.default.bool,
        /**
         * （推荐使用）是否支持异步列宽调整, 当该值设为true，table的布局方式会修改为fixed.
         * @version 1.24
         */
        asyncResizable: prop_types_1.default.bool,
        /**
         * header cell 横跨的格数，设置为0表示不出现此 th
         */
        colSpan: prop_types_1.default.number,
        /**
         * 设置该列单元格的word-break样式，对于id类、中文类适合用all，对于英文句子适合用word
         * @enumdesc all, word
         * @default all
         * @version 1.23
         */
        wordBreak: prop_types_1.default.oneOf(['all', 'word']),
    };
    Column.contextTypes = {
        parent: prop_types_1.default.any,
    };
    Column.defaultProps = {
        cell: function (value) { return value; },
        filterMode: 'multiple',
        filterMenuProps: {
            subMenuSelectable: false,
        },
        filterProps: {},
        resizable: false,
        asyncResizable: false,
    };
    Column._typeMark = 'column';
    return Column;
}(react_1.default.Component));
exports.default = Column;
