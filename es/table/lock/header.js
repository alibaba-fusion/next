import { __assign, __extends } from "tslib";
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import FixedHeader from '../fixed/header';
var LockHeader = /** @class */ (function (_super) {
    __extends(LockHeader, _super);
    function LockHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockHeader.prototype.componentDidMount = function () {
        var _a = this.context, getNode = _a.getNode, getLockNode = _a.getLockNode;
        getNode && getNode('header', findDOMNode(this), this.context.lockType);
        getLockNode && getLockNode('header', findDOMNode(this), this.context.lockType);
    };
    LockHeader.propTypes = __assign({}, FixedHeader.propTypes);
    LockHeader.contextTypes = __assign(__assign({}, FixedHeader.contextTypes), { getLockNode: PropTypes.func, lockType: PropTypes.oneOf(['left', 'right']) });
    return LockHeader;
}(FixedHeader));
export default LockHeader;
