import React, { useState } from 'react';
import Input from '../index';
import '../style';

describe('TextArea', () => {
    describe('render', () => {
        it('should textarea isPreview', () => {
            cy.mount(<Input.TextArea id="ispreview-input" isPreview defaultValue="abc" />);
            cy.get('#ispreview-input').should('have.text', 'abc');
        });

        it('should textarea isPreview compatible value null', () => {
            cy.mount(<Input.TextArea id="ispreview-input-null" isPreview value={null} />);
            cy.get('#ispreview-input-null').should('have.text', '');
        });

        it('should textarea renderPreview', () => {
            cy.mount(
                <Input.TextArea
                    id="renderpreview-input"
                    isPreview
                    defaultValue="abc"
                    renderPreview={() => 'ddd'}
                />
            );
            cy.get('#renderpreview-input').should('have.text', 'ddd');
        });
        it('should support hasClear ,close #4334', () => {
            const onChange = cy.spy();
            function Demo() {
                const [value, setValue] = useState('aaa');
                return (
                    <Input.TextArea
                        value={value}
                        placeholder="TextArea"
                        aria-label="TextArea"
                        hasClear
                        onChange={v => {
                            onChange(v);
                            setValue(v);
                        }}
                    />
                );
            }
            cy.mount(<Demo />);
            cy.get('.next-input-textarea-clear').click();
            cy.wrap(onChange).should('be.calledWith', '');
        });
    });

    describe('behavior', () => {
        // 判断事件是否执行
        it('should support onChange/onFocus/onBlur events', () => {
            const onChange = cy.spy();
            const onFocus = cy.spy();
            const onBlur = cy.spy();
            cy.mount(<Input.TextArea onChange={onChange} onFocus={onFocus} onBlur={onBlur} />);
            cy.get('textarea').focus();
            cy.wrap(onFocus).should('be.calledOnce');
            cy.get('textarea').blur();
            cy.wrap(onBlur).should('be.calledOnce');
            cy.get('textarea').type('2');
            cy.wrap(onChange).should('be.calledWith', '2');
        });

        it('should support defaultValue and can be changed', () => {
            const onChange = cy.spy();
            cy.mount(<Input.TextArea defaultValue={'123'} onChange={onChange} />).as('Demo');
            cy.get('textarea').should('have.value', '123');
            cy.get('textarea').type('2');
            cy.wrap(onChange).should('be.calledWith', '1232');
            cy.rerender('Demo', { value: 'helloworld' });
            cy.get('textarea').should('have.value', 'helloworld');
        });

        it('should support value and can not be changed', () => {
            const onChange = cy.spy();
            cy.mount(<Input.TextArea value={'123'} onChange={onChange} />).as('Demo');
            cy.get('textarea').should('have.value', '123');
            cy.get('textarea').type('2');
            cy.wrap(onChange).should('be.calledWith', '1232');
            cy.get('textarea').should('have.value', '123');
            cy.rerender('Demo', { value: 'helloworld' });
            cy.get('textarea').should('have.value', 'helloworld');
        });

        it('should work with value and onChange under control', () => {
            class App extends React.Component {
                state = {
                    value: '123',
                };
                onChange = (value: string) => {
                    this.setState({
                        value,
                    });
                };

                render() {
                    return <Input.TextArea value={this.state.value} onChange={this.onChange} />;
                }
            }

            cy.mount(<App />);
            cy.get('textarea').should('have.value', '123');
            cy.get('textarea').type('20');
            cy.get('textarea').should('have.value', '12320');
        });

        it('should support dsiabled', () => {
            cy.mount(<Input.TextArea disabled />);
            cy.get('textarea').should('have.attr', 'disabled', 'disabled');
        });

        it('should support maxLength & hasLimitHint', () => {
            cy.mount(<Input.TextArea defaultValue={'abcd'} maxLength={10} hasLimitHint />);
            cy.get('.next-input-len').should('not.have.class', 'next-error');
            cy.mount(<Input.TextArea defaultValue={'12345678901'} maxLength={10} hasLimitHint />);
            cy.get('.next-input-len').should('have.class', 'next-error');
            cy.mount(<Input.TextArea defaultValue={'abc\nabc\n'} maxLength={10} hasLimitHint />);
            cy.get('.next-input-len').should('not.have.class', 'next-error');
            cy.mount(
                <Input.TextArea defaultValue={'abc\nabc\nabc\n'} maxLength={10} hasLimitHint />
            );
            cy.get('.next-input-len').should('have.class', 'next-error');
        });

        it('should support state', () => {
            cy.mount(<Input.TextArea state="error" />);
            cy.get('.next-input').should('have.class', 'next-error');
        });

        it('should support onFocus & onBlur', () => {
            const onFocus = cy.spy();
            const onBlur = cy.spy();
            cy.mount(
                <Input.TextArea
                    defaultValue={'123'}
                    onFocus={e => {
                        onFocus(e.target.value);
                    }}
                    onBlur={e => {
                        onBlur(e.target.value);
                    }}
                />
            );
            cy.get('textarea').focus();
            cy.wrap(onFocus).should('be.calledWith', '123');
            cy.get('textarea').blur();
            cy.wrap(onBlur).should('be.calledWith', '123');
        });

        it('should support getInputNode', () => {
            const onFocus = cy.spy();
            class App extends React.Component {
                textarea: InstanceType<typeof Input.TextArea> | null;
                render() {
                    return (
                        <Input.TextArea
                            ref={c => {
                                this.textarea = c;
                            }}
                            onFocus={() => {
                                onFocus(this.textarea?.getInputNode() === undefined);
                            }}
                        />
                    );
                }
            }
            cy.mount(<App />);
            cy.get('textarea').focus();
            cy.wrap(onFocus).should('be.calledWith', false);
        });

        it('should support getValueLength', () => {
            const getValueLength = cy.spy();
            cy.mount(
                <Input.TextArea
                    defaultValue="abcdef"
                    maxLength={10}
                    getValueLength={getValueLength}
                />
            );
            cy.wrap(getValueLength).should('be.calledOnce');

            const getValueLength2 = () => {
                return 1;
            };
            cy.mount(
                <Input.TextArea
                    defaultValue="abcdef"
                    maxLength={10}
                    hasLimitHint
                    getValueLength={getValueLength2}
                />
            );
            cy.get('.next-input-len').should('have.text', '1/10');
        });

        it('should support autoHeight', () => {
            cy.mount(
                <Input.TextArea
                    defaultValue=""
                    autoHeight
                    style={{ fontSize: 14, lineHeight: 1 }}
                />
            );
            cy.get('textarea[data-real]').type('1{enter}2{enter}3{enter}4{enter}5{enter}');
            // 下面 4 * 2 里的 4 是 padding，1 * 2 里的 1 是 边框;
            const delta = 4 * 2 + 1 * 2;
            cy.get('.next-input-textarea').should('have.css', 'height', `${14 * 6 + delta}px`);
            cy.mount(
                <Input.TextArea
                    defaultValue="abcdef"
                    autoHeight={{ minRows: 2, maxRows: 4 }}
                    style={{ fontSize: 14, lineHeight: 1 }}
                />
            );
            // minRows
            cy.get('.next-input-textarea').should('have.css', 'height', `${14 * 2 + delta}px`);
            cy.get('textarea[data-real]').type('1{enter}2{enter}3{enter}4{enter}5{enter}');
            // maxRows
            cy.get('.next-input-textarea').should('have.css', 'height', `${14 * 4 + delta}px`);
        });

        it('should support focus', () => {
            let textarea: InstanceType<typeof Input.TextArea> | null = null;
            const ref = (c: InstanceType<typeof Input.TextArea>) => {
                textarea = c;
            };
            const onFocus = cy.spy();
            cy.mount(<Input.TextArea ref={ref} onFocus={onFocus} />).then(() => {
                textarea?.getInstance().focus();
            });
            cy.wrap(onFocus).should('be.calledOnce');
        });
    });
    describe('react api', () => {
        it('calls componentWillReceiveProps', () => {
            cy.mount(<Input.TextArea autoHeight defaultValue={19} />).as('Demo');
            cy.rerender('Demo', { value: '30' });
            cy.get('textarea[data-real]').should('have.value', '30');

            // value = undefined 时候清空数据
            cy.rerender('Demo', { value: undefined });
            cy.get('textarea[data-real]').should('have.value', '');
        });

        it('support null to reset', () => {
            cy.mount(<Input.TextArea defaultValue={19} />).as('Demo');

            // value = null 时候清空数据
            cy.rerender('Demo', { value: null });
            cy.get('textarea[data-real]').should('have.value', '');
        });
    });
});
