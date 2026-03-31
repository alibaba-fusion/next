import React, { Component, ErrorInfo } from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundaryConfig } from './types';
export type ErrorBoundaryProps = ErrorBoundaryConfig;
interface ErrorBoundaryState {
    error?: Error | null;
    errorInfo?: ErrorInfo | null;
}
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        afterCatch: PropTypes.Requireable<(...args: any[]) => any>;
        fallbackUI: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: ErrorBoundaryProps);
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): React.ReactNode;
}
export {};
