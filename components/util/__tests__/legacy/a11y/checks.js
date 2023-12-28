/* eslint-disable tsdoc/syntax */
/**
 * Test the `role` attribute of a node
 * @param { Array || String } roleTypes - ARIA Roles values that are to be checked against the desired nodes
 * @param { String || ReactWrapper || DOMComponent } nodeOrSelector - Either a component to query for the tag name, or a CSS selector to find the
 *                  node using the `rootNode` param
 * @param { ReactWrapper || DOMComponent } rootNode - (Optional) root node used to search for the desired node using the CSS selector from `nodeOrSelector`.
 *                  Required if `nodeOrSelector` is a string.
 * @returns { Boolean } Is the node's role attribute one of the values passed in `roleTypes`?
 */
const roleType = function(roleTypes, nodeOrSelector, rootNode) {
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
    return (
        role &&
        roleTypes.some(r => {
            return role.toLocaleLowerCase() === r.toLocaleLowerCase();
        })
    );
};

/**
 * Test the HTML tag of a node
 * @param { Array || String } names - HTML Tag element names that are to be checked against the desired nodes
 * @param { String || ReactWrapper || DOMComponent } nodeOrSelector - Either a component to query for the tag name, or a CSS selector to find the
 *                  node using the `rootNode` param
 * @param { ReactWrapper || DOMComponent } rootNode - (Optional) root node used to search for the desired node using the CSS selector from `nodeOrSelector`.
 *                  Required if `nodeOrSelector` is a string.
 * @returns { Boolean } Is the node one of the tag types passed in `names`?
 */
const tagName = function(names, nodeOrSelector, rootNode) {
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
};

/**
 * Test if the node is an h* tag or has role=heading
 * @param { String || ReactWrapper || DOMComponent } nodeOrSelector - Either a component to query for the tag name, or a CSS selector to find the
 *                  node using the `rootNode` param
 * @param { ReactWrapper || DOMComponent } rootNode - (Optional) root node used to search for the desired node using the CSS selector from `nodeOrSelector`.
 *                  Required if `nodeOrSelector` is a string.
 * @returns { Boolean }
 */
const isHeading = function(nodeOrSelector, rootNode) {
    return (
        tagName(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], nodeOrSelector, rootNode) ||
        roleType('heading', nodeOrSelector, rootNode)
    );
};

/**
 * Test if the node is a button tag or has role=button
 * @param { String || ReactWrapper || DOMComponent } nodeOrSelector - Either a component to query for the tag name, or a CSS selector to find the
 *                  node using the `rootNode` param
 * @param { ReactWrapper || DOMComponent } rootNode - (Optional) root node used to search for the desired node using the CSS selector from `nodeOrSelector`.
 *                  Required if `nodeOrSelector` is a string.
 * @returns { Boolean }
 */
const isButton = function(nodeOrSelector, rootNode) {
    return tagName('button', nodeOrSelector, rootNode) || roleType('button', nodeOrSelector, rootNode);
};

export {
    roleType,
    tagName,
    isButton,
    isHeading,
};
