export function isFolder(target) {
    const { expanded } = target;
    return typeof expanded === 'boolean';
}
export function sortNodes(a, b) {
    const { name: aName } = a;
    const { name: bName } = b;
    const aIsFolder = isFolder(a);
    const bIsFolder = isFolder(b);
    if ((aIsFolder && bIsFolder) || (!aIsFolder && !bIsFolder)) {
        return aName.localeCompare(bName);
    } else if (aIsFolder && !bIsFolder) {
        return -1;
    } else {
        return 1;
    }
}
