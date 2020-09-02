import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../icon';

const ItemRenderer = (props, ref) => {
    const { icon, content, isParent, expanded, name, style, ...res } = props;
    const nextIcon = React.useMemo(() => {
        if (icon) {
            return <div className={classnames('cabala-tree-base-content-icon')}>{icon}</div>;
        }
        if (icon === undefined && isParent) {
            const type = expanded ? 'arrow-down' : 'arrow-right';
            return (
                <div className={classnames('cabala-tree-base-content-icon')}>
                    <Icon type={type} size="xxs" />
                </div>
            );
        }
        return null;
    }, [icon, isParent, expanded]);
    return (
        <div className={classnames('cabala-tree-base-item')} ref={ref} {...res} style={style}>
            {nextIcon}
            <div className={classnames('cabala-tree-base-item-content')}>{content ? content : name}</div>
        </div>
    );
};
ItemRenderer.propTypes = {
    icon: PropTypes.node,
    content: PropTypes.node,
    isParent: PropTypes.bool,
    expanded: PropTypes.bool,
    name: PropTypes.node,
    style: PropTypes.object,
};

const forwardRefItemRenderer = React.forwardRef(ItemRenderer);

export default React.memo(forwardRefItemRenderer);
