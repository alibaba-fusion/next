'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = getContextProps;

var _zhCn = require('../locale/zh-cn.js');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {Object|Boolean} input
 * @returns {Object} typeof obj.open === 'boolean'
 */
var parseBoundary = function parseBoundary(input) {
    var obj = void 0;
    if (input === undefined || input === null) {
        return {};
    } else if (typeof input === 'boolean') {
        obj = { open: input };
    } else {
        obj = (0, _extends3.default)({ open: true }, input);
    }

    return obj;
};

function getContextProps(props, context, displayName) {
    var prefix = props.prefix,
        locale = props.locale,
        pure = props.pure,
        rtl = props.rtl,
        device = props.device,
        popupContainer = props.popupContainer,
        errorBoundary = props.errorBoundary;
    var nextPrefix = context.nextPrefix,
        nextLocale = context.nextLocale,
        nextPure = context.nextPure,
        nextWarning = context.nextWarning,
        nextRtl = context.nextRtl,
        nextDevice = context.nextDevice,
        nextPopupContainer = context.nextPopupContainer,
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
        newLocale = _util.obj.deepMerge({}, _zhCn2.default[displayName], localeFromContext, locale);
    } else if (localeFromContext) {
        newLocale = _util.obj.deepMerge({}, _zhCn2.default[displayName], localeFromContext);
    }

    var newPure = typeof pure === 'boolean' ? pure : nextPure;
    var newRtl = typeof rtl === 'boolean' ? rtl : nextRtl;

    // ProtoType of [nextE|e]rrorBoundary can be one of [boolean, object]
    // but typeof newErrorBoundary === 'object'
    // newErrorBoundary should always have the key 'open', which indicates ErrorBoundary on or off
    var newErrorBoundary = (0, _extends3.default)({}, parseBoundary(nextErrorBoundary), parseBoundary(errorBoundary));

    if (!('open' in newErrorBoundary)) {
        newErrorBoundary.open = false;
    }

    return {
        prefix: newPrefix,
        locale: newLocale,
        pure: newPure,
        rtl: newRtl,
        warning: nextWarning,
        device: device || nextDevice || undefined,
        popupContainer: popupContainer || nextPopupContainer,
        errorBoundary: newErrorBoundary
    };
}
module.exports = exports['default'];