import type Overlay from './types';

const overlayManager = {
    allOverlays: [],

    addOverlay(overlay: Overlay) {
        this.removeOverlay(overlay);
        this.allOverlays.unshift(overlay);
    },

    isCurrentOverlay(overlay: Overlay) {
        return overlay && this.allOverlays[0] === overlay;
    },

    removeOverlay(overlay: Overlay) {
        const i = this.allOverlays.indexOf(overlay);
        if (i > -1) {
            this.allOverlays.splice(i, 1);
        }
    },
};

export default overlayManager;
