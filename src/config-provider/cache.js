class Cache {
    constructor() {
        this._root = null;
        this._store = new Map();
    }

    empty() {
        return this._store.size === 0;
    }

    has(key) {
        return this._store.has(key);
    }

    get(key, defaultValue) {
        const res = this.has(key) ? this._store.get(key) : this.root();
        return typeof res === 'undefined' || res === null ? defaultValue : res;
    }

    add(key, value) {
        if (this.empty()) {
            this._root = key;
        }
        this._store.set(key, value);
    }

    update(key, value) {
        if (this.has(key)) {
            this._store.set(key, value);
        }
    }

    remove(key) {
        this._store.delete(key);

        if (key === this._root) {
            const maps = this._store.keys();
            // 如果当前销毁的实例刚好是root，那么从map中取下一个加入的节点当作root
            const nextkey = maps.next().value;
            this._root = nextkey;
        }
    }

    clear() {
        this._store.clear();
    }

    root() {
        return this._store.get(this._root);
    }
}

export default Cache;
