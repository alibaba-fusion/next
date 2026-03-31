import type { RowProps, ColProps } from './types';
import Row from './row';
import Col from './col';
declare const Grid: {
    Row: import("../config-provider/types").ConfiguredComponentClass<RowProps & import("../config-provider/types").ComponentCommonProps, Row, {}>;
    Col: import("../config-provider/types").ConfiguredComponentClass<ColProps & import("../config-provider/types").ComponentCommonProps, Col, {}> & {
        isNextCol: boolean;
    };
};
export type { RowProps, ColProps };
export default Grid;
