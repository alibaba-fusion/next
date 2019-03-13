import _extends from 'babel-runtime/helpers/extends';
export default function getContextProps(props, context, displayName) {
    var prefix = props.prefix,
        locale = props.locale,
        pure = props.pure,
        rtl = props.rtl,
        errorBoundary = props.errorBoundary;
    var nextPrefix = context.nextPrefix,
        nextLocale = context.nextLocale,
        nextPure = context.nextPure,
        nextWarning = context.nextWarning,
        nextRtl = context.nextRtl,
        nextErrorBoundary = context.nextErrorBoundary;


    var newPrefix = prefix || nextPrefix;

    var localeFromContext = void 0;
    if (nextLocale) {
        localeFromContext = nextLocale[displayName];
        if (localeFromContext) {
            localeFromContext.momentLocale = nextLocale.momentLocale;
        }
    }
    var newLocale = void 0;
    if (locale) {
        newLocale = _extends({}, localeFromContext || {}, locale);
    } else if (localeFromContext) {
        newLocale = localeFromContext;
    }

    var newPure = typeof pure === 'boolean' ? pure : nextPure;
    var newRtl = typeof rtl === 'boolean' ? rtl : nextRtl;

    // ProtoType of [nextE|e]rrorBoundary can be one of [boolean, object]
    // but typeof newErrorBoundary === 'object'
    // newErrorBoundary should always have the key 'open', which indicates ErrorBoundary on or off
    var newErrorBoundary = _extends({}, typeof nextErrorBoundary === 'boolean' ? { open: nextErrorBoundary } : nextErrorBoundary, typeof errorBoundary === 'boolean' ? { open: errorBoundary } : errorBoundary);

    if (!('open' in newErrorBoundary)) {
        newErrorBoundary.open = false;
    }

    return {
        prefix: newPrefix,
        locale: newLocale,
        pure: newPure,
        rtl: newRtl,
        warning: nextWarning,
        errorBoundary: newErrorBoundary
    };
}