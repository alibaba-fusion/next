"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\nalt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\ncharSet checked classID className colSpan cols content contentEditable contextMenu\ncontrols coords crossOrigin data dateTime default defer dir disabled download draggable\nencType form formAction formEncType formMethod formNoValidate formTarget frameBorder\nheaders height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\nis keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\nmediaGroup method min minLength multiple muted name noValidate nonce open\noptimum pattern placeholder poster preload radioGroup readOnly rel required\nreversed role rowSpan rows sandbox scope scoped scrolling seamless selected\nshape size sizes span spellCheck src srcDoc srcLang srcSet start step style\nsummary tabIndex target title type useMap value width wmode wrap"
    .replace(/\s+/g, ' ')
    .replace(/\t|\n|\r/g, '')
    .split(' ');
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError"
    .replace(/\s+/g, ' ')
    .replace(/\t|\n|\r/g, '')
    .split(' ');
var attrsPrefix = ['data-', 'aria-'];
/**
 * 过滤掉无效的透传到 DOM 属性
 */
exports.default = (function (props) {
    var attrs = {};
    var _loop_1 = function (key) {
        if (attributes.indexOf(key) > -1 || eventsName.indexOf(key) > -1) {
            attrs[key] = props[key];
        }
        else if (attrsPrefix
            .map(function (prefix) { return new RegExp("^".concat(prefix)); })
            .some(function (reg) { return key.replace(reg, '') !== key; })) {
            attrs[key] = props[key];
        }
    };
    for (var key in props) {
        _loop_1(key);
    }
    return attrs;
});
