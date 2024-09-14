import List from './list';
import Item from './item';
import { assignSubComponent } from '../util/component';
var ListWithItem = assignSubComponent(List, { Item: Item });
export default ListWithItem;
