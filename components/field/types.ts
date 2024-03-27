import { type FieldOption as OriginalFieldOption } from '@alifd/field';

export * from '@alifd/field';

export interface FieldOption
    extends Omit<OriginalFieldOption, 'afterValidateRerender' | 'processErrorMessage'> {
    scrollToFirstError?: boolean | number;
}

export interface errorsGroup {
    [key: string]: object;
}

export interface ValidateResults {
    errors: errorsGroup;
    values: object;
}

export type FirstParamType<Fn extends (...rest: unknown[]) => unknown> = Fn extends (
    firstArg: infer FirstArg,
    ...rest: unknown[]
) => unknown
    ? FirstArg
    : never;

export type ScrollToFirstErrorOption = FirstParamType<
    NonNullable<OriginalFieldOption['afterValidateRerender']>
> & {
    options: FieldOption;
};
