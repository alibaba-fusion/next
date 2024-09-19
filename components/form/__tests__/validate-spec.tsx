import React from 'react';

import Input from '../../input';
import Form from '../index';
import Field from '../../field';
import '../style';

const FormItem = Form.Item;
const Submit = Form.Submit;
const Reset = Form.Reset;

describe('Submit', () => {
    it('should support defaultValue & defaultChecked', () => {
        const onClickSpy = cy.spy().as('onClickSpy');

        cy.mount(
            <Form>
                <FormItem>
                    <Input name="first" />
                </FormItem>
                <FormItem>
                    <Input name="second" />
                </FormItem>
                <Submit onClick={onClickSpy}>click</Submit>
            </Form>
        );

        cy.get('input#first').type('test');
        cy.get('button').click();

        cy.get('@onClickSpy').should('have.been.calledOnce');
        cy.get('@onClickSpy').should('have.been.calledWithMatch', { first: 'test' });
    });

    it('[name on FormItem] should support defaultValue & defaultChecked', () => {
        const onClickSpy = cy.spy().as('onClickSpy');

        cy.mount(
            <Form>
                <FormItem name="first">
                    <Input />
                </FormItem>
                <FormItem name="second">
                    <Input />
                </FormItem>
                <Submit onClick={onClickSpy}>click</Submit>
            </Form>
        );

        cy.get('input#first').type('test');
        cy.get('button').click();

        cy.get('@onClickSpy').should('have.been.calledOnce');
        cy.get('@onClickSpy').should('have.been.calledWithMatch', { first: 'test' });
    });

    it('Submit', () => {
        const onClickSpy = cy.spy().as('onClickSpy');

        cy.mount(
            <Form>
                <FormItem>
                    <Input name="first" />
                </FormItem>
                <FormItem>
                    <Input name="second" />
                </FormItem>
                <Submit onClick={onClickSpy}>click</Submit>
            </Form>
        );

        cy.get('input#first').type('test');
        cy.get('button').click();

        cy.get('@onClickSpy').should('have.been.calledOnce');
        cy.get('@onClickSpy').should('have.been.calledWithMatch', { first: 'test' });
    });

    it('[name on FormItem] Submit', () => {
        const onClickSpy = cy.spy().as('onClickSpy');

        cy.mount(
            <Form>
                <FormItem name="first">
                    <Input />
                </FormItem>
                <FormItem name="second">
                    <Input />
                </FormItem>
                <Submit onClick={onClickSpy}>click</Submit>
            </Form>
        );

        cy.get('input#first').type('test');
        cy.get('button').click();

        cy.get('@onClickSpy').should('have.been.calledOnce');
        cy.get('@onClickSpy').should('have.been.calledWithMatch', { first: 'test' });
    });

    it('Submit && validate', () => {
        const onClickSpy = cy.spy().as('onClickSpy');

        cy.mount(
            <Form>
                <FormItem required>
                    <Input name="first" />
                </FormItem>
                <FormItem required>{() => <Input name="second" />}</FormItem>
                <Submit validate onClick={onClickSpy}>
                    click
                </Submit>
            </Form>
        );

        cy.get('input#first').type('test');
        cy.get('input#first').clear();

        cy.get('.next-form-item-help').eq(0).should('have.text', 'first 是必填字段');

        cy.get('input#second').type('test');
        cy.get('input#second').clear();

        cy.get('.next-form-item-help').last().should('have.text', 'second 是必填字段');

        cy.get('button').click();

        cy.get('@onClickSpy').should('have.been.calledOnce');
        cy.get('@onClickSpy').should('have.been.calledWithMatch', { second: '' });
    });

    it('Submit && validate: minmaxMessage', () => {
        const onClickSpy = cy.spy().as('onClickSpy');

        cy.mount(
            <Form>
                <FormItem min={10} minmaxMessage={'min is 10'}>
                    <Input name="first" />
                </FormItem>
                <Submit validate onClick={onClickSpy}>
                    click
                </Submit>
            </Form>
        );

        cy.get('input#first').type('1');
        cy.get('.next-form-item-help').eq(0).should('have.text', 'min is 10');

        cy.get('button').click();
        cy.get('@onClickSpy').should('have.been.calledOnce');
        cy.get('@onClickSpy').should('have.been.calledWithMatch', { first: '1' });
    });

    it('Submit && validate: minmaxLengthMessage', () => {
        const onClickSpy = cy.spy().as('onClickSpy');

        cy.mount(
            <Form>
                <FormItem minLength={10} minmaxLengthMessage={'min length is 10'}>
                    <Input name="first" />
                </FormItem>
                <Submit validate onClick={onClickSpy}>
                    click
                </Submit>
            </Form>
        );

        cy.get('input#first').type('1');
        cy.get('.next-form-item-help').eq(0).should('have.text', 'min length is 10');
        cy.get('button').click();

        cy.get('@onClickSpy').should('have.been.calledOnce');
        cy.get('@onClickSpy').should('have.been.calledWithMatch', { first: '1' });
    });

    it('should supoort format', () => {
        interface DemoProps {}
        class Demo extends React.Component<DemoProps> {
            field: Field;

            constructor(props: DemoProps) {
                super(props);
                this.field = new Field(this);
            }

            render() {
                return (
                    <Form field={this.field}>
                        <FormItem label="test" type="email" format="email" hasFeedback>
                            <Input name="email" />
                        </FormItem>
                    </Form>
                );
            }
        }

        cy.mount(<Demo />);
        cy.get('input#email').type('123');
        cy.get('.next-form-item-help').should('have.text', 'email 不是合法的 email 地址');
    });

    it('[name on FormItem]should supoort format', () => {
        interface DemoProps {}
        class Demo extends React.Component<DemoProps> {
            field: Field;

            constructor(props: DemoProps) {
                super(props);
                this.field = new Field(this);
            }

            render() {
                return (
                    <Form field={this.field}>
                        <FormItem label="test" type="email" format="email" hasFeedback name="email">
                            <Input />
                        </FormItem>
                    </Form>
                );
            }
        }

        cy.mount(<Demo />);
        cy.get('input#email').type('123');
        cy.get('.next-form-item-help').should('have.text', 'email 不是合法的 email 地址');
    });

    it('Submit && validate (array)', () => {
        const onClickSpy = cy.spy().as('onClickSpy');

        cy.mount(
            <Form>
                <FormItem required>
                    <Input name="first" />
                </FormItem>
                <Submit validate={['first']} onClick={onClickSpy}>
                    click
                </Submit>
            </Form>
        );

        cy.get('input#first').type('test');
        cy.get('input#first').clear();
        cy.get('.next-form-item-help').should('have.text', 'first 是必填字段');
        cy.get('button').click();

        cy.get('@onClickSpy').should('have.been.calledOnce');
        cy.get('@onClickSpy').should('have.been.calledWithMatch', { first: '' });
    });

    it('autoValidate=false', () => {
        const onClickSpy = cy.spy().as('onClickSpy');

        cy.mount(
            <Form>
                <FormItem required minLength={10} autoValidate={false}>
                    <Input name="first" />
                </FormItem>
                <Submit validate={['first']} onClick={onClickSpy}>
                    click
                </Submit>
            </Form>
        );

        cy.get('input#first').type('test');
        cy.get('input#first').clear();
        cy.get('.next-form-item-help').should('not.exist');

        cy.get('button').click();
        cy.get('.next-form-item-help').should('have.text', 'first 是必填字段');

        cy.get('@onClickSpy').should('have.been.calledOnce');
        cy.get('@onClickSpy').should('have.been.calledWithMatch', { first: '' });
    });

    it('validate useLabelForErrorMessage', () => {
        cy.mount(
            <Form useLabelForErrorMessage>
                <FormItem required label="姓名:">
                    <Input name="first" />
                </FormItem>
            </Form>
        );

        cy.get('input#first').type('test');
        cy.get('input#first').clear();
        cy.get('.next-form-item-help').should('have.text', '姓名 是必填字段');
    });

    it('the useLabelForErrorMessage of FormItem should have a higher priority', () => {
        cy.mount(
            <Form useLabelForErrorMessage>
                <FormItem useLabelForErrorMessage={false} required label="姓名">
                    <Input name="first" />
                </FormItem>
            </Form>
        );

        cy.get('input#first').type('test');
        cy.get('input#first').clear();
        cy.get('.next-form-item-help').should('have.text', 'first 是必填字段');
    });

    it('the useLabelForErrorMessage of FormItem should have a higher priority', () => {
        cy.mount(
            <Form useLabelForErrorMessage={false}>
                <FormItem useLabelForErrorMessage required label="姓名">
                    <Input name="first" />
                </FormItem>
            </Form>
        );

        cy.get('input#first').type('test');
        cy.get('input#first').clear();

        cy.get('.next-form-item-help').should('have.text', '姓名 是必填字段');
    });

    it('validate errorMessageName', () => {
        cy.mount(
            <Form useLabelForErrorMessage>
                <FormItem required label="姓名:" errorMessageName="我的姓名">
                    <Input name="first" />
                </FormItem>
            </Form>
        );

        cy.get('input#first').type('test');
        cy.get('input#first').clear();

        cy.get('.next-form-item-help').should('have.text', '我的姓名 是必填字段');
    });
});

describe('Reset', () => {
    it('Reset', () => {
        cy.mount(
            <Form>
                <FormItem>
                    <Input name="first" defaultValue="test" />
                </FormItem>
                <FormItem>
                    <Input name="second" />
                </FormItem>
                <Reset>click</Reset>
            </Form>
        );

        cy.get('button').click();

        cy.get('input#first').should('have.value', '');
    });

    it('should supoort Reset toDefault', () => {
        cy.mount(
            <Form>
                <FormItem>
                    <Input name="first" defaultValue="test" />
                </FormItem>
                <FormItem>
                    <Input name="second" />
                </FormItem>
                <Reset toDefault names={['first']}>
                    click
                </Reset>
            </Form>
        );

        cy.get('button').click();

        cy.get('input#first').should('have.value', 'test');
    });

    it('should support custom filed', () => {
        class Demo extends React.Component {
            field = new Field(this, { forceUpdate: true });

            render() {
                const { init, reset } = this.field;

                return (
                    <div>
                        <Input {...init('input', { initValue: 'test' })} />
                        <Reset field={this.field} onClick={reset}>
                            click
                        </Reset>
                    </div>
                );
            }
        }

        cy.mount(<Demo />);

        cy.get('input').should('have.value', 'test');
        cy.get('button').click();
        cy.get('input').should('have.value', '');
    });

    it('should warn & callback if field not exist', () => {
        const onCallback = cy.spy().as('warn');
        cy.mount(<Reset onClick={onCallback} />);
        cy.get('button').click();
        cy.get('@warn').should('be.called');
    });
});

describe('Error', () => {
    describe('preferMarginToDisplayHelp', () => {
        const getDistance = () => {
            return cy
                .get('.next-form-item')
                .should('have.length', 3)
                .then(() => {
                    return cy
                        .get('.next-form-item')
                        .eq(0)
                        .find('.next-input')
                        .then($el1 => $el1[0].getBoundingClientRect());
                })
                .then(rect1 => {
                    return cy
                        .get('.next-form-item')
                        .eq(1)
                        .then($el2 => {
                            const rect2 = $el2[0].getBoundingClientRect();
                            return rect2.top - (rect1.top + rect1.height);
                        });
                });
        };

        function Demo({
            formUseMargin,
            itemUseMargin,
        }: {
            formUseMargin?: boolean;
            itemUseMargin?: boolean;
        }) {
            return (
                <Form preferMarginToDisplayHelp={formUseMargin}>
                    <FormItem label="item1" required preferMarginToDisplayHelp={itemUseMargin}>
                        <Input name="name" />
                    </FormItem>
                    <FormItem label="item2">
                        <Input name="name2" />
                    </FormItem>
                    <FormItem>
                        <Form.Submit validate>submit</Form.Submit>
                    </FormItem>
                </Form>
            );
        }

        it('form should support preferMarginToDisplayHelp', () => {
            cy.mount(<Demo />);

            cy.get('.next-btn').click();

            getDistance().then(oldDistance => {
                cy.mount(<Demo formUseMargin />);
                getDistance().then(newDistance => {
                    expect(newDistance).to.be.lessThan(oldDistance);
                });
            });
        });

        it('form item should support preferMarginToDisplayHelp', () => {
            cy.mount(<Demo />);

            cy.get('.next-btn').click();

            getDistance().then(oldDistance => {
                cy.mount(<Demo itemUseMargin />);
                getDistance().then(newDistance => {
                    expect(newDistance).to.be.lessThan(oldDistance);
                });
            });
        });

        it('form item > form when cross preferMarginToDisplayHelp at same time', () => {
            cy.mount(<Demo />);

            cy.get('.next-btn').click();

            getDistance().then(oldDistance => {
                cy.mount(<Demo itemUseMargin formUseMargin={false} />);
                getDistance().then(newDistance => {
                    expect(newDistance).to.be.lessThan(oldDistance);
                });
            });
        });
    });
});
