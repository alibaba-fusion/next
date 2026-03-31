import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { ConfigProviderProps } from './types';
export type ConsumerState = Pick<ConfigProviderProps, 'prefix' | 'pure' | 'rtl' | 'warning' | 'device' | 'popupContainer' | 'locale'>;
export interface ConsumerProps {
    children?: ((state: ConsumerState) => ReactElement) | ReactNode;
}
/**
 * Consumer
 */
declare const Consumer: {
    ({ children }: ConsumerProps, context: Record<PropertyKey, string>): any;
    /**
     * PropTypes
     */
    propTypes: {
        children: PropTypes.Requireable<(...args: any[]) => any>;
    };
    /**
     * ContextTypes (legacy context)
     */
    contextTypes: {
        nextPrefix: PropTypes.Requireable<string>;
        nextLocale: PropTypes.Requireable<object>;
        nextPure: PropTypes.Requireable<boolean>;
        newRtl: PropTypes.Requireable<boolean>;
        nextWarning: PropTypes.Requireable<boolean>;
        nextDevice: PropTypes.Requireable<string>;
        nextPopupContainer: PropTypes.Requireable<any>;
    };
};
export default Consumer;
