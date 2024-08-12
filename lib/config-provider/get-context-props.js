"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
/**
 *
 * @param input - ErrorBoundaryType
 * @returns typeof obj.open === 'boolean'
 */
function parseBoundary(input) {
    var obj;
    if (input === undefined || input === null) {
        return {};
    }
    else if (typeof input === 'boolean') {
        obj = { open: input };
    }
    else {
        obj = tslib_1.__assign({ open: true }, input);
    }
    return obj;
}
function getContextProps(props, context, displayName) {
    var prefix = props.prefix, locale = props.locale, pure = props.pure, rtl = props.rtl, device = props.device, popupContainer = props.popupContainer, errorBoundary = props.errorBoundary;
    var nextPrefix = context.nextPrefix, nextLocale = context.nextLocale, nextDefaultPropsConfig = context.nextDefaultPropsConfig, nextPure = context.nextPure, nextWarning = context.nextWarning, nextRtl = context.nextRtl, nextDevice = context.nextDevice, nextPopupContainer = context.nextPopupContainer, nextErrorBoundary = context.nextErrorBoundary;
    var newPrefix = prefix || nextPrefix;
    var localeFromContext;
    var newDisplayName = displayName;
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
    var newLocale;
    if (locale) {
        newLocale = util_1.obj.deepMerge({}, zh_cn_1.default[newDisplayName], localeFromContext, locale);
    }
    else if (localeFromContext) {
        newLocale = util_1.obj.deepMerge({}, zh_cn_1.default[newDisplayName], localeFromContext);
    }
    var newPure = typeof pure === 'boolean' ? pure : nextPure;
    var newRtl = typeof rtl === 'boolean' ? rtl : nextRtl;
    // ProtoType of [nextE|e]rrorBoundary can be one of [boolean, object]
    // but typeof newErrorBoundary === 'object'
    // newErrorBoundary should always have the key 'open', which indicates ErrorBoundary on or off
    var newErrorBoundary = tslib_1.__assign(tslib_1.__assign({}, parseBoundary(nextErrorBoundary)), parseBoundary(errorBoundary));
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
exports.default = getContextProps;
