import type { ButtonProps, GroupProps } from './types';
import Button from './view/button';
export type { ButtonProps, GroupProps };
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    ButtonProps & import('../config-provider/types').ComponentCommonProps,
    Button,
    {}
> & {
    Group: import('../config-provider/types').ConfiguredComponentClass<
        GroupProps & import('../config-provider/types').ComponentCommonProps,
        import('./view/group').ButtonGroup,
        {}
    >;
};
export default _default;
