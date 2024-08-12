import type { ReactInstance } from 'react';
declare const overlayManager: {
    allOverlays: never[];
    addOverlay(overlay: ReactInstance): void;
    isCurrentOverlay(overlay: ReactInstance): boolean;
    removeOverlay(overlay: ReactInstance): void;
};
export default overlayManager;
