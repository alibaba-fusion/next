import { hooks } from '../../util';

export class ContextMenuModel {
    list = [];
    popupNodes;
}

export default hooks.createModel(ContextMenuModel);
