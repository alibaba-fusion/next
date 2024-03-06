/**
 * Test the `role` attribute of a node
 * @param roleTypes - ARIA Roles values that are to be checked against the desired nodes
 * @param selector - a CSS selector to find the node using the `rootNode` param
 * @param rootNode - (Optional) root node used to search for the desired node using the CSS selector from `selector`.
 * @returns Is the node's role attribute one of the values passed in `roleTypes`?
 */
export const roleType = function (
    roleTypes: string | string[],
    selector: string,
    rootNode: string = 'body'
): boolean {
    if (!selector || !roleTypes) {
        return false;
    }

    let role: string | null | undefined = null;

    roleTypes = Array.isArray(roleTypes) ? roleTypes : [roleTypes];
    roleTypes = roleTypes.map(r => r.toLocaleLowerCase());

    const node = document.querySelector(rootNode)?.querySelector(selector);
    if (!node) {
        return false;
    }
    role = node.getAttribute('role');
    return roleTypes.includes(role!.toLocaleLowerCase());
};

/**
 * Test the HTML tag of a node
 * @param names - HTML Tag element names that are to be checked against the desired nodes
 * @param selector - a CSS selector to find the node using the `rootNode` param
 * @param rootNode - (Optional) root node used to search for the desired node using the CSS selector from `selector`.
 * @returns Is the node one of the tag types passed in `names`?
 */
export const tagName = function (
    names: string | string[],
    selector: string,
    rootNode: string = 'body'
): boolean {
    if (!selector || !names) {
        return false;
    }
    names = Array.isArray(names) ? names : [names];
    names = names.map(n => n.toLocaleLowerCase());
    const node = document.querySelector(rootNode)?.querySelector(selector);
    if (!node) {
        return false;
    }
    return names.includes(node.tagName!.toLocaleLowerCase());
};
/**
 * Test if the node is an h* tag or has role=heading
 * @param selector - a CSS selector to find the node using the `rootNode` param
 * @param rootNode - (Optional) root node used to search for the desired node using the CSS selector from `selector`.
 */
export const isHeading = function (selector: string, rootNode: string): boolean {
    return (
        tagName(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], selector, rootNode) ||
        roleType('heading', selector, rootNode)
    );
};

/**
 * Test if the node is a button tag or has role=button
 * @param selector - a CSS selector to find the node using the `rootNode` param
 * @param rootNode - (Optional) root node used to search for the desired node using the CSS selector from `selector`.
 */
export const isButton = function (selector: string, rootNode: string): boolean {
    return tagName('button', selector, rootNode) || roleType('button', selector, rootNode);
};

export default {
    roleType,
    tagName,
    isButton,
    isHeading,
};
