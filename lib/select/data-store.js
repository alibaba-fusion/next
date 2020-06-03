'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * manage dataSource for menu list
 */
var DataStore = function () {
    function DataStore(options) {
        (0, _classCallCheck3.default)(this, DataStore);

        this.options = (0, _extends3.default)({
            filter: _util.filter,
            key: undefined,
            addonKey: false,
            filterLocal: true
        }, options);

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

    DataStore.prototype.setOptions = function setOptions(options) {
        (0, _extends3.default)(this.options, options);
    };

    DataStore.prototype.updateByDS = function updateByDS(dataSource) {
        var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        this.dataSource = isChildren ? (0, _util.parseDataSourceFromChildren)(dataSource) : (0, _util.normalizeDataSource)(dataSource);
        return this.updateAll();
    };

    DataStore.prototype.updateByKey = function updateByKey(key) {
        if (key === this.options.key) {
            return this.getMenuDS();
        }

        this.options.key = key;
        return this.updateAll();
    };

    DataStore.prototype.getOriginDS = function getOriginDS() {
        return this.dataSource;
    };

    DataStore.prototype.getMenuDS = function getMenuDS() {
        return this.menuDataSource;
    };

    DataStore.prototype.getFlattenDS = function getFlattenDS() {
        return this.flattenDataSource;
    };

    DataStore.prototype.getEnableDS = function getEnableDS() {
        return this.enabledDataSource;
    };

    DataStore.prototype.getMapDS = function getMapDS() {
        return this.mapDataSource;
    };

    DataStore.prototype.updateAll = function updateAll() {
        var _this = this;

        var _options = this.options,
            key = _options.key,
            filter = _options.filter,
            filterLocal = _options.filterLocal;

        this.menuDataSource = (0, _util.filterDataSource)(this.dataSource, filterLocal ? key : '', filter, this.options.addonKey);

        this.flattenDataSource = (0, _util.flattingDataSource)(this.menuDataSource);

        this.mapDataSource = {};
        this.flattenDataSource.forEach(function (item) {
            _this.mapDataSource['' + item.value] = item;
        });

        this.enabledDataSource = this.flattenDataSource.filter(function (item) {
            return !item.disabled;
        });

        return this.menuDataSource;
    };

    return DataStore;
}();

exports.default = DataStore;
module.exports = exports['default'];