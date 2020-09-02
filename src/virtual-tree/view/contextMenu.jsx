import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Overlay from '../../overlay';
import MenuRenderer from './menuRenderer';
import * as contextMenuController from '../controller/contextMenu';
import useModel from '../model/contextMenu';
import TreeContext from '../context/tree';

const ContextMenu = props => {
    const treeModel = React.useContext(TreeContext);
    const contextMenuModel = useModel();
    const ref = React.useRef(null);
    const target = props.treeRef.current ? props.treeRef.current.target : undefined;
    contextMenuController.useEffects(props, treeModel, contextMenuModel, ref);
    return (
        <Overlay
            rtl={false}
            ref={ref}
            align="tl tl"
            target={target}
            safeNode={target}
            offset={treeModel.offset}
            visible={treeModel.visible}
            className={classnames('cabala-tree-item-context-menu')}
            onRequestClose={contextMenuController.getOnClose(treeModel)}
            animation={false}
            needAdjust={false}
            shouldUpdatePosition
        >
            {props.renderContextMenu({
                onItemClick: contextMenuController.getOnContextMenuItemClick(props, treeModel),
                list: contextMenuModel.list,
            })}
        </Overlay>
    );
};
ContextMenu.propTypes = {
    treeRef: PropTypes.object,
    renderContextMenu: PropTypes.func,
};
ContextMenu.defaultProps = {
    getContextMenuList: () => [],
    onContextMenuItemClick: () => {},
    renderContextMenu: MenuRenderer,
};

export default ContextMenu;
