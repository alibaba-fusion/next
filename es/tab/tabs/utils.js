import React from 'react';

export var triggerEvents = {
    CLICK: 'click',
    HOVER: 'hover'
};

export function getOffsetWH(node, tabPosition) {
    var prop = 'offsetWidth';
    if (tabPosition === 'left' || tabPosition === 'right') {
        prop = 'offsetHeight';
    }
    return node ? node[prop] : 0;
}

export function getOffsetLT(node, tabPosition) {
    var prop = 'left';
    if (tabPosition === 'left' || tabPosition === 'right') {
        prop = 'top';
    }
    return node.getBoundingClientRect()[prop];
}

export function isTransformSupported(style) {
    return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

export function toArray(children) {
    var ret = [];
    React.Children.forEach(children, function (child, index) {
        if (React.isValidElement(child)) {
            ret.push(React.cloneElement(child, {
                key: child.key || index
            }));
        }
    });
    return ret;
}