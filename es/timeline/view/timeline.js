import { __assign, __extends, __rest } from "tslib";
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { obj } from '../../util';
import ConfigProvider from '../../config-provider';
import nextLocale from '../../locale/zh-cn';
/** Timeline */
var Timeline = /** @class */ (function (_super) {
    __extends(Timeline, _super);
    function Timeline(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            fold: props.fold,
        };
        return _this;
    }
    Timeline.getDerivedStateFromProps = function (nextProps, prevState) {
        var innerUpdate = prevState.innerUpdate, fold = prevState.fold;
        if (innerUpdate) {
            return {
                fold: fold,
                innerUpdate: false,
            };
        }
        if ('fold' in nextProps) {
            return {
                fold: nextProps.fold,
            };
        }
        return null;
    };
    Timeline.prototype.toggleFold = function (folderIndex, total) {
        var fold = this.state.fold.map(function (item) { return (__assign({}, item)); });
        if (folderIndex) {
            for (var i = 0; i < fold.length; i++) {
                var _a = fold[i], foldArea = _a.foldArea, foldShow = _a.foldShow;
                if ((foldArea[1] && folderIndex === foldArea[1]) ||
                    (!foldArea[1] && folderIndex === total - 1)) {
                    fold[i].foldShow = !foldShow;
                }
            }
            this.setState({ fold: fold, innerUpdate: true });
        }
    };
    Timeline.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, prefix = _b.prefix, rtl = _b.rtl, className = _b.className, children = _b.children, locale = _b.locale, animation = _b.animation, mode = _b.mode, others = __rest(_b, ["prefix", "rtl", "className", "children", "locale", "animation", "mode"]);
        var fold = this.state.fold;
        // 修改子节点属性
        var childrenCount = React.Children.count(children);
        var isAlternateMode = mode === 'alternate';
        var getPositionCls = function (idx) {
            if (isAlternateMode) {
                return idx % 2 === 0
                    ? "".concat(prefix, "timeline-item-left")
                    : "".concat(prefix, "timeline-item-right");
            }
            return "".concat(prefix, "timeline-item-left");
        };
        var cloneChildren = Children.map(children, function (child, i) {
            var folderIndex = null;
            var foldNodeShow = false;
            fold.forEach(function (item) {
                var foldArea = item.foldArea, foldShow = item.foldShow;
                if (foldArea[0] && i >= foldArea[0] && (i <= foldArea[1] || !foldArea[1])) {
                    folderIndex = foldArea[1] || childrenCount - 1;
                    foldNodeShow = foldShow;
                }
            });
            return React.cloneElement(child, {
                prefix: prefix,
                locale: locale,
                total: childrenCount,
                className: getPositionCls(i),
                index: i,
                folderIndex: folderIndex,
                foldShow: foldNodeShow,
                toggleFold: folderIndex === i
                    ? _this.toggleFold.bind(_this, folderIndex, childrenCount)
                    : function () { },
                animation: animation,
            });
        });
        var timelineCls = classNames((_a = {},
            _a["".concat(prefix, "timeline")] = true,
            _a["".concat(prefix, "alternate")] = isAlternateMode,
            _a), className);
        if (rtl) {
            others.dir = 'rtl';
        }
        return (React.createElement("ul", __assign({}, obj.pickOthers(Timeline.propTypes, others), { className: timelineCls }), cloneChildren));
    };
    Timeline.displayName = 'Timeline';
    Timeline.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, fold: PropTypes.array, className: PropTypes.string, children: PropTypes.any, locale: PropTypes.object, animation: PropTypes.bool, mode: PropTypes.oneOf(['left', 'alternate']) });
    Timeline.defaultProps = {
        prefix: 'next-',
        rtl: false,
        fold: [],
        locale: nextLocale.Timeline,
        animation: true,
        mode: 'left',
    };
    return Timeline;
}(Component));
export default ConfigProvider.config(polyfill(Timeline));
