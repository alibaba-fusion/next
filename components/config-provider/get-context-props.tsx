import { ComponentLocaleObject } from '../locale/types';
import zhCN from '../locale/zh-cn';
import { obj } from '../util';
import {
    ContextState,
    OverlayCommonProps,
    ErrorBoundaryType,
    ParsedContextConfig,
    ParsedErrorBoundary,
} from './types';

/**
 *
 * @param input - ErrorBoundaryType
 * @returns typeof obj.open === 'boolean'
 */
function parseBoundary(input?: ErrorBoundaryType): ParsedErrorBoundary {
    let obj: ParsedErrorBoundary;
    if (input === undefined || input === null) {
        return {};
    } else if (typeof input === 'boolean') {
        obj = { open: input };
    } else {
        obj = { open: true, ...input };
    }

    return obj;
}

export default function getContextProps<P extends Omit<OverlayCommonProps, 'defaultPropsConfig'>>(
    props: P,
    context: ContextState,
    displayName?: string
): ParsedContextConfig {
    const { prefix, locale, pure, rtl, device, popupContainer, errorBoundary } = props;
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

    let localeFromContext: ComponentLocaleObject | undefined;
    let newDisplayName = displayName!;

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
        localeFromContext = nextLocale[newDisplayName] as ComponentLocaleObject;
        if (localeFromContext) {
            localeFromContext.momentLocale = nextLocale.momentLocale;
        }
    }

    let newLocale: ComponentLocaleObject | undefined;
    if (locale) {
        newLocale = obj.deepMerge(
            {},
            zhCN[newDisplayName],
            localeFromContext,
            locale
        ) as ComponentLocaleObject;
    } else if (localeFromContext) {
        newLocale = obj.deepMerge(
            {},
            zhCN[newDisplayName],
            localeFromContext
        ) as ComponentLocaleObject;
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
        prefix: newPrefix!,
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
