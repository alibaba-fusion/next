export default function getContextProps(props, context, displayName) {
    const { prefix, locale, pure } = props;
    const { nextPrefix, nextLocale, nextPure, nextWarning } = context;

    const newPrefix = prefix || nextPrefix;

    let localeFromContext;
    if (nextLocale) {
        localeFromContext = nextLocale[displayName];
        if (localeFromContext) {
            localeFromContext.momentLocale = nextLocale.momentLocale;
        }
    }
    let newLocale;
    if (locale) {
        newLocale = { ...(localeFromContext || {}), ...locale };
    } else if (localeFromContext) {
        newLocale = localeFromContext;
    }

    const newPure = typeof pure === 'boolean' ? pure : nextPure;

    return {
        prefix: newPrefix,
        locale: newLocale,
        pure: newPure,
        warning: nextWarning
    };
}
