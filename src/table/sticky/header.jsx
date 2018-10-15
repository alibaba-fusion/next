import React from 'react';
import PropTypes from 'prop-types';
import Affix from '../../affix';

/* eslint-disable react/prefer-stateless-function*/
export default class StickHeader extends React.Component {
    static contextTypes = {
        Header: PropTypes.any,
        offsetTop: PropTypes.number,
        affixProps: PropTypes.object
    }
    render() {
        const {Header, offsetTop, affixProps} = this.context;
        return (<Affix {...affixProps} offsetTop={offsetTop}>
            <Header {...this.props}/>
        </Affix>);
    }
}
