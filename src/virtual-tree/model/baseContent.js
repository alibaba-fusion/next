import { hooks } from '../../util';

export class BaseContentModel {
    id = undefined;
    name = undefined;
    isParent = undefined;
    order = undefined;
    selected = undefined;
    expanded = undefined;
    timer = undefined;
}

export default hooks.createModel(BaseContentModel);
