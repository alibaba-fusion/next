"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignSubComponent = void 0;
function assignSubComponent(Component, SubComponents) {
    for (var key in SubComponents) {
        if (Object.prototype.hasOwnProperty.call(SubComponents, key)) {
            Component[key] = SubComponents[key];
        }
    }
    return Component;
}
exports.assignSubComponent = assignSubComponent;
