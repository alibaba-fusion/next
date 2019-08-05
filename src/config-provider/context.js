import React from 'react';
import PropTypes from 'prop-types';
import { obj } from '../util';
import zhCN from '../locale/zh-cn.js';

function isNotNull(val) {
    return val !== undefined && val !== null;
}

function isNull(val) {
    return val === undefined || val === null;
}

/**
 *
 * @param {Object|Boolean} input
 * @returns {Object} typeof obj.open === 'boolean'
 */
const parseBoundary = input => {
    let obj;
    if (input === undefined || input === null) {
        return {};
    } else if (typeof input === 'boolean') {
        obj = { open: input };
    } else {
        obj = { open: true, ...input };
    }

    return obj;
};

export const propTypes = {
    prefix: PropTypes.string,
    locale: PropTypes.object,
    pure: PropTypes.bool,
    warning: PropTypes.bool,
    rtl: PropTypes.bool,
    device: PropTypes.oneOf(['tablet', 'desktop', 'phone']),
    errorBoundary: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

export const defaultProps = {
    warning: true,
    errorBoundary: false,
};

export const context = {};

export const getContextProps = (props = {}, contextProps = {}, displayName) => {
    const propsValue = obj.pickInProps(propTypes, props);
    const contextPropsValue = {
        ...defaultProps,
        ...obj.pickInProps(propTypes, contextProps),
        ...context,
    };
    let localeFromContext;
    if (contextPropsValue.locale) {
        localeFromContext = contextPropsValue.locale[displayName];
        if (localeFromContext) {
            localeFromContext.momentLocale =
                contextPropsValue.locale.momentLocale;
        }
    }

    Object.keys(propTypes).forEach(key => {
        if (key === 'locale') {
            propsValue.locale = propsValue.locale
                ? obj.deepMerge(
                      {},
                      zhCN[displayName],
                      localeFromContext,
                      propsValue.locale
                  )
                : localeFromContext
                ? obj.deepMerge({}, zhCN[displayName], localeFromContext)
                : undefined;
            return;
        }

        if (isNotNull(contextPropsValue[key]) && isNull(propsValue[key])) {
            propsValue[key] = contextPropsValue[key];
        }
    });

    // ProtoType of [nextE|e]rrorBoundary can be one of [boolean, object]
    // but typeof newErrorBoundary === 'object'
    // newErrorBoundary should always have the key 'open', which indicates ErrorBoundary on or off
    const newErrorBoundary = {
        ...parseBoundary(contextProps.errorBoundary),
        ...parseBoundary(props.errorBoundary),
    };

    if (!('open' in newErrorBoundary)) {
        newErrorBoundary.open = false;
    }

    propsValue.errorBoundary = newErrorBoundary;

    return propsValue;
};

export const setContext = options => {
    return Object.assign(context, obj.pickInProps(propTypes, options));
};

export default React.createContext({});
