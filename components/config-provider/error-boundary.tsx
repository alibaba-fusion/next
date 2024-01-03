import React, { Component, ErrorInfo, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundaryConfig } from './types';

function DefaultUI() {
    // fixme: string is not a valid react component return type
    return '' as unknown as ReactElement;
}

DefaultUI.propTypes = {
    error: PropTypes.object,
    errorInfo: PropTypes.object,
};

export type ErrorBoundaryProps = ErrorBoundaryConfig;

interface ErrorBoundaryState {
    error?: Error | null;
    errorInfo?: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static propTypes = {
        children: PropTypes.element,
        afterCatch: PropTypes.func,
        fallbackUI: PropTypes.func,
    };

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });

        const { afterCatch } = this.props;

        if (typeof afterCatch === 'function') {
            afterCatch(error, errorInfo);
        }
    }

    render() {
        const { fallbackUI: FallbackUI = DefaultUI } = this.props;

        if (this.state.errorInfo) {
            return <FallbackUI error={this.state.error!} errorInfo={this.state.errorInfo} />;
        }
        // Normally, just render children
        return this.props.children;
    }
}
