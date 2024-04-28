import React from 'react';
import Input from '../index';
import Icon from '../../icon/index';
import ConfigProvider from '../../config-provider';
import '../style';

describe('input', () => {
    describe('render', () => {
        it('should isPreview', () => {
            cy.mount(<Input id="ispreview-input" isPreview defaultValue="abc" />);
            cy.get('#ispreview-input').should('have.text', 'abc');
        });

        it('should renderPreview', () => {
            cy.mount(
                <Input
                    id="renderpreview-input"
                    isPreview
                    defaultValue="abc"
                    renderPreview={() => 'ddd'}
                />
            );
            cy.get('#renderpreview-input').should('have.text', 'ddd');
        });
    });

    describe('render', () => {
        it('should accept defaultValue & value', () => {
            cy.mount(<Input defaultValue="123" />);
            cy.get('.next-input input').should('have.value', '123');
            cy.mount(<Input value="456" />);
            cy.get('.next-input input').should('have.value', '456');
        });
        it('should accept addonBefore & addonAfter', () => {
            cy.mount(<Input addonBefore="test" addonAfter="test2" />);
            cy.get('span.next-input-group-addon').should('have.length', 2);
            cy.get('span.next-input-group-addon').eq(0).should('have.text', 'test');
            cy.get('span.next-input-group-addon').eq(1).should('have.text', 'test2');
        });
    });

    describe('behavior', () => {
        // 判断事件是否执行
        it('simulates onChange/onFocus/onBlur/onPressEnter events', () => {
            const onChange = cy.spy();
            const onFocus = cy.spy();
            const onBlur = cy.spy();
            const onPressEnter = cy.spy();
            cy.mount(
                <Input
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onPressEnter={onPressEnter}
                />
            );
            cy.get('input').type('20');
            cy.wrap(onChange).should('be.calledTwice');
            cy.wrap(onFocus).should('be.called');
            cy.get('input').blur();
            cy.wrap(onBlur).should('be.calledOnce');
            cy.get('input').type('{enter}');
            cy.wrap(onPressEnter).should('be.calledOnce');
        });

        it('simulates onCompositionStart/onCompositionUpdate/onCompositionEnd events', () => {
            const onCompositionStart = cy.spy();
            const onCompositionUpdate = cy.spy();
            const onCompositionEnd = cy.spy();
            const onChange = cy.spy();
            cy.mount(
                <Input
                    composition
                    onCompositionStart={onCompositionStart}
                    onCompositionUpdate={onCompositionUpdate}
                    onCompositionEnd={onCompositionEnd}
                    onChange={onChange}
                />
            );
            cy.get('input').invoke('val', 'zh').trigger('compositionstart');
            cy.wrap(onCompositionStart).should('be.calledOnce');
            cy.get('input').invoke('val', 'zhon').trigger('compositionupdate');
            cy.wrap(onCompositionUpdate).should('be.calledOnce');
            cy.get('input').invoke('val', '中').trigger('compositionend');
            cy.wrap(onCompositionEnd).should('be.calledOnce');
            cy.wrap(onChange).should('be.calledWithMatch', '中');
        });

        it('Native onCompositionStart/onCompositionUpdate/onCompositionEnd events', () => {
            const onCompositionStart = cy.spy();
            const onCompositionUpdate = cy.spy();
            const onCompositionEnd = cy.spy();
            cy.mount(
                <Input
                    onCompositionStart={onCompositionStart}
                    onCompositionUpdate={onCompositionUpdate}
                    onCompositionEnd={onCompositionEnd}
                />
            );
            cy.get('input').invoke('val', 'zh').trigger('compositionstart');
            cy.wrap(onCompositionStart).should('be.calledOnce');
            cy.get('input').invoke('val', 'zhon').trigger('compositionupdate');
            cy.wrap(onCompositionUpdate).should('be.calledOnce');
            cy.get('input').invoke('val', '中').trigger('compositionend');
            cy.wrap(onCompositionEnd).should('be.calledOnce');
        });

        it('should support onChange', () => {
            const onChange = cy.spy();
            cy.mount(<Input defaultValue={123} onChange={onChange} />);

            cy.get('input').type('2');

            cy.wrap(onChange).should('be.calledWithMatch', '2');
        });

        it('should support trim', () => {
            const onChange = cy.spy();
            cy.mount(<Input trim onChange={onChange} />);
            cy.get('input').type(' ');
            cy.get('input').type('20');
            cy.get('input').type(' ');
            cy.get('input').type('2');
            cy.wrap(onChange).should('be.calledWithMatch', '');
            cy.wrap(onChange).should('be.calledWithMatch', '2');
            cy.wrap(onChange).should('be.calledWithMatch', '20');
            cy.wrap(onChange).should('be.calledWithMatch', '202');
        });

        it('should support placeholder', () => {
            cy.mount(<Input placeholder="holder" />);
            cy.get('input').should('have.attr', 'placeholder', 'holder');
        });

        it('should support dsiabled', () => {
            cy.mount(<Input disabled />);
            cy.get('input').should('have.attr', 'disabled', 'disabled');
        });

        it('should support string hint', () => {
            cy.mount(<Input hint="calendar" />);
            cy.get('.next-input .next-icon-calendar').should('exist');
        });

        it('should support node hint', () => {
            cy.mount(<Input hint={<Icon type="smile" />} />);
            cy.get('.next-input .next-icon-smile').should('exist');
        });

        it('should support maxLength & hasLimitHint', () => {
            cy.mount(<Input defaultValue={'abcd'} maxLength={10} hasLimitHint />);
            cy.get('.next-input-len').should('not.have.class', 'next-error');
            cy.mount(<Input defaultValue={'12345678901'} maxLength={10} hasLimitHint />);
            cy.get('.next-input-len').should('have.class', 'next-error');

            cy.mount(<Input.TextArea defaultValue={'abc\nabc\n'} maxLength={10} hasLimitHint />);
            cy.get('.next-input-len').should('not.have.class', 'next-error');
            cy.mount(
                <Input.TextArea defaultValue={'abc\nabc\nabc\n'} maxLength={10} hasLimitHint />
            );
            cy.get('.next-input-len').should('have.class', 'next-error');
        });

        it('should support state', () => {
            cy.mount(<Input state="error" />);
            cy.get('.next-input').should('have.class', 'next-error');
            cy.mount(<Input state="success" />);
            cy.get('i.next-input-success-icon').should('exist');
            cy.mount(<Input state="loading" />);
            cy.get('i.next-input-loading-icon').should('exist');
        });

        it('should support onPressEnter & onFocus & onBlur', () => {
            const onPressEnter = cy.spy();
            cy.mount(
                <Input
                    defaultValue={'123'}
                    onPressEnter={e => {
                        onPressEnter((e.target as HTMLInputElement).value);
                    }}
                />
            );
            cy.get('input').type('{enter}');
            cy.wrap(onPressEnter).should('be.calledWith', '123');

            const onFocus = cy.spy();
            cy.mount(
                <Input
                    defaultValue={'123'}
                    onFocus={e => {
                        onFocus((e.target as HTMLInputElement).value);
                    }}
                />
            );
            cy.get('input').focus();
            cy.wrap(onFocus).should('be.calledWith', '123');

            const onBlur = cy.spy();
            cy.mount(
                <Input
                    defaultValue={'123'}
                    onBlur={e => {
                        onBlur((e.target as HTMLInputElement).value);
                    }}
                />
            );
            cy.get('input').focus();
            cy.get('input').blur();
            cy.wrap(onBlur).should('be.calledWith', '123');
        });

        it('should support hasClear', () => {
            const onChange = cy.spy();
            cy.mount(<Input defaultValue="abcdef" hasClear onChange={onChange} />);
            cy.get('.next-input-clear-icon').should('exist');
            cy.get('.next-input-clear-icon').click();
            cy.get('input').should('have.value', '');
            cy.wrap(onChange).should('be.calledWithMatch', '');
        });

        it('should support getValueLength', () => {
            const getValueLength = cy.spy();
            cy.mount(
                <Input defaultValue="abcdef" maxLength={10} getValueLength={getValueLength} />
            );
            cy.wrap(getValueLength).should('be.calledOnce');

            const getValueLength2 = () => {
                return 1;
            };
            cy.mount(
                <Input
                    defaultValue="abcdef"
                    maxLength={10}
                    hasLimitHint
                    getValueLength={getValueLength2}
                />
            );
            cy.get('.next-input-len').should('have.text', '1/10');

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

        it('should support getInputNode', () => {
            const onFocus = cy.spy();
            class App extends React.Component {
                input: InstanceType<typeof Input> | null;
                render() {
                    return (
                        <Input
                            ref={input => {
                                this.input = input;
                            }}
                            onFocus={() => {
                                onFocus(this.input?.getInputNode() === undefined);
                            }}
                        />
                    );
                }
            }
            cy.mount(<App />);
            cy.get('input').focus();
            cy.wrap(onFocus).should('be.calledWith', false);
        });

        it('should support htmlType=number', () => {
            const onChange = cy.spy();
            cy.mount(<Input defaultValue="abcdef" htmlType="number" onChange={onChange} />);
            cy.get('input').type('20');
            cy.wrap(onChange).should('be.calledWith', 20);
        });

        it('should support htmlType=number value="" ', () => {
            const onChange = cy.spy();
            cy.mount(<Input defaultValue="abcdef" htmlType="number" onChange={onChange} />);
            cy.get('input').type('1{backspace}');
            cy.wrap(onChange).should('be.calledWith', 1);
            cy.wrap(onChange).should('be.calledWith', '');
        });

        it('should support ConfigProvider defaultProps', () => {
            const config = {
                Input: {
                    disabled: true,
                },
            };
            cy.mount(
                <ConfigProvider defaultPropsConfig={config}>
                    <Input />
                </ConfigProvider>
            );

            cy.get('input').should('have.attr', 'disabled', 'disabled');
        });
    });
    describe('react api', () => {
        it('calls componentWillReceiveProps', () => {
            cy.mount(<Input defaultValue={19} />).as('Demo');
            cy.rerender('Demo', { value: '30' });
            cy.get('input').should('have.value', '30');

            // value = undefined 时候清空数据
            cy.rerender('Demo', { value: undefined });
            cy.get('input').should('have.value', '');
        });

        it('support null to reset', () => {
            cy.mount(<Input defaultValue={19} />).as('Demo');

            // value = null 时候清空数据
            cy.rerender('Demo', { value: null });
            cy.get('input').should('have.value', '');
        });
    });
});
