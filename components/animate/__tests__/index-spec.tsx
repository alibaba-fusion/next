import React from 'react';
import PropTypes from 'prop-types';
import Animate, { type AnimateProps } from '../index';
import './index-spec.scss';

interface DemoProps extends AnimateProps {
    visible?: boolean;
    expand?: boolean;
}

class Demo extends React.Component<DemoProps, { visible: boolean }> {
    static propTypes = {
        visible: PropTypes.bool,
        expand: PropTypes.bool,
    };

    static defaultProps = {
        visible: false,
        expand: false,
    };

    constructor(props: DemoProps) {
        super(props);
        this.state = { visible: props.visible! };
    }

    handleToggle = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };

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

    it('should play expand animation(height from 0 to auto)', () => {
        cy.mount(<Demo visible={false} expand animation="expand" />);
        cy.get('button').click();
        cy.get('.demo-wrapper')
            .invoke('height')
            .should('satisfy', num => {
                // 避免不同浏览器对 .5px 处理方式的不同造成的测试失败，下同
                cy.task('log', num);
                return num < 24;
            });
        cy.get('.demo-wrapper')
            .invoke('height')
            .should('satisfy', num => {
                // 这里多考虑了一些不同运行环境下具体值的扰动问题
                return num >= 220 && num <= 224;
            });
        cy.get('button').click();
        cy.get('.basic-demo').should('not.exist');
        cy.get('button').click();
    });
});
