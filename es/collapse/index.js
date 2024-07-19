import { assignSubComponent } from '../util/component';
import Collapse from './collapse';
import Panel from './panel';
var CollapseWithPanel = assignSubComponent(Collapse, { Panel: Panel });
export default CollapseWithPanel;
