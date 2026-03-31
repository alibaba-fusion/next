"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_1 = require("./util");
/**
 * manage dataSource for menu list
 */
var DataStore = /** @class */ (function () {
    function DataStore(options) {
        this.options = tslib_1.__assign({ filter: util_1.filter, key: undefined, addonKey: false, filterLocal: true, showDataSourceChildren: true }, options);
        // origin data
        this.dataSource = [];
        // current data for menu display
        this.menuDataSource = [];
        // key=>value map for menuDataSource
        this.mapDataSource = {};
        // current data can be select (not disabled) on menu
        this.enabledDataSource = [];
        this.flattenDataSource = [];
    }
    DataStore.prototype.setOptions = function (options) {
        Object.assign(this.options, options);
    };
    DataStore.prototype.updateByDS = function (dataSource, isChildren) {
        if (isChildren === void 0) { isChildren = false; }
        this.dataSource = isChildren
            ? (0, util_1.parseDataSourceFromChildren)(dataSource)
            : (0, util_1.normalizeDataSource)(dataSource, 0, this.options.showDataSourceChildren);
        return this.updateAll();
    };
    DataStore.prototype.updateByKey = function (key) {
        if (key === this.options.key) {
            return this.getMenuDS();
        }
        this.options.key = key;
        return this.updateAll();
    };
    DataStore.prototype.getOriginDS = function () {
        return this.dataSource;
    };
    DataStore.prototype.getMenuDS = function () {
        return this.menuDataSource;
    };
    DataStore.prototype.getFlattenDS = function () {
        return this.flattenDataSource;
    };
    DataStore.prototype.getEnableDS = function () {
        return this.enabledDataSource;
    };
    DataStore.prototype.getMapDS = function () {
        return this.mapDataSource;
    };
    DataStore.prototype.updateAll = function () {
        var _this = this;
        var _a = this.options, key = _a.key, filter = _a.filter, filterLocal = _a.filterLocal, showDataSourceChildren = _a.showDataSourceChildren;
        this.menuDataSource = (0, util_1.filterDataSource)(this.dataSource, filterLocal ? key : '', filter, this.options.addonKey);
        this.flattenDataSource = showDataSourceChildren
            ? (0, util_1.flattingDataSource)(this.menuDataSource)
            : this.menuDataSource;
        this.mapDataSource = {};
        this.flattenDataSource.forEach(function (item) {
            _this.mapDataSource["".concat(item.value)] = item;
        });
        this.enabledDataSource = this.flattenDataSource.filter(function (item) { return !item.disabled; });
        return this.menuDataSource;
    };
    return DataStore;
}());
exports.default = DataStore;
