export const getWidth = elem => {
    let width =
        elem &&
        typeof elem.getBoundingClientRect === 'function' &&
        elem.getBoundingClientRect().width;
    if (width) {
        width = +width.toFixed(6);
    }
    return width || 0;
};

export const normalizeToArray = items => {
    if (items) {
        if (Array.isArray(items)) {
            return items;
        }
        return [items];
    }

    return [];
};

export const isSibling = (currentPos, targetPos) => {
    const currentNums = currentPos.split('-').slice(0, -1);
    const targetNums = targetPos.split('-').slice(0, -1);

    return (
        currentNums.length === targetNums.length &&
        currentNums.every((num, index) => {
            return num === targetNums[index];
        })
    );
};

export const isAncestor = (currentPos, targetPos) => {
    const currentNums = currentPos.split('-');
    const targetNums = targetPos.split('-');

    return (
        currentNums.length > targetNums.length &&
        targetNums.every((num, index) => {
            return num === currentNums[index];
        })
    );
};

export const isAvailablePos = (refPos, targetPos, _p2n) => {
    const { type, disabled } = _p2n[targetPos];

    return (
        isSibling(refPos, targetPos) &&
        ((type === 'item' && !disabled) || type === 'submenu')
    );
};

export const getFirstAvaliablelChildKey = (parentPos, _p2n) => {
    const pos = Object.keys(_p2n).find(p =>
        isAvailablePos(`${parentPos}-0`, p, _p2n)
    );
    return pos ? _p2n[pos].key : null;
};
