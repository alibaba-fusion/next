import type { TransformNewProps, TransformProps } from './types';
declare const transform: <T extends TransformProps>(
    props: T,
    deprecated: (param0: string, param1: string, param2: string) => void
) => TransformNewProps;
export default transform;
