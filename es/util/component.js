export function assignSubComponent(Component, SubComponents) {
    for (var key in SubComponents) {
        if (Object.prototype.hasOwnProperty.call(SubComponents, key)) {
            Component[key] = SubComponents[key];
        }
    }
    return Component;
}
