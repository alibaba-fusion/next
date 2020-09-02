export class ContextModel {
    // Current droppable id.
    currentDroppableId = undefined;
    // Dragging tree node id.
    draggingId = undefined;
    // The collection of droppable ids of tree.
    treeDroppableIds = new Set();
}

export default ContextModel;
