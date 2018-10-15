import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {func, obj} from '../util';
import Icon from '../icon';
import {normalMap, edgeMap} from './alignMap';

/**
 * Created by xiachi on 17/2/10.
 */

const {noop} = func;

class BalloonInner extends React.Component {
    static contextTypes = {
        prefix: PropTypes.string
    }
    static propTypes = {
        prefix: PropTypes.string,
        closable: PropTypes.bool,
        children: PropTypes.any,
        className: PropTypes.string,
        alignEdge: PropTypes.bool,
        onClose: PropTypes.func,
        style: PropTypes.any,
        align: PropTypes.string,
        type: PropTypes.string,
        isTooltip: PropTypes.bool,
        pure: PropTypes.bool
    }
    static defaultProps = {
        prefix: 'next-',
        closable: true,
        onClose: noop,
        align: 'b',
        type: 'normal',
        alignEdge: false,
        pure: false
    };

    render() {
        const {prefix, closable, className, style, isTooltip, align, type, onClose, alignEdge, children, ...others} = this.props;

        const alignMap = alignEdge ? edgeMap : normalMap;
        let _prefix = prefix;

        if (isTooltip) {
            _prefix = `${_prefix}balloon-tooltip`;
        } else {
            _prefix = `${_prefix}balloon`;
        }

        const classes = classNames({
            [`${_prefix}`]: true,
            [`${_prefix}-${type}`]: type,
            [`${_prefix}-medium`]: true,
            [`${_prefix}-${alignMap[align].arrow}`]: alignMap[align],
            [`${_prefix}-closable`]: closable,
            [className]: className
        });

        return (<div role="tooltip" className={classes} style={style} {...obj.pickOthers(Object.keys(BalloonInner.propTypes), others)}>
            {
                closable ?
                    <a role="button" tabIndex="0" href="javascript:void(0);" className={`${_prefix}-close`}
                        onClick={onClose}>
                        <Icon type="close" size="small"/>
                    </a> : null}
            {children}
        </div>);
    }
}

export default BalloonInner;
