import React, { type ReactElement } from 'react';
import { type MountReturn } from 'cypress/react';
import Checkbox from '../index';

const CheckboxGroup = Checkbox.Group;

const list = [
    {
        value: 'apple',
        label: '苹果',
    },
    {
        value: 'pear',
        label: '梨',
    },
    {
        value: 'orange',
        label: '橙子',
    },
];

describe('Checkbox.Group', () => {
    describe('[render] control', () => {
        it('should contain `pear`', () => {
            cy.mount(<CheckboxGroup value={['pear']} dataSource={list} />);
            cy.get('.next-checkbox-wrapper.checked').should('have.text', '梨');
        });

        it('should have three children with mock data', () => {
            cy.mount(<CheckboxGroup value={['pear']} dataSource={list} />);
            cy.get('.next-checkbox-wrapper').should('have.length', 3);
        });

        it('should support null child', () => {
            cy.mount(
                <CheckboxGroup>
                    <Checkbox>1</Checkbox>
                    <Checkbox>2</Checkbox>
                    {null}
                </CheckboxGroup>
            );
            cy.get('.next-checkbox-wrapper').should('have.length', 2);
        });
    });

    describe('[render] uncontrolled', () => {
        it('should have three children with mock data', () => {
            cy.mount(<CheckboxGroup defaultValue={['apple']} dataSource={list} />);
            cy.get('.next-checkbox-wrapper').should('have.length', 3);
        });
    });

    describe('[render] nest', () => {
        it('should contain `pear` and `watermelon`', () => {
            cy.mount(
                <CheckboxGroup value={['pear', 'watermelon']}>
                    <Checkbox id="apple" value="apple" className="apple">
                        苹果
                    </Checkbox>
                    <Checkbox id="pear" value="pear">
                        梨子
                    </Checkbox>
                    <Checkbox id="watermelon" value="watermelon">
                        西瓜
                    </Checkbox>
                </CheckboxGroup>
            );
            cy.get('.next-checkbox-wrapper.checked').eq(0).should('have.text', '梨子');
            cy.get('.next-checkbox-wrapper.checked').eq(1).should('have.text', '西瓜');
        });

        it('should have two children with nest <Checkbox />', () => {
            cy.mount(
                <CheckboxGroup value={['watermelon']}>
                    <Checkbox id="apple" value="apple" disabled>
                        苹果
                    </Checkbox>
                    <Checkbox id="pear" value="pear">
                        梨子
                    </Checkbox>
                    <Checkbox id="watermelon" value="watermelon">
                        西瓜
                    </Checkbox>
                </CheckboxGroup>
            );
            cy.get('.next-checkbox-wrapper').should('have.length', 3);
            cy.get('.next-checkbox-wrapper.disabled').should('have.length', 1);
        });
    });

    describe('[events] simulate change', () => {
        it('should call `onChange`', () => {
            // const onChange = sinon.spy();
            const onChange = cy.spy().as('onChange');
            cy.mount(<CheckboxGroup onChange={onChange} value={['pear']} dataSource={list} />);
            cy.get('input').eq(0).click();
            cy.get('@onChange').should('be.calledOnce');

            const onChange1 = cy.spy().as('onChange1');
            cy.mount(<CheckboxGroup onChange={onChange1} dataSource={list} />);
            cy.get('input').eq(0).click();
            cy.get('@onChange1').should('be.calledOnce');
        });
    });

    describe('[behavior] controlled', () => {
        it('should support controlled `value`', () => {
            cy.mount(<CheckboxGroup value={['pear']} dataSource={list} />).as('Demo');

            cy.get('.next-checkbox-wrapper.checked').should('have.text', '梨');

            cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
                return rerender(
                    React.cloneElement(component as ReactElement, { value: ['apple'] })
                );
            });

            cy.get('.next-checkbox-wrapper.checked').should('have.text', '苹果');

            cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
                return rerender(React.cloneElement(component as ReactElement, { value: 'orange' }));
            });

            cy.get('.next-checkbox-wrapper.checked').should('have.text', '橙子');

            cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
                return rerender(React.cloneElement(component as ReactElement, { value: null }));
            });

            cy.get('.next-checkbox-wrapper.checked').should('have.length', 0);
        });

        it('should support controlled `disabled`', () => {
            cy.mount(<CheckboxGroup disabled={false} value={['pear']} dataSource={list} />).as(
                'Demo'
            );

            cy.get('.next-checkbox-group').should('not.have.class', 'disabled');

            cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
                return rerender(React.cloneElement(component as ReactElement, { disabled: true }));
            });

            cy.get('.next-checkbox-group').should('have.class', 'disabled');
        });
    });
    describe('value === undefined', () => {
        it('should support value === undefined', () => {
            cy.mount(<CheckboxGroup value={['pear']} dataSource={list} />).as('Demo');
            cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
                return rerender(
                    React.cloneElement(component as ReactElement, { value: undefined })
                );
            });
            cy.get('.next-checkbox-wrapper.checked').should('have.length', 0);
            cy.mount(<CheckboxGroup value={undefined} dataSource={list} />);
            cy.get('.next-checkbox-wrapper.checked').should('have.length', 0);
        });
    });
    describe('value === 0', () => {
        it('should support value === 0', () => {
            cy.mount(
                <CheckboxGroup
                    defaultValue={0}
                    dataSource={[
                        { value: 0, label: '0' },
                        { value: 1, label: '1' },
                    ]}
                />
            ).as('Demo');
            cy.get('.next-checkbox-wrapper.checked').should('have.text', 0);
            cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
                return rerender(React.cloneElement(component as ReactElement, { value: 1 }));
            });
            cy.get('.next-checkbox-wrapper.checked').should('have.text', 1);
        });
    });

    describe("should respect children's indeterminate state", () => {
        it('should support value === 0', () => {
            cy.mount(
                <CheckboxGroup>
                    <Checkbox defaultIndeterminate>1</Checkbox>
                </CheckboxGroup>
            );
            cy.get('.indeterminate').should('have.length', 1);
            cy.mount(
                <CheckboxGroup>
                    <Checkbox indeterminate>1</Checkbox>
                </CheckboxGroup>
            );
            cy.get('.indeterminate').should('have.length', 1);
        });
    });

    describe('render in preview mode', () => {
        it('should isPreview', () => {
            cy.mount(<CheckboxGroup isPreview defaultValue={['apple']} dataSource={list} />);
            cy.get('.next-form-preview').should('have.text', '苹果');
        });

        it('should renderPreview', () => {
            cy.mount(
                <CheckboxGroup
                    isPreview
                    renderPreview={() => 'checkbox preview'}
                    defaultValue={0}
                    dataSource={list}
                />
            );
            cy.get('.next-form-preview').should('have.text', 'checkbox preview');
        });
    });
    it('value support bool`', () => {
        const handleChange = cy.spy().as('handleChange');
        cy.mount(
            <CheckboxGroup
                onChange={handleChange}
                dataSource={[
                    {
                        value: false,
                        label: '苹果',
                    },
                    {
                        value: true,
                        label: '橙子',
                    },
                ]}
            />
        );
        cy.get('input').eq(1).click();
        cy.get('@handleChange').should('be.calledWith', [true]);
        cy.get('input').eq(0).click();
        cy.get('@handleChange').should('be.calledWith', [true, false]);
    });
});
