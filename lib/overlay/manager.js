"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var overlayManager = {
    allOverlays: [],
    addOverlay: function (overlay) {
        this.removeOverlay(overlay);
        this.allOverlays.unshift(overlay);
    },
    isCurrentOverlay: function (overlay) {
        return overlay && this.allOverlays[0] === overlay;
    },
    removeOverlay: function (overlay) {
        var i = this.allOverlays.indexOf(overlay);
        if (i > -1) {
            this.allOverlays.splice(i, 1);
        }
    },
};
exports.default = overlayManager;
