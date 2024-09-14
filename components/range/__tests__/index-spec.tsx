import React, { type ReactElement, useImperativeHandle, useRef, useState } from 'react';
import type { MountReturn } from 'cypress/react';
import Range, { type RangeValueType, type RangeProps } from '../index';
import '../style';

type ParentComponentRef = {
    getRangeInstance: () => React.ComponentRef<typeof Range> | null;
};

const ParentComponent = React.forwardRef<
    ParentComponentRef,
    {
        propsName: string;
        propsValue: unknown;
        changedValue: unknown;
    } & RangeProps
>(({ propsName, propsValue, changedValue, ...rest }, ref) => {
    const [rangeProps, setRangeProps] = useState<Record<string, unknown>>({
        [propsName]: propsValue,
    });
    const rangeRef = useRef<React.ComponentRef<typeof Range>>(null);

    useImperativeHandle(ref, () => ({
        getRangeInstance() {
            return rangeRef.current;
        },
    }));

    const onClick = () => {
        setRangeProps({
            [propsName]: changedValue,
        });
    };

    return (
        <div>
            <Range ref={rangeRef} {...rest} {...rangeProps} />
            <br />
            <button type="button" onClick={onClick}>
                click
            </button>
        </div>
    );
});

const checkRangeSelectedDomWidthAndLeft = (
    cy: Cypress.Chainable<unknown>,
    width: string,
    left: string
) => {
    cy.get('.next-range-selected')
        .should('exist')
        .then($el => {
            expect({
                width: $el[0].style.width,
                left: $el[0].style.left,
            }).deep.equal({
                width,
                left,
            });
        });
};

describe('Range ', () => {
    afterEach(() => {
        //清楚所有浮层
        const nodeListArr = [].slice.call(document.querySelectorAll('.next-balloon-tooltip'));
        nodeListArr.forEach((node: HTMLElement) => {
            node.parentNode?.removeChild(node);
        });
    });

    it('defaultValue', () => {
        let ref: ParentComponentRef | null = null;
        const saveRef = (e: ParentComponentRef | null) => {
            ref = e;
        };
        // model: single
        cy.mount(
            <ParentComponent
                ref={saveRef}
                propsName="defaultValue"
                propsValue={10}
                changedValue={20}
            />
        ).as('wrapperSingle');
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperSingle'), '10%', '0%');
        // 模拟改变 defaultValue 值
        cy.get<MountReturn>('@wrapperSingle').get('button').click();
        cy.then(() => {
            const instanceProps = ref?.getRangeInstance()?.props;
            expect(instanceProps).deep.equal({
                defaultValue: 20,
            });
        });
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperSingle'), '10%', '0%');

        // model: double
        cy.mount(
            <ParentComponent
                ref={saveRef}
                slider="double"
                propsName="defaultValue"
                propsValue={[10, 30]}
                changedValue={[30, 40]}
            />
        ).as('wrapperDouble');
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperDouble'), '20%', '10%');
        // 模拟改变 defaultValue 值
        cy.get<MountReturn>('@wrapperDouble').get('button').click();
        cy.then(() => {
            const instanceProps = ref?.getRangeInstance()?.props;
            expect(instanceProps).deep.equal({
                slider: 'double',
                defaultValue: [30, 40],
            });
        });
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperDouble'), '20%', '10%');
    });
    it('value', () => {
        let ref: ParentComponentRef | null = null;
        const saveRef = (e: ParentComponentRef | null) => {
            ref = e;
        };
        // model: single
        cy.mount(
            <ParentComponent ref={saveRef} propsName="value" propsValue={10} changedValue={20} />
        ).as('wrapperSingle');
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperSingle'), '10%', '0%');
        // 模拟改变 value 值
        cy.get<MountReturn>('@wrapperSingle').get('button').click();
        cy.then(() => {
            const instanceProps = ref?.getRangeInstance()?.props;
            expect(instanceProps).deep.equal({
                value: 20,
            });
        });
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperSingle'), '20%', '0%');

        // model: double
        cy.mount(
            <ParentComponent
                ref={saveRef}
                slider="double"
                propsName="value"
                propsValue={[10, 30]}
                changedValue={[30, 40]}
            />
        ).as('wrapperDouble');
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperDouble'), '20%', '10%');
        // 模拟改变 value 值
        cy.get<MountReturn>('@wrapperDouble').get('button').click();
        cy.then(() => {
            const instanceProps = ref?.getRangeInstance()?.props;
            expect(instanceProps).deep.equal({
                slider: 'double',
                value: [30, 40],
            });
        });
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperDouble'), '10%', '30%');
    });
    it('min max', () => {
        cy.mount(<Range min={10} value={20} max={30} />);
        checkRangeSelectedDomWidthAndLeft(cy, '50%', '0%');
    });
    it('disabled', () => {
        cy.mount(<Range disabled value={20} />);
        cy.get('.next-range.disabled').should('to.length', 1);
    });
    it('step', () => {
        cy.mount(<Range min={0} max={1} step={0.03} />);
        cy.get('.next-range-slider')
            .should('exist')
            .then($el => {
                const wrapper = document.querySelector('.next-range');
                const wrapperWidth = wrapper?.getBoundingClientRect().width || 0;
                const shortest = wrapperWidth * 0.04;

                const mousedownEvent = new MouseEvent('mousedown', {
                    clientX: 0,
                    clientY: 0,
                    bubbles: true,
                    cancelable: true,
                });
                const mousemoveEvent = new MouseEvent('mousemove', {
                    clientX: shortest,
                    clientY: 0,
                    bubbles: true,
                    cancelable: true,
                });
                const mouseupEvent = new MouseEvent('mouseup', {
                    clientX: shortest,
                    clientY: 0,
                    bubbles: true,
                    cancelable: true,
                });
                $el[0].dispatchEvent(mousedownEvent);
                $el[0].dispatchEvent(mousemoveEvent);
                $el[0].dispatchEvent(mouseupEvent);

                checkRangeSelectedDomWidthAndLeft(cy, '3%', '0%');
            });
    });

    it('hasTip === true and tipRender', () => {
        const tipRender = (value: number) => {
            expect(value).equal(20);
            return <div className="custom-tip">{value}</div>;
        };
        cy.mount(<Range value={20} hasTip tipRender={tipRender} />);
        cy.get('.next-range-slider').then($el => {
            const event = new MouseEvent('mouseover', {
                clientX: 0,
                clientY: 0,
                bubbles: true,
                cancelable: true,
            });
            $el[0].dispatchEvent(event);
        });
        cy.then(() => {
            cy.get('.custom-tip').should('exist');
        });
    });

    it('hasTip === false', () => {
        const tipRender = (value: number) => {
            expect(value).equal(20);
            return <div className="custom-tip">{value}</div>;
        };
        cy.mount(<Range value={20} hasTip={false} tipRender={tipRender} />);
        cy.get('.next-range-slider').then($el => {
            const event = new MouseEvent('mouseover', {
                clientX: 0,
                clientY: 0,
                bubbles: true,
                cancelable: true,
            });
            $el[0].dispatchEvent(event);
        });
        cy.then(() => {
            cy.get('.custom-tip').should('not.exist');
        });
    });
    it('marks', () => {
        cy.mount(<Range defaultValue={30} marks={[3, 26, 37, 100]} />).as('wrapper');
        cy.get<MountReturn>('@wrapper').get('.next-range-scale-item').should('to.length', 4);
        cy.get('.next-range-scale-item.activated').should('to.length', 2);
        cy.get('.next-range-scale-item')
            .first()
            .should('to.have.attr', 'style', 'left: 3%; right: auto;');
        cy.get('.next-range-scale-item')
            .eq(1)
            .should('to.have.attr', 'style', 'left: 26%; right: auto;');
        cy.get('.next-range-scale-item')
            .eq(2)
            .should('to.have.attr', 'style', 'left: 37%; right: auto;');

        cy.get<MountReturn>('@wrapper')
            .then(({ component, rerender }) => {
                return rerender(React.cloneElement(component as ReactElement, { marks: 10 }));
            })
            .as('wrapper2');
        cy.get<MountReturn>('@wrapper2').get('.next-range-scale-item').should('to.length', 11);

        cy.get<MountReturn>('@wrapper2')
            .then(({ component, rerender }) => {
                return rerender(
                    React.cloneElement(component as ReactElement, {
                        marks: { 0: '0°C', 26: '26°C', 37: '37°C', 100: '100°C' },
                    })
                );
            })
            .as('wrapper3');
        cy.get<MountReturn>('@wrapper3').get('.next-range-scale-item').should('to.length', 4);
        cy.get<MountReturn>('@wrapper3')
            .get('.next-range-mark-text')
            .first()
            .should('to.have.text', '0°C');
    });

    it('laptop dragging onChange onProcess', () => {
        let changeValue: RangeValueType = 0;
        let processValue: RangeValueType = 0;
        let onChangeCall = 0;
        let processCall = 0;
        let ref: React.ComponentRef<typeof Range> | null = null;
        cy.mount(
            <Range
                ref={e => {
                    ref = e;
                }}
                defaultValue={10}
                style={{ width: 100 }}
                marks={[0, 26, 37, 100]}
                onChange={function (value) {
                    // console.log('onChange', value);
                    changeValue = value;
                    onChangeCall++;
                }}
                onProcess={function (value) {
                    // console.log('onProcess', value);
                    processValue = value;
                    processCall++;
                }}
                min={0}
                max={100}
            />
        ).then(() => {
            const RangeInstance = ref?.getInstance();
            document.body.style.marginLeft = '0px';
            if (RangeInstance) {
                RangeInstance._onMouseDown({
                    button: 0,
                    pageX: 10,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                } as React.MouseEvent<HTMLDivElement>);
                RangeInstance._move({
                    pageX: 20,
                    type: 'mousemove',
                    stopPropagation: () => {},
                    preventDefault: () => {},
                } as React.MouseEvent<Element> & React.TouchEvent<Element>);
                RangeInstance._end();
            }
            expect(changeValue).equal(20);
            expect(processValue).equal(20);
            expect(processCall).equal(1);
            expect(onChangeCall).equal(1);
        });
    });

    it('mobile dragging onChange onProcess', () => {
        let changeValue: RangeValueType = 0;
        let processValue: RangeValueType = 0;
        let onChangeCall = 0;
        let processCall = 0;
        let ref: React.ComponentRef<typeof Range> | null = null;

        cy.mount(
            <Range
                ref={e => {
                    ref = e;
                }}
                defaultValue={10}
                style={{ width: 100 }}
                marks={[0, 26, 37, 100]}
                onChange={value => {
                    // console.log('onChange', value);
                    changeValue = value;
                    onChangeCall++;
                }}
                onProcess={value => {
                    // console.log('onProcess', value);
                    processValue = value;
                    processCall++;
                }}
                min={0}
                max={100}
            />
        ).then(() => {
            const RangeInstance = ref?.getInstance();
            document.body.style.marginLeft = '0px';
            if (RangeInstance) {
                RangeInstance._onTouchStart({
                    targetTouches: [{ pageX: 10 }],
                    stopPropagation: () => {},
                    preventDefault: () => {},
                } as unknown as React.TouchEvent<HTMLDivElement>);
                RangeInstance._move({
                    targetTouches: [{ pageX: 20 }],
                    type: 'touchmove',
                    stopPropagation: () => {},
                    preventDefault: () => {},
                } as unknown as React.MouseEvent<Element> & React.TouchEvent<Element>);
                RangeInstance._end();
            }
            expect(changeValue).equal(20);
            expect(processValue).equal(20);
            expect(processCall).equal(1);
            expect(onChangeCall).equal(1);
        });
    });

    it('exchange upper and lower', () => {
        let changeValue: RangeValueType;
        let ref: React.ComponentRef<typeof Range> | null = null;

        cy.mount(
            <Range
                ref={e => {
                    ref = e;
                }}
                slider="double"
                defaultValue={[10, 20]}
                style={{ width: 100 }}
                marks={[0, 100]}
                onChange={function (value) {
                    // console.log('onChange', value);
                    changeValue = value;
                }}
                min={0}
                max={100}
            />
        ).then(() => {
            changeValue = [0, 0];
            const RangeInstance = ref?.getInstance();
            document.body.style.marginLeft = '0px';
            if (RangeInstance) {
                RangeInstance._onMouseDown({
                    button: 0,
                    pageX: 10,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                } as React.MouseEvent<HTMLDivElement>);
                RangeInstance._move({
                    pageX: 30,
                    type: 'mousemove',
                    stopPropagation: () => {},
                    preventDefault: () => {},
                } as React.MouseEvent<Element> & React.TouchEvent<Element>);
                RangeInstance._end();
                expect(changeValue[0]).equal(20);
                expect(changeValue[1]).equal(30);

                RangeInstance._onMouseDown({
                    button: 0,
                    pageX: 30,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                } as React.MouseEvent<HTMLDivElement>);
                RangeInstance._move({
                    pageX: 0,
                    type: 'mousemove',
                    stopPropagation: () => {},
                    preventDefault: () => {},
                } as React.MouseEvent<Element> & React.TouchEvent<Element>);
                RangeInstance._end();
                expect(changeValue[0]).equal(0);
                expect(changeValue[1]).equal(20);
            }
        });
    });

    it('value bigger max', () => {
        cy.mount(<Range value={100} max={10} min={1} />).as('wrapper');
        cy.get<MountReturn>('@wrapper')
            .get('.next-range-slider')
            .should('exist')
            .then($el => {
                expect({
                    zIndex: $el[0].style.zIndex,
                    left: $el[0].style.left,
                }).deep.equal({
                    zIndex: '100',
                    left: '100%',
                });
            });

        cy.mount(<Range slider="double" value={[100, 200]} max={10} min={1} />).as('wrapper2');
        cy.get<MountReturn>('@wrapper2')
            .get('.next-range-slider')
            .eq(0)
            .should('exist')
            .then($el => {
                expect({
                    zIndex: $el[0].style.zIndex,
                    left: $el[0].style.left,
                }).deep.equal({
                    zIndex: '100',
                    left: '100%',
                });
            });
        cy.get<MountReturn>('@wrapper2')
            .get('.next-range-slider')
            .eq(1)
            .should('exist')
            .then($el => {
                expect({
                    zIndex: $el[0].style.zIndex,
                    left: $el[0].style.left,
                }).deep.equal({
                    zIndex: '100',
                    left: '100%',
                });
            });
    });

    it('set value === undefined for reset', () => {
        cy.mount(
            <ParentComponent min={2} propsName="value" propsValue={10} changedValue={undefined} />
        ).as('wrapperSingle');
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperSingle'), '8.16327%', '0%');
        cy.get<MountReturn>('@wrapperSingle').get('button').click();
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperSingle'), '0%', '0%');

        cy.mount(
            <ParentComponent
                slider="double"
                propsName="value"
                propsValue={[10, 30]}
                changedValue={undefined}
            />
        ).as('wrapperDouble');
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperDouble'), '20%', '10%');
        cy.get<MountReturn>('@wrapperDouble').get('button').click();
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperDouble'), '0%', '0%');
    });
    it('reverse', () => {
        cy.mount(<Range defaultValue={10} reverse />).as('wrapperSingle');
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperSingle'), '90%', '10%');

        cy.mount(<Range slider="double" defaultValue={[10, 30]} reverse />).as('wrapperDouble');
        cy.get<MountReturn>('@wrapperDouble').get('.next-range-selected').should('to.length', 2);
        cy.get<MountReturn>('@wrapperDouble')
            .get('.next-range-selected')
            .eq(0)
            .then($el => {
                expect({
                    width: $el[0].style.width,
                    left: $el[0].style.left,
                }).deep.equal({
                    width: '10%',
                    left: '0px',
                });
            });
        cy.get<MountReturn>('@wrapperDouble')
            .get('.next-range-selected')
            .eq(1)
            .then($el => {
                expect({
                    width: $el[0].style.width,
                    left: $el[0].style.left,
                }).deep.equal({
                    width: '70%',
                    left: '30%',
                });
            });
    });

    it('fixedWidth', () => {
        cy.mount(<Range fixedWidth defaultValue={[20, 40]} />)
            .get('.next-range-frag')
            .then($el => {
                expect({
                    right: $el[0].style.right,
                    left: $el[0].style.left,
                }).deep.equal({
                    right: '60%',
                    left: '20%',
                });
            });
    });

    it('fixedWidth no tip', () => {
        let ref: React.ComponentRef<typeof Range> | null = null;
        cy.mount(
            <Range
                ref={e => {
                    ref = e;
                }}
                fixedWidth
                hasTip={false}
                defaultValue={[20, 40]}
            />
        ).then(() => {
            const RangeInstance = ref?.getInstance();
            if (RangeInstance) {
                expect(RangeInstance.dom.querySelector('.next-balloon-tooltip')).to.null;
            }
        });
    });

    it('fixedWidth dragging should have active class', () => {
        let ref: React.ComponentRef<typeof Range> | null = null;
        cy.mount(
            <Range
                ref={e => {
                    ref = e;
                }}
                marks={[0, 100]}
                marksPosition="below"
                fixedWidth
                defaultValue={[20, 40]}
            />
        ).then(() => {
            const RangeInstance = ref?.getInstance();
            if (RangeInstance) {
                RangeInstance._onMouseDown({
                    button: 0,
                    pageX: 10,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                } as React.MouseEvent<HTMLDivElement>);
                expect(RangeInstance.dom.querySelector('.next-range-active')).to.not.null;
            }
        });
    });

    it('fixedWidth tooltip enter+down+leave+up', () => {
        cy.mount(<Range fixedWidth defaultValue={[20, 40]} />);
        cy.get('.next-balloon-tooltip').should('to.not.exist');
        cy.get('.next-range-frag ').then($el => {
            const mousedownEvent = new MouseEvent('mousedown', {
                clientX: 0,
                clientY: 0,
                bubbles: true,
                cancelable: true,
            });
            const mousemoveEvent = new MouseEvent('mousemove', {
                clientX: 100,
                clientY: 0,
                bubbles: true,
                cancelable: true,
            });

            $el[0].dispatchEvent(mousedownEvent);
            $el[0].dispatchEvent(mousemoveEvent);

            cy.get('.next-balloon-tooltip').should('to.exist');

            const mouseleaveEvent = new MouseEvent('mouseleave', {
                clientX: 200,
                clientY: 100,
                bubbles: true,
                cancelable: true,
            });
            $el[0].dispatchEvent(mouseleaveEvent);
            cy.get('.next-balloon-tooltip').should('to.exist');

            const mouseupEvent = new MouseEvent('mouseup', {
                clientX: 100,
                clientY: 0,
                bubbles: true,
                cancelable: true,
            });
            $el[0].dispatchEvent(mouseupEvent);
            cy.get('.next-balloon-tooltip').should('to.not.exist');
        });
    });

    it('fixedWidth tooltipVisible === true, always has tooltip', () => {
        cy.mount(<Range tooltipVisible fixedWidth defaultValue={[20, 40]} />);
        cy.get('.next-balloon-tooltip').should('to.exist');
        cy.get('.next-range-frag ').then($el => {
            const mousedownEvent = new MouseEvent('mousedown', {
                clientX: 0,
                clientY: 0,
                bubbles: true,
                cancelable: true,
            });
            const mousemoveEvent = new MouseEvent('mousemove', {
                clientX: 100,
                clientY: 0,
                bubbles: true,
                cancelable: true,
            });

            $el[0].dispatchEvent(mousedownEvent);
            $el[0].dispatchEvent(mousemoveEvent);

            cy.get('.next-balloon-tooltip').should('to.exist');

            const mouseleaveEvent = new MouseEvent('mouseleave', {
                clientX: 200,
                clientY: 100,
                bubbles: true,
                cancelable: true,
            });
            $el[0].dispatchEvent(mouseleaveEvent);
            cy.get('.next-balloon-tooltip').should('to.exist');

            const mouseupEvent = new MouseEvent('mouseup', {
                clientX: 100,
                clientY: 0,
                bubbles: true,
                cancelable: true,
            });
            $el[0].dispatchEvent(mouseupEvent);
            cy.get('.next-balloon-tooltip').should('to.exist');
        });
    });

    it('keymove right', () => {
        const onChange = (value: RangeValueType) => {
            expect(value).to.equal(3);
        };
        cy.mount(<Range defaultValue={2} hasTip onChange={onChange} />);
        cy.get('.next-range-slider').trigger('keydown', { keyCode: 39 });
    });

    it('keymove left', () => {
        const onChange = (value: RangeValueType) => {
            expect(value).to.equal(1);
        };
        cy.mount(<Range defaultValue={2} hasTip onChange={onChange} />);
        cy.get('.next-range-slider').trigger('keydown', { keyCode: 37 });
    });

    it('keymove right at rightmost', () => {
        let caller = false;
        const onChange = () => {
            caller = true;
        };
        cy.mount(<Range defaultValue={100} min={1} max={100} hasTip onChange={onChange} />);
        cy.get('.next-range-slider').trigger('keydown', { keyCode: 39 });
        expect(caller).to.equal(false);
        checkRangeSelectedDomWidthAndLeft(cy, '100%', '0%');
    });

    it('rtl', () => {
        cy.mount(<Range rtl value={10} />).as('wrapperSingle');
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperSingle'), '10%', '90%');

        cy.mount(<Range rtl slider="double" value={[10, 30]} />).as('wrapperDouble');
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperDouble'), '20%', '70%');
    });

    it('rtl & reverse', () => {
        cy.mount(<Range rtl reverse value={10} />).as('wrapperSingle');
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperSingle'), '90%', '0%');

        cy.mount(<Range rtl reverse slider="double" value={[10, 30]} />).as('wrapperDouble');
        checkRangeSelectedDomWidthAndLeft(cy.get<MountReturn>('@wrapperDouble'), '70%', '0px');
    });

    it('should isPreview', () => {
        cy.mount(<Range isPreview value={30} />).as('wrapperSingle');
        cy.get<MountReturn>('@wrapperSingle')
            .get('.next-form-preview')
            .then($el => {
                expect($el[0].innerText).to.equal('30');
            });
        cy.mount(<Range isPreview value={[10, 40]} />).as('wrapperDouble');
        cy.get<MountReturn>('@wrapperDouble')
            .get('.next-form-preview')
            .then($el => {
                expect($el[0].innerText).to.equal('10~40');
            });
    });

    it('should renderPreview', () => {
        cy.mount(<Range isPreview renderPreview={() => 'single'} value={30} />).as('wrapperSingle');
        cy.get<MountReturn>('@wrapperSingle')
            .get('.next-form-preview')
            .then($el => {
                expect($el[0].innerText).to.equal('single');
            });
        cy.mount(<Range isPreview renderPreview={() => 'double'} value={[10, 40]} />).as(
            'wrapperDouble'
        );
        cy.get<MountReturn>('@wrapperDouble')
            .get('.next-form-preview')
            .then($el => {
                expect($el[0].innerText).to.equal('double');
            });
    });
});
