import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Text from './text';
/**
 * Typography.Paragraph
 */
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Paragraph.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, component = _a.component, others = __rest(_a, ["prefix", "className", "component"]);
        var cls = classNames("".concat(prefix, "typography-paragraph"), className);
        return React.createElement(Text, __assign({}, others, { className: cls, component: component }));
    };
    Paragraph.propTypes = {
        prefix: PropTypes.string,
        component: PropTypes.elementType,
    };
    Paragraph.defaultProps = {
        prefix: 'next-',
        type: 'long',
        size: 'medium',
        component: 'p',
    };
    return Paragraph;
}(React.Component));
export default ConfigProvider.config(Paragraph);
