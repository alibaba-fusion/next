import { assignSubComponent } from '../util/component';
import Collapse from './collapse';
import Panel from './panel';
import type { CollapseProps, PanelProps } from './types';

const CollapseWithPanel = assignSubComponent(Collapse, { Panel });

export default CollapseWithPanel;
export type { CollapseProps, PanelProps };
