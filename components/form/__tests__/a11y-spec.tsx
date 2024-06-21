import React from 'react';

import Form from '../index';
import Input from '../../input/index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

const FormItem = Form.Item;

describe('Form A11y', () => {
    it('should not have any violations for Form.Item', async () => {
        await testReact(
            <FormItem>
                <Input id="form input" label="a11y form input" />
            </FormItem>
        );
    });

    // TODO: `aria-allowed-role` - forms cannot have role=grid - https://www.w3.org/TR/html-aria/#form
    it.skip('should not have any violations', async () => {
        await testReact(<Form />);
    });

    // TODO: role=grid
    it.skip('should not have any violations for Form.Submit and Form.Reset', async () => {
        await testReact(
            <Form>
                <Form.Submit>submit</Form.Submit>
                <Form.Reset>reset</Form.Reset>
            </Form>
        );
    });

    // TODO: add a11y to Form.Error - role=alert
    it.skip('should not have any violations for Form.Error', async () => {
        await testReact(
            <Form>
                <FormItem>
                    <Input
                        id="form input"
                        label="form input"
                        placeholder="Input frank"
                        name="username"
                    />
                    <Form.Error name="username">Username Error</Form.Error>
                </FormItem>
            </Form>
        );
    });

    // TODO: Input id - default logic should copy the `id` from `FormItem` to `Input`, or should have documentation making logic clear.
    //       Nested Labels - FormItem creates a Label and passes it down to Input, which wraps it in another Label, which shouldn't happen.
    it.skip('should not have any violations for Form.Item with inset label', async () => {
        await testReact(
            <Form labelAlign="inset">
                <FormItem id="formItem" label="a11y form item">
                    <Input id="formItem" />
                </FormItem>
            </Form>
        );
    });

    // TODO: role=grid
    it.skip('should not have any violations for Form.Item', async () => {
        await testReact(
            <Form>
                <FormItem validateState="success">
                    <Input id="success" label="a11y input success" />
                </FormItem>
                <FormItem validateState="loading">
                    <Input id="loading" label="a11y loading" />
                </FormItem>
                <FormItem type="email" format="email">
                    <Input name="email" id="email" label="a11y email" />
                </FormItem>
                <FormItem required>
                    <Input
                        id="required"
                        label="a11y required"
                        name="name"
                        defaultValue="frank"
                        aria-label="a11y input required"
                    />
                </FormItem>
            </Form>
        );
    });
});
