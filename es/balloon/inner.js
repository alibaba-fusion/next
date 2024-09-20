import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { func, obj } from '../util';
import Icon from '../icon';
import zhCN from '../locale/zh-cn';
import { normalMap, edgeMap } from './alignMap';
/**
 * Created by xiachi on 17/2/10.
 */
var noop = func.noop;
var BalloonInner = /** @class */ (function (_super) {
    __extends(BalloonInner, _super);
    function BalloonInner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BalloonInner.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, closable = _c.closable, className = _c.className, style = _c.style, isTooltip = _c.isTooltip, align = _c.align, title = _c.title, type = _c.type, onClose = _c.onClose, alignEdge = _c.alignEdge, v2 = _c.v2, children = _c.children, rtl = _c.rtl, locale = _c.locale, others = __rest(_c, ["prefix", "closable", "className", "style", "isTooltip", "align", "title", "type", "onClose", "alignEdge", "v2", "children", "rtl", "locale"]);
        var alignMap = alignEdge || v2 ? edgeMap : normalMap;
        var _prefix = prefix;
        if (isTooltip) {
            _prefix = "".concat(_prefix, "balloon-tooltip");
        }
        else {
            _prefix = "".concat(_prefix, "balloon");
        }
        var closableInTitle = closable && title !== undefined;
        var closableInContent = closable && title === undefined;
        var classes = classNames((_a = {},
            _a["".concat(_prefix)] = true,
            _a["".concat(_prefix, "-").concat(type)] = type,
            _a["".concat(_prefix, "-medium")] = true,
            _a["".concat(_prefix, "-").concat(alignMap[align].arrow)] = alignMap[align],
            _a["".concat(_prefix, "-closable")] = closableInContent,
            _a[className] = className,
            _a["".concat(_prefix, "-v2")] = v2,
            _a));
        var titleCls = classNames((_b = {},
            _b["".concat(prefix, "balloon-title")] = true,
            _b["".concat(_prefix, "-closable")] = closableInTitle,
            _b));
        var closeIcon = (React.createElement("a", { role: "button", "aria-label": locale.close, tabIndex: 0, className: "".concat(_prefix, "-close"), onClick: onClose },
            React.createElement(Icon, { type: "close", size: "small" })));
        return (React.createElement("div", __assign({ role: "tooltip", "aria-live": "polite", dir: rtl ? 'rtl' : undefined, className: classes, style: style }, obj.pickOthers(Object.keys(BalloonInner.propTypes), others)),
            React.createElement("div", { className: "".concat(prefix, "balloon-arrow") },
                React.createElement("div", { className: "".concat(prefix, "balloon-arrow-content") })),
            title && (React.createElement("div", { className: titleCls },
                title,
                closableInTitle && closeIcon)),
            React.createElement("div", { className: "".concat(prefix, "balloon-content") }, children),
            closableInContent && closeIcon));
    };
    BalloonInner.contextTypes = {
        prefix: PropTypes.string,
    };
    BalloonInner.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        closable: PropTypes.bool,
        children: PropTypes.any,
        title: PropTypes.node,
        className: PropTypes.string,
        alignEdge: PropTypes.bool,
        onClose: PropTypes.func,
        style: PropTypes.any,
        align: PropTypes.string,
        type: PropTypes.string,
        isTooltip: PropTypes.bool,
        locale: PropTypes.object,
        pure: PropTypes.bool,
        v2: PropTypes.bool,
    };
    BalloonInner.defaultProps = {
        prefix: 'next-',
        closable: true,
        onClose: noop,
        locale: zhCN.Balloon,
        align: 'b',
        type: 'normal',
        alignEdge: false,
        pure: false,
    };
    return BalloonInner;
}(React.Component));
export default BalloonInner;
