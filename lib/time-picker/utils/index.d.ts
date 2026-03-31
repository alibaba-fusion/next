import { type MomentFormatSpecification, type Moment, type MomentInput } from 'moment';
export declare function checkMomentObj(props: Record<string, unknown>, propName: string, componentName: string): Error | undefined;
export declare function checkDateValue(props: Record<string, unknown>, propName: string, componentName: string): Error | undefined;
export declare function formatDateValue(value: MomentInput | Moment, format: MomentFormatSpecification): Moment;
export declare function formatDateValue(value: unknown, format: MomentFormatSpecification): null;
