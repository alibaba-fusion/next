export * from '@alifd/field';

export type ValidateCallback = (errors: object[], values: object) => void;

export interface errorsGroup {
    [key: string]: object;
}

export interface ValidateResults {
    errors: errorsGroup;
    values: object;
}

export interface FieldExtend {
    validate(callback?: (errors: object[], values?: object) => void): void;

    validate(
        names?: string[] | string,
        callback?: (errors: object[], values: object) => void
    ): void;
}
