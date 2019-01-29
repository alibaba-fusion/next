import tagName from './tagName';
import roleType from './roleType';

/**
 * Test if the node is an h* tag or has role=heading
 * @param { String || ReactWrapper || DOMComponent } nodeOrSelector - Either a component to query for the tag name, or a CSS selector to find the
 *                  node using the `rootNode` param
 * @param { ReactWrapper || DOMComponent } rootNode - (Optional) root node used to search for the desired node using the CSS selector from `nodeOrSelector`.
 *                  Required if `nodeOrSelector` is a string.
 * @returns { Boolean }
 */

export default function(nodeOrSelector, rootNode) {
    return tagName(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], nodeOrSelector, rootNode) || roleType('heading', nodeOrSelector, rootNode);
}
