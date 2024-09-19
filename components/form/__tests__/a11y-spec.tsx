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

    it('should not have any violations', async () => {
        await testReact(<Form />);
    });

    it('should not have any violations for Form.Submit and Form.Reset', async () => {
        await testReact(
            <Form>
                <Form.Submit>submit</Form.Submit>
                <Form.Reset>reset</Form.Reset>
            </Form>
        );
    });

    it('should not have any violations for Form.Error', async () => {
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

    it('should not have any violations for Form.Item with inset label', async () => {
        await testReact(
            <Form>
                <FormItem id="formItem" label="a11y form item">
                    <Input id="formItem" aria-label="a11y input required" />
                </FormItem>
            </Form>
        );
    });

    it('should not have any violations for Form.Item', async () => {
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
