import React, { useState } from 'react';
import Pagination from '../pagination';

describe('Pagination', () => {
    it('should receive className prop', () => {
        cy.mount(<Pagination className="custom" />)
            .get('.next-pagination')
            .should('have.class', 'custom');
    });

    it('should receive style prop', () => {
        cy.mount(<Pagination style={{ color: 'rgb(255, 0, 0)' }} />)
            .get('.next-pagination')
            .should('have.css', 'color', 'rgb(255, 0, 0)');
    });

    it('should render by type', () => {
        cy.mount(<Pagination type="mini" />)
            .get('.next-pagination')
            .should('have.class', 'next-mini')
            .get('.next-pagination-item.next-prev')
            .should('have.length', 1)
            .get('.next-pagination-item.next-next')
            .should('have.length', 1)
            .get('.next-pagination-list')
            .should('have.length', 0)
            .get('.next-pagination-display')
            .should('have.length', 0)
            .get('.next-pagination-jump-input')
            .should('have.length', 0);

        cy.mount(<Pagination type="simple" />)
            .get('.next-pagination')
            .should('have.class', 'next-simple')
            .get('.next-pagination-item.next-prev')
            .should('have.length', 1)
            .get('.next-pagination-item.next-next')
            .should('have.length', 1)
            .get('.next-pagination-list')
            .should('have.length', 0)
            .get('.next-pagination-display')
            .should('have.length', 1)
            .get('.next-pagination-jump-input')
            .should('have.length', 0);

        cy.mount(<Pagination type="normal" />)
            .get('.next-pagination')
            .should('have.class', 'next-normal')
            .get('.next-pagination-item.next-prev')
            .should('have.length', 1)
            .get('.next-pagination-item.next-next')
            .should('have.length', 1)
            .get('.next-pagination-list')
            .should('have.length', 1)
            .get('.next-pagination-display')
            .should('have.length', 1)
            .get('.next-pagination-jump-input')
            .should('have.length', 1);

        cy.mount(<Pagination type="normal" total={40} />)
            .get('.next-pagination-item.next-prev')
            .should('have.length', 1)
            .get('.next-pagination-item.next-next')
            .should('have.length', 1)
            .get('.next-pagination-list')
            .should('have.length', 1)
            .get('.next-pagination-display')
            .should('have.length', 0)
            .get('.next-pagination-jump-input')
            .should('have.length', 0);

        // @ts-expect-error-next for invalid prop type test
        cy.mount(<Pagination type="others" total={40} />)
            .get('.next-pagination-item.next-prev')
            .should('have.length', 0)
            .get('.next-pagination-item.next-next')
            .should('have.length', 0)
            .get('.next-pagination-list')
            .should('have.length', 0)
            .get('.next-pagination-display')
            .should('have.length', 0)
            .get('.next-pagination-jump-input')
            .should('have.length', 0);
    });

    it('should render by shape', () => {
        (['normal', 'arrow-only', 'arrow-prev-only', 'no-border'] as const).forEach(shape => {
            cy.mount(<Pagination shape={shape} />)
                .get('.next-pagination')
                .should('have.class', `next-${shape}`);
            cy.mount(<Pagination shape={shape} />)
                .get('.next-pagination-item.next-prev')
                .should('have.text', shape === 'normal' ? '上一页' : '');
            cy.mount(<Pagination shape={shape} />)
                .get('.next-pagination-item.next-next')
                .should(
                    'have.text',
                    shape === 'normal' || shape === 'arrow-prev-only' ? '下一页' : ''
                );
        });
    });

    it('should render by size', () => {
        (['medium', 'large'] as const).forEach(size => {
            cy.mount(<Pagination size={size} />)
                .get('.next-pagination')
                .should('have.class', `next-${size}`);
        });
    });

    it('should render by current', () => {
        const initCurrent = 2;
        let current = initCurrent;
        const onChangeCalledSpy = cy.spy();

        const PaginationWrapper = () => {
            const [currentProp, setCurrentProp] = useState(initCurrent);
            return (
                <Pagination
                    current={currentProp}
                    onChange={index => {
                        expect(index).to.equal(current);
                        setCurrentProp(index);
                        onChangeCalledSpy(index);
                    }}
                />
            );
        };

        cy.mount(<PaginationWrapper />)
            .get('.next-pagination-list .next-pagination-item.next-current')
            .then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });

        cy.then(() => {
            current = initCurrent - 1;
            cy.get('.next-pagination-item.next-prev').click();
            cy.get('.next-pagination-list .next-pagination-item.next-current').then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });
            cy.wrap(onChangeCalledSpy).should('be.calledWith', 1);
        });

        cy.then(() => {
            current = initCurrent;
            cy.get('.next-pagination-item.next-next').click();
            cy.get('.next-pagination-list .next-pagination-item.next-current').then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });
            cy.wrap(onChangeCalledSpy).should('be.calledWith', 2);
        });

        cy.then(() => {
            current = 3;
            cy.get('.next-pagination-list .next-pagination-item')
                .eq(current - 1)
                .click();
            cy.get('.next-pagination-list .next-pagination-item.next-current').then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });
            cy.wrap(onChangeCalledSpy).should('be.calledWith', 3);
        });

        cy.then(() => {
            cy.get('.next-pagination-jump-input').children('input').type(`${current}`);
            cy.get('.next-pagination-jump-input').children('input').type('{enter}');
            cy.get('.next-pagination-list .next-pagination-item.next-current').then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });
            cy.wrap(onChangeCalledSpy).should('be.calledWith', 3);
        });

        cy.then(() => {
            cy.get('.next-pagination-jump-input').children('input').clear();
            cy.get('.next-pagination-jump-input').children('input').type(`${current}`);
            cy.get('.next-pagination-jump-go').click();
            cy.get('.next-pagination-list .next-pagination-item.next-current').then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });
            cy.wrap(onChangeCalledSpy).should('be.calledWith', 3);
        });
    });

    it('should render by defaultCurrent', () => {
        let current = 2;
        const onChangeSpy = cy.spy();
        cy.mount(<Pagination defaultCurrent={current} onChange={onChangeSpy} />)
            .get('.next-pagination-list .next-pagination-item.next-current')
            .then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });

        cy.then(() => {
            current -= 1;
            cy.get('.next-pagination-item.next-prev').click();
            cy.get('.next-pagination-list .next-pagination-item.next-current').then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });
            cy.wrap(onChangeSpy).should('be.calledWith', 1);
        });

        cy.then(() => {
            current += 1;
            cy.get('.next-pagination-item.next-next').click();
            cy.get('.next-pagination-list .next-pagination-item.next-current').then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });
            cy.wrap(onChangeSpy).should('be.calledWith', 2);
        });

        cy.then(() => {
            current += 1;
            cy.get('.next-pagination-list .next-pagination-item')
                .eq(current - 1)
                .click();
            cy.get('.next-pagination-list .next-pagination-item.next-current').then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });
            cy.wrap(onChangeSpy).should('be.calledWith', 3);
        });

        cy.then(() => {
            current += 1;
            cy.get('.next-pagination-jump-input').children('input').type(`${current}`);
            cy.get('.next-pagination-jump-input input').type('{enter}');
            cy.get('.next-pagination-list .next-pagination-item.next-current').then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });
            cy.wrap(onChangeSpy).should('be.calledWith', 4);
        });

        cy.then(() => {
            current += 1;
            cy.get('.next-pagination-jump-input input').clear();
            cy.get('.next-pagination-jump-input input').type(`${current}`);
            cy.get('.next-pagination-jump-go').click();
            cy.get('.next-pagination-list .next-pagination-item.next-current').then($current => {
                expect($current).to.have.length(1);
                expect($current).to.have.text(current.toString());
            });
            cy.wrap(onChangeSpy).should('be.calledWith', 5);
        });
    });

    it('should not trigger onChange callback when click current page button', () => {
        const onChangeSpy = cy.spy();
        cy.mount(<Pagination onChange={onChangeSpy} />)
            .get('.next-pagination-list .next-pagination-item')
            .eq(0)
            .click();

        cy.wrap(onChangeSpy).should('not.be.called');
    });

    it('should disable the previous button when current is the first page ', () => {
        cy.mount(<Pagination current={1} />)
            .get('.next-pagination-item.next-prev')
            .then($current => {
                expect($current).to.be.disabled;
            });
    });

    it('should disable the next button when current is the last page', () => {
        cy.mount(<Pagination current={10} total={100} />)
            .get('.next-pagination-item.next-next')
            .then($current => {
                expect($current).to.have.disabled;
            });
    });

    it('should update when current is illegal', () => {
        const initalValue = 1;
        // 设置初始值
        cy.mount(<Pagination total={100} />);

        const testCase = (current: number | string, rightValue: number) => {
            cy.get('.next-pagination-jump-input input').clear();
            cy.get('.next-pagination-jump-input input').type(`${current}`);

            cy.get('.next-pagination-jump-input input').type('{enter}');
            cy.get('.next-pagination-list .next-pagination-item.next-current').should(
                'contain',
                rightValue
            ); // 验证显示的当前页应是预期值
        };

        testCase('text', initalValue);
        testCase('-1', 1);
        testCase('0', 1);
        testCase('3', 3);
        testCase('44444', 10);
        testCase(-1, 1);
        testCase(0, 1);
        testCase(3, 3);
        testCase(44444, 10);
    });

    it('should render by total, pageSize, showCount and hideOnlyOnePage', () => {
        cy.mount(<Pagination total={0} />)
            .get('.next-pagination')
            .should('not.have.class', 'next-hide')
            .get('.next-pagination-list .next-pagination-item')
            .then($current => {
                expect($current).to.have.length(1);
            });

        cy.mount(<Pagination total={0} hideOnlyOnePage />)
            .get('.next-pagination')
            .should('have.class', 'next-hide')
            .get('.next-pagination-list .next-pagination-item')
            .then($current => {
                expect($current).to.have.length(1);
            });

        cy.mount(<Pagination total={50} />)
            .get('.next-pagination-list')
            .children()
            .then($current => {
                expect($current).to.have.length(5);
                $current.children().each((index, item) => {
                    expect(item.textContent).to.equal((index + 1).toString());
                });
            });

        cy.mount(<Pagination total={101} pageSize={5} pageShowCount={9} current={11} />)
            .get('.next-pagination-list')
            .children()
            .then($current => {
                expect($current).to.have.length(11);
                $current.each((index, item) => {
                    if (index === 0) {
                        expect(item).to.have.class('next-btn');
                        expect(item.textContent).to.equal('1');
                    } else if (index === 10) {
                        expect(item).to.have.class('next-btn');
                        expect(item.textContent).to.equal('21');
                    } else if (index === 1 || index === 9) {
                        expect(item).to.have.class('next-pagination-ellipsis');
                    } else {
                        expect(item).to.have.class('next-btn');
                        expect(item.textContent).to.equal((index + 6).toString());
                    }
                });
            });

        cy.mount(<Pagination total={101} pageSize={5} pageShowCount={9} current={1} />);
        cy.get('.next-pagination-list')
            .children()
            .should('have.length', 10)
            .get('.next-pagination-list')
            .children()
            .each((item, index) => {
                if (index === 9) {
                    expect(item).to.have.class('next-btn');
                    expect(item.text()).to.equal('21');
                } else if (index === 8) {
                    expect(item).to.have.class('next-pagination-ellipsis');
                } else {
                    expect(item).to.have.class('next-btn');
                    expect(item.text()).to.equal((index + 1).toString());
                }
            });

        cy.mount(<Pagination total={101} pageSize={5} pageShowCount={9} current={21} />)
            .get('.next-pagination-list')
            .children()
            .should('have.length', 10)
            .get('.next-pagination-list')
            .children()
            .each((item, index) => {
                if (index === 0) {
                    expect(item).to.have.class('next-btn');
                    expect(item.text()).to.equal('1');
                } else if (index === 1) {
                    expect(item).to.have.class('next-pagination-ellipsis');
                } else {
                    expect(item).to.have.class('next-btn');
                    expect(item.text()).to.equal((index + 12).toString());
                }
            });
    });

    it('should next- jump and display parts if the type is normal when set showJump to false ', () => {
        cy.mount(<Pagination />)
            .get('.next-pagination-jump-input')
            .should('have.length', 1)
            .get('.next-pagination-display')
            .should('have.length', 1);

        cy.mount(<Pagination showJump={false} />)
            .get('.next-pagination-jump-input')
            .should('have.length', 0)
            .get('.next-pagination-display')
            .should('have.length', 0);
    });

    it('should render page size selector when set pageSizeSelector to filter', () => {
        let currentPageSize = 50;
        const pageSizeList = [10, 20, 50];
        const onPageSizeChangeSpy = cy.spy();
        cy.mount(
            <Pagination
                total={500}
                pageSize={currentPageSize}
                pageSizeSelector="filter"
                pageSizeList={pageSizeList}
                onPageSizeChange={onPageSizeChangeSpy}
            />
        );
        cy.get('.next-pagination-size-selector .next-pagination-size-selector-filter').should(
            'have.length',
            1
        );
        cy.get('.next-pagination-size-selector-btn').each((item, index) => {
            expect(item.text()).to.equal(pageSizeList[index].toString());
        });
        cy.get('.next-pagination-size-selector-btn').eq(2).should('have.class', 'next-current');

        currentPageSize = 20;
        cy.get('.next-pagination-size-selector-btn').eq(1).click();

        cy.wrap(onPageSizeChangeSpy).should('be.calledWith', 20);
    });

    it('should render page size selector when set pageSizeSelector to filter with object', () => {
        let currentPageSize = 50;
        const pageSizeList = [
            { label: '10/页', value: 10 },
            { label: '20/页', value: 20 },
            { label: '50/页', value: 50 },
        ];
        const onPageSizeChangeSpy = cy.spy();
        cy.mount(
            <Pagination
                total={500}
                pageSize={currentPageSize}
                pageSizeSelector="filter"
                pageSizeList={pageSizeList}
                onPageSizeChange={onPageSizeChangeSpy}
            />
        )
            .get('.next-pagination-size-selector .next-pagination-size-selector-filter')
            .should('have.length', 1);
        cy.get('.next-pagination-size-selector-btn').each((item, index) => {
            expect(item.text()).to.equal(pageSizeList[index].label);
        });
        cy.get('.next-pagination-size-selector-btn').eq(2).should('have.class', 'next-current');

        currentPageSize = 20;
        cy.get('.next-pagination-size-selector-btn').eq(1).click();

        cy.wrap(onPageSizeChangeSpy).should('be.calledWith', 20);
    });

    it('should render page size selector when set pageSizeSelector to dropdown', () => {
        const pageSizeList = [10, 20, 50];
        const onPageSizeChangeSpy = cy.spy();
        cy.mount(
            <Pagination
                total={500}
                pageSizeSelector="dropdown"
                pageSizeList={pageSizeList}
                pageSizePosition="end"
                onPageSizeChange={onPageSizeChangeSpy}
            />
        );
        cy.get('.next-pagination-size-selector .next-pagination-size-selector-dropdown').should(
            'have.length',
            1
        );
        cy.get('.next-pagination-size-selector-dropdown').click();

        cy.get('.next-menu li').each((item, index) => {
            expect(item.text().trim()).to.equal(pageSizeList[index].toString());
        });
        cy.get('.next-menu li').eq(0).should('have.class', 'next-selected');

        cy.get('.next-menu li').eq(1).click();
        cy.wrap(onPageSizeChangeSpy).should('be.calledWith', 20);

        cy.get('.next-menu li').eq(2).click();
        cy.wrap(onPageSizeChangeSpy).should('be.calledWith', 50);
    });

    it('should render a tag with the specified href when set link', () => {
        cy.mount(<Pagination link="https://www.taobao.com/{page}" />)
            .get('.next-pagination-list a.next-pagination-item')
            .eq(0)
            .should('have.attr', 'href', 'https://www.taobao.com/1');
    });

    it('should render page total number', () => {
        cy.mount(
            <Pagination total={500} totalRender={() => <div className="test-totalRender" />} />
        )
            .get('.test-totalRender')
            .should('have.length', 1);
    });

    it('should render page numder by cust render fuction, by pageNumberRender', () => {
        cy.mount(<Pagination total={10} pageNumberRender={index => `${index}test`} />)
            .get('.next-pagination-list')
            .children()
            .each((item, index) => {
                expect(item.text()).to.equal(`${(index + 1).toString()}test`);
            });
    });

    it('should support device transfer type to simple', () => {
        cy.mount(<Pagination device="phone" type="normal" />)
            .get('.next-simple')
            .should('have.length.greaterThan', 0);
    });
});
