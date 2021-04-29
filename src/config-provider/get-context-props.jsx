import zhCN from '../locale/zh-cn.js';
import { obj } from '../util';
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

export default function getContextProps(props, context, displayName) {
    const { prefix, locale, defaultPropsConfig, pure, rtl, device, popupContainer, errorBoundary } = props;
    const {
        nextPrefix,
        nextLocale,
        nextDefaultPropsConfig,
        nextPure,
        nextWarning,
        nextRtl,
        nextDevice,
        nextPopupContainer,
        nextErrorBoundary,
    } = context;

    const newPrefix = prefix || nextPrefix;

    let localeFromContext;
    let newDisplayName = displayName;

    switch (displayName) {
        case 'DatePicker2':
            newDisplayName = 'DatePicker';
            break;
        case 'Calendar2':
            newDisplayName = 'Calendar';
            break;
        case 'TimePicker2':
            newDisplayName = 'TimePicker';
            break;
        default:
            break;
    }

    if (nextLocale) {
        localeFromContext = nextLocale[newDisplayName];
        if (localeFromContext) {
            localeFromContext.momentLocale = nextLocale.momentLocale;
        }
    }

    let newLocale;
    if (locale) {
        newLocale = obj.deepMerge({}, zhCN[newDisplayName], localeFromContext, locale);
    } else if (localeFromContext) {
        newLocale = obj.deepMerge({}, zhCN[newDisplayName], localeFromContext);
    }

    const newPure = typeof pure === 'boolean' ? pure : nextPure;
    const newRtl = typeof rtl === 'boolean' ? rtl : nextRtl;

    // ProtoType of [nextE|e]rrorBoundary can be one of [boolean, object]
    // but typeof newErrorBoundary === 'object'
    // newErrorBoundary should always have the key 'open', which indicates ErrorBoundary on or off
    const newErrorBoundary = {
        ...parseBoundary(nextErrorBoundary),
        ...parseBoundary(errorBoundary),
    };

    if (!('open' in newErrorBoundary)) {
        newErrorBoundary.open = false;
    }

    return {
        prefix: newPrefix,
        locale: newLocale,
        pure: newPure,
        rtl: newRtl,
        warning: nextWarning,
        defaultPropsConfig: nextDefaultPropsConfig || {},
        device: device || nextDevice || undefined,
        popupContainer: popupContainer || nextPopupContainer,
        errorBoundary: newErrorBoundary,
    };
}
