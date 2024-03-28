import React from 'react';
import { TransferProps } from '../../types';

export type ExtractCallbackParameters<K extends keyof TransferProps> =
    Required<TransferProps>[K] extends (...args: infer P) => any ? P : never;

export interface TransferState {
    value: TransferProps['value'];
    selected: string[];
}

export default class BaseDemo extends React.Component<TransferProps, Partial<TransferState>> {
    constructor(props: TransferProps) {
        super(props);
        this.state = {};
    }

    handleChange(...[value, data, extra]: ExtractCallbackParameters<'onChange'>) {
        console.log(value, data, extra);
    }

    handleSelect(
        ...[
            sourceSelectedValue,
            targetSelectedValue,
            trigger,
        ]: ExtractCallbackParameters<'onSelect'>
    ) {
        console.log('in panel: ', trigger);
        console.log('sourceSelectedValue are: ', sourceSelectedValue);
        console.log('targetSelectedValue are: ', targetSelectedValue);
    }

    handleSort(...[value, position]: ExtractCallbackParameters<'onSort'>) {
        console.log(value, position);
    }
}
