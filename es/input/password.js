import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import Icon from '../icon/index';
function preventDefault(e) {
    e.preventDefault();
}
var Password = /** @class */ (function (_super) {
    __extends(Password, _super);
    function Password() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.state = {
            hint: 'eye-close',
            htmlType: 'password',
        };
        _this.toggleEye = function (e) {
            e.preventDefault();
            if (_this.props.disabled)
                return;
            var eyeClose = _this.state.hint === 'eye';
            _this.setState({
                hint: eyeClose ? 'eye-close' : 'eye',
                htmlType: eyeClose || !_this.props.showToggle ? 'password' : 'text',
            });
        };
        return _this;
    }
    Password.prototype.render = function () {
        var _a = this.props, showToggle = _a.showToggle, others = __rest(_a, ["showToggle"]);
        var _b = this.state, hint = _b.hint, htmlType = _b.htmlType;
        var extra = showToggle ? (React.createElement(Icon, { type: hint, onClick: this.toggleEye, onMouseDown: preventDefault })) : null;
        return React.createElement(Input, __assign({}, others, { extra: extra, htmlType: htmlType }));
    };
    Password.displayName = 'Password';
    Password.getDerivedStateFromProps = Input.getDerivedStateFromProps;
    Password.propTypes = __assign(__assign({}, Input.propTypes), { showToggle: PropTypes.bool });
    Password.defaultProps = __assign(__assign({}, Input.defaultProps), { showToggle: true });
    return Password;
}(Input));
export default Password;
