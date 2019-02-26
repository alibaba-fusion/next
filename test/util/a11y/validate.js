import assert from 'power-assert';
import Axe from 'axe-core';
import { mount } from 'enzyme';

export const A11Y_ROOT_ID = 'A11Y-ROOT-ID';

/**
 * Run Axe-core tests on a dom node
 *
 * @param {String || DOM Node} selector - css selector for element to test
 * @param {Object} options - options for axe tests
 *                 {Boolean} `incomplete` - should test error if there was an incomplete test? (not recommended)
 *                 {Object} `rules` - set properties for rules
 * @returns {Promise} results object from Axe.run
 */
export const test = function(selector, options = {}) {
    // disable `color-contrast` test by default. Can be overriden by setting `options.rules['color-contrast']`
    options.rules = Object.assign(
        {
            'color-contrast': {
                enabled: false,
            },
        },
        options.rules
    );

    return Axe.run(selector, { rules: options.rules })
        .catch(error => {
            assert(!error);
        })
        .then(results => {
            if (results.violations.length) {
                // eslint-disable-next-line no-console
                console.error(JSON.stringify(results.violations));
            }

            assert(results.violations.length === 0);

            if (options.incomplete) {
                if (results.incomplete.length) {
                    // eslint-disable-next-line no-console
                    console.error(results.incomplete);
                }
                assert(results.incomplete.length === 0);
            }
        });
};

/**
 * Create a DOM element and attach to the document body
 * @param {String} id - id to set on the wrapper div
 * @param {DOM Element}
 */
export const createContainer = function(id) {
    const container = document.createElement('div');
    container.id = id;
    document.body.appendChild(container);
    return container;
};

/**
 * Mount a ReactDOM Element to the dom
 *
 * @param {ReactDOM Element} node - React element to mount and run axe-core tests on
 * @param {String} id - id to set on the wrapper div, defaults to a11y root id
 * @param {Promise} wrapper of the react component
 */
export const mountReact = async function(node, id = A11Y_ROOT_ID) {
    const div = createContainer(id);
    const wrapper = mount(node, { attachTo: div });
    return wrapper;
};

/**
 * Run Axe-core tests on a React element
 *
 * @param {ReactDOM Element} node - React element to mount and run axe-core tests on
 * @param {Object} options - options for axe tests
 *                 {Boolean} `incomplete` - should test error if there was an incomplete test? (not recommended)
 *                 {Object} `rules` - set properties for rules
 * @param {Promise} wrapper of the react component
 */
// TODO: resolve issue where failing tests do not pass wrapper and so cannot be cleaned up correctly
export const testReact = async function(node, options = {}) {
    const wrapper = mountReact(node, A11Y_ROOT_ID);
    await test(`#${A11Y_ROOT_ID}`, options);
    return wrapper;
};

/**
 * Helper function to use with `testReact` to unmount a dom node, defaults to the root a11y node
 */
export const unmount = function(id = A11Y_ROOT_ID) {
    const root = document.querySelector(`#${id}`);
    if (root) {
        root.remove();
    }
};
