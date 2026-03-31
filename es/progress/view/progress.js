import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Line from './progress-line';
import Circle from './progress-circle';
/**
 * Progress
 */
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.render = function () {
        var _a = this.props, shape = _a.shape, hasBorder = _a.hasBorder, others = __rest(_a, ["shape", "hasBorder"]);
        return shape === 'circle' ? (React.createElement(Circle, __assign({}, others))) : (React.createElement(Line, __assign({}, others, { hasBorder: hasBorder })));
    };
    Progress.propTypes = {
        prefix: PropTypes.string,
        shape: PropTypes.oneOf(['circle', 'line']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        percent: PropTypes.number,
        state: PropTypes.oneOf(['normal', 'success', 'error']),
        progressive: PropTypes.bool,
        hasBorder: PropTypes.bool,
        textRender: PropTypes.func,
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        rtl: PropTypes.bool,
    };
    Progress.defaultProps = {
        prefix: 'next-',
        shape: 'line',
        state: 'normal',
        size: 'medium',
        percent: 0,
        progressive: false,
        hasBorder: false,
        textRender: function (percent) { return "".concat(Math.floor(percent), "%"); },
    };
    Progress.displayName = 'Progress';
    Progress.contextTypes = {
        prefix: PropTypes.string,
    };
    return Progress;
}(Component));
export default Progress;
