import { assignSubComponent } from '../util/component';
import Animate from './animate';
import Expand from './expand';
import OverlayAnimate from './overlay-animate';
var AnimateWithSubComponent = assignSubComponent(Animate, { Expand: Expand, OverlayAnimate: OverlayAnimate });
export default AnimateWithSubComponent;
