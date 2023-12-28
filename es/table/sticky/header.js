import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Affix from '../../affix';
/* eslint-disable react/prefer-stateless-function*/
var StickHeader = /** @class */ (function (_super) {
    __extends(StickHeader, _super);
    function StickHeader() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.getAffixRef = function (ref) {
            _this.props.affixRef && _this.props.affixRef(ref);
        };
        return _this;
    }
    StickHeader.prototype.render = function () {
        var _a;
        var prefix = this.props.prefix;
        var _b = this.context, Header = _b.Header, offsetTop = _b.offsetTop, affixProps = _b.affixProps;
        var newAffixProps = affixProps || {};
        var className = newAffixProps.className, others = __rest(newAffixProps, ["className"]);
        var cls = classnames((_a = {},
            _a["".concat(prefix, "table-affix")] = true,
            _a.className = className,
            _a));
        return (React.createElement(Affix, __assign({ ref: this.getAffixRef }, others, { className: cls, offsetTop: offsetTop }),
            React.createElement(Header, __assign({}, this.props))));
    };
    StickHeader.propTypes = {
        prefix: PropTypes.string,
    };
    StickHeader.contextTypes = {
        Header: PropTypes.any,
        offsetTop: PropTypes.number,
        affixProps: PropTypes.object,
    };
    return StickHeader;
}(React.Component));
export default StickHeader;
