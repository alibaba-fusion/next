
import assert from 'power-assert';
import Axe from 'axe-core';
import { mount } from 'enzyme';

const divId = 'a11y-root';

/**
 * Helper function for running a11y unit tests using axe-core
 *
 * @param {String} selector - css selector for element to test
 * @param {function} cb - callback function to call on success (normally will be `done` function)
 * @param {Object} options - options for axe tests
 *                 {Boolean} `incomplete` - should test error if there was an incomplete test? (not recommended)
 *                 {Object} `rules` - set properties for rules
 */
const test = function (selector, cb, options) {
    // disable `color-contrast` test by default when failing on incomplete tests. Can be overriden by setting `options.rules`
    if (options.incomplete && !options.rules) {
        options.rules = {
            'color-contrast': {
                enabled: false
            }
        };
    }

    Axe.run(selector, { rules: options.rules }, function(error, results) {
        assert(!error);

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
        cb();
    });
};

/**
 * Helper function for running a11y unit tests using axe-core
 *
 * @param {ReactDOM Element} node - React element to mount and run axe-core tests on
 * @param {function} cb - callback function to call on success (normally will be `done` function)
 * @param {Object} options - options for axe tests
 *                 {Boolean} `incomplete` - should test error if there was an incomplete test? (not recommended)
 *                 {Object} `rules` - set properties for rules
 */
const testReact = function (node, cb, options = {}) {
    const div = document.createElement('div');
    div.id = divId;
    document.body.appendChild(div);
    const wrapper = mount(node, { attachTo: div });

    test(`#${divId}`, cb, options);

    return wrapper;
};


const afterEach = function () {
    const div = document.querySelector(`#${divId}`);
    if (div) {
        div.remove();
    }
};

export default { test, testReact, afterEach };
