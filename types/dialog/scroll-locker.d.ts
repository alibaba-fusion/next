import { type CustomCSSStyle } from '../util/dom';
declare function lock(container: HTMLElement, style: Partial<CustomCSSStyle>): string;
declare function unlock(container: HTMLElement, uuid: string): void;
declare const _default: {
    lock: typeof lock;
    unlock: typeof unlock;
};
export default _default;
