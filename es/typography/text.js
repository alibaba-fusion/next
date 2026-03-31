import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
/**
 * Typography.Text
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.wrapChildren = function (children, wrapper) {
        return React.createElement(wrapper, {}, children);
    };
    Text.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, component = _a.component, strong = _a.strong, underline = _a.underline, deleteProp = _a.delete, code = _a.code, mark = _a.mark, rtl = _a.rtl, children = _a.children, others = __rest(_a, ["prefix", "className", "component", "strong", "underline", "delete", "code", "mark", "rtl", "children"]);
        var Component = component;
        var formattedChildren = children;
        if (strong) {
            formattedChildren = this.wrapChildren(formattedChildren, 'strong');
        }
        if (underline) {
            formattedChildren = this.wrapChildren(formattedChildren, 'u');
        }
        if (deleteProp) {
            formattedChildren = this.wrapChildren(formattedChildren, 'del');
        }
        if (code) {
            formattedChildren = this.wrapChildren(formattedChildren, 'code');
        }
        if (mark) {
            formattedChildren = this.wrapChildren(formattedChildren, 'mark');
        }
        if (rtl) {
            others.dir = 'rtl';
        }
        var cls = classNames("".concat(prefix, "typography"), className);
        return (React.createElement(Component, __assign({}, others, { className: cls }), formattedChildren));
    };
    Text.propTypes = {
        prefix: PropTypes.string,
        delete: PropTypes.bool,
        mark: PropTypes.bool,
        underline: PropTypes.bool,
        strong: PropTypes.bool,
        code: PropTypes.bool,
        component: PropTypes.elementType,
        children: PropTypes.node,
        rtl: PropTypes.bool,
    };
    Text.defaultProps = {
        prefix: 'next-',
        delete: false,
        mark: false,
        underline: false,
        strong: false,
        code: false,
        component: 'span',
        rtl: false,
    };
    return Text;
}(React.Component));
export default ConfigProvider.config(Text);
