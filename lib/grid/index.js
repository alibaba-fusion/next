"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var row_1 = tslib_1.__importDefault(require("./row"));
var col_1 = tslib_1.__importDefault(require("./col"));
var Grid = {
    Row: config_provider_1.default.config(row_1.default, {
        transform: /* istanbul ignore next */ function (props, deprecated) {
            if ('type' in props) {
                deprecated('type', 'fixed | wrap | gutter', 'Row');
                var type = props.type, others = tslib_1.__rest(props, ["type"]);
                var types = Array.isArray(type) ? type : [type];
                var fixed = void 0;
                if (types.indexOf('fixed') > -1) {
                    fixed = true;
                }
                var wrap = void 0;
                if (types.indexOf('wrap') > -1) {
                    wrap = true;
                }
                props = tslib_1.__assign({ fixed: fixed, wrap: wrap }, others);
            }
            return props;
        },
    }),
    Col: config_provider_1.default.config(col_1.default),
};
exports.default = Grid;
