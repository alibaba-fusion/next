declare const ListWithItem: import("../config-provider/types").ConfiguredComponentClass<import("./types").ListProps<unknown> & import("../config-provider/types").ComponentCommonProps, import("./list").List<unknown>, {}> & {
    Item: import("../config-provider/types").ConfiguredComponentClass<import("./types").ListItemProps & import("../config-provider/types").ComponentCommonProps, import("./item").ListItem, {}>;
};
export default ListWithItem;
