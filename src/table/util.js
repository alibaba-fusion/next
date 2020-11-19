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

    const setOffset = (col, index, dir) => {
        const style = {
            position: 'sticky',
        };
        const offset = offsetArr[index];

        if (offset > -1) {
            style[dir] = offset;
        }

        col.className = classnames(col.className, {
            [`${prefix}table-fix-${dir}`]: true,
            [`${prefix}table-fix-left-last`]: dir === 'left',
            [`${prefix}table-fix-right-first`]: dir === 'right',
        });
        col.style = { ...col.style, ...style };
        col.cellStyle = style;
    };

    // for multiple header
    // const flatenlen = offsetArr.length;
    const loop = (arr, i) => {
        dir === 'right' && arr.reverse();
        arr.forEach((child, j) => {
            const p = dir === 'right' ? i - j : i + j;
            if (child.children) {
                // 合并单元格的节点
                loop(child.children, p);
                setOffset(child, p, dir);
            }
        });
        dir === 'right' && arr.reverse();
    };

    loop(lockChildren, dir === 'left' ? 0 : len - 1);
};
