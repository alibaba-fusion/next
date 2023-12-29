"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var PropTypes = require("prop-types");
var text_1 = require("./text");
var config_provider_1 = require("../config-provider");
exports.default = (function (Tag) {
    /**
     * Typography.Title
     */
    var Title = /** @class */ (function (_super) {
        tslib_1.__extends(Title, _super);
        function Title() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Title.prototype.render = function () {
            var _a = this.props, prefix = _a.prefix, className = _a.className, others = tslib_1.__rest(_a, ["prefix", "className"]);
            return (React.createElement(text_1.default, tslib_1.__assign({}, others, { component: Tag, className: "".concat(className || '', " ").concat(prefix, "typography-title") })));
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
    return config_provider_1.default.config(Title);
});
