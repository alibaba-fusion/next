/**
 * Test the HTML tag of a node
 * @param { Array || String } names - HTML Tag element names that are to be checked against the desired nodes
 * @param { String || ReactWrapper || DOMComponent } nodeOrSelector - Either a component to query for the tag name, or a CSS selector to find the
 *                  node using the `rootNode` param
 * @param { ReactWrapper || DOMComponent } rootNode - (Optional) root node used to search for the desired node using the CSS selector from `nodeOrSelector`.
 *                  Required if `nodeOrSelector` is a string.
 * @returns { Boolean } Is the node one of the tag types passed in `names`?
 */

export default function(names, nodeOrSelector, rootNode) {
    if (!nodeOrSelector || !names) {
        return false;
    }

    let node = nodeOrSelector;

    if (typeof node === 'string') {
        node = rootNode.find(node);
    }
    if (node.getDOMNode) {
        node = node.getDOMNode();
    }

    names = Array.isArray(names) ? names : [names];
    return names.some(n => {
        return node.tagName.toLocaleLowerCase() === n.toLocaleLowerCase();
    });
}
