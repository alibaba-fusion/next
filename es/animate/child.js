import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { func, support, events, dom, guid } from '../util';
var noop = function () { };
var on = events.on, off = events.off;
var addClass = dom.addClass, removeClass = dom.removeClass;
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
function getStyleProperty(node, name) {
    var style = window.getComputedStyle(node);
    var ret = '';
    for (var i = 0; i < prefixes.length; i++) {
        ret = style.getPropertyValue(prefixes[i] + name);
        if (ret) {
            break;
        }
    }
    return ret;
}
var AnimateChild = /** @class */ (function (_super) {
    __extends(AnimateChild, _super);
    function AnimateChild(props) {
        var _this_1 = _super.call(this, props) || this;
        func.bindCtx(_this_1, [
            'handleEnter',
            'handleEntering',
            'handleEntered',
            'handleExit',
            'handleExiting',
            'handleExited',
            'addEndListener',
        ]);
        _this_1.endListeners = {
            transitionend: [],
            animationend: [],
        };
        _this_1.timeoutMap = {};
        return _this_1;
    }
    AnimateChild.prototype.componentWillUnmount = function () {
        var _this_1 = this;
        Object.keys(this.endListeners).forEach(function (eventName) {
            _this_1.endListeners[eventName].forEach(function (listener) {
                off(_this_1.node, eventName, listener);
            });
        });
        this.endListeners = {
            transitionend: [],
            animationend: [],
        };
    };
    AnimateChild.prototype.generateEndListener = function (node, done, eventName, id) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var _this = this;
        return function endListener(e) {
            if (e && e.target === node) {
                if (_this.timeoutMap[id]) {
                    clearTimeout(_this.timeoutMap[id]);
                    delete _this.timeoutMap[id];
                }
                done();
                off(node, eventName, endListener);
                var listeners = _this.endListeners[eventName];
                var index = listeners.indexOf(endListener);
                index > -1 && listeners.splice(index, 1);
            }
        };
    };
    AnimateChild.prototype.addEndListener = function (node, done) {
        var _this_1 = this;
        if (support.transition || support.animation) {
            var id_1 = guid();
            this.node = node;
            if (support.transition) {
                var transitionEndListener = this.generateEndListener(node, done, 'transitionend', id_1);
                on(node, 'transitionend', transitionEndListener);
                this.endListeners.transitionend.push(transitionEndListener);
            }
            if (support.animation) {
                var animationEndListener = this.generateEndListener(node, done, 'animationend', id_1);
                on(node, 'animationend', animationEndListener);
                this.endListeners.animationend.push(animationEndListener);
            }
            setTimeout(function () {
                var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
                var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
                var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
                var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
                var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
                if (time) {
                    _this_1.timeoutMap[id_1] = window.setTimeout(function () {
                        done();
                    }, time * 1000 + 200);
                }
            }, 15);
        }
        else {
            done();
        }
    };
    AnimateChild.prototype.removeEndtListener = function () {
        this.transitionOff && this.transitionOff();
        this.animationOff && this.animationOff();
    };
    AnimateChild.prototype.removeClassNames = function (node, names) {
        Object.keys(names).forEach(function (key) {
            removeClass(node, names[key]);
        });
    };
    AnimateChild.prototype.handleEnter = function (node, isAppearing) {
        var names = this.props.names;
        if (names) {
            this.removeClassNames(node, names);
            var className = isAppearing ? 'appear' : 'enter';
            addClass(node, names[className]);
        }
        var hook = isAppearing ? this.props.onAppear : this.props.onEnter;
        hook(node);
    };
    AnimateChild.prototype.handleEntering = function (node, isAppearing) {
        var _this_1 = this;
        setTimeout(function () {
            var names = _this_1.props.names;
            if (names) {
                var className = isAppearing ? 'appearActive' : 'enterActive';
                addClass(node, names[className]);
            }
            var hook = isAppearing ? _this_1.props.onAppearing : _this_1.props.onEntering;
            hook(node);
        }, 10);
    };
    AnimateChild.prototype.handleEntered = function (node, isAppearing) {
        var names = this.props.names;
        if (names) {
            var classNames = isAppearing
                ? [names.appear, names.appearActive]
                : [names.enter, names.enterActive];
            classNames.forEach(function (className) {
                removeClass(node, className);
            });
        }
        var hook = isAppearing ? this.props.onAppeared : this.props.onEntered;
        hook(node);
    };
    AnimateChild.prototype.handleExit = function (node) {
        var names = this.props.names;
        if (names) {
            this.removeClassNames(node, names);
            addClass(node, names.leave);
        }
        this.props.onExit(node);
    };
    AnimateChild.prototype.handleExiting = function (node) {
        var _this_1 = this;
        setTimeout(function () {
            var names = _this_1.props.names;
            if (names) {
                addClass(node, names.leaveActive);
            }
            _this_1.props.onExiting(node);
        }, 10);
    };
    AnimateChild.prototype.handleExited = function (node) {
        var names = this.props.names;
        if (names) {
            [names.leave, names.leaveActive].forEach(function (className) {
                removeClass(node, className);
            });
        }
        this.props.onExited(node);
    };
    AnimateChild.prototype.render = function () {
        var _a = this.props, names = _a.names, onAppear = _a.onAppear, onAppeared = _a.onAppeared, onAppearing = _a.onAppearing, onEnter = _a.onEnter, onEntering = _a.onEntering, onEntered = _a.onEntered, onExit = _a.onExit, onExiting = _a.onExiting, onExited = _a.onExited, others = __rest(_a, ["names", "onAppear", "onAppeared", "onAppearing", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]);
        return (React.createElement(Transition, __assign({}, others, { onEnter: this.handleEnter, onEntering: this.handleEntering, onEntered: this.handleEntered, onExit: this.handleExit, onExiting: this.handleExiting, onExited: this.handleExited, addEndListener: this.addEndListener })));
    };
    AnimateChild.displayName = 'AnimateChild';
    AnimateChild.propTypes = {
        names: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        onAppear: PropTypes.func,
        onAppearing: PropTypes.func,
        onAppeared: PropTypes.func,
        onEnter: PropTypes.func,
        onEntering: PropTypes.func,
        onEntered: PropTypes.func,
        onExit: PropTypes.func,
        onExiting: PropTypes.func,
        onExited: PropTypes.func,
    };
    AnimateChild.defaultProps = {
        onAppear: noop,
        onAppearing: noop,
        onAppeared: noop,
        onEnter: noop,
        onEntering: noop,
        onEntered: noop,
        onExit: noop,
        onExiting: noop,
        onExited: noop,
    };
    return AnimateChild;
}(Component));
export default AnimateChild;
