import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import ConfigProvider from '../config-provider';
import Drawer1 from './drawer';
import Drawer2 from './drawer-v2';
import Inner from './inner';
import { show, withContext } from './show';
var Drawer = /** @class */ (function (_super) {
    __extends(Drawer, _super);
    function Drawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drawer.prototype.render = function () {
        var _a = this.props, v2 = _a.v2, others = __rest(_a, ["v2"]);
        if (v2) {
            return React.createElement(Drawer2, __assign({}, others));
        }
        else {
            return React.createElement(Drawer1, __assign({}, others));
        }
    };
    return Drawer;
}(React.Component));
Drawer.Inner = Inner;
Drawer.show = show;
Drawer.withContext = withContext;
export default ConfigProvider.config(Drawer);
