'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cache = function () {
    function Cache() {
        (0, _classCallCheck3.default)(this, Cache);

        this._root = null;
        this._store = new Map();
    }

    Cache.prototype.empty = function empty() {
        return this._store.size === 0;
    };

    Cache.prototype.has = function has(key) {
        return this._store.has(key);
    };

    Cache.prototype.get = function get(key, defaultValue) {
        var res = this.has(key) ? this._store.get(key) : this.root();
        return typeof res === 'undefined' || res === null ? defaultValue : res;
    };

    Cache.prototype.add = function add(key, value) {
        if (this.empty()) {
            this._root = key;
        }
        this._store.set(key, value);
    };

    Cache.prototype.update = function update(key, value) {
        if (this.has(key)) {
            this._store.set(key, value);
        }
    };

    Cache.prototype.remove = function remove(key) {
        this._store.delete(key);

        if (key === this._root) {
            var maps = this._store.keys();
            // 如果当前销毁的实例刚好是root，那么从map中取下一个加入的节点当作root
            var nextkey = maps.next().value;
            this._root = nextkey;
        }
    };

    Cache.prototype.root = function root() {
        return this._store.get(this._root);
    };

    return Cache;
}();

exports.default = Cache;
module.exports = exports['default'];