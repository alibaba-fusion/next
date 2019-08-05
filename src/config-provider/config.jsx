import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import ErrorBoundary from './error-boundary';
import ConfigContext, { propTypes, getContextProps } from './context';
import { obj, log } from '../util';

const { shallowEqual } = obj;

function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

export default (Component, options = {}) => {
    if (Component.prototype.shouldComponentUpdate === undefined) {
        Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(
            nextProps,
            nextState
        ) {
            if (this.props.pure) {
                return (
                    !shallowEqual(this.props, nextProps) ||
                    !shallowEqual(this.state, nextState)
                );
            }

            return true;
        };
    }

    class ConfigedComponent extends React.Component {
        static propTypes = Component.propTypes;

        static contextType = ConfigContext;

        exportProperty = instance => {
            this._instance = instance;
            if (!instance || !options.exportNames) return;
            options.exportNames.forEach(name => {
                const field = instance[name];
                if (typeof field === 'function') {
                    this[name] = field.bind(instance);
                } else {
                    this[name] = field;
                }
            });
        };

        _deprecated = (...args) => {
            if (this.context.warning !== false) {
                log.deprecated(...args);
            }
        };

        getInstance = () => {
            return this._instance;
        };

        render() {
            const displayName =
                options.componentName || getDisplayName(Component);
            const contextProps = getContextProps(
                this.props,
                this.context,
                displayName
            );

            Object.keys(contextProps).forEach(key => {
                if (typeof contextProps[key] === 'undefined') {
                    delete contextProps[key];
                }
            });

            let others = obj.pickOthers(propTypes, this.props);
            others = options.transform
                ? options.transform(others, this._deprecated)
                : others;

            const { open, ...othersBoundary } = contextProps.errorBoundary;

            delete contextProps.errorBoundary;

            const content = (
                <Component
                    {...others}
                    {...contextProps}
                    ref={this.exportProperty}
                />
            );

            return open ? (
                <ErrorBoundary {...othersBoundary}>{content}</ErrorBoundary>
            ) : (
                content
            );
        }
    }

    ConfigedComponent.displayName = `Config(${getDisplayName(Component)})`;

    hoistNonReactStatics(ConfigedComponent, Component);

    return ConfigedComponent;
};
