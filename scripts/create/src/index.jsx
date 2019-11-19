import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';

/**
 * {{ name }}
 */
class {{ name }} extends Component {
    static propTypes = {
        className: PropTypes.any,
    };

    static defaultProps = {

    };

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state) {

    }

    render() {
        return <div></div>;
    }
}

export default ConfigProvider.config(polyfill({{ name }}));
