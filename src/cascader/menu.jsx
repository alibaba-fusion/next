import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import Menu from '../menu';

export default class CascaderMenu extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node
    };

    componentDidMount() {
        const { prefix } = this.props;
        const itemSelector = `.${prefix}menu-item`;
        const menu = findDOMNode(this.refs.menu);
        const targetItem = menu.querySelector(`${itemSelector}.${prefix}expanded, ${itemSelector}.${prefix}selected`);
        if (targetItem) {
            menu.scrollTop = targetItem.offsetTop - Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) * targetItem.clientHeight;
        }
    }

    render() {
        const { prefix, className, children, ...others } = this.props;
        const newClassName = cx({
            [`${prefix}cascader-menu`]: true,
            [className]: !!className
        });

        return (
            <Menu labelToggleChecked={false} className={newClassName} ref="menu" role="listbox" {...others}>
                {children}
            </Menu>
        );
    }
}
