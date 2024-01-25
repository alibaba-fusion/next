import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { func, dom } from '../util';
import Animate from './animate';
import type { ExpandProps } from './types';

const noop = () => {};
const { getStyle } = dom;

export default class Expand extends Component<ExpandProps> {
    static displayName = 'Expand';
    static propTypes = {
        animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        beforeEnter: PropTypes.func,
        onEnter: PropTypes.func,
        afterEnter: PropTypes.func,
        beforeLeave: PropTypes.func,
        onLeave: PropTypes.func,
        afterLeave: PropTypes.func,
    };

    static defaultProps = {
        beforeEnter: noop,
        onEnter: noop,
        afterEnter: noop,
        beforeLeave: noop,
        onLeave: noop,
        afterLeave: noop,
    };
    leaving: boolean;
    styleBorderTopWidth: string;
    stylePaddingTop: string;
    styleHeight: string;
    stylePaddingBottom: string;
    styleBorderBottomWidth: string;
    borderTopWidth: string | number;
    paddingTop: string | number;
    height: number;
    paddingBottom: string | number;
    borderBottomWidth: string | number;

    constructor(props: ExpandProps) {
        super(props);
        func.bindCtx(this, [
            'beforeEnter',
            'onEnter',
            'afterEnter',
            'beforeLeave',
            'onLeave',
            'afterLeave',
        ]);
    }

    beforeEnter(node: HTMLElement) {
        if (this.leaving) {
            this.afterLeave(node);
        }

        this.cacheCurrentStyle(node);
        this.cacheComputedStyle(node);
        this.setCurrentStyleToZero(node);

        this.props.beforeEnter!(node);
    }

    onEnter(node: HTMLElement) {
        this.setCurrentStyleToComputedStyle(node);

        this.props.onEnter!(node);
    }

    afterEnter(node: HTMLElement) {
        this.restoreCurrentStyle(node);

        this.props.afterEnter!(node);
    }

    beforeLeave(node: HTMLElement) {
        this.leaving = true;

        this.cacheCurrentStyle(node);
        this.cacheComputedStyle(node);
        this.setCurrentStyleToComputedStyle(node);

        this.props.beforeLeave!(node);
    }

    onLeave(node: HTMLElement) {
        this.setCurrentStyleToZero(node);

        this.props.onLeave!(node);
    }

    afterLeave(node: HTMLElement) {
        this.leaving = false;

        this.restoreCurrentStyle(node);

        this.props.afterLeave!(node);
    }

    cacheCurrentStyle(node: HTMLElement) {
        this.styleBorderTopWidth = node.style.borderTopWidth;
        this.stylePaddingTop = node.style.paddingTop;
        this.styleHeight = node.style.height;
        this.stylePaddingBottom = node.style.paddingBottom;
        this.styleBorderBottomWidth = node.style.borderBottomWidth;
    }

    cacheComputedStyle(node: HTMLElement) {
        this.borderTopWidth = getStyle(node, 'borderTopWidth');
        this.paddingTop = getStyle(node, 'paddingTop');
        this.height = node.offsetHeight;
        this.paddingBottom = getStyle(node, 'paddingBottom');
        this.borderBottomWidth = getStyle(node, 'borderBottomWidth');
    }

    setCurrentStyleToZero(node: HTMLElement) {
        node.style.borderTopWidth = '0px';
        node.style.paddingTop = '0px';
        node.style.height = '0px';
        node.style.paddingBottom = '0px';
        node.style.borderBottomWidth = '0px';
    }

    setCurrentStyleToComputedStyle(node: HTMLElement) {
        node.style.borderTopWidth = `${this.borderTopWidth}px`;
        node.style.paddingTop = `${this.paddingTop}px`;
        node.style.height = `${this.height}px`;
        node.style.paddingBottom = `${this.paddingBottom}px`;
        node.style.borderBottomWidth = `${this.borderBottomWidth}px`;
    }

    restoreCurrentStyle(node: HTMLElement) {
        node.style.borderTopWidth = this.styleBorderTopWidth;
        node.style.paddingTop = this.stylePaddingTop;
        node.style.height = this.styleHeight;
        node.style.paddingBottom = this.stylePaddingBottom;
        node.style.borderBottomWidth = this.styleBorderBottomWidth;
    }

    render() {
        const { animation, ...others } = this.props;
        const newAnimation = animation || 'expand';

        return (
            <Animate
                {...others}
                animation={newAnimation}
                beforeEnter={this.beforeEnter}
                onEnter={this.onEnter}
                afterEnter={this.afterEnter}
                beforeLeave={this.beforeLeave}
                onLeave={this.onLeave}
                afterLeave={this.afterLeave}
            />
        );
    }
}
