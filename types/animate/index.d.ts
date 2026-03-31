/// <reference types="react" />
import Animate from './animate';
import Expand from './expand';
declare const AnimateWithSubComponent: typeof Animate & {
    Expand: typeof Expand;
    OverlayAnimate: (props: import('./types').OverlayAnimateProps) => import('react').JSX.Element;
};
export type { AnimateProps, ExpandProps, OverlayAnimateProps } from './types';
export default AnimateWithSubComponent;
