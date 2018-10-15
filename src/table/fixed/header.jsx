import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import HeaderComponent from '../base/header';

/* eslint-disable react/prefer-stateless-function */
export default class FixedHeader extends React.Component {
    static propTypes = {
        children: PropTypes.any,
        prefix: PropTypes.string,
        className: PropTypes.string,
        colGroup: PropTypes.any
    }

    static contextTypes = {
        getNode: PropTypes.func,
        lockType: PropTypes.oneOf(['left', 'right'])
    }

    componentDidMount() {
        this.context.getNode('header', findDOMNode(this));
    }

    render() {
        const {prefix, className, colGroup, ...others} = this.props;
        return (<div className={className}>
            <div className={`${prefix}table-header-inner`}>
                <table>
                    {colGroup}
                    <HeaderComponent {...others} prefix={prefix}/>
                </table>
            </div>
        </div>);
    }
}

