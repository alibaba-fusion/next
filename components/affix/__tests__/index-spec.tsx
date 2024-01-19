import React from 'react';
import Button from '../../button';
import Affix from '../index';

class AffixDemo extends React.Component<unknown, { offsetTop: number; affixed: boolean }> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            affixed: false,
            offsetTop: 0,
        };
    }

    container: HTMLDivElement | null;

    changeOffset() {
        const { offsetTop } = this.state;
        this.setState({
            offsetTop: offsetTop + 10,
        });
    }

    render() {
        const { offsetTop } = this.state;
        return (
            <div
                className="affix-demo"
                ref={ref => {
                    this.container = ref;
                }}
                style={{ height: 100, overflowY: 'scroll' }}
            >
                <div
                    className="affix-wrapper"
                    style={{ padding: 60, height: 300, background: '#eee' }}
                >
                    <Affix offsetTop={offsetTop} container={() => this.container!}>
                        <Button onClick={this.changeOffset.bind(this)}>hello world</Button>
                    </Affix>
                </div>
            </div>
        );
    }
}

describe('Affix', () => {
    describe('render', () => {
        it('should render', () => {
            const style = { padding: '40px 0' };
            cy.mount(
                <div style={style}>
                    <Affix>
                        <Button type="secondary"> Hello World </Button>
                    </Affix>
                </div>
            );
            cy.get('.next-btn').parent().not('.next-affix');
        });

        it('shoud render with affixTop', () => {
            const style = { padding: '40px 0' };
            cy.mount(
                <div style={style}>
                    <Affix offsetTop={0}>
                        <Button type="secondary"> Hello World </Button>
                    </Affix>
                </div>
            );
            cy.get('.next-affix-top');
        });

        it('shoud render with affixBottom', () => {
            const style = { padding: '40px 0' };
            cy.mount(
                <div style={style}>
                    <Affix offsetBottom={0}>
                        <Button type="secondary"> Hello World </Button>
                    </Affix>
                </div>
            );
            cy.get('.next-affix-bottom');
        });

        it('shoud render with affixTop useAbsolute', () => {
            const style = { padding: '40px 0' };
            cy.mount(
                <div style={style}>
                    <Affix offsetTop={0} useAbsolute>
                        <Button type="secondary"> Hello World </Button>
                    </Affix>
                </div>
            );
            cy.get('.next-affix-top');
        });

        it('shoud render with affixBottom useAbsolute', () => {
            const style = { padding: '40px 0' };
            cy.mount(
                <div style={style}>
                    <Affix offsetBottom={0} useAbsolute>
                        <Button type="secondary"> Hello World </Button>
                    </Affix>
                </div>
            );
            cy.get('.next-affix-bottom');
        });

        it('should render with specified target', () => {
            cy.mount(<AffixDemo />);
            cy.get('.next-affix-top');

            cy.get('div.affix-demo').scrollTo(0, 200);
            cy.get('.next-affix');
        });

        it('should receive offset change', () => {
            cy.mount(<AffixDemo />);
            cy.get('.next-affix-top');
            cy.get('.next-btn').click();
            cy.get('.next-affix');
        });
    });
});
