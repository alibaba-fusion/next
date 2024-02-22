declare class Cache {
    _root: unknown;
    _store: Map<unknown, unknown>;
    constructor();
    empty(): boolean;
    has(key: unknown): boolean;
    get<T = unknown>(key: unknown, defaultValue?: T): T | null | undefined;
    add(key: unknown, value: unknown): void;
    update(key: unknown, value: unknown): void;
    remove(key: unknown): void;
    clear(): void;
    root(): unknown;
}
export default Cache;
