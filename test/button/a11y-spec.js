import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../src/button/index';
import '../../src/button/style';
import { afterEach as a11yAfterEach, testReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });


/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Button A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        a11yAfterEach();
    });

    it('should not have any violations when default', async () => {
        wrapper = await testReact(<div>
            <Button type="normal">Normal</Button> &nbsp;&nbsp;
            <Button type="normal" disabled>Normal</Button> &nbsp;&nbsp;
            <Button type="primary">Prirmary</Button> &nbsp;&nbsp;
            <Button type="primary" disabled>Prirmary</Button> &nbsp;&nbsp;
            <Button type="secondary">Secondary</Button> &nbsp;&nbsp;
            <Button type="secondary" disabled>Secondary</Button>
        </div>);
        return wrapper;
    });

    it('should not have any violations when text buttons', async () => {
        wrapper = await testReact(<div>
            <Button type="normal" text>Normal</Button> &nbsp;&nbsp;
            <Button type="normal" text disabled>Normal</Button> &nbsp;&nbsp;
            <Button type="primary" text>Normal</Button> &nbsp;&nbsp;
            <Button type="primary" text disabled> Prirmary</Button> &nbsp;&nbsp;
            <Button type="secondary" text>Normal</Button> &nbsp;&nbsp;
            <Button type="secondary" text disabled>Secondary</Button>
        </div>);
        return wrapper;
    });

    it('should not have any violations when warning buttons', async () => {
        wrapper = await testReact(<div>
            <Button type="normal" warning>Normal</Button> &nbsp;&nbsp;
            <Button type="normal" warning disabled>Prirmary</Button> &nbsp;&nbsp;
            <Button type="primary" warning>Prirmary</Button> &nbsp;&nbsp;
            <Button type="primary" warning disabled>Prirmary</Button> &nbsp;&nbsp;
        </div>);
        return wrapper;
    });

    it('should not have any violations when anchor tag', async () => {
        const props = {
            component: 'a',
            href: 'http://www.alibaba.com',
            target: '_blank'
        };
        wrapper = await testReact(<Button {...props}>alibaba</Button>);
        return wrapper;
    });

    it('should not have any violations when ghost', async () => {
        wrapper = await testReact(<div>
            <Button ghost="light">Ghost light</Button> &nbsp;&nbsp;
            <Button ghost="light" disabled>Ghost light</Button> &nbsp;&nbsp;
            <Button ghost="dark">Ghost dark</Button> &nbsp;&nbsp;
            <Button ghost="dark" disabled>Ghost dark</Button>
        </div>);
        return wrapper;
    });

    it('should not have any violations when in a Button Group', async () => {
        wrapper = await testReact(
            <Button.Group>
                <Button type="primary">OK</Button>
                <Button type="secondary">Cancel</Button>
            </Button.Group>
        );
        return wrapper;
    });

    it('should not have any violations when loading', async () => {
        wrapper = await testReact(<Button type="secondary" loading>Loading</Button>);
        return wrapper;
    });

    it('should not have any violations when various sizes', async () => {
        wrapper = await testReact(<div>
            <Button type="primary" size="large">Large</Button>&nbsp;&nbsp;
            <Button type="primary">Medium</Button>&nbsp;&nbsp;
            <Button type="primary" size="small">Small</Button>
            <br />
            <br />
            <Button.Group size="large">
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </Button.Group>
        </div>);
        return wrapper;
    });
});
