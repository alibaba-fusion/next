
import assert from 'power-assert';
import Axe from 'axe-core';
import { mount } from 'enzyme';

const divId = 'a11y-root';

/**
 * Run Axe-core tests on a dom node
 *
 * @param {String} selector - css selector for element to test
 * @param {Object} options - options for axe tests
 *                 {Boolean} `incomplete` - should test error if there was an incomplete test? (not recommended)
 *                 {Object} `rules` - set properties for rules
 * @returns {Promise} results object from Axe.run
 */
export const test = function (selector, options = {}) {
    // disable `color-contrast` test by default. Can be overriden by setting `options.rules['color-contrast']`
    options.rules = Object.assign({
        'color-contrast': {
            enabled: false
        }
    }, options.rules);

    return Axe.run(selector, { rules: options.rules })
        .catch((error) => {
            assert(!error);
        })
        .then((results) => {
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
 * Mount a ReactDOM Element to the dom
 *
 * @param {ReactDOM Element} node - React element to mount and run axe-core tests on
 * @param {String} id - id to set on the wrapper div
 * @param {Promise} wrapper of the react component
 */
export const mountReact = async function (node, id) {
    const div = document.createElement('div');
    div.id = id || divId;
    document.body.appendChild(div);
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
export const testReact = async function (node, options = {}) {
    const wrapper = mountReact(node, divId);
    await test(`#${divId}`, options);
    return wrapper;
};


/**
 * Helper function to use with `testReact` to unmount the div wrapper
 */
export const afterEach = function () {
    const div = document.querySelector(`#${divId}`);
    if (div) {
        div.remove();
    }
};
