<p align="center">
  <a href="https://fusion.design/">
    <img alt="Fusion" src="https://img.alicdn.com/tfs/TB1YsoiHVzqK1RjSZFCXXbbxVXa-159-99.svg" width="200">
  </a>
</p>

---

# Writing Unit tests

## A11y Tests

To ensure Next components maintain a standard of a11y we run `axe-core` a11y tests. We have created a suite of utility functions to help and the below examples should cover the majority of testing situations. The utility functions are well documented in `test/a11y/validate.js` and `test/a11y/checks.js`.

### Basics

#### Template

```
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import __Component__ from '../../src/__component__/index'; // <----- Component Import
import '../../src/__component__/style'; // <---- Import styles (important for a11y)
import { unmount, testReact } from '../util/a11y/validate'; // <---- a11y helpers

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('__Component__ A11y', () => {

    let wrapper; // <---- keep a reference to the wrapper for unmounting

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount(); // <---- unmount the react element if it still exists
            wrapper = null;
        }
        unmount(); // <---- call the a11y util unmounting to clean up the DOM
    });

    it('should ...', async () => { ... });

});
```

#### Styles

In addition to the component, you must import the styles so `axe-core` can give accurate tests for color contrast and CSS media query tests.

#### Mounting and Unmounting

`axe-core` testing relies on rendered HTML in the DOM. This means there must be a mounting directly to the DOM and an unmounting when the test is over. To make that easier you can use `mountReact()` to mount the React element with the test, and then call `unmount()` inside `afterEach` to clean up.

### Examples

#### Pure Component

For simple components with no behavior (e.g. Paragraph)

```
it('should not have any violations', async () => { // <---- tests are promise based
    wrapper = await testReact( // <---- `restReact` calls the test functions and returns the a reference to the React element for unmounting
        <__Component__> </__Component__>
    );
    return wrapper;
});

```

#### Overlays, Gateways, and Content Rendered outside the parent

Its common to have components render content outside of the parent, mainly through use with the `Overlay` component. Special care needs to be taken for testing, both to test everything and to properly clean up. For specific examples see the `Balloon` and `Dialog` components.

```
import {
    test,
    testReact,
    unmount,
    createContainer,
} from '../util/a11y/validate';

const portalContainerId = 'a11y-portal-id';
let portalContainer;

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        if (portalContainer) {
            portalContainer.remove(); //<---- must remove the portal container as it is mounted directly to the document body
        }

        unmount();
    });

    it('should not have any violations', async function() {
        portalContainer = createContainer(portalContainerId); // <---- Create and mount the node to be used as the mounting point for the portal
        wrapper = await testReact( // <---- 2 tests, this mounts and tests the outer node
            <COMPONENT visible container={portalContainer}> // <---- pass the container node
                <div>Hello World</div>
            </COMPONENT>
        );
        return test(portalContainer);
    });
});


```
