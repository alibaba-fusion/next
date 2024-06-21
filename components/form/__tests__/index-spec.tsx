import React from 'react';

import Input from '../../input';
import Field from '../../field';
import Select from '../../select';
import Radio from '../../radio';
import Checkbox from '../../checkbox';
import Form from '../index';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

describe('form', () => {
    describe('render', () => {
        it('Form ', () => {
            cy.mount(
                <Form labelAlign="top">
                    {' '}
                    <FormItem>
                        <Input />
                    </FormItem>
                </Form>
            );
            cy.get('.next-form-item').should('have.css', 'display', 'block');
        });

        it('FormItem', () => {
            cy.mount(
                <Form>
                    <FormItem>
                        <Input />
                    </FormItem>
                    <FormItem>
                        <Input />
                    </FormItem>
                    <FormItem>test</FormItem>
                </Form>
            );
            cy.get('.next-form-item').should('have.length', 3);
        });

        it('FormItem fullwidth', () => {
            cy.mount(
                <Form>
                    <FormItem>
                        <Input />
                    </FormItem>
                    <FormItem fullWidth>
                        <Select />
                    </FormItem>
                    <FormItem>test</FormItem>
                </Form>
            );
            cy.get('.next-form-item-fullwidth').should('have.length', 1);
        });

        it('should supoort Field', () => {
            class Demo extends React.Component {
                field: Field;

                constructor(props: any) {
                    super(props);
                    this.field = new Field(this);
                }

                render() {
                    return (
                        <Form field={this.field}>
                            <FormItem label="test" hasFeedback>
                                <Input name="input1" />
                            </FormItem>
                            <FormItem required requiredMessage="cant be null">
                                <Input name="input2" />
                            </FormItem>
                            <FormItem label="test">
                                <Input />
                            </FormItem>
                        </Form>
                    );
                }
            }

            cy.mount(<Demo />);
            cy.get('input#input2').type('123');
            cy.get('input#input2').clear();
            cy.get('.next-form-item-help').should('have.text', 'cant be null');
        });

        it('should supoort Field With name on FormItem', () => {
            class Demo extends React.Component {
                field: Field;

                constructor(props: any) {
                    super(props);
                    this.field = new Field(this);
                }

                render() {
                    return (
                        <Form field={this.field}>
                            <FormItem name="input1" label="test" hasFeedback>
                                <Input />
                            </FormItem>
                            <FormItem name="input2" required requiredMessage="cant be null">
                                <Input />
                            </FormItem>
                            <FormItem label="test">
                                <Input />
                            </FormItem>
                        </Form>
                    );
                }
            }

            cy.mount(<Demo />);
            cy.get('input#input2').type('123');
            cy.get('input#input2').clear();
            cy.get('.next-form-item-help').should('have.text', 'cant be null');
        });
    });
    describe('Form', () => {
        it('should supoort labelAlign', () => {
            cy.mount(
                <Form labelAlign="inset">
                    <FormItem {...formItemLayout} label="test">
                        <Input />
                    </FormItem>
                    <Form.Submit>submit</Form.Submit>
                </Form>
            );
            cy.get('.next-inset').should('have.length', 1);
            cy.get('form').submit();
        });

        it('should supoort onSubmit', done => {
            const onSubmit = cy.spy();
            cy.mount(
                <Form onSubmit={onSubmit}>
                    <Input name="input" />
                    <button type="submit">submit</button>
                </Form>
            );
            cy.get('form').submit();
            cy.wrap(onSubmit).should('be.calledOnce');
            done();
        });

        it('should deprecated direction', () => {
            cy.mount(
                <Form>
                    {' '}
                    <FormItem label="test">
                        <Input />
                    </FormItem>
                </Form>
            );
            cy.get('.next-form-item').should('have.css', 'display', 'block');
            cy.mount(
                <Form direction="hoz">
                    <FormItem label="test">
                        <Input />
                    </FormItem>
                </Form>
            );

            cy.get('form').should('have.class', 'next-inline');
        });
    });
    describe('FormItem', () => {
        it('should supoort props', () => {
            const onClick = cy.spy();

            cy.mount(
                <Form>
                    <FormItem onClick={onClick}>
                        <Input />
                    </FormItem>
                </Form>
            );
            cy.get('.next-form-item').should('exist');
            cy.get('.next-form-item').click();
            cy.wrap(onClick).should('be.calledOnce');
        });

        it('should supoort component', () => {
            cy.mount(
                <Form component="div">
                    <FormItem required type="email" format="email" label="email:" help="help msg">
                        <Input name="email" />
                    </FormItem>
                </Form>
            );
            cy.get('div.next-form').should('exist');

            const Tag = (props: { children: React.ReactNode }) => {
                return <div className="func-tag">{props.children}</div>;
            };
            cy.mount(
                <Form component={Tag}>
                    <FormItem required type="email" format="email" label="email:" help="help msg">
                        <Input name="email" />
                    </FormItem>
                </Form>
            );
            cy.get('div.func-tag').should('exist');
        });

        it('should supoort component with name on FormItem', () => {
            cy.mount(
                <Form component="div">
                    <FormItem
                        name="email"
                        required
                        type="email"
                        format="email"
                        label="email:"
                        help="help msg"
                    >
                        <Input />
                    </FormItem>
                </Form>
            );
            cy.get('div.next-form').should('exist');

            const Tag = (props: { children: React.ReactNode }) => {
                return <div className="func-tag">{props.children}</div>;
            };
            cy.mount(
                <Form component={Tag}>
                    <FormItem
                        name="email"
                        required
                        type="email"
                        format="email"
                        label="email:"
                        help="help msg"
                    >
                        <Input />
                    </FormItem>
                </Form>
            );
            cy.get('div.func-tag').should('exist');
        });

        it('should supoort wrapperCol & labelCol', () => {
            cy.mount(
                <Form>
                    <FormItem {...formItemLayout} label="email:">
                        <Input />
                    </FormItem>
                </Form>
            );

            cy.get('div.next-form-item-label').should('have.class', 'next-col-6');
        });

        it('should supoort help', () => {
            cy.mount(
                <Form>
                    <FormItem required type="email" format="email" label="email:" help="help msg">
                        <Input name="email" />
                    </FormItem>
                </Form>
            );

            cy.get('.next-form-item-help').should('have.text', 'help msg');
        });

        it('should supoort validateState', () => {
            cy.mount(
                <Form>
                    <FormItem validateState="success" hasFeedback>
                        <Input />
                    </FormItem>
                    <FormItem validateState="loading" hasFeedback>
                        <Input />
                    </FormItem>
                </Form>
            );

            cy.get('.next-form-item:first-of-type').should('have.class', 'has-success');
        });

        it('should supoort responsive', () => {
            cy.mount(
                <Form responsive>
                    <FormItem colSpan={6} labelWidth={80}>
                        <Input />
                    </FormItem>
                    <FormItem colSpan={6} labelWidth={100}>
                        <Input />
                    </FormItem>
                </Form>
            );

            cy.get('.next-responsive-grid').should('exist');
            cy.get('.next-form-responsive-grid').should('exist');
        });

        it('should supoort responsive with react fragment', () => {
            cy.mount(
                <Form responsive>
                    <FormItem colSpan={4} labelWidth={80}>
                        <Input />
                    </FormItem>
                    <FormItem colSpan={4} labelWidth={100}>
                        <Input />
                    </FormItem>
                    <React.Fragment>
                        <FormItem colSpan={4} labelWidth={100}>
                            <Input />
                        </FormItem>
                    </React.Fragment>
                    <FormItem colSpan={12} labelWidth={100}>
                        <Input />
                    </FormItem>
                </Form>
            );

            cy.get('.next-responsive-grid').should('exist');
            cy.get('.next-form-responsive-grid').should('exist');
        });

        it('should supoort required', () => {
            cy.mount(
                <Form>
                    <FormItem required label="test">
                        <Input />
                    </FormItem>
                </Form>
            );

            cy.get('.next-form-item-label label').should('have.attr', 'required');
        });

        it('should supoort ref', () => {
            const saveRef = cy.spy();
            cy.mount(
                <Form>
                    <FormItem required label="test">
                        <Input name="testref" ref={saveRef} />
                    </FormItem>
                </Form>
            );
            cy.wrap(saveRef).should('be.calledOnce');
        });

        it('should supoort defaultvalue', () => {
            const value = {
                'checkbox-1': true,
                'radio-1': true,
            };
            cy.mount(
                <Form value={value}>
                    <FormItem label="不支持购物车下单:">
                        <Checkbox name="checkbox-1">（商品标签[6658]）</Checkbox>
                    </FormItem>
                    <FormItem label="不支持购物车下单:">
                        <Radio name="radio-1">（商品标签[6658]）</Radio>
                    </FormItem>
                </Form>
            );
            cy.get('input#checkbox-1').should('be.checked');
            cy.get('input#radio-1').should('be.checked');
        });

        it('should supoort function children', () => {
            cy.mount(
                <Form>
                    <FormItem required label="test">
                        <Input name="name" defaultValue="frank" />
                    </FormItem>
                    <FormItem required label="test">
                        {values => {
                            return values.name === 'frank' ? (
                                <Input name="frank" value="frankqian" />
                            ) : (
                                <Input name="unknow" value="unknow" />
                            );
                        }}
                    </FormItem>
                </Form>
            );

            cy.get('input[id="unknow"]').should('not.exist');
            cy.get('input[id="frank"]').should('have.value', 'frankqian');

            cy.get('input[id="name"]').clear();

            cy.get('input[id="frank"]').should('not.exist');

            // 验证unknow输入框出现且值正确
            cy.get('input[id="unknow"').should('exist').and('have.value', 'unknow');
        });
    });
});
