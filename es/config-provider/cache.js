var Cache = /** @class */ (function () {
    function Cache() {
        this._root = null;
        this._store = new Map();
    }
    Cache.prototype.empty = function () {
        return this._store.size === 0;
    };
    Cache.prototype.has = function (key) {
        return this._store.has(key);
    };
    Cache.prototype.get = function (key, defaultValue) {
        var res = this.has(key) ? this._store.get(key) : this.root();
        return typeof res === 'undefined' || res === null ? defaultValue : res;
    };
    Cache.prototype.add = function (key, value) {
        if (this.empty()) {
            this._root = key;
        }
        this._store.set(key, value);
    };
    Cache.prototype.update = function (key, value) {
        if (this.has(key)) {
            this._store.set(key, value);
        }
    };
    Cache.prototype.remove = function (key) {
        this._store.delete(key);
        if (key === this._root) {
            var maps = this._store.keys();
            // 如果当前销毁的实例刚好是 root，那么从 map 中取下一个加入的节点当作 root
            var nextkey = maps.next().value;
            this._root = nextkey;
        }
    };
    Cache.prototype.clear = function () {
        this._store.clear();
    };
    Cache.prototype.root = function () {
        return this._store.get(this._root);
    };
    return Cache;
}());
export default Cache;
