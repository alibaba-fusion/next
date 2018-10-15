/**
 * Created by xiachi on 17/1/17.
 */

const normalMap = {
    t: {
        align: 'bc tc',
        arrow: 'bottom',
        trOrigin: 'bottom',
        offset: [0, -12]
    },
    r: {
        align: 'cl cr',
        arrow: 'left',
        trOrigin: 'left',
        offset: [12, 0]
    },
    b: {
        align: 'tc bc',
        arrow: 'top',
        trOrigin: 'top',
        offset: [0, 12]
    },
    l: {
        align: 'cr cl',
        arrow: 'right',
        trOrigin: 'right',
        offset: [-12, 0]
    },
    tl: {
        align: 'br tc',
        arrow: 'bottom-right',
        trOrigin: 'bottom right',
        offset: [20, -12]
    },
    tr: {
        align: 'bl tc',
        arrow: 'bottom-left',
        trOrigin: 'bottom left',
        offset: [-20, -12]
    },
    rt: {
        align: 'bl cr',
        arrow: 'left-bottom',
        trOrigin: 'bottom left',
        offset: [12, 20]
    },
    rb: {
        align: 'tl cr',
        arrow: 'left-top',
        trOrigin: 'top left',
        offset: [12, -20]
    },
    bl: {
        align: 'tr bc',
        arrow: 'top-right',
        trOrigin: 'top right',
        offset: [20, 12]
    },
    br: {
        align: 'tl bc',
        arrow: 'top-left',
        trOrigin: 'top left',
        offset: [-20, 12]
    },
    lt: {
        align: 'br cl',
        arrow: 'right-bottom',
        trOrigin: 'bottom right',
        offset: [-12, 20]
    },
    lb: {
        align: 'tr cl',
        arrow: 'right-top',
        trOrigin: 'top right',
        offset: [-12, -20]
    }
};
const edgeMap = {
    t: {
        align: 'bc tc',
        arrow: 'bottom',
        trOrigin: 'bottom',
        offset: [0, -12]
    },
    r: {
        align: 'cl cr',
        arrow: 'left',
        trOrigin: 'left',
        offset: [12, 0]
    },
    b: {
        align: 'tc bc',
        arrow: 'top',
        trOrigin: 'top',
        offset: [0, 12]
    },
    l: {
        align: 'cr cl',
        arrow: 'right',
        trOrigin: 'right',
        offset: [-12, 0]
    },
    tl: {
        align: 'bl tl',
        arrow: 'bottom-left',
        trOrigin: 'bottom left',
        offset: [0, -12]
    },
    tr: {
        align: 'br tr',
        arrow: 'bottom-right',
        trOrigin: 'bottom right',
        offset: [0, -12]
    },
    rt: {
        align: 'tl tr',
        arrow: 'left-top',
        trOrigin: 'top left',
        offset: [12, 0]
    },
    rb: {
        align: 'bl br',
        arrow: 'left-bottom',
        trOrigin: 'bottom left',
        offset: [12, 0]
    },
    bl: {
        align: 'tl bl',
        arrow: 'top-left',
        trOrigin: 'top left',
        offset: [0, 12]
    },
    br: {
        align: 'tr br',
        arrow: 'top-right',
        trOrigin: 'top right',
        offset: [0, 12]
    },
    lt: {
        align: 'tr tl',
        arrow: 'right-top',
        trOrigin: 'top right',
        offset: [-12, 0]
    },
    lb: {
        align: 'br bl',
        arrow: 'right-bottom',
        trOrigin: 'bottom right',
        offset: [-12, 0]
    }
};

export {
    normalMap,
    edgeMap
};
