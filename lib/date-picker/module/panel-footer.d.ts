import React from 'react';
import type { PanelFooterProps } from '../types';
declare class PanelFooter<isRange extends boolean = false> extends React.PureComponent<isRange extends true ? PanelFooterProps : Omit<PanelFooterProps, 'onOk'> & {
    onOk: () => void;
}> {
    static displayName: string;
    static defaultProps: {
        onOk: () => void;
    };
    changePanel: () => void;
    createRanges: (ranges: PanelFooterProps['ranges']) => React.JSX.Element | null;
    render(): React.JSX.Element;
}
export default PanelFooter;
