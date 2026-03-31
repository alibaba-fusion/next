import { Component } from 'react';
import PropTypes from 'prop-types';
import type { GatewayProps, GatewayState } from './types';
declare class Gateway extends Component<GatewayProps, GatewayState> {
    static displayName: string;
    static propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        container: PropTypes.Requireable<any>;
        target: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        container: () => HTMLElement;
    };
    child: Element | null | undefined;
    constructor(props: GatewayProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    updateContainer: () => void;
    getChildNode(): Element | Text | null;
    saveChildRef: (ref: HTMLDivElement) => void;
    render(): import("react").ReactPortal | null;
}
declare const _default: typeof Gateway;
export default _default;
