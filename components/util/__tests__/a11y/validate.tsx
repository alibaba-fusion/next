import React, { ReactElement } from 'react';
import Axe, { Result, ElementContext, AxeResults } from 'axe-core';

export const A11Y_ROOT_ID = 'A11Y-ROOT-ID';

/**
 * Format the results of axe-core violations for easier debugging
 * @param violations - violations from results.violations returned from running axe-core
 * @param verbose - should only the most important data be printed?
 */
function formatViolations(violations: Result[], verbose: boolean = false) {
    let formatted: unknown = violations;
    if (!verbose) {
        formatted = violations.map(v => {
            return {
                id: v.id,
                description: v.description,
                helpUrl: v.helpUrl,
                nodes: v.nodes.map(node => ({
                    html: node.html,
                    failureSummary: node.failureSummary,
                })),
            };
        });
    }
    return JSON.stringify(formatted, null, 2);
}

function delay(duration: number) {
    return new Promise(res => {
        setTimeout(res, duration);
    });
}

interface A11yTestOptions {
    rules?: object;
    debug?: boolean;
    incomplete?: boolean;
}

/**
 * Run Axe-core tests on a dom node
 *
 * @param selector - css selector for element to test
 * @param options - options for axe tests
 * `incomplete` - should test error if there was an incomplete test? (not recommended)
 * `rules` - set properties for rules
 * @returns results object from Axe.run
 */
export const test = function (selector: ElementContext, options: A11yTestOptions = {}) {
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
        .then((results: AxeResults) => {
            if (options.debug) {
                // eslint-disable-next-line no-console
                console.error(formatViolations(results.violations, true));
                return;
            }

            if (results.violations.length) {
                // eslint-disable-next-line no-console
                console.error(formatViolations(results.violations));
            }

            assert(results.violations.length === 0);

            if (options.incomplete) {
                if (results.incomplete.length) {
                    // eslint-disable-next-line no-console
                    console.error(formatViolations(results.incomplete));
                }
                assert(results.incomplete.length === 0);
            }
        });
};

/**
 * Create a DOM element and attach to the document body
 * @param id - id to set on the wrapper div
 */
export const createContainer = function (id: string) {
    const container = document.createElement('div');
    container.id = id;
    document.body.appendChild(container);
    return container;
};

/**
 * Mount a ReactDOM Element to the dom
 * @param node - React element to mount and run axe-core tests on
 * @param id - id to set on the wrapper div, defaults to a11y root id
 */
export const mountReact = function (node: ReactElement, id = A11Y_ROOT_ID) {
    return cy.mount(<div id={id}>{node}</div>);
};

/**
 * Run Axe-core tests on a React element
 * @param node - React element to mount and run axe-core tests on
 * @param options - options for axe tests
 * `incomplete` - should test error if there was an incomplete test? (not recommended)
 * `rules` - set properties for rules
 */
export const testReact = async function (
    node: ReactElement,
    options: A11yTestOptions & { delay?: number } = {}
) {
    await new Promise<unknown>(resolve => {
        mountReact(node, A11Y_ROOT_ID).then(resolve);
    });

    if (options.delay) {
        await delay(options.delay);
    }
    await test(`#${A11Y_ROOT_ID}`, options);
};

/**
 * @deprecated unmount is unnecessary when use cy.mount
 * Helper function to use with `testReact` to unmount a dom node, defaults to the root a11y node
 */
export const unmount = function (id = A11Y_ROOT_ID) {
    const root = document.querySelector(`#${id}`);
    if (root) {
        root.remove();
    }
};
