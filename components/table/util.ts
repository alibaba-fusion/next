import classnames from 'classnames';

const blackList = [
    'defaultProps',
    'propTypes',
    'contextTypes',
    'childContextTypes',
    'displayName',
    'getDerivedStateFromProps',
];

export const statics = (Target, Component) => {
    Object.keys(Component).forEach(property => {
        if (blackList.indexOf(property) === -1) {
            Target[property] = Component[property];
        }
    });
};

export const fetchDataByPath = (object, path) => {
    if (!object || !path) {
        return false;
    }
    path = path.toString();
    const field = path.split('.');
    let val, key;
    if (field.length) {
        key = field[0];
        // lists[1].name
        if (key.indexOf('[') >= 0) {
            key = key.match(/(.*)\[(.*)\]/);
            if (key && typeof key[1] === 'object' && typeof object[key[1]] === 'object') {
                val = object[key[1]][key[2]];
            }
        } else {
            val = object[field[0]];
        }
        if (val) {
            for (let colIndex = 1; colIndex < field.length; colIndex++) {
                val = val[field[colIndex]];
                if (typeof val === 'undefined') {
                    break;
                }
            }
        }
    }
    return val;
};

/**
 * @param {Array} lockChildren
 * @param {String} dir 'left', 'right'
 */
export const setStickyStyle = (lockChildren, flatenChildren, dir, offsetArr = [], prefix) => {
    const len = flatenChildren.length;

    flatenChildren.forEach((col, index) => {
        const isLeftLast = dir === 'left' && index === len - 1;
        const isRightFirst = dir === 'right' && index === 0;
        const style = {
            position: 'sticky',
        };
        const offset = offsetArr[index];

        if (offset > -1) {
            style[dir] = offset;
        }

        col.className = classnames(col.className, {
            [`${prefix}table-fix-${dir}`]: true,
            [`${prefix}table-fix-left-last`]: isLeftLast,
            [`${prefix}table-fix-right-first`]: isRightFirst,
        });
        col.style = { ...col.style, ...style };
        col.cellStyle = style;
    });

    const setOffset = (col, index, dir, isBorder) => {
        const style = {
            position: 'sticky',
        };
        const offset = offsetArr[index];

        if (offset > -1) {
            style[dir] = offset;
        }

        col.className = classnames(col.className, {
            [`${prefix}table-fix-${dir}`]: true,
            [`${prefix}table-fix-left-last`]: dir === 'left' && isBorder,
            [`${prefix}table-fix-right-first`]: dir === 'right' && isBorder,
        });
        col.style = { ...col.style, ...style };
        col.cellStyle = style;
    };

    // 查看当前元素的叶子结点数量
    const getLeafNodes = node => {
        let nodesLen = 0;
        const arrLen = (Array.isArray(node && node.children) && node.children.length) || 0;
        if (arrLen > 0) {
            nodesLen = node.children.reduce((ret, item, idx) => {
                return ret + getLeafNodes(item.children);
            }, 0);
        } else {
            nodesLen = 1;
        }
        return nodesLen;
    };

    const getPreNodes = (arr, idx) => {
        return arr.reduce((ret, item, i) => {
            if (i < idx) {
                return ret + getLeafNodes(item);
            }
            return ret;
        }, 0);
    };

    // for multiple header
    // nodesLen 前序叶子结点数
    const loop = (arr, i) => {
        dir === 'right' && arr.reverse();
        arr.forEach((child, j) => {
            const p = dir === 'right' ? i - getPreNodes(arr, j) : i + getPreNodes(arr, j);
            if (child.children) {
                // 合并单元格的节点
                loop(child.children, p);
                // 查询当前元素下的 前序叶子结点数 比如为n
                // const isBorder = (dir === 'right' && j === 0) || (dir === 'left' && j === (arr.length - 1));
                setOffset(child, p, dir, j === arr.length - 1);
            }
        });
        dir === 'right' && arr.reverse();
    };

    loop(lockChildren, dir === 'left' ? 0 : len - 1);
};
