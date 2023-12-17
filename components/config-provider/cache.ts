class Cache {
    _root: unknown;
    _store: Map<unknown, unknown>;
    constructor() {
        this._root = null;
        this._store = new Map();
    }

    empty() {
        return this._store.size === 0;
    }

    has(key: unknown) {
        return this._store.has(key);
    }

    get<T = unknown>(key: unknown, defaultValue?: T): T | null | undefined {
        const res = this.has(key) ? this._store.get(key) : this.root();
        return typeof res === 'undefined' || res === null ? defaultValue : (res as T);
    }

    add(key: unknown, value: unknown) {
        if (this.empty()) {
            this._root = key;
        }
        this._store.set(key, value);
    }

    update(key: unknown, value: unknown) {
        if (this.has(key)) {
            this._store.set(key, value);
        }
    }

    remove(key: unknown) {
        this._store.delete(key);

        if (key === this._root) {
            const maps = this._store.keys();
            // 如果当前销毁的实例刚好是 root，那么从 map 中取下一个加入的节点当作 root
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
