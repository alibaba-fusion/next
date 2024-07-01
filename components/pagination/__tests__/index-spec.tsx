import React from 'react';
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

        // @ts-ignore-next
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
                .invoke('text')
                .then(prevText => {
                    if (shape === 'normal') {
                        expect(prevText).to.equal('上一页');
                    } else {
                        expect(prevText).to.equal('');
                    }
                });
            cy.mount(<Pagination shape={shape} />)
                .get('.next-pagination-item.next-next')
                .invoke('text')
                .then(nextText => {
                    if (shape === 'normal' || shape === 'arrow-prev-only') {
                        expect(nextText).to.equal('下一页');
                    } else {
                        expect(nextText).to.equal('');
                    }
                });
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

        cy.mount(
            <Pagination
                current={initCurrent}
                onChange={index => {
                    expect(index).to.equal(current);
                }}
            />
        )
            .get('.next-pagination-list .next-pagination-item.next-current')
            .should('have.length', 1)
            .get('.next-pagination-list .next-pagination-item.next-current')
            .should('have.text', initCurrent.toString());

        cy.wrap(() => {
            current = initCurrent - 1;
            cy.get('.next-pagination-item.next-prev').click();
            cy.get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.length', 1)
                .get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.text', current.toString());
        });

        cy.wrap(() => {
            current = initCurrent + 1;
            cy.get('.next-pagination-item.next-next').click();
            cy.get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.length', 1)
                .get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.text', current.toString());
        });

        cy.wrap(() => {
            current = 3;
            cy.get('.next-pagination-list .next-pagination-item')
                .eq(current - 1)
                .click();
            cy.get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.length', 1)
                .get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.text', current.toString());
        });
        cy.get('.next-pagination-jump-input').children('input').type(`${current}`);
        cy.get('.next-pagination-jump-input').children('input').type('{enter}');
        cy.get('.next-pagination-list .next-pagination-item.next-current')
            .should('have.length', 1)
            .get('.next-pagination-list .next-pagination-item.next-current')
            .should('have.text', current.toString());

        cy.get('.next-pagination-jump-input').children('input').clear();
        cy.get('.next-pagination-jump-input').children('input').type(`${current}`);
        cy.get('.next-pagination-jump-go').click();
        cy.get('.next-pagination-list .next-pagination-item.next-current')
            .should('have.length', 1)
            .get('.next-pagination-list .next-pagination-item.next-current')
            .should('have.text', current.toString());
    });

    it('should render by defaultCurrent', () => {
        let current = 2;
        cy.mount(
            <Pagination
                defaultCurrent={current}
                onChange={index => {
                    expect(index).to.equal(current);
                }}
            />
        )
            .get('.next-pagination-list .next-pagination-item.next-current')
            .should('have.length', 1)
            .get('.next-pagination-list .next-pagination-item.next-current')
            .should('have.text', current.toString());

        cy.wrap(() => {
            current -= 1;
            cy.get('.next-pagination-item.next-prev').click();
            cy.get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.length', 1)
                .get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.text', current.toString());
        });

        cy.wrap(() => {
            current += 1;
            cy.get('.next-pagination-item.next-next').click();
            cy.get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.length', 1)
                .get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.text', current.toString());
        });

        cy.wrap(() => {
            current += 1;
            cy.get('.next-pagination-list .next-pagination-item')
                .eq(current - 1)
                .click();
            cy.get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.length', 1)
                .get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.text', current.toString());
        });

        cy.wrap(() => {
            current += 1;
            cy.get('.next-pagination-jump-input').children('input').type(`${current}`);
            cy.get('.next-pagination-jump-input input').type('{enter}');
            cy.get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.length', 1)
                .get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.text', current.toString());
        });

        cy.wrap(() => {
            current += 1;
            cy.get('.next-pagination-jump-input input').clear();
            cy.get('.next-pagination-jump-input input').type(`${current}`);
            cy.get('.next-pagination-jump-go').click();
            cy.get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.length', 1)
                .get('.next-pagination-list .next-pagination-item.next-current')
                .should('have.text', current.toString());
        });
    });

    it('should not trigger onChange callback when click current page button', () => {
        cy.mount(
            <Pagination
                onChange={() => {
                    expect(false).to.be.true;
                }}
            />
        )
            .get('.next-pagination-list .next-pagination-item')
            .eq(0)
            .click();
    });

    it('should disable the previous button when current is the first page ', () => {
        cy.mount(<Pagination current={1} />)
            .get('.next-pagination-item.next-prev')
            .should('be.disabled');
    });

    it('should disable the next button when current is the last page', () => {
        cy.mount(<Pagination current={10} total={100} />)
            .get('.next-pagination-item.next-next')
            .should('be.disabled');
    });

    it('should update when current is illegal', () => {
        const initialValue = 5;
        cy.mount(<Pagination current={initialValue} total={100} />)
            .get('.next-pagination-jump-input input')
            .clear()
            .type('text')
            .type('{enter}');
        // 由于输入不合法，无法触发 onChange，因此无法断言
        // 这里可以改成断言页面显示的数字，但是需要改写 Pagination 组件
        // 才能在输入不合法的情况下正确显示当前页码

        cy.mount(<Pagination current={initialValue} total={100} />)
            .get('.next-pagination-jump-input input')
            .clear()
            .type('-1')
            .type('{enter}');

        cy.mount(<Pagination current={initialValue} total={100} />)
            .get('.next-pagination-jump-input input')
            .clear()
            .type('0')
            .type('{enter}');

        cy.mount(<Pagination current={initialValue} total={100} />)
            .get('.next-pagination-jump-input input')
            .clear()
            .type('3')
            .type('{enter}');

        cy.mount(<Pagination current={initialValue} total={100} />)
            .get('.next-pagination-jump-input input')
            .clear()
            .type('44444')
            .type('{enter}');
    });

    it('should render by total, pageSize, showCount and hideOnlyOnePage', () => {
        cy.mount(<Pagination total={0} />)
            .get('.next-pagination')
            .should('not.have.class', 'next-hide')
            .get('.next-pagination-list .next-pagination-item')
            .should('have.length', 1);

        cy.mount(<Pagination total={0} hideOnlyOnePage={true} />)
            .get('.next-pagination')
            .should('have.class', 'next-hide')
            .get('.next-pagination-list .next-pagination-item')
            .should('have.length', 1);

        cy.mount(<Pagination total={50} />)
            .get('.next-pagination-list')
            .children()
            .should('have.length', 5)
            .get('.next-pagination-list')
            .children()
            .each((item, index) => {
                expect(item.text()).to.equal((index + 1).toString());
            });

        cy.mount(<Pagination total={101} pageSize={5} pageShowCount={9} current={11} />)
            .get('.next-pagination-list')
            .children()
            .should('have.length', 11)
            .get('.next-pagination-list')
            .children()
            .each((item, index) => {
                if (index === 0) {
                    expect(item).to.have.class('next-btn');
                    expect(item.text()).to.equal('1');
                } else if (index === 10) {
                    expect(item).to.have.class('next-btn');
                    expect(item.text()).to.equal('21');
                } else if (index === 1 || index === 9) {
                    expect(item).to.have.class('next-pagination-ellipsis');
                } else {
                    expect(item).to.have.class('next-btn');
                    expect(item.text()).to.equal((index + 6).toString());
                }
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
        cy.mount(
            <Pagination
                total={500}
                pageSize={currentPageSize}
                pageSizeSelector="filter"
                pageSizeList={pageSizeList}
                onPageSizeChange={size => {
                    expect(size).to.equal(currentPageSize);
                }}
            />
        )
            .get('.next-pagination-size-selector .next-pagination-size-selector-filter')
            .should('have.length', 1)
            .get('.next-pagination-size-selector-btn')
            .each((item, index) => {
                expect(item.text()).to.equal(pageSizeList[index].toString());
            })
            .get('.next-pagination-size-selector-btn')
            .eq(2)
            .should('have.class', 'next-current');

        currentPageSize = 20;
        cy.get('.next-pagination-size-selector-btn').eq(1).click();
    });

    it('should render page size selector when set pageSizeSelector to filter with object', () => {
        let currentPageSize = 50;
        const pageSizeList = [
            { label: '10/页', value: 10 },
            { label: '20/页', value: 20 },
            { label: '50/页', value: 50 },
        ];
        cy.mount(
            <Pagination
                total={500}
                pageSize={currentPageSize}
                pageSizeSelector="filter"
                pageSizeList={pageSizeList}
                onPageSizeChange={size => {
                    expect(size).to.equal(currentPageSize);
                }}
            />
        )
            .get('.next-pagination-size-selector .next-pagination-size-selector-filter')
            .should('have.length', 1)
            .get('.next-pagination-size-selector-btn')
            .each((item, index) => {
                expect(item.text()).to.equal(pageSizeList[index].label);
            })
            .get('.next-pagination-size-selector-btn')
            .eq(2)
            .should('have.class', 'next-current');

        currentPageSize = 20;
        cy.get('.next-pagination-size-selector-btn').eq(1).click();
    });

    it('should render page size selector when set pageSizeSelector to dropdown', () => {
        let currentPageSize = 50;
        const pageSizeList = [10, 20, 50];
        cy.mount(
            <Pagination
                total={500}
                pageSize={currentPageSize}
                pageSizeSelector="dropdown"
                pageSizeList={pageSizeList}
                pageSizePosition="end"
                onPageSizeChange={size => {
                    expect(size).to.equal(currentPageSize);
                }}
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
        cy.get('.next-menu li').eq(2).should('have.class', 'next-selected');

        cy.wrap(() => {
            currentPageSize = 20;
            cy.get('.next-menu li').eq(1).click();
        });

        cy.wrap(() => {
            currentPageSize = 50;
            cy.get('.next-menu li').eq(2).click();
        });
        cy.get('.next-pagination-list .next-pagination-item.next-current').contains('1');
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
        cy.mount(<Pagination total={10} pageNumberRender={index => index + 'test'} />)
            .get('.next-pagination-list')
            .children()
            .each((item, index) => {
                expect(item.text()).to.equal((index + 1).toString() + 'test');
            });
    });

    it('should support device transfer type to simple', () => {
        cy.mount(<Pagination device="phone" type="normal" />)
            .get('.next-simple')
            .should('have.length.greaterThan', 0);
    });
});
