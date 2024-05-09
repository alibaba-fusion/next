import React, { cloneElement, createRef, type FC, type ReactElement } from 'react';
import type { MountReturn } from 'cypress/react';
import Radio, { type RadioValueItem } from '../index';
import '../style';

const RadioGroup = Radio.Group;

describe('Radio.Group', () => {
    let list: RadioValueItem[], numberList: RadioValueItem[];
    beforeEach('mock data', () => {
        list = [
            {
                value: 'apple',
                label: '苹果',
                disabled: true,
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
        numberList = [
            {
                value: 0,
                label: '0',
                disabled: true,
            },
            {
                value: 1,
                label: '1',
            },
            {
                value: 2,
                label: '2',
            },
        ];
    });
    describe('[render] control', () => {
        it('should contain `apple`', () => {
            cy.mount(<RadioGroup value={'apple'} dataSource={list} />);
            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '苹果');
        });

        it('should have three children with mock data', () => {
            cy.mount(<RadioGroup dataSource={numberList} />);
            cy.get('.next-radio').should('have.length', 3);
            cy.get('.next-radio.disabled').should('have.length', 1);
        });
    });

    describe('[render] uncontrol', () => {
        it('should have three children with mock data', () => {
            cy.mount(<RadioGroup defaultValue={'pear'} dataSource={list} />);
            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '梨');
            cy.get('.next-radio-group').children().should('have.length', 3);
        });
    });

    describe('[render] nest', () => {
        it('should contain `pear` and `watermelon`', () => {
            cy.mount(
                <RadioGroup value="watermelon">
                    <Radio id="apple" value="apple" className="apple">
                        苹果
                    </Radio>
                    <Radio id="pear" value="pear">
                        梨子
                    </Radio>
                    <Radio id="watermelon" value="watermelon">
                        西瓜
                    </Radio>
                </RadioGroup>
            );
            cy.get('input#pear').should('exist');
            cy.get('input#watermelon').should('exist');
            cy.get('.next-radio.checked input#watermelon').should('exist');
        });

        it('should have two children with nest <Radio />', () => {
            cy.mount(
                <RadioGroup value="watermelon">
                    <Radio id="apple" value="apple" disabled>
                        苹果
                    </Radio>
                    <Radio id="pear" value="pear">
                        梨子
                    </Radio>
                    <Radio id="watermelon" value="watermelon">
                        西瓜
                    </Radio>
                </RadioGroup>
            );
            cy.get('.next-radio-group').children().should('have.length', 3);
            cy.get('.next-radio.disabled').should('have.length', 1);
        });
    });

    describe('[render] button shape', () => {
        describe('button size', () => {
            it('should be 20px height when small', () => {
                cy.mount(
                    <RadioGroup
                        shape="button"
                        size="small"
                        defaultValue={'apple'}
                        dataSource={list}
                    />
                );
                cy.get('.next-radio-wrapper').eq(0).should('have.prop', 'offsetHeight', 20);
            });
            it('should be 28px height when medium', () => {
                cy.mount(
                    <RadioGroup
                        shape="button"
                        size="medium"
                        defaultValue={'apple'}
                        dataSource={list}
                    />
                );
                cy.get('.next-radio-wrapper').eq(0).should('have.prop', 'offsetHeight', 28);
            });
            it('should be 40px height when large', () => {
                cy.mount(
                    <RadioGroup
                        shape="button"
                        size="large"
                        defaultValue={'apple'}
                        dataSource={list}
                    />
                );
                cy.get('.next-radio-wrapper').eq(0).should('have.prop', 'offsetHeight', 40);
            });
        });

        describe('tagName', () => {
            it('should be div when default', () => {
                cy.mount(
                    <RadioGroup
                        shape="button"
                        size="large"
                        defaultValue={'apple'}
                        dataSource={list}
                    />
                );
                cy.get('div.next-radio-group').should('exist');
            });
            it('should be footer', () => {
                cy.mount(
                    <RadioGroup
                        component="footer"
                        shape="button"
                        size="large"
                        defaultValue={'apple'}
                        dataSource={list}
                    />
                );
                cy.get('footer.next-radio-group').should('exist');
            });
            it('should be special-name', () => {
                const Footer: FC = ({ children }) => <div className="special-name">{children}</div>;
                cy.mount(
                    <RadioGroup
                        component={Footer}
                        shape="button"
                        size="large"
                        defaultValue={'apple'}
                        dataSource={list}
                    />
                );
                cy.get('.special-name').should('exist');
            });
        });
    });

    describe('[events] simulate change', () => {
        it('should call `onChange`', () => {
            const onChange = cy.spy();
            cy.mount(<RadioGroup onChange={onChange} value={'pear'} dataSource={list} />);
            cy.get('input').eq(2).check();
            cy.then(() => {
                cy.wrap(onChange).should('be.calledOnce');
                cy.wrap(onChange.firstCall.args[0]).should('eq', 'orange');
            });
        });
    });
    describe('disabled && value === undefined', () => {
        it('should support disabled', () => {
            cy.mount(<RadioGroup defaultValue={0} dataSource={numberList} disabled />);
            cy.get('.next-radio-group.disabled').should('exist');
            // click will change nothing when disabled
            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '0');
            cy.get('.next-radio-wrapper').eq(1).click();
            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '0');
        });
        it('should support value === undefined', () => {
            cy.mount(<RadioGroup defaultValue={0} dataSource={numberList} />).as('radio');
            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '0');
            cy.get<MountReturn>('@radio').then(({ rerender, component }) => {
                return rerender(cloneElement(component as ReactElement, { value: undefined }));
            });
            cy.get('.next-radio-wrapper.checked').should('not.exist');
        });
    });
    describe('[behavior] controlled', () => {
        it('should support controlled `value`', () => {
            cy.mount(<RadioGroup value={'pear'} dataSource={list} />).as('radio');
            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '梨');

            cy.get<MountReturn>('@radio').then(({ component, rerender }) => {
                return rerender(cloneElement(component as ReactElement, { value: 'apple' }));
            });
            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '苹果');
        });

        it('should support controlled `disabled`', () => {
            cy.mount(<RadioGroup disabled={false} value={'pear'} dataSource={list} />).as('radio');
            cy.get('.next-radio-group.disabled').should('not.exist');
            cy.get('.next-radio.disabled').should('have.length', 1);
            cy.get<MountReturn>('@radio').then(({ component, rerender }) => {
                return rerender(cloneElement(component as ReactElement, { disabled: true }));
            });
            cy.get('.next-radio-group.disabled').should('exist');

            cy.get<MountReturn>('@radio').then(({ component, rerender }) => {
                return rerender(
                    cloneElement(component as ReactElement, { disabled: true, value: undefined })
                );
            });
            cy.get('.next-radio-group.disabled').should('exist');
            cy.get('.next-radio.disabled').should('have.length', list.length);
            cy.mount(<RadioGroup disabled={false} defaultValue={'pear'} dataSource={list} />);
        });
        // for issue https://github.com/facebook/react/issues/8727
        it('change 3 times for react@15.6.1', () => {
            class NestApp extends React.Component {
                state = {
                    value: 'orange',
                };

                onChange = (value: string) => {
                    this.setState({
                        value,
                    });
                };

                render() {
                    return (
                        <RadioGroup value={this.state.value} onChange={this.onChange}>
                            <Radio id="apple" value="apple">
                                苹果
                            </Radio>
                            <Radio id="watermelon" value="watermelon">
                                西瓜
                            </Radio>
                            <Radio id="orange" value="orange">
                                橙子
                            </Radio>
                        </RadioGroup>
                    );
                }
            }
            cy.mount(<NestApp />);
            cy.get('input#apple').check();
            cy.get('input#apple').should('have.prop', 'checked', true);
            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '苹果');

            cy.get('input#watermelon').check();
            cy.get('input#watermelon').should('have.prop', 'checked', true);
            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '西瓜');

            cy.get('input#apple').check();
            cy.get('input#apple').should('have.prop', 'checked', true);
            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '苹果');
        });
    });

    describe('value === 0', () => {
        it('should support value === 0', () => {
            cy.mount(<RadioGroup defaultValue={0} dataSource={numberList} />).as('radio');
            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '0');

            cy.get<MountReturn>('@radio').then(({ component, rerender }) => {
                return rerender(cloneElement(component as ReactElement, { value: 1 }));
            });

            cy.get('.next-radio-wrapper.checked .next-radio-label').should('have.text', '1');
        });
    });
    describe('string array ', () => {
        it('should support string array', () => {
            cy.mount(<RadioGroup defaultValue={0} dataSource={['apple', 'orange', 'pear']} />);
            cy.get('.next-radio-group').children().should('have.length', 3);
        });
    });

    describe('Radio shape', () => {
        it('shape = button', () => {
            cy.mount(<RadioGroup shape="button" dataSource={['apple', 'orange', 'pear']} />);
            cy.get('.next-radio-button').children().should('have.length', 3);
        });
    });

    describe('Children over datasource', () => {
        it('should render children over datasource', () => {
            cy.mount(
                <RadioGroup shape="button" dataSource={['apple', 'orange', 'pear']}>
                    <Radio rtl key="1">
                        Apple
                    </Radio>
                    <Radio tabIndex={0} key="2">
                        Orange
                    </Radio>
                </RadioGroup>
            );
            cy.get('.next-radio-button').children().should('have.length', 2);
        });
        it('should support null children', () => {
            cy.mount(
                <RadioGroup dataSource={['apple', 'orange', 'pear']}>
                    {null}
                    <Radio tabIndex={0} key="2">
                        Orange
                    </Radio>
                    HelloWorld
                </RadioGroup>
            );
            cy.get('label').should('have.length', 1);
        });
    });

    describe('[focus] call focus()', () => {
        it('should focus', () => {
            const ref = createRef<InstanceType<typeof RadioGroup>>();
            cy.mount(
                <RadioGroup ref={ref}>
                    <Radio>1</Radio>
                    <Radio>2</Radio>
                </RadioGroup>
            );
            cy.get('input').eq(0).should('not.be.focused');
            cy.then(() => {
                ref.current?.getInstance().focus();
            });
            cy.get('input').eq(0).should('be.focused');
        });
        it('should focus the checked radio', () => {
            const ref = createRef<InstanceType<typeof RadioGroup>>();
            cy.mount(
                <RadioGroup name="grp" value="1-2" ref={ref}>
                    <Radio value="1-1">1</Radio>
                    <Radio value="1-2">2</Radio>
                </RadioGroup>
            );
            cy.get('input').eq(1).should('not.be.focused');
            cy.then(() => {
                ref.current?.getInstance().focus();
            });
            cy.get('input').eq(1).should('be.focused');
        });
        it('should focus in datasource mode', () => {
            const ref = createRef<InstanceType<typeof RadioGroup>>();
            cy.mount(<RadioGroup dataSource={list} ref={ref} />);
            cy.get('input').eq(1).should('not.be.focused');
            cy.then(() => {
                ref.current?.getInstance().focus();
            });
            cy.get('input').eq(1).should('be.focused');
        });
    });

    describe('should render preview', () => {
        it('should isPreview', () => {
            cy.mount(<RadioGroup isPreview defaultValue="apple" dataSource={list} />);
            cy.get('.next-form-preview').should('have.text', '苹果');
        });

        it('should renderPreview', () => {
            cy.mount(
                <RadioGroup
                    isPreview
                    renderPreview={() => 'render preivew'}
                    dataSource={numberList}
                />
            );
            cy.get('.next-form-preview').should('have.text', 'render preivew');
        });
    });
});
