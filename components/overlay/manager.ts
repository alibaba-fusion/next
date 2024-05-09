import type { OverlayProps } from '@alifd/next/lib/overlay';

const overlayManager = {
    allOverlays: [],

    addOverlay(overlay: OverlayProps) {
        this.removeOverlay(overlay);
        this.allOverlays.unshift(overlay);
    },

    isCurrentOverlay(overlay: OverlayProps) {
        return overlay && this.allOverlays[0] === overlay;
    },

    removeOverlay(overlay: OverlayProps) {
        const i = this.allOverlays.indexOf(overlay);
        if (i > -1) {
            this.allOverlays.splice(i, 1);
        }
    },
};

export default overlayManager;
