import { hooks } from '../../util';

export class TreeModel {
    // The view list of tree.
    viewList = [];
    // Selected node id in tree.
    selectedNodeId;
    // Scrolling index of tree.
    scrollIndex = 0;
    // Visible contextmenu or not.
    visible = false;
    // The offset position of contextmenu.
    offset = [0, 0];
    // The customized data.
    data = [];
    // The target of contextmenu.
    target = undefined;
    // Ref of tree.
    treeRef;
    // The id of droppable.
    droppableId = undefined;
}

export default hooks.createModel(TreeModel);
