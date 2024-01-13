import React from 'react';
import PropTypes from 'prop-types';
import Animate from '../index';
import './index-spec.scss';

class Demo extends React.Component<any, any> {
    static propTypes = {
        visible: PropTypes.bool,
        expand: PropTypes.bool,
    };

    static defaultProps = {
        visible: false,
        expand: false,
    };

    constructor(props: any) {
        super(props);
        this.state = { visible: props.visible };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible,
        });
    }

    render() {
        const { visible, expand, ...others } = this.props;
        const A = expand ? Animate.Expand : Animate;

        return (
            <div className="demo-wrapper">
                <button onClick={this.handleToggle}>Toggle visible</button>
                <A animation="my-zoom" {...others}>
                    {this.state.visible ? <div className="basic-demo">Next Animate</div> : null}
                </A>
            </div>
        );
    }
}

describe('Animate', () => {
    it('should play appear animation', () => {
        cy.mount(<Demo visible />);
        cy.get('.basic-demo').should('have.class', 'my-zoom-appear');
        cy.get('.basic-demo').should('have.class', 'my-zoom-appear-active');
        cy.get('.basic-demo').should('not.have.class', 'my-zoom-appear');
        cy.get('.basic-demo').should('not.have.class', 'my-zoom-appear-active');
    });

    it('should not play appear animation if set animationAppear to false', () => {
        cy.mount(<Demo visible animationAppear={false} />);
        cy.get('.basic-demo').should('not.have.class', 'my-zoom-appear');
        cy.get('.basic-demo').should('not.have.class', 'my-zoom-appear-active');
    });

    it('should play enter animation', () => {
        cy.mount(<Demo />);
        cy.get('button').click();
        cy.get('.basic-demo').should('have.class', 'my-zoom-enter');
        cy.get('.basic-demo').should('have.class', 'my-zoom-enter-active');
        cy.get('.basic-demo').should('not.have.class', 'my-zoom-enter');
        cy.get('.basic-demo').should('not.have.class', 'my-zoom-enter-active');
    });

    it('should play leave animation', () => {
        cy.mount(<Demo visible animationAppear={false} />);
        cy.get('button').click();
        cy.get('.basic-demo').should('have.class', 'my-zoom-leave');
        cy.get('.basic-demo').should('have.class', 'my-zoom-leave-active');
        cy.get('.basic-demo').should('not.exist');
    });

    it('should support passing object to animation property', () => {
        cy.mount(
            <Demo
                animation={{
                    enter: 'my-zoom-in',
                    leave: 'my-zoom-out',
                }}
            />
        );
        cy.get('button').click();
        cy.get('.basic-demo').should('have.class', 'my-zoom-in');
        cy.get('.basic-demo').should('have.class', 'my-zoom-in-active');
        cy.get('.basic-demo').should('not.have.class', 'my-zoom-in');
        cy.get('.basic-demo').should('not.have.class', 'my-zoom-in-active');
        cy.get('button').click();
        cy.get('.basic-demo').should('have.class', 'my-zoom-out');
        cy.get('.basic-demo').should('have.class', 'my-zoom-out-active');
        cy.get('.basic-demo').should('not.exist');
    });

    it('should play expand animation', () => {
        cy.mount(<Demo visible={false} expand animation="expand" />);
        cy.get('button').click();
        cy.get('.demo-wrapper').should('have.css', 'height', '23.5px');
        cy.get('.demo-wrapper').should('have.css', 'height', '223.5px');
        cy.get('button').click();
        cy.get('.basic-demo').should('not.exist');
        cy.get('button').click();
    });
});
