import { CSSProperties } from 'react';
import { hasDOM } from './dom';
import { each } from './object';

const animationEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd',
    animation: 'animationend',
};

const transitionEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    OTransition: 'oTransitionEnd',
    transition: 'transitionend',
};

/**
 * 是否支持某些动效事件，如果支持，返回相应的 end 事件名
 */
function _supportEnd(names: Record<string, string>): { end: string } | false {
    /* istanbul ignore if */
    if (!hasDOM) {
        return false;
    }

    const el = document.createElement('div');
    let ret: { end: string } | false = false;

    each(names, (val, key) => {
        /* istanbul ignore else */
        if (el.style[key as keyof CSSStyleDeclaration] !== undefined) {
            ret = { end: val };
            return false;
        }
    });

    return ret;
}

type CheckCssNameMap = {
    [k in keyof CSSProperties]: CSSProperties[k][];
};

/**
 * 是否支持某些 CSS 属性
 */
function _supportCSS(names: CheckCssNameMap): boolean {
    /* istanbul ignore if */
    if (!hasDOM) {
        return false;
    }

    const el = document.createElement('div');
    let ret = false;

    each(names, (val, key) => {
        each(val, item => {
            try {
                el.style[key as any] = item as any;
                ret = ret || el.style[key as any] === item;
            } catch (e) {
                // It will be throw error when set unknown property under IE8
            }
            return !ret; // 如果有一个支持就返回 false，后面不需要再判断
        });

        return !ret;
    });

    return ret;
}

/**
 * 是否支持 animation 以及动画结束事件名
 */
export const animation = _supportEnd(animationEndEventNames);

/**
 * 是否支持 transition 以及过滤效果结束事件名
 */
export const transition = _supportEnd(transitionEventNames);

/**
 * 是否支持 flex 属性
 */
export const flex = _supportCSS({
    display: ['flex', '-webkit-flex', '-moz-flex', '-ms-flexbox'],
});
