import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const OverlayAnimate = props => {
    const { animation, visible, children, timeout = 300, ...others } = props;

    const animationMap = typeof animation === 'string' ? { in: animation, out: animation } : animation;

    const animateClsMap = {
        entering: animationMap.in,
        exiting: animationMap.out,
    };

    if (animation === false) {
        animateClsMap.entering = '';
        animateClsMap.exiting = '';
    }

    return (
        <Transition {...others} in={visible} timeout={animation ? timeout : 0} appear>
            {state => {
                if (state in animateClsMap && animateClsMap[state]) {
                    let cls = animateClsMap[state];
                    if (children.props && children.props.className) {
                        cls = children.props.className + ' ' + animateClsMap[state];
                    }
                    return React.cloneElement(children, { className: cls });
                }
                return children;
            }}
        </Transition>
    );
};

export default OverlayAnimate;
