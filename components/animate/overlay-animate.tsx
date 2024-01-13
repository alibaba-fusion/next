/* istanbul ignore file */
import React, { useCallback, useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import classNames from 'classnames';

const OverlayAnimate = props => {
    const {
        animation,
        visible,
        children,
        timeout = 300,
        style,

        mountOnEnter,
        unmountOnExit,
        appear,
        enter,
        exit,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,

        ...others
    } = props;

    const animateProps = {
        mountOnEnter,
        unmountOnExit,
        appear,
        enter,
        exit,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
    };

    Object.keys(animateProps).forEach(k => {
        if (!(k in props) || typeof props[k] === 'undefined') {
            delete animateProps[k];
        }
    });

    const animationMap =
        typeof animation === 'string' ? { in: animation, out: animation } : animation;

    const animateClsMap = animation
        ? {
              entering: animationMap.in,
              exiting: animationMap.out,
          }
        : {};

    if (animation === false) {
        animateClsMap.entering = '';
        animateClsMap.exiting = '';
    }

    return (
        <Transition {...animateProps} in={visible} timeout={animation ? timeout : 0} appear>
            {state => {
                const cls = classNames({
                    [children.props.className]: !!children.props.className,
                    [animateClsMap[state]]: state in animateClsMap && animateClsMap[state],
                });

                const childProps = {
                    ...others,
                    className: cls,
                };

                if (style && children.props && children.props.style) {
                    childProps.style = Object.assign({}, children.props.style, style);
                }

                return React.cloneElement(children, childProps);
            }}
        </Transition>
    );
};

export default OverlayAnimate;
