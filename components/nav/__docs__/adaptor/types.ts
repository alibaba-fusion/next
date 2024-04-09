import type { ContentType } from '@alifd/adaptor-helper';

type ValueType<T> = T extends keyof typeof ContentType
    ? { type: keyof typeof ContentType; value: string }[]
    : boolean;

export interface DataSourceOption {
    type:
        | 'node'
        | 'comment'
        | 'divider'
        | 'group'
        | typeof ContentType.icon
        | typeof ContentType.text;
    key?: string;
    value?: ValueType<DataSourceOption['type']>;
    children?: DataSourceOption[];
    state?: 'active' | 'hover' | 'disabled';
    level?: number;
}
