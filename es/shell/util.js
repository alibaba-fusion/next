/**
 * 判断是否为布尔类型
 * @param val - 要判断的值，例如 'str', undefined, null, true, false, 0 等
 * @returns boolean
 */
export function isBoolean(val) {
    return typeof val === 'boolean';
}
export function getCollapseMap(device) {
    // by default all of them are collapsed
    var origin = {
        Navigation: true,
        LocalNavigation: true,
        Ancillary: true,
        ToolDock: true,
    };
    var map = [];
    switch (device) {
        case 'phone':
            break;
        case 'pad':
        case 'tablet':
            map = ['ToolDock'];
            break;
        case 'desktop':
            map = ['Navigation', 'LocalNavigation', 'Ancillary', 'ToolDock'];
            break;
        default:
            break;
    }
    Object.keys(origin).forEach(function (key) {
        if (map.indexOf(key) > -1) {
            origin[key] = false;
        }
    });
    return origin;
}
