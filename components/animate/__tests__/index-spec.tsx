import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import assert from 'power-assert';
import co from 'co';
import { dom, env } from '../../util';
import Animate from '../index';
import './index-spec.scss';

/* eslint-disable react/jsx-filename-extension, react/no-multi-comp, react/prop-types, react/prefer-stateless-function */
/* global describe, it, beforeEach, afterEach */

const { hasClass, getStyle } = dom;
const { ieVersion } = env;

class Demo extends React.Component {
    static propTypes = {
        visible: PropTypes.bool,
        expand: PropTypes.bool,
    };

    static defaultProps = {
        visible: false,
        expand: false,
    };

    constructor(props) {
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
        // eslint-disable-next-line
        const { visible, expand, ...others } = this.props;
        const A = expand ? Animate.Expand : Animate;

        return (
            <div>
                <button onClick={this.handleToggle}>Toggle visible</button>
                <A animation="my-zoom" {...others}>
                    {this.state.visible ? <div className="basic-demo">Next Animate</div> : null}
                </A>
            </div>
        );
    }
}

const delay = time => new Promise(resolve => setTimeout(resolve, time));

describe('Animate', () => {
    let mountNode;

    beforeEach(() => {
        mountNode = document.createElement('div');
        document.body.appendChild(mountNode);
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(mountNode);
        document.body.removeChild(mountNode);
    });

    if (ieVersion === 9) {
        it('should visible and hide immediately', () => {
            ReactDOM.render(<Demo visible />, mountNode);
            assert(document.querySelector('.basic-demo'));
            const btn = document.querySelector('button');
            btn.click();
            assert(!document.querySelector('.basic-demo'));
            btn.click();
            assert(document.querySelector('.basic-demo'));
        });

        return;
    }

    it('should play appear animation', () => {
        return co(function* () {
            ReactDOM.render(<Demo visible />, mountNode);
            const demo = document.querySelector('.basic-demo');
            assert(hasClass(demo, 'my-zoom-appear'));
            yield delay(15);
            assert(hasClass(demo, 'my-zoom-appear-active'));
            yield delay(600);
            assert(!hasClass(demo, 'my-zoom-appear'));
            assert(!hasClass(demo, 'my-zoom-appear-active'));
        });
    });

    it('should not play appear animation if set animationAppear to false', () => {
        return co(function* () {
            ReactDOM.render(<Demo visible animationAppear={false} />, mountNode);
            const demo = document.querySelector('.basic-demo');
            assert(!hasClass(demo, 'my-zoom-appear'));
            yield delay(15);
            assert(!hasClass(demo, 'my-zoom-appear-active'));
        });
    });

    it('should play enter animation', () => {
        return co(function* () {
            ReactDOM.render(<Demo />, mountNode);
            const btn = document.querySelector('button');
            btn.click();
            const demo = document.querySelector('.basic-demo');
            assert(hasClass(demo, 'my-zoom-enter'));
            yield delay(15);
            assert(hasClass(demo, 'my-zoom-enter-active'));
            yield delay(600);
            assert(!hasClass(demo, 'my-zoom-enter'));
            assert(!hasClass(demo, 'my-zoom-enter-active'));
        });
    });

    it('should play leave animation', () => {
        return co(function* () {
            ReactDOM.render(<Demo visible animationAppear={false} />, mountNode);
            const btn = document.querySelector('button');
            btn.click();
            const demo = document.querySelector('.basic-demo');
            assert(hasClass(demo, 'my-zoom-leave'));
            yield delay(15);
            assert(hasClass(demo, 'my-zoom-leave-active'));
            yield delay(600);
            assert(!document.querySelector('.basic-demo'));
        });
    });

    it('should support passing object to animation property', () => {
        return co(function* () {
            ReactDOM.render(
                <Demo
                    animation={{
                        enter: 'my-zoom-in',
                        leave: 'my-zoom-out',
                    }}
                />,
                mountNode
            );
            const btn = document.querySelector('button');
            btn.click();
            const demo = document.querySelector('.basic-demo');
            assert(hasClass(demo, 'my-zoom-in'));
            yield delay(15);
            assert(hasClass(demo, 'my-zoom-in-active'));
            yield delay(600);
            assert(!hasClass(demo, 'my-zoom-in'));
            assert(!hasClass(demo, 'my-zoom-in-active'));

            btn.click();
            assert(hasClass(demo, 'my-zoom-out'));
            yield delay(15);
            assert(hasClass(demo, 'my-zoom-out-active'));
            yield delay(600);
            assert(!document.querySelector('.basic-demo'));
        });
    });

    it('should play expand animation', () => {
        return co(function* () {
            ReactDOM.render(<Demo visible={false} expand animation="expand" />, mountNode);
            const btn = document.querySelector('button');
            btn.click();
            const demo = document.querySelector('.basic-demo');
            assert(getStyle(demo, 'height') === 0);
            yield delay(500);
            assert(getStyle(demo, 'height') === 200);

            btn.click();
            yield delay(500);
            assert(!document.querySelector('.basic-demo'));
        });
    });
});
