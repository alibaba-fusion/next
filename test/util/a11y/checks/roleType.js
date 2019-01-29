/**
 * Test the `role` attribute of a node
 * @param { Array || String } roleTypes - ARIA Roles values that are to be checked against the desired nodes
 * @param { String || ReactWrapper || DOMComponent } nodeOrSelector - Either a component to query for the tag name, or a CSS selector to find the
 *                  node using the `rootNode` param
 * @param { ReactWrapper || DOMComponent } rootNode - (Optional) root node used to search for the desired node using the CSS selector from `nodeOrSelector`.
 *                  Required if `nodeOrSelector` is a string.
 * @returns { Boolean } Is the node's role attribute one of the values passed in `roleTypes`?
 */

export default function(roleTypes, nodeOrSelector, rootNode) {
    if (!nodeOrSelector || !roleTypes) {
        return false;
    }

    let node = nodeOrSelector;

    if (typeof node === 'string') {
        node = rootNode.find(node);
    }

    let role;

    if (node.getDOMNode) {
        role = node.getDOMNode().getAttribute('role');
    } else if (node.getAttribute) {
        role = node.getAttribute('role');
    } else if (node.attr) {
        role = node.attr('role');
    }

    roleTypes = Array.isArray(roleTypes) ? roleTypes : [roleTypes];
    return role && roleTypes.some(r => {
        return role.toLocaleLowerCase() === r.toLocaleLowerCase();
    });
}
