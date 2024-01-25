export function assignSubComponent(Component, SubComponents) {
    for (var key in SubComponents) {
        if (Object.hasOwn(SubComponents, key)) {
            Component[key] = SubComponents[key];
        }
    }
    return Component;
}
