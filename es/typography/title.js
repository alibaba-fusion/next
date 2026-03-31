import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import Text from './text';
import ConfigProvider from '../config-provider';
export default (function (Tag) {
    /**
     * Typography.Title
     */
    var Title = /** @class */ (function (_super) {
        __extends(Title, _super);
        function Title() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Title.prototype.render = function () {
            var _a = this.props, prefix = _a.prefix, className = _a.className, others = __rest(_a, ["prefix", "className"]);
            return (React.createElement(Text, __assign({}, others, { component: Tag, className: "".concat(className || '', " ").concat(prefix, "typography-title") })));
        };
        Title.propTypes = {
            prefix: PropTypes.string,
        };
        Title.defaultProps = {
            prefix: 'next-',
        };
        Title.displayName = Tag.toUpperCase();
        return Title;
    }(React.Component));
    return ConfigProvider.config(Title);
});
