import { assignSubComponent } from '../util/component';
import Animate from './animate';
import Expand from './expand';
import OverlayAnimate from './overlay-animate';

const AnimateWithSubComponent = assignSubComponent(Animate, { Expand, OverlayAnimate });

export type { AnimateProps, ExpandProps, OverlayAnimateProps } from './types';

export default AnimateWithSubComponent;
