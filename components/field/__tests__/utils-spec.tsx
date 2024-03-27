import React, { Component } from 'react';
import { cloneAndAddKey, scrollToFirstError } from '../utils';

describe('Field Utils', () => {
    describe('cloneAndAddKey', () => {
        it('should return a cloned element with `error` key when no key set', () => {
            const el = <span>message 1</span>;
            const result = cloneAndAddKey(el);
            assert.equal(el.key, null);
            assert.equal(result.key, 'error');
            assert.equal(result.props.children, 'message 1');
        });

        it('should return a cloned element with same key value if already set', () => {
            const el = <span key="messageError">message 1</span>;
            const result = cloneAndAddKey(el);
            assert.equal(el.key, 'messageError');
            assert.equal(result.key, 'messageError');
            assert.equal(result.props.children, 'message 1');
        });
    });
    describe('scrollToFirstError', () => {
        class Demo extends Component<{ text: string }> {
            render() {
                return (
                    <div>
                        <input data-key={this.props.text} />
                    </div>
                );
            }
        }
        function createRenderDemo() {
            const instance: Record<string, Demo | null> = {};
            let count = 1;
            function renderDemo() {
                const key = `${count++}`;
                return (
                    <Demo
                        text={key}
                        ref={ins => {
                            instance[key] = ins;
                        }}
                    />
                );
            }
            return {
                renderDemo,
                instance,
            };
        }
        it('usual', () => {
            const { instance, renderDemo } = createRenderDemo();
            cy.mount(
                <div style={{ height: 300, overflow: 'auto' }}>
                    <div style={{ height: 400 }}></div>
                    {renderDemo()}
                    <div style={{ height: 400 }}></div>
                </div>
            );
            cy.get('input').should('not.be.visible');
            cy.then(() => {
                scrollToFirstError({
                    errorsGroup: { 1: { errors: ['error'] } },
                    instance,
                    options: { scrollToFirstError: true },
                });
                cy.get('input').should('be.visible');
            });
        });
        it('should scroll to the first error element', () => {
            const { instance, renderDemo } = createRenderDemo();
            cy.mount(
                <div style={{ height: 300, overflow: 'auto' }}>
                    <div style={{ height: 400 }}></div>
                    {renderDemo()}
                    <div style={{ height: 400 }}></div>
                    {renderDemo()}
                    <div style={{ height: 400 }}></div>
                </div>
            );
            cy.get('input[data-key="1"]').should('not.be.visible');
            cy.get('input[data-key="2"]').should('not.be.visible');
            cy.then(() => {
                scrollToFirstError({
                    errorsGroup: { 1: { errors: ['error'] }, 2: { errors: ['error'] } },
                    instance,
                    options: { scrollToFirstError: true },
                });
                cy.get('input[data-key="1"]').should('be.visible');
                cy.get('input[data-key="2"]').should('not.be.visible');
            });
        });
        it('should not move when the element is already visible', () => {
            const { instance, renderDemo } = createRenderDemo();
            cy.mount(
                <div style={{ height: 300, overflow: 'auto' }}>
                    <div style={{ height: 200 }}></div>
                    {renderDemo()}
                    <div style={{ height: 400 }}></div>
                </div>
            );
            cy.get('input').should('be.visible');
            let offsetTop = 0;
            cy.get('input').then(el => {
                offsetTop = el.scrollTop()!;
            });
            cy.then(() => {
                scrollToFirstError({
                    errorsGroup: { 1: { errors: ['error'] } },
                    instance,
                    options: { scrollToFirstError: true },
                });
                cy.get('input').should('be.visible');
                cy.get('input').then(el => {
                    cy.wrap(offsetTop).should('eq', el.scrollTop());
                });
            });
        });
    });
});
