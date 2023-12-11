import { ReactWrapper } from 'enzyme';

/**
 * Test the `role` attribute of a node
 * @deprecated use cy instead enzyme
 * @param { string | string[] } roleTypes - ARIA Roles values that are to be checked against the desired nodes
 * @param { string | ReactWrapper } nodeOrSelector - Either a component to query for the tag name, or a CSS selector to find the
 *                  node using the `rootNode` param
 * @param { ReactWrapper } rootNode - (Optional) root node used to search for the desired node using the CSS selector from `nodeOrSelector`.
 *                  Required if `nodeOrSelector` is a string.
 * @returns { boolean } Is the node's role attribute one of the values passed in `roleTypes`?
 */
const roleType = function (
    roleTypes: string | string[],
    nodeOrSelector: string | ReactWrapper | Element,
    rootNode: ReactWrapper
) {
    if (!nodeOrSelector || !roleTypes) {
        return false;
    }

    let node = nodeOrSelector;

    if (typeof node === 'string') {
        node = rootNode.find(node);
    }

    let role: string | null = null;

    // @ts-expect-error use property to judge type
    if (node.getDOMNode) {
        // @ts-expect-error use property to judge type
        role = node.getDOMNode().getAttribute('role');
        // @ts-expect-error use property to judge type
    } else if (node.getAttribute) {
        // @ts-expect-error use property to judge type
        role = node.getAttribute('role');
        // @ts-expect-error use property to judge type
    } else if (node.attr) {
        // @ts-expect-error use property to judge type
        role = node.attr('role');
    }

    roleTypes = Array.isArray(roleTypes) ? roleTypes : [roleTypes];
    return Boolean(
        role &&
            roleTypes.some(r => {
                return role!.toLocaleLowerCase() === r.toLocaleLowerCase();
            })
    );
};

/**
 * Test the HTML tag of a node
 * @deprecated use cy instead enzyme
 * @param { string | string[] } names - HTML Tag element names that are to be checked against the desired nodes
 * @param { string | ReactWrapper } nodeOrSelector - Either a component to query for the tag name, or a CSS selector to find the
 *                  node using the `rootNode` param
 * @param { ReactWrapper } rootNode - (Optional) root node used to search for the desired node using the CSS selector from `nodeOrSelector`.
 *                  Required if `nodeOrSelector` is a string.
 * @returns { boolean } Is the node one of the tag types passed in `names`?
 */
const tagName = function (
    names: string | string[],
    nodeOrSelector: string | ReactWrapper,
    rootNode: ReactWrapper
) {
    if (!nodeOrSelector || !names) {
        return false;
    }

    let node: typeof nodeOrSelector | Element = nodeOrSelector;

    if (typeof node === 'string') {
        node = rootNode.find(node);
    }
    if (node.getDOMNode) {
        node = node.getDOMNode();
    }

    names = Array.isArray(names) ? names : [names];
    return names.some(n => {
        return (node as Element).tagName.toLocaleLowerCase() === n.toLocaleLowerCase();
    });
};

/**
 * Test if the node is an h* tag or has role=heading
 * @deprecated use cy instead enzyme
 * @param { string | ReactWrapper } nodeOrSelector - Either a component to query for the tag name, or a CSS selector to find the
 *                  node using the `rootNode` param
 * @param { ReactWrapper } rootNode - (Optional) root node used to search for the desired node using the CSS selector from `nodeOrSelector`.
 *                  Required if `nodeOrSelector` is a string.
 * @returns { boolean }
 */
const isHeading = function (
    nodeOrSelector: string | ReactWrapper,
    rootNode: ReactWrapper
): boolean {
    return (
        tagName(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], nodeOrSelector, rootNode) ||
        roleType('heading', nodeOrSelector, rootNode)
    );
};

/**
 * Test if the node is a button tag or has role=button
 * @deprecated use cy instead enzyme
 * @param { string | ReactWrapper } nodeOrSelector - Either a component to query for the tag name, or a CSS selector to find the
 *                  node using the `rootNode` param
 * @param { ReactWrapper } rootNode - (Optional) root node used to search for the desired node using the CSS selector from `nodeOrSelector`.
 *                  Required if `nodeOrSelector` is a string.
 * @returns { boolean }
 */
const isButton = function (nodeOrSelector: string | ReactWrapper, rootNode: ReactWrapper): boolean {
    return (
        tagName('button', nodeOrSelector, rootNode) || roleType('button', nodeOrSelector, rootNode)
    );
};

export default {
    roleType,
    tagName,
    isButton,
    isHeading,
};
