declare const RadioWithSub: import('../config-provider/types').ConfiguredComponentClass<
    import('./types').RadioProps & import('../config-provider/types').ComponentCommonProps,
    import('./types').WrappedRadio,
    {}
> & {
    Group: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').GroupProps & import('../config-provider/types').ComponentCommonProps,
        import('./radio-group').RadioGroup,
        {}
    >;
};
export type { RadioProps, GroupProps, RadioValue, RadioValueItem } from './types';
export default RadioWithSub;
