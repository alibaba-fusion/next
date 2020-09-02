import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Menu from '../../menu';
import switcher from './switcher';

const MenuRenderer = props => {
    return Array.isArray(props.list) && props.list.length > 0 ? (
        <Menu
            mode="popup"
            selectMode="single"
            triggerType="hover"
            popupProps={{
                animation: false,
            }}
            className={classnames('cabala-tree-context-menu')}
            onItemClick={props.onItemClick}
        >
            {switcher(props.list)}
        </Menu>
    ) : null;
};
MenuRenderer.propTypes = {
    list: PropTypes.array,
    onItemClick: PropTypes.func,
};

export default MenuRenderer;
