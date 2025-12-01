import type { ItemProps, FormRule } from './types';
export declare function getRules(props: ItemProps, labelForErrorMessage: string | null): FormRule[];
export declare function getFieldInitCfg(props: ItemProps, displayName: string, labelForErrorMessage: string | null): {
    valueName: string;
    trigger: string;
    autoValidate: boolean | undefined;
    rules: FormRule[];
};
