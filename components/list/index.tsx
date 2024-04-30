import List from './list';
import Item from './item';
import { assignSubComponent } from '../util/component';

const ListWithItem = assignSubComponent(List, { Item });

export type { ListItemProps, ListProps } from './types';

export default ListWithItem;
