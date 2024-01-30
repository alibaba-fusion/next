import type { ReactInstance } from 'react';

const overlayManager = {
    allOverlays: [],

    addOverlay(overlay: ReactInstance) {
        this.removeOverlay(overlay);
        this.allOverlays.unshift(overlay);
    },

    isCurrentOverlay(overlay: ReactInstance) {
        return overlay && this.allOverlays[0] === overlay;
    },

    removeOverlay(overlay: ReactInstance) {
        const i = this.allOverlays.indexOf(overlay);
        if (i > -1) {
            this.allOverlays.splice(i, 1);
        }
    },
};

export default overlayManager;
