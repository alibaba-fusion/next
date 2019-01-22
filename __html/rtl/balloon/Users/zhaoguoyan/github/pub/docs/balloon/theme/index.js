webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(38)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(41)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@font-face {\n  /* project id 272666 */\n  font-family: 'iconfont';\n  src: url(\"//at.alicdn.com/t/font_o8u52jwbfgm8to6r.eot\");\n  src: url(\"//at.alicdn.com/t/font_o8u52jwbfgm8to6r.eot?#iefix\") format(\"embedded-opentype\"), url(\"//at.alicdn.com/t/font_o8u52jwbfgm8to6r.woff\") format(\"woff\"), url(\"//at.alicdn.com/t/font_o8u52jwbfgm8to6r.ttf\") format(\"truetype\"), url(\"//at.alicdn.com/t/font_o8u52jwbfgm8to6r.svg#iconfont\") format(\"svg\"); }\n\n.demo-icon {\n  font-family: 'iconfont' !important;\n  font-size: 12px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  cursor: pointer; }\n\n.demo-icon-all:before {\n  content: \"\\E662\"; }\n\n.demo-icon-cart:before {\n  content: \"\\E618\"; }\n\n.demo-icon-comments:before {\n  content: \"\\E605\"; }\n\n.demo-icon-cry:before {\n  content: \"\\E61A\"; }\n\n.demo-icon-email:before {\n  content: \"\\E663\"; }\n\n.demo-icon-favorite:before {\n  content: \"\\E60A\"; }\n\n.demo-icon-folder:before {\n  content: \"\\E61B\"; }\n\n.demo-icon-form:before {\n  content: \"\\E61C\"; }\n\n.demo-icon-help:before {\n  content: \"\\E61F\"; }\n\n.demo-icon-refresh:before {\n  content: \"\\E621\"; }\n\n.demo-icon-set:before {\n  content: \"\\E623\"; }\n\n.demo-icon-training:before {\n  content: \"\\E624\"; }\n\n.demo-icon-account:before {\n  content: \"\\E664\"; }\n\n.demo-icon-atm:before {\n  content: \"\\E626\"; }\n\n.demo-icon-clock:before {\n  content: \"\\E615\"; }\n\n.demo-icon-attachment:before {\n  content: \"\\E627\"; }\n\n.demo-icon-3column:before {\n  content: \"\\E628\"; }\n\n.demo-icon-4column:before {\n  content: \"\\E629\"; }\n\n.demo-icon-discount:before {\n  content: \"\\E62A\"; }\n\n.demo-icon-service:before {\n  content: \"\\E62B\"; }\n\n.demo-icon-print:before {\n  content: \"\\E62C\"; }\n\n.demo-icon-box:before {\n  content: \"\\E62D\"; }\n\n.demo-icon-browse:before {\n  content: \"\\E634\"; }\n\n.demo-icon-atm-away:before {\n  content: \"\\E635\"; }\n\n.demo-icon-scanning:before {\n  content: \"\\E636\"; }\n\n.demo-icon-compare:before {\n  content: \"\\E637\"; }\n\n.demo-icon-filter:before {\n  content: \"\\E638\"; }\n\n.demo-icon-pin:before {\n  content: \"\\E639\"; }\n\n.demo-icon-history:before {\n  content: \"\\E63A\"; }\n\n.demo-icon-similar-product:before {\n  content: \"\\E63B\"; }\n\n.demo-icon-link:before {\n  content: \"\\E63C\"; }\n\n.demo-icon-cut:before {\n  content: \"\\E64A\"; }\n\n.demo-icon-table:before {\n  content: \"\\E63E\"; }\n\n.demo-icon-nav-list:before {\n  content: \"\\E63F\"; }\n\n.demo-icon-image-text:before {\n  content: \"\\E640\"; }\n\n.demo-icon-text:before {\n  content: \"\\E641\"; }\n\n.demo-icon-move:before {\n  content: \"\\E642\"; }\n\n.demo-icon-subtract:before {\n  content: \"\\E650\"; }\n\n.demo-icon-dollar:before {\n  content: \"\\E643\"; }\n\n.demo-icon-office:before {\n  content: \"\\E644\"; }\n\n.demo-icon-operation:before {\n  content: \"\\E645\"; }\n\n.demo-icon-download:before {\n  content: \"\\E646\"; }\n\n.demo-icon-map:before {\n  content: \"\\E647\"; }\n\n.demo-icon-bad:before {\n  content: \"\\E648\"; }\n\n.demo-icon-good:before {\n  content: \"\\E649\"; }\n\n.demo-icon-skip:before {\n  content: \"\\E64B\"; }\n\n.demo-icon-play:before {\n  content: \"\\E64C\"; }\n\n.demo-icon-stop:before {\n  content: \"\\E64D\"; }\n\n.demo-icon-compass:before {\n  content: \"\\E64E\"; }\n\n.demo-icon-security:before {\n  content: \"\\E64F\"; }\n\n.demo-icon-share:before {\n  content: \"\\E651\"; }\n\n.demo-icon-store:before {\n  content: \"\\E652\"; }\n\n.demo-icon-phone:before {\n  content: \"\\E653\"; }\n\n.demo-icon-ellipsis:before {\n  content: \"\\E654\"; }\n\n.demo-icon-email-filling:before {\n  content: \"\\E665\"; }\n\n.demo-icon-favorites-filling:before {\n  content: \"\\E666\"; }\n\n.demo-icon-account-filling:before {\n  content: \"\\E667\"; }\n\n.demo-icon-credit-level:before {\n  content: \"\\E65A\"; }\n\n.demo-icon-credit-level-filling:before {\n  content: \"\\E65C\"; }\n\n.demo-icon-mobile-phone:before {\n  content: \"\\E65D\"; }\n\n.demo-icon-smile:before {\n  content: \"\\E668\"; }\n\n.demo-icon-personal-center:before {\n  content: \"\\E669\"; }\n\n.demo-icon-arrow-up-filling:before {\n  content: \"\\E601\"; }\n\n.demo-icon-arrow-right:before {\n  content: \"\\E603\"; }\n\n.demo-icon-arrow-down:before {\n  content: \"\\E66B\"; }\n\n.demo-icon-arrow-up:before {\n  content: \"\\E66C\"; }\n\n.demo-icon-add:before {\n  content: \"\\E66F\"; }\n\n.demo-icon-minus:before {\n  content: \"\\E670\"; }\n\n.demo-icon-edit:before {\n  content: \"\\E613\"; }\n\n.demo-icon-error:before {\n  content: \"\\E672\"; }\n\n.demo-icon-select:before {\n  content: \"\\E673\"; }\n\n.demo-icon-ashbin:before {\n  content: \"\\E61E\"; }\n\n.demo-icon-calendar:before {\n  content: \"\\E620\"; }\n\n.demo-icon-time:before {\n  content: \"\\E622\"; }\n\n.demo-icon-success:before {\n  content: \"\\E674\"; }\n\n.demo-icon-warning:before {\n  content: \"\\E675\"; }\n\n.demo-icon-search:before {\n  content: \"\\E656\"; }\n\n.demo-icon-display:before {\n  content: \"\\E677\"; }\n\n.demo-icon-category:before {\n  content: \"\\E658\"; }\n\n.demo-icon-prompt:before {\n  content: \"\\E678\"; }\n\n.demo-icon-arrow-down-filling:before {\n  content: \"\\E65B\"; }\n\n.demo-icon-sorting:before {\n  content: \"\\E676\"; }\n\n.demo-icon-ascending:before {\n  content: \"\\E606\"; }\n\n.demo-icon-descending:before {\n  content: \"\\E608\"; }\n\n.demo-icon-success-filling:before {\n  content: \"\\E679\"; }\n\n.demo-icon-picture:before {\n  content: \"\\E60C\"; }\n\n.demo-icon-close:before {\n  content: \"\\E67A\"; }\n\n.demo-icon-semi-select:before {\n  content: \"\\E67B\"; }\n\n.demo-icon-tag-subscript:before {\n  content: \"\\E614\"; }\n\n.demo-icon-survey:before {\n  content: \"\\E65F\"; }\n\n.demo-icon-loading:before {\n  content: \"\\E67C\"; }\n\n.demo-icon-arrow-double-left:before {\n  content: \"\\E616\"; }\n\n.demo-icon-arrow-double-right:before {\n  content: \"\\E661\"; }\n\n.demo-icon-nav-more:before {\n  content: \"\\E67D\"; }\n\n.demo-icon-delete-filling:before {\n  content: \"\\E681\"; }\n\n.demo-icon-arrow-left:before {\n  content: \"\\E682\"; }\n\n.demo-icon-lights:before {\n  content: \"\\E66D\"; }\n\n.demo-icon-expand:before {\n  content: \"\\E66E\"; }\n\n.demo-icon-hide:before {\n  content: \"\\E671\"; }\n\n.demo-icon-fusion-logo:before {\n  content: \"\\E67F\"; }\n\n.demo-icon-arrow-right-filling:before {\n  content: \"\\E680\"; }\n\n.demo-icon-arrow-left-filling:before {\n  content: \"\\E683\"; }\n\n.demo-icon-superstar:before {\n  content: \"\\E684\"; }\n\n.demo-icon-qr-code:before {\n  content: \"\\E685\"; }\n\n.demo-icon-home:before {\n  content: \"\\E689\"; }\n\n.demo-icon-electronics:before {\n  content: \"\\E68A\"; }\n\n.demo-icon-import:before {\n  content: \"\\E67E\"; }\n\n.demo-icon-process:before {\n  content: \"\\E687\"; }\n\n.demo-icon-gifts:before {\n  content: \"\\E688\"; }\n\n.demo-icon-bags:before {\n  content: \"\\E68B\"; }\n\n.demo-icon-pointing-left:before {\n  content: \"\\E68C\"; }\n\n.demo-icon-pointing-right:before {\n  content: \"\\E68D\"; }\n\n.demo-icon-no-results:before {\n  content: \"\\E686\"; }\n\n.demo-icon-auto:before {\n  content: \"\\E68E\"; }\n\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: #F2F3F7; }\n\n#container {\n  border: 1px solid #E6E7EB; }\n\n.demo-container > h2 {\n  display: none; }\n\n.demo.pc {\n  border-radius: 3px;\n  margin-bottom: 20px; }\n  .demo.pc:last-child {\n    margin-bottom: 0; }\n  .demo.pc .demo-header {\n    padding: 10px 15px;\n    background-color: #E6E7EB;\n    font-size: 18px;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    color: #333; }\n    .demo.pc .demo-header label {\n      float: right;\n      padding: 0 0 0 40px;\n      color: #666;\n      font-size: 12px; }\n      .demo.pc .demo-header label select {\n        margin-left: 8px;\n        height: 28px;\n        border: 1px solid #666;\n        border-radius: 3px; }\n        .demo.pc .demo-header label select:focus {\n          outline: none;\n          border: 1px solid #333; }\n  .demo.pc .demo-head > td {\n    padding: 0 10px;\n    text-align: left;\n    vertical-align: top;\n    font-size: 12px;\n    height: 30px;\n    line-height: 30px;\n    color: #999999; }\n    .demo.pc .demo-head > td:first-child {\n      width: 80px; }\n  .demo.pc .demo-group > td {\n    text-align: left;\n    vertical-align: top; }\n  .demo.pc .demo-group > .label {\n    width: 80px;\n    padding-right: 10px;\n    padding-top: 20px;\n    text-align: right;\n    font-size: 13px;\n    color: #999; }\n    .demo.pc .demo-group > .label > span {\n      display: block;\n      padding-bottom: 5px;\n      border-bottom: solid 1px #DCDEE3; }\n  .demo.pc .demo-group > .wrap {\n    padding: 10px 5px; }\n    .demo.pc .demo-group > .wrap > .demo-item {\n      padding: 10px;\n      border: transparent dashed 1px;\n      border-radius: 3px;\n      display: inline-block;\n      vertical-align: top;\n      cursor: pointer; }\n      .demo.pc .demo-group > .wrap > .demo-item.block {\n        display: block; }\n        .demo.pc .demo-group > .wrap > .demo-item.block > * {\n          float: none; }\n      .demo.pc .demo-group > .wrap > .demo-item.highlight {\n        border-color: #46BC02;\n        border-style: dashed; }\n      .demo.pc .demo-group > .wrap > .demo-item.selected, .demo.pc .demo-group > .wrap > .demo-item:hover {\n        border-color: #46BC02; }\n      .demo.pc .demo-group > .wrap > .demo-item:after {\n        content: ' ';\n        display: block;\n        clear: left; }\n      .demo.pc .demo-group > .wrap > .demo-item > * {\n        float: left; }\n      .demo.pc .demo-group > .wrap > .demo-item *:disabled {\n        pointer-events: none; }\n    .demo.pc .demo-group > .wrap > .demo-item-hidden {\n      padding: 10px;\n      border: #E6E7EB dashed 1px;\n      border-radius: 3px;\n      display: inline-block;\n      vertical-align: top;\n      cursor: not-allowed; }\n      .demo.pc .demo-group > .wrap > .demo-item-hidden.block {\n        display: block; }\n        .demo.pc .demo-group > .wrap > .demo-item-hidden.block > * {\n          float: none; }\n      .demo.pc .demo-group > .wrap > .demo-item-hidden > * {\n        float: left;\n        visibility: hidden; }\n  .demo.pc .demo-group > .demo-items {\n    margin-left: 120px;\n    min-height: 50px;\n    padding-right: 20px; }\n  .demo.pc .demo-body {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n    .demo.pc .demo-body table {\n      border-collapse: collapse;\n      table-layout: fixed; }\n      .demo.pc .demo-body table.block {\n        width: 100%; }\n    .demo.pc .demo-body .demo.pc {\n      margin-bottom: 0; }\n      .demo.pc .demo-body .demo.pc > .demo-header {\n        padding-top: 0;\n        padding-bottom: 0;\n        border-radius: 0;\n        background-color: inherit;\n        font-size: 16px;\n        height: 50px;\n        line-height: 50px; }\n      .demo.pc .demo-body .demo.pc > .demo-body {\n        border-radius: 0;\n        padding-bottom: 10px; }\n    .demo.pc .demo-body .demo + .demo {\n      border-top: #E6E7EB solid 1px; }\n  .demo.pc .demo-select {\n    background-color: #FFF;\n    border-bottom: 1px solid #CCC;\n    padding: 10px 20px;\n    margin: 0;\n    list-style: none;\n    font-size: 12px;\n    color: #666; }\n    .demo.pc .demo-select li {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin: 6px 0;\n      height: 20px;\n      line-height: 20px;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .demo.pc .demo-select span {\n      display: inline-block;\n      padding-right: 12px;\n      width: 124px;\n      font-weight: bold;\n      text-align: right;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n    .demo.pc .demo-select label {\n      margin-right: 24px; }\n      .demo.pc .demo-select label input {\n        margin-right: 4px; }\n  .demo.pc .demo-switch-wrapper {\n    float: right;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .demo.pc .demo-switch-wrapper span {\n      display: inline-block;\n      height: 20px;\n      line-height: 20px;\n      font-size: 12px;\n      margin-right: 4px; }\n  .demo.pc .demo-switch {\n    position: relative;\n    display: inline-block;\n    border: 1px solid transparent;\n    width: 48px;\n    height: 26px;\n    border-radius: 15px;\n    cursor: pointer; }\n    .demo.pc .demo-switch-children {\n      font-size: 12px;\n      position: absolute;\n      width: 24px;\n      height: 24px;\n      line-height: 24px; }\n    .demo.pc .demo-switch-trigger {\n      border: 1px solid transparent;\n      position: absolute;\n      left: 22px;\n      width: 24px;\n      height: 24px;\n      border-radius: 15px; }\n  .demo.pc .demo-switch-off {\n    background-color: #FFF;\n    border-color: #DCDEE3; }\n    .demo.pc .demo-switch-off .demo-switch-children {\n      right: -6px;\n      color: #CCC; }\n    .demo.pc .demo-switch-off .demo-switch-trigger {\n      left: 0;\n      -webkit-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.32);\n              box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.32);\n      background-color: #FFF;\n      border-color: transparent; }\n  .demo.pc .demo-switch-on {\n    background-color: #1DC11D; }\n    .demo.pc .demo-switch-on .demo-switch-children {\n      left: 8px;\n      color: #FFF; }\n    .demo.pc .demo-switch-on .demo-switch-trigger {\n      -webkit-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.32);\n              box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.32);\n      background-color: #FFF;\n      border-color: transparent; }\n  .demo.pc .demo-icon-browse {\n    margin-left: 4px; }\n  .demo.pc .demo-icon-hide {\n    margin-left: 4px; }\n\n.demo-light {\n  background-color: #FFF; }\n\n.demo-dark {\n  background-color: #333; }\n  .demo-dark .demo.pc > .demo-header {\n    color: #FFF; }\n", ""]);

// exports


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n.next-icon[dir=\"rtl\"]::before {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n@font-face {\n  font-family: NextIcon;\n  src: url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.eot\");\n  src: url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.eot?#iefix\") format(\"embedded-opentype\"), url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.woff\") format(\"woff\"), url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.ttf\") format(\"truetype\"), url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.svg#NextIcon\") format(\"svg\"); }\n\n.next-icon {\n  display: inline-block;\n  font-family: NextIcon;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  .next-icon:before {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: center; }\n  .next-icon-smile:before {\n    content: \"\\E65F\"; }\n  .next-icon-cry:before {\n    content: \"\\E65D\"; }\n  .next-icon-success:before {\n    content: \"\\E60A\"; }\n  .next-icon-warning:before {\n    content: \"\\E60B\"; }\n  .next-icon-prompt:before {\n    content: \"\\E60C\"; }\n  .next-icon-error:before {\n    content: \"\\E60D\"; }\n  .next-icon-help:before {\n    content: \"\\E673\"; }\n  .next-icon-clock:before {\n    content: \"\\E621\"; }\n  .next-icon-success-filling:before {\n    content: \"\\E63A\"; }\n  .next-icon-delete-filling:before {\n    content: \"\\E623\"; }\n  .next-icon-favorites-filling:before {\n    content: \"\\E60E\"; }\n  .next-icon-add:before {\n    content: \"\\E655\"; }\n  .next-icon-minus:before {\n    content: \"\\E601\"; }\n  .next-icon-arrow-up:before {\n    content: \"\\E625\"; }\n  .next-icon-arrow-down:before {\n    content: \"\\E63D\"; }\n  .next-icon-arrow-left:before {\n    content: \"\\E61D\"; }\n  .next-icon-arrow-right:before {\n    content: \"\\E619\"; }\n  .next-icon-arrow-double-left:before {\n    content: \"\\E659\"; }\n  .next-icon-arrow-double-right:before {\n    content: \"\\E65E\"; }\n  .next-icon-switch:before {\n    content: \"\\E6B3\"; }\n  .next-icon-sorting:before {\n    content: \"\\E634\"; }\n  .next-icon-descending:before {\n    content: \"\\E61F\"; }\n  .next-icon-ascending:before {\n    content: \"\\E61E\"; }\n  .next-icon-select:before {\n    content: \"\\E632\"; }\n  .next-icon-semi-select:before {\n    content: \"\\E633\"; }\n  .next-icon-search:before {\n    content: \"\\E656\"; }\n  .next-icon-close:before {\n    content: \"\\E626\"; }\n  .next-icon-ellipsis:before {\n    content: \"\\E654\"; }\n  .next-icon-picture:before {\n    content: \"\\E631\"; }\n  .next-icon-calendar:before {\n    content: \"\\E607\"; }\n  .next-icon-ashbin:before {\n    content: \"\\E639\"; }\n  .next-icon-upload:before {\n    content: \"\\E7EE\"; }\n  .next-icon-download:before {\n    content: \"\\E628\"; }\n  .next-icon-set:before {\n    content: \"\\E683\"; }\n  .next-icon-edit:before {\n    content: \"\\E63B\"; }\n  .next-icon-refresh:before {\n    content: \"\\E677\"; }\n  .next-icon-filter:before {\n    content: \"\\E627\"; }\n  .next-icon-attachment:before {\n    content: \"\\E665\"; }\n  .next-icon-account:before {\n    content: \"\\E608\"; }\n  .next-icon-email:before {\n    content: \"\\E605\"; }\n  .next-icon-atm:before {\n    content: \"\\E606\"; }\n  .next-icon-loading:before {\n    content: \"\\E646\";\n    -webkit-animation: loadingCircle 1s infinite linear;\n            animation: loadingCircle 1s infinite linear; }\n\n@-webkit-keyframes loadingCircle {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes loadingCircle {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.next-icon.next-xxs:before {\n  width: 8px;\n  font-size: 8px;\n  line-height: inherit; }\n\n@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {\n  .next-icon.next-xxs {\n    -webkit-transform: scale(0.5);\n        -ms-transform: scale(0.5);\n            transform: scale(0.5);\n    margin-left: -4px;\n    margin-right: -4px; }\n    .next-icon.next-xxs:before {\n      width: 16px;\n      font-size: 16px; } }\n\n.next-icon.next-xs:before {\n  width: 12px;\n  font-size: 12px;\n  line-height: inherit; }\n\n.next-icon.next-small:before {\n  width: 16px;\n  font-size: 16px;\n  line-height: inherit; }\n\n.next-icon.next-medium:before {\n  width: 20px;\n  font-size: 20px;\n  line-height: inherit; }\n\n.next-icon.next-large:before {\n  width: 24px;\n  font-size: 24px;\n  line-height: inherit; }\n\n.next-icon.next-xl:before {\n  width: 32px;\n  font-size: 32px;\n  line-height: inherit; }\n\n.next-icon.next-xxl:before {\n  width: 48px;\n  font-size: 48px;\n  line-height: inherit; }\n\n.next-icon.next-xxxl:before {\n  width: 64px;\n  font-size: 64px;\n  line-height: inherit; }\n", ""]);

// exports


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = findNode;

var _reactDom = __webpack_require__(8);

function findNode(target, param) {
    if (!target) {
        return null;
    }

    if (typeof target === 'string') {
        return document.getElementById(target);
    }

    if (typeof target === 'function') {
        target = target(param);
    }

    if (!target) {
        return null;
    }

    try {
        return (0, _reactDom.findDOMNode)(target);
    } catch (err) {
        return target;
    }
}
module.exports = exports['default'];

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _util = __webpack_require__(2);

var _icon = __webpack_require__(22);

var _icon2 = _interopRequireDefault(_icon);

var _alignMap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Created by xiachi on 17/2/10.
 */

var noop = _util.func.noop;
var BalloonInner = (_temp = _class = function (_React$Component) {
    _inherits(BalloonInner, _React$Component);

    function BalloonInner() {
        _classCallCheck(this, BalloonInner);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    BalloonInner.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            closable = _props.closable,
            className = _props.className,
            style = _props.style,
            isTooltip = _props.isTooltip,
            align = _props.align,
            type = _props.type,
            onClose = _props.onClose,
            alignEdge = _props.alignEdge,
            children = _props.children,
            rtl = _props.rtl,
            others = _objectWithoutProperties(_props, ['prefix', 'closable', 'className', 'style', 'isTooltip', 'align', 'type', 'onClose', 'alignEdge', 'children', 'rtl']);

        var alignMap = alignEdge ? _alignMap.edgeMap : _alignMap.normalMap;
        var _prefix = prefix;

        if (isTooltip) {
            _prefix = _prefix + 'balloon-tooltip';
        } else {
            _prefix = _prefix + 'balloon';
        }

        var classes = (0, _classnames2.default)((_classNames = {}, _classNames['' + _prefix] = true, _classNames[_prefix + '-' + type] = type, _classNames[_prefix + '-medium'] = true, _classNames[_prefix + '-' + alignMap[align].arrow] = alignMap[align], _classNames[_prefix + '-closable'] = closable, _classNames[className] = className, _classNames));

        return _react2.default.createElement(
            'div',
            _extends({ role: 'tooltip', dir: rtl ? 'rtl' : undefined, className: classes, style: style }, _util.obj.pickOthers(Object.keys(BalloonInner.propTypes), others)),
            closable ? _react2.default.createElement(
                'a',
                { role: 'button', tabIndex: '0', href: 'javascript:void(0);', className: _prefix + '-close',
                    onClick: onClose },
                _react2.default.createElement(_icon2.default, { type: 'close', size: 'small' })
            ) : null,
            children
        );
    };

    return BalloonInner;
}(_react2.default.Component), _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    closable: _propTypes2.default.bool,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    alignEdge: _propTypes2.default.bool,
    onClose: _propTypes2.default.func,
    style: _propTypes2.default.any,
    align: _propTypes2.default.string,
    type: _propTypes2.default.string,
    isTooltip: _propTypes2.default.bool,
    pure: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    closable: true,
    onClose: noop,
    align: 'b',
    type: 'normal',
    alignEdge: false,
    pure: false
}, _temp);
BalloonInner.displayName = 'BalloonInner';
exports.default = BalloonInner;
module.exports = exports['default'];

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function stringToBytes(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function bytesToString(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function stringToBytes(str) {
      for (var bytes = [], i = 0; i < str.length; i++) {
        bytes.push(str.charCodeAt(i) & 0xFF);
      }return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function bytesToString(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++) {
        str.push(String.fromCharCode(bytes[i]));
      }return str.join('');
    }
  }
};

module.exports = charenc;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Created by xiachi on 17/1/17.
 */

var normalMap = {
    t: {
        align: 'bc tc',
        rtlAlign: 'bc tc',
        arrow: 'bottom',
        trOrigin: 'bottom',
        rtlTrOrigin: 'bottom',
        offset: [0, -12]
    },
    r: {
        align: 'cl cr',
        rtlAlign: 'cr cl',
        arrow: 'left',
        trOrigin: 'left',
        rtlTrOrigin: 'right',
        offset: [12, 0]
    },
    b: {
        align: 'tc bc',
        rtlAlign: 'tc bc',
        arrow: 'top',
        trOrigin: 'top',
        rtlTrOrigin: 'top',
        offset: [0, 12]
    },
    l: {
        align: 'cr cl',
        rtlAlign: 'cl cr',
        arrow: 'right',
        trOrigin: 'right',
        rtlTrOrigin: 'left',
        offset: [-12, 0]
    },
    tl: {
        align: 'br tc',
        rtlAlign: 'bl tc',
        arrow: 'bottom-right',
        trOrigin: 'bottom right',
        rtlTrOrigin: 'bottom left',
        offset: [20, -12]
    },
    tr: {
        align: 'bl tc',
        rtlAlign: 'br tc',
        arrow: 'bottom-left',
        trOrigin: 'bottom left',
        rtlTrOrigin: 'bottom right',
        offset: [-20, -12]
    },
    rt: {
        align: 'bl cr',
        rtlAlign: 'br cl',
        arrow: 'left-bottom',
        trOrigin: 'bottom left',
        rtlTrOrigin: 'bottom right',
        offset: [12, 20]
    },
    rb: {
        align: 'tl cr',
        rtlAlign: 'tr cl',
        arrow: 'left-top',
        trOrigin: 'top left',
        rtlTrOrigin: 'top right',
        offset: [12, -20]
    },
    bl: {
        align: 'tr bc',
        rtlAlign: 'tl bc',
        arrow: 'top-right',
        trOrigin: 'top right',
        rtlTrOrigin: 'top left',
        offset: [20, 12]
    },
    br: {
        align: 'tl bc',
        rtlAlign: 'tr bc',
        arrow: 'top-left',
        trOrigin: 'top left',
        rtlTrOrigin: 'top right',
        offset: [-20, 12]
    },
    lt: {
        align: 'br cl',
        rtlAlign: 'bl cr',
        arrow: 'right-bottom',
        trOrigin: 'bottom right',
        rtlTrOrigin: 'bottom left',
        offset: [-12, 20]
    },
    lb: {
        align: 'tr cl',
        rtlAlign: 'tl cr',
        arrow: 'right-top',
        trOrigin: 'top right',
        rtlTrOrigin: 'top left',
        offset: [-12, -20]
    }
};
var edgeMap = {
    t: {
        align: 'bc tc',
        rtlAlign: 'bc tc',
        arrow: 'bottom',
        trOrigin: 'bottom',
        rtlTrOrigin: 'bottom',
        offset: [0, -12]
    },
    r: {
        align: 'cl cr',
        rtlAlign: 'cr cl',
        arrow: 'left',
        trOrigin: 'left',
        rtlTrOrigin: 'right',
        offset: [12, 0]
    },
    b: {
        align: 'tc bc',
        rtlAlign: 'tc bc',
        arrow: 'top',
        trOrigin: 'top',
        rtlTrOrigin: 'top',
        offset: [0, 12]
    },
    l: {
        align: 'cr cl',
        rtlAlign: 'cl cr',
        arrow: 'right',
        trOrigin: 'right',
        rtlTrOrigin: 'left',
        offset: [-12, 0]
    },
    tl: {
        align: 'bl tl',
        rtlAlign: 'br tr',
        arrow: 'bottom-left',
        trOrigin: 'bottom left',
        rtlTrOrigin: 'bottom right',
        offset: [0, -12]
    },
    tr: {
        align: 'br tr',
        rtlAlign: 'bl tl',
        arrow: 'bottom-right',
        trOrigin: 'bottom right',
        rtlTrOrigin: 'bottom left',
        offset: [0, -12]
    },
    rt: {
        align: 'tl tr',
        rtlAlign: 'tr tl',
        arrow: 'left-top',
        trOrigin: 'top left',
        rtlTrOrigin: 'top right',
        offset: [12, 0]
    },
    rb: {
        align: 'bl br',
        rtlAlign: 'br bl',
        arrow: 'left-bottom',
        trOrigin: 'bottom left',
        rtlTrOrigin: 'bottom right',
        offset: [12, 0]
    },
    bl: {
        align: 'tl bl',
        rtlAlign: 'tr br',
        arrow: 'top-left',
        trOrigin: 'top left',
        rtlTrOrigin: 'top right',
        offset: [0, 12]
    },
    br: {
        align: 'tr br',
        rtlAlign: 'tl bl',
        arrow: 'top-right',
        trOrigin: 'top right',
        rtlTrOrigin: 'top left',
        offset: [0, 12]
    },
    lt: {
        align: 'tr tl',
        rtlAlign: 'tl tr',
        arrow: 'right-top',
        trOrigin: 'top right',
        rtlTrOrigin: 'top left',
        offset: [-12, 0]
    },
    lb: {
        align: 'br bl',
        rtlAlign: 'bl br',
        arrow: 'right-bottom',
        trOrigin: 'bottom right',
        rtlTrOrigin: 'bottom left',
        offset: [-12, 0]
    }
};

exports.normalMap = normalMap;
exports.edgeMap = edgeMap;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); } }\n\n@keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); } }\n\n@-webkit-keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); } }\n\n@keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); } }\n\n@-webkit-keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); } }\n\n@keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); } }\n\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); } }\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); } }\n\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@-webkit-keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n@keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes expandInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@keyframes expandInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@-webkit-keyframes expandInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@keyframes expandInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@-webkit-keyframes expandInWithFade {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: .1; }\n  50% {\n    opacity: .9; }\n  100% {\n    opacity: 1; } }\n\n@keyframes expandInWithFade {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: .1; }\n  50% {\n    opacity: .9; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes expandOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@keyframes expandOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@-webkit-keyframes expandOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@keyframes expandOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@-webkit-keyframes expandOutWithFade {\n  0% {\n    opacity: 1; }\n  70% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@keyframes expandOutWithFade {\n  0% {\n    opacity: 1; }\n  70% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); }\n  20% {\n    -webkit-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n  to {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); }\n  20% {\n    -webkit-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n  to {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.2s;\n  animation-duration: 0.2s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandInDown {\n  -webkit-animation-name: expandInDown;\n  animation-name: expandInDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandOutUp {\n  -webkit-animation-name: expandOutUp;\n  animation-name: expandOutUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.15s;\n  animation-duration: 0.15s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandInUp {\n  -webkit-animation-name: expandInUp;\n  animation-name: expandInUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandOutDown {\n  -webkit-animation-name: expandOutDown;\n  animation-name: expandOutDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.15s;\n  animation-duration: 0.15s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expand-enter {\n  overflow: hidden; }\n\n.expand-enter-active {\n  -webkit-transition: all .3s ease-out;\n  transition: all .3s ease-out; }\n  .expand-enter-active > * {\n    -webkit-animation-name: expandInWithFade;\n    animation-name: expandInWithFade;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1;\n    -webkit-animation-duration: 0.2s;\n    animation-duration: 0.2s;\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    -webkit-animation-fill-mode: \"forwards\";\n    animation-fill-mode: \"forwards\";\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden; }\n\n.expand-leave {\n  overflow: hidden; }\n\n.expand-leave-active {\n  -webkit-transition: all .2s ease-out;\n  transition: all .2s ease-out; }\n  .expand-leave-active > * {\n    -webkit-animation-name: expandOutWithFade;\n    animation-name: expandOutWithFade;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1;\n    -webkit-animation-duration: 0.2s;\n    animation-duration: 0.2s;\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    -webkit-animation-fill-mode: \"forwards\";\n    animation-fill-mode: \"forwards\";\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden; }\n", ""]);

// exports


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n.next-overlay-wrapper .next-overlay-inner {\n  z-index: 1001; }\n\n.next-overlay-wrapper .next-overlay-backdrop {\n  position: fixed;\n  z-index: 1001;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000000;\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n  opacity: 0; }\n\n.next-overlay-wrapper.opened .next-overlay-backdrop {\n  opacity: 0.2; }\n", ""]);

// exports


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n.next-balloon {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  max-width: 300px;\n  border-style: solid;\n  border-radius: 3px;\n  word-wrap: break-word;\n  z-index: 0;\n  /* size */\n  /* 带关闭按钮的右侧padding变大 */ }\n  .next-balloon *,\n  .next-balloon *:before,\n  .next-balloon *:after {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .next-balloon-primary {\n    color: #333333;\n    border-color: #4494F9;\n    background-color: #E3F2FD;\n    -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n    border-width: 1px; }\n    .next-balloon-primary .next-balloon-close {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      font-size: 12px;\n      color: #999999; }\n      .next-balloon-primary .next-balloon-close .next-icon {\n        width: 12px;\n        height: 12px;\n        line-height: 12px; }\n        .next-balloon-primary .next-balloon-close .next-icon:before {\n          width: 12px;\n          height: 12px;\n          font-size: 12px;\n          line-height: 12px; }\n      .next-balloon-primary .next-balloon-close :hover {\n        color: #333333; }\n    .next-balloon-primary:after {\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      content: ' ';\n      -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n              transform: rotate(45deg);\n      -webkit-box-sizing: content-box !important;\n              box-sizing: content-box !important;\n      border: 1px solid #4494F9;\n      background-color: #E3F2FD;\n      z-index: -1; }\n    .next-balloon-primary.next-balloon-top:after {\n      top: -7px;\n      left: calc(50% + -7px);\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-right:after {\n      top: calc(50% + -7px);\n      right: -7px;\n      border-left: none;\n      border-bottom: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-bottom:after {\n      bottom: -7px;\n      left: calc(50% + -7px);\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-left:after {\n      top: calc(50% + -7px);\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-left-top:after {\n      top: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-left-bottom:after {\n      bottom: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-right-top:after {\n      top: 12px;\n      right: -7px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-right-bottom:after {\n      right: -7px;\n      bottom: 12px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-top-left:after {\n      top: -7px;\n      left: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-top-right:after {\n      top: -7px;\n      right: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-bottom-left:after {\n      bottom: -7px;\n      left: 12px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-bottom-right:after {\n      right: 12px;\n      bottom: -7px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon-normal {\n    color: #333333;\n    border-color: #DCDEE3;\n    background-color: #FFFFFF;\n    -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);\n    border-width: 1px; }\n    .next-balloon-normal .next-balloon-close {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      font-size: 12px;\n      color: #999999; }\n      .next-balloon-normal .next-balloon-close .next-icon {\n        width: 12px;\n        height: 12px;\n        line-height: 12px; }\n        .next-balloon-normal .next-balloon-close .next-icon:before {\n          width: 12px;\n          height: 12px;\n          font-size: 12px;\n          line-height: 12px; }\n      .next-balloon-normal .next-balloon-close :hover {\n        color: #666666; }\n    .next-balloon-normal:after {\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      content: ' ';\n      -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n              transform: rotate(45deg);\n      -webkit-box-sizing: content-box !important;\n              box-sizing: content-box !important;\n      border: 1px solid #DCDEE3;\n      background-color: #FFFFFF;\n      z-index: -1; }\n    .next-balloon-normal.next-balloon-top:after {\n      top: -7px;\n      left: calc(50% + -7px);\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-right:after {\n      top: calc(50% + -7px);\n      right: -7px;\n      border-left: none;\n      border-bottom: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-bottom:after {\n      bottom: -7px;\n      left: calc(50% + -7px);\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-left:after {\n      top: calc(50% + -7px);\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-left-top:after {\n      top: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-left-bottom:after {\n      bottom: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-right-top:after {\n      top: 12px;\n      right: -7px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-right-bottom:after {\n      right: -7px;\n      bottom: 12px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-top-left:after {\n      top: -7px;\n      left: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-top-right:after {\n      top: -7px;\n      right: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-bottom-left:after {\n      bottom: -7px;\n      left: 12px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-bottom-right:after {\n      right: 12px;\n      bottom: -7px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon.visible {\n    display: block; }\n  .next-balloon.hidden {\n    display: none; }\n  .next-balloon-medium {\n    padding: 16px 16px 16px 16px; }\n  .next-balloon-closable {\n    padding: 16px 40px 16px 16px; }\n\n.next-balloon-tooltip {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  max-width: 300px;\n  border-style: solid;\n  border-radius: 3px;\n  font-size: 12px;\n  z-index: 0;\n  color: #333333;\n  border-color: #DCDEE3;\n  background-color: #F2F3F7;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-width: 1px;\n  /* size */ }\n  .next-balloon-tooltip *,\n  .next-balloon-tooltip *:before,\n  .next-balloon-tooltip *:after {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .next-balloon-tooltip:after {\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    content: ' ';\n    -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n            transform: rotate(45deg);\n    -webkit-box-sizing: content-box !important;\n            box-sizing: content-box !important;\n    border: 1px solid #DCDEE3;\n    background-color: #F2F3F7;\n    z-index: -1; }\n  .next-balloon-tooltip-top:after {\n    top: -7px;\n    left: calc(50% + -7px);\n    border-right: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-right:after {\n    top: calc(50% + -7px);\n    right: -7px;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-bottom:after {\n    bottom: -7px;\n    left: calc(50% + -7px);\n    border-top: none;\n    border-left: none; }\n  .next-balloon-tooltip-left:after {\n    top: calc(50% + -7px);\n    left: -7px;\n    border-top: none;\n    border-right: none; }\n  .next-balloon-tooltip-left-top:after {\n    top: 12px;\n    left: -7px;\n    border-top: none;\n    border-right: none; }\n  .next-balloon-tooltip-left-bottom:after {\n    bottom: 12px;\n    left: -7px;\n    border-top: none;\n    border-right: none; }\n  .next-balloon-tooltip-right-top:after {\n    top: 12px;\n    right: -7px;\n    border-bottom: none;\n    border-left: none; }\n  .next-balloon-tooltip-right-bottom:after {\n    right: -7px;\n    bottom: 12px;\n    border-bottom: none;\n    border-left: none; }\n  .next-balloon-tooltip-top-left:after {\n    top: -7px;\n    left: 12px;\n    border-right: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-top-right:after {\n    top: -7px;\n    right: 12px;\n    border-right: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-bottom-left:after {\n    bottom: -7px;\n    left: 12px;\n    border-top: none;\n    border-left: none; }\n  .next-balloon-tooltip-bottom-right:after {\n    right: 12px;\n    bottom: -7px;\n    border-top: none;\n    border-left: none; }\n  .next-balloon-tooltip.visible {\n    display: block; }\n  .next-balloon-tooltip.hidden {\n    display: none; }\n  .next-balloon-tooltip-medium {\n    padding: 8px 8px 8px 8px; }\n\n.next-balloon[dir=\"rtl\"] {\n  /* 带关闭按钮的右侧padding变大 */ }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary .next-balloon-close {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-right:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-left: inherit;\n    border-bottom: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-left:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-right: inherit;\n    border-top: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-left-top:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-left-bottom:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-right-top:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-right-bottom:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-top-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-top-right:after {\n    right: auto;\n    left: 12px; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-bottom-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-bottom-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal .next-balloon-close {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-right:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-left: inherit;\n    border-bottom: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-left:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-right: inherit;\n    border-top: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-left-top:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-left-bottom:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-right-top:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-right-bottom:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-top-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-top-right:after {\n    right: auto;\n    left: 12px; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-bottom-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-bottom-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-closable {\n    padding: 16px 16px 16px 40px; }\n\n.next-balloon-tooltip[dir=\"rtl\"] {\n  /* size */ }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-right:after {\n    left: -7px;\n    right: auto;\n    border-top: none;\n    border-right: none;\n    border-left: inherit;\n    border-bottom: inherit; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-left:after {\n    right: -7px;\n    left: auto;\n    border-top: inherit;\n    border-right: inherit;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-left-top:after {\n    right: -7px;\n    left: auto;\n    border-top: inherit;\n    border-right: inherit;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-left-bottom:after {\n    right: -7px;\n    left: auto;\n    border-top: inherit;\n    border-right: inherit;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-right-top:after {\n    left: -7px;\n    right: auto;\n    border-top: none;\n    border-right: none;\n    border-left: inherit;\n    border-bottom: inherit; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-right-bottom:after {\n    left: -7px;\n    right: auto;\n    border-top: none;\n    border-right: none;\n    border-left: inherit;\n    border-bottom: inherit; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-top-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-top-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-bottom-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-bottom-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-medium {\n    padding: 8px 8px 8px 8px; }\n", ""]);

// exports


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _configProvider = __webpack_require__(5);

var _configProvider2 = _interopRequireDefault(_configProvider);

var _overlay = __webpack_require__(30);

var _overlay2 = _interopRequireDefault(_overlay);

var _gateway = __webpack_require__(31);

var _gateway2 = _interopRequireDefault(_gateway);

var _position = __webpack_require__(32);

var _position2 = _interopRequireDefault(_position);

var _popup = __webpack_require__(58);

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_overlay2.default.Gateway = _gateway2.default;
_overlay2.default.Position = _position2.default;
_overlay2.default.Popup = _configProvider2.default.config(_popup2.default, {
    exportNames: ['overlay']
});

exports.default = _configProvider2.default.config(_overlay2.default, {
    exportNames: ['getContent', 'getContentNode']
});
module.exports = exports['default'];

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.KEYCODE = exports.guid = exports.focus = exports.support = exports.str = exports.obj = exports.log = exports.func = exports.events = exports.env = exports.dom = undefined;

var _dom2 = __webpack_require__(26);

var _dom = _interopRequireWildcard(_dom2);

var _env2 = __webpack_require__(28);

var _env = _interopRequireWildcard(_env2);

var _events2 = __webpack_require__(44);

var _events = _interopRequireWildcard(_events2);

var _func2 = __webpack_require__(45);

var _func = _interopRequireWildcard(_func2);

var _log2 = __webpack_require__(46);

var _log = _interopRequireWildcard(_log2);

var _object2 = __webpack_require__(9);

var _object = _interopRequireWildcard(_object2);

var _string2 = __webpack_require__(27);

var _string = _interopRequireWildcard(_string2);

var _support2 = __webpack_require__(47);

var _support = _interopRequireWildcard(_support2);

var _focus2 = __webpack_require__(48);

var _focus = _interopRequireWildcard(_focus2);

var _guid2 = __webpack_require__(49);

var _guid3 = _interopRequireDefault(_guid2);

var _keycode = __webpack_require__(29);

var _keycode2 = _interopRequireDefault(_keycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var dom = exports.dom = _dom;
var env = exports.env = _env;
var events = exports.events = _events;
var func = exports.func = _func;
var log = exports.log = _log;
var obj = exports.obj = _object;
var str = exports.str = _string;
var support = exports.support = _support;
var focus = exports.focus = _focus;
var guid = exports.guid = _guid3.default;
var KEYCODE = exports.KEYCODE = _keycode2.default;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(52);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = __webpack_require__(5);

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Icon
 */
var Icon = (_temp = _class = function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Icon.prototype.render = function render() {
        var _cx;

        /* eslint-disable no-unused-vars*/
        var _props = this.props,
            prefix = _props.prefix,
            type = _props.type,
            size = _props.size,
            className = _props.className,
            rtl = _props.rtl,
            other = _objectWithoutProperties(_props, ['prefix', 'type', 'size', 'className', 'rtl']);

        var classes = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'icon'] = true, _cx[prefix + 'icon-' + type] = !!type, _cx['' + prefix + size] = !!size, _cx[className] = !!className, _cx));

        if (rtl && ['arrow-left', 'arrow-right', 'arrow-double-left', 'arrow-double-right', 'switch', 'sorting', 'descending', 'ascending'].indexOf(type) !== -1) {
            other.dir = 'rtl';
        }

        return _react2.default.createElement('i', _extends({}, other, { className: classes }));
    };

    return Icon;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 指定显示哪种图标
     */
    type: _propTypes2.default.string,
    /**
     * 指定图标大小
     */
    size: _propTypes2.default.oneOf(['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl']),
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    size: 'medium'
}, _class._typeMark = 'icon', _temp);
Icon.displayName = 'Icon';
exports.default = _configProvider2.default.config(Icon);
module.exports = exports['default'];

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(61);

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = window.moment;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getContextProps;
function getContextProps(props, context, displayName) {
    var prefix = props.prefix,
        locale = props.locale,
        pure = props.pure,
        rtl = props.rtl;
    var nextPrefix = context.nextPrefix,
        nextLocale = context.nextLocale,
        nextPure = context.nextPure,
        nextWarning = context.nextWarning,
        nextRtl = context.nextRtl;


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

    return {
        prefix: newPrefix,
        locale: newLocale,
        pure: newPure,
        rtl: newRtl,
        warning: nextWarning
    };
}
module.exports = exports['default'];

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.matches = exports.hasDOM = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.toggleClass = toggleClass;
exports.getStyle = getStyle;
exports.setStyle = setStyle;
exports.scrollbar = scrollbar;
exports.getOffset = getOffset;

var _string = __webpack_require__(27);

var _object = __webpack_require__(9);

/**
 * 是否能使用 DOM 方法
 * @type {Boolean}
 */
var hasDOM = exports.hasDOM = typeof window !== 'undefined' && !!window.document && !!document.createElement;

/**
 * 节点是否包含指定 className
 * @param  {Element}  node
 * @param  {String}  className
 * @return {Boolean}
 *
 * @example
 * dom.hasClass(document.body, 'foo');
 */
function hasClass(node, className) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return false;
    }

    if (node.classList) {
        return node.classList.contains(className);
    } else {
        return node.className.indexOf(className) > -1;
    }
}

/**
 * 添加 className
 * @param {Element} node
 * @param {String} className
 *
 * @example
 * dom.addClass(document.body, 'foo');
 */
function addClass(node, className, _force) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return;
    }

    if (node.classList) {
        node.classList.add(className);
    } else if (_force === true || !hasClass(node, className)) {
        node.className += ' ' + className;
    }
}

/**
 * 移除 className
 * @param  {Element} node
 * @param  {String} className
 *
 * @example
 * dom.removeClass(document.body, 'foo');
 */
function removeClass(node, className, _force) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return;
    }

    if (node.classList) {
        node.classList.remove(className);
    } else if (_force === true || hasClass(node, className)) {
        node.className = node.className.replace(className, '').replace(/\s+/g, ' ').trim();
    }
}

/**
 * 切换 className
 * @param  {Element} node
 * @param  {String} className
 * @return {Boolean}           执行后节点上是否还有此 className
 *
 * @example
 * dom.toggleClass(document.body, 'foo');
 */
function toggleClass(node, className) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return false;
    }

    if (node.classList) {
        return node.classList.toggle(className);
    } else {
        var flag = hasClass(node, className);
        flag ? removeClass(node, className, true) : addClass(node, className, true);

        return !flag;
    }
}

/**
 * 元素是否匹配 CSS 选择器
 * @param  {Element} node       DOM 节点
 * @param  {String}  selector   CSS 选择器
 * @return {Boolean}
 *
 * @example
 * dom.matches(mountNode, '.container'); // boolean
 */
var matches = exports.matches = function () {
    var matchesFn = null;
    /* istanbul ignore else */
    if (hasDOM) {
        var _body = document.body || document.head;
        matchesFn = _body.matches ? 'matches' : _body.webkitMatchesSelector ? 'webkitMatchesSelector' : _body.msMatchesSelector ? 'msMatchesSelector' : _body.mozMatchesSelector ? 'mozMatchesSelector' : null;
    }

    return function (node, selector) {
        if (!hasDOM || !node) {
            return false;
        }

        return matchesFn ? node[matchesFn](selector) : false;
    };
}();

/**
 * 获取元素计算后的样式
 * @private
 * @param  {Element} node
 * @return {Object}
 */
function _getComputedStyle(node) {
    return node && node.nodeType === 1 ? window.getComputedStyle(node, null) : {};
}

var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset|size/i;
var removePixel = { left: 1, top: 1, right: 1, bottom: 1 };

/**
 * 校验并修正元素的样式属性值
 * @private
 * @param  {Element} node
 * @param  {String} type
 * @param  {Number} value
 */
function _getStyleValue(node, type, value) {
    type = type.toLowerCase();

    if (value === 'auto') {
        if (type === 'height') {
            return node.offsetHeight || 0;
        }
        if (type === 'width') {
            return node.offsetWidth || 0;
        }
    }

    if (!(type in removePixel)) {
        // 属性值是否需要去掉 px 单位，这里假定此类的属性值都是 px 为单位的
        removePixel[type] = PIXEL_PATTERN.test(type);
    }

    return removePixel[type] ? parseFloat(value) || 0 : value;
}

var floatMap = { cssFloat: 1, styleFloat: 1, float: 1 };

/**
 * 获取元素计算后的样式
 * @param  {Element} node DOM 节点
 * @param  {String} name 属性名
 * @return {Number|Object}
 */
function getStyle(node, name) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return null;
    }

    var style = _getComputedStyle(node);

    // 如果不指定属性名，则返回全部值
    if (arguments.length === 1) {
        return style;
    }

    name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;

    return _getStyleValue(node, name, style.getPropertyValue((0, _string.hyphenate)(name)) || node.style[(0, _string.camelcase)(name)]);
}

/**
 * 设置元素的样式
 * @param {Element} node  DOM 节点
 * @param {Object|String} name  属性名，或者是一个对象，包含多个属性
 * @param {Number|String} value 属性值
 *
 * @example
 * // 设置单个属性值
 * dom.setStyle(mountNode, 'width', 100);
 * // 设置多条属性值
 * dom.setStyle(mountNode, {
 *     width: 100,
 *     height: 200
 * });
 */
function setStyle(node, name, value) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return false;
    }

    // 批量设置多个值
    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && arguments.length === 2) {
        (0, _object.each)(name, function (val, key) {
            return setStyle(node, key, val);
        });
    } else {
        name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;
        if (typeof value === 'number' && PIXEL_PATTERN.test(name)) {
            value = value + 'px';
        }
        node.style[(0, _string.camelcase)(name)] = value; // IE8 support
    }
}

/**
 * 获取默认的滚动条大小
 * @return {Object} width, height
 */
function scrollbar() {
    var scrollDiv = document.createElement('div');

    setStyle(scrollDiv, {
        position: 'absolute',
        width: '100px',
        height: '100px',
        overflow: 'scroll',
        top: '-9999px'
    });
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);

    return {
        width: scrollbarWidth,
        height: scrollbarHeight
    };
}

/**
 * 获取元素距离视口顶部和左边的偏移距离
 * @return {Object} top, left
 */
function getOffset(node) {
    var rect = node.getBoundingClientRect();
    var win = node.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.camelcase = camelcase;
exports.hyphenate = hyphenate;
/**
 * 将字符串转化为驼峰式写法
 * @param  {String} str 例：-webkit-transition
 * @return {String}     例：WebkitTransition
 */
function camelcase(str) {
    if (!/-/.test(str)) {
        return str || '';
    }
    return str.toLowerCase().replace(/-([a-z])/g, function ($0, $1) {
        return $1.toUpperCase();
    });
}

/**
 * 将驼峰式字符串转化为连字符写法
 * @param  {String} str 例：WebkitTransition
 * @return {String}     例：-webkit-transition
 */
function hyphenate(str) {
    return str.replace(/([A-Z])/g, function ($0) {
        return '-' + $0.toLowerCase();
    });
}

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
module.exports = __webpack_require__(274);


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(275);

var _demoHelper = __webpack_require__(277);

var _balloon = __webpack_require__(54);

var _balloon2 = _interopRequireDefault(_balloon);

__webpack_require__(60);

__webpack_require__(20);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
        var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
            Object.defineProperty(obj, key, value);
        }
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
}

var i18nMap = {
    'zh-cn': {
        title: '气泡弹层',
        tooltipContent: '提示浮层内可替换内容.',
        balloonContent: '气泡浮层内可替换内容',
        align: {
            label: '箭头方向',
            value: 'b',
            enum: [{ label: '上', value: 'b' }, { label: '下', value: 't' }, { label: '左', value: 'r' }, { label: '右', value: 'l' }, { label: '上左', value: 'br' }, { label: '上右', value: 'bl' }, { label: '下左', value: 'tr' }, { label: '下右', value: 'tl' }, { label: '左上', value: 'rb' }, { label: '左下', value: 'rt' }, { label: '右上', value: 'lb' }, { label: '右下', value: 'lt' }]
        },
        closable: {
            label: '关闭按钮',
            value: 'true',
            enum: [{
                label: '显示',
                value: 'true'
            }, {
                label: '隐藏',
                value: 'false'
            }]
        }
    },
    'en-us': {
        title: 'balloon',
        tooltipContent: 'Tool tip content replace holder.',
        balloonContent: 'Balloon content replace holder.',
        align: {
            label: 'direction',
            value: 'b',
            enum: [{ label: 'top', value: 'b' }, { label: 'bottom', value: 't' }, { label: 'left', value: 'r' }, { label: 'right', value: 'l' }, { label: 'top left', value: 'br' }, { label: 'top right', value: 'bl' }, { label: 'bottom left', value: 'tr' }, { label: 'bottom right', value: 'tl' }, { label: 'left top', value: 'rb' }, { label: 'left bottom', value: 'rt' }, { label: 'right top', value: 'lb' }, { label: 'right bottom', value: 'lt' }]
        },
        closable: {
            label: 'closable',
            value: 'true',
            enum: [{
                label: 'yes',
                value: 'true'
            }, {
                label: 'no',
                value: 'false'
            }]
        }
    }
};

var BalloonDemo = function (_React$Component) {
    _inherits(BalloonDemo, _React$Component);

    function BalloonDemo(props) {
        _classCallCheck(this, BalloonDemo);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            demoFunction: {
                align: {
                    label: '箭头方向',
                    value: 'b',
                    enum: [{ label: '上', value: 'b' }, { label: '下', value: 't' }, { label: '左', value: 'r' }, { label: '右', value: 'l' }, { label: '上左', value: 'br' }, { label: '上右', value: 'bl' }, { label: '下左', value: 'tr' }, { label: '下右', value: 'tl' }, { label: '左上', value: 'rb' }, { label: '左下', value: 'rt' }, { label: '右上', value: 'lb' }, { label: '右下', value: 'lt' }]
                },
                closable: {
                    label: '关闭按钮',
                    value: 'true',
                    enum: [{
                        label: '显示',
                        value: 'true'
                    }, {
                        label: '隐藏',
                        value: 'false'
                    }]
                }
            }
        };

        _this.onFunctionChange = _this.onFunctionChange.bind(_this);
        return _this;
    }

    BalloonDemo.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
            demoFunction: {
                align: _extends({}, this.state.demoFunction.align, nextProps.align),
                closable: _extends({}, this.state.demoFunction.closable, nextProps.closable)
            }
        });
    };

    BalloonDemo.prototype.onFunctionChange = function onFunctionChange(demoFunction) {
        this.setState({
            demoFunction: demoFunction
        });
    };

    BalloonDemo.prototype.render = function render() {
        var content = this.props.content;
        var demoFunction = this.state.demoFunction;

        var align = demoFunction.align.value;
        var closable = demoFunction.closable.value === 'true';

        return React.createElement(_demoHelper.Demo, { title: 'Balloon', demoFunction: demoFunction, onFunctionChange: this.onFunctionChange }, React.createElement(_demoHelper.Demo, { title: 'Normal' }, React.createElement(_demoHelper.DemoGroup, { label: 'Normal' }, React.createElement(_balloon2.default.Inner, { style: { position: 'relative' },
            align: align, closable: closable }, content))), React.createElement(_demoHelper.Demo, { title: 'Primary' }, React.createElement(_demoHelper.DemoGroup, { label: 'Normal' }, React.createElement(_balloon2.default.Inner, { style: { position: 'relative' },
            align: align, type: 'primary', closable: closable }, content))));
    };

    return BalloonDemo;
}(React.Component);

BalloonDemo.displayName = 'BalloonDemo';

var TooltipDemo = function (_React$Component2) {
    _inherits(TooltipDemo, _React$Component2);

    function TooltipDemo(props) {
        _classCallCheck(this, TooltipDemo);

        var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

        _this2.state = {
            demoFunction: {
                align: {
                    label: '箭头方向',
                    value: 'b',
                    enum: [{ label: '上', value: 'b' }, { label: '下', value: 't' }, { label: '左', value: 'r' }, { label: '右', value: 'l' }, { label: '上左', value: 'br' }, { label: '上右', value: 'bl' }, { label: '下左', value: 'tr' }, { label: '下右', value: 'tl' }, { label: '左上', value: 'rb' }, { label: '左下', value: 'rt' }, { label: '右上', value: 'lb' }, { label: '右下', value: 'lt' }].slice(0, 8)
                }
            }
        };

        _this2.onFunctionChange = _this2.onFunctionChange.bind(_this2);
        return _this2;
    }

    TooltipDemo.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
            demoFunction: {
                align: _extends({}, this.state.demoFunction.align, nextProps.align)
            }
        });
    };

    TooltipDemo.prototype.onFunctionChange = function onFunctionChange(demoFunction) {
        this.setState({
            demoFunction: demoFunction
        });
    };

    TooltipDemo.prototype.render = function render() {
        var content = this.props.content;
        var demoFunction = this.state.demoFunction;

        var align = demoFunction.align.value;

        return React.createElement(_demoHelper.Demo, { title: 'Tooltip', demoFunction: demoFunction, onFunctionChange: this.onFunctionChange }, React.createElement(_demoHelper.Demo, { title: 'Tooltip' }, React.createElement(_demoHelper.DemoGroup, { label: 'Normal' }, React.createElement(_balloon2.default.Inner, {
            style: { position: 'relative' },
            closable: false,
            align: align,
            text: content,
            isTooltip: true
        }, content))));
    };

    return TooltipDemo;
}(React.Component);

TooltipDemo.displayName = 'TooltipDemo';

function render(i18n) {
    var tooltipContentText = i18n.tooltipContent;
    var balloonContentText = i18n.balloonContent;

    return ReactDOM.render(React.createElement('div', { className: 'demo-container' }, React.createElement('h2', null, i18n.title), React.createElement(BalloonDemo, {
        content: balloonContentText,
        align: i18n.align,
        closable: i18n.closable
    }), React.createElement(TooltipDemo, {
        content: tooltipContentText,
        align: i18n.align
    })), document.getElementById('container'));
}

window.renderDemo = function () {
    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-us';

    render(i18nMap[lang]);
};

window.renderDemo();

(0, _demoHelper.initDemo)('balloon');

if (true) {
    module.hot.accept();
}

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(276);

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (true) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept(106, function () {
			var newContent = __webpack_require__(106);
			if (typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.initDemo = exports.DemoGroup = exports.DemoHead = exports.Demo = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _class2, _temp2, _class3, _temp3, _class4, _temp4;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _md = __webpack_require__(278);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var COL = '{Col}';
var LABEL = '{Label}';
var TITLE = '{Title}';

var _ref = window.DEMO_VARIABLE || {},
    _ref$showType = _ref.showType,
    showType = _ref$showType === undefined ? 'none' : _ref$showType,
    _ref$demoItems = _ref.demoItems,
    demoItems = _ref$demoItems === undefined ? {} : _ref$demoItems;

var callback = [];
var COOL = {};
var FUN = {};
var demoCount = 0;

// TODO: { functions, statements, sizes }

function convertArrayToObject(demoFunction) {
    var objDemoFunction = {};
    if (Array.isArray(demoFunction)) {
        demoFunction.forEach(function (demo) {
            objDemoFunction[demo.name] = {
                label: demo.label,
                value: demo.value,
                enum: demo.enum.map(function (e) {
                    var label = e;
                    if (e === 'true') {
                        label = '是';
                    } else if (e === 'false') {
                        label = '否';
                    }

                    return {
                        label: label,
                        value: e
                    };
                })
            };
        });
        return objDemoFunction;
    }
    return demoFunction;
}

function convertObjectToArray(demoFunction) {
    var arrayDemo = [];
    Object.keys(demoFunction).forEach(function (name) {
        var demo = demoFunction[name];
        arrayDemo.push({
            name: name,
            label: demo.label,
            value: demo.value,
            enum: demo.enum.map(function (e) {
                return e.value;
            })
        });
    });
    return arrayDemo;
}

/**
 * XyzAbc -> xyz-abc
 * @param {String} str 驼峰字符串
 * @return {String} 输出规范化的字符串
 */
function deCamelize(str) {
    var matches = str.match(/([A-Z][a-z]{2,})/g);
    if (matches === null) {
        // return str.toLowerCase();
        return str;
    }
    return matches.toString().replace(',', '-').toLowerCase();
}

/**
 * 格式化词组 'AbcZex XyzYxx' -> 'abc-zex xyz-yxx'
 * @param {String} str 驼峰词组
 * @return {String} 输出格式化的词组
 */
function formatTitle(str) {
    if (!str || typeof str !== 'string') {
        return;
    }
    return str.split(' ').map(deCamelize).join(' ');
}

var Demo = (_temp = _class = function (_Component) {
    _inherits(Demo, _Component);

    function Demo(props) {
        _classCallCheck(this, Demo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            demoIndex: props.demoIndex || '' + demoCount++,
            demoItems: props.demoItems || demoItems,
            showType: props.showType || showType,
            background: props.defaultBackground,
            initDate: new Date().getTime()
        };

        if (!props.demoIndex) {
            callback.push(_this.setVisible.bind(_this));
        }
        return _this;
    }

    Demo.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('defaultBackground' in nextProps) {
            this.setState({
                background: nextProps.defaultBackground
            });
        }
    };

    Demo.prototype.setVisible = function setVisible(data) {
        delete data.demoIndex;

        this.setState(data);
    };

    Demo.prototype.switchVisible = function switchVisible(demoIndex) {
        var demoItems = this.props.demoItems || this.state.demoItems;

        // TIP: 清理无效数据
        Object.keys(demoItems).forEach(function (key) {
            if (demoItems[key].existed) {
                delete demoItems[key].existed;
            } else {
                delete demoItems[key];
            }
        });

        if (!demoItems[demoIndex]) {
            return;
        }

        var _demoItems$demoIndex$ = demoItems[demoIndex].hidden,
            hidden = _demoItems$demoIndex$ === undefined ? false : _demoItems$demoIndex$;

        var childKeys = Object.keys(demoItems).filter(function (key) {
            return new RegExp('^' + demoIndex.replace(/\*/, '(\\*|\\d+)')).test(key);
        });

        // TIP: 更新当前控制器
        demoItems[demoIndex].hidden = !hidden;
        // TIP: 更新下级控制器
        childKeys.forEach(function (key) {
            if (key.indexOf('*') > -1) {
                demoItems[key].hidden = !hidden;
            }
        });
        // TIP: 更新 DEMO
        childKeys.forEach(function (key) {
            if (key.indexOf('*') < 0) {
                demoItems[key].hidden = (demoItems[key.replace(/\d+$/, '*')] || {}).hidden || (demoItems[key.replace(/\d+-(\d+)$/, '*-$1')] || {}).hidden || !hidden;
            }
        });
        // TIP: 同步上级控制器
        this.syncVisible(demoIndex, demoItems);

        sendMessage(window.compName, 'displayed', {
            demoIndex: demoIndex,
            demoItems: demoItems
        });
    };

    Demo.prototype.syncVisible = function syncVisible(demoIndex, demoItems) {
        var index = demoIndex.replace(/(-(\*|\d+)){2}$/, '-\\d+-\\d+');

        if (index !== demoIndex) {
            var itemKeys = Object.keys(demoItems).filter(function (key) {
                return new RegExp('^' + index).test(key) && key.indexOf('*') < 0;
            });
            var hidden = demoItems[itemKeys[0] || demoIndex].hidden;
            var sameValue = true;

            itemKeys.forEach(function (key) {
                if (!!demoItems[key].hidden !== hidden) {
                    sameValue = false;
                }
            });

            index = demoIndex.replace(/-(\*|\d+)-(\*|\d+)$/, '-*');

            demoItems[index].hidden = sameValue && hidden || false;

            this.syncVisible(index, demoItems);
        }
    };

    Demo.prototype.switchBackground = function switchBackground() {
        var background = this.state.background === 'light' ? 'dark' : 'light';

        this.setState({
            background: background
        });
    };

    Demo.prototype.onFunctionChange = function onFunctionChange(name, e) {
        e.stopPropagation();

        var value = e.currentTarget.value;
        var demoFunction = convertArrayToObject(this.props.demoFunction);

        var nextDemoFunction = {};
        Object.keys(demoFunction).forEach(function (funcName) {
            var func = demoFunction[funcName];

            if (funcName === name) {
                func.value = value;
            }

            nextDemoFunction[funcName] = func;
        });

        if (Array.isArray(this.props.demoFunction)) {
            nextDemoFunction = convertObjectToArray(nextDemoFunction);
        }

        this.props.onFunctionChange(nextDemoFunction);
        return false;
    };

    Demo.prototype.render = function render() {
        var _this2 = this;

        var isDemoShape = false;
        var hasDemoLevel = false;
        var children = void 0;

        var block = this.props.block ? 'block' : null;
        var index = this.props.demoIndex || this.state.demoIndex;
        var demoItems = this.props.demoItems || this.state.demoItems;
        var demoScope = this.props.demoScope || this;
        var demoTitle = this.props.demoTitle ? this.props.demoTitle + ' -> ' + (this.props.title || TITLE) : this.props.title || TITLE;
        var showType = this.props.showType || this.state.showType;
        var switchVisible = this.props.switchVisible || this.switchVisible;
        var _state = this.state,
            background = _state.background,
            initDate = _state.initDate;
        var _props = this.props,
            className = _props.className,
            switchBackground = _props.switchBackground,
            style = _props.style;

        var demoFunction = convertArrayToObject(this.props.demoFunction);

        if (this.props.children) {
            isDemoShape = this.props.parentDisplayName !== 'Demo';

            var first = void 0;
            if (Array.isArray(this.props.children)) {
                first = this.props.children[0];
            } else {
                first = this.props.children;
            }

            hasDemoLevel = first.type.displayName === 'Demo';
        }

        // 注入 demoFunction 到 window.COOL
        if (isDemoShape && this.props.title && demoFunction) {
            FUN[this.props.title] = {};
            Object.keys(demoFunction).forEach(function (funcName) {
                var func = demoFunction[funcName];
                func.name = funcName;
                FUN[_this2.props.title][funcName] = func;
            });
        }

        var demoShapeLevel = void 0;
        if (isDemoShape && !hasDemoLevel || !isDemoShape) {
            demoShapeLevel = demoTitle.split(' -> ').join('_');

            var body = _react2.default.Children.map(this.props.children, function (child, i) {
                return _react2.default.cloneElement(child, {
                    block: _this2.props.block,
                    demoIndex: index + '-' + i,
                    demoItems: demoItems,
                    demoScope: demoScope,
                    demoTitle: demoTitle,
                    demoShapeLevel: demoShapeLevel,
                    showType: showType,
                    switchVisible: switchVisible
                });
            });

            children = _react2.default.createElement(
                'table',
                { className: block },
                _react2.default.createElement(
                    'tbody',
                    null,
                    body
                )
            );
        } else {
            children = _react2.default.Children.map(this.props.children, function (child, i) {
                return _react2.default.cloneElement(child, {
                    parentDisplayName: 'Demo',
                    defaultBackground: background,
                    demoIndex: index + '-' + i,
                    demoItems: demoItems,
                    demoScope: demoScope,
                    demoTitle: demoTitle,
                    demoFunction: demoFunction,
                    showType: showType,
                    switchVisible: switchVisible
                });
            });
        }

        var functionSelect = [];
        if (isDemoShape && demoFunction) {
            Object.keys(demoFunction).forEach(function (funcName, i) {
                var func = demoFunction[funcName];
                var tmpRadio = [];
                var name = (0, _md2.default)(funcName + '-' + initDate);

                func.enum.forEach(function (enumObj, j) {
                    var checked = enumObj.value.toString() === func.value;

                    tmpRadio.push(_react2.default.createElement(
                        'label',
                        { key: j },
                        _react2.default.createElement('input', { type: 'radio', name: name, 'data-func': funcName, value: enumObj.value.toString(), onChange: _this2.onFunctionChange.bind(_this2, funcName), defaultChecked: checked }),
                        enumObj.label.toString()
                    ));
                });

                functionSelect.push(_react2.default.createElement(
                    'li',
                    { key: i },
                    _react2.default.createElement(
                        'span',
                        { title: func.label },
                        func.label,
                        ':'
                    ),
                    tmpRadio
                ));
            });
        }

        var demoIndex = index + '-*';

        var _ref2 = demoItems[demoIndex] || {},
            _ref2$hidden = _ref2.hidden,
            hidden = _ref2$hidden === undefined ? false : _ref2$hidden;

        if (showType === 'hidden' || !hidden) {
            var _classNames;

            if (!demoItems[demoIndex]) {
                demoItems[demoIndex] = {
                    hidden: false,
                    title: demoTitle
                };
            } else {
                demoItems[demoIndex].title = demoTitle;
            }
            demoItems[demoIndex].existed = true;

            var wrapCls = (0, _classnames2.default)((_classNames = {
                'demo pc': true
            }, _classNames['demo-' + background] = background, _classNames[className] = className, _classNames));
            var switchCls = (0, _classnames2.default)({
                'demo-switch': true,
                'demo-switch-on': background === 'dark',
                'demo-switch-off': background === 'light'
            });

            var customProps = {};
            if (this.props.title) {
                // 注入 demo 的标题，用于按需选取
                customProps.title = formatTitle(this.props.title);
            }

            return _react2.default.createElement(
                'div',
                _extends({ className: wrapCls, style: style }, customProps),
                _react2.default.createElement(
                    'div',
                    { className: 'demo-header' },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.props.title || TITLE
                    ),
                    showType === 'hidden' && _react2.default.createElement(DisplaySwitch, { hidden: hidden, onClick: switchVisible.bind(demoScope, demoIndex) }),
                    isDemoShape && switchBackground ? _react2.default.createElement(
                        'div',
                        { className: 'demo-switch-wrapper' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u80CC\u666F\u989C\u8272'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: switchCls, onClick: this.switchBackground.bind(this) },
                            _react2.default.createElement('div', { className: 'demo-switch-trigger' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'demo-switch-children' },
                                background === 'light' ? '深' : '浅'
                            )
                        )
                    ) : null
                ),
                isDemoShape && demoFunction ? _react2.default.createElement(
                    'ul',
                    { className: 'demo-select' },
                    functionSelect
                ) : null,
                _react2.default.createElement(
                    'div',
                    { className: 'demo-body' },
                    children
                )
            );
        } else {
            return null;
        }
    };

    return Demo;
}(_react.Component), _class.displayName = 'Demo', _class.propTypes = {
    parentDisplayName: _propTypes2.default.string,
    defaultBackground: _propTypes2.default.oneOf(['dark', 'light']),
    title: _propTypes2.default.string,
    block: _propTypes2.default.bool,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    demoIndex: _propTypes2.default.string,
    demoItems: _propTypes2.default.object,
    demoScope: _propTypes2.default.object,
    demoTitle: _propTypes2.default.string,
    showType: _propTypes2.default.string,
    switchVisible: _propTypes2.default.func,
    switchBackground: _propTypes2.default.bool,
    demoFunction: _propTypes2.default.object,
    onFunctionChange: _propTypes2.default.func,
    style: _propTypes2.default.object
}, _class.defaultProps = {
    defaultBackground: 'light',
    block: false,
    onFunctionChange: function onFunctionChange() {}
}, _temp);

/* eslint-disable react/no-multi-comp */

Demo.displayName = 'Demo';
var DemoGroup = (_temp2 = _class2 = function (_Component2) {
    _inherits(DemoGroup, _Component2);

    function DemoGroup() {
        _classCallCheck(this, DemoGroup);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    DemoGroup.prototype.render = function render() {
        var _this4 = this;

        var _props2 = this.props,
            index = _props2.demoIndex,
            _props2$demoItems = _props2.demoItems,
            demoItems = _props2$demoItems === undefined ? {} : _props2$demoItems,
            _props2$demoScope = _props2.demoScope,
            demoScope = _props2$demoScope === undefined ? this : _props2$demoScope,
            showType = _props2.showType,
            _props2$switchVisible = _props2.switchVisible,
            switchVisible = _props2$switchVisible === undefined ? function () {} : _props2$switchVisible;

        var demoIndex = index + '-*';
        var demoTitle = this.props.demoTitle + ' -> ' + (this.props.label || LABEL);
        var demoShapeLevel = this.props.demoShapeLevel;

        var _ref3 = demoItems[demoIndex] || {},
            _ref3$hidden = _ref3.hidden,
            hidden = _ref3$hidden === undefined ? false : _ref3$hidden;

        // 解析


        if (demoShapeLevel) {
            if (!COOL[demoShapeLevel]) {
                COOL[demoShapeLevel] = [];
            }

            if (this.props.label) {
                var ret = false;
                COOL[demoShapeLevel].forEach(function (item, index) {
                    if (item.name === 'statement') {
                        ret = true;
                        COOL[demoShapeLevel][index].enum.push(_this4.props.label);
                    }
                });
                if (!ret) {
                    COOL[demoShapeLevel].push({
                        name: 'statement',
                        enum: [this.props.label]
                    });
                }
            }
        }

        // 获得默认值
        var defaultCool = {};
        defaultCool.title = this.props.demoTitle;
        defaultCool.shape = demoShapeLevel;
        defaultCool.statement = this.props.label;
        COOL[demoShapeLevel].forEach(function (item) {
            if (item.value) {
                defaultCool[item.name] = item.value;
            }
        });

        var children = _react2.default.Children.map(this.props.children, function (child, i) {
            var _props3 = _this4.props,
                index = _props3.demoIndex,
                _props3$demoItems = _props3.demoItems,
                demoItems = _props3$demoItems === undefined ? {} : _props3$demoItems,
                showType = _props3.showType,
                block = _props3.block;

            var demoIndex = index + '-' + i;

            var _ref4 = demoItems[demoIndex] || {},
                _ref4$hidden = _ref4.hidden,
                hidden = _ref4$hidden === undefined ? false : _ref4$hidden;

            var classes = (0, _classnames2.default)({
                'demo-item': !hidden,
                'demo-item-hidden': hidden,
                block: block
            });

            COOL[demoShapeLevel].forEach(function (item) {
                if (item.name === 'size') {
                    defaultCool.size = item.enum[i];
                }
            });

            if (showType === 'hidden' || !hidden) {
                if (!demoItems[demoIndex]) {
                    demoItems[demoIndex] = {
                        hidden: false
                    };
                }
                demoItems[demoIndex].existed = true;

                var cloneChild = _react2.default.cloneElement(child, {
                    'data-cool': JSON.stringify(defaultCool)
                });

                return _react2.default.createElement(
                    'td',
                    { className: 'wrap', style: { height: _this4.props.height || null } },
                    _react2.default.createElement(
                        'div',
                        { className: classes, key: i },
                        cloneChild
                    )
                );
            } else {
                return null;
            }
        });

        if (showType === 'hidden' || !hidden) {
            if (!demoItems[demoIndex]) {
                demoItems[demoIndex] = {
                    hidden: false,
                    title: demoTitle
                };
            } else {
                demoItems[demoIndex].title = demoTitle;
            }
            demoItems[demoIndex].existed = true;

            return _react2.default.createElement(
                'tr',
                { className: 'demo-group' },
                this.props.label === false ? null : _react2.default.createElement(
                    'td',
                    { className: 'label', style: { height: this.props.height || null } },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.props.label || LABEL
                    ),
                    showType === 'hidden' && _react2.default.createElement(DisplaySwitch, { hidden: hidden, onClick: switchVisible.bind(demoScope, demoIndex) })
                ),
                children
            );
        } else {
            return null;
        }
    };

    return DemoGroup;
}(_react.Component), _class2.displayName = 'DemoGroup', _class2.propTypes = {
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    block: _propTypes2.default.bool,
    height: _propTypes2.default.string,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    demoIndex: _propTypes2.default.string,
    demoItems: _propTypes2.default.object,
    demoScope: _propTypes2.default.object,
    demoTitle: _propTypes2.default.string,
    demoShapeLevel: _propTypes2.default.string,
    showType: _propTypes2.default.string,
    switchVisible: _propTypes2.default.func
}, _class2.defaultProps = {
    block: false,
    height: ''
}, _temp2);
DemoGroup.displayName = 'DemoGroup';
var DemoHead = (_temp3 = _class3 = function (_Component3) {
    _inherits(DemoHead, _Component3);

    function DemoHead() {
        _classCallCheck(this, DemoHead);

        return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
    }

    DemoHead.prototype.render = function render() {
        var _this6 = this;

        var cols = this.props.cols.map(function (col, i) {
            var _props4 = _this6.props,
                index = _props4.demoIndex,
                _props4$demoItems = _props4.demoItems,
                demoItems = _props4$demoItems === undefined ? {} : _props4$demoItems,
                _props4$demoScope = _props4.demoScope,
                demoScope = _props4$demoScope === undefined ? _this6 : _props4$demoScope,
                showType = _props4.showType,
                _props4$switchVisible = _props4.switchVisible,
                switchVisible = _props4$switchVisible === undefined ? function () {} : _props4$switchVisible;

            var demoIndex = index.replace(/-\d+$/, '-*') + '-' + i;
            var demoTitle = _this6.props.demoTitle + ' -> ' + (col || COL);
            var demoShapeLevel = _this6.props.demoShapeLevel;

            var _ref5 = demoItems[demoIndex] || {},
                _ref5$hidden = _ref5.hidden,
                hidden = _ref5$hidden === undefined ? false : _ref5$hidden;

            // 解析


            if (demoShapeLevel) {
                if (!COOL[demoShapeLevel]) {
                    COOL[demoShapeLevel] = [];
                }

                if (col) {
                    var ret = false;
                    COOL[demoShapeLevel].forEach(function (item, index) {
                        if (item.name === 'size') {
                            ret = true;
                            COOL[demoShapeLevel][index].enum.push(col);
                        }
                    });
                    if (!ret) {
                        COOL[demoShapeLevel].push({
                            name: 'size',
                            enum: [col]
                        });
                    }
                }
            }

            if (showType === 'hidden' || !hidden) {
                if (!demoItems[demoIndex]) {
                    demoItems[demoIndex] = {
                        hidden: false,
                        title: demoTitle
                    };
                } else {
                    demoItems[demoIndex].title = demoTitle;
                }
                demoItems[demoIndex].existed = true;

                return _react2.default.createElement(
                    'td',
                    { key: i },
                    col || COL,
                    showType === 'hidden' && _react2.default.createElement(DisplaySwitch, { hidden: hidden, onClick: switchVisible.bind(demoScope, demoIndex) })
                );
            } else {
                return null;
            }
        });

        return _react2.default.createElement(
            'tr',
            { className: 'demo-head' },
            _react2.default.createElement('td', null),
            cols
        );
    };

    return DemoHead;
}(_react.Component), _class3.displayName = 'DemoHead', _class3.propTypes = {
    cols: _propTypes2.default.array,
    theme: _propTypes2.default.object,
    demoIndex: _propTypes2.default.string,
    demoItems: _propTypes2.default.object,
    demoScope: _propTypes2.default.object,
    demoTitle: _propTypes2.default.string,
    demoShapeLevel: _propTypes2.default.string,
    showType: _propTypes2.default.string,
    switchVisible: _propTypes2.default.func
}, _class3.defaultProps = {
    cols: []
}, _temp3);
DemoHead.displayName = 'DemoHead';
var DisplaySwitch = (_temp4 = _class4 = function (_Component4) {
    _inherits(DisplaySwitch, _Component4);

    function DisplaySwitch() {
        _classCallCheck(this, DisplaySwitch);

        return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
    }

    DisplaySwitch.prototype.render = function render() {
        var status = this.props.hidden ? 'hide' : 'browse';

        return _react2.default.createElement('i', { className: 'demo-icon demo-icon-' + status, onClick: this.props.onClick });
    };

    return DisplaySwitch;
}(_react.Component), _class4.propTypes = {
    onClick: _propTypes2.default.func,
    hidden: _propTypes2.default.bool
}, _class4.defaultProps = {
    onClick: function onClick() {}
}, _temp4);
DisplaySwitch.displayName = 'DisplaySwitch';


if (window.addEventListener) {
    window.addEventListener('message', function (event) {
        var data = event.data;
        if (event.origin !== location.origin || !data || data.from !== 'config') {
            return;
        }

        if (data.type === 'displayed') {
            callback.forEach(function (callback) {
                callback(data.body);
            });
        }
    });
}

function sendMessage(compName, type, body) {
    var parent = window.parent;

    if (parent !== window) {
        parent.postMessage({
            from: 'demo',
            type: type,
            body: body,
            compName: compName
        }, '*');
    }
}

function initDemo(compName) {
    window.compName = compName;

    // 追加信息到页面
    var info = document.createElement('script', {
        id: 'fusion-cool'
    });
    info.innerHTML = 'window.COOL = {\'' + compName + '\': ' + JSON.stringify(COOL) + ', \'functions\': ' + JSON.stringify(FUN) + '}';
    document.body.appendChild(info);

    sendMessage(compName, 'loaded');
}

exports.Demo = Demo;
exports.DemoHead = DemoHead;
exports.DemoGroup = DemoGroup;
exports.initDemo = initDemo;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var crypt = __webpack_require__(279),
      utf8 = __webpack_require__(148).utf8,
      isBuffer = __webpack_require__(280),
      bin = __webpack_require__(148).bin,


  // The core
  md5 = function md5(message, options) {
    // Convert to byte array
    if (message.constructor == String) {
      if (options && options.encoding === 'binary') message = bin.stringToBytes(message);else message = utf8.stringToBytes(message);
    } else if (isBuffer(message)) message = Array.prototype.slice.call(message, 0);else if (!Array.isArray(message)) message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a = 1732584193,
        b = -271733879,
        c = -1732584194,
        d = 271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = (m[i] << 8 | m[i] >>> 24) & 0x00FF00FF | (m[i] << 24 | m[i] >>> 8) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << l % 32;
    m[(l + 64 >>> 9 << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i + 0], 7, -680876936);
      d = FF(d, a, b, c, m[i + 1], 12, -389564586);
      c = FF(c, d, a, b, m[i + 2], 17, 606105819);
      b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i + 4], 7, -176418897);
      d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
      c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i + 7], 22, -45705983);
      a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
      d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i + 10], 17, -42063);
      b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
      a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
      d = FF(d, a, b, c, m[i + 13], 12, -40341101);
      c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
      b = FF(b, c, d, a, m[i + 15], 22, 1236535329);

      a = GG(a, b, c, d, m[i + 1], 5, -165796510);
      d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
      c = GG(c, d, a, b, m[i + 11], 14, 643717713);
      b = GG(b, c, d, a, m[i + 0], 20, -373897302);
      a = GG(a, b, c, d, m[i + 5], 5, -701558691);
      d = GG(d, a, b, c, m[i + 10], 9, 38016083);
      c = GG(c, d, a, b, m[i + 15], 14, -660478335);
      b = GG(b, c, d, a, m[i + 4], 20, -405537848);
      a = GG(a, b, c, d, m[i + 9], 5, 568446438);
      d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
      c = GG(c, d, a, b, m[i + 3], 14, -187363961);
      b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
      a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
      d = GG(d, a, b, c, m[i + 2], 9, -51403784);
      c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
      b = GG(b, c, d, a, m[i + 12], 20, -1926607734);

      a = HH(a, b, c, d, m[i + 5], 4, -378558);
      d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
      b = HH(b, c, d, a, m[i + 14], 23, -35309556);
      a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
      d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
      c = HH(c, d, a, b, m[i + 7], 16, -155497632);
      b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
      a = HH(a, b, c, d, m[i + 13], 4, 681279174);
      d = HH(d, a, b, c, m[i + 0], 11, -358537222);
      c = HH(c, d, a, b, m[i + 3], 16, -722521979);
      b = HH(b, c, d, a, m[i + 6], 23, 76029189);
      a = HH(a, b, c, d, m[i + 9], 4, -640364487);
      d = HH(d, a, b, c, m[i + 12], 11, -421815835);
      c = HH(c, d, a, b, m[i + 15], 16, 530742520);
      b = HH(b, c, d, a, m[i + 2], 23, -995338651);

      a = II(a, b, c, d, m[i + 0], 6, -198630844);
      d = II(d, a, b, c, m[i + 7], 10, 1126891415);
      c = II(c, d, a, b, m[i + 14], 15, -1416354905);
      b = II(b, c, d, a, m[i + 5], 21, -57434055);
      a = II(a, b, c, d, m[i + 12], 6, 1700485571);
      d = II(d, a, b, c, m[i + 3], 10, -1894986606);
      c = II(c, d, a, b, m[i + 10], 15, -1051523);
      b = II(b, c, d, a, m[i + 1], 21, -2054922799);
      a = II(a, b, c, d, m[i + 8], 6, 1873313359);
      d = II(d, a, b, c, m[i + 15], 10, -30611744);
      c = II(c, d, a, b, m[i + 6], 15, -1560198380);
      b = II(b, c, d, a, m[i + 13], 21, 1309151649);
      a = II(a, b, c, d, m[i + 4], 6, -145523070);
      d = II(d, a, b, c, m[i + 11], 10, -1120210379);
      c = II(c, d, a, b, m[i + 2], 15, 718787259);
      b = II(b, c, d, a, m[i + 9], 21, -343485551);

      a = a + aa >>> 0;
      b = b + bb >>> 0;
      c = c + cc >>> 0;
      d = d + dd >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md5._gg = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md5._hh = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md5._ii = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null) throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
  };
})();

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      crypt = {
    // Bit-wise rotation left
    rotl: function rotl(n, b) {
      return n << b | n >>> 32 - b;
    },

    // Bit-wise rotation right
    rotr: function rotr(n, b) {
      return n << 32 - b | n >>> b;
    },

    // Swap big-endian to little-endian and vice versa
    endian: function endian(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++) {
        n[i] = crypt.endian(n[i]);
      }return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function randomBytes(n) {
      for (var bytes = []; n > 0; n--) {
        bytes.push(Math.floor(Math.random() * 256));
      }return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function bytesToWords(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8) {
        words[b >>> 5] |= bytes[i] << 24 - b % 32;
      }return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function wordsToBytes(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8) {
        bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);
      }return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function bytesToHex(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function hexToBytes(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16));
      }return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function bytesToBase64(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
        for (var j = 0; j < 4; j++) {
          if (i * 8 + j * 6 <= bytes.length * 8) base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 0x3F));else base64.push('=');
        }
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function base64ToBytes(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
/**
 * IE浏览器的渲染引擎版本号
 * 注意：此属性与浏览器版本号不同，IE的渲染引擎版本号是可以通过HTML header或手动设置去更改的
 * @type {Number} 6 ~ 10
 */
var ieVersion = exports.ieVersion = typeof document !== 'undefined' ? document.documentMode : undefined;

/**
 * 判断是否是生产环境
 * @type {Boolean}
 */
var isProduction = exports.isProduction = function isProduction() {
    var PRODUCTION_ENV = 'production';
    var result = false;
    try {
        if (process.env.NODE_ENV === PRODUCTION_ENV) {
            result = true;
        }
    } catch (err) {
        //
    }

    if (!result) {
        try {
            if (window.process.env.NODE_ENV === PRODUCTION_ENV) {
                result = true;
            }
        } catch (err) {
            //
        }
    }

    return result;
};

exports.default = {
    ieVersion: ieVersion,
    isProduction: isProduction
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,

    // version 0.x
    ESCAPE: 27,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,

    // MacOS
    CONTROL: 17,
    OPTION: 18,
    CMD: 91,
    COMMAND: 91,
    DELETE: 8
};
module.exports = exports["default"];

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if ("function" === 'function' && _typeof(__webpack_require__(35)) === 'object' && __webpack_require__(35)) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _util = __webpack_require__(2);

var _manager = __webpack_require__(56);

var _manager2 = _interopRequireDefault(_manager);

var _gateway = __webpack_require__(31);

var _gateway2 = _interopRequireDefault(_gateway);

var _position = __webpack_require__(32);

var _position2 = _interopRequireDefault(_position);

var _findNode = __webpack_require__(13);

var _findNode2 = _interopRequireDefault(_findNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var saveLastFocusNode = _util.focus.saveLastFocusNode,
    getFocusNodeList = _util.focus.getFocusNodeList,
    backLastFocusNode = _util.focus.backLastFocusNode;
var makeChain = _util.func.makeChain,
    noop = _util.func.noop,
    bindCtx = _util.func.bindCtx;


var isScrollDisplay = function isScrollDisplay(element) {
    try {
        var scrollbarStyle = window.getComputedStyle(element, '::-webkit-scrollbar');
        return !scrollbarStyle || scrollbarStyle.getPropertyValue('display') !== 'none';
    } catch (e) {
        // ignore error for firefox
    }

    return true;
};
var hasScroll = function hasScroll() {
    var doc = document.documentElement;
    return doc.scrollHeight > doc.clientHeight && _util.dom.scrollbar().width > 0 && isScrollDisplay(document.documentElement) && isScrollDisplay(document.body);
};
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
var getStyleProperty = function getStyleProperty(node, name) {
    var style = window.getComputedStyle(node);
    var ret = '';
    for (var i = 0; i < prefixes.length; i++) {
        ret = style.getPropertyValue(prefixes[i] + name);
        if (ret) {
            break;
        }
    }
    return ret;
};

var modals = [];
var bodyOverflowY = void 0,
    bodyPaddingRight = void 0;

/**
 * Overlay
 * */
var Overlay = (_temp = _class = function (_Component) {
    _inherits(Overlay, _Component);

    function Overlay(props) {
        _classCallCheck(this, Overlay);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.saveContentRef = function (ref) {
            _this.contentRef = ref;
        };

        _this.saveGatewayRef = function (ref) {
            _this.gatewayRef = ref;
        };

        _this.state = {
            visible: props.visible,
            status: 'none',
            animation: _this.getAnimation(props)
        };

        _this.lastAlign = props.align;

        bindCtx(_this, ['handlePosition', 'handleAnimateEnd', 'handleDocumentKeyDown', 'handleDocumentClick', 'handleMaskClick', 'beforeOpen', 'beforeClose']);

        _this.timeoutMap = {};
        return _this;
    }

    Overlay.prototype.componentWillMount = function componentWillMount() {
        if (this.props.visible) {
            this.beforeOpen();
            this.props.beforeOpen();

            if (this.state.animation && _util.support.animation) {
                this.enter();
            }
        }
    };

    Overlay.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({ visible: false });
        this.addDocumentEvents();

        _manager2.default.addOverlay(this);

        if (this.state.visible) {
            this._isMounted = true;
        }
    };

    Overlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!this._isMounted && nextProps.visible) {
            this._isMounted = true;
        }

        var willOpen = !this.props.visible && nextProps.visible;
        var willClose = this.props.visible && !nextProps.visible;
        if (willOpen) {
            this.beforeOpen();
            nextProps.beforeOpen();
        } else if (willClose) {
            this.beforeClose();
            nextProps.beforeClose();
        }

        if (nextProps.animation || nextProps.animation === false) {
            this.setState({
                animation: nextProps.animation
            });
        }

        if (nextProps.animation !== false && _util.support.animation) {
            if (willOpen) {
                this.enter();
            } else if (willClose) {
                this.leave();
            }
        } else {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    Overlay.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var _this2 = this;

        var open = !prevProps.visible && this.props.visible;
        var close = prevProps.visible && !this.props.visible;
        if (this.state.animation && _util.support.animation) {
            if (open || close) {
                this.addAnimationEvents();
            }
        } else {
            var wrapperNode = this.getWrapperNode();
            if (open) {
                setTimeout(function () {
                    _this2.props.onOpen();
                    _this2.props.afterOpen();
                    _util.dom.addClass(wrapperNode, 'opened');
                    _manager2.default.addOverlay(_this2);
                });
            } else if (close) {
                this.props.onClose();
                this.props.afterClose();
                _util.dom.removeClass(wrapperNode, 'opened');
                _manager2.default.removeOverlay(this);
            }
            this.setFocusNode();
        }
    };

    Overlay.prototype.componentWillUnmount = function componentWillUnmount() {
        this._isDestroyed = true;
        this._isMounted = false;
        _manager2.default.removeOverlay(this);
        this.removeDocumentEvents();
        if (this.focusTimeout) {
            clearTimeout(this.focusTimeout);
        }
        if (this._animation) {
            this._animation.off();
            this._animation = null;
        }
        this.beforeClose();
    };

    Overlay.prototype.getAnimation = function getAnimation(props) {
        if (props.animation === false) {
            return false;
        }

        if (props.animation) {
            return props.animation;
        }

        return this.getAnimationByAlign(props.align);
    };

    Overlay.prototype.getAnimationByAlign = function getAnimationByAlign(align) {
        switch (align[0]) {
            case 't':
                return {
                    in: 'expandInDown',
                    out: 'expandOutUp'
                };
            case 'b':
                return {
                    in: 'expandInUp',
                    out: 'expandOutDown'
                };
            default:
                return {
                    in: 'expandInDown',
                    out: 'expandOutUp'
                };
        }
    };

    Overlay.prototype.addAnimationEvents = function addAnimationEvents() {
        var _this3 = this;

        setTimeout(function () {
            var node = _this3.getContentNode();
            if (node) {
                var id = (0, _util.guid)();

                _this3._animation = _util.events.on(node, _util.support.animation.end, _this3.handleAnimateEnd.bind(_this3, id));

                var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
                var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
                var time = animationDelay + animationDuration;
                if (time) {
                    _this3.timeoutMap[id] = setTimeout(function () {
                        _this3.handleAnimateEnd(id);
                    }, time * 1000 + 200);
                }
            }
        });
    };

    Overlay.prototype.handlePosition = function handlePosition(config) {
        var align = config.align.join(' ');

        if (!('animation' in this.props) && this.props.needAdjust && this.lastAlign !== align) {
            this.setState({
                animation: this.getAnimationByAlign(align)
            });
        }

        this.lastAlign = align;
    };

    Overlay.prototype.handleAnimateEnd = function handleAnimateEnd(id) {
        if (this.timeoutMap[id]) {
            clearTimeout(this.timeoutMap[id]);
        }
        delete this.timeoutMap[id];

        if (this._animation) {
            this._animation.off();
            this._animation = null;
        }

        if (!this._isMounted) {
            return;
        }

        if (this.state.status === 'leaving') {
            this.setState({
                visible: false,
                status: 'none'
            });

            this.onLeaved();
        } else if (this.state.status === 'entering') {
            this.setState({
                status: 'none'
            });

            this.onEntered();
        }
    };

    Overlay.prototype.enter = function enter() {
        var _this4 = this;

        this.setState({
            visible: true,
            status: 'entering'
        }, function () {
            // NOTE: setState callback (second argument) now fires immediately after componentDidMount / componentDidUpdate instead of after all components have rendered.
            setTimeout(function () {
                if (!_this4._isDestroyed) {
                    _this4.onEntering();
                }
            });
        });
    };

    Overlay.prototype.leave = function leave() {
        this.setState({
            status: 'leaving'
        });

        this.onLeaving();
    };

    Overlay.prototype.onEntering = function onEntering() {
        var wrapperNode = this.getWrapperNode();
        _util.dom.addClass(wrapperNode, 'opened');
        this.props.onOpen();
    };

    Overlay.prototype.onLeaving = function onLeaving() {
        var wrapperNode = this.getWrapperNode();
        _util.dom.removeClass(wrapperNode, 'opened');
        this.props.onClose();
    };

    Overlay.prototype.onEntered = function onEntered() {
        _manager2.default.addOverlay(this);
        this.setFocusNode();
        this.props.afterOpen();
    };

    Overlay.prototype.onLeaved = function onLeaved() {
        _manager2.default.removeOverlay(this);
        this.setFocusNode();
        this.props.afterClose();
    };

    Overlay.prototype.beforeOpen = function beforeOpen() {
        if (this.props.disableScroll) {
            if (modals.length === 0) {
                var style = {
                    overflowY: 'hidden'
                };
                var body = document.body;
                bodyOverflowY = body.style.overflowY;
                if (hasScroll()) {
                    bodyPaddingRight = body.style.paddingRight;
                    style.paddingRight = _util.dom.getStyle(body, 'paddingRight') + _util.dom.scrollbar().width + 'px';
                }

                _util.dom.setStyle(body, style);
            }
            modals.push(this);
        }
    };

    Overlay.prototype.beforeClose = function beforeClose() {
        if (this.props.disableScroll) {
            var index = modals.indexOf(this);
            if (index > -1) {
                if (modals.length === 1) {
                    var style = {
                        overflowY: bodyOverflowY
                    };
                    if (hasScroll()) {
                        style.paddingRight = bodyPaddingRight;
                    }

                    _util.dom.setStyle(document.body, style);

                    bodyOverflowY = undefined;
                    bodyPaddingRight = undefined;
                }

                modals.splice(index, 1);
            }
        }
    };

    Overlay.prototype.setFocusNode = function setFocusNode() {
        var _this5 = this;

        if (!this.props.autoFocus) {
            return;
        }

        if (this.state.visible && !this._hasFocused) {
            saveLastFocusNode();
            // 这个时候很可能上一个弹层的关闭事件还未触发，导致焦点已经回到触发的元素
            // 这里延时处理一下，延时的时间为 document.click 捕获触发的延时时间
            this.focusTimeout = setTimeout(function () {
                var node = _this5.getContentNode();
                if (node) {
                    var focusNodeList = getFocusNodeList(node);
                    if (focusNodeList.length) {
                        focusNodeList[0].focus();
                    }
                    _this5._hasFocused = true;
                }
            }, 100);
        } else if (!this.state.visible && this._hasFocused) {
            backLastFocusNode();
            this._hasFocused = false;
        }
    };

    Overlay.prototype.getContent = function getContent() {
        return this.contentRef;
    };

    Overlay.prototype.getContentNode = function getContentNode() {
        return (0, _reactDom.findDOMNode)(this.contentRef);
    };

    Overlay.prototype.getWrapperNode = function getWrapperNode() {
        return this.gatewayRef ? this.gatewayRef.getChildNode() : null;
    };

    Overlay.prototype.addDocumentEvents = function addDocumentEvents() {
        if (this.props.canCloseByEsc) {
            this._keydownEvents = _util.events.on(document, 'keydown', this.handleDocumentKeyDown);
        }
        if (this.props.canCloseByOutSideClick) {
            this._clickEvents = _util.events.on(document, 'click', this.handleDocumentClick);
        }
    };

    Overlay.prototype.removeDocumentEvents = function removeDocumentEvents() {
        if (this._keydownEvents) {
            this._keydownEvents.off();
            this._keydownEvents = null;
        }
        if (this._clickEvents) {
            this._clickEvents.off();
            this._clickEvents = null;
        }
    };

    Overlay.prototype.handleDocumentKeyDown = function handleDocumentKeyDown(e) {
        if (this.state.visible && e.keyCode === _util.KEYCODE.ESC && _manager2.default.isCurrentOverlay(this)) {
            this.props.onRequestClose('keyboard', e);
        }
    };

    Overlay.prototype.handleDocumentClick = function handleDocumentClick(e) {
        var _this6 = this;

        if (this.state.visible) {
            var safeNode = this.props.safeNode;

            var safeNodes = Array.isArray(safeNode) ? [].concat(safeNode) : [safeNode];
            safeNodes.unshift(function () {
                return _this6.getWrapperNode();
            });

            for (var i = 0; i < safeNodes.length; i++) {
                var node = (0, _findNode2.default)(safeNodes[i], this.props);
                // HACK: 如果触发点击的节点是弹层内部的节点，并且在被点击后立即销毁，那么此时无法使用 node.contains(e.target)
                // 来判断此时点击的节点是否是弹层内部的节点，额外判断
                if (node && (node === e.target || node.contains(e.target) || e.target !== document && !document.documentElement.contains(e.target))) {
                    return;
                }
            }

            this.props.onRequestClose('docClick', e);
        }
    };

    Overlay.prototype.handleMaskClick = function handleMaskClick(e) {
        if (this.props.canCloseByMask) {
            this.props.onRequestClose('maskClick', e);
        }
    };

    // 兼容过去的用法: this.popupRef.getInstance().overlay.getInstance().getContentNode()
    Overlay.prototype.getInstance = function getInstance() {
        return this;
    };

    Overlay.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            style = _props.style,
            propChildren = _props.children,
            target = _props.target,
            align = _props.align,
            offset = _props.offset,
            container = _props.container,
            hasMask = _props.hasMask,
            needAdjust = _props.needAdjust,
            beforePosition = _props.beforePosition,
            onPosition = _props.onPosition,
            wrapperStyle = _props.wrapperStyle,
            rtl = _props.rtl,
            propShouldUpdatePosition = _props.shouldUpdatePosition,
            cache = _props.cache,
            wrapperClassName = _props.wrapperClassName,
            onMaskMouseEnter = _props.onMaskMouseEnter,
            onMaskMouseLeave = _props.onMaskMouseLeave;
        var _state = this.state,
            stateVisible = _state.visible,
            status = _state.status,
            animation = _state.animation;


        var children = stateVisible || cache && this._isMounted ? propChildren : null;
        if (children) {
            var _classnames;

            var child = _react.Children.only(children);
            var childClazz = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'overlay-inner'] = true, _classnames[animation.in] = status === 'entering', _classnames[animation.out] = status === 'leaving', _classnames[child.props.className] = !!child.props.className, _classnames[className] = !!className, _classnames));
            if (typeof child.ref === 'string') {
                throw new Error('Can not set ref by string in Overlay, use function instead.');
            }

            children = _react2.default.cloneElement(child, {
                className: childClazz,
                style: _extends({}, child.props.style, style),
                ref: makeChain(this.saveContentRef, child.ref),
                'aria-hidden': !stateVisible && cache && this._isMounted
            });

            if (align) {
                var shouldUpdatePosition = status === 'leaving' ? false : propShouldUpdatePosition;
                children = _react2.default.createElement(_position2.default, {
                    children: children, target: target, align: align, offset: offset, needAdjust: needAdjust,
                    beforePosition: beforePosition,
                    onPosition: makeChain(this.handlePosition, onPosition),
                    shouldUpdatePosition: shouldUpdatePosition, rtl: rtl
                });
            }

            var wrapperClazz = (0, _classnames3.default)([prefix + 'overlay-wrapper', wrapperClassName]);
            var newWrapperStyle = _extends({}, {
                display: stateVisible ? '' : 'none'
            }, wrapperStyle);

            children = _react2.default.createElement(
                'div',
                { className: wrapperClazz, style: newWrapperStyle, dir: rtl ? 'rtl' : undefined },
                hasMask ? _react2.default.createElement('div', { className: prefix + 'overlay-backdrop',
                    onClick: this.handleMaskClick,
                    onMouseEnter: onMaskMouseEnter,
                    onMouseLeave: onMaskMouseLeave,
                    dir: rtl ? 'rtl' : undefined }) : null,
                children
            );
        }

        return _react2.default.createElement(_gateway2.default, _extends({ container: container, target: target, children: children }, { ref: this.saveGatewayRef }));
    };

    return Overlay;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    /**
     * 弹层内容
     */
    children: _propTypes2.default.any,
    /**
     * 是否显示弹层
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层请求关闭时触发事件的回调函数
     * @param {String} type 弹层关闭的来源
     * @param {Object} e DOM 事件
     */
    onRequestClose: _propTypes2.default.func,
    /**
     * 弹层定位的参照元素
     */
    target: _propTypes2.default.any,
    /**
     * 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)
     */
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    /**
     * 弹层相对于参照元素定位的微调
     */
    offset: _propTypes2.default.array,
    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     */
    container: _propTypes2.default.any,
    /**
     * 是否显示遮罩
     */
    hasMask: _propTypes2.default.bool,
    /**
     * 是否支持 esc 按键关闭弹层
     */
    canCloseByEsc: _propTypes2.default.bool,
    /**
     * 点击弹层外的区域是否关闭弹层，不显示遮罩时生效
     */
    canCloseByOutSideClick: _propTypes2.default.bool,
    /**
     * 点击遮罩区域是否关闭弹层，显示遮罩时生效
     */
    canCloseByMask: _propTypes2.default.bool,
    /**
     * 弹层打开前触发事件的回调函数
     */
    beforeOpen: _propTypes2.default.func,
    /**
     * 弹层打开时触发事件的回调函数
     */
    onOpen: _propTypes2.default.func,
    /**
     * 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterOpen: _propTypes2.default.func,
    /**
     * 弹层关闭前触发事件的回调函数
     */
    beforeClose: _propTypes2.default.func,
    /**
     * 弹层关闭时触发事件的回调函数
     */
    onClose: _propTypes2.default.func,
    /**
     * 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterClose: _propTypes2.default.func,
    /**
     * 弹层定位完成前触发的事件
     */
    beforePosition: _propTypes2.default.func,
    /**
     * 弹层定位完成时触发的事件
     * @param {Object} config 定位的参数
     * @param {Array} config.align 对齐方式，如 ['cc', 'cc']（如果开启 needAdjust，可能和预先设置的 align 不同）
     * @param {Number} config.top 距离视口顶部距离
     * @param {Number} config.left 距离视口左侧距离
     * @param {Object} node 定位参照的容器节点
     */
    onPosition: _propTypes2.default.func,
    /**
     * 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式
     */
    shouldUpdatePosition: _propTypes2.default.bool,
    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     */
    autoFocus: _propTypes2.default.bool,
    /**
     * 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域
     */
    needAdjust: _propTypes2.default.bool,
    /**
     * 是否禁用页面滚动
     */
    disableScroll: _propTypes2.default.bool,
    /**
     * 隐藏时是否保留子节点
     */
    cache: _propTypes2.default.bool,
    /**
     * 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     */
    safeNode: _propTypes2.default.any,
    /**
     * 弹层的根节点的样式类
     */
    wrapperClassName: _propTypes2.default.string,
    /**
     * 弹层的根节点的内联样式
     */
    wrapperStyle: _propTypes2.default.object,
    /**
     * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画
     * @default { in: 'expandInDown', out: 'expandOutUp' }
     */
    animation: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    onMaskMouseEnter: _propTypes2.default.func,
    onMaskMouseLeave: _propTypes2.default.func
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    visible: false,
    onRequestClose: noop,
    target: _position2.default.VIEWPORT,
    align: 'tl bl',
    offset: [0, 0],
    hasMask: false,
    canCloseByEsc: true,
    canCloseByOutSideClick: true,
    canCloseByMask: true,
    beforeOpen: noop,
    onOpen: noop,
    afterOpen: noop,
    beforeClose: noop,
    onClose: noop,
    afterClose: noop,
    beforePosition: noop,
    onPosition: noop,
    onMaskMouseEnter: noop,
    onMaskMouseLeave: noop,
    shouldUpdatePosition: false,
    autoFocus: false,
    needAdjust: true,
    disableScroll: false,
    cache: false
}, _temp);
Overlay.displayName = 'Overlay';
exports.default = Overlay;
module.exports = exports['default'];

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _findNode = __webpack_require__(13);

var _findNode2 = _interopRequireDefault(_findNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var makeChain = _util.func.makeChain;
var Gateway = (_temp2 = _class = function (_Component) {
    _inherits(Gateway, _Component);

    function Gateway() {
        var _temp, _this, _ret;

        _classCallCheck(this, Gateway);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.saveChildRef = function (ref) {
            _this.child = ref;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Gateway.prototype.componentDidMount = function componentDidMount() {
        this.containerNode = this.getContainerNode(this.props);
        this.forceUpdate();
    };

    Gateway.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.containerNode = this.getContainerNode(nextProps);
    };

    Gateway.prototype.getContainerNode = function getContainerNode(props) {
        var targetNode = (0, _findNode2.default)(props.target);
        return (0, _findNode2.default)(props.container, targetNode);
    };

    Gateway.prototype.getChildNode = function getChildNode() {
        return (0, _reactDom.findDOMNode)(this.child);
    };

    Gateway.prototype.render = function render() {
        if (!this.containerNode) {
            return null;
        }

        var children = this.props.children;

        var child = children ? _react.Children.only(children) : null;
        if (!child) {
            return null;
        }

        if (typeof child.ref === 'string') {
            throw new Error('Can not set ref by string in Gateway, use function instead.');
        }
        child = _react2.default.cloneElement(child, {
            ref: makeChain(this.saveChildRef, child.ref)
        });

        return (0, _reactDom.createPortal)(child, this.containerNode);
    };

    return Gateway;
}(_react.Component), _class.propTypes = {
    children: _propTypes2.default.node,
    container: _propTypes2.default.any,
    target: _propTypes2.default.any
}, _class.defaultProps = {
    container: function container() {
        return document.body;
    }
}, _temp2);
Gateway.displayName = 'Gateway';
exports.default = Gateway;
module.exports = exports['default'];

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _reactDom = __webpack_require__(8);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _position = __webpack_require__(57);

var _position2 = _interopRequireDefault(_position);

var _findNode = __webpack_require__(13);

var _findNode2 = _interopRequireDefault(_findNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var noop = _util.func.noop,
    bindCtx = _util.func.bindCtx;
var getStyle = _util.dom.getStyle;

var place = _position2.default.place;

var Position = (_temp = _class = function (_Component) {
    _inherits(Position, _Component);

    function Position(props) {
        _classCallCheck(this, Position);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        bindCtx(_this, ['handleResize']);
        return _this;
    }

    Position.prototype.componentDidMount = function componentDidMount() {
        this.setPosition();

        if (this.props.needListenResize) {
            _util.events.on(window, 'resize', this.handleResize);
        }
    };

    Position.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('align' in nextProps && nextProps.align !== this.props.align || nextProps.shouldUpdatePosition) {
            this.shouldUpdatePosition = true;
        }
    };

    Position.prototype.componentDidUpdate = function componentDidUpdate() {
        if (this.shouldUpdatePosition) {
            this.setPosition();
            this.shouldUpdatePosition = false;
        }
    };

    Position.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.needListenResize) {
            _util.events.off(window, 'resize', this.handleResize);
        }

        clearTimeout(this.resizeTimeout);
    };

    Position.prototype.setPosition = function setPosition() {
        var _props = this.props,
            align = _props.align,
            offset = _props.offset,
            beforePosition = _props.beforePosition,
            onPosition = _props.onPosition,
            needAdjust = _props.needAdjust,
            rtl = _props.rtl;


        beforePosition();

        var contentNode = this.getContentNode();
        var targetNode = this.getTargetNode();
        if (contentNode && targetNode) {
            var resultAlign = place({
                pinElement: contentNode,
                baseElement: targetNode,
                align: align,
                offset: offset,
                needAdjust: needAdjust,
                isRtl: rtl
            });
            var top = getStyle(contentNode, 'top');
            var left = getStyle(contentNode, 'left');

            onPosition({
                align: resultAlign.split(' '),
                top: top,
                left: left
            }, contentNode);
        }
    };

    Position.prototype.getContentNode = function getContentNode() {
        return (0, _reactDom.findDOMNode)(this);
    };

    Position.prototype.getTargetNode = function getTargetNode() {
        var target = this.props.target;


        return target === _position2.default.VIEWPORT ? _position2.default.VIEWPORT : (0, _findNode2.default)(target, this.props);
    };

    Position.prototype.handleResize = function handleResize() {
        var _this2 = this;

        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = setTimeout(function () {
            _this2.setPosition();
        }, 200);
    };

    Position.prototype.render = function render() {
        return _react.Children.only(this.props.children);
    };

    return Position;
}(_react.Component), _class.VIEWPORT = _position2.default.VIEWPORT, _class.propTypes = {
    children: _propTypes2.default.node,
    target: _propTypes2.default.any,
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    offset: _propTypes2.default.array,
    beforePosition: _propTypes2.default.func,
    onPosition: _propTypes2.default.func,
    needAdjust: _propTypes2.default.bool,
    needListenResize: _propTypes2.default.bool,
    shouldUpdatePosition: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    align: 'tl bl',
    offset: [0, 0],
    beforePosition: noop,
    onPosition: noop,
    needAdjust: true,
    needListenResize: true,
    shouldUpdatePosition: false,
    rtl: false
}, _temp);
Position.displayName = 'Position';
exports.default = Position;
module.exports = exports['default'];

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(23);

__webpack_require__(62);

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var assign = __webpack_require__(39);

var ReactPropTypesSecret = __webpack_require__(11);
var checkPropTypes = __webpack_require__(40);

var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(_extends({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(11);
  var loggedTypeFailures = {};

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(11);

function emptyFunction() {}

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.initLocales = initLocales;
exports.setLanguage = setLanguage;
exports.setLocale = setLocale;
exports.setDirection = setDirection;
exports.getLocale = getLocale;
exports.getLanguage = getLanguage;
exports.getDirection = getDirection;
exports.config = config;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(43);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _util = __webpack_require__(2);

var _getContextProps = __webpack_require__(25);

var _getContextProps2 = _interopRequireDefault(_getContextProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var shallowEqual = _util.obj.shallowEqual;


function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

var globalLocales = void 0;
var currentGlobalLanguage = 'zh-cn';
var currentGlobalLocale = {};
var currentGlobalRtl = false;

function initLocales(locales) {
    globalLocales = locales;
    currentGlobalLocale = locales[currentGlobalLanguage];
}

function setLanguage(language) {
    if (globalLocales) {
        currentGlobalLanguage = language;
        currentGlobalLocale = globalLocales[language];
    }
}

function setLocale(locale) {
    currentGlobalLocale = _extends({}, globalLocales ? globalLocales[currentGlobalLanguage] : {}, locale);
}

function setDirection(dir) {
    currentGlobalRtl = dir === 'rtl';
}

function getLocale() {
    return currentGlobalLocale;
}

function getLanguage() {
    return currentGlobalLanguage;
}

function getDirection() {
    return currentGlobalRtl;
}

function config(Component) {
    var _class, _temp;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (Component.prototype.shouldComponentUpdate === undefined) {
        Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.pure) {
                return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
            }

            return true;
        };
    }

    var ConfigedComponent = (_temp = _class = function (_React$Component) {
        _inherits(ConfigedComponent, _React$Component);

        function ConfigedComponent(props, context) {
            _classCallCheck(this, ConfigedComponent);

            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

            _this._getInstance = _this._getInstance.bind(_this);
            _this._deprecated = _this._deprecated.bind(_this);
            return _this;
        }

        ConfigedComponent.prototype._getInstance = function _getInstance(ref) {
            var _this2 = this;

            this._instance = ref;

            if (this._instance && options.exportNames) {
                options.exportNames.forEach(function (name) {
                    var field = _this2._instance[name];
                    if (typeof field === 'function') {
                        _this2[name] = field.bind(_this2._instance);
                    } else {
                        _this2[name] = field;
                    }
                });
            }
        };

        ConfigedComponent.prototype._deprecated = function _deprecated() {
            if (this.context.nextWarning !== false) {
                _util.log.deprecated.apply(_util.log, arguments);
            }
        };

        ConfigedComponent.prototype.getInstance = function getInstance() {
            return this._instance;
        };

        ConfigedComponent.prototype.render = function render() {
            var _props = this.props,
                prefix = _props.prefix,
                locale = _props.locale,
                pure = _props.pure,
                rtl = _props.rtl,
                others = _objectWithoutProperties(_props, ['prefix', 'locale', 'pure', 'rtl']);

            var _context = this.context,
                nextPrefix = _context.nextPrefix,
                _context$nextLocale = _context.nextLocale,
                nextLocale = _context$nextLocale === undefined ? {} : _context$nextLocale,
                nextPure = _context.nextPure,
                nextRtl = _context.nextRtl;


            var displayName = options.componentName || getDisplayName(Component);
            var contextProps = (0, _getContextProps2.default)({ prefix: prefix, locale: locale, pure: pure, rtl: rtl }, {
                nextPrefix: nextPrefix,
                nextLocale: _extends({}, currentGlobalLocale, nextLocale),
                nextPure: nextPure,
                nextRtl: typeof nextRtl === 'boolean' ? nextRtl : currentGlobalRtl === true ? true : undefined
            }, displayName);

            var newContextProps = ['prefix', 'locale', 'pure', 'rtl'].reduce(function (ret, name) {
                if (typeof contextProps[name] !== 'undefined') {
                    ret[name] = contextProps[name];
                }
                return ret;
            }, {});

            var newOthers = options.transform ? options.transform(others, this._deprecated) : others;

            return _react2.default.createElement(Component, _extends({}, newOthers, newContextProps, {
                ref: this._getInstance
            }));
        };

        return ConfigedComponent;
    }(_react2.default.Component), _class.propTypes = _extends({}, Component.propTypes || {}, {
        prefix: _propTypes2.default.string,
        locale: _propTypes2.default.object,
        pure: _propTypes2.default.bool,
        rtl: _propTypes2.default.bool
    }), _class.contextTypes = _extends({}, Component.contextTypes || {}, {
        nextPrefix: _propTypes2.default.string,
        nextLocale: _propTypes2.default.object,
        nextPure: _propTypes2.default.bool,
        nextRtl: _propTypes2.default.bool,
        nextWarning: _propTypes2.default.bool
    }), _temp);
    ConfigedComponent.displayName = 'ConfigedComponent';


    ConfigedComponent.displayName = 'Config(' + getDisplayName(Component) + ')';

    (0, _hoistNonReactStatics2.default)(ConfigedComponent, Component);

    return ConfigedComponent;
}

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.on = on;
exports.once = once;
/**
 * 取消事件绑定
 * @param  {*}   node       DOM节点或任何可以绑定事件的对象
 * @param  {String}   eventName  事件名
 * @param  {Function} callback   回调方法
 * @param  {Boolean}   [useCapture=false] 是否开启事件捕获优先
 */
function _off(node, eventName, callback, useCapture) {
    /* istanbul ignore else */
    if (node.removeEventListener) {
        node.removeEventListener(eventName, callback, useCapture || false);
    }
}

/**
 * 绑定事件
 * @param  {*}   node       DOM节点或任何可以绑定事件的对象
 * @param  {String}   eventName  事件名
 * @param  {Function} callback   回调方法
 * @param  {Boolean}   useCapture 是否开启事件捕获优先
 * @return {Object}               返回的object中包含一个off方法，用于取消事件监听
 *
 * @example
 * const handler = events.on(document.body, 'click', e => {
 *     // handle click ...
 * });
 * // 取消事件绑定
 * handler.off();
 */
exports.off = _off;
function on(node, eventName, callback, useCapture) {
    /* istanbul ignore else */
    if (node.addEventListener) {
        node.addEventListener(eventName, callback, useCapture || false);
    }

    return {
        off: function off() {
            return _off(node, eventName, callback, useCapture);
        }
    };
}

/**
 * 绑定事件，只执行一次后销毁
 * @param  {*}   node       DOM节点或任何可以绑定事件的对象
 * @param  {String}   eventName  事件名
 * @param  {Function} callback   回调方法
 * @param  {Boolean}   useCapture 是否开启事件捕获优先
 * @return {Function}             返回的object中包含一个off方法，用于取消事件监听
 */
function once(node, eventName, callback, useCapture) {
    return on(node, eventName, function __fn() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        callback.apply(this, args);

        // 由于addEventListener中的参数options只在Chrome 55、Firefox(Gecko)以上版本支持，故还是用传统的方法实现once
        _off(node, eventName, __fn, useCapture);
    }, useCapture);
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.noop = undefined;
exports.makeChain = makeChain;
exports.bindCtx = bindCtx;
exports.promiseCall = promiseCall;

var _object = __webpack_require__(9);

/**
 * 一个空方法，返回入参本身或空对象
 */
var noop = exports.noop = function noop() {};

/**
 * 将N个方法合并为一个链式调用的方法
 * @return {Function}     合并后的方法
 * 参考 https://github.com/react-component/util/
 *
 * @example
 * func.makeChain(this.handleChange, this.props.onChange);
 */
function makeChain() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
    }

    if (fns.length === 1) {
        return fns[0];
    }

    return function chainedFunction() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        for (var i = 0, j = fns.length; i < j; i++) {
            if (fns[i] && fns[i].apply) {
                fns[i].apply(this, args);
            }
        }
    };
}

/**
 * 批量改变方法的上下文
 * 此方法在react组件中很有用，在constructor中批量将组件上的方法执行上下文绑定到组件本身
 * 注意：用bind改变函数运行的上下文只会生效一次
 * @param  {Object} ctx 方法挂载的对象以及执行的上下文
 * @param  {Array<String>} fns 方法名列表
 *
 * @example
 * func.bindCtx(this, ['handleClick', 'handleChange']);
 */
function bindCtx(ctx, fns, ns) {
    if (typeof fns === 'string') {
        fns = [fns];
    }

    // 方法的挂载空间，如果不传，默认与ctx相同
    ns = ns || ctx;

    fns.forEach(function (fnName) {
        // 这里不要添加空方法判断，由调用者保证正确性，否则出了问题无法排查
        ns[fnName] = ns[fnName].bind(ctx);
    });
}

/**
 * 用于执行回调方法后的逻辑
 * @param  {*} ret            回调方法执行结果
 * @param  {Function} success 执行结果返回非false的回调
 * @param  {Function} [failure=noop] 执行结果返回false的回调
 */
function promiseCall(ret, success) {
    var failure = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;

    if ((0, _object.isPromise)(ret)) {
        return ret.then(function (result) {
            success(result);
            return result;
        }).catch(function (e) {
            failure(e);
            // throw e;
        });
    }

    return ret !== false ? success(ret) : failure(ret);
}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.deprecated = deprecated;
exports.warning = warning;

var _env = __webpack_require__(28);

/* eslint no-console: 0 */

/**
 * 反对使用某一方法或属性的警告
 * @param  {String} props     过时的属性或方法名
 * @param  {String} instead   替代的属性或方法名
 * @param  {String} component 组件名
 *
 * @example
 * log.deprecated('onBeforeClose', 'beforeClose', 'Dialog');
 * // Warning: onBeforeClose is deprecated at [ Dialog ], use [ beforeClose ] instead of it.
 */
function deprecated(props, instead, component) {
    /* istanbul ignore else */
    if (!(0, _env.isProduction)() && typeof console !== 'undefined' && console.error) {
        return console.error('Warning: [ ' + props + ' ] is deprecated at [ ' + component + ' ], ' + ('use [ ' + instead + ' ] instead of it.'));
    }
}

/**
 * 控制台警告日志
 * @param  {String} msg
 */
function warning(msg) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined' && console.error) {
        return console.error('Warning: ' + msg);
    }
}

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flex = exports.transition = exports.animation = undefined;

var _dom = __webpack_require__(26);

var _object = __webpack_require__(9);

var animationEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd',
    animation: 'animationend'
};

var transitionEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    OTransition: 'oTransitionEnd',
    transition: 'transitionend'
};

/**
 * 是否支持某些动效事件，如果支持，返回相应的end事件名
 * @private
 * @param  {Object<String>} names
 * @return {Object|false}
 */
function _supportEnd(names) {
    /* istanbul ignore if */
    if (!_dom.hasDOM) {
        return false;
    }

    var el = document.createElement('div');
    var ret = false;

    (0, _object.each)(names, function (val, key) {
        /* istanbul ignore else */
        if (el.style[key] !== undefined) {
            ret = { end: val };
            return false;
        }
    });

    return ret;
}

/**
 * 是否支持某些CSS属性
 * @private
 * @param  {Object<Array<String>>} names
 * @return {Boolean}       is support
 */
function _supportCSS(names) {
    /* istanbul ignore if */
    if (!_dom.hasDOM) {
        return false;
    }

    var el = document.createElement('div');
    var ret = false;

    (0, _object.each)(names, function (val, key) {
        (0, _object.each)(val, function (item) {
            try {
                el.style[key] = item;
                ret = ret || el.style[key] === item;
            } catch (e) {
                // It will be throw error when set unknown property under IE8
            }
            return !ret; // 如果有一个支持就返回false，后面不需要再判断
        });

        return !ret;
    });

    return ret;
}

/**
 * 是否支持animation以及动画结束事件名
 * @type {Object|false}
 * @property {String} end 动画结束事件名
 */
var animation = exports.animation = _supportEnd(animationEndEventNames);

/**
 * 是否支持transition以及过滤效果结束事件名
 * @type {Object|false}
 * @property {String} end 过渡效果结束事件名
 */
var transition = exports.transition = _supportEnd(transitionEventNames);

/**
 * 是否支持flex属性
 * @type {Boolean}
 */
var flex = exports.flex = _supportCSS({
    display: ['flex', '-webkit-flex', '-moz-flex', '-ms-flexbox']
});

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getFocusNodeList = getFocusNodeList;
exports.saveLastFocusNode = saveLastFocusNode;
exports.clearLastFocusNode = clearLastFocusNode;
exports.backLastFocusNode = backLastFocusNode;
exports.limitTabRange = limitTabRange;

var _keycode = __webpack_require__(29);

var _keycode2 = _interopRequireDefault(_keycode);

var _object = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 用于切换页面元素的焦点
 */

/**
 * 元素是否可见
 * @private
 * @param   {Element}  node
 * @return  {Boolean}
 */
function _isVisible(node) {
    while (node) {
        if (node === document.body || node === document.documentElement) {
            break;
        }
        if (node.style.display === 'none' || node.style.visibility === 'hidden') {
            return false;
        }
        node = node.parentNode;
    }
    return true;
}

/**
 * 元素是否可以获取焦点
 * @private
 * @param   {Element}  node
 * @return  {Boolean}
 */
function _isFocusable(node) {
    var nodeName = node.nodeName.toLowerCase();
    var tabIndex = parseInt(node.getAttribute('tabindex'), 10);
    var hasTabIndex = !isNaN(tabIndex) && tabIndex > -1;

    if (_isVisible(node)) {
        if (nodeName === 'input') {
            return !node.disabled && node.type !== 'hidden';
        } else if (['select', 'textarea', 'button'].indexOf(nodeName) > -1) {
            return !node.disabled;
        } else if (nodeName === 'a') {
            return node.getAttribute('href') || hasTabIndex;
        } else {
            return hasTabIndex;
        }
    }
    return false;
}

/**
 * 列出能获取焦点的子节点
 * @param  {Element} node 容器节点
 * @return {Array<Element>}
 */
function getFocusNodeList(node) {
    var res = [];
    var nodeList = node.querySelectorAll('*');

    (0, _object.each)(nodeList, function (item) {
        if (_isFocusable(item)) {
            var method = item.getAttribute('data-auto-focus') ? 'unshift' : 'push';
            res[method](item);
        }
    });

    if (_isFocusable(node)) {
        res.unshift(node);
    }

    return res;
}

// 用于记录上一次获得焦点的无素
var lastFocusElement = null;

/**
 * 保存最近一次获得焦点的无素
 */
function saveLastFocusNode() {
    lastFocusElement = document.activeElement;
}

/**
 * 清除焦点记录
 */
function clearLastFocusNode() {
    lastFocusElement = null;
}

/**
 * 尝试将焦点切换到上一个元素
 */
function backLastFocusNode() {
    if (lastFocusElement) {
        try {
            // 元素可能已经被移动了
            lastFocusElement.focus();
        } catch (e) {
            // ignore ...
        }
    }
}

/**
 * 在限制的范围内切换焦点
 * @param  {Element} node 容器节点
 * @param  {Event} e      键盘事件
 */
function limitTabRange(node, e) {
    if (e.keyCode === _keycode2.default.TAB) {
        var tabNodeList = getFocusNodeList(node);
        var maxIndex = tabNodeList.length - 1;
        var index = tabNodeList.indexOf(document.activeElement);

        if (index > -1) {
            var targetIndex = index + (e.shiftKey ? -1 : 1);
            targetIndex < 0 && (targetIndex = maxIndex);
            targetIndex > maxIndex && (targetIndex = 0);
            tabNodeList[targetIndex].focus();
            e.preventDefault();
        }
    }
}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (prefix) {
  prefix = prefix || '';

  return prefix + (timestamp++).toString(36);
};

var timestamp = Date.now();

/**
 * 生成全局唯一的id
 * @param  {String} [prefix=''] 前缀字符串
 * @return {String}
 *
 * @example
 * guid(); // j7jv509c
 * guid('prefix-'); // prefix-j7jv509d
 */
module.exports = exports['default'];

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getContextProps = __webpack_require__(25);

var _getContextProps2 = _interopRequireDefault(_getContextProps);

var _config = __webpack_require__(42);

var _consumer = __webpack_require__(50);

var _consumer2 = _interopRequireDefault(_consumer);

var _cache = __webpack_require__(51);

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var childContextCache = new _cache2.default();

/**
 * ConfigProvider
 * @propsExtends false
 */
var ConfigProvider = (_temp = _class = function (_Component) {
    _inherits(ConfigProvider, _Component);

    /**
     * 传入组件的 props 和 displayName，得到和 childContext 计算过的包含有 preifx/locale/pure 的对象，一般用于通过静态方法生成脱离组件树的组件
     * @param {Object} props 组件的 props
     * @param {String} displayName 组件的 displayName
     * @returns {Object} 新的 context props
     */
    function ConfigProvider() {
        _classCallCheck(this, ConfigProvider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

        childContextCache.add(_this, _extends({}, childContextCache.get(_this, {}), _this.getChildContext()));
        return _this;
    }

    /**
     * 传入组件，生成受 ConfigProvider 控制的 HOC 组件
     * @param {Component} Component 组件类
     * @param {Object} options 可选项
     * @returns {Component} HOC
     */


    ConfigProvider.prototype.getChildContext = function getChildContext() {
        var _props = this.props,
            prefix = _props.prefix,
            locale = _props.locale,
            pure = _props.pure,
            warning = _props.warning,
            rtl = _props.rtl;


        return {
            nextPrefix: prefix,
            nextLocale: locale,
            nextPure: pure,
            nextRtl: rtl,
            nextWarning: warning
        };
    };

    ConfigProvider.prototype.componentWillMount = function componentWillMount() {
        this.setMomentLocale(this.props.locale);
    };

    ConfigProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.locale !== nextProps.locale) {
            this.setMomentLocale(nextProps.locale);
        }
    };

    ConfigProvider.prototype.componentDidUpdate = function componentDidUpdate() {
        childContextCache.add(this, _extends({}, childContextCache.get(this, {}), this.getChildContext()));
    };

    ConfigProvider.prototype.componentWillUnmount = function componentWillUnmount() {
        childContextCache.remove(this);
    };

    ConfigProvider.prototype.setMomentLocale = function setMomentLocale(locale) {
        var moment = void 0;
        try {
            moment = __webpack_require__(24);
        } catch (e) {
            // ignore
        }

        if (moment && locale) {
            moment.locale(locale.momentLocale);
        }
    };

    ConfigProvider.prototype.render = function render() {
        return _react.Children.only(this.props.children);
    };

    return ConfigProvider;
}(_react.Component), _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 国际化文案对象，属性为组件的 displayName
     */
    locale: _propTypes2.default.object,
    /**
     * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
     */
    pure: _propTypes2.default.bool,
    /**
     * 是否在开发模式下显示组件属性被废弃的 warning 提示
     */
    warning: _propTypes2.default.bool,
    /**
     * 是否开启 rtl 模式
     */
    rtl: _propTypes2.default.bool,
    /**
     * 组件树
     */
    children: _propTypes2.default.element
}, _class.defaultProps = {
    warning: true
}, _class.childContextTypes = {
    nextPrefix: _propTypes2.default.string,
    nextLocale: _propTypes2.default.object,
    nextPure: _propTypes2.default.bool,
    nextRtl: _propTypes2.default.bool,
    nextWarning: _propTypes2.default.bool
}, _class.config = function (Component, options) {
    return (0, _config.config)(Component, options);
}, _class.getContextProps = function (props, displayName) {
    return (0, _getContextProps2.default)(props, childContextCache.root() || {}, displayName);
}, _class.initLocales = _config.initLocales, _class.setLanguage = _config.setLanguage, _class.setLocale = _config.setLocale, _class.setDirection = _config.setDirection, _class.getLanguage = _config.getLanguage, _class.getLocale = _config.getLocale, _class.getDirection = _config.getDirection, _class.Consumer = _consumer2.default, _class.getContext = function () {
    var _ref = childContextCache.root() || {},
        nextPrefix = _ref.nextPrefix,
        nextLocale = _ref.nextLocale,
        nextPure = _ref.nextPure,
        nextRtl = _ref.nextRtl,
        nextWarning = _ref.nextWarning;

    return {
        prefix: nextPrefix,
        locale: nextLocale,
        pure: nextPure,
        rtl: nextRtl,
        warning: nextWarning
    };
}, _temp);
ConfigProvider.displayName = 'ConfigProvider';
exports.default = ConfigProvider;
module.exports = exports['default'];

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an object with the same values as object and keys
 * generated by running each own enumerable string keyed property
 * of object thru iteratee.
 * @param {Object} obj
 * @param {Function} fn
 * @return {Object}
 */
var mapKeys = function mapKeys(obj, fn) {
    var result = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var value = obj[key];
            var newKey = fn(key, value);
            result[newKey] = value;
        }
    }

    return result;
};

/**
 * Replace specific key with prefix `next`
 * and lowercase first character of the result.
 * @param {String} key
 * @return {String}
 */
var replaceKey = function replaceKey(key) {
    return key.replace(/^(next)([A-Z])/, function (match, p1, p2) {
        return p2.toLowerCase();
    });
};

/**
 * @param {Object} source
 * @return {Object}
 */
var transformContext = function transformContext(source) {
    return mapKeys(source, replaceKey);
};

/**
 * Consumer
 * @param {Object} prop
 * @param {Object} context
 */
var Consumer = function Consumer(_ref, context) {
    var children = _ref.children;
    return typeof children === 'function' ? children(transformContext(context)) : null;
};

/**
 * PropTypes
 * @type {Object}
 * @static
 */
Consumer.propTypes = {
    // Render context as function
    // Function(context: object): ReactElement
    children: _propTypes2.default.func
};

/**
 * ContextTypes (legacy context)
 * @type {Object}
 * @static
 */
Consumer.contextTypes = {
    nextPrefix: _propTypes2.default.string,
    nextLocale: _propTypes2.default.object,
    nextPure: _propTypes2.default.bool,
    newRtl: _propTypes2.default.bool,
    nextWarning: _propTypes2.default.bool
};

exports.default = Consumer;
module.exports = exports['default'];

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = function () {
    function Cache() {
        _classCallCheck(this, Cache);

        this._root = null;
        this._store = new Map();
    }

    Cache.prototype.empty = function empty() {
        return this._store.size === 0;
    };

    Cache.prototype.has = function has(key) {
        return this._store.has(key);
    };

    Cache.prototype.get = function get(key, defaultValue) {
        var res = this.has(key) ? this._store.get(key) : this.root();
        return typeof res === 'undefined' || res === null ? defaultValue : res;
    };

    Cache.prototype.add = function add(key, value) {
        if (this.empty()) {
            this._root = key;
        }
        this._store.set(key, value);
    };

    Cache.prototype.update = function update(key, value) {
        if (this.has(key)) {
            this._store.set(key, value);
        }
    };

    Cache.prototype.remove = function remove(key) {
        this._store.delete(key);
    };

    Cache.prototype.root = function root() {
        return this._store.get(this._root);
    };

    return Cache;
}();

exports.default = Cache;
module.exports = exports['default'];

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (true) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept(12, function () {
			var newContent = __webpack_require__(12);
			if (typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _configProvider = __webpack_require__(5);

var _configProvider2 = _interopRequireDefault(_configProvider);

var _balloon = __webpack_require__(55);

var _balloon2 = _interopRequireDefault(_balloon);

var _tooltip = __webpack_require__(59);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _inner = __webpack_require__(14);

var _inner2 = _interopRequireDefault(_inner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

_balloon2.default.Tooltip = _configProvider2.default.config(_tooltip2.default, {
    transform: function transform(props, deprecated) {
        if ('text' in props) {
            deprecated('text', 'children', 'Tooltip');

            var _props = props,
                text = _props.text,
                others = _objectWithoutProperties(_props, ['text']);

            props = _extends({ children: text }, others);
        }

        return props;
    }
});
_balloon2.default.Inner = _inner2.default;

exports.default = _configProvider2.default.config(_balloon2.default, {
    transform: function transform(props, deprecated) {
        if (props.alignment) {
            deprecated('alignment', 'alignEdge', 'Balloon');

            var _props2 = props,
                alignment = _props2.alignment,
                others = _objectWithoutProperties(_props2, ['alignment']);

            props = _extends({ alignEdge: alignment === 'edge' }, others);
        }
        if (props.onCloseClick) {
            deprecated('onCloseClick', 'onVisibleChange', 'Balloon');

            var _props3 = props,
                onCloseClick = _props3.onCloseClick,
                onVisibleChange = _props3.onVisibleChange,
                _others = _objectWithoutProperties(_props3, ['onCloseClick', 'onVisibleChange']);

            var newOnVisibleChange = function newOnVisibleChange(visible, reason) {
                if (reason === 'closeClick') {
                    onCloseClick();
                }
                if (onVisibleChange) {
                    onVisibleChange(visible, reason);
                }
            };
            props = _extends({ onVisibleChange: newOnVisibleChange }, _others);
        }

        return props;
    }
});
module.exports = exports['default'];

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overlay = __webpack_require__(19);

var _overlay2 = _interopRequireDefault(_overlay);

var _util = __webpack_require__(2);

var _inner = __webpack_require__(14);

var _inner2 = _interopRequireDefault(_inner);

var _alignMap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var noop = _util.func.noop;
var Popup = _overlay2.default.Popup;


var alignMap = _alignMap.normalMap;

/** Balloon */
var Balloon = (_temp = _class = function (_React$Component) {
    _inherits(Balloon, _React$Component);

    function Balloon(props, context) {
        _classCallCheck(this, Balloon);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {
            align: props.align,
            visible: 'visible' in props ? props.visible : props.defaultVisible
        };
        _this._onClose = _this._onClose.bind(_this);
        _this._onPosition = _this._onPosition.bind(_this);
        _this._onVisibleChange = _this._onVisibleChange.bind(_this);

        _this._contentId = props.id;
        return _this;
    }

    Balloon.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible
            });
        }

        if ('align' in nextProps) {
            this.setState({
                align: nextProps.align
            });
        }
    };

    Balloon.prototype._onVisibleChange = function _onVisibleChange(visible, trigger) {
        // Not Controlled
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible
            });
        }

        this.props.onVisibleChange(visible, trigger);

        if (!visible) {
            this.props.onClose();
        }
    };

    Balloon.prototype._onClose = function _onClose(e) {
        this._onVisibleChange(false, 'closeClick');

        //必须加上preventDefault,否则单测IE下报错,出现full page reload 异常
        e.preventDefault();
    };

    Balloon.prototype._onPosition = function _onPosition(res) {
        var rtl = this.props.rtl;

        alignMap = this.props.alignEdge ? _alignMap.edgeMap : _alignMap.normalMap;
        var newAlign = res.align.join(' ');
        var resAlign = void 0;

        var alignKey = 'align';
        if (rtl) {
            alignKey = 'rtlAlign';
        }

        for (var key in alignMap) {
            if (alignMap[key][alignKey] === newAlign) {
                resAlign = key;

                break;
            }
        }

        resAlign = resAlign || this.state.align;
        if (resAlign !== this.state.align) {
            this.setState({
                align: resAlign
            });
        }
    };

    Balloon.prototype.render = function render() {
        var _props = this.props,
            type = _props.type,
            prefix = _props.prefix,
            className = _props.className,
            alignEdge = _props.alignEdge,
            trigger = _props.trigger,
            triggerType = _props.triggerType,
            children = _props.children,
            closable = _props.closable,
            shouldUpdatePosition = _props.shouldUpdatePosition,
            delay = _props.delay,
            needAdjust = _props.needAdjust,
            safeId = _props.safeId,
            autoFocus = _props.autoFocus,
            safeNode = _props.safeNode,
            onClick = _props.onClick,
            onHover = _props.onHover,
            animation = _props.animation,
            offset = _props.offset,
            style = _props.style,
            container = _props.container,
            popupContainer = _props.popupContainer,
            cache = _props.cache,
            popupStyle = _props.popupStyle,
            popupClassName = _props.popupClassName,
            popupProps = _props.popupProps,
            rtl = _props.rtl,
            others = _objectWithoutProperties(_props, ['type', 'prefix', 'className', 'alignEdge', 'trigger', 'triggerType', 'children', 'closable', 'shouldUpdatePosition', 'delay', 'needAdjust', 'safeId', 'autoFocus', 'safeNode', 'onClick', 'onHover', 'animation', 'offset', 'style', 'container', 'popupContainer', 'cache', 'popupStyle', 'popupClassName', 'popupProps', 'rtl']);

        if (container) {
            _util.log.deprecated('container', 'popupContainer', 'Balloon');
        }

        var align = this.state.align;


        alignMap = alignEdge ? _alignMap.edgeMap : _alignMap.normalMap;
        var _prefix = this.context.prefix || prefix;

        var trOrigin = 'trOrigin';
        if (rtl) {
            trOrigin = 'rtlTrOrigin';
        }

        var _offset = [alignMap[align].offset[0] + offset[0], alignMap[align].offset[1] + offset[1]];
        var transformOrigin = alignMap[align][trOrigin];
        var _style = _extends({ transformOrigin: transformOrigin }, style);

        var content = _react2.default.createElement(
            _inner2.default,
            _extends({}, _util.obj.pickOthers(Object.keys(Balloon.propTypes), others), {
                id: this._contentId,
                prefix: _prefix,
                closable: closable,
                onClose: this._onClose,
                className: className,
                style: _style,
                align: align,
                type: type,
                rtl: rtl,
                alignEdge: alignEdge
            }),
            children
        );

        var triggerProps = {};
        triggerProps['aria-describedby'] = this._contentId;
        triggerProps.tabIndex = '0';

        var newTrigger = _react2.default.cloneElement(trigger, triggerProps);

        return _react2.default.createElement(
            Popup,
            _extends({}, popupProps, {
                trigger: this._contentId ? newTrigger : trigger,
                cache: cache,
                safeId: safeId,
                triggerType: triggerType,
                align: alignMap[align].align,
                offset: _offset,
                visible: this.state.visible,
                onPosition: this._onPosition,
                onClick: onClick,
                onHover: onHover,
                afterClose: this.props.afterClose,
                onVisibleChange: this._onVisibleChange,
                shouldUpdatePosition: shouldUpdatePosition,
                needAdjust: needAdjust,
                animation: animation,
                delay: delay,
                autoFocus: autoFocus,
                safeNode: safeNode,
                container: popupContainer || container,
                className: popupClassName,
                style: popupStyle,
                rtl: rtl
            }),
            content
        );
    };

    return Balloon;
}(_react2.default.Component), _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内敛样式
     */
    style: _propTypes2.default.object,
    /**
     * 浮层的内容
     */
    children: _propTypes2.default.any,
    size: _propTypes2.default.string,
    /**
     * 样式类型
     */
    type: _propTypes2.default.oneOf(['normal', 'primary']),
    /**
     * 弹层当前显示的状态
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层默认显示的状态
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 弹层在显示和隐藏触发的事件
     * @param {Boolean} visible 弹层是否隐藏和显示
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 弹出层对齐方式
     */
    alignEdge: _propTypes2.default.bool,
    /**
     * 是否显示关闭按钮
     */
    closable: _propTypes2.default.bool,
    /**
     * 弹出层位置
     * @enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合
     */
    align: _propTypes2.default.oneOf(['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb']),
    /**
     * 弹层相对于trigger的定位的微调
     */
    offset: _propTypes2.default.array,
    /**
     * 触发元素
     */
    trigger: _propTypes2.default.any,
    /**
     * 触发行为
     * 鼠标悬浮, 获取到焦点, 鼠标点击('hover'，'focus'，'click')或者它们组成的数组，如 ['hover', 'focus']
     */
    triggerType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),

    onClick: _propTypes2.default.func,
    /**
     * 任何visible为false时会触发的事件
     */
    onClose: _propTypes2.default.func,
    onHover: _propTypes2.default.func,
    /**
     * 是否进行自动位置调整
     */
    needAdjust: _propTypes2.default.bool,
    /**
     * 弹层在触发以后的延时显示, 单位毫秒 ms
     */
    delay: _propTypes2.default.number,
    /**
     * 浮层关闭后触发的事件, 如果有动画，则在动画结束后触发
     */
    afterClose: _propTypes2.default.func,
    /**
     * 强制更新定位信息
     */
    shouldUpdatePosition: _propTypes2.default.bool,
    /**
     * 弹层出现后是否自动focus到内部第一个元素
     */
    autoFocus: _propTypes2.default.bool,
    /**
     * 安全节点:对于triggetType为click的浮层,会在点击除了浮层外的其它区域时关闭浮层.safeNode用于添加不触发关闭的节点, 值可以是dom节点的id或者是节点的dom对象
     */
    safeNode: _propTypes2.default.string,
    /**
     * 用来指定safeNode节点的id，和safeNode配合使用
     */
    safeId: _propTypes2.default.string,
    /**
     * 配置动画的播放方式
     * @param {String} in 进场动画
     * @param {String} out 出场动画
     */
    animation: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),

    /**
     * 弹层的dom节点关闭时是否删除
     */
    cache: _propTypes2.default.bool,
    /**
     * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
     */
    popupContainer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    container: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    /**
     * 弹层组件style，透传给Popup
     */
    popupStyle: _propTypes2.default.object,
    /**
     * 弹层组件className，透传给Popup
     */
    popupClassName: _propTypes2.default.string,
    /**
     * 弹层组件属性，透传给Popup
     */
    popupProps: _propTypes2.default.object,
    /**
     * 弹层id, 传入值才会支持无障碍
     */
    id: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    type: 'normal',
    closable: true,
    defaultVisible: false,
    size: 'medium',
    alignEdge: false,
    align: 'b',
    offset: [0, 0],
    trigger: _react2.default.createElement('span', null),
    onClose: noop,
    afterClose: noop,
    onVisibleChange: noop,
    needAdjust: false,
    triggerType: 'hover',
    safeNode: undefined,
    safeId: null,
    autoFocus: false,
    animation: {
        in: 'zoomIn',
        out: 'zoomOut'
    },
    cache: false,
    popupStyle: {},
    popupClassName: '',
    popupProps: {}
}, _temp);
Balloon.displayName = 'Balloon';
exports.default = Balloon;
module.exports = exports['default'];

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var overlayManager = {
    allOverlays: [],

    addOverlay: function addOverlay(overlay) {
        this.removeOverlay(overlay);
        this.allOverlays.unshift(overlay);
    },
    isCurrentOverlay: function isCurrentOverlay(overlay) {
        return overlay && this.allOverlays[0] === overlay;
    },
    removeOverlay: function removeOverlay(overlay) {
        var i = this.allOverlays.indexOf(overlay);
        if (i > -1) {
            this.allOverlays.splice(i, 1);
        }
    }
};

exports.default = overlayManager;
module.exports = exports["default"];

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VIEWPORT = 'viewport';

// IE8 not support pageXOffset
var getPageX = function getPageX() {
    return window.pageXOffset || document.documentElement.scrollLeft;
};
var getPageY = function getPageY() {
    return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * @private get element rect
 * @param       {Element} elem
 * @return      {Object}
 */
function _getElementRect(elem) {
    var offsetTop = 0,
        offsetLeft = 0;

    var offsetHeight = elem.offsetHeight;
    var offsetWidth = elem.offsetWidth;

    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
        if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft;
        }
    } while ((elem = elem.offsetParent) !== null);

    return {
        top: offsetTop - (document.documentElement.scrollTop || document.body.scrollTop),
        left: offsetLeft - (document.documentElement.scrollLeft || document.body.scrollLeft),
        height: offsetHeight,
        width: offsetWidth
    };
}

/**
 * @private get viewport size
 * @return {Object}
 */
function _getViewportSize() {
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    };
}
var Position = (_temp = _class = function () {
    function Position(props) {
        _classCallCheck(this, Position);

        this.pinElement = props.pinElement;
        this.baseElement = props.baseElement;
        this.align = props.align || 'tl tl';
        this.offset = props.offset || [0, 0];
        this.needAdjust = props.needAdjust || false;
        this.isRtl = props.isRtl || false;
    }

    /**
     * @public static place method
     * @param  {Object}       props
     *     @param  {DOM}      props.pinElement
     *     @param  {DOM}      props.baseElement
     *     @param  {String}   props.align
     *     @param  {Number}   props.offset
     *     @param  {Boolean}  props.needAdjust
     *     @param  {Boolean}  props.isRtl
     * @return {Position}
     */


    Position.prototype.setPosition = function setPosition() {
        var pinElement = this.pinElement;
        var baseElement = this.baseElement;
        var expectedAlign = this._getExpectedAlign();
        var isPinFixed = void 0,
            isBaseFixed = void 0,
            firstPositionResult = void 0;
        if (pinElement === VIEWPORT) {
            return;
        }
        if (_util.dom.getStyle(pinElement, 'position') !== 'fixed') {
            _util.dom.setStyle(pinElement, 'position', 'absolute');
            isPinFixed = false;
        } else {
            isPinFixed = true;
        }
        if (baseElement === VIEWPORT || _util.dom.getStyle(baseElement, 'position') !== 'fixed') {
            isBaseFixed = false;
        } else {
            isBaseFixed = true;
        }
        // 根据期望的定位
        for (var i = 0; i < expectedAlign.length; i++) {
            var align = expectedAlign[i];
            var pinElementPoints = this._normalizePosition(pinElement, align.split(' ')[0], isPinFixed);
            var baseElementPoints = this._normalizePosition(baseElement, align.split(' ')[1], isPinFixed);
            var pinElementParentOffset = this._getParentOffset(pinElement);
            var baseElementOffset = isPinFixed && isBaseFixed ? this._getLeftTop(baseElement) : baseElementPoints.offset();
            var top = baseElementOffset.top + baseElementPoints.y - pinElementParentOffset.top - pinElementPoints.y;
            var left = baseElementOffset.left + baseElementPoints.x - pinElementParentOffset.left - pinElementPoints.x;
            this._setPinElementPostion(pinElement, { left: left, top: top }, this.offset);

            if (!firstPositionResult) {
                firstPositionResult = { left: left, top: top };
            }
            if (this._isInViewport(pinElement)) {
                return align;
            }
        }

        var inViewportLeft = this._makeElementInViewport(pinElement, firstPositionResult.left, 'Left', isPinFixed);
        var inViewportTop = this._makeElementInViewport(pinElement, firstPositionResult.top, 'Top', isPinFixed);

        this._setPinElementPostion(pinElement, { left: inViewportLeft, top: inViewportTop });
        return expectedAlign[0];
    };

    Position.prototype._getParentOffset = function _getParentOffset(element) {
        var parent = element.offsetParent || document.documentElement;
        var offset = void 0;
        if (parent === document.body && _util.dom.getStyle(parent, 'position') === 'static') {
            offset = {
                top: 0,
                left: 0
            };
        } else {
            offset = this._getElementOffset(parent);
        }

        offset.top += parseFloat(_util.dom.getStyle(parent, 'border-top-width'), 10);
        offset.left += parseFloat(_util.dom.getStyle(parent, 'border-left-width'), 10);
        offset.offsetParent = parent;
        return offset;
    };

    Position.prototype._makeElementInViewport = function _makeElementInViewport(pinElement, number, type, isPinFixed) {
        var result = number;
        var docElement = document.documentElement;
        var offsetParent = pinElement.offsetParent || document.documentElement;

        if (result < 0) {
            if (isPinFixed) {
                result = 0;
            } else if (offsetParent === document.body && _util.dom.getStyle(offsetParent, 'position') === 'static') {
                // Only when div's offsetParent is document.body, we set new position result.
                result = Math.max(docElement['scroll' + type], document.body['scroll' + type]);
            }
        }

        return result;
    };

    Position.prototype._normalizePosition = function _normalizePosition(element, align, isPinFixed) {
        var points = this._normalizeElement(element, isPinFixed);
        this._normalizeXY(points, align);

        return points;
    };

    Position.prototype._normalizeXY = function _normalizeXY(points, align) {
        var x = align.split('')[1];
        var y = align.split('')[0];

        points.x = this._xyConverter(x, points, 'width');
        points.y = this._xyConverter(y, points, 'height');

        return points;
    };

    Position.prototype._xyConverter = function _xyConverter(align, points, type) {
        var res = align.replace(/t|l/gi, '0%').replace(/c/gi, '50%').replace(/b|r/gi, '100%').replace(/(\d+)%/gi, function (m, d) {
            return points.size()[type] * (d / 100);
        });

        return parseFloat(res, 10) || 0;
    };

    Position.prototype._getLeftTop = function _getLeftTop(element) {
        return {
            left: parseFloat(_util.dom.getStyle(element, 'left')) || 0,
            top: parseFloat(_util.dom.getStyle(element, 'top')) || 0
        };
    };

    Position.prototype._normalizeElement = function _normalizeElement(element, isPinFixed) {
        var _this = this;

        var result = {
            element: element,
            x: 0,
            y: 0
        },
            isViewport = element === VIEWPORT,
            docElement = document.documentElement;

        result.offset = function () {
            if (isPinFixed) {
                return {
                    left: 0,
                    top: 0
                };
            } else if (isViewport) {
                return {
                    left: getPageX(),
                    top: getPageY()
                };
            } else {
                return _this._getElementOffset(element);
            }
        };

        result.size = function () {
            if (isViewport) {
                return {
                    width: docElement.clientWidth,
                    height: docElement.clientHeight
                };
            } else {
                return {
                    width: element.offsetWidth,
                    height: element.offsetHeight
                };
            }
        };

        return result;
    };

    Position.prototype._getElementOffset = function _getElementOffset(element) {
        var rect = element.getBoundingClientRect();
        var docElement = document.documentElement;
        var body = document.body;
        var docClientLeft = docElement.clientLeft || body.clientLeft || 0;
        var docClientTop = docElement.clientTop || body.clientTop || 0;

        return {
            left: rect.left + (getPageX() - docClientLeft),
            top: rect.top + (getPageY() - docClientTop)
        };
    };

    // According to the location of the overflow to calculate the desired positioning


    Position.prototype._getExpectedAlign = function _getExpectedAlign() {
        var align = this.isRtl ? this._replaceAlignDir(this.align, /l|r/g, { l: 'r', r: 'l' }) : this.align;
        var expectedAlign = [align];

        if (this.needAdjust) {
            if (/t|b/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /t|b/g, { t: 'b', b: 't' }));
            }
            if (/l|r/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /l|r/g, { l: 'r', r: 'l' }));
            }
            if (/c/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, { c: 'l' }));
                expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, { c: 'r' }));
            }
            expectedAlign.push(this._replaceAlignDir(align, /l|r|t|b/g, { l: 'r', r: 'l', t: 'b', b: 't' }));
        }
        return expectedAlign;
    };

    // Transform align order.


    Position.prototype._replaceAlignDir = function _replaceAlignDir(align, regExp, map) {
        return align.replace(regExp, function (res) {
            return map[res];
        });
    };

    // Detecting element is in the window， we want to adjust position later.


    Position.prototype._isInViewport = function _isInViewport(element) {
        var viewportSize = _getViewportSize();
        // Avoid animate problem that use offsetWidth instead of getBoundingClientRect.
        var elementRect = _getElementRect(element);
        return elementRect.left >= 0 && elementRect.left + element.offsetWidth <= viewportSize.width && elementRect.top >= 0 && elementRect.top + element.offsetHeight <= viewportSize.height;
    };
    // 在这里做RTL判断 top-left 定位转化为等效的 top-right定位


    Position.prototype._setPinElementPostion = function _setPinElementPostion(pinElement, postion) {
        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
        var top = postion.top,
            left = postion.left;

        if (!this.isRtl) {
            _util.dom.setStyle(pinElement, {
                left: left + offset[0] + 'px',
                top: top + offset[1] + 'px'
            });
            return;
        }

        // transfer {left,top} equaly to {right,top}
        var pinElementParentOffset = this._getParentOffset(pinElement);

        var _getElementRect2 = _getElementRect(pinElementParentOffset.offsetParent),
            offsetParentWidth = _getElementRect2.width;

        var _getElementRect3 = _getElementRect(pinElement),
            width = _getElementRect3.width;

        var right = offsetParentWidth - (left + width);
        _util.dom.setStyle(pinElement, {
            left: 'auto',
            right: right + offset[0] + 'px',
            top: top + offset[1] + 'px'
        });
    };

    return Position;
}(), _class.VIEWPORT = VIEWPORT, _class.place = function (props) {
    return new Position(props).setPosition();
}, _temp);
exports.default = Position;
module.exports = exports['default'];

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _overlay = __webpack_require__(30);

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var noop = _util.func.noop,
    makeChain = _util.func.makeChain,
    bindCtx = _util.func.bindCtx;

/**
 * Overlay.Popup
 * @description 继承 Overlay 的 API，除非特别说明
 * */

var Popup = (_temp = _class = function (_Component) {
    _inherits(Popup, _Component);

    function Popup(props) {
        _classCallCheck(this, Popup);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            visible: typeof props.visible === 'undefined' ? props.defaultVisible : props.visible
        };

        bindCtx(_this, ['handleTriggerClick', 'handleTriggerKeyDown', 'handleTriggerMouseEnter', 'handleTriggerMouseLeave', 'handleTriggerFocus', 'handleTriggerBlur', 'handleContentMouseEnter', 'handleContentMouseLeave', 'handleContentMouseDown', 'handleRequestClose', 'handleMaskMouseEnter', 'handleMaskMouseLeave']);
        return _this;
    }

    Popup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    Popup.prototype.componentWillUnmount = function componentWillUnmount() {
        var _this2 = this;

        ['_timer', '_hideTimer', '_showTimer'].forEach(function (time) {
            _this2[time] && clearTimeout(_this2[time]);
        });
    };

    Popup.prototype.handleVisibleChange = function handleVisibleChange(visible, type, e) {
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible
            });
        }

        this.props.onVisibleChange(visible, type, e);
    };

    Popup.prototype.handleTriggerClick = function handleTriggerClick(e) {
        if (this.state.visible && !this.props.canCloseByTrigger) {
            return;
        }

        this.handleVisibleChange(!this.state.visible, 'fromTrigger', e);
    };

    Popup.prototype.handleTriggerKeyDown = function handleTriggerKeyDown(e) {
        if (e.keyCode === _util.KEYCODE.SPACE || e.keyCode === _util.KEYCODE.ENTER) {
            e.preventDefault();
            this.handleTriggerClick(e);
        }
    };

    Popup.prototype.handleTriggerMouseEnter = function handleTriggerMouseEnter(e) {
        var _this3 = this;

        this._mouseNotFirstOnMask = false;

        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
        }
        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (!this.state.visible) {
            this._showTimer = setTimeout(function () {
                _this3.handleVisibleChange(true, 'fromTrigger', e);
            }, this.props.delay);
        }
    };

    Popup.prototype.handleTriggerMouseLeave = function handleTriggerMouseLeave(e, type) {
        var _this4 = this;

        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (this.state.visible) {
            this._hideTimer = setTimeout(function () {
                _this4.handleVisibleChange(false, type || 'fromTrigger', e);
            }, this.props.delay);
        }
    };

    Popup.prototype.handleTriggerFocus = function handleTriggerFocus(e) {
        this.handleVisibleChange(true, 'fromTrigger', e);
    };

    Popup.prototype.handleTriggerBlur = function handleTriggerBlur(e) {
        if (!this._isForwardContent) {
            this.handleVisibleChange(false, 'fromTrigger', e);
        }
        this._isForwardContent = false;
    };

    Popup.prototype.handleContentMouseDown = function handleContentMouseDown() {
        this._isForwardContent = true;
    };

    Popup.prototype.handleContentMouseEnter = function handleContentMouseEnter() {
        clearTimeout(this._hideTimer);
    };

    Popup.prototype.handleContentMouseLeave = function handleContentMouseLeave(e) {
        this.handleTriggerMouseLeave(e, 'fromContent');
    };

    Popup.prototype.handleMaskMouseEnter = function handleMaskMouseEnter() {
        if (!this._mouseNotFirstOnMask) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
            this._mouseNotFirstOnMask = false;
        }
    };

    Popup.prototype.handleMaskMouseLeave = function handleMaskMouseLeave() {
        this._mouseNotFirstOnMask = true;
    };

    Popup.prototype.handleRequestClose = function handleRequestClose(type, e) {
        this.handleVisibleChange(false, type, e);
    };

    Popup.prototype.renderTrigger = function renderTrigger() {
        var _this5 = this;

        var _props = this.props,
            trigger = _props.trigger,
            disabled = _props.disabled;

        var props = {
            key: 'trigger',
            'aria-haspopup': true,
            'aria-expanded': this.state.visible
        };

        if (!disabled) {
            var triggerType = this.props.triggerType;

            var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
            var _trigger$props = trigger.props,
                onClick = _trigger$props.onClick,
                onKeyDown = _trigger$props.onKeyDown,
                onMouseEnter = _trigger$props.onMouseEnter,
                onMouseLeave = _trigger$props.onMouseLeave,
                onFocus = _trigger$props.onFocus,
                onBlur = _trigger$props.onBlur;

            triggerTypes.forEach(function (triggerType) {
                switch (triggerType) {
                    case 'click':
                        props.onClick = makeChain(_this5.handleTriggerClick, onClick);
                        props.onKeyDown = makeChain(_this5.handleTriggerKeyDown, onKeyDown);
                        break;
                    case 'hover':
                        props.onMouseEnter = makeChain(_this5.handleTriggerMouseEnter, onMouseEnter);
                        props.onMouseLeave = makeChain(_this5.handleTriggerMouseLeave, onMouseLeave);
                        break;
                    case 'focus':
                        props.onFocus = makeChain(_this5.handleTriggerFocus, onFocus);
                        props.onBlur = makeChain(_this5.handleTriggerBlur, onBlur);
                        break;
                    default:
                        break;
                }
            });
        }

        return _react2.default.cloneElement(trigger, props);
    };

    Popup.prototype.renderContent = function renderContent() {
        var _this6 = this;

        var _props2 = this.props,
            children = _props2.children,
            triggerType = _props2.triggerType;

        var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
        var content = _react.Children.only(children);
        var _content$props = content.props,
            onMouseDown = _content$props.onMouseDown,
            onMouseEnter = _content$props.onMouseEnter,
            onMouseLeave = _content$props.onMouseLeave;

        var props = {
            key: 'portal'
        };

        triggerTypes.forEach(function (triggerType) {
            switch (triggerType) {
                case 'focus':
                    props.onMouseDown = makeChain(_this6.handleContentMouseDown, onMouseDown);
                    break;
                case 'hover':
                    props.onMouseEnter = makeChain(_this6.handleContentMouseEnter, onMouseEnter);
                    props.onMouseLeave = makeChain(_this6.handleContentMouseLeave, onMouseLeave);
                    break;
                default:
                    break;
            }
        });

        return _react2.default.cloneElement(content, props);
    };

    Popup.prototype.renderPortal = function renderPortal() {
        var _this7 = this;

        var _props3 = this.props,
            target = _props3.target,
            safeNode = _props3.safeNode,
            followTrigger = _props3.followTrigger,
            triggerType = _props3.triggerType,
            hasMask = _props3.hasMask,
            wrapperStyle = _props3.wrapperStyle,
            others = _objectWithoutProperties(_props3, ['target', 'safeNode', 'followTrigger', 'triggerType', 'hasMask', 'wrapperStyle']);

        var container = this.props.container;

        var findTriggerNode = function findTriggerNode() {
            return (0, _reactDom.findDOMNode)(_this7) || {};
        };
        var safeNodes = Array.isArray(safeNode) ? [].concat(safeNode) : [safeNode];
        safeNodes.unshift(findTriggerNode);

        var newWrapperStyle = wrapperStyle || {};

        if (followTrigger) {
            container = function container(trigger) {
                return trigger.parentNode;
            };
            newWrapperStyle.position = 'relative';
        }

        if (triggerType === 'hover' && hasMask) {
            others.onMaskMouseEnter = this.handleMaskMouseEnter;
            others.onMaskMouseLeave = this.handleMaskMouseLeave;
        }

        return _react2.default.createElement(
            _overlay2.default,
            _extends({}, others, {
                key: 'overlay',
                ref: function ref(overlay) {
                    return _this7.overlay = overlay;
                },
                visible: this.state.visible,
                target: target || findTriggerNode,
                container: container,
                safeNode: safeNodes,
                wrapperStyle: newWrapperStyle,
                triggerType: triggerType,
                hasMask: hasMask,
                onRequestClose: this.handleRequestClose }),
            this.renderContent()
        );
    };

    Popup.prototype.render = function render() {
        return [this.renderTrigger(), this.renderPortal()];
    };

    return Popup;
}(_react.Component), _class.propTypes = {
    /**
     * 弹层内容
     */
    children: _propTypes2.default.node,
    /**
     * 触发弹层显示或隐藏的元素
     */
    trigger: _propTypes2.default.element,
    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     */
    triggerType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 弹层当前是否显示
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层默认是否显示
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 弹层显示或隐藏时触发的回调函数
     * @param {Boolean} visible 弹层是否显示
     * @param {String} type 触发弹层显示或隐藏的来源
     * @param {Object} e DOM事件
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 设置此属性，弹层无法显示或隐藏
     */
    disabled: _propTypes2.default.bool,
    /**
     * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
     */
    delay: _propTypes2.default.number,
    /**
     * 触发元素是否可以关闭弹层
     */
    canCloseByTrigger: _propTypes2.default.bool,
    /**
     * 弹层定位的参照元素
     * @default target 属性，即触发元素
     */
    target: _propTypes2.default.any,
    safeNode: _propTypes2.default.any,
    /**
     * 是否跟随trigger滚动
     */
    followTrigger: _propTypes2.default.bool,
    container: _propTypes2.default.any,
    hasMask: _propTypes2.default.bool,
    wrapperStyle: _propTypes2.default.object,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    triggerType: 'hover',
    defaultVisible: false,
    onVisibleChange: noop,
    disabled: false,
    delay: 200,
    canCloseByTrigger: true,
    followTrigger: false,
    container: function container() {
        return document.body;
    },
    rtl: false
}, _temp);
Popup.displayName = 'Popup';
exports.default = Popup;
module.exports = exports['default'];

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overlay = __webpack_require__(19);

var _overlay2 = _interopRequireDefault(_overlay);

var _inner = __webpack_require__(14);

var _inner2 = _interopRequireDefault(_inner);

var _alignMap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Popup = _overlay2.default.Popup;

/** Balloon.Tooltip */

var Tooltip = (_temp = _class = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props, context) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this._contentId = props.id;
    return _this;
  }

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        align = _props.align,
        style = _props.style,
        prefix = _props.prefix,
        trigger = _props.trigger,
        children = _props.children,
        popupContainer = _props.popupContainer,
        popupProps = _props.popupProps,
        popupClassName = _props.popupClassName,
        popupStyle = _props.popupStyle,
        triggerType = _props.triggerType,
        rtl = _props.rtl,
        others = _objectWithoutProperties(_props, ['className', 'align', 'style', 'prefix', 'trigger', 'children', 'popupContainer', 'popupProps', 'popupClassName', 'popupStyle', 'triggerType', 'rtl']);

    var trOrigin = 'trOrigin';
    if (rtl) {
      others.rtl = true;
      trOrigin = 'rtlTrOrigin';
    }

    var transformOrigin = _alignMap.normalMap[align][trOrigin];
    var _offset = _alignMap.normalMap[align].offset;
    var _style = _extends({ transformOrigin: transformOrigin }, style);

    var content = _react2.default.createElement(
      _inner2.default,
      _extends({}, others, {
        id: this._contentId,
        prefix: prefix,
        closable: false,
        isTooltip: true,
        className: className,
        style: _style,
        align: align,
        rtl: rtl
      }),
      children
    );

    var triggerProps = {};
    triggerProps['aria-describedby'] = this._contentId;
    triggerProps.tabIndex = '0';

    var newTrigger = _react2.default.cloneElement(trigger, triggerProps);

    return _react2.default.createElement(
      Popup,
      _extends({}, popupProps, {
        container: popupContainer,
        trigger: this._contentId ? newTrigger : trigger,
        triggerType: triggerType,
        align: _alignMap.normalMap[align].align,
        offset: _offset,
        delay: 0,
        className: popupClassName,
        style: popupStyle,
        rtl: rtl,
        shouldUpdatePosition: true
      }),
      content
    );
  };

  return Tooltip;
}(_react2.default.Component), _class.propTypes = {
  /**
   * 样式类名的品牌前缀
   */
  prefix: _propTypes2.default.string,
  /**
   * 自定义类名
   */
  className: _propTypes2.default.string,
  /**
   * 自定义内联样式
   */
  style: _propTypes2.default.object,
  /**
   * tooltip的内容
   */
  children: _propTypes2.default.any,
  /**
   * 弹出层位置
   * @enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合
   */
  align: _propTypes2.default.oneOf(['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb']),
  /**
   * 触发元素
   */
  trigger: _propTypes2.default.any,
  /**
   * 触发行为
   * 鼠标悬浮, 获取到焦点, 鼠标点击('hover'，'focus'，'click')或者它们组成的数组，如 ['hover', 'focus']
   */
  triggerType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  /**
   * 弹层组件style，透传给Popup
   */
  popupStyle: _propTypes2.default.object,
  /**
   * 弹层组件className，透传给Popup
   */
  popupClassName: _propTypes2.default.string,
  /**
   * 弹层组件属性，透传给Popup
   */
  popupProps: _propTypes2.default.object,
  /**
   * 是否pure render
   */
  pure: _propTypes2.default.bool,
  /**
   * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
   */
  popupContainer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * 弹层id, 传入值才会支持无障碍
   */
  id: _propTypes2.default.string
}, _class.defaultProps = {
  triggerType: 'hover',
  prefix: 'next-',
  align: 'b',
  trigger: _react2.default.createElement('span', null)
}, _temp);
Tooltip.displayName = 'Tooltip';
exports.default = Tooltip;
module.exports = exports['default'];

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(23);

__webpack_require__(36);

__webpack_require__(20);

__webpack_require__(63);

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (true) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept(16, function () {
			var newContent = __webpack_require__(16);
			if (typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (true) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept(17, function () {
			var newContent = __webpack_require__(17);
			if (typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (true) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept(18, function () {
			var newContent = __webpack_require__(18);
			if (typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(53);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.typeOf = typeOf;
exports.isArrayLike = isArrayLike;
exports.isPromise = isPromise;
exports.isPlainObject = isPlainObject;
exports.shallowEqual = shallowEqual;
exports.each = each;
exports.pickOthers = pickOthers;
exports.pickAttrsWith = pickAttrsWith;
/**
 * 获取对象的类型
 * @param  {*} obj
 * @return {String}
 *
 * @example
 * typeOf([]) === 'Array'
 * typeOf() === 'Undefined'
 * typeOf(1) === 'Number'
 */
function typeOf(obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|]/g, '');
}

/**
 * 判断是否是数组或类数组对象
 * @param  {*}  obj
 * @return {Boolean}
 *
 * @example
 * isArrayLike([]) === true
 * isArrayLike(arguments) === true
 * isArrayLike(this.props.children) === true
 */
function isArrayLike(obj) {
    var length = !!obj && 'length' in obj && obj.length;
    var type = typeOf(obj);

    return type === 'Array' || length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj;
}

/**
 * 判断对象是否是一个promise，即是否可以用.then
 * @param  {*}  obj
 * @return {Boolean}
 */
function isPromise(obj) {
    return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

/**
 * 是否是一个纯净的对象
 * @param  {*}  obj
 * @return {Boolean}
 * @reference https://github.com/jonschlinkert/is-plain-object
 */
function isPlainObject(obj) {
    if (typeOf(obj) !== 'Object') {
        return false;
    }

    var ctor = obj.constructor;

    if (typeof ctor !== 'function') {
        return false;
    }

    var prot = ctor.prototype;

    if (typeOf(prot) !== 'Object') {
        return false;
    }

    if (!prot.hasOwnProperty('isPrototypeOf')) {
        return false;
    }

    return true;
}

/**
 * 对象浅比较
 * @param  {Object} objA
 * @param  {Object} objB
 * @param  {Function}  [compare] 手动调用方法比较
 * @return {Boolean}      对象浅比较是否相等
 *
 * @example
 * object.shallowEqual({a: 100}, {a: 100}); // true
 */
function shallowEqual(objA, objB, compare) {
    if (objA === objB) {
        return true;
    }

    // 其中一个不是object，则不相等
    if (!objA || !objB || (typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) + (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'objectobject') {
        return false;
    }

    var keyA = Object.keys(objA);
    var keyB = Object.keys(objB);
    var len = keyA.length;

    // key 数量不一致则不相等
    if (len !== keyB.length) {
        return false;
    }

    var hasCallback = typeof compare === 'function';

    for (var i = 0; i < len; i++) {
        var key = keyA[i];

        if (!Object.prototype.hasOwnProperty.call(objB, key)) {
            return false;
        }

        var valA = objA[key];
        var valB = objB[key];

        var ret = hasCallback ? compare(valA, valB, key) : void 0;

        if (ret === false || ret === void 0 && valA !== valB) {
            return false;
        }
    }

    return true;
}

/**
 * 遍历对象或数组，或者类数组，例如React中的children对象、arguments等
 * @param  {Object|Array}   obj
 * @param  {Function} callback fn(n, i) or fn(val, key)
 * @param  {Number}   [direction = 1] 是否倒序遍历，只对数组有效
 * @return {Object|Array}
 *
 * @example
 * // 遍历数组
 * object.each([100, 200, 300], (n, i) => console.log(n, i));
 * // 遍历json对象
 * object.each({a: 100, b: 200}, (value, key) => console.log(key, value));
 * // 遍历React子节点
 * object.each(this.props.children, (child, index) => console.log(child));
 * // 遍历arguments
 * object.each(arguments, (arg, i) => console.log(arg));
 */
function each(obj, callback, direction) {
    var reversed = direction === -1;
    var length = obj.length;
    var value = void 0,
        i = reversed ? length - 1 : 0;

    if (isArrayLike(obj)) {
        for (; i < length && i >= 0; reversed ? i-- : i++) {
            value = callback.call(obj[i], obj[i], i);

            if (value === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            /* istanbul ignore else */
            if (obj.hasOwnProperty(i)) {
                value = callback.call(obj[i], obj[i], i);

                if (value === false) {
                    break;
                }
            }
        }
    }

    return obj;
}

// @private 判断key是否在数组或对象中
var _isInObj = function _isInObj(key, obj, isArray) {
    return isArray ? obj.indexOf(key) > -1 : key in obj;
};

/**
 * 过滤出其它属性
 * @param  {Object|Array} holdProps 过滤的参照对象，最终的结果只保留不在参照对象中的key
 * @param  {Object} props     被过滤的对象
 * @return {Object}           others
 *
 * @example
 * object.pickOthers(FooComponent.propTypes, this.props);
 * object.pickOthers(['className', 'onChange'], this.props);
 */
function pickOthers(holdProps, props) {
    var others = {};
    var isArray = typeOf(holdProps) === 'Array';

    for (var key in props) {
        if (!_isInObj(key, holdProps, isArray)) {
            others[key] = props[key];
        }
    }

    return others;
}

/**
 * 过滤出带prefix的属性
 * @param  {Object} holdProps 过滤的参照对象，最终的结果只保留不在参照对象中的key
 * @param  {string} prefix    包含的字符串
 * @return {Object}           others
 *
 * @example
 * object.pickAttrsWith(FooComponent.propTypes, 'data-');
 */
function pickAttrsWith(holdProps, prefix) {
    var others = {};

    for (var key in holdProps) {
        if (key.match(prefix)) {
            others[key] = holdProps[key];
        }
    }

    return others;
}

/***/ })

},[273]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8taGVscGVyL21haW4uc2Nzcz8wNWUyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb24vbWFpbi5zY3NzPzcwMjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvdXRpbHMvZmluZC1ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL2lubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NoYXJlbmNAMC4wLjJAY2hhcmVuYy9jaGFyZW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL2FsaWduTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRlL21haW4uc2Nzcz9lYmE4Iiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L21haW4uc2Nzcz8yYzZkIiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL21haW4uc2Nzcz84ZTNiIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93Lm1vbWVudFwiIiwid2VicGFjazovLy8uL3NyYy9jb25maWctcHJvdmlkZXIvZ2V0LWNvbnRleHQtcHJvcHMuanN4Iiwid2VicGFjazovLy8uL3NyYy91dGlsL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9iYWxsb29uL3RoZW1lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby1oZWxwZXIvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8taGVscGVyL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby1oZWxwZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fbWQ1QDIuMi4xQG1kNS9tZDUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jcnlwdEAwLjAuMkBjcnlwdC9jcnlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9lbnYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19pcy1idWZmZXJAMS4xLjZAaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2tleWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jbGFzc25hbWVzQDIuMi42QGNsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvb3ZlcmxheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvZ2F0ZXdheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvcG9zaXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L3N0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX29iamVjdC1hc3NpZ25ANC4xLjFAb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLXByb3ZpZGVyL2NvbmZpZy5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19ob2lzdC1ub24tcmVhY3Qtc3RhdGljc0AyLjUuNUBob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9mb2N1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9ndWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWctcHJvdmlkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWctcHJvdmlkZXIvY29uc3VtZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWctcHJvdmlkZXIvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb24vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL2JhbGxvb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvdXRpbHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvcG9wdXAuanN4Iiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL3Rvb2x0aXAuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRlL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9vYmplY3QuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiU3ltYm9sIiwiZm9yIiwiaXNWYWxpZEVsZW1lbnQiLCJvYmplY3QiLCIkJHR5cGVvZiIsInRocm93T25EaXJlY3RBY2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwiZmluZE5vZGUiLCJ0YXJnZXQiLCJwYXJhbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlcnIiLCJub29wIiwiZnVuYyIsIkJhbGxvb25Jbm5lciIsInJlbmRlciIsInByb3BzIiwicHJlZml4IiwiY2xvc2FibGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImlzVG9vbHRpcCIsImFsaWduIiwidHlwZSIsIm9uQ2xvc2UiLCJhbGlnbkVkZ2UiLCJjaGlsZHJlbiIsInJ0bCIsIm90aGVycyIsImFsaWduTWFwIiwiZWRnZU1hcCIsIm5vcm1hbE1hcCIsIl9wcmVmaXgiLCJjbGFzc2VzIiwiYXJyb3ciLCJ1bmRlZmluZWQiLCJvYmoiLCJwaWNrT3RoZXJzIiwiT2JqZWN0Iiwia2V5cyIsInByb3BUeXBlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImFueSIsInB1cmUiLCJkZWZhdWx0UHJvcHMiLCJjaGFyZW5jIiwidXRmOCIsInN0cmluZ1RvQnl0ZXMiLCJzdHIiLCJiaW4iLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImJ5dGVzVG9TdHJpbmciLCJieXRlcyIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwiY2hhckNvZGVBdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImpvaW4iLCJ0IiwicnRsQWxpZ24iLCJ0ck9yaWdpbiIsInJ0bFRyT3JpZ2luIiwib2Zmc2V0IiwiciIsImIiLCJsIiwidGwiLCJ0ciIsInJ0IiwicmIiLCJibCIsImJyIiwibHQiLCJsYiIsIk92ZXJsYXkiLCJHYXRld2F5IiwiUG9zaXRpb24iLCJQb3B1cCIsIkNvbmZpZ1Byb3ZpZGVyIiwiY29uZmlnIiwiZXhwb3J0TmFtZXMiLCJfZG9tIiwiX2VudiIsIl9ldmVudHMiLCJfZnVuYyIsIl9sb2ciLCJfb2JqZWN0IiwiX3N0cmluZyIsIl9zdXBwb3J0IiwiX2ZvY3VzIiwiZG9tIiwiZXZlbnRzIiwibG9nIiwic3VwcG9ydCIsImZvY3VzIiwiZ3VpZCIsIl9ndWlkIiwiS0VZQ09ERSIsIl9LRVlDT0RFIiwiSWNvbiIsInNpemUiLCJvdGhlciIsImluZGV4T2YiLCJkaXIiLCJvbmVPZiIsIl90eXBlTWFyayIsImdldENvbnRleHRQcm9wcyIsImNvbnRleHQiLCJkaXNwbGF5TmFtZSIsImxvY2FsZSIsIm5leHRQcmVmaXgiLCJuZXh0TG9jYWxlIiwibmV4dFB1cmUiLCJuZXh0V2FybmluZyIsIm5leHRSdGwiLCJuZXdQcmVmaXgiLCJsb2NhbGVGcm9tQ29udGV4dCIsIm1vbWVudExvY2FsZSIsIm5ld0xvY2FsZSIsIm5ld1B1cmUiLCJuZXdSdGwiLCJ3YXJuaW5nIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJnZXRTdHlsZSIsInNldFN0eWxlIiwic2Nyb2xsYmFyIiwiZ2V0T2Zmc2V0IiwiaGFzRE9NIiwid2luZG93IiwiY3JlYXRlRWxlbWVudCIsIm5vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9mb3JjZSIsImFkZCIsInJlbW92ZSIsInJlcGxhY2UiLCJ0cmltIiwidG9nZ2xlIiwiZmxhZyIsIm1hdGNoZXMiLCJtYXRjaGVzRm4iLCJfYm9keSIsImJvZHkiLCJoZWFkIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJzZWxlY3RvciIsIl9nZXRDb21wdXRlZFN0eWxlIiwibm9kZVR5cGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiUElYRUxfUEFUVEVSTiIsInJlbW92ZVBpeGVsIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiX2dldFN0eWxlVmFsdWUiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJ0ZXN0IiwicGFyc2VGbG9hdCIsImZsb2F0TWFwIiwiY3NzRmxvYXQiLCJzdHlsZUZsb2F0IiwiZmxvYXQiLCJuYW1lIiwiYXJndW1lbnRzIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInZhbCIsImtleSIsInNjcm9sbERpdiIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImFwcGVuZENoaWxkIiwic2Nyb2xsYmFyV2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbGJhckhlaWdodCIsImNsaWVudEhlaWdodCIsInJlbW92ZUNoaWxkIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbiIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJjYW1lbGNhc2UiLCJoeXBoZW5hdGUiLCIkMCIsIiQxIiwidG9VcHBlckNhc2UiLCJpMThuTWFwIiwidGl0bGUiLCJ0b29sdGlwQ29udGVudCIsImJhbGxvb25Db250ZW50IiwibGFiZWwiLCJlbnVtIiwiQmFsbG9vbkRlbW8iLCJkZW1vRnVuY3Rpb24iLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwib25GdW5jdGlvbkNoYW5nZSIsImNvbnRlbnQiLCJUb29sdGlwRGVtbyIsInRvb2x0aXBDb250ZW50VGV4dCIsImkxOG4iLCJiYWxsb29uQ29udGVudFRleHQiLCJsYW5nIiwidHJhbnNmb3JtIiwib3B0aW9ucyIsInVwZGF0ZSIsImxvY2FscyIsImhvdCIsImFjY2VwdCIsIm5ld0NvbnRlbnQiLCJkaXNwb3NlIiwiQ09MIiwiTEFCRUwiLCJUSVRMRSIsIkRFTU9fVkFSSUFCTEUiLCJzaG93VHlwZSIsImRlbW9JdGVtcyIsImNhbGxiYWNrIiwiQ09PTCIsIkZVTiIsImRlbW9Db3VudCIsImNvbnZlcnRBcnJheVRvT2JqZWN0Iiwib2JqRGVtb0Z1bmN0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImRlbW8iLCJtYXAiLCJlIiwiY29udmVydE9iamVjdFRvQXJyYXkiLCJhcnJheURlbW8iLCJkZUNhbWVsaXplIiwibWF0Y2giLCJ0b1N0cmluZyIsImZvcm1hdFRpdGxlIiwic3BsaXQiLCJEZW1vIiwic3RhdGUiLCJkZW1vSW5kZXgiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdEJhY2tncm91bmQiLCJpbml0RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic2V0VmlzaWJsZSIsImJpbmQiLCJzZXRTdGF0ZSIsImRhdGEiLCJzd2l0Y2hWaXNpYmxlIiwiZXhpc3RlZCIsImhpZGRlbiIsImNoaWxkS2V5cyIsImZpbHRlciIsIlJlZ0V4cCIsInN5bmNWaXNpYmxlIiwic2VuZE1lc3NhZ2UiLCJjb21wTmFtZSIsImluZGV4IiwiaXRlbUtleXMiLCJzYW1lVmFsdWUiLCJzd2l0Y2hCYWNrZ3JvdW5kIiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsIm5leHREZW1vRnVuY3Rpb24iLCJmdW5jTmFtZSIsImlzRGVtb1NoYXBlIiwiaGFzRGVtb0xldmVsIiwiYmxvY2siLCJkZW1vU2NvcGUiLCJkZW1vVGl0bGUiLCJwYXJlbnREaXNwbGF5TmFtZSIsImZpcnN0IiwiZGVtb1NoYXBlTGV2ZWwiLCJDaGlsZHJlbiIsImNoaWxkIiwiY2xvbmVFbGVtZW50IiwiZnVuY3Rpb25TZWxlY3QiLCJ0bXBSYWRpbyIsImVudW1PYmoiLCJqIiwiY2hlY2tlZCIsIndyYXBDbHMiLCJzd2l0Y2hDbHMiLCJjdXN0b21Qcm9wcyIsIkRlbW9Hcm91cCIsInJldCIsIml0ZW0iLCJkZWZhdWx0Q29vbCIsInNoYXBlIiwic3RhdGVtZW50IiwiY2xvbmVDaGlsZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbmVPZlR5cGUiLCJEZW1vSGVhZCIsImNvbHMiLCJjb2wiLCJhcnJheSIsInRoZW1lIiwiRGlzcGxheVN3aXRjaCIsInN0YXR1cyIsIm9uQ2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvcmlnaW4iLCJsb2NhdGlvbiIsImZyb20iLCJwYXJlbnQiLCJwb3N0TWVzc2FnZSIsImluaXREZW1vIiwiaW5mbyIsImlkIiwiaW5uZXJIVE1MIiwiY3J5cHQiLCJpc0J1ZmZlciIsIm1kNSIsIm1lc3NhZ2UiLCJjb25zdHJ1Y3RvciIsImVuY29kaW5nIiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwibSIsImJ5dGVzVG9Xb3JkcyIsImEiLCJjIiwiZCIsIkZGIiwiX2ZmIiwiR0ciLCJfZ2ciLCJISCIsIl9oaCIsIklJIiwiX2lpIiwiYWEiLCJiYiIsImNjIiwiZGQiLCJlbmRpYW4iLCJ4IiwicyIsIm4iLCJfYmxvY2tzaXplIiwiX2RpZ2VzdHNpemUiLCJFcnJvciIsImRpZ2VzdGJ5dGVzIiwid29yZHNUb0J5dGVzIiwiYXNCeXRlcyIsImFzU3RyaW5nIiwiYnl0ZXNUb0hleCIsImJhc2U2NG1hcCIsInJvdGwiLCJyb3RyIiwiTnVtYmVyIiwicmFuZG9tQnl0ZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ3b3JkcyIsImhleCIsImhleFRvQnl0ZXMiLCJwYXJzZUludCIsInN1YnN0ciIsImJ5dGVzVG9CYXNlNjQiLCJiYXNlNjQiLCJ0cmlwbGV0IiwiY2hhckF0IiwiYmFzZTY0VG9CeXRlcyIsImltb2Q0IiwicG93IiwiaWVWZXJzaW9uIiwiZG9jdW1lbnRNb2RlIiwiaXNQcm9kdWN0aW9uIiwiUFJPRFVDVElPTl9FTlYiLCJyZXN1bHQiLCJpc1Nsb3dCdWZmZXIiLCJfaXNCdWZmZXIiLCJyZWFkRmxvYXRMRSIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDIiwiU1BBQ0UiLCJFTkQiLCJIT01FIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwiRVNDQVBFIiwiTEVGVF9BUlJPVyIsIlVQX0FSUk9XIiwiUklHSFRfQVJST1ciLCJET1dOX0FSUk9XIiwiQ09OVFJPTCIsIk9QVElPTiIsIkNNRCIsIkNPTU1BTkQiLCJERUxFVEUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzTmFtZXMiLCJhcmciLCJhcmdUeXBlIiwiaW5uZXIiLCJhcHBseSIsImRlZmF1bHQiLCJkZWZpbmUiLCJzYXZlTGFzdEZvY3VzTm9kZSIsImdldEZvY3VzTm9kZUxpc3QiLCJiYWNrTGFzdEZvY3VzTm9kZSIsIm1ha2VDaGFpbiIsImJpbmRDdHgiLCJpc1Njcm9sbERpc3BsYXkiLCJlbGVtZW50Iiwic2Nyb2xsYmFyU3R5bGUiLCJoYXNTY3JvbGwiLCJkb2MiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJwcmVmaXhlcyIsImdldFN0eWxlUHJvcGVydHkiLCJtb2RhbHMiLCJib2R5T3ZlcmZsb3dZIiwiYm9keVBhZGRpbmdSaWdodCIsInNhdmVDb250ZW50UmVmIiwicmVmIiwiY29udGVudFJlZiIsInNhdmVHYXRld2F5UmVmIiwiZ2F0ZXdheVJlZiIsInZpc2libGUiLCJhbmltYXRpb24iLCJnZXRBbmltYXRpb24iLCJsYXN0QWxpZ24iLCJ0aW1lb3V0TWFwIiwiY29tcG9uZW50V2lsbE1vdW50IiwiYmVmb3JlT3BlbiIsImVudGVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJhZGREb2N1bWVudEV2ZW50cyIsIm92ZXJsYXlNYW5hZ2VyIiwiYWRkT3ZlcmxheSIsIl9pc01vdW50ZWQiLCJ3aWxsT3BlbiIsIndpbGxDbG9zZSIsImJlZm9yZUNsb3NlIiwibGVhdmUiLCJwcmV2UHJvcHMiLCJvcGVuIiwiY2xvc2UiLCJhZGRBbmltYXRpb25FdmVudHMiLCJ3cmFwcGVyTm9kZSIsImdldFdyYXBwZXJOb2RlIiwic2V0VGltZW91dCIsIm9uT3BlbiIsImFmdGVyT3BlbiIsImFmdGVyQ2xvc2UiLCJyZW1vdmVPdmVybGF5Iiwic2V0Rm9jdXNOb2RlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJfaXNEZXN0cm95ZWQiLCJyZW1vdmVEb2N1bWVudEV2ZW50cyIsImZvY3VzVGltZW91dCIsImNsZWFyVGltZW91dCIsIl9hbmltYXRpb24iLCJvZmYiLCJnZXRBbmltYXRpb25CeUFsaWduIiwiaW4iLCJvdXQiLCJnZXRDb250ZW50Tm9kZSIsIm9uIiwiZW5kIiwiaGFuZGxlQW5pbWF0ZUVuZCIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ0aW1lIiwiaGFuZGxlUG9zaXRpb24iLCJuZWVkQWRqdXN0Iiwib25MZWF2ZWQiLCJvbkVudGVyZWQiLCJvbkVudGVyaW5nIiwib25MZWF2aW5nIiwiZGlzYWJsZVNjcm9sbCIsIm92ZXJmbG93WSIsInBhZGRpbmdSaWdodCIsInNwbGljZSIsImF1dG9Gb2N1cyIsIl9oYXNGb2N1c2VkIiwiZm9jdXNOb2RlTGlzdCIsImdldENvbnRlbnQiLCJnZXRDaGlsZE5vZGUiLCJjYW5DbG9zZUJ5RXNjIiwiX2tleWRvd25FdmVudHMiLCJoYW5kbGVEb2N1bWVudEtleURvd24iLCJjYW5DbG9zZUJ5T3V0U2lkZUNsaWNrIiwiX2NsaWNrRXZlbnRzIiwiaGFuZGxlRG9jdW1lbnRDbGljayIsImtleUNvZGUiLCJpc0N1cnJlbnRPdmVybGF5Iiwib25SZXF1ZXN0Q2xvc2UiLCJzYWZlTm9kZSIsInNhZmVOb2RlcyIsInVuc2hpZnQiLCJoYW5kbGVNYXNrQ2xpY2siLCJjYW5DbG9zZUJ5TWFzayIsImdldEluc3RhbmNlIiwicHJvcENoaWxkcmVuIiwiY29udGFpbmVyIiwiaGFzTWFzayIsImJlZm9yZVBvc2l0aW9uIiwib25Qb3NpdGlvbiIsIndyYXBwZXJTdHlsZSIsInByb3BTaG91bGRVcGRhdGVQb3NpdGlvbiIsInNob3VsZFVwZGF0ZVBvc2l0aW9uIiwiY2FjaGUiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwib25NYXNrTW91c2VFbnRlciIsIm9uTWFza01vdXNlTGVhdmUiLCJzdGF0ZVZpc2libGUiLCJvbmx5IiwiY2hpbGRDbGF6eiIsIndyYXBwZXJDbGF6eiIsIm5ld1dyYXBwZXJTdHlsZSIsImRpc3BsYXkiLCJWSUVXUE9SVCIsInNhdmVDaGlsZFJlZiIsImNvbnRhaW5lck5vZGUiLCJnZXRDb250YWluZXJOb2RlIiwiZm9yY2VVcGRhdGUiLCJ0YXJnZXROb2RlIiwicGxhY2UiLCJzZXRQb3NpdGlvbiIsIm5lZWRMaXN0ZW5SZXNpemUiLCJoYW5kbGVSZXNpemUiLCJyZXNpemVUaW1lb3V0IiwiY29udGVudE5vZGUiLCJnZXRUYXJnZXROb2RlIiwicmVzdWx0QWxpZ24iLCJwaW5FbGVtZW50IiwiYmFzZUVsZW1lbnQiLCJpc1J0bCIsImFzc2lnbiIsImNoZWNrUHJvcFR5cGVzIiwicHJpbnRXYXJuaW5nIiwidGV4dCIsImNvbnNvbGUiLCJlcnJvciIsImVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwiLCJJVEVSQVRPUl9TWU1CT0wiLCJpdGVyYXRvciIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJpdGVyYXRvckZuIiwiQU5PTllNT1VTIiwiUmVhY3RQcm9wVHlwZXMiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsIm51bWJlciIsInN5bWJvbCIsImNyZWF0ZUFueVR5cGVDaGVja2VyIiwiYXJyYXlPZiIsImNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlciIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwiY3JlYXRlTm9kZUNoZWNrZXIiLCJvYmplY3RPZiIsImNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJzdGFjayIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJleHBlY3RlZENsYXNzIiwiZXhwZWN0ZWRDbGFzc05hbWUiLCJhY3R1YWxDbGFzc05hbWUiLCJnZXRDbGFzc05hbWUiLCJleHBlY3RlZFZhbHVlcyIsInZhbHVlc1N0cmluZyIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJldmVyeSIsInN0ZXAiLCJlbnRyaWVzIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsIm9yZGVyMiIsInRlc3QzIiwibGV0dGVyIiwic291cmNlIiwidG8iLCJzeW1ib2xzIiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCIsImVtcHR5RnVuY3Rpb24iLCJzaGltIiwiZ2V0U2hpbSIsImluaXRMb2NhbGVzIiwic2V0TGFuZ3VhZ2UiLCJzZXRMb2NhbGUiLCJzZXREaXJlY3Rpb24iLCJnZXRMb2NhbGUiLCJnZXRMYW5ndWFnZSIsImdldERpcmVjdGlvbiIsInNoYWxsb3dFcXVhbCIsImdldERpc3BsYXlOYW1lIiwiZ2xvYmFsTG9jYWxlcyIsImN1cnJlbnRHbG9iYWxMYW5ndWFnZSIsImN1cnJlbnRHbG9iYWxMb2NhbGUiLCJjdXJyZW50R2xvYmFsUnRsIiwibG9jYWxlcyIsImxhbmd1YWdlIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFN0YXRlIiwiQ29uZmlnZWRDb21wb25lbnQiLCJfZ2V0SW5zdGFuY2UiLCJfZGVwcmVjYXRlZCIsIl9pbnN0YW5jZSIsImZpZWxkIiwiZGVwcmVjYXRlZCIsImNvbnRleHRQcm9wcyIsIm5ld0NvbnRleHRQcm9wcyIsInJlZHVjZSIsIm5ld090aGVycyIsIlJFQUNUX1NUQVRJQ1MiLCJjaGlsZENvbnRleHRUeXBlcyIsImdldERlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm1peGlucyIsIktOT1dOX1NUQVRJQ1MiLCJjYWxsZXIiLCJjYWxsZWUiLCJhcml0eSIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0UHJvdG90eXBlT2YiLCJvYmplY3RQcm90b3R5cGUiLCJob2lzdE5vblJlYWN0U3RhdGljcyIsInRhcmdldENvbXBvbmVudCIsInNvdXJjZUNvbXBvbmVudCIsImJsYWNrbGlzdCIsImluaGVyaXRlZENvbXBvbmVudCIsImNvbmNhdCIsImRlc2NyaXB0b3IiLCJvbmNlIiwiZXZlbnROYW1lIiwidXNlQ2FwdHVyZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfX2ZuIiwiYXJncyIsInByb21pc2VDYWxsIiwiZm5zIiwiY2hhaW5lZEZ1bmN0aW9uIiwiY3R4IiwibnMiLCJmbk5hbWUiLCJzdWNjZXNzIiwiZmFpbHVyZSIsInRoZW4iLCJjYXRjaCIsImluc3RlYWQiLCJjb21wb25lbnQiLCJtc2ciLCJhbmltYXRpb25FbmRFdmVudE5hbWVzIiwiV2Via2l0QW5pbWF0aW9uIiwiT0FuaW1hdGlvbiIsInRyYW5zaXRpb25FdmVudE5hbWVzIiwiV2Via2l0VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsIl9zdXBwb3J0RW5kIiwibmFtZXMiLCJlbCIsIl9zdXBwb3J0Q1NTIiwiZmxleCIsImNsZWFyTGFzdEZvY3VzTm9kZSIsImxpbWl0VGFiUmFuZ2UiLCJfaXNWaXNpYmxlIiwidmlzaWJpbGl0eSIsInBhcmVudE5vZGUiLCJfaXNGb2N1c2FibGUiLCJub2RlTmFtZSIsInRhYkluZGV4IiwiZ2V0QXR0cmlidXRlIiwiaGFzVGFiSW5kZXgiLCJpc05hTiIsImRpc2FibGVkIiwicmVzIiwibm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWV0aG9kIiwibGFzdEZvY3VzRWxlbWVudCIsImFjdGl2ZUVsZW1lbnQiLCJ0YWJOb2RlTGlzdCIsIm1heEluZGV4IiwidGFyZ2V0SW5kZXgiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwidGltZXN0YW1wIiwibm93IiwiY2hpbGRDb250ZXh0Q2FjaGUiLCJDYWNoZSIsImdldCIsImdldENoaWxkQ29udGV4dCIsInNldE1vbWVudExvY2FsZSIsIm1vbWVudCIsInJvb3QiLCJDb25zdW1lciIsImdldENvbnRleHQiLCJtYXBLZXlzIiwiZm4iLCJuZXdLZXkiLCJyZXBsYWNlS2V5IiwicDEiLCJwMiIsInRyYW5zZm9ybUNvbnRleHQiLCJfcm9vdCIsIl9zdG9yZSIsIk1hcCIsImVtcHR5IiwiaGFzIiwiZGVmYXVsdFZhbHVlIiwic2V0IiwiZGVsZXRlIiwiY3NzIiwiYmFzZVVybCIsInByb3RvY29sIiwiaG9zdCIsImN1cnJlbnREaXIiLCJwYXRobmFtZSIsImZpeGVkQ3NzIiwiZnVsbE1hdGNoIiwib3JpZ1VybCIsInVucXVvdGVkT3JpZ1VybCIsIm8iLCJuZXdVcmwiLCJCYWxsb29uIiwiVG9vbHRpcCIsIklubmVyIiwiYWxpZ25tZW50Iiwib25DbG9zZUNsaWNrIiwib25WaXNpYmxlQ2hhbmdlIiwibmV3T25WaXNpYmxlQ2hhbmdlIiwicmVhc29uIiwiZGVmYXVsdFZpc2libGUiLCJfb25DbG9zZSIsIl9vblBvc2l0aW9uIiwiX29uVmlzaWJsZUNoYW5nZSIsIl9jb250ZW50SWQiLCJ0cmlnZ2VyIiwibmV3QWxpZ24iLCJyZXNBbGlnbiIsImFsaWduS2V5IiwidHJpZ2dlclR5cGUiLCJkZWxheSIsInNhZmVJZCIsIm9uSG92ZXIiLCJwb3B1cENvbnRhaW5lciIsInBvcHVwU3R5bGUiLCJwb3B1cENsYXNzTmFtZSIsInBvcHVwUHJvcHMiLCJfb2Zmc2V0IiwidHJhbnNmb3JtT3JpZ2luIiwiX3N0eWxlIiwidHJpZ2dlclByb3BzIiwibmV3VHJpZ2dlciIsImFsbE92ZXJsYXlzIiwib3ZlcmxheSIsImdldFBhZ2VYIiwic2Nyb2xsTGVmdCIsImdldFBhZ2VZIiwic2Nyb2xsVG9wIiwiX2dldEVsZW1lbnRSZWN0IiwiZWxlbSIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXRQYXJlbnQiLCJfZ2V0Vmlld3BvcnRTaXplIiwiZXhwZWN0ZWRBbGlnbiIsIl9nZXRFeHBlY3RlZEFsaWduIiwiaXNQaW5GaXhlZCIsImlzQmFzZUZpeGVkIiwiZmlyc3RQb3NpdGlvblJlc3VsdCIsInBpbkVsZW1lbnRQb2ludHMiLCJfbm9ybWFsaXplUG9zaXRpb24iLCJiYXNlRWxlbWVudFBvaW50cyIsInBpbkVsZW1lbnRQYXJlbnRPZmZzZXQiLCJfZ2V0UGFyZW50T2Zmc2V0IiwiYmFzZUVsZW1lbnRPZmZzZXQiLCJfZ2V0TGVmdFRvcCIsIl9zZXRQaW5FbGVtZW50UG9zdGlvbiIsIl9pc0luVmlld3BvcnQiLCJpblZpZXdwb3J0TGVmdCIsIl9tYWtlRWxlbWVudEluVmlld3BvcnQiLCJpblZpZXdwb3J0VG9wIiwiX2dldEVsZW1lbnRPZmZzZXQiLCJkb2NFbGVtZW50IiwibWF4IiwicG9pbnRzIiwiX25vcm1hbGl6ZUVsZW1lbnQiLCJfbm9ybWFsaXplWFkiLCJfeHlDb252ZXJ0ZXIiLCJpc1ZpZXdwb3J0IiwiZG9jQ2xpZW50TGVmdCIsImNsaWVudExlZnQiLCJkb2NDbGllbnRUb3AiLCJjbGllbnRUb3AiLCJfcmVwbGFjZUFsaWduRGlyIiwicmVnRXhwIiwidmlld3BvcnRTaXplIiwiZWxlbWVudFJlY3QiLCJwb3N0aW9uIiwib2Zmc2V0UGFyZW50V2lkdGgiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiaGFuZGxlVHJpZ2dlckNsaWNrIiwiY2FuQ2xvc2VCeVRyaWdnZXIiLCJoYW5kbGVUcmlnZ2VyS2V5RG93biIsImhhbmRsZVRyaWdnZXJNb3VzZUVudGVyIiwiX21vdXNlTm90Rmlyc3RPbk1hc2siLCJfaGlkZVRpbWVyIiwiX3Nob3dUaW1lciIsImhhbmRsZVRyaWdnZXJNb3VzZUxlYXZlIiwiaGFuZGxlVHJpZ2dlckZvY3VzIiwiaGFuZGxlVHJpZ2dlckJsdXIiLCJfaXNGb3J3YXJkQ29udGVudCIsImhhbmRsZUNvbnRlbnRNb3VzZURvd24iLCJoYW5kbGVDb250ZW50TW91c2VFbnRlciIsImhhbmRsZUNvbnRlbnRNb3VzZUxlYXZlIiwiaGFuZGxlTWFza01vdXNlRW50ZXIiLCJoYW5kbGVNYXNrTW91c2VMZWF2ZSIsImhhbmRsZVJlcXVlc3RDbG9zZSIsInJlbmRlclRyaWdnZXIiLCJ0cmlnZ2VyVHlwZXMiLCJvbktleURvd24iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkZvY3VzIiwib25CbHVyIiwicmVuZGVyQ29udGVudCIsIm9uTW91c2VEb3duIiwicmVuZGVyUG9ydGFsIiwiZm9sbG93VHJpZ2dlciIsImZpbmRUcmlnZ2VyTm9kZSIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwidHlwZU9mIiwiaXNBcnJheUxpa2UiLCJpc1Byb21pc2UiLCJpc1BsYWluT2JqZWN0IiwiZWFjaCIsInBpY2tBdHRyc1dpdGgiLCJjdG9yIiwicHJvdCIsIm9iakEiLCJvYmpCIiwiY29tcGFyZSIsImtleUEiLCJrZXlCIiwibGVuIiwiaGFzQ2FsbGJhY2siLCJ2YWxBIiwidmFsQiIsImRpcmVjdGlvbiIsInJldmVyc2VkIiwiX2lzSW5PYmoiLCJob2xkUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOEI7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O0FBT0EsSUFBSUEsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDLE1BQUlDLHFCQUFzQixPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQ3hCQSxPQUFPQyxHQURpQixJQUV4QkQsT0FBT0MsR0FBUCxDQUFXLGVBQVgsQ0FGdUIsSUFHdkIsTUFIRjs7QUFLQSxNQUFJQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVNDLE1BQVQsRUFBaUI7QUFDcEMsV0FBTyxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQWxC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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QyxFQUEyQztBQUM5QyxRQUFNVyxTQUFTLEVBQWY7O0FBRUEsU0FBSyxJQUFNOEosR0FBWCxJQUFrQjB2QixTQUFsQixFQUE2QjtBQUN6QixZQUFJMXZCLElBQUlzRSxLQUFKLENBQVUvTyxNQUFWLENBQUosRUFBdUI7QUFDbkJXLG1CQUFPOEosR0FBUCxJQUFjMHZCLFVBQVUxdkIsR0FBVixDQUFkO0FBQ0g7QUFDSjs7QUFFRCxXQUFPOUosTUFBUDtBQUNILEMiLCJmaWxlIjoiL1VzZXJzL3poYW9ndW95YW4vZ2l0aHViL3B1Yi9kb2NzL2JhbGxvb24vdGhlbWUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbmRvdy5SZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2luZGV4LmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgLyogcHJvamVjdCBpZCAyNzI2NjYgKi9cXG4gIGZvbnQtZmFtaWx5OiAnaWNvbmZvbnQnO1xcbiAgc3JjOiB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfbzh1NTJqd2JmZ204dG82ci5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250X284dTUyandiZmdtOHRvNnIuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250X284dTUyandiZmdtOHRvNnIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfbzh1NTJqd2JmZ204dG82ci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcXFwiLy9hdC5hbGljZG4uY29tL3QvZm9udF9vOHU1Mmp3YmZnbTh0bzZyLnN2ZyNpY29uZm9udFxcXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7IH1cXG5cXG4uZGVtby1pY29uIHtcXG4gIGZvbnQtZmFtaWx5OiAnaWNvbmZvbnQnICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uZGVtby1pY29uLWFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjYyXFxcIjsgfVxcblxcbi5kZW1vLWljb24tY2FydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjE4XFxcIjsgfVxcblxcbi5kZW1vLWljb24tY29tbWVudHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYwNVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWNyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjFBXFxcIjsgfVxcblxcbi5kZW1vLWljb24tZW1haWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY2M1xcXCI7IH1cXG5cXG4uZGVtby1pY29uLWZhdm9yaXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MEFcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1mb2xkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYxQlxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWZvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYxQ1xcXCI7IH1cXG5cXG4uZGVtby1pY29uLWhlbHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRlxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXJlZnJlc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyMVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXNldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjIzXFxcIjsgfVxcblxcbi5kZW1vLWljb24tdHJhaW5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyNFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWFjY291bnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY2NFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWF0bTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjI2XFxcIjsgfVxcblxcbi5kZW1vLWljb24tY2xvY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYxNVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWF0dGFjaG1lbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyN1xcXCI7IH1cXG5cXG4uZGVtby1pY29uLTNjb2x1bW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyOFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLTRjb2x1bW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyOVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWRpc2NvdW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MkFcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1zZXJ2aWNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MkJcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1wcmludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjJDXFxcIjsgfVxcblxcbi5kZW1vLWljb24tYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MkRcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1icm93c2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYzNFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWF0bS1hd2F5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MzVcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1zY2FubmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjM2XFxcIjsgfVxcblxcbi5kZW1vLWljb24tY29tcGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjM3XFxcIjsgfVxcblxcbi5kZW1vLWljb24tZmlsdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MzhcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1waW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYzOVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWhpc3Rvcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYzQVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXNpbWlsYXItcHJvZHVjdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjNCXFxcIjsgfVxcblxcbi5kZW1vLWljb24tbGluazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjNDXFxcIjsgfVxcblxcbi5kZW1vLWljb24tY3V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NEFcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi10YWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjNFXFxcIjsgfVxcblxcbi5kZW1vLWljb24tbmF2LWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYzRlxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWltYWdlLXRleHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY0MFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXRleHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY0MVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLW1vdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY0MlxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXN1YnRyYWN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NTBcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1kb2xsYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY0M1xcXCI7IH1cXG5cXG4uZGVtby1pY29uLW9mZmljZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjQ0XFxcIjsgfVxcblxcbi5kZW1vLWljb24tb3BlcmF0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NDVcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1kb3dubG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjQ2XFxcIjsgfVxcblxcbi5kZW1vLWljb24tbWFwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NDdcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1iYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY0OFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWdvb2Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY0OVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXNraXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY0QlxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXBsYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY0Q1xcXCI7IH1cXG5cXG4uZGVtby1pY29uLXN0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY0RFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWNvbXBhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY0RVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXNlY3VyaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NEZcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1zaGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjUxXFxcIjsgfVxcblxcbi5kZW1vLWljb24tc3RvcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY1MlxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXBob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NTNcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1lbGxpcHNpczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjU0XFxcIjsgfVxcblxcbi5kZW1vLWljb24tZW1haWwtZmlsbGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjY1XFxcIjsgfVxcblxcbi5kZW1vLWljb24tZmF2b3JpdGVzLWZpbGxpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY2NlxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWFjY291bnQtZmlsbGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjY3XFxcIjsgfVxcblxcbi5kZW1vLWljb24tY3JlZGl0LWxldmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NUFcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1jcmVkaXQtbGV2ZWwtZmlsbGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjVDXFxcIjsgfVxcblxcbi5kZW1vLWljb24tbW9iaWxlLXBob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NURcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1zbWlsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjY4XFxcIjsgfVxcblxcbi5kZW1vLWljb24tcGVyc29uYWwtY2VudGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NjlcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1hcnJvdy11cC1maWxsaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MDFcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1hcnJvdy1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjAzXFxcIjsgfVxcblxcbi5kZW1vLWljb24tYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjZCXFxcIjsgfVxcblxcbi5kZW1vLWljb24tYXJyb3ctdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY2Q1xcXCI7IH1cXG5cXG4uZGVtby1pY29uLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjZGXFxcIjsgfVxcblxcbi5kZW1vLWljb24tbWludXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY3MFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWVkaXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYxM1xcXCI7IH1cXG5cXG4uZGVtby1pY29uLWVycm9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NzJcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1zZWxlY3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY3M1xcXCI7IH1cXG5cXG4uZGVtby1pY29uLWFzaGJpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjFFXFxcIjsgfVxcblxcbi5kZW1vLWljb24tY2FsZW5kYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyMFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXRpbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyMlxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY3NFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY3NVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXNlYXJjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjU2XFxcIjsgfVxcblxcbi5kZW1vLWljb24tZGlzcGxheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjc3XFxcIjsgfVxcblxcbi5kZW1vLWljb24tY2F0ZWdvcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY1OFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXByb21wdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjc4XFxcIjsgfVxcblxcbi5kZW1vLWljb24tYXJyb3ctZG93bi1maWxsaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NUJcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1zb3J0aW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NzZcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1hc2NlbmRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYwNlxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWRlc2NlbmRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYwOFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXN1Y2Nlc3MtZmlsbGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjc5XFxcIjsgfVxcblxcbi5kZW1vLWljb24tcGljdHVyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjBDXFxcIjsgfVxcblxcbi5kZW1vLWljb24tY2xvc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY3QVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXNlbWktc2VsZWN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2N0JcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi10YWctc3Vic2NyaXB0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MTRcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1zdXJ2ZXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY1RlxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWxvYWRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY3Q1xcXCI7IH1cXG5cXG4uZGVtby1pY29uLWFycm93LWRvdWJsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MTZcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1hcnJvdy1kb3VibGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY2MVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLW5hdi1tb3JlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2N0RcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1kZWxldGUtZmlsbGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjgxXFxcIjsgfVxcblxcbi5kZW1vLWljb24tYXJyb3ctbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjgyXFxcIjsgfVxcblxcbi5kZW1vLWljb24tbGlnaHRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2NkRcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1leHBhbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY2RVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWhpZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY3MVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWZ1c2lvbi1sb2dvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2N0ZcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1hcnJvdy1yaWdodC1maWxsaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2ODBcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1hcnJvdy1sZWZ0LWZpbGxpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY4M1xcXCI7IH1cXG5cXG4uZGVtby1pY29uLXN1cGVyc3RhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjg0XFxcIjsgfVxcblxcbi5kZW1vLWljb24tcXItY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjg1XFxcIjsgfVxcblxcbi5kZW1vLWljb24taG9tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjg5XFxcIjsgfVxcblxcbi5kZW1vLWljb24tZWxlY3Ryb25pY3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY4QVxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWltcG9ydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjdFXFxcIjsgfVxcblxcbi5kZW1vLWljb24tcHJvY2VzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjg3XFxcIjsgfVxcblxcbi5kZW1vLWljb24tZ2lmdHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY4OFxcXCI7IH1cXG5cXG4uZGVtby1pY29uLWJhZ3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY4QlxcXCI7IH1cXG5cXG4uZGVtby1pY29uLXBvaW50aW5nLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTY4Q1xcXCI7IH1cXG5cXG4uZGVtby1pY29uLXBvaW50aW5nLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2OERcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1uby1yZXN1bHRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2ODZcXFwiOyB9XFxuXFxuLmRlbW8taWNvbi1hdXRvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2OEVcXFwiOyB9XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNzsgfVxcblxcbiNjb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0U2RTdFQjsgfVxcblxcbi5kZW1vLWNvbnRhaW5lciA+IGgyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZGVtby5wYyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuICAuZGVtby5wYzpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgLmRlbW8ucGMgLmRlbW8taGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFN0VCO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6ICMzMzM7IH1cXG4gICAgLmRlbW8ucGMgLmRlbW8taGVhZGVyIGxhYmVsIHtcXG4gICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgcGFkZGluZzogMCAwIDAgNDBweDtcXG4gICAgICBjb2xvcjogIzY2NjtcXG4gICAgICBmb250LXNpemU6IDEycHg7IH1cXG4gICAgICAuZGVtby5wYyAuZGVtby1oZWFkZXIgbGFiZWwgc2VsZWN0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgICAgICBoZWlnaHQ6IDI4cHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAgICAgICAuZGVtby5wYyAuZGVtby1oZWFkZXIgbGFiZWwgc2VsZWN0OmZvY3VzIHtcXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMzsgfVxcbiAgLmRlbW8ucGMgLmRlbW8taGVhZCA+IHRkIHtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGNvbG9yOiAjOTk5OTk5OyB9XFxuICAgIC5kZW1vLnBjIC5kZW1vLWhlYWQgPiB0ZDpmaXJzdC1jaGlsZCB7XFxuICAgICAgd2lkdGg6IDgwcHg7IH1cXG4gIC5kZW1vLnBjIC5kZW1vLWdyb3VwID4gdGQge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XFxuICAuZGVtby5wYyAuZGVtby1ncm91cCA+IC5sYWJlbCB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6ICM5OTk7IH1cXG4gICAgLmRlbW8ucGMgLmRlbW8tZ3JvdXAgPiAubGFiZWwgPiBzcGFuIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjRENERUUzOyB9XFxuICAuZGVtby5wYyAuZGVtby1ncm91cCA+IC53cmFwIHtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7IH1cXG4gICAgLmRlbW8ucGMgLmRlbW8tZ3JvdXAgPiAud3JhcCA+IC5kZW1vLWl0ZW0ge1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudCBkYXNoZWQgMXB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAuZGVtby5wYyAuZGVtby1ncm91cCA+IC53cmFwID4gLmRlbW8taXRlbS5ibG9jayB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICAgICAgLmRlbW8ucGMgLmRlbW8tZ3JvdXAgPiAud3JhcCA+IC5kZW1vLWl0ZW0uYmxvY2sgPiAqIHtcXG4gICAgICAgICAgZmxvYXQ6IG5vbmU7IH1cXG4gICAgICAuZGVtby5wYyAuZGVtby1ncm91cCA+IC53cmFwID4gLmRlbW8taXRlbS5oaWdobGlnaHQge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNDZCQzAyO1xcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7IH1cXG4gICAgICAuZGVtby5wYyAuZGVtby1ncm91cCA+IC53cmFwID4gLmRlbW8taXRlbS5zZWxlY3RlZCwgLmRlbW8ucGMgLmRlbW8tZ3JvdXAgPiAud3JhcCA+IC5kZW1vLWl0ZW06aG92ZXIge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNDZCQzAyOyB9XFxuICAgICAgLmRlbW8ucGMgLmRlbW8tZ3JvdXAgPiAud3JhcCA+IC5kZW1vLWl0ZW06YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogJyAnO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBjbGVhcjogbGVmdDsgfVxcbiAgICAgIC5kZW1vLnBjIC5kZW1vLWdyb3VwID4gLndyYXAgPiAuZGVtby1pdGVtID4gKiB7XFxuICAgICAgICBmbG9hdDogbGVmdDsgfVxcbiAgICAgIC5kZW1vLnBjIC5kZW1vLWdyb3VwID4gLndyYXAgPiAuZGVtby1pdGVtICo6ZGlzYWJsZWQge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gICAgLmRlbW8ucGMgLmRlbW8tZ3JvdXAgPiAud3JhcCA+IC5kZW1vLWl0ZW0taGlkZGVuIHtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgIGJvcmRlcjogI0U2RTdFQiBkYXNoZWQgMXB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAgICAgLmRlbW8ucGMgLmRlbW8tZ3JvdXAgPiAud3JhcCA+IC5kZW1vLWl0ZW0taGlkZGVuLmJsb2NrIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAgICAgICAuZGVtby5wYyAuZGVtby1ncm91cCA+IC53cmFwID4gLmRlbW8taXRlbS1oaWRkZW4uYmxvY2sgPiAqIHtcXG4gICAgICAgICAgZmxvYXQ6IG5vbmU7IH1cXG4gICAgICAuZGVtby5wYyAuZGVtby1ncm91cCA+IC53cmFwID4gLmRlbW8taXRlbS1oaWRkZW4gPiAqIHtcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICAuZGVtby5wYyAuZGVtby1ncm91cCA+IC5kZW1vLWl0ZW1zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XFxuICAuZGVtby5wYyAuZGVtby1ib2R5IHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4OyB9XFxuICAgIC5kZW1vLnBjIC5kZW1vLWJvZHkgdGFibGUge1xcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDsgfVxcbiAgICAgIC5kZW1vLnBjIC5kZW1vLWJvZHkgdGFibGUuYmxvY2sge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgLmRlbW8ucGMgLmRlbW8tYm9keSAuZGVtby5wYyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgICAgIC5kZW1vLnBjIC5kZW1vLWJvZHkgLmRlbW8ucGMgPiAuZGVtby1oZWFkZXIge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7IH1cXG4gICAgICAuZGVtby5wYyAuZGVtby1ib2R5IC5kZW1vLnBjID4gLmRlbW8tYm9keSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cXG4gICAgLmRlbW8ucGMgLmRlbW8tYm9keSAuZGVtbyArIC5kZW1vIHtcXG4gICAgICBib3JkZXItdG9wOiAjRTZFN0VCIHNvbGlkIDFweDsgfVxcbiAgLmRlbW8ucGMgLmRlbW8tc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiAjNjY2OyB9XFxuICAgIC5kZW1vLnBjIC5kZW1vLXNlbGVjdCBsaSB7XFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBtYXJnaW46IDZweCAwO1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLmRlbW8ucGMgLmRlbW8tc2VsZWN0IHNwYW4ge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbiAgICAgIHdpZHRoOiAxMjRweDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG4gICAgLmRlbW8ucGMgLmRlbW8tc2VsZWN0IGxhYmVsIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7IH1cXG4gICAgICAuZGVtby5wYyAuZGVtby1zZWxlY3QgbGFiZWwgaW5wdXQge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gIC5kZW1vLnBjIC5kZW1vLXN3aXRjaC13cmFwcGVyIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLmRlbW8ucGMgLmRlbW8tc3dpdGNoLXdyYXBwZXIgc3BhbiB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gIC5kZW1vLnBjIC5kZW1vLXN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5kZW1vLnBjIC5kZW1vLXN3aXRjaC1jaGlsZHJlbiB7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMjRweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7IH1cXG4gICAgLmRlbW8ucGMgLmRlbW8tc3dpdGNoLXRyaWdnZXIge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAyMnB4O1xcbiAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyB9XFxuICAuZGVtby5wYyAuZGVtby1zd2l0Y2gtb2ZmIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjRENERUUzOyB9XFxuICAgIC5kZW1vLnBjIC5kZW1vLXN3aXRjaC1vZmYgLmRlbW8tc3dpdGNoLWNoaWxkcmVuIHtcXG4gICAgICByaWdodDogLTZweDtcXG4gICAgICBjb2xvcjogI0NDQzsgfVxcbiAgICAuZGVtby5wYyAuZGVtby1zd2l0Y2gtb2ZmIC5kZW1vLXN3aXRjaC10cmlnZ2VyIHtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLmRlbW8ucGMgLmRlbW8tc3dpdGNoLW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQzExRDsgfVxcbiAgICAuZGVtby5wYyAuZGVtby1zd2l0Y2gtb24gLmRlbW8tc3dpdGNoLWNoaWxkcmVuIHtcXG4gICAgICBsZWZ0OiA4cHg7XFxuICAgICAgY29sb3I6ICNGRkY7IH1cXG4gICAgLmRlbW8ucGMgLmRlbW8tc3dpdGNoLW9uIC5kZW1vLXN3aXRjaC10cmlnZ2VyIHtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5kZW1vLnBjIC5kZW1vLWljb24tYnJvd3NlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxcbiAgLmRlbW8ucGMgLmRlbW8taWNvbi1oaWRlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxcblxcbi5kZW1vLWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7IH1cXG5cXG4uZGVtby1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IH1cXG4gIC5kZW1vLWRhcmsgLmRlbW8ucGMgPiAuZGVtby1oZWFkZXIge1xcbiAgICBjb2xvcjogI0ZGRjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj8/cmVmLS0yLTEhLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYj8/cmVmLS0yLTIhLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIhLi9zcmMvZGVtby1oZWxwZXIvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyoqXFxuICog5bC65a+4IOWfuuehgOWwuuWvuFxcbiAqIOWRveWQjeiDveWcqOivreS5ieeahOWJjeaPkOS4i+eugOWNleWwseWwvemHj+eugOWNlSwg6L+Z6YeM5Y+v5Lul5pivIHNpemUtMngsIHNwYWNlLTJ4LCBzaXplLWJhc2UgLi4uXFxuICog5LiN6L+H5Y+v5Lul5Zyo6K+t5LmJ55qE5YmN5o+Q5LiL5YGa55qE5pu057K+566A5LiA5LqbLCDkuo7mmK/nlKjkuoZzMiwgczHnrYlcXG4gKiDlj6/nlKjlj5jph486IGAkczEgLSAkczhgXFxuICogQGV4YW1wbGUgc2NzcyAtIOS9v+eUqFxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiAkczEgIWRlZmF1bHQ7XFxuICogICB9XFxuICpcXG4gKiBAZXhhbXBsZSBjc3MgLSBDU1Mg6L6T5Ye6XFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6IDRweCAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKi9cXG4ubmV4dC1pY29uW2Rpcj1cXFwicnRsXFxcIl06OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE5leHRJY29uO1xcbiAgc3JjOiB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfNTE1NzcxX2VtY25zNTA1NHgzd2hmci5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzUxNTc3MV9lbWNuczUwNTR4M3doZnIuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzUxNTc3MV9lbWNuczUwNTR4M3doZnIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfNTE1NzcxX2VtY25zNTA1NHgzd2hmci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcXFwiLy9hdC5hbGljZG4uY29tL3QvZm9udF81MTU3NzFfZW1jbnM1MDU0eDN3aGZyLnN2ZyNOZXh0SWNvblxcXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7IH1cXG5cXG4ubmV4dC1pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBOZXh0SWNvbjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgfVxcbiAgLm5leHQtaWNvbjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLm5leHQtaWNvbi1zbWlsZTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NUZcXFwiOyB9XFxuICAubmV4dC1pY29uLWNyeTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NURcXFwiOyB9XFxuICAubmV4dC1pY29uLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjBBXFxcIjsgfVxcbiAgLm5leHQtaWNvbi13YXJuaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwQlxcXCI7IH1cXG4gIC5uZXh0LWljb24tcHJvbXB0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwQ1xcXCI7IH1cXG4gIC5uZXh0LWljb24tZXJyb3I6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjBEXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1oZWxwOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY3M1xcXCI7IH1cXG4gIC5uZXh0LWljb24tY2xvY2s6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjIxXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zdWNjZXNzLWZpbGxpbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjNBXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1kZWxldGUtZmlsbGluZzpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjNcXFwiOyB9XFxuICAubmV4dC1pY29uLWZhdm9yaXRlcy1maWxsaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwRVxcXCI7IH1cXG4gIC5uZXh0LWljb24tYWRkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY1NVxcXCI7IH1cXG4gIC5uZXh0LWljb24tbWludXM6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjAxXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy11cDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjVcXFwiOyB9XFxuICAubmV4dC1pY29uLWFycm93LWRvd246YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjNEXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRFxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjE5XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy1kb3VibGUtbGVmdDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NTlcXFwiOyB9XFxuICAubmV4dC1pY29uLWFycm93LWRvdWJsZS1yaWdodDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NUVcXFwiOyB9XFxuICAubmV4dC1pY29uLXN3aXRjaDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2QjNcXFwiOyB9XFxuICAubmV4dC1pY29uLXNvcnRpbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjM0XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1kZXNjZW5kaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRlxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXNjZW5kaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRVxcXCI7IH1cXG4gIC5uZXh0LWljb24tc2VsZWN0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzMlxcXCI7IH1cXG4gIC5uZXh0LWljb24tc2VtaS1zZWxlY3Q6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjMzXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zZWFyY2g6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjU2XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1jbG9zZTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjZcXFwiOyB9XFxuICAubmV4dC1pY29uLWVsbGlwc2lzOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY1NFxcXCI7IH1cXG4gIC5uZXh0LWljb24tcGljdHVyZTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MzFcXFwiOyB9XFxuICAubmV4dC1pY29uLWNhbGVuZGFyOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwN1xcXCI7IH1cXG4gIC5uZXh0LWljb24tYXNoYmluOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzOVxcXCI7IH1cXG4gIC5uZXh0LWljb24tdXBsb2FkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTdFRVxcXCI7IH1cXG4gIC5uZXh0LWljb24tZG93bmxvYWQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjI4XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zZXQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjgzXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1lZGl0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzQlxcXCI7IH1cXG4gIC5uZXh0LWljb24tcmVmcmVzaDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NzdcXFwiOyB9XFxuICAubmV4dC1pY29uLWZpbHRlcjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjdcXFwiOyB9XFxuICAubmV4dC1pY29uLWF0dGFjaG1lbnQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjY1XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hY2NvdW50OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwOFxcXCI7IH1cXG4gIC5uZXh0LWljb24tZW1haWw6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjA1XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hdG06YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjA2XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1sb2FkaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY0NlxcXCI7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDFzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmdDaXJjbGUgMXMgaW5maW5pdGUgbGluZWFyOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmdDaXJjbGUge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbi5uZXh0LWljb24ubmV4dC14eHM6YmVmb3JlIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBmb250LXNpemU6IDhweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XFxuICAubmV4dC1pY29uLm5leHQteHhzIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XFxuICAgIG1hcmdpbi1yaWdodDogLTRweDsgfVxcbiAgICAubmV4dC1pY29uLm5leHQteHhzOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4OyB9IH1cXG5cXG4ubmV4dC1pY29uLm5leHQteHM6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4ubmV4dC1pY29uLm5leHQtc21hbGw6YmVmb3JlIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4ubmV4dC1pY29uLm5leHQtbWVkaXVtOmJlZm9yZSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LWxhcmdlOmJlZm9yZSB7XFxuICB3aWR0aDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LXhsOmJlZm9yZSB7XFxuICB3aWR0aDogMzJweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LXh4bDpiZWZvcmUge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbi5uZXh0LWljb24ubmV4dC14eHhsOmJlZm9yZSB7XFxuICB3aWR0aDogNjRweDtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyPz9yZWYtLTItMSEuL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliPz9yZWYtLTItMiEuL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYiEuL3NyYy9pY29uL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJpbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmROb2RlKHRhcmdldCwgcGFyYW0pIHtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0KHBhcmFtKTtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZmluZERPTU5vZGUodGFyZ2V0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS91dGlscy9maW5kLW5vZGUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtmdW5jLCBvYmp9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQge25vcm1hbE1hcCwgZWRnZU1hcH0gZnJvbSAnLi9hbGlnbk1hcCc7XG5cbi8qKlxuICogQ3JlYXRlZCBieSB4aWFjaGkgb24gMTcvMi8xMC5cbiAqL1xuXG5jb25zdCB7bm9vcH0gPSBmdW5jO1xuXG5jbGFzcyBCYWxsb29uSW5uZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH1cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYWxpZ25FZGdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBhbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaXNUb29sdGlwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcHVyZTogUHJvcFR5cGVzLmJvb2xcbiAgICB9XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcHJlZml4OiAnbmV4dC0nLFxuICAgICAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICAgICAgb25DbG9zZTogbm9vcCxcbiAgICAgICAgYWxpZ246ICdiJyxcbiAgICAgICAgdHlwZTogJ25vcm1hbCcsXG4gICAgICAgIGFsaWduRWRnZTogZmFsc2UsXG4gICAgICAgIHB1cmU6IGZhbHNlXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3ByZWZpeCwgY2xvc2FibGUsIGNsYXNzTmFtZSwgc3R5bGUsIGlzVG9vbHRpcCwgYWxpZ24sIHR5cGUsIG9uQ2xvc2UsIGFsaWduRWRnZSwgY2hpbGRyZW4sIHJ0bCwgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgYWxpZ25NYXAgPSBhbGlnbkVkZ2UgPyBlZGdlTWFwIDogbm9ybWFsTWFwO1xuICAgICAgICBsZXQgX3ByZWZpeCA9IHByZWZpeDtcblxuICAgICAgICBpZiAoaXNUb29sdGlwKSB7XG4gICAgICAgICAgICBfcHJlZml4ID0gYCR7X3ByZWZpeH1iYWxsb29uLXRvb2x0aXBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3ByZWZpeCA9IGAke19wcmVmaXh9YmFsbG9vbmA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBbYCR7X3ByZWZpeH1gXTogdHJ1ZSxcbiAgICAgICAgICAgIFtgJHtfcHJlZml4fS0ke3R5cGV9YF06IHR5cGUsXG4gICAgICAgICAgICBbYCR7X3ByZWZpeH0tbWVkaXVtYF06IHRydWUsXG4gICAgICAgICAgICBbYCR7X3ByZWZpeH0tJHthbGlnbk1hcFthbGlnbl0uYXJyb3d9YF06IGFsaWduTWFwW2FsaWduXSxcbiAgICAgICAgICAgIFtgJHtfcHJlZml4fS1jbG9zYWJsZWBdOiBjbG9zYWJsZSxcbiAgICAgICAgICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IHJvbGU9XCJ0b29sdGlwXCIgZGlyPXtydGwgPyAncnRsJyA6IHVuZGVmaW5lZH0gY2xhc3NOYW1lPXtjbGFzc2VzfSBzdHlsZT17c3R5bGV9IHsuLi5vYmoucGlja090aGVycyhPYmplY3Qua2V5cyhCYWxsb29uSW5uZXIucHJvcFR5cGVzKSwgb3RoZXJzKX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xvc2FibGUgP1xuICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgdGFiSW5kZXg9XCIwXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9e2Ake19wcmVmaXh9LWNsb3NlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImNsb3NlXCIgc2l6ZT1cInNtYWxsXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+IDogbnVsbH1cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGxvb25Jbm5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL2lubmVyLmpzeCIsInZhciBjaGFyZW5jID0ge1xuICAvLyBVVEYtOCBlbmNvZGluZ1xuICB1dGY4OiB7XG4gICAgLy8gQ29udmVydCBhIHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBzdHJpbmdUb0J5dGVzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBjaGFyZW5jLmJpbi5zdHJpbmdUb0J5dGVzKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgc3RyaW5nXG4gICAgYnl0ZXNUb1N0cmluZzogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGNoYXJlbmMuYmluLmJ5dGVzVG9TdHJpbmcoYnl0ZXMpKSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEJpbmFyeSBlbmNvZGluZ1xuICBiaW46IHtcbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspXG4gICAgICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBzdHJpbmdcbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgc3RyID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHN0ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pKTtcbiAgICAgIHJldHVybiBzdHIuam9pbignJyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJlbmM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX2NoYXJlbmNAMC4wLjJAY2hhcmVuYy9jaGFyZW5jLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHhpYWNoaSBvbiAxNy8xLzE3LlxuICovXG5cbmNvbnN0IG5vcm1hbE1hcCA9IHtcbiAgICB0OiB7XG4gICAgICAgIGFsaWduOiAnYmMgdGMnLFxuICAgICAgICBydGxBbGlnbjogJ2JjIHRjJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20nLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbScsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgLTEyXVxuICAgIH0sXG4gICAgcjoge1xuICAgICAgICBhbGlnbjogJ2NsIGNyJyxcbiAgICAgICAgcnRsQWxpZ246ICdjciBjbCcsXG4gICAgICAgIGFycm93OiAnbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAnbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAncmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgMF1cbiAgICB9LFxuICAgIGI6IHtcbiAgICAgICAgYWxpZ246ICd0YyBiYycsXG4gICAgICAgIHJ0bEFsaWduOiAndGMgYmMnLFxuICAgICAgICBhcnJvdzogJ3RvcCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wJyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AnLFxuICAgICAgICBvZmZzZXQ6IFswLCAxMl1cbiAgICB9LFxuICAgIGw6IHtcbiAgICAgICAgYWxpZ246ICdjciBjbCcsXG4gICAgICAgIHJ0bEFsaWduOiAnY2wgY3InLFxuICAgICAgICBhcnJvdzogJ3JpZ2h0JyxcbiAgICAgICAgdHJPcmlnaW46ICdyaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnbGVmdCcsXG4gICAgICAgIG9mZnNldDogWy0xMiwgMF1cbiAgICB9LFxuICAgIHRsOiB7XG4gICAgICAgIGFsaWduOiAnYnIgdGMnLFxuICAgICAgICBydGxBbGlnbjogJ2JsIHRjJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20tcmlnaHQnLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFsyMCwgLTEyXVxuICAgIH0sXG4gICAgdHI6IHtcbiAgICAgICAgYWxpZ246ICdibCB0YycsXG4gICAgICAgIHJ0bEFsaWduOiAnYnIgdGMnLFxuICAgICAgICBhcnJvdzogJ2JvdHRvbS1sZWZ0JyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTIwLCAtMTJdXG4gICAgfSxcbiAgICBydDoge1xuICAgICAgICBhbGlnbjogJ2JsIGNyJyxcbiAgICAgICAgcnRsQWxpZ246ICdiciBjbCcsXG4gICAgICAgIGFycm93OiAnbGVmdC1ib3R0b20nLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgMjBdXG4gICAgfSxcbiAgICByYjoge1xuICAgICAgICBhbGlnbjogJ3RsIGNyJyxcbiAgICAgICAgcnRsQWxpZ246ICd0ciBjbCcsXG4gICAgICAgIGFycm93OiAnbGVmdC10b3AnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgLTIwXVxuICAgIH0sXG4gICAgYmw6IHtcbiAgICAgICAgYWxpZ246ICd0ciBiYycsXG4gICAgICAgIHJ0bEFsaWduOiAndGwgYmMnLFxuICAgICAgICBhcnJvdzogJ3RvcC1yaWdodCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIG9mZnNldDogWzIwLCAxMl1cbiAgICB9LFxuICAgIGJyOiB7XG4gICAgICAgIGFsaWduOiAndGwgYmMnLFxuICAgICAgICBydGxBbGlnbjogJ3RyIGJjJyxcbiAgICAgICAgYXJyb3c6ICd0b3AtbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIG9mZnNldDogWy0yMCwgMTJdXG4gICAgfSxcbiAgICBsdDoge1xuICAgICAgICBhbGlnbjogJ2JyIGNsJyxcbiAgICAgICAgcnRsQWxpZ246ICdibCBjcicsXG4gICAgICAgIGFycm93OiAncmlnaHQtYm90dG9tJyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTEyLCAyMF1cbiAgICB9LFxuICAgIGxiOiB7XG4gICAgICAgIGFsaWduOiAndHIgY2wnLFxuICAgICAgICBydGxBbGlnbjogJ3RsIGNyJyxcbiAgICAgICAgYXJyb3c6ICdyaWdodC10b3AnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFstMTIsIC0yMF1cbiAgICB9XG59O1xuY29uc3QgZWRnZU1hcCA9IHtcbiAgICB0OiB7XG4gICAgICAgIGFsaWduOiAnYmMgdGMnLFxuICAgICAgICBydGxBbGlnbjogJ2JjIHRjJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20nLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbScsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgLTEyXVxuICAgIH0sXG4gICAgcjoge1xuICAgICAgICBhbGlnbjogJ2NsIGNyJyxcbiAgICAgICAgcnRsQWxpZ246ICdjciBjbCcsXG4gICAgICAgIGFycm93OiAnbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAnbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAncmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgMF1cbiAgICB9LFxuICAgIGI6IHtcbiAgICAgICAgYWxpZ246ICd0YyBiYycsXG4gICAgICAgIHJ0bEFsaWduOiAndGMgYmMnLFxuICAgICAgICBhcnJvdzogJ3RvcCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wJyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AnLFxuICAgICAgICBvZmZzZXQ6IFswLCAxMl1cbiAgICB9LFxuICAgIGw6IHtcbiAgICAgICAgYWxpZ246ICdjciBjbCcsXG4gICAgICAgIHJ0bEFsaWduOiAnY2wgY3InLFxuICAgICAgICBhcnJvdzogJ3JpZ2h0JyxcbiAgICAgICAgdHJPcmlnaW46ICdyaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnbGVmdCcsXG4gICAgICAgIG9mZnNldDogWy0xMiwgMF1cbiAgICB9LFxuICAgIHRsOiB7XG4gICAgICAgIGFsaWduOiAnYmwgdGwnLFxuICAgICAgICBydGxBbGlnbjogJ2JyIHRyJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20tbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIG9mZnNldDogWzAsIC0xMl1cbiAgICB9LFxuICAgIHRyOiB7XG4gICAgICAgIGFsaWduOiAnYnIgdHInLFxuICAgICAgICBydGxBbGlnbjogJ2JsIHRsJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20tcmlnaHQnLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFswLCAtMTJdXG4gICAgfSxcbiAgICBydDoge1xuICAgICAgICBhbGlnbjogJ3RsIHRyJyxcbiAgICAgICAgcnRsQWxpZ246ICd0ciB0bCcsXG4gICAgICAgIGFycm93OiAnbGVmdC10b3AnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgMF1cbiAgICB9LFxuICAgIHJiOiB7XG4gICAgICAgIGFsaWduOiAnYmwgYnInLFxuICAgICAgICBydGxBbGlnbjogJ2JyIGJsJyxcbiAgICAgICAgYXJyb3c6ICdsZWZ0LWJvdHRvbScsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIG9mZnNldDogWzEyLCAwXVxuICAgIH0sXG4gICAgYmw6IHtcbiAgICAgICAgYWxpZ246ICd0bCBibCcsXG4gICAgICAgIHJ0bEFsaWduOiAndHIgYnInLFxuICAgICAgICBhcnJvdzogJ3RvcC1sZWZ0JyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMTJdXG4gICAgfSxcbiAgICBicjoge1xuICAgICAgICBhbGlnbjogJ3RyIGJyJyxcbiAgICAgICAgcnRsQWxpZ246ICd0bCBibCcsXG4gICAgICAgIGFycm93OiAndG9wLXJpZ2h0JyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMTJdXG4gICAgfSxcbiAgICBsdDoge1xuICAgICAgICBhbGlnbjogJ3RyIHRsJyxcbiAgICAgICAgcnRsQWxpZ246ICd0bCB0cicsXG4gICAgICAgIGFycm93OiAncmlnaHQtdG9wJyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTEyLCAwXVxuICAgIH0sXG4gICAgbGI6IHtcbiAgICAgICAgYWxpZ246ICdiciBibCcsXG4gICAgICAgIHJ0bEFsaWduOiAnYmwgYnInLFxuICAgICAgICBhcnJvdzogJ3JpZ2h0LWJvdHRvbScsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIG9mZnNldDogWy0xMiwgMF1cbiAgICB9XG59O1xuXG5leHBvcnQge1xuICAgIG5vcm1hbE1hcCxcbiAgICBlZGdlTWFwXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vYWxpZ25NYXAuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0RG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dExlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0TGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0VXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgem9vbUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQGtleWZyYW1lcyB6b29tT3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRJbkRvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBleHBhbmRJbkRvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGV4cGFuZEluVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBleHBhbmRJblVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRJbldpdGhGYWRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogLjE7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBleHBhbmRJbldpdGhGYWRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogLjE7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGV4cGFuZE91dFVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kT3V0VXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGV4cGFuZE91dERvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBleHBhbmRPdXREb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRPdXRXaXRoRmFkZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGV4cGFuZE91dFdpdGhGYWRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblxcbi5mYWRlSW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlSW5Eb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlSW5MZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlSW5SaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlSW5VcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZU91dERvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dERvd247XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dERvd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVPdXRMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlT3V0UmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZU91dFVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLnpvb21JbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW47XFxuICBhbmltYXRpb24tbmFtZTogem9vbUluO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLnpvb21PdXQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbU91dDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5leHBhbmRJbkRvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXhwYW5kSW5Eb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZEluRG93bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5leHBhbmRPdXRVcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleHBhbmRPdXRVcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBleHBhbmRPdXRVcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4xNXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMTVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZEluVXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXhwYW5kSW5VcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBleHBhbmRJblVwO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZE91dERvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXhwYW5kT3V0RG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBleHBhbmRPdXREb3duO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjE1cztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4xNXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4ucHVsc2Uge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVsc2U7XFxuICBhbmltYXRpb24tbmFtZTogcHVsc2U7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kLWVudGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kLWVudGVyLWFjdGl2ZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0OyB9XFxuICAuZXhwYW5kLWVudGVyLWFjdGl2ZSA+ICoge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleHBhbmRJbldpdGhGYWRlO1xcbiAgICBhbmltYXRpb24tbmFtZTogZXhwYW5kSW5XaXRoRmFkZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogXFxcImZvcndhcmRzXFxcIjtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogXFxcImZvcndhcmRzXFxcIjtcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5leHBhbmQtbGVhdmUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5leHBhbmQtbGVhdmUtYWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7IH1cXG4gIC5leHBhbmQtbGVhdmUtYWN0aXZlID4gKiB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4cGFuZE91dFdpdGhGYWRlO1xcbiAgICBhbmltYXRpb24tbmFtZTogZXhwYW5kT3V0V2l0aEZhZGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJmb3J3YXJkc1xcXCI7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJmb3J3YXJkc1xcXCI7XFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXI/P3JlZi0tMi0xIS4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWI/P3JlZi0tMi0yIS4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliIS4vc3JjL2FuaW1hdGUvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qKlxcbiAqIOWwuuWvuCDln7rnoYDlsLrlr7hcXG4gKiDlkb3lkI3og73lnKjor63kuYnnmoTliY3mj5DkuIvnroDljZXlsLHlsL3ph4/nroDljZUsIOi/memHjOWPr+S7peaYryBzaXplLTJ4LCBzcGFjZS0yeCwgc2l6ZS1iYXNlIC4uLlxcbiAqIOS4jei/h+WPr+S7peWcqOivreS5ieeahOWJjeaPkOS4i+WBmueahOabtOeyvueugOS4gOS6mywg5LqO5piv55So5LqGczIsIHMx562JXFxuICog5Y+v55So5Y+Y6YePOiBgJHMxIC0gJHM4YFxcbiAqIEBleGFtcGxlIHNjc3MgLSDkvb/nlKhcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogJHMxICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqXFxuICogQGV4YW1wbGUgY3NzIC0gQ1NTIOi+k+WHulxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiA0cHggIWRlZmF1bHQ7XFxuICogICB9XFxuICovXFxuLm5leHQtb3ZlcmxheS13cmFwcGVyIC5uZXh0LW92ZXJsYXktaW5uZXIge1xcbiAgei1pbmRleDogMTAwMTsgfVxcblxcbi5uZXh0LW92ZXJsYXktd3JhcHBlciAubmV4dC1vdmVybGF5LWJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbi5uZXh0LW92ZXJsYXktd3JhcHBlci5vcGVuZWQgLm5leHQtb3ZlcmxheS1iYWNrZHJvcCB7XFxuICBvcGFjaXR5OiAwLjI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXI/P3JlZi0tMi0xIS4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWI/P3JlZi0tMi0yIS4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliIS4vc3JjL292ZXJsYXkvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qKlxcbiAqIOWwuuWvuCDln7rnoYDlsLrlr7hcXG4gKiDlkb3lkI3og73lnKjor63kuYnnmoTliY3mj5DkuIvnroDljZXlsLHlsL3ph4/nroDljZUsIOi/memHjOWPr+S7peaYryBzaXplLTJ4LCBzcGFjZS0yeCwgc2l6ZS1iYXNlIC4uLlxcbiAqIOS4jei/h+WPr+S7peWcqOivreS5ieeahOWJjeaPkOS4i+WBmueahOabtOeyvueugOS4gOS6mywg5LqO5piv55So5LqGczIsIHMx562JXFxuICog5Y+v55So5Y+Y6YePOiBgJHMxIC0gJHM4YFxcbiAqIEBleGFtcGxlIHNjc3MgLSDkvb/nlKhcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogJHMxICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqXFxuICogQGV4YW1wbGUgY3NzIC0gQ1NTIOi+k+WHulxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiA0cHggIWRlZmF1bHQ7XFxuICogICB9XFxuICovXFxuLm5leHQtYmFsbG9vbiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHotaW5kZXg6IDA7XFxuICAvKiBzaXplICovXFxuICAvKiDluKblhbPpl63mjInpkq7nmoTlj7PkvqdwYWRkaW5n5Y+Y5aSnICovIH1cXG4gIC5uZXh0LWJhbGxvb24gKixcXG4gIC5uZXh0LWJhbGxvb24gKjpiZWZvcmUsXFxuICAubmV4dC1iYWxsb29uICo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgLm5leHQtYmFsbG9vbi1wcmltYXJ5IHtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIGJvcmRlci1jb2xvcjogIzQ0OTRGOTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5IC5uZXh0LWJhbGxvb24tY2xvc2Uge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDEycHg7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGNvbG9yOiAjOTk5OTk5OyB9XFxuICAgICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5IC5uZXh0LWJhbGxvb24tY2xvc2UgLm5leHQtaWNvbiB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4OyB9XFxuICAgICAgICAubmV4dC1iYWxsb29uLXByaW1hcnkgLm5leHQtYmFsbG9vbi1jbG9zZSAubmV4dC1pY29uOmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7IH1cXG4gICAgICAubmV4dC1iYWxsb29uLXByaW1hcnkgLm5leHQtYmFsbG9vbi1jbG9zZSA6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5OmFmdGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDk0Rjk7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcXG4gICAgICB6LWluZGV4OiAtMTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAtN3B4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1yaWdodDphZnRlciB7XFxuICAgICAgdG9wOiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIHJpZ2h0OiAtN3B4O1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tYm90dG9tOmFmdGVyIHtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1sZWZ0OmFmdGVyIHtcXG4gICAgICB0b3A6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgbGVmdDogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1sZWZ0LXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAxMnB4O1xcbiAgICAgIGxlZnQ6IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdC1ib3R0b206YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogMTJweDtcXG4gICAgICBsZWZ0OiAtN3B4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXJpZ2h0LXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAxMnB4O1xcbiAgICAgIHJpZ2h0OiAtN3B4O1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tcmlnaHQtYm90dG9tOmFmdGVyIHtcXG4gICAgICByaWdodDogLTdweDtcXG4gICAgICBib3R0b206IDEycHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi10b3AtbGVmdDphZnRlciB7XFxuICAgICAgdG9wOiAtN3B4O1xcbiAgICAgIGxlZnQ6IDEycHg7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi10b3AtcmlnaHQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTJweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1ib3R0b20tcmlnaHQ6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAxMnB4O1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb24tbm9ybWFsIHtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIGJvcmRlci1jb2xvcjogI0RDREVFMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwgLm5leHQtYmFsbG9vbi1jbG9zZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTJweDtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgY29sb3I6ICM5OTk5OTk7IH1cXG4gICAgICAubmV4dC1iYWxsb29uLW5vcm1hbCAubmV4dC1iYWxsb29uLWNsb3NlIC5uZXh0LWljb24ge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTJweDsgfVxcbiAgICAgICAgLm5leHQtYmFsbG9vbi1ub3JtYWwgLm5leHQtYmFsbG9vbi1jbG9zZSAubmV4dC1pY29uOmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7IH1cXG4gICAgICAubmV4dC1iYWxsb29uLW5vcm1hbCAubmV4dC1iYWxsb29uLWNsb3NlIDpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzY2NjY2NjsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbDphZnRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICBjb250ZW50OiAnICc7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRENERUUzO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgICAgei1pbmRleDogLTE7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAtN3B4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXJpZ2h0OmFmdGVyIHtcXG4gICAgICB0b3A6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgcmlnaHQ6IC03cHg7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWJvdHRvbTphZnRlciB7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0OmFmdGVyIHtcXG4gICAgICB0b3A6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgbGVmdDogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWxlZnQtdG9wOmFmdGVyIHtcXG4gICAgICB0b3A6IDEycHg7XFxuICAgICAgbGVmdDogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWxlZnQtYm90dG9tOmFmdGVyIHtcXG4gICAgICBib3R0b206IDEycHg7XFxuICAgICAgbGVmdDogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXJpZ2h0LXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAxMnB4O1xcbiAgICAgIHJpZ2h0OiAtN3B4O1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1yaWdodC1ib3R0b206YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAtN3B4O1xcbiAgICAgIGJvdHRvbTogMTJweDtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tdG9wLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICBsZWZ0OiAxMnB4O1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi10b3AtcmlnaHQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tYm90dG9tLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxMnB4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tYm90dG9tLXJpZ2h0OmFmdGVyIHtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLm5leHQtYmFsbG9vbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLW1lZGl1bSB7XFxuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDE2cHg7IH1cXG4gIC5uZXh0LWJhbGxvb24tY2xvc2FibGUge1xcbiAgICBwYWRkaW5nOiAxNnB4IDQwcHggMTZweCAxNnB4OyB9XFxuXFxuLm5leHQtYmFsbG9vbi10b29sdGlwIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgei1pbmRleDogMDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgYm9yZGVyLWNvbG9yOiAjRENERUUzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgLyogc2l6ZSAqLyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAgKixcXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcCAqOmJlZm9yZSxcXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcCAqOmFmdGVyIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcDphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RDREVFMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNztcXG4gICAgei1pbmRleDogLTE7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC10b3A6YWZ0ZXIge1xcbiAgICB0b3A6IC03cHg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLXJpZ2h0OmFmdGVyIHtcXG4gICAgdG9wOiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICByaWdodDogLTdweDtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1ib3R0b206YWZ0ZXIge1xcbiAgICBib3R0b206IC03cHg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtbGVmdDphZnRlciB7XFxuICAgIHRvcDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtbGVmdC10b3A6YWZ0ZXIge1xcbiAgICB0b3A6IDEycHg7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQtYm90dG9tOmFmdGVyIHtcXG4gICAgYm90dG9tOiAxMnB4O1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1yaWdodC10b3A6YWZ0ZXIge1xcbiAgICB0b3A6IDEycHg7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLXJpZ2h0LWJvdHRvbTphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBib3R0b206IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtdG9wLWxlZnQ6YWZ0ZXIge1xcbiAgICB0b3A6IC03cHg7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLXRvcC1yaWdodDphZnRlciB7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgYm90dG9tOiAtN3B4O1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLWJvdHRvbS1yaWdodDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBib3R0b206IC03cHg7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLW1lZGl1bSB7XFxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDsgfVxcblxcbi5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXSB7XFxuICAvKiDluKblhbPpl63mjInpkq7nmoTlj7PkvqdwYWRkaW5n5Y+Y5aSnICovIH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeSAubmV4dC1iYWxsb29uLWNsb3NlIHtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdC10b3A6YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1sZWZ0LWJvdHRvbTphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXJpZ2h0LXRvcDphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXJpZ2h0LWJvdHRvbTphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXRvcC1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGxlZnQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tdG9wLXJpZ2h0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDEycHg7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tYm90dG9tLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogMTJweDtcXG4gICAgbGVmdDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1ib3R0b20tcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICByaWdodDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwgLm5leHQtYmFsbG9vbi1jbG9zZSB7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIHJpZ2h0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWxlZnQtdG9wOmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0LWJvdHRvbTphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tcmlnaHQtdG9wOmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1yaWdodC1ib3R0b206YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXRvcC1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGxlZnQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi10b3AtcmlnaHQ6YWZ0ZXIge1xcbiAgICByaWdodDogYXV0bztcXG4gICAgbGVmdDogMTJweDsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGxlZnQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1ib3R0b20tcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICByaWdodDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1jbG9zYWJsZSB7XFxuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDQwcHg7IH1cXG5cXG4ubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXSB7XFxuICAvKiBzaXplICovIH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtbGVmdC10b3A6YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtbGVmdC1ib3R0b206YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtcmlnaHQtdG9wOmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLXJpZ2h0LWJvdHRvbTphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0OyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC10b3AtbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBsZWZ0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC10b3AtcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICByaWdodDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtYm90dG9tLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogMTJweDtcXG4gICAgbGVmdDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtYm90dG9tLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLW1lZGl1bSB7XFxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj8/cmVmLS0yLTEhLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYj8/cmVmLS0yLTIhLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIhLi9zcmMvYmFsbG9vbi9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiaW1wb3J0IENvbmZpZ1Byb3ZpZGVyIGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL292ZXJsYXknO1xuaW1wb3J0IEdhdGV3YXkgZnJvbSAnLi9nYXRld2F5JztcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL3BvcHVwJztcblxuT3ZlcmxheS5HYXRld2F5ID0gR2F0ZXdheTtcbk92ZXJsYXkuUG9zaXRpb24gPSBQb3NpdGlvbjtcbk92ZXJsYXkuUG9wdXAgPSBDb25maWdQcm92aWRlci5jb25maWcoUG9wdXAsIHtcbiAgICBleHBvcnROYW1lczogWydvdmVybGF5J11cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlci5jb25maWcoT3ZlcmxheSwge1xuICAgIGV4cG9ydE5hbWVzOiBbJ2dldENvbnRlbnQnLCAnZ2V0Q29udGVudE5vZGUnXVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9pbmRleC5qc3giLCJpbXBvcnQgKiBhcyBfZG9tIGZyb20gJy4vZG9tJztcbmltcG9ydCAqIGFzIF9lbnYgZnJvbSAnLi9lbnYnO1xuaW1wb3J0ICogYXMgX2V2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyBfZnVuYyBmcm9tICcuL2Z1bmMnO1xuaW1wb3J0ICogYXMgX2xvZyBmcm9tICcuL2xvZyc7XG5pbXBvcnQgKiBhcyBfb2JqZWN0IGZyb20gJy4vb2JqZWN0JztcbmltcG9ydCAqIGFzIF9zdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0ICogYXMgX3N1cHBvcnQgZnJvbSAnLi9zdXBwb3J0JztcbmltcG9ydCAqIGFzIF9mb2N1cyBmcm9tICcuL2ZvY3VzJztcbmltcG9ydCBfZ3VpZCBmcm9tICcuL2d1aWQnO1xuaW1wb3J0IF9LRVlDT0RFIGZyb20gJy4va2V5Y29kZSc7XG5cbmV4cG9ydCBjb25zdCBkb20gPSBfZG9tO1xuZXhwb3J0IGNvbnN0IGVudiA9IF9lbnY7XG5leHBvcnQgY29uc3QgZXZlbnRzID0gX2V2ZW50cztcbmV4cG9ydCBjb25zdCBmdW5jID0gX2Z1bmM7XG5leHBvcnQgY29uc3QgbG9nID0gX2xvZztcbmV4cG9ydCBjb25zdCBvYmogPSBfb2JqZWN0O1xuZXhwb3J0IGNvbnN0IHN0ciA9IF9zdHJpbmc7XG5leHBvcnQgY29uc3Qgc3VwcG9ydCA9IF9zdXBwb3J0O1xuZXhwb3J0IGNvbnN0IGZvY3VzID0gX2ZvY3VzO1xuZXhwb3J0IGNvbnN0IGd1aWQgPSBfZ3VpZDtcbmV4cG9ydCBjb25zdCBLRVlDT0RFID0gX0tFWUNPREU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pbmRleC5qcyIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ljb24vc3R5bGUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25maWdQcm92aWRlciBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuXG4vKipcbiAqIEljb25cbiAqL1xuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyH5a6a5pi+56S65ZOq56eN5Zu+5qCHXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyH5a6a5Zu+5qCH5aSn5bCPXG4gICAgICAgICAqL1xuICAgICAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4eHMnLCAneHMnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ3hsJywgJ3h4bCcsICd4eHhsJ10pLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgc2l6ZTogJ21lZGl1bSdcbiAgICB9O1xuXG4gICAgc3RhdGljIF90eXBlTWFyayA9ICdpY29uJztcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xuICAgICAgICBjb25zdCB7IHByZWZpeCwgdHlwZSwgc2l6ZSwgY2xhc3NOYW1lLCBydGwsIC4uLm90aGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjeCh7XG4gICAgICAgICAgICBbYCR7cHJlZml4fWljb25gXTogdHJ1ZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9aWNvbi0ke3R5cGV9YF06ICEhdHlwZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9JHtzaXplfWBdOiAhIXNpemUsXG4gICAgICAgICAgICBbY2xhc3NOYW1lXTogISFjbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJ0bCAmJiBbJ2Fycm93LWxlZnQnLCAnYXJyb3ctcmlnaHQnLCAnYXJyb3ctZG91YmxlLWxlZnQnLCAnYXJyb3ctZG91YmxlLXJpZ2h0JywgJ3N3aXRjaCcsICdzb3J0aW5nJywgJ2Rlc2NlbmRpbmcnLCAnYXNjZW5kaW5nJ10uaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIG90aGVyLmRpciA9ICdydGwnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxpIHsuLi5vdGhlcn0gY2xhc3NOYW1lPXtjbGFzc2VzfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Byb3ZpZGVyLmNvbmZpZyhJY29uKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29uL2luZGV4LmpzeCIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FuaW1hdGUvc3R5bGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5tb21lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3aW5kb3cubW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29udGV4dFByb3BzKHByb3BzLCBjb250ZXh0LCBkaXNwbGF5TmFtZSkge1xuICAgIGNvbnN0IHsgcHJlZml4LCBsb2NhbGUsIHB1cmUsIHJ0bCB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBuZXh0UHJlZml4LCBuZXh0TG9jYWxlLCBuZXh0UHVyZSwgbmV4dFdhcm5pbmcsIG5leHRSdGwgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBuZXdQcmVmaXggPSBwcmVmaXggfHwgbmV4dFByZWZpeDtcblxuICAgIGxldCBsb2NhbGVGcm9tQ29udGV4dDtcbiAgICBpZiAobmV4dExvY2FsZSkge1xuICAgICAgICBsb2NhbGVGcm9tQ29udGV4dCA9IG5leHRMb2NhbGVbZGlzcGxheU5hbWVdO1xuICAgICAgICBpZiAobG9jYWxlRnJvbUNvbnRleHQpIHtcbiAgICAgICAgICAgIGxvY2FsZUZyb21Db250ZXh0Lm1vbWVudExvY2FsZSA9IG5leHRMb2NhbGUubW9tZW50TG9jYWxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBuZXdMb2NhbGU7XG4gICAgaWYgKGxvY2FsZSkge1xuICAgICAgICBuZXdMb2NhbGUgPSB7IC4uLihsb2NhbGVGcm9tQ29udGV4dCB8fCB7fSksIC4uLmxvY2FsZSB9O1xuICAgIH0gZWxzZSBpZiAobG9jYWxlRnJvbUNvbnRleHQpIHtcbiAgICAgICAgbmV3TG9jYWxlID0gbG9jYWxlRnJvbUNvbnRleHQ7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UHVyZSA9IHR5cGVvZiBwdXJlID09PSAnYm9vbGVhbicgPyBwdXJlIDogbmV4dFB1cmU7XG4gICAgY29uc3QgbmV3UnRsID0gdHlwZW9mIHJ0bCA9PT0gJ2Jvb2xlYW4nID8gcnRsIDogbmV4dFJ0bDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByZWZpeDogbmV3UHJlZml4LFxuICAgICAgICBsb2NhbGU6IG5ld0xvY2FsZSxcbiAgICAgICAgcHVyZTogbmV3UHVyZSxcbiAgICAgICAgcnRsOiBuZXdSdGwsXG4gICAgICAgIHdhcm5pbmc6IG5leHRXYXJuaW5nXG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWctcHJvdmlkZXIvZ2V0LWNvbnRleHQtcHJvcHMuanN4IiwiaW1wb3J0IHtjYW1lbGNhc2UsIGh5cGhlbmF0ZX0gZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IHtlYWNofSBmcm9tICcuL29iamVjdCc7XG5cbi8qKlxuICog5piv5ZCm6IO95L2/55SoIERPTSDmlrnms5VcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaGFzRE9NID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISF3aW5kb3cuZG9jdW1lbnQgJiYgISFkb2N1bWVudC5jcmVhdGVFbGVtZW50O1xuXG4vKipcbiAqIOiKgueCueaYr+WQpuWMheWQq+aMh+WumiBjbGFzc05hbWVcbiAqIEBwYXJhbSAge0VsZW1lbnR9ICBub2RlXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqIGRvbS5oYXNDbGFzcyhkb2N1bWVudC5ib2R5LCAnZm9vJyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00gfHwgIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc05hbWUuaW5kZXhPZihjbGFzc05hbWUpID4gLTE7XG4gICAgfVxufVxuXG4vKipcbiAqIOa3u+WKoCBjbGFzc05hbWVcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICpcbiAqIEBleGFtcGxlXG4gKiBkb20uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2ZvbycpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSwgX2ZvcmNlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00gfHwgIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKF9mb3JjZSA9PT0gdHJ1ZSB8fCAhaGFzQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSkge1xuICAgICAgICBub2RlLmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XG4gICAgfVxufVxuXG4vKipcbiAqIOenu+mZpCBjbGFzc05hbWVcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gY2xhc3NOYW1lXG4gKlxuICogQGV4YW1wbGVcbiAqIGRvbS5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnZm9vJyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyAobm9kZSwgY2xhc3NOYW1lLCBfZm9yY2UpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSBpZiAoX2ZvcmNlID09PSB0cnVlIHx8IGhhc0NsYXNzKG5vZGUsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBub2RlLmNsYXNzTmFtZS5yZXBsYWNlKGNsYXNzTmFtZSwgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIOWIh+aNoiBjbGFzc05hbWVcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgICAg5omn6KGM5ZCO6IqC54K55LiK5piv5ZCm6L+Y5pyJ5q2kIGNsYXNzTmFtZVxuICpcbiAqIEBleGFtcGxlXG4gKiBkb20udG9nZ2xlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2ZvbycpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaGFzRE9NIHx8ICFub2RlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZsYWcgPSBoYXNDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgICAgICBmbGFnID8gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lLCB0cnVlKSA6IGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuICFmbGFnO1xuICAgIH1cbn1cblxuLyoqXG4gKiDlhYPntKDmmK/lkKbljLnphY0gQ1NTIOmAieaLqeWZqFxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZSAgICAgICBET00g6IqC54K5XG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBzZWxlY3RvciAgIENTUyDpgInmi6nlmahcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqIGRvbS5tYXRjaGVzKG1vdW50Tm9kZSwgJy5jb250YWluZXInKTsgLy8gYm9vbGVhblxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbWF0Y2hlc0ZuID0gbnVsbDtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChoYXNET00pIHtcbiAgICAgICAgY29uc3QgX2JvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmhlYWQ7XG4gICAgICAgIG1hdGNoZXNGbiA9IF9ib2R5Lm1hdGNoZXMgPyAnbWF0Y2hlcycgOlxuICAgICAgICAgICAgX2JvZHkud2Via2l0TWF0Y2hlc1NlbGVjdG9yID8gJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicgOlxuICAgICAgICAgICAgICAgIF9ib2R5Lm1zTWF0Y2hlc1NlbGVjdG9yID8gJ21zTWF0Y2hlc1NlbGVjdG9yJyA6XG4gICAgICAgICAgICAgICAgICAgIF9ib2R5Lm1vek1hdGNoZXNTZWxlY3RvciA/ICdtb3pNYXRjaGVzU2VsZWN0b3InIDogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIHNlbGVjdG9yKSB7XG4gICAgICAgIGlmICghaGFzRE9NIHx8ICFub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2hlc0ZuID8gbm9kZVttYXRjaGVzRm5dKHNlbGVjdG9yKSA6IGZhbHNlO1xuICAgIH07XG59KCk7XG5cbi8qKlxuICog6I635Y+W5YWD57Sg6K6h566X5ZCO55qE5qC35byPXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZSAobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDEgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSA6IHt9O1xufVxuXG5jb25zdCBQSVhFTF9QQVRURVJOID0gL21hcmdpbnxwYWRkaW5nfHdpZHRofGhlaWdodHxtYXh8bWlufG9mZnNldHxzaXplL2k7XG5jb25zdCByZW1vdmVQaXhlbCA9IHtsZWZ0OiAxLCB0b3A6IDEsIHJpZ2h0OiAxLCBib3R0b206IDF9O1xuXG4vKipcbiAqIOagoemqjOW5tuS/ruato+WFg+e0oOeahOagt+W8j+WxnuaAp+WAvFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVxuICogQHBhcmFtICB7TnVtYmVyfSB2YWx1ZVxuICovXG5mdW5jdGlvbiBfZ2V0U3R5bGVWYWx1ZSAobm9kZSwgdHlwZSwgdmFsdWUpIHtcbiAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHZhbHVlID09PSAnYXV0bycpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5vZmZzZXRIZWlnaHQgfHwgMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ3dpZHRoJykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0V2lkdGggfHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKHR5cGUgaW4gcmVtb3ZlUGl4ZWwpKSB7XG4gICAgICAgIC8vIOWxnuaAp+WAvOaYr+WQpumcgOimgeWOu+aOiSBweCDljZXkvY3vvIzov5nph4zlgYflrprmraTnsbvnmoTlsZ7mgKflgLzpg73mmK8gcHgg5Li65Y2V5L2N55qEXG4gICAgICAgIHJlbW92ZVBpeGVsW3R5cGVdID0gUElYRUxfUEFUVEVSTi50ZXN0KHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZW1vdmVQaXhlbFt0eXBlXSA/IChwYXJzZUZsb2F0KHZhbHVlKSB8fCAwKSA6IHZhbHVlO1xufVxuXG5jb25zdCBmbG9hdE1hcCA9IHtjc3NGbG9hdDogMSwgc3R5bGVGbG9hdDogMSwgZmxvYXQ6IDF9O1xuXG4vKipcbiAqIOiOt+WPluWFg+e0oOiuoeeul+WQjueahOagt+W8j1xuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZSBET00g6IqC54K5XG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUg5bGe5oCn5ZCNXG4gKiBAcmV0dXJuIHtOdW1iZXJ8T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUgKG5vZGUsIG5hbWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IF9nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgLy8g5aaC5p6c5LiN5oyH5a6a5bGe5oCn5ZCN77yM5YiZ6L+U5Zue5YWo6YOo5YC8XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIG5hbWUgPSBmbG9hdE1hcFtuYW1lXSA/ICdjc3NGbG9hdCcgaW4gbm9kZS5zdHlsZSA/ICdjc3NGbG9hdCcgOiAnc3R5bGVGbG9hdCcgOiBuYW1lO1xuXG4gICAgcmV0dXJuIF9nZXRTdHlsZVZhbHVlKG5vZGUsIG5hbWUsIHN0eWxlLmdldFByb3BlcnR5VmFsdWUoaHlwaGVuYXRlKG5hbWUpKSB8fCBub2RlLnN0eWxlW2NhbWVsY2FzZShuYW1lKV0pO1xufVxuXG4vKipcbiAqIOiuvue9ruWFg+e0oOeahOagt+W8j1xuICogQHBhcmFtIHtFbGVtZW50fSBub2RlICBET00g6IqC54K5XG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWUgIOWxnuaAp+WQje+8jOaIluiAheaYr+S4gOS4quWvueixoe+8jOWMheWQq+WkmuS4quWxnuaAp1xuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZSDlsZ7mgKflgLxcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8g6K6+572u5Y2V5Liq5bGe5oCn5YC8XG4gKiBkb20uc2V0U3R5bGUobW91bnROb2RlLCAnd2lkdGgnLCAxMDApO1xuICogLy8g6K6+572u5aSa5p2h5bGe5oCn5YC8XG4gKiBkb20uc2V0U3R5bGUobW91bnROb2RlLCB7XG4gKiAgICAgd2lkdGg6IDEwMCxcbiAqICAgICBoZWlnaHQ6IDIwMFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZSAobm9kZSwgbmFtZSwgdmFsdWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g5om56YeP6K6+572u5aSa5Liq5YC8XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGVhY2gobmFtZSwgKHZhbCwga2V5KSA9PiBzZXRTdHlsZShub2RlLCBrZXksIHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWUgPSBmbG9hdE1hcFtuYW1lXSA/ICdjc3NGbG9hdCcgaW4gbm9kZS5zdHlsZSA/ICdjc3NGbG9hdCcgOiAnc3R5bGVGbG9hdCcgOiBuYW1lO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBQSVhFTF9QQVRURVJOLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc3R5bGVbY2FtZWxjYXNlKG5hbWUpXSA9IHZhbHVlOyAvLyBJRTggc3VwcG9ydFxuICAgIH1cbn1cblxuLyoqXG4gKiDojrflj5bpu5jorqTnmoTmu5rliqjmnaHlpKflsI9cbiAqIEByZXR1cm4ge09iamVjdH0gd2lkdGgsIGhlaWdodFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsYmFyICgpIHtcbiAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHNldFN0eWxlKHNjcm9sbERpdiwge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICB0b3A6ICctOTk5OXB4J1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxiYXJIZWlnaHQgPSBzY3JvbGxEaXYub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRGl2LmNsaWVudEhlaWdodDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogc2Nyb2xsYmFyV2lkdGgsXG4gICAgICAgIGhlaWdodDogc2Nyb2xsYmFySGVpZ2h0XG4gICAgfTtcbn1cblxuLyoqXG4gKiDojrflj5blhYPntKDot53nprvop4blj6Ppobbpg6jlkozlt6bovrnnmoTlgY/np7vot53nprtcbiAqIEByZXR1cm4ge09iamVjdH0gdG9wLCBsZWZ0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXQgKG5vZGUpIHtcbiAgICBjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB3aW4gPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2RvbS5qcyIsIi8qKlxuICog5bCG5a2X56ym5Liy6L2s5YyW5Li66am85bOw5byP5YaZ5rOVXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciDkvovvvJotd2Via2l0LXRyYW5zaXRpb25cbiAqIEByZXR1cm4ge1N0cmluZ30gICAgIOS+i++8mldlYmtpdFRyYW5zaXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsY2FzZSAoc3RyKSB7XG4gICAgaWYgKCEvLS8udGVzdChzdHIpKSB7XG4gICAgICAgIHJldHVybiBzdHIgfHwgJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoJDAsICQxKSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcbn1cblxuLyoqXG4gKiDlsIbpqbzls7DlvI/lrZfnrKbkuLLovazljJbkuLrov57lrZfnrKblhpnms5VcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIOS+i++8mldlYmtpdFRyYW5zaXRpb25cbiAqIEByZXR1cm4ge1N0cmluZ30gICAgIOS+i++8mi13ZWJraXQtdHJhbnNpdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlwaGVuYXRlIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgJDAgPT4gYC0keyQwLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9zdHJpbmcuanMiLCJpbXBvcnQgJy4uLy4uLy4uL3NyYy9kZW1vLWhlbHBlci9zdHlsZS5qcyc7XG5pbXBvcnQge0RlbW8sIERlbW9Hcm91cCwgaW5pdERlbW99IGZyb20gJy4uLy4uLy4uL3NyYy9kZW1vLWhlbHBlcic7XG5pbXBvcnQgQmFsbG9vbiBmcm9tICcuLi8uLi8uLi9zcmMvYmFsbG9vbic7XG5pbXBvcnQgJy4uLy4uLy4uL3NyYy9iYWxsb29uL3N0eWxlLmpzJztcbmltcG9ydCAnLi4vLi4vLi4vc3JjL2ljb24vc3R5bGUuanMnO1xuXG5jb25zdCBpMThuTWFwID0ge1xuICAgICd6aC1jbic6IHtcbiAgICAgICAgdGl0bGU6ICfmsJTms6HlvLnlsYInLFxuICAgICAgICB0b29sdGlwQ29udGVudDogJ+aPkOekuua1ruWxguWGheWPr+abv+aNouWGheWuuS4nLFxuICAgICAgICBiYWxsb29uQ29udGVudDogJ+awlOazoea1ruWxguWGheWPr+abv+aNouWGheWuuScsXG4gICAgICAgIGFsaWduOiB7XG4gICAgICAgICAgICBsYWJlbDogJ+eureWktOaWueWQkScsXG4gICAgICAgICAgICB2YWx1ZTogJ2InLFxuICAgICAgICAgICAgZW51bTogW1xuICAgICAgICAgICAgICAgIHtsYWJlbDogJ+S4iicsIHZhbHVlOiAnYid9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogJ+S4iycsIHZhbHVlOiAndCd9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogJ+W3picsIHZhbHVlOiAncid9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogJ+WPsycsIHZhbHVlOiAnbCd9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogJ+S4iuW3picsIHZhbHVlOiAnYnInfSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6ICfkuIrlj7MnLCB2YWx1ZTogJ2JsJ30sXG4gICAgICAgICAgICAgICAge2xhYmVsOiAn5LiL5bemJywgdmFsdWU6ICd0cid9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogJ+S4i+WPsycsIHZhbHVlOiAndGwnfSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6ICflt6bkuIonLCB2YWx1ZTogJ3JiJ30sXG4gICAgICAgICAgICAgICAge2xhYmVsOiAn5bem5LiLJywgdmFsdWU6ICdydCd9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogJ+WPs+S4iicsIHZhbHVlOiAnbGInfSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6ICflj7PkuIsnLCB2YWx1ZTogJ2x0J30sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NhYmxlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ+WFs+mXreaMiemSricsXG4gICAgICAgICAgICB2YWx1ZTogJ3RydWUnLFxuICAgICAgICAgICAgZW51bTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICfmmL7npLonLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3RydWUnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+makOiXjycsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmFsc2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSxcbiAgICAnZW4tdXMnOiB7XG4gICAgICAgIHRpdGxlOiAnYmFsbG9vbicsXG4gICAgICAgIHRvb2x0aXBDb250ZW50OiAnVG9vbCB0aXAgY29udGVudCByZXBsYWNlIGhvbGRlci4nLFxuICAgICAgICBiYWxsb29uQ29udGVudDogJ0JhbGxvb24gY29udGVudCByZXBsYWNlIGhvbGRlci4nLFxuICAgICAgICBhbGlnbjoge1xuICAgICAgICAgICAgbGFiZWw6ICdkaXJlY3Rpb24nLFxuICAgICAgICAgICAgdmFsdWU6ICdiJyxcbiAgICAgICAgICAgIGVudW06IFtcbiAgICAgICAgICAgICAgICB7bGFiZWw6ICd0b3AnLCB2YWx1ZTogJ2InfSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6ICdib3R0b20nLCB2YWx1ZTogJ3QnfSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6ICdsZWZ0JywgdmFsdWU6ICdyJ30sXG4gICAgICAgICAgICAgICAge2xhYmVsOiAncmlnaHQnLCB2YWx1ZTogJ2wnfSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6ICd0b3AgbGVmdCcsIHZhbHVlOiAnYnInfSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6ICd0b3AgcmlnaHQnLCB2YWx1ZTogJ2JsJ30sXG4gICAgICAgICAgICAgICAge2xhYmVsOiAnYm90dG9tIGxlZnQnLCB2YWx1ZTogJ3RyJ30sXG4gICAgICAgICAgICAgICAge2xhYmVsOiAnYm90dG9tIHJpZ2h0JywgdmFsdWU6ICd0bCd9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogJ2xlZnQgdG9wJywgdmFsdWU6ICdyYid9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogJ2xlZnQgYm90dG9tJywgdmFsdWU6ICdydCd9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogJ3JpZ2h0IHRvcCcsIHZhbHVlOiAnbGInfSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6ICdyaWdodCBib3R0b20nLCB2YWx1ZTogJ2x0J30sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NhYmxlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ2Nsb3NhYmxlJyxcbiAgICAgICAgICAgIHZhbHVlOiAndHJ1ZScsXG4gICAgICAgICAgICBlbnVtOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ3llcycsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAndHJ1ZSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnbm8nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZhbHNlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNsYXNzIEJhbGxvb25EZW1vIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkZW1vRnVuY3Rpb246IHtcbiAgICAgICAgICAgICAgICBhbGlnbjoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+eureWktOaWueWQkScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYicsXG4gICAgICAgICAgICAgICAgICAgIGVudW06IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ+S4iicsIHZhbHVlOiAnYid9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAn5LiLJywgdmFsdWU6ICd0J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICflt6YnLCB2YWx1ZTogJ3InfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ+WPsycsIHZhbHVlOiAnbCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAn5LiK5bemJywgdmFsdWU6ICdicid9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAn5LiK5Y+zJywgdmFsdWU6ICdibCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAn5LiL5bemJywgdmFsdWU6ICd0cid9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAn5LiL5Y+zJywgdmFsdWU6ICd0bCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAn5bem5LiKJywgdmFsdWU6ICdyYid9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAn5bem5LiLJywgdmFsdWU6ICdydCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAn5Y+z5LiKJywgdmFsdWU6ICdsYid9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAn5Y+z5LiLJywgdmFsdWU6ICdsdCd9LFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG9zYWJsZToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+WFs+mXreaMiemSricsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgIGVudW06IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+aYvuekuicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAn6ZqQ6JePJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZhbHNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub25GdW5jdGlvbkNoYW5nZSA9IHRoaXMub25GdW5jdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGVtb0Z1bmN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYWxpZ246IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5kZW1vRnVuY3Rpb24uYWxpZ24sXG4gICAgICAgICAgICAgICAgICAgIC4uLm5leHRQcm9wcy5hbGlnblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2FibGU6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5kZW1vRnVuY3Rpb24uY2xvc2FibGUsXG4gICAgICAgICAgICAgICAgICAgIC4uLm5leHRQcm9wcy5jbG9zYWJsZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRnVuY3Rpb25DaGFuZ2UoZGVtb0Z1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGVtb0Z1bmN0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHtjb250ZW50fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgZGVtb0Z1bmN0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBhbGlnbiA9IGRlbW9GdW5jdGlvbi5hbGlnbi52YWx1ZTtcbiAgICAgICAgY29uc3QgY2xvc2FibGUgPSBkZW1vRnVuY3Rpb24uY2xvc2FibGUudmFsdWUgPT09ICd0cnVlJztcblxuICAgICAgICByZXR1cm4gKDxEZW1vIHRpdGxlPVwiQmFsbG9vblwiIGRlbW9GdW5jdGlvbj17ZGVtb0Z1bmN0aW9ufSBvbkZ1bmN0aW9uQ2hhbmdlPXt0aGlzLm9uRnVuY3Rpb25DaGFuZ2V9PlxuICAgICAgICAgICAgPERlbW8gdGl0bGU9XCJOb3JtYWxcIj5cbiAgICAgICAgICAgICAgICA8RGVtb0dyb3VwIGxhYmVsPVwiTm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYWxsb29uLklubmVyIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249e2FsaWdufSBjbG9zYWJsZT17Y2xvc2FibGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvQmFsbG9vbi5Jbm5lcj5cbiAgICAgICAgICAgICAgICA8L0RlbW9Hcm91cD5cbiAgICAgICAgICAgIDwvRGVtbz5cbiAgICAgICAgICAgIDxEZW1vIHRpdGxlPVwiUHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIDxEZW1vR3JvdXAgbGFiZWw9XCJOb3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhbGxvb24uSW5uZXIgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj17YWxpZ259IHR5cGU9XCJwcmltYXJ5XCIgY2xvc2FibGU9e2Nsb3NhYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgICAgICA8L0JhbGxvb24uSW5uZXI+XG4gICAgICAgICAgICAgICAgPC9EZW1vR3JvdXA+XG4gICAgICAgICAgICA8L0RlbW8+XG4gICAgICAgIDwvRGVtbz4pO1xuICAgIH1cbn1cblxuY2xhc3MgVG9vbHRpcERlbW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRlbW9GdW5jdGlvbjoge1xuICAgICAgICAgICAgICAgIGFsaWduOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAn566t5aS05pa55ZCRJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdiJyxcbiAgICAgICAgICAgICAgICAgICAgZW51bTogW1xuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAn5LiKJywgdmFsdWU6ICdiJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICfkuIsnLCB2YWx1ZTogJ3QnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ+W3picsIHZhbHVlOiAncid9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAn5Y+zJywgdmFsdWU6ICdsJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICfkuIrlt6YnLCB2YWx1ZTogJ2JyJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICfkuIrlj7MnLCB2YWx1ZTogJ2JsJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICfkuIvlt6YnLCB2YWx1ZTogJ3RyJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICfkuIvlj7MnLCB2YWx1ZTogJ3RsJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICflt6bkuIonLCB2YWx1ZTogJ3JiJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICflt6bkuIsnLCB2YWx1ZTogJ3J0J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICflj7PkuIonLCB2YWx1ZTogJ2xiJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICflj7PkuIsnLCB2YWx1ZTogJ2x0J30sXG4gICAgICAgICAgICAgICAgICAgIF0uc2xpY2UoMCwgOClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vbkZ1bmN0aW9uQ2hhbmdlID0gdGhpcy5vbkZ1bmN0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkZW1vRnVuY3Rpb246IHtcbiAgICAgICAgICAgICAgICBhbGlnbjoge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmRlbW9GdW5jdGlvbi5hbGlnbixcbiAgICAgICAgICAgICAgICAgICAgLi4ubmV4dFByb3BzLmFsaWduXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkZ1bmN0aW9uQ2hhbmdlKGRlbW9GdW5jdGlvbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRlbW9GdW5jdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7Y29udGVudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGRlbW9GdW5jdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgYWxpZ24gPSBkZW1vRnVuY3Rpb24uYWxpZ24udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuICg8RGVtbyB0aXRsZT1cIlRvb2x0aXBcIiBkZW1vRnVuY3Rpb249e2RlbW9GdW5jdGlvbn0gb25GdW5jdGlvbkNoYW5nZT17dGhpcy5vbkZ1bmN0aW9uQ2hhbmdlfT5cbiAgICAgICAgICAgIDxEZW1vIHRpdGxlPVwiVG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vR3JvdXAgbGFiZWw9XCJOb3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhbGxvb24uSW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249e2FsaWdufVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9CYWxsb29uLklubmVyPlxuICAgICAgICAgICAgICAgIDwvRGVtb0dyb3VwPlxuICAgICAgICAgICAgPC9EZW1vPlxuICAgICAgICA8L0RlbW8+KTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcmVuZGVyKGkxOG4pIHtcbiAgICBjb25zdCB0b29sdGlwQ29udGVudFRleHQgPSBpMThuLnRvb2x0aXBDb250ZW50O1xuICAgIGNvbnN0IGJhbGxvb25Db250ZW50VGV4dCA9IGkxOG4uYmFsbG9vbkNvbnRlbnQ7XG5cbiAgICByZXR1cm4gUmVhY3RET00ucmVuZGVyKChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgyPntpMThuLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8QmFsbG9vbkRlbW9cbiAgICAgICAgICAgICAgICBjb250ZW50PXtiYWxsb29uQ29udGVudFRleHR9XG4gICAgICAgICAgICAgICAgYWxpZ249e2kxOG4uYWxpZ259XG4gICAgICAgICAgICAgICAgY2xvc2FibGU9e2kxOG4uY2xvc2FibGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRvb2x0aXBEZW1vXG4gICAgICAgICAgICAgICAgY29udGVudD17dG9vbHRpcENvbnRlbnRUZXh0fVxuICAgICAgICAgICAgICAgIGFsaWduPXtpMThuLmFsaWdufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpKTtcbn1cblxud2luZG93LnJlbmRlckRlbW8gPSBmdW5jdGlvbiAobGFuZyA9ICdlbi11cycpIHtcbiAgICByZW5kZXIoaTE4bk1hcFtsYW5nXSk7XG59O1xuXG53aW5kb3cucmVuZGVyRGVtbygpO1xuXG5cbmluaXREZW1vKCdiYWxsb29uJyk7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZG9jcy9iYWxsb29uL3RoZW1lL2luZGV4LmpzeCIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlbW8taGVscGVyL3N0eWxlLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZW1vLWhlbHBlci9tYWluLnNjc3MiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xuXG5jb25zdCBDT0wgPSAne0NvbH0nO1xuY29uc3QgTEFCRUwgPSAne0xhYmVsfSc7XG5jb25zdCBUSVRMRSA9ICd7VGl0bGV9JztcbmNvbnN0IHsgc2hvd1R5cGUgPSAnbm9uZScsIGRlbW9JdGVtcyA9IHt9IH0gPSB3aW5kb3cuREVNT19WQVJJQUJMRSB8fCB7fTtcbmNvbnN0IGNhbGxiYWNrID0gW107XG5jb25zdCBDT09MID0ge307XG5jb25zdCBGVU4gPSB7fTtcbmxldCBkZW1vQ291bnQgPSAwO1xuXG4vLyBUT0RPOiB7IGZ1bmN0aW9ucywgc3RhdGVtZW50cywgc2l6ZXMgfVxuXG5mdW5jdGlvbiBjb252ZXJ0QXJyYXlUb09iamVjdChkZW1vRnVuY3Rpb24pIHtcbiAgICBjb25zdCBvYmpEZW1vRnVuY3Rpb24gPSB7fTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZW1vRnVuY3Rpb24pKSB7XG4gICAgICAgIGRlbW9GdW5jdGlvbi5mb3JFYWNoKGRlbW8gPT4ge1xuICAgICAgICAgICAgb2JqRGVtb0Z1bmN0aW9uW2RlbW8ubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGRlbW8ubGFiZWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRlbW8udmFsdWUsXG4gICAgICAgICAgICAgICAgZW51bTogZGVtby5lbnVtLm1hcChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSAn5pivJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9ICflkKYnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JqRGVtb0Z1bmN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZGVtb0Z1bmN0aW9uO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0T2JqZWN0VG9BcnJheShkZW1vRnVuY3Rpb24pIHtcbiAgICBjb25zdCBhcnJheURlbW8gPSBbXTtcbiAgICBPYmplY3Qua2V5cyhkZW1vRnVuY3Rpb24pLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbW8gPSBkZW1vRnVuY3Rpb25bbmFtZV07XG4gICAgICAgIGFycmF5RGVtby5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBsYWJlbDogZGVtby5sYWJlbCxcbiAgICAgICAgICAgIHZhbHVlOiBkZW1vLnZhbHVlLFxuICAgICAgICAgICAgZW51bTogZGVtby5lbnVtLm1hcChlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheURlbW87XG59XG5cbi8qKlxuICogWHl6QWJjIC0+IHh5ei1hYmNcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIg6am85bOw5a2X56ym5LiyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IOi+k+WHuuinhOiMg+WMlueahOWtl+espuS4slxuICovXG5mdW5jdGlvbiBkZUNhbWVsaXplKHN0cikge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHIubWF0Y2goLyhbQS1aXVthLXpdezIsfSkvZyk7XG4gICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgLy8gcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcy50b1N0cmluZygpXG4gICAgICAgIC5yZXBsYWNlKCcsJywgJy0nKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiDmoLzlvI/ljJbor43nu4QgJ0FiY1pleCBYeXpZeHgnIC0+ICdhYmMtemV4IHh5ei15eHgnXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIOmpvOWzsOivjee7hFxuICogQHJldHVybiB7U3RyaW5nfSDovpPlh7rmoLzlvI/ljJbnmoTor43nu4RcbiAqL1xuZnVuY3Rpb24gZm9ybWF0VGl0bGUoc3RyKSB7XG4gICAgaWYgKCFzdHIgfHwgdHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnNwbGl0KCcgJykubWFwKGRlQ2FtZWxpemUpLmpvaW4oJyAnKTtcbn1cblxuY2xhc3MgRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0RlbW8nXG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwYXJlbnREaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVmYXVsdEJhY2tncm91bmQ6IFByb3BUeXBlcy5vbmVPZihbJ2RhcmsnLCAnbGlnaHQnXSksXG4gICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBibG9jazogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlbW9JbmRleDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVtb0l0ZW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBkZW1vU2NvcGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIGRlbW9UaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc2hvd1R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN3aXRjaFZpc2libGU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzd2l0Y2hCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZGVtb0Z1bmN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBvbkZ1bmN0aW9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGVmYXVsdEJhY2tncm91bmQ6ICdsaWdodCcsXG4gICAgICAgIGJsb2NrOiBmYWxzZSxcbiAgICAgICAgb25GdW5jdGlvbkNoYW5nZTogKCkgPT4ge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkZW1vSW5kZXg6IHByb3BzLmRlbW9JbmRleCB8fCBgJHtkZW1vQ291bnQrK31gLFxuICAgICAgICAgICAgZGVtb0l0ZW1zOiBwcm9wcy5kZW1vSXRlbXMgfHwgZGVtb0l0ZW1zLFxuICAgICAgICAgICAgc2hvd1R5cGU6IHByb3BzLnNob3dUeXBlIHx8IHNob3dUeXBlLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcHJvcHMuZGVmYXVsdEJhY2tncm91bmQsXG4gICAgICAgICAgICBpbml0RGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXByb3BzLmRlbW9JbmRleCkge1xuICAgICAgICAgICAgY2FsbGJhY2sucHVzaCh0aGlzLnNldFZpc2libGUuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoJ2RlZmF1bHRCYWNrZ3JvdW5kJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5leHRQcm9wcy5kZWZhdWx0QmFja2dyb3VuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRWaXNpYmxlKGRhdGEpIHtcbiAgICAgICAgZGVsZXRlIGRhdGEuZGVtb0luZGV4O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgc3dpdGNoVmlzaWJsZShkZW1vSW5kZXgpIHtcbiAgICAgICAgY29uc3QgZGVtb0l0ZW1zID0gdGhpcy5wcm9wcy5kZW1vSXRlbXMgfHwgdGhpcy5zdGF0ZS5kZW1vSXRlbXM7XG5cbiAgICAgICAgLy8gVElQOiDmuIXnkIbml6DmlYjmlbDmja5cbiAgICAgICAgT2JqZWN0LmtleXMoZGVtb0l0ZW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoZGVtb0l0ZW1zW2tleV0uZXhpc3RlZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkZW1vSXRlbXNba2V5XS5leGlzdGVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZGVtb0l0ZW1zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghZGVtb0l0ZW1zW2RlbW9JbmRleF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgaGlkZGVuID0gZmFsc2UgfSA9IGRlbW9JdGVtc1tkZW1vSW5kZXhdO1xuICAgICAgICBjb25zdCBjaGlsZEtleXMgPSBPYmplY3Qua2V5cyhkZW1vSXRlbXMpLmZpbHRlcihrZXkgPT4gbmV3IFJlZ0V4cChgXiR7ZGVtb0luZGV4LnJlcGxhY2UoL1xcKi8sICcoXFxcXCp8XFxcXGQrKScpfWApLnRlc3Qoa2V5KSk7XG5cbiAgICAgICAgLy8gVElQOiDmm7TmlrDlvZPliY3mjqfliLblmahcbiAgICAgICAgZGVtb0l0ZW1zW2RlbW9JbmRleF0uaGlkZGVuID0gIWhpZGRlbjtcbiAgICAgICAgLy8gVElQOiDmm7TmlrDkuIvnuqfmjqfliLblmahcbiAgICAgICAgY2hpbGRLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignKicpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBkZW1vSXRlbXNba2V5XS5oaWRkZW4gPSAhaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVElQOiDmm7TmlrAgREVNT1xuICAgICAgICBjaGlsZEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCcqJykgPCAwKSB7XG4gICAgICAgICAgICAgICAgZGVtb0l0ZW1zW2tleV0uaGlkZGVuID0gKGRlbW9JdGVtc1trZXkucmVwbGFjZSgvXFxkKyQvLCAnKicpXSB8fCB7fSkuaGlkZGVuIHx8IChkZW1vSXRlbXNba2V5LnJlcGxhY2UoL1xcZCstKFxcZCspJC8sICcqLSQxJyldIHx8IHt9KS5oaWRkZW4gfHwgIWhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRJUDog5ZCM5q2l5LiK57qn5o6n5Yi25ZmoXG4gICAgICAgIHRoaXMuc3luY1Zpc2libGUoZGVtb0luZGV4LCBkZW1vSXRlbXMpO1xuXG4gICAgICAgIHNlbmRNZXNzYWdlKHdpbmRvdy5jb21wTmFtZSwgJ2Rpc3BsYXllZCcsIHtcbiAgICAgICAgICAgIGRlbW9JbmRleCxcbiAgICAgICAgICAgIGRlbW9JdGVtc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzeW5jVmlzaWJsZShkZW1vSW5kZXgsIGRlbW9JdGVtcykge1xuICAgICAgICBsZXQgaW5kZXggPSBkZW1vSW5kZXgucmVwbGFjZSgvKC0oXFwqfFxcZCspKXsyfSQvLCAnLVxcXFxkKy1cXFxcZCsnKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IGRlbW9JbmRleCkge1xuICAgICAgICAgICAgY29uc3QgaXRlbUtleXMgPSBPYmplY3Qua2V5cyhkZW1vSXRlbXMpLmZpbHRlcihrZXkgPT4gbmV3IFJlZ0V4cChgXiR7aW5kZXh9YCkudGVzdChrZXkpICYmIGtleS5pbmRleE9mKCcqJykgPCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbiA9IGRlbW9JdGVtc1tpdGVtS2V5c1swXSB8fCBkZW1vSW5kZXhdLmhpZGRlbjtcbiAgICAgICAgICAgIGxldCBzYW1lVmFsdWUgPSB0cnVlO1xuXG4gICAgICAgICAgICBpdGVtS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhZGVtb0l0ZW1zW2tleV0uaGlkZGVuICE9PSBoaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtZVZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGluZGV4ID0gZGVtb0luZGV4LnJlcGxhY2UoLy0oXFwqfFxcZCspLShcXCp8XFxkKykkLywgJy0qJyk7XG5cbiAgICAgICAgICAgIGRlbW9JdGVtc1tpbmRleF0uaGlkZGVuID0gc2FtZVZhbHVlICYmIGhpZGRlbiB8fCBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5zeW5jVmlzaWJsZShpbmRleCwgZGVtb0l0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaEJhY2tncm91bmQoKSB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSB0aGlzLnN0YXRlLmJhY2tncm91bmQgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkZ1bmN0aW9uQ2hhbmdlKG5hbWUsIGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVtb0Z1bmN0aW9uID0gY29udmVydEFycmF5VG9PYmplY3QodGhpcy5wcm9wcy5kZW1vRnVuY3Rpb24pO1xuXG4gICAgICAgIGxldCBuZXh0RGVtb0Z1bmN0aW9uID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGRlbW9GdW5jdGlvbikuZm9yRWFjaCgoZnVuY05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZ1bmMgPSBkZW1vRnVuY3Rpb25bZnVuY05hbWVdO1xuXG4gICAgICAgICAgICBpZiAoZnVuY05hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBmdW5jLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHREZW1vRnVuY3Rpb25bZnVuY05hbWVdID0gZnVuYztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5kZW1vRnVuY3Rpb24pKSB7XG4gICAgICAgICAgICBuZXh0RGVtb0Z1bmN0aW9uID0gY29udmVydE9iamVjdFRvQXJyYXkobmV4dERlbW9GdW5jdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uRnVuY3Rpb25DaGFuZ2UobmV4dERlbW9GdW5jdGlvbik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBpc0RlbW9TaGFwZSA9IGZhbHNlO1xuICAgICAgICBsZXQgaGFzRGVtb0xldmVsID0gZmFsc2U7XG4gICAgICAgIGxldCBjaGlsZHJlbjtcblxuICAgICAgICBjb25zdCBibG9jayA9IHRoaXMucHJvcHMuYmxvY2sgPyAnYmxvY2snIDogbnVsbDtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnByb3BzLmRlbW9JbmRleCB8fCB0aGlzLnN0YXRlLmRlbW9JbmRleDtcbiAgICAgICAgY29uc3QgZGVtb0l0ZW1zID0gdGhpcy5wcm9wcy5kZW1vSXRlbXMgfHwgdGhpcy5zdGF0ZS5kZW1vSXRlbXM7XG4gICAgICAgIGNvbnN0IGRlbW9TY29wZSA9IHRoaXMucHJvcHMuZGVtb1Njb3BlIHx8IHRoaXM7XG4gICAgICAgIGNvbnN0IGRlbW9UaXRsZSA9IHRoaXMucHJvcHMuZGVtb1RpdGxlID8gYCR7dGhpcy5wcm9wcy5kZW1vVGl0bGV9IC0+ICR7dGhpcy5wcm9wcy50aXRsZSB8fCBUSVRMRX1gIDogKHRoaXMucHJvcHMudGl0bGUgfHwgVElUTEUpO1xuICAgICAgICBjb25zdCBzaG93VHlwZSA9IHRoaXMucHJvcHMuc2hvd1R5cGUgfHwgdGhpcy5zdGF0ZS5zaG93VHlwZTtcbiAgICAgICAgY29uc3Qgc3dpdGNoVmlzaWJsZSA9IHRoaXMucHJvcHMuc3dpdGNoVmlzaWJsZSB8fCB0aGlzLnN3aXRjaFZpc2libGU7XG4gICAgICAgIGNvbnN0IHsgYmFja2dyb3VuZCwgaW5pdERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBzd2l0Y2hCYWNrZ3JvdW5kLCBzdHlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZGVtb0Z1bmN0aW9uID0gY29udmVydEFycmF5VG9PYmplY3QodGhpcy5wcm9wcy5kZW1vRnVuY3Rpb24pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpc0RlbW9TaGFwZSA9IHRoaXMucHJvcHMucGFyZW50RGlzcGxheU5hbWUgIT09ICdEZW1vJztcblxuICAgICAgICAgICAgbGV0IGZpcnN0O1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IHRoaXMucHJvcHMuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGFzRGVtb0xldmVsID0gZmlyc3QudHlwZS5kaXNwbGF5TmFtZSA9PT0gJ0RlbW8nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5rOo5YWlIGRlbW9GdW5jdGlvbiDliLAgd2luZG93LkNPT0xcbiAgICAgICAgaWYgKGlzRGVtb1NoYXBlICYmIHRoaXMucHJvcHMudGl0bGUgJiYgZGVtb0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICBGVU5bdGhpcy5wcm9wcy50aXRsZV0gPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRlbW9GdW5jdGlvbikuZm9yRWFjaCgoZnVuY05hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jID0gZGVtb0Z1bmN0aW9uW2Z1bmNOYW1lXTtcbiAgICAgICAgICAgICAgICBmdW5jLm5hbWUgPSBmdW5jTmFtZTtcbiAgICAgICAgICAgICAgICBGVU5bdGhpcy5wcm9wcy50aXRsZV1bZnVuY05hbWVdID0gZnVuYztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlbW9TaGFwZUxldmVsO1xuICAgICAgICBpZiAoKGlzRGVtb1NoYXBlICYmICFoYXNEZW1vTGV2ZWwpIHx8ICFpc0RlbW9TaGFwZSkge1xuICAgICAgICAgICAgZGVtb1NoYXBlTGV2ZWwgPSBkZW1vVGl0bGUuc3BsaXQoJyAtPiAnKS5qb2luKCdfJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgICAgICBibG9jazogdGhpcy5wcm9wcy5ibG9jayxcbiAgICAgICAgICAgICAgICAgICAgZGVtb0luZGV4OiBgJHtpbmRleH0tJHtpfWAsXG4gICAgICAgICAgICAgICAgICAgIGRlbW9JdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgZGVtb1Njb3BlLFxuICAgICAgICAgICAgICAgICAgICBkZW1vVGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlbW9TaGFwZUxldmVsLFxuICAgICAgICAgICAgICAgICAgICBzaG93VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVmlzaWJsZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNoaWxkcmVuID0gKFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2Jsb2NrfT5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudERpc3BsYXlOYW1lOiAnRGVtbycsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRCYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgICAgICBkZW1vSW5kZXg6IGAke2luZGV4fS0ke2l9YCxcbiAgICAgICAgICAgICAgICAgICAgZGVtb0l0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBkZW1vU2NvcGUsXG4gICAgICAgICAgICAgICAgICAgIGRlbW9UaXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVtb0Z1bmN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzaG93VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVmlzaWJsZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmdW5jdGlvblNlbGVjdCA9IFtdO1xuICAgICAgICBpZiAoaXNEZW1vU2hhcGUgJiYgZGVtb0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkZW1vRnVuY3Rpb24pLmZvckVhY2goKGZ1bmNOYW1lLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnVuYyA9IGRlbW9GdW5jdGlvbltmdW5jTmFtZV07XG4gICAgICAgICAgICAgICAgY29uc3QgdG1wUmFkaW8gPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbWQ1KGAke2Z1bmNOYW1lfS0ke2luaXREYXRlfWApO1xuXG4gICAgICAgICAgICAgICAgZnVuYy5lbnVtLmZvckVhY2goKGVudW1PYmosIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGVudW1PYmoudmFsdWUudG9TdHJpbmcoKSA9PT0gZnVuYy52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0bXBSYWRpby5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGtleT17an0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9e25hbWV9IGRhdGEtZnVuYz17ZnVuY05hbWV9IHZhbHVlPXtlbnVtT2JqLnZhbHVlLnRvU3RyaW5nKCl9IG9uQ2hhbmdlPXt0aGlzLm9uRnVuY3Rpb25DaGFuZ2UuYmluZCh0aGlzLCBmdW5jTmFtZSl9IGRlZmF1bHRDaGVja2VkPXtjaGVja2VkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbnVtT2JqLmxhYmVsLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25TZWxlY3QucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB0aXRsZT17ZnVuYy5sYWJlbH0+e2Z1bmMubGFiZWx9Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0bXBSYWRpb31cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZW1vSW5kZXggPSBgJHtpbmRleH0tKmA7XG4gICAgICAgIGNvbnN0IHsgaGlkZGVuID0gZmFsc2UgfSA9IGRlbW9JdGVtc1tkZW1vSW5kZXhdIHx8IHt9O1xuXG4gICAgICAgIGlmIChzaG93VHlwZSA9PT0gJ2hpZGRlbicgfHwgIWhpZGRlbikge1xuICAgICAgICAgICAgaWYgKCFkZW1vSXRlbXNbZGVtb0luZGV4XSkge1xuICAgICAgICAgICAgICAgIGRlbW9JdGVtc1tkZW1vSW5kZXhdID0ge1xuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGVtb1RpdGxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVtb0l0ZW1zW2RlbW9JbmRleF0udGl0bGUgPSBkZW1vVGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZW1vSXRlbXNbZGVtb0luZGV4XS5leGlzdGVkID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICBjb25zdCB3cmFwQ2xzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgJ2RlbW8gcGMnOiB0cnVlLFxuICAgICAgICAgICAgICAgIFtgZGVtby0ke2JhY2tncm91bmR9YF06IGJhY2tncm91bmQsXG4gICAgICAgICAgICAgICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBzd2l0Y2hDbHMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAnZGVtby1zd2l0Y2gnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdkZW1vLXN3aXRjaC1vbic6IGJhY2tncm91bmQgPT09ICdkYXJrJyxcbiAgICAgICAgICAgICAgICAnZGVtby1zd2l0Y2gtb2ZmJzogYmFja2dyb3VuZCA9PT0gJ2xpZ2h0J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbVByb3BzID0ge307XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50aXRsZSkge1xuICAgICAgICAgICAgICAgIC8vIOazqOWFpSBkZW1vIOeahOagh+mimO+8jOeUqOS6juaMiemcgOmAieWPllxuICAgICAgICAgICAgICAgIGN1c3RvbVByb3BzLnRpdGxlID0gZm9ybWF0VGl0bGUodGhpcy5wcm9wcy50aXRsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBDbHN9IHN0eWxlPXtzdHlsZX0gey4uLmN1c3RvbVByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMudGl0bGUgfHwgVElUTEV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dUeXBlID09PSAnaGlkZGVuJyAmJiA8RGlzcGxheVN3aXRjaCBoaWRkZW49e2hpZGRlbn0gb25DbGljaz17c3dpdGNoVmlzaWJsZS5iaW5kKGRlbW9TY29wZSwgZGVtb0luZGV4KX0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNEZW1vU2hhcGUgJiYgc3dpdGNoQmFja2dyb3VuZCA/IDxkaXYgY2xhc3NOYW1lPVwiZGVtby1zd2l0Y2gtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuiDjOaZr+minOiJsjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3dpdGNoQ2xzfSBvbkNsaWNrPXt0aGlzLnN3aXRjaEJhY2tncm91bmQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1zd2l0Y2gtdHJpZ2dlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tc3dpdGNoLWNoaWxkcmVuXCI+e2JhY2tncm91bmQgPT09ICdsaWdodCcgPyAn5rexJyA6ICfmtYUnfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtpc0RlbW9TaGFwZSAmJiBkZW1vRnVuY3Rpb24gPyA8dWwgY2xhc3NOYW1lPVwiZGVtby1zZWxlY3RcIj57ZnVuY3Rpb25TZWxlY3R9PC91bD4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xuY2xhc3MgRGVtb0dyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRGVtb0dyb3VwJ1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gICAgICAgIGJsb2NrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZW1vSW5kZXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlbW9JdGVtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgZGVtb1Njb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBkZW1vVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlbW9TaGFwZUxldmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzaG93VHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3dpdGNoVmlzaWJsZTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBibG9jazogZmFsc2UsXG4gICAgICAgIGhlaWdodDogJydcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZGVtb0luZGV4OiBpbmRleCwgZGVtb0l0ZW1zID0ge30sIGRlbW9TY29wZSA9IHRoaXMsIHNob3dUeXBlLCBzd2l0Y2hWaXNpYmxlID0gKCkgPT4geyB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBkZW1vSW5kZXggPSBgJHtpbmRleH0tKmA7XG4gICAgICAgIGNvbnN0IGRlbW9UaXRsZSA9IGAke3RoaXMucHJvcHMuZGVtb1RpdGxlfSAtPiAke3RoaXMucHJvcHMubGFiZWwgfHwgTEFCRUx9YDtcbiAgICAgICAgY29uc3QgZGVtb1NoYXBlTGV2ZWwgPSB0aGlzLnByb3BzLmRlbW9TaGFwZUxldmVsO1xuICAgICAgICBjb25zdCB7IGhpZGRlbiA9IGZhbHNlIH0gPSBkZW1vSXRlbXNbZGVtb0luZGV4XSB8fCB7fTtcblxuICAgICAgICAvLyDop6PmnpBcbiAgICAgICAgaWYgKGRlbW9TaGFwZUxldmVsKSB7XG4gICAgICAgICAgICBpZiAoIUNPT0xbZGVtb1NoYXBlTGV2ZWxdKSB7XG4gICAgICAgICAgICAgICAgQ09PTFtkZW1vU2hhcGVMZXZlbF0gPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgQ09PTFtkZW1vU2hhcGVMZXZlbF0uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ3N0YXRlbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBDT09MW2RlbW9TaGFwZUxldmVsXVtpbmRleF0uZW51bS5wdXNoKHRoaXMucHJvcHMubGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ09PTFtkZW1vU2hhcGVMZXZlbF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3RhdGVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW06IFt0aGlzLnByb3BzLmxhYmVsXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDojrflvpfpu5jorqTlgLxcbiAgICAgICAgY29uc3QgZGVmYXVsdENvb2wgPSB7fTtcbiAgICAgICAgZGVmYXVsdENvb2wudGl0bGUgPSB0aGlzLnByb3BzLmRlbW9UaXRsZTtcbiAgICAgICAgZGVmYXVsdENvb2wuc2hhcGUgPSBkZW1vU2hhcGVMZXZlbDtcbiAgICAgICAgZGVmYXVsdENvb2wuc3RhdGVtZW50ID0gdGhpcy5wcm9wcy5sYWJlbDtcbiAgICAgICAgQ09PTFtkZW1vU2hhcGVMZXZlbF0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q29vbFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGRlbW9JbmRleDogaW5kZXgsIGRlbW9JdGVtcyA9IHt9LCBzaG93VHlwZSwgYmxvY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCBkZW1vSW5kZXggPSBgJHtpbmRleH0tJHtpfWA7XG4gICAgICAgICAgICBjb25zdCB7IGhpZGRlbiA9IGZhbHNlIH0gPSBkZW1vSXRlbXNbZGVtb0luZGV4XSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAnZGVtby1pdGVtJzogIWhpZGRlbixcbiAgICAgICAgICAgICAgICAnZGVtby1pdGVtLWhpZGRlbic6IGhpZGRlbixcbiAgICAgICAgICAgICAgICBibG9jazogYmxvY2tcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBDT09MW2RlbW9TaGFwZUxldmVsXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ3NpemUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb29sLnNpemUgPSBpdGVtLmVudW1baV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChzaG93VHlwZSA9PT0gJ2hpZGRlbicgfHwgIWhpZGRlbikge1xuICAgICAgICAgICAgICAgIGlmICghZGVtb0l0ZW1zW2RlbW9JbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVtb0l0ZW1zW2RlbW9JbmRleF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbW9JdGVtc1tkZW1vSW5kZXhdLmV4aXN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmVDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgICAgICAnZGF0YS1jb29sJzogSlNPTi5zdHJpbmdpZnkoZGVmYXVsdENvb2wpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid3JhcFwiIHN0eWxlPXt7IGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgbnVsbCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbG9uZUNoaWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzaG93VHlwZSA9PT0gJ2hpZGRlbicgfHwgIWhpZGRlbikge1xuICAgICAgICAgICAgaWYgKCFkZW1vSXRlbXNbZGVtb0luZGV4XSkge1xuICAgICAgICAgICAgICAgIGRlbW9JdGVtc1tkZW1vSW5kZXhdID0ge1xuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGVtb1RpdGxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVtb0l0ZW1zW2RlbW9JbmRleF0udGl0bGUgPSBkZW1vVGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZW1vSXRlbXNbZGVtb0luZGV4XS5leGlzdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiZGVtby1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbCA9PT0gZmFsc2UgPyBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsYWJlbFwiIHN0eWxlPXt7IGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfHwgbnVsbCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5sYWJlbCB8fCBMQUJFTH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dUeXBlID09PSAnaGlkZGVuJyAmJiA8RGlzcGxheVN3aXRjaCBoaWRkZW49e2hpZGRlbn0gb25DbGljaz17c3dpdGNoVmlzaWJsZS5iaW5kKGRlbW9TY29wZSwgZGVtb0luZGV4KX0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPn1cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIERlbW9IZWFkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRGVtb0hlYWQnXG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjb2xzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBkZW1vSW5kZXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlbW9JdGVtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgZGVtb1Njb3BlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBkZW1vVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlbW9TaGFwZUxldmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzaG93VHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3dpdGNoVmlzaWJsZTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb2xzOiBbXVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMucHJvcHMuY29scy5tYXAoKGNvbCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBkZW1vSW5kZXg6IGluZGV4LCBkZW1vSXRlbXMgPSB7fSwgZGVtb1Njb3BlID0gdGhpcywgc2hvd1R5cGUsIHN3aXRjaFZpc2libGUgPSAoKSA9PiB7IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCBkZW1vSW5kZXggPSBgJHtpbmRleC5yZXBsYWNlKC8tXFxkKyQvLCAnLSonKX0tJHtpfWA7XG4gICAgICAgICAgICBjb25zdCBkZW1vVGl0bGUgPSBgJHt0aGlzLnByb3BzLmRlbW9UaXRsZX0gLT4gJHtjb2wgfHwgQ09MfWA7XG4gICAgICAgICAgICBjb25zdCBkZW1vU2hhcGVMZXZlbCA9IHRoaXMucHJvcHMuZGVtb1NoYXBlTGV2ZWw7XG4gICAgICAgICAgICBjb25zdCB7IGhpZGRlbiA9IGZhbHNlIH0gPSBkZW1vSXRlbXNbZGVtb0luZGV4XSB8fCB7fTtcblxuICAgICAgICAgICAgLy8g6Kej5p6QXG4gICAgICAgICAgICBpZiAoZGVtb1NoYXBlTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUNPT0xbZGVtb1NoYXBlTGV2ZWxdKSB7XG4gICAgICAgICAgICAgICAgICAgIENPT0xbZGVtb1NoYXBlTGV2ZWxdID0gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIENPT0xbZGVtb1NoYXBlTGV2ZWxdLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSAnc2l6ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPT0xbZGVtb1NoYXBlTGV2ZWxdW2luZGV4XS5lbnVtLnB1c2goY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDT09MW2RlbW9TaGFwZUxldmVsXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2l6ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bTogW2NvbF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hvd1R5cGUgPT09ICdoaWRkZW4nIHx8ICFoaWRkZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRlbW9JdGVtc1tkZW1vSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbW9JdGVtc1tkZW1vSW5kZXhdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkZW1vVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZW1vSXRlbXNbZGVtb0luZGV4XS50aXRsZSA9IGRlbW9UaXRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVtb0l0ZW1zW2RlbW9JbmRleF0uZXhpc3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2wgfHwgQ09MfVxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dUeXBlID09PSAnaGlkZGVuJyAmJiA8RGlzcGxheVN3aXRjaCBoaWRkZW49e2hpZGRlbn0gb25DbGljaz17c3dpdGNoVmlzaWJsZS5iaW5kKGRlbW9TY29wZSwgZGVtb0luZGV4KX0gLz59XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiZGVtby1oZWFkXCI+XG4gICAgICAgICAgICAgICAgPHRkIC8+XG4gICAgICAgICAgICAgICAge2NvbHN9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgRGlzcGxheVN3aXRjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGhpZGRlbjogUHJvcFR5cGVzLmJvb2xcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSB0aGlzLnByb3BzLmhpZGRlbiA/ICdoaWRlJyA6ICdicm93c2UnO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BkZW1vLWljb24gZGVtby1pY29uLSR7c3RhdHVzfWB9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+PC9pPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICBpZiAoKGV2ZW50Lm9yaWdpbiAhPT0gbG9jYXRpb24ub3JpZ2luKSB8fCAhZGF0YSB8fCBkYXRhLmZyb20gIT09ICdjb25maWcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnZGlzcGxheWVkJykge1xuICAgICAgICAgICAgY2FsbGJhY2suZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YS5ib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNvbXBOYW1lLCB0eXBlLCBib2R5KSB7XG4gICAgY29uc3QgcGFyZW50ID0gd2luZG93LnBhcmVudDtcblxuICAgIGlmIChwYXJlbnQgIT09IHdpbmRvdykge1xuICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZnJvbTogJ2RlbW8nLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICBjb21wTmFtZTogY29tcE5hbWVcbiAgICAgICAgfSwgJyonKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXREZW1vKGNvbXBOYW1lKSB7XG4gICAgd2luZG93LmNvbXBOYW1lID0gY29tcE5hbWU7XG5cbiAgICAvLyDov73liqDkv6Hmga/liLDpobXpnaJcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jywge1xuICAgICAgICBpZDogJ2Z1c2lvbi1jb29sJ1xuICAgIH0pO1xuICAgIGluZm8uaW5uZXJIVE1MID0gYHdpbmRvdy5DT09MID0geycke2NvbXBOYW1lfSc6ICR7SlNPTi5zdHJpbmdpZnkoQ09PTCl9LCAnZnVuY3Rpb25zJzogJHtKU09OLnN0cmluZ2lmeShGVU4pfX1gO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICBzZW5kTWVzc2FnZShjb21wTmFtZSwgJ2xvYWRlZCcpO1xufVxuXG5cbmV4cG9ydCB7IERlbW8sIERlbW9IZWFkLCBEZW1vR3JvdXAsIGluaXREZW1vIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVtby1oZWxwZXIvaW5kZXguanN4IiwiKGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGNyeXB0ID0gcmVxdWlyZSgnY3J5cHQnKSxcclxuICAgICAgdXRmOCA9IHJlcXVpcmUoJ2NoYXJlbmMnKS51dGY4LFxyXG4gICAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpLFxyXG4gICAgICBiaW4gPSByZXF1aXJlKCdjaGFyZW5jJykuYmluLFxyXG5cclxuICAvLyBUaGUgY29yZVxyXG4gIG1kNSA9IGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAvLyBDb252ZXJ0IHRvIGJ5dGUgYXJyYXlcclxuICAgIGlmIChtZXNzYWdlLmNvbnN0cnVjdG9yID09IFN0cmluZylcclxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGluZyA9PT0gJ2JpbmFyeScpXHJcbiAgICAgICAgbWVzc2FnZSA9IGJpbi5zdHJpbmdUb0J5dGVzKG1lc3NhZ2UpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgbWVzc2FnZSA9IHV0Zjguc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgIGVsc2UgaWYgKGlzQnVmZmVyKG1lc3NhZ2UpKVxyXG4gICAgICBtZXNzYWdlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWVzc2FnZSwgMCk7XHJcbiAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UudG9TdHJpbmcoKTtcclxuICAgIC8vIGVsc2UsIGFzc3VtZSBieXRlIGFycmF5IGFscmVhZHlcclxuXHJcbiAgICB2YXIgbSA9IGNyeXB0LmJ5dGVzVG9Xb3JkcyhtZXNzYWdlKSxcclxuICAgICAgICBsID0gbWVzc2FnZS5sZW5ndGggKiA4LFxyXG4gICAgICAgIGEgPSAgMTczMjU4NDE5MyxcclxuICAgICAgICBiID0gLTI3MTczMzg3OSxcclxuICAgICAgICBjID0gLTE3MzI1ODQxOTQsXHJcbiAgICAgICAgZCA9ICAyNzE3MzM4Nzg7XHJcblxyXG4gICAgLy8gU3dhcCBlbmRpYW5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtW2ldID0gKChtW2ldIDw8ICA4KSB8IChtW2ldID4+PiAyNCkpICYgMHgwMEZGMDBGRiB8XHJcbiAgICAgICAgICAgICAoKG1baV0gPDwgMjQpIHwgKG1baV0gPj4+ICA4KSkgJiAweEZGMDBGRjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhZGRpbmdcclxuICAgIG1bbCA+Pj4gNV0gfD0gMHg4MCA8PCAobCAlIDMyKTtcclxuICAgIG1bKCgobCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBsO1xyXG5cclxuICAgIC8vIE1ldGhvZCBzaG9ydGN1dHNcclxuICAgIHZhciBGRiA9IG1kNS5fZmYsXHJcbiAgICAgICAgR0cgPSBtZDUuX2dnLFxyXG4gICAgICAgIEhIID0gbWQ1Ll9oaCxcclxuICAgICAgICBJSSA9IG1kNS5faWk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSArPSAxNikge1xyXG5cclxuICAgICAgdmFyIGFhID0gYSxcclxuICAgICAgICAgIGJiID0gYixcclxuICAgICAgICAgIGNjID0gYyxcclxuICAgICAgICAgIGRkID0gZDtcclxuXHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDBdLCAgNywgLTY4MDg3NjkzNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDFdLCAxMiwgLTM4OTU2NDU4Nik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDJdLCAxNywgIDYwNjEwNTgxOSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyA0XSwgIDcsIC0xNzY0MTg4OTcpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA1XSwgMTIsICAxMjAwMDgwNDI2KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDddLCAyMiwgLTQ1NzA1OTgzKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgOF0sICA3LCAgMTc3MDAzNTQxNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTcsIC00MjA2Myk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKzEyXSwgIDcsICAxODA0NjAzNjgyKTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsxM10sIDEyLCAtNDAzNDExMDEpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsxNV0sIDIyLCAgMTIzNjUzNTMyOSk7XHJcblxyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyAxXSwgIDUsIC0xNjU3OTY1MTApO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyA2XSwgIDksIC0xMDY5NTAxNjMyKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE0LCAgNjQzNzE3NzEzKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgMF0sIDIwLCAtMzczODk3MzAyKTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgNV0sICA1LCAtNzAxNTU4NjkxKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxMF0sICA5LCAgMzgwMTYwODMpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKzE1XSwgMTQsIC02NjA0NzgzMzUpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyA5XSwgIDUsICA1Njg0NDY0MzgpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKzE0XSwgIDksIC0xMDE5ODAzNjkwKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsgM10sIDE0LCAtMTg3MzYzOTYxKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgOF0sIDIwLCAgMTE2MzUzMTUwMSk7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krMTNdLCAgNSwgLTE0NDQ2ODE0NjcpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyAyXSwgIDksIC01MTQwMzc4NCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDddLCAxNCwgIDE3MzUzMjg0NzMpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKzEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcclxuXHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDVdLCAgNCwgLTM3ODU1OCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzExXSwgMTYsICAxODM5MDMwNTYyKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsxNF0sIDIzLCAtMzUzMDk1NTYpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyAxXSwgIDQsIC0xNTMwOTkyMDYwKTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgNF0sIDExLCAgMTI3Mjg5MzM1Myk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krIDddLCAxNiwgLTE1NTQ5NzYzMik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKzEzXSwgIDQsICA2ODEyNzkxNzQpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyAwXSwgMTEsIC0zNTg1MzcyMjIpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyA2XSwgMjMsICA3NjAyOTE4OSk7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDldLCAgNCwgLTY0MDM2NDQ4Nyk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krMTJdLCAxMSwgLTQyMTgxNTgzNSk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krMTVdLCAxNiwgIDUzMDc0MjUyMCk7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krIDJdLCAyMywgLTk5NTMzODY1MSk7XHJcblxyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDYsIC0xOTg2MzA4NDQpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyA3XSwgMTAsICAxMTI2ODkxNDE1KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDVdLCAyMSwgLTU3NDM0MDU1KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsxMl0sICA2LCAgMTcwMDQ4NTU3MSk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTUsIC0xMDUxNTIzKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDhdLCAgNiwgIDE4NzMzMTMzNTkpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKzE1XSwgMTAsIC0zMDYxMTc0NCk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDZdLCAxNSwgLTE1NjAxOTgzODApO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKzEzXSwgMjEsICAxMzA5MTUxNjQ5KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgNF0sICA2LCAtMTQ1NTIzMDcwKTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDJdLCAxNSwgIDcxODc4NzI1OSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDldLCAyMSwgLTM0MzQ4NTU1MSk7XHJcblxyXG4gICAgICBhID0gKGEgKyBhYSkgPj4+IDA7XHJcbiAgICAgIGIgPSAoYiArIGJiKSA+Pj4gMDtcclxuICAgICAgYyA9IChjICsgY2MpID4+PiAwO1xyXG4gICAgICBkID0gKGQgKyBkZCkgPj4+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyeXB0LmVuZGlhbihbYSwgYiwgYywgZF0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEF1eGlsaWFyeSBmdW5jdGlvbnNcclxuICBtZDUuX2ZmICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGMgfCB+YiAmIGQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2dnICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGQgfCBjICYgfmQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2hoICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiBeIGMgXiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9paSAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGMgXiAoYiB8IH5kKSkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG5cclxuICAvLyBQYWNrYWdlIHByaXZhdGUgYmxvY2tzaXplXHJcbiAgbWQ1Ll9ibG9ja3NpemUgPSAxNjtcclxuICBtZDUuX2RpZ2VzdHNpemUgPSAxNjtcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCB8fCBtZXNzYWdlID09PSBudWxsKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYXJndW1lbnQgJyArIG1lc3NhZ2UpO1xyXG5cclxuICAgIHZhciBkaWdlc3RieXRlcyA9IGNyeXB0LndvcmRzVG9CeXRlcyhtZDUobWVzc2FnZSwgb3B0aW9ucykpO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5hc0J5dGVzID8gZGlnZXN0Ynl0ZXMgOlxyXG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5hc1N0cmluZyA/IGJpbi5ieXRlc1RvU3RyaW5nKGRpZ2VzdGJ5dGVzKSA6XHJcbiAgICAgICAgY3J5cHQuYnl0ZXNUb0hleChkaWdlc3RieXRlcyk7XHJcbiAgfTtcclxuXHJcbn0pKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9fbWQ1QDIuMi4xQG1kNS9tZDUuanMiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBiYXNlNjRtYXBcbiAgICAgID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nLFxuXG4gIGNyeXB0ID0ge1xuICAgIC8vIEJpdC13aXNlIHJvdGF0aW9uIGxlZnRcbiAgICByb3RsOiBmdW5jdGlvbihuLCBiKSB7XG4gICAgICByZXR1cm4gKG4gPDwgYikgfCAobiA+Pj4gKDMyIC0gYikpO1xuICAgIH0sXG5cbiAgICAvLyBCaXQtd2lzZSByb3RhdGlvbiByaWdodFxuICAgIHJvdHI6IGZ1bmN0aW9uKG4sIGIpIHtcbiAgICAgIHJldHVybiAobiA8PCAoMzIgLSBiKSkgfCAobiA+Pj4gYik7XG4gICAgfSxcblxuICAgIC8vIFN3YXAgYmlnLWVuZGlhbiB0byBsaXR0bGUtZW5kaWFuIGFuZCB2aWNlIHZlcnNhXG4gICAgZW5kaWFuOiBmdW5jdGlvbihuKSB7XG4gICAgICAvLyBJZiBudW1iZXIgZ2l2ZW4sIHN3YXAgZW5kaWFuXG4gICAgICBpZiAobi5jb25zdHJ1Y3RvciA9PSBOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0LnJvdGwobiwgOCkgJiAweDAwRkYwMEZGIHwgY3J5cHQucm90bChuLCAyNCkgJiAweEZGMDBGRjAwO1xuICAgICAgfVxuXG4gICAgICAvLyBFbHNlLCBhc3N1bWUgYXJyYXkgYW5kIHN3YXAgYWxsIGl0ZW1zXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspXG4gICAgICAgIG5baV0gPSBjcnlwdC5lbmRpYW4obltpXSk7XG4gICAgICByZXR1cm4gbjtcbiAgICB9LFxuXG4gICAgLy8gR2VuZXJhdGUgYW4gYXJyYXkgb2YgYW55IGxlbmd0aCBvZiByYW5kb20gYnl0ZXNcbiAgICByYW5kb21CeXRlczogZnVuY3Rpb24obikge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXTsgbiA+IDA7IG4tLSlcbiAgICAgICAgYnl0ZXMucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYmlnLWVuZGlhbiAzMi1iaXQgd29yZHNcbiAgICBieXRlc1RvV29yZHM6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciB3b3JkcyA9IFtdLCBpID0gMCwgYiA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKywgYiArPSA4KVxuICAgICAgICB3b3Jkc1tiID4+PiA1XSB8PSBieXRlc1tpXSA8PCAoMjQgLSBiICUgMzIpO1xuICAgICAgcmV0dXJuIHdvcmRzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGJpZy1lbmRpYW4gMzItYml0IHdvcmRzIHRvIGEgYnl0ZSBhcnJheVxuICAgIHdvcmRzVG9CeXRlczogZnVuY3Rpb24od29yZHMpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGIgPSAwOyBiIDwgd29yZHMubGVuZ3RoICogMzI7IGIgKz0gOClcbiAgICAgICAgYnl0ZXMucHVzaCgod29yZHNbYiA+Pj4gNV0gPj4+ICgyNCAtIGIgJSAzMikpICYgMHhGRik7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgaGV4IHN0cmluZ1xuICAgIGJ5dGVzVG9IZXg6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBoZXggPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBoZXgucHVzaCgoYnl0ZXNbaV0gPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG4gICAgICAgIGhleC5wdXNoKChieXRlc1tpXSAmIDB4RikudG9TdHJpbmcoMTYpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoZXguam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBoZXggc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIGhleFRvQnl0ZXM6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgYyA9IDA7IGMgPCBoZXgubGVuZ3RoOyBjICs9IDIpXG4gICAgICAgIGJ5dGVzLnB1c2gocGFyc2VJbnQoaGV4LnN1YnN0cihjLCAyKSwgMTYpKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBiYXNlLTY0IHN0cmluZ1xuICAgIGJ5dGVzVG9CYXNlNjQ6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBiYXNlNjQgPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICB2YXIgdHJpcGxldCA9IChieXRlc1tpXSA8PCAxNikgfCAoYnl0ZXNbaSArIDFdIDw8IDgpIHwgYnl0ZXNbaSArIDJdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKylcbiAgICAgICAgICBpZiAoaSAqIDggKyBqICogNiA8PSBieXRlcy5sZW5ndGggKiA4KVxuICAgICAgICAgICAgYmFzZTY0LnB1c2goYmFzZTY0bWFwLmNoYXJBdCgodHJpcGxldCA+Pj4gNiAqICgzIC0gaikpICYgMHgzRikpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGJhc2U2NC5wdXNoKCc9Jyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYmFzZTY0LmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYmFzZS02NCBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgYmFzZTY0VG9CeXRlczogZnVuY3Rpb24oYmFzZTY0KSB7XG4gICAgICAvLyBSZW1vdmUgbm9uLWJhc2UtNjQgY2hhcmFjdGVyc1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnJlcGxhY2UoL1teQS1aMC05K1xcL10vaWcsICcnKTtcblxuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgaSA9IDAsIGltb2Q0ID0gMDsgaSA8IGJhc2U2NC5sZW5ndGg7XG4gICAgICAgICAgaW1vZDQgPSArK2kgJSA0KSB7XG4gICAgICAgIGlmIChpbW9kNCA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgYnl0ZXMucHVzaCgoKGJhc2U2NG1hcC5pbmRleE9mKGJhc2U2NC5jaGFyQXQoaSAtIDEpKVxuICAgICAgICAgICAgJiAoTWF0aC5wb3coMiwgLTIgKiBpbW9kNCArIDgpIC0gMSkpIDw8IChpbW9kNCAqIDIpKVxuICAgICAgICAgICAgfCAoYmFzZTY0bWFwLmluZGV4T2YoYmFzZTY0LmNoYXJBdChpKSkgPj4+ICg2IC0gaW1vZDQgKiAyKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGNyeXB0O1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9fY3J5cHRAMC4wLjJAY3J5cHQvY3J5cHQuanMiLCIvKipcbiAqIElF5rWP6KeI5Zmo55qE5riy5p+T5byV5pOO54mI5pys5Y+3XG4gKiDms6jmhI/vvJrmraTlsZ7mgKfkuI7mtY/op4jlmajniYjmnKzlj7fkuI3lkIzvvIxJReeahOa4suafk+W8leaTjueJiOacrOWPt+aYr+WPr+S7pemAmui/h0hUTUwgaGVhZGVy5oiW5omL5Yqo6K6+572u5Y675pu05pS555qEXG4gKiBAdHlwZSB7TnVtYmVyfSA2IH4gMTBcbiAqL1xuZXhwb3J0IGNvbnN0IGllVmVyc2lvbiA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudC5kb2N1bWVudE1vZGUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICog5Yik5pat5piv5ZCm5piv55Sf5Lqn546v5aKDXG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzUHJvZHVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBQUk9EVUNUSU9OX0VOViA9ICdwcm9kdWN0aW9uJztcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBQUk9EVUNUSU9OX0VOVikge1xuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBQUk9EVUNUSU9OX0VOVikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpZVZlcnNpb24sXG4gICAgaXNQcm9kdWN0aW9uLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2Vudi5qcyIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19pcy1idWZmZXJAMS4xLjZAaXMtYnVmZmVyL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIEJBQ0tTUEFDRTogOCxcbiAgICBUQUI6IDksXG4gICAgRU5URVI6IDEzLFxuICAgIFNISUZUOiAxNixcbiAgICBDVFJMOiAxNyxcbiAgICBBTFQ6IDE4LFxuICAgIEVTQzogMjcsXG4gICAgU1BBQ0U6IDMyLFxuICAgIEVORDogMzUsXG4gICAgSE9NRTogMzYsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcblxuICAgIC8vIHZlcnNpb24gMC54XG4gICAgRVNDQVBFOiAyNyxcbiAgICBMRUZUX0FSUk9XOiAzNyxcbiAgICBVUF9BUlJPVzogMzgsXG4gICAgUklHSFRfQVJST1c6IDM5LFxuICAgIERPV05fQVJST1c6IDQwLFxuXG4gICAgLy8gTWFjT1NcbiAgICBDT05UUk9MOiAxNyxcbiAgICBPUFRJT046IDE4LFxuICAgIENNRDogOTEsXG4gICAgQ09NTUFORDogOTEsXG4gICAgREVMRVRFOiA4LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2tleWNvZGUuanMiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX2NsYXNzbmFtZXNAMi4yLjZAY2xhc3NuYW1lcy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZG9tLCBldmVudHMsIGZ1bmMsIHN1cHBvcnQsIGZvY3VzLCBLRVlDT0RFLCBndWlkIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgb3ZlcmxheU1hbmFnZXIgZnJvbSAnLi9tYW5hZ2VyJztcbmltcG9ydCBHYXRld2F5IGZyb20gJy4vZ2F0ZXdheSc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbic7XG5pbXBvcnQgZmluZE5vZGUgZnJvbSAnLi91dGlscy9maW5kLW5vZGUnO1xuXG5jb25zdCB7IHNhdmVMYXN0Rm9jdXNOb2RlLCBnZXRGb2N1c05vZGVMaXN0LCBiYWNrTGFzdEZvY3VzTm9kZSB9ID0gZm9jdXM7XG5jb25zdCB7IG1ha2VDaGFpbiwgbm9vcCwgYmluZEN0eCB9ID0gZnVuYztcblxuY29uc3QgaXNTY3JvbGxEaXNwbGF5ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbGJhclN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgJzo6LXdlYmtpdC1zY3JvbGxiYXInKTtcbiAgICAgICAgcmV0dXJuICFzY3JvbGxiYXJTdHlsZSB8fCBzY3JvbGxiYXJTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgIT09ICdub25lJztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlnbm9yZSBlcnJvciBmb3IgZmlyZWZveFxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufTtcbmNvbnN0IGhhc1Njcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcmV0dXJuIGRvYy5zY3JvbGxIZWlnaHQgPiBkb2MuY2xpZW50SGVpZ2h0ICYmIGRvbS5zY3JvbGxiYXIoKS53aWR0aCA+IDAgJiYgaXNTY3JvbGxEaXNwbGF5KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgJiYgaXNTY3JvbGxEaXNwbGF5KGRvY3VtZW50LmJvZHkpO1xufTtcbmNvbnN0IHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICctby0nLCAnbXMtJywgJyddO1xuY29uc3QgZ2V0U3R5bGVQcm9wZXJ0eSA9IChub2RlLCBuYW1lKSA9PiB7XG4gICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBsZXQgcmV0ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByZWZpeGVzW2ldICsgbmFtZSk7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5jb25zdCBtb2RhbHMgPSBbXTtcbmxldCBib2R5T3ZlcmZsb3dZLCBib2R5UGFkZGluZ1JpZ2h0O1xuXG4vKipcbiAqIE92ZXJsYXlcbiAqICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5YaF5a65XG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuaYvuekuuW8ueWxglxuICAgICAgICAgKi9cbiAgICAgICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLor7fmsYLlhbPpl63ml7bop6blj5Hkuovku7bnmoTlm57osIPlh73mlbBcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg5by55bGC5YWz6Zet55qE5p2l5rqQXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIERPTSDkuovku7ZcbiAgICAgICAgICovXG4gICAgICAgIG9uUmVxdWVzdENsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWumuS9jeeahOWPgueFp+WFg+e0oFxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0OiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC55u45a+55LqO5Y+C54Wn5YWD57Sg55qE5a6a5L2NLCDor6bop4HlvIDlj5HmjIfljZfnmoRb5a6a5L2N6YOo5YiGXSgj5a6a5L2NKVxuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnm7jlr7nkuo7lj4LnhaflhYPntKDlrprkvY3nmoTlvq7osINcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldDogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICAvKipcbiAgICAgICAgICog5riy5p+T57uE5Lu255qE5a655Zmo77yM5aaC5p6c5piv5Ye95pWw6ZyA6KaB6L+U5ZueIHJlZu+8jOWmguaenOaYr+Wtl+espuS4suWImeaYr+ivpSBET00g55qEIGlk77yM5Lmf5Y+v5Lul55u05o6l5Lyg5YWlIERPTSDoioLngrlcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuaYvuekuumBrue9qVxuICAgICAgICAgKi9cbiAgICAgICAgaGFzTWFzazogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbmlK/mjIEgZXNjIOaMiemUruWFs+mXreW8ueWxglxuICAgICAgICAgKi9cbiAgICAgICAgY2FuQ2xvc2VCeUVzYzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDngrnlh7vlvLnlsYLlpJbnmoTljLrln5/mmK/lkKblhbPpl63lvLnlsYLvvIzkuI3mmL7npLrpga7nvanml7bnlJ/mlYhcbiAgICAgICAgICovXG4gICAgICAgIGNhbkNsb3NlQnlPdXRTaWRlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog54K55Ye76YGu572p5Yy65Z+f5piv5ZCm5YWz6Zet5by55bGC77yM5pi+56S66YGu572p5pe255Sf5pWIXG4gICAgICAgICAqL1xuICAgICAgICBjYW5DbG9zZUJ5TWFzazogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLmiZPlvIDliY3op6blj5Hkuovku7bnmoTlm57osIPlh73mlbBcbiAgICAgICAgICovXG4gICAgICAgIGJlZm9yZU9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5omT5byA5pe26Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5omT5byA5ZCO6Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwLCDlpoLmnpzmnInliqjnlLvvvIzliJnlnKjliqjnlLvnu5PmnZ/lkI7op6blj5FcbiAgICAgICAgICovXG4gICAgICAgIGFmdGVyT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlhbPpl63liY3op6blj5Hkuovku7bnmoTlm57osIPlh73mlbBcbiAgICAgICAgICovXG4gICAgICAgIGJlZm9yZUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWFs+mXreaXtuinpuWPkeS6i+S7tueahOWbnuiwg+WHveaVsFxuICAgICAgICAgKi9cbiAgICAgICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlhbPpl63lkI7op6blj5Hkuovku7bnmoTlm57osIPlh73mlbAsIOWmguaenOacieWKqOeUu++8jOWImeWcqOWKqOeUu+e7k+adn+WQjuinpuWPkVxuICAgICAgICAgKi9cbiAgICAgICAgYWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlrprkvY3lrozmiJDliY3op6blj5HnmoTkuovku7ZcbiAgICAgICAgICovXG4gICAgICAgIGJlZm9yZVBvc2l0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWumuS9jeWujOaIkOaXtuinpuWPkeeahOS6i+S7tlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOWumuS9jeeahOWPguaVsFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBjb25maWcuYWxpZ24g5a+56b2Q5pa55byP77yM5aaCIFsnY2MnLCAnY2MnXe+8iOWmguaenOW8gOWQryBuZWVkQWRqdXN077yM5Y+v6IO95ZKM6aKE5YWI6K6+572u55qEIGFsaWduIOS4jeWQjO+8iVxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnRvcCDot53nprvop4blj6Ppobbpg6jot53nprtcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5sZWZ0IOi3neemu+inhuWPo+W3puS+p+i3neemu1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZSDlrprkvY3lj4LnhafnmoTlrrnlmajoioLngrlcbiAgICAgICAgICovXG4gICAgICAgIG9uUG9zaXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5Zyo5q+P5qyh5by55bGC6YeN5paw5riy5p+T5ZCO5by65Yi25pu05paw5a6a5L2N5L+h5oGv77yM5LiA6Iis55So5LqO5by55bGC5YaF5a655Yy65Z+f5aSn5bCP5Y+R55Sf5Y+Y5YyW5pe277yM5LuN6ZyA5L+d5oyB5Y6f5p2l55qE5a6a5L2N5pa55byPXG4gICAgICAgICAqL1xuICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLmiZPlvIDml7bmmK/lkKborqnlhbbkuK3nmoTlhYPntKDoh6rliqjojrflj5bnhKbngrlcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvZPlvLnlsYLnlLHkuo7pobXpnaLmu5rliqjnrYnmg4XlhrXkuI3lnKjlj6/op4bljLrln5/ml7bvvIzmmK/lkKboh6rliqjosIPmlbTlrprkvY3ku6Xlh7rnjrDlnKjlj6/op4bljLrln59cbiAgICAgICAgICovXG4gICAgICAgIG5lZWRBZGp1c3Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm56aB55So6aG16Z2i5rua5YqoXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlU2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmakOiXj+aXtuaYr+WQpuS/neeVmeWtkOiKgueCuVxuICAgICAgICAgKi9cbiAgICAgICAgY2FjaGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5a6J5YWo6IqC54K577yM5b2T54K55Ye7IGRvY3VtZW50IOeahOaXtuWAme+8jOWmguaenOWMheWQq+ivpeiKgueCueWImeS4jeS8muWFs+mXreW8ueWxgu+8jOWmguaenOaYr+WHveaVsOmcgOimgei/lOWbniByZWbvvIzlpoLmnpzmmK/lrZfnrKbkuLLliJnmmK/or6UgRE9NIOeahCBpZO+8jOS5n+WPr+S7peebtOaOpeS8oOWFpSBET00g6IqC54K577yM5oiW6ICF5Lul5LiK5YC857uE5oiQ55qE5pWw57uEXG4gICAgICAgICAqL1xuICAgICAgICBzYWZlTm9kZTogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgueahOagueiKgueCueeahOagt+W8j+exu1xuICAgICAgICAgKi9cbiAgICAgICAgd3JhcHBlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgueahOagueiKgueCueeahOWGheiBlOagt+W8j1xuICAgICAgICAgKi9cbiAgICAgICAgd3JhcHBlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICog6YWN572u5Yqo55S755qE5pKt5pS+5pa55byP77yM5pSv5oyBIHsgaW46ICdlbnRlci1jbGFzcycsIG91dDogJ2xlYXZlLWNsYXNzJyB9IOeahOWvueixoeWPguaVsO+8jOWmguaenOiuvue9ruS4uiBmYWxzZe+8jOWImeS4jeaSreaUvuWKqOeUu1xuICAgICAgICAgKiBAZGVmYXVsdCB7IGluOiAnZXhwYW5kSW5Eb3duJywgb3V0OiAnZXhwYW5kT3V0VXAnIH1cbiAgICAgICAgICovXG4gICAgICAgIGFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICAgICAgb25NYXNrTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uTWFza01vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgcHVyZTogZmFsc2UsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBvblJlcXVlc3RDbG9zZTogbm9vcCxcbiAgICAgICAgdGFyZ2V0OiBQb3NpdGlvbi5WSUVXUE9SVCxcbiAgICAgICAgYWxpZ246ICd0bCBibCcsXG4gICAgICAgIG9mZnNldDogWzAsIDBdLFxuICAgICAgICBoYXNNYXNrOiBmYWxzZSxcbiAgICAgICAgY2FuQ2xvc2VCeUVzYzogdHJ1ZSxcbiAgICAgICAgY2FuQ2xvc2VCeU91dFNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgY2FuQ2xvc2VCeU1hc2s6IHRydWUsXG4gICAgICAgIGJlZm9yZU9wZW46IG5vb3AsXG4gICAgICAgIG9uT3Blbjogbm9vcCxcbiAgICAgICAgYWZ0ZXJPcGVuOiBub29wLFxuICAgICAgICBiZWZvcmVDbG9zZTogbm9vcCxcbiAgICAgICAgb25DbG9zZTogbm9vcCxcbiAgICAgICAgYWZ0ZXJDbG9zZTogbm9vcCxcbiAgICAgICAgYmVmb3JlUG9zaXRpb246IG5vb3AsXG4gICAgICAgIG9uUG9zaXRpb246IG5vb3AsXG4gICAgICAgIG9uTWFza01vdXNlRW50ZXI6IG5vb3AsXG4gICAgICAgIG9uTWFza01vdXNlTGVhdmU6IG5vb3AsXG4gICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uOiBmYWxzZSxcbiAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgbmVlZEFkanVzdDogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZVNjcm9sbDogZmFsc2UsXG4gICAgICAgIGNhY2hlOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IHByb3BzLnZpc2libGUsXG4gICAgICAgICAgICBzdGF0dXM6ICdub25lJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdGhpcy5nZXRBbmltYXRpb24ocHJvcHMpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sYXN0QWxpZ24gPSBwcm9wcy5hbGlnbjtcblxuICAgICAgICBiaW5kQ3R4KHRoaXMsIFtcbiAgICAgICAgICAgICdoYW5kbGVQb3NpdGlvbicsXG4gICAgICAgICAgICAnaGFuZGxlQW5pbWF0ZUVuZCcsXG4gICAgICAgICAgICAnaGFuZGxlRG9jdW1lbnRLZXlEb3duJyxcbiAgICAgICAgICAgICdoYW5kbGVEb2N1bWVudENsaWNrJyxcbiAgICAgICAgICAgICdoYW5kbGVNYXNrQ2xpY2snLFxuICAgICAgICAgICAgJ2JlZm9yZU9wZW4nLFxuICAgICAgICAgICAgJ2JlZm9yZUNsb3NlJ1xuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLnRpbWVvdXRNYXAgPSB7fTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlT3BlbigpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5iZWZvcmVPcGVuKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFuaW1hdGlvbiAmJiBzdXBwb3J0LmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmFkZERvY3VtZW50RXZlbnRzKCk7XG5cbiAgICAgICAgb3ZlcmxheU1hbmFnZXIuYWRkT3ZlcmxheSh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQgJiYgbmV4dFByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3aWxsT3BlbiA9ICF0aGlzLnByb3BzLnZpc2libGUgJiYgbmV4dFByb3BzLnZpc2libGU7XG4gICAgICAgIGNvbnN0IHdpbGxDbG9zZSA9IHRoaXMucHJvcHMudmlzaWJsZSAmJiAhbmV4dFByb3BzLnZpc2libGU7XG4gICAgICAgIGlmICh3aWxsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5iZWZvcmVPcGVuKCk7XG4gICAgICAgICAgICBuZXh0UHJvcHMuYmVmb3JlT3BlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbGxDbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5iZWZvcmVDbG9zZSgpO1xuICAgICAgICAgICAgbmV4dFByb3BzLmJlZm9yZUNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dFByb3BzLmFuaW1hdGlvbiB8fCBuZXh0UHJvcHMuYW5pbWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBuZXh0UHJvcHMuYW5pbWF0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0UHJvcHMuYW5pbWF0aW9uICE9PSBmYWxzZSAmJiBzdXBwb3J0LmFuaW1hdGlvbikge1xuICAgICAgICAgICAgaWYgKHdpbGxPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aWxsQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlYXZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBuZXh0UHJvcHMudmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGNvbnN0IG9wZW4gPSAhcHJldlByb3BzLnZpc2libGUgJiYgdGhpcy5wcm9wcy52aXNpYmxlO1xuICAgICAgICBjb25zdCBjbG9zZSA9IHByZXZQcm9wcy52aXNpYmxlICYmICF0aGlzLnByb3BzLnZpc2libGU7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFuaW1hdGlvbiAmJiBzdXBwb3J0LmFuaW1hdGlvbikge1xuICAgICAgICAgICAgaWYgKG9wZW4gfHwgY2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFuaW1hdGlvbkV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlck5vZGUgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG4gICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3BlbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFmdGVyT3BlbigpO1xuICAgICAgICAgICAgICAgICAgICBkb20uYWRkQ2xhc3Mod3JhcHBlck5vZGUsICdvcGVuZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheU1hbmFnZXIuYWRkT3ZlcmxheSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFmdGVyQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3Mod3JhcHBlck5vZGUsICdvcGVuZWQnKTtcbiAgICAgICAgICAgICAgICBvdmVybGF5TWFuYWdlci5yZW1vdmVPdmVybGF5KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1c05vZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgICAgICBvdmVybGF5TWFuYWdlci5yZW1vdmVPdmVybGF5KHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZURvY3VtZW50RXZlbnRzKCk7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZm9jdXNUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb24ub2ZmKCk7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmVmb3JlQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBnZXRBbmltYXRpb24ocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmFuaW1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5hbmltYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbmltYXRpb25CeUFsaWduKHByb3BzLmFsaWduKTtcbiAgICB9XG5cbiAgICBnZXRBbmltYXRpb25CeUFsaWduKGFsaWduKSB7XG4gICAgICAgIHN3aXRjaCAoYWxpZ25bMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGluOiAnZXhwYW5kSW5Eb3duJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0OiAnZXhwYW5kT3V0VXAnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGluOiAnZXhwYW5kSW5VcCcsXG4gICAgICAgICAgICAgICAgICAgIG91dDogJ2V4cGFuZE91dERvd24nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW46ICdleHBhbmRJbkRvd24nLFxuICAgICAgICAgICAgICAgICAgICBvdXQ6ICdleHBhbmRPdXRVcCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQW5pbWF0aW9uRXZlbnRzKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldENvbnRlbnROb2RlKCk7XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZ3VpZCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gZXZlbnRzLm9uKG5vZGUsIHN1cHBvcnQuYW5pbWF0aW9uLmVuZCwgdGhpcy5oYW5kbGVBbmltYXRlRW5kLmJpbmQodGhpcywgaWQpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZSA9IGFuaW1hdGlvbkRlbGF5ICsgYW5pbWF0aW9uRHVyYXRpb247XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0TWFwW2lkXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBbmltYXRlRW5kKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdGltZSAqIDEwMDAgKyAyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUG9zaXRpb24oY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGFsaWduID0gY29uZmlnLmFsaWduLmpvaW4oJyAnKTtcblxuICAgICAgICBpZiAoISgnYW5pbWF0aW9uJyBpbiB0aGlzLnByb3BzKSAmJiB0aGlzLnByb3BzLm5lZWRBZGp1c3QgJiYgdGhpcy5sYXN0QWxpZ24gIT09IGFsaWduKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHRoaXMuZ2V0QW5pbWF0aW9uQnlBbGlnbihhbGlnbilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0QWxpZ24gPSBhbGlnbjtcbiAgICB9XG5cbiAgICBoYW5kbGVBbmltYXRlRW5kKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRNYXBbaWRdKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0TWFwW2lkXSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMudGltZW91dE1hcFtpZF07XG5cbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uLm9mZigpO1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdsZWF2aW5nJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm9uTGVhdmVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdlbnRlcmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ25vbmUnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5vbkVudGVyZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVudGVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBzdGF0dXM6ICdlbnRlcmluZydcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gTk9URTogc2V0U3RhdGUgY2FsbGJhY2sgKHNlY29uZCBhcmd1bWVudCkgbm93IGZpcmVzIGltbWVkaWF0ZWx5IGFmdGVyIGNvbXBvbmVudERpZE1vdW50IC8gY29tcG9uZW50RGlkVXBkYXRlIGluc3RlYWQgb2YgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgaGF2ZSByZW5kZXJlZC5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVudGVyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxlYXZlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0YXR1czogJ2xlYXZpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25MZWF2aW5nKCk7XG4gICAgfVxuXG4gICAgb25FbnRlcmluZygpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlck5vZGUgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG4gICAgICAgIGRvbS5hZGRDbGFzcyh3cmFwcGVyTm9kZSwgJ29wZW5lZCcpO1xuICAgICAgICB0aGlzLnByb3BzLm9uT3BlbigpO1xuICAgIH1cblxuICAgIG9uTGVhdmluZygpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlck5vZGUgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyh3cmFwcGVyTm9kZSwgJ29wZW5lZCcpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBvbkVudGVyZWQoKSB7XG4gICAgICAgIG92ZXJsYXlNYW5hZ2VyLmFkZE92ZXJsYXkodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXNOb2RlKCk7XG4gICAgICAgIHRoaXMucHJvcHMuYWZ0ZXJPcGVuKCk7XG4gICAgfVxuXG4gICAgb25MZWF2ZWQoKSB7XG4gICAgICAgIG92ZXJsYXlNYW5hZ2VyLnJlbW92ZU92ZXJsYXkodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXNOb2RlKCk7XG4gICAgICAgIHRoaXMucHJvcHMuYWZ0ZXJDbG9zZSgpO1xuICAgIH1cblxuICAgIGJlZm9yZU9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVTY3JvbGwpIHtcbiAgICAgICAgICAgIGlmIChtb2RhbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgICAgIGJvZHlPdmVyZmxvd1kgPSBib2R5LnN0eWxlLm92ZXJmbG93WTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzU2Nyb2xsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keVBhZGRpbmdSaWdodCA9IGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtkb20uZ2V0U3R5bGUoYm9keSwgJ3BhZGRpbmdSaWdodCcpICsgZG9tLnNjcm9sbGJhcigpLndpZHRofXB4YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb20uc2V0U3R5bGUoYm9keSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kYWxzLnB1c2godGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiZWZvcmVDbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZVNjcm9sbCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBtb2RhbHMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGFscy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IGJvZHlPdmVyZmxvd1lcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1Njcm9sbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBib2R5UGFkZGluZ1JpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZG9tLnNldFN0eWxlKGRvY3VtZW50LmJvZHksIHN0eWxlKTtcblxuICAgICAgICAgICAgICAgICAgICBib2R5T3ZlcmZsb3dZID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBib2R5UGFkZGluZ1JpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZGFscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Rm9jdXNOb2RlKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlICYmICF0aGlzLl9oYXNGb2N1c2VkKSB7XG4gICAgICAgICAgICBzYXZlTGFzdEZvY3VzTm9kZSgpO1xuICAgICAgICAgICAgLy8g6L+Z5Liq5pe25YCZ5b6I5Y+v6IO95LiK5LiA5Liq5by55bGC55qE5YWz6Zet5LqL5Lu26L+Y5pyq6Kem5Y+R77yM5a+86Ie054Sm54K55bey57uP5Zue5Yiw6Kem5Y+R55qE5YWD57SgXG4gICAgICAgICAgICAvLyDov5nph4zlu7bml7blpITnkIbkuIDkuIvvvIzlu7bml7bnmoTml7bpl7TkuLogZG9jdW1lbnQuY2xpY2sg5o2V6I636Kem5Y+R55qE5bu25pe25pe26Ze0XG4gICAgICAgICAgICB0aGlzLmZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldENvbnRlbnROb2RlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9jdXNOb2RlTGlzdCA9IGdldEZvY3VzTm9kZUxpc3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c05vZGVMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNOb2RlTGlzdFswXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUudmlzaWJsZSAmJiB0aGlzLl9oYXNGb2N1c2VkKSB7XG4gICAgICAgICAgICBiYWNrTGFzdEZvY3VzTm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5faGFzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJlZjtcbiAgICB9XG5cbiAgICBnZXRDb250ZW50Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRET01Ob2RlKHRoaXMuY29udGVudFJlZik7XG4gICAgfVxuXG4gICAgZ2V0V3JhcHBlck5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhdGV3YXlSZWYgPyB0aGlzLmdhdGV3YXlSZWYuZ2V0Q2hpbGROb2RlKCkgOiBudWxsO1xuICAgIH1cblxuICAgIGFkZERvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jYW5DbG9zZUJ5RXNjKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlkb3duRXZlbnRzID0gZXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMuaGFuZGxlRG9jdW1lbnRLZXlEb3duKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jYW5DbG9zZUJ5T3V0U2lkZUNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGlja0V2ZW50cyA9IGV2ZW50cy5vbihkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZURvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5fa2V5ZG93bkV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5fa2V5ZG93bkV2ZW50cy5vZmYoKTtcbiAgICAgICAgICAgIHRoaXMuX2tleWRvd25FdmVudHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jbGlja0V2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5fY2xpY2tFdmVudHMub2ZmKCk7XG4gICAgICAgICAgICB0aGlzLl9jbGlja0V2ZW50cyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVEb2N1bWVudEtleURvd24oZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlICYmIGUua2V5Q29kZSA9PT0gS0VZQ09ERS5FU0MgJiYgb3ZlcmxheU1hbmFnZXIuaXNDdXJyZW50T3ZlcmxheSh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSgna2V5Ym9hcmQnLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHNhZmVOb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgY29uc3Qgc2FmZU5vZGVzICA9IEFycmF5LmlzQXJyYXkoc2FmZU5vZGUpID8gWy4uLnNhZmVOb2RlXSA6IFtzYWZlTm9kZV07XG4gICAgICAgICAgICBzYWZlTm9kZXMudW5zaGlmdCgoKSA9PiB0aGlzLmdldFdyYXBwZXJOb2RlKCkpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhZmVOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBmaW5kTm9kZShzYWZlTm9kZXNbaV0sIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgIC8vIEhBQ0s6IOWmguaenOinpuWPkeeCueWHu+eahOiKgueCueaYr+W8ueWxguWGhemDqOeahOiKgueCue+8jOW5tuS4lOWcqOiiq+eCueWHu+WQjueri+WNs+mUgOavge+8jOmCo+S5iOatpOaXtuaXoOazleS9v+eUqCBub2RlLmNvbnRhaW5zKGUudGFyZ2V0KVxuICAgICAgICAgICAgICAgIC8vIOadpeWIpOaWreatpOaXtueCueWHu+eahOiKgueCueaYr+WQpuaYr+W8ueWxguWGhemDqOeahOiKgueCue+8jOmineWkluWIpOaWrVxuICAgICAgICAgICAgICAgIGlmIChub2RlICYmIChub2RlID09PSBlLnRhcmdldCB8fCBub2RlLmNvbnRhaW5zKGUudGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAgIChlLnRhcmdldCAhPT0gZG9jdW1lbnQgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKCdkb2NDbGljaycsIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlTWFza0NsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2FuQ2xvc2VCeU1hc2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoJ21hc2tDbGljaycsIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZUNvbnRlbnRSZWYgPSAocmVmKSA9PiB7XG4gICAgICAgIHRoaXMuY29udGVudFJlZiA9IHJlZjtcbiAgICB9XG5cbiAgICBzYXZlR2F0ZXdheVJlZiA9IChyZWYpID0+IHtcbiAgICAgICAgdGhpcy5nYXRld2F5UmVmID0gcmVmO1xuICAgIH1cblxuICAgIC8vIOWFvOWuuei/h+WOu+eahOeUqOazlTogdGhpcy5wb3B1cFJlZi5nZXRJbnN0YW5jZSgpLm92ZXJsYXkuZ2V0SW5zdGFuY2UoKS5nZXRDb250ZW50Tm9kZSgpXG4gICAgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJlZml4LCBjbGFzc05hbWUsIHN0eWxlLCBjaGlsZHJlbjogcHJvcENoaWxkcmVuLFxuICAgICAgICAgICAgdGFyZ2V0LCBhbGlnbiwgb2Zmc2V0LCBjb250YWluZXIsIGhhc01hc2ssIG5lZWRBZGp1c3QsXG4gICAgICAgICAgICBiZWZvcmVQb3NpdGlvbiwgb25Qb3NpdGlvbiwgd3JhcHBlclN0eWxlLCBydGwsXG4gICAgICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbjogcHJvcFNob3VsZFVwZGF0ZVBvc2l0aW9uLFxuICAgICAgICAgICAgY2FjaGUsIHdyYXBwZXJDbGFzc05hbWUsIG9uTWFza01vdXNlRW50ZXIsIG9uTWFza01vdXNlTGVhdmVcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmlzaWJsZTogc3RhdGVWaXNpYmxlLCBzdGF0dXMsIGFuaW1hdGlvbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBzdGF0ZVZpc2libGUgfHwgKGNhY2hlICYmIHRoaXMuX2lzTW91bnRlZCkgPyBwcm9wQ2hpbGRyZW4gOiBudWxsO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgICAgICBjb25zdCBjaGlsZENsYXp6ID0gY2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH1vdmVybGF5LWlubmVyYF06IHRydWUsXG4gICAgICAgICAgICAgICAgW2FuaW1hdGlvbi5pbl06IHN0YXR1cyA9PT0gJ2VudGVyaW5nJyxcbiAgICAgICAgICAgICAgICBbYW5pbWF0aW9uLm91dF06IHN0YXR1cyA9PT0gJ2xlYXZpbmcnLFxuICAgICAgICAgICAgICAgIFtjaGlsZC5wcm9wcy5jbGFzc05hbWVdOiAhIWNoaWxkLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBbY2xhc3NOYW1lXTogISFjbGFzc05hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IHNldCByZWYgYnkgc3RyaW5nIGluIE92ZXJsYXksIHVzZSBmdW5jdGlvbiBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZHJlbiA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2hpbGRDbGF6eixcbiAgICAgICAgICAgICAgICBzdHlsZTogey4uLmNoaWxkLnByb3BzLnN0eWxlLCAuLi5zdHlsZX0sXG4gICAgICAgICAgICAgICAgcmVmOiBtYWtlQ2hhaW4odGhpcy5zYXZlQ29udGVudFJlZiwgY2hpbGQucmVmKSxcbiAgICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAhc3RhdGVWaXNpYmxlICYmIGNhY2hlICYmIHRoaXMuX2lzTW91bnRlZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChhbGlnbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZVBvc2l0aW9uID0gc3RhdHVzID09PSAnbGVhdmluZycgPyBmYWxzZSA6IHByb3BTaG91bGRVcGRhdGVQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFBvc2l0aW9uIHsuLi4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4sIHRhcmdldCwgYWxpZ24sIG9mZnNldCwgbmVlZEFkanVzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb3NpdGlvbjogbWFrZUNoYWluKHRoaXMuaGFuZGxlUG9zaXRpb24sIG9uUG9zaXRpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb24sIHJ0bFxuICAgICAgICAgICAgICAgICAgICB9KX0gLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyQ2xhenogPSBjbGFzc25hbWVzKFtcbiAgICAgICAgICAgICAgICBgJHtwcmVmaXh9b3ZlcmxheS13cmFwcGVyYCxcbiAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1dyYXBwZXJTdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBzdGF0ZVZpc2libGUgPyAnJyA6ICdub25lJ1xuICAgICAgICAgICAgfSwgd3JhcHBlclN0eWxlKTtcblxuICAgICAgICAgICAgY2hpbGRyZW4gPSAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBwZXJDbGF6en0gc3R5bGU9e25ld1dyYXBwZXJTdHlsZX0gZGlyPXtydGwgPyAncnRsJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAgICAgIHtoYXNNYXNrID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9b3ZlcmxheS1iYWNrZHJvcGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNYXNrQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1hc2tNb3VzZUVudGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25NYXNrTW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI9e3J0bCA/ICdydGwnIDogdW5kZWZpbmVkfSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxHYXRld2F5IHsuLi4oe2NvbnRhaW5lciwgdGFyZ2V0LCBjaGlsZHJlbn0pfSByZWY9e3RoaXMuc2F2ZUdhdGV3YXlSZWZ9IC8+O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L292ZXJsYXkuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSwgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmdW5jIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgZmluZE5vZGUgZnJvbSAnLi91dGlscy9maW5kLW5vZGUnO1xuXG5jb25zdCB7IG1ha2VDaGFpbiB9ID0gZnVuYztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2F0ZXdheSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICBjb250YWluZXI6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIHRhcmdldDogUHJvcFR5cGVzLmFueSxcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29udGFpbmVyOiAoKSA9PiBkb2N1bWVudC5ib2R5XG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lck5vZGUgPSB0aGlzLmdldENvbnRhaW5lck5vZGUodGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lck5vZGUgPSB0aGlzLmdldENvbnRhaW5lck5vZGUobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXJOb2RlKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBmaW5kTm9kZShwcm9wcy50YXJnZXQpO1xuICAgICAgICByZXR1cm4gZmluZE5vZGUocHJvcHMuY29udGFpbmVyLCB0YXJnZXROb2RlKTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZE5vZGUoKSB7XG4gICAgICAgIHJldHVybiBmaW5kRE9NTm9kZSh0aGlzLmNoaWxkKTtcbiAgICB9XG5cbiAgICBzYXZlQ2hpbGRSZWYgPSByZWYgPT4ge1xuICAgICAgICB0aGlzLmNoaWxkID0gcmVmO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW4gPyBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSA6IG51bGw7XG4gICAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3Qgc2V0IHJlZiBieSBzdHJpbmcgaW4gR2F0ZXdheSwgdXNlIGZ1bmN0aW9uIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIHJlZjogbWFrZUNoYWluKHRoaXMuc2F2ZUNoaWxkUmVmLCBjaGlsZC5yZWYpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoY2hpbGQsIHRoaXMuY29udGFpbmVyTm9kZSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvZ2F0ZXdheS5qc3giLCJpbXBvcnQgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZ1bmMsIGRvbSwgZXZlbnRzIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSAnLi91dGlscy9wb3NpdGlvbic7XG5pbXBvcnQgZmluZE5vZGUgZnJvbSAnLi91dGlscy9maW5kLW5vZGUnO1xuXG5jb25zdCB7IG5vb3AsIGJpbmRDdHggfSA9IGZ1bmM7XG5jb25zdCB7IGdldFN0eWxlIH0gPSBkb207XG5jb25zdCBwbGFjZSA9IHBvc2l0aW9uLnBsYWNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIFZJRVdQT1JUID0gcG9zaXRpb24uVklFV1BPUlQ7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIHRhcmdldDogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gICAgICAgIG9mZnNldDogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICBiZWZvcmVQb3NpdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUG9zaXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBuZWVkQWRqdXN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbmVlZExpc3RlblJlc2l6ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBhbGlnbjogJ3RsIGJsJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMF0sXG4gICAgICAgIGJlZm9yZVBvc2l0aW9uOiBub29wLFxuICAgICAgICBvblBvc2l0aW9uOiBub29wLFxuICAgICAgICBuZWVkQWRqdXN0OiB0cnVlLFxuICAgICAgICBuZWVkTGlzdGVuUmVzaXplOiB0cnVlLFxuICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbjogZmFsc2UsXG4gICAgICAgIHJ0bDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBiaW5kQ3R4KHRoaXMsIFsnaGFuZGxlUmVzaXplJ10pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubmVlZExpc3RlblJlc2l6ZSkge1xuICAgICAgICAgICAgZXZlbnRzLm9uKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICgnYWxpZ24nIGluIG5leHRQcm9wcyAmJiBuZXh0UHJvcHMuYWxpZ24gIT09IHRoaXMucHJvcHMuYWxpZ24gfHwgbmV4dFByb3BzLnNob3VsZFVwZGF0ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNob3VsZFVwZGF0ZVBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkVXBkYXRlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkVXBkYXRlUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5uZWVkTGlzdGVuUmVzaXplKSB7XG4gICAgICAgICAgICBldmVudHMub2ZmKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuICAgIH1cblxuICAgIHNldFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCB7IGFsaWduLCBvZmZzZXQsIGJlZm9yZVBvc2l0aW9uLCBvblBvc2l0aW9uLCBuZWVkQWRqdXN0LCBydGwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgYmVmb3JlUG9zaXRpb24oKTtcblxuICAgICAgICBjb25zdCBjb250ZW50Tm9kZSA9IHRoaXMuZ2V0Q29udGVudE5vZGUoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuZ2V0VGFyZ2V0Tm9kZSgpO1xuICAgICAgICBpZiAoY29udGVudE5vZGUgJiYgdGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0QWxpZ24gPSBwbGFjZSh7XG4gICAgICAgICAgICAgICAgcGluRWxlbWVudDogY29udGVudE5vZGUsXG4gICAgICAgICAgICAgICAgYmFzZUVsZW1lbnQ6IHRhcmdldE5vZGUsXG4gICAgICAgICAgICAgICAgYWxpZ24sXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIG5lZWRBZGp1c3QsXG4gICAgICAgICAgICAgICAgaXNSdGw6IHJ0bCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdG9wID0gZ2V0U3R5bGUoY29udGVudE5vZGUsICd0b3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBnZXRTdHlsZShjb250ZW50Tm9kZSwgJ2xlZnQnKTtcblxuICAgICAgICAgICAgb25Qb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgYWxpZ246IHJlc3VsdEFsaWduLnNwbGl0KCcgJyksXG4gICAgICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgICAgIGxlZnRcbiAgICAgICAgICAgIH0sIGNvbnRlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbnRlbnROb2RlKCkge1xuICAgICAgICByZXR1cm4gZmluZERPTU5vZGUodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gcG9zaXRpb24uVklFV1BPUlQgPyBwb3NpdGlvbi5WSUVXUE9SVCA6IGZpbmROb2RlKHRhcmdldCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVzaXplKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcblxuICAgICAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBDaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L3Bvc2l0aW9uLmpzeCIsImltcG9ydCAnLi4vYW5pbWF0ZS9zdHlsZS5qcyc7XG5pbXBvcnQgJy4vbWFpbi5zY3NzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L3N0eWxlLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX29iamVjdC1hc3NpZ25ANC4xLjFAb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWMgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHsgb2JqLCBsb2cgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBnZXRDb250ZXh0UHJvcHMgZnJvbSAnLi9nZXQtY29udGV4dC1wcm9wcyc7XG5cbmNvbnN0IHsgc2hhbGxvd0VxdWFsIH0gPSBvYmo7XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59XG5cbmxldCBnbG9iYWxMb2NhbGVzO1xubGV0IGN1cnJlbnRHbG9iYWxMYW5ndWFnZSA9ICd6aC1jbic7XG5sZXQgY3VycmVudEdsb2JhbExvY2FsZSA9IHt9O1xubGV0IGN1cnJlbnRHbG9iYWxSdGwgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRMb2NhbGVzKGxvY2FsZXMpIHtcbiAgICBnbG9iYWxMb2NhbGVzID0gbG9jYWxlcztcbiAgICBjdXJyZW50R2xvYmFsTG9jYWxlID0gbG9jYWxlc1tjdXJyZW50R2xvYmFsTGFuZ3VhZ2VdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcbiAgICBpZiAoZ2xvYmFsTG9jYWxlcykge1xuICAgICAgICBjdXJyZW50R2xvYmFsTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICAgICAgY3VycmVudEdsb2JhbExvY2FsZSA9IGdsb2JhbExvY2FsZXNbbGFuZ3VhZ2VdO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZShsb2NhbGUpIHtcbiAgICBjdXJyZW50R2xvYmFsTG9jYWxlID0ge1xuICAgICAgICAuLi4oZ2xvYmFsTG9jYWxlcyA/IGdsb2JhbExvY2FsZXNbY3VycmVudEdsb2JhbExhbmd1YWdlXSA6IHt9KSxcbiAgICAgICAgLi4ubG9jYWxlXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERpcmVjdGlvbihkaXIpIHtcbiAgICBjdXJyZW50R2xvYmFsUnRsID0gZGlyID09PSAncnRsJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZSgpIHtcbiAgICByZXR1cm4gY3VycmVudEdsb2JhbExvY2FsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmd1YWdlKCkge1xuICAgIHJldHVybiBjdXJyZW50R2xvYmFsTGFuZ3VhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRHbG9iYWxSdGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWcoQ29tcG9uZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoQ29tcG9uZW50LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBDb21wb25lbnQucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShcbiAgICAgICAgICAgIG5leHRQcm9wcyxcbiAgICAgICAgICAgIG5leHRTdGF0ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnB1cmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHxcbiAgICAgICAgICAgICAgICAgICAgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2xhc3MgQ29uZmlnZWRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKENvbXBvbmVudC5wcm9wVHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgbG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgcHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgICAgICAuLi4oQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICBuZXh0UHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgbmV4dExvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIG5leHRQdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgICAgIG5leHRSdGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgbmV4dFdhcm5pbmc6IFByb3BUeXBlcy5ib29sXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdGhpcy5fZ2V0SW5zdGFuY2UgPSB0aGlzLl9nZXRJbnN0YW5jZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fZGVwcmVjYXRlZCA9IHRoaXMuX2RlcHJlY2F0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9nZXRJbnN0YW5jZShyZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gcmVmO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgJiYgb3B0aW9ucy5leHBvcnROYW1lcykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZXhwb3J0TmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLl9pbnN0YW5jZVtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tuYW1lXSA9IGZpZWxkLmJpbmQodGhpcy5faW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tuYW1lXSA9IGZpZWxkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfZGVwcmVjYXRlZCguLi5hcmdzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0Lm5leHRXYXJuaW5nICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxvZy5kZXByZWNhdGVkKC4uLmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHByZWZpeCwgbG9jYWxlLCBwdXJlLCBydGwsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBuZXh0UHJlZml4LFxuICAgICAgICAgICAgICAgIG5leHRMb2NhbGUgPSB7fSxcbiAgICAgICAgICAgICAgICBuZXh0UHVyZSxcbiAgICAgICAgICAgICAgICBuZXh0UnRsXG4gICAgICAgICAgICB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5TmFtZSA9XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jb21wb25lbnROYW1lIHx8IGdldERpc3BsYXlOYW1lKENvbXBvbmVudCk7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0UHJvcHMgPSBnZXRDb250ZXh0UHJvcHMoXG4gICAgICAgICAgICAgICAgeyBwcmVmaXgsIGxvY2FsZSwgcHVyZSwgcnRsIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuZXh0UHJlZml4LFxuICAgICAgICAgICAgICAgICAgICBuZXh0TG9jYWxlOiB7IC4uLmN1cnJlbnRHbG9iYWxMb2NhbGUsIC4uLm5leHRMb2NhbGUgfSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFB1cmUsXG4gICAgICAgICAgICAgICAgICAgIG5leHRSdGw6IHR5cGVvZiBuZXh0UnRsID09PSAnYm9vbGVhbicgPyBuZXh0UnRsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHbG9iYWxSdGwgPT09IHRydWUgPyB0cnVlIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3Q29udGV4dFByb3BzID0gWydwcmVmaXgnLCAnbG9jYWxlJywgJ3B1cmUnLCAncnRsJ10ucmVkdWNlKFxuICAgICAgICAgICAgICAgIChyZXQsIG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0UHJvcHNbbmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbbmFtZV0gPSBjb250ZXh0UHJvcHNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdPdGhlcnMgPSBvcHRpb25zLnRyYW5zZm9ybSA/XG4gICAgICAgICAgICAgICAgb3B0aW9ucy50cmFuc2Zvcm0ob3RoZXJzLCB0aGlzLl9kZXByZWNhdGVkKSA6XG4gICAgICAgICAgICAgICAgb3RoZXJzO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld090aGVyc31cbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld0NvbnRleHRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLl9nZXRJbnN0YW5jZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIENvbmZpZ2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gYENvbmZpZygke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9KWA7XG5cbiAgICBob2lzdE5vblJlYWN0U3RhdGljKENvbmZpZ2VkQ29tcG9uZW50LCBDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIENvbmZpZ2VkQ29tcG9uZW50O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy1wcm92aWRlci9jb25maWcuanN4IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZXM6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gICAgbWl4aW5zOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgICBuYW1lOiB0cnVlLFxuICAgIGxlbmd0aDogdHJ1ZSxcbiAgICBwcm90b3R5cGU6IHRydWUsXG4gICAgY2FsbGVyOiB0cnVlLFxuICAgIGNhbGxlZTogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mICYmIGdldFByb3RvdHlwZU9mKE9iamVjdCk7XG5cbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHsgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcblxuICAgICAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFSRUFDVF9TVEFUSUNTW2tleV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAoIWJsYWNrbGlzdCB8fCAhYmxhY2tsaXN0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgIHRyeSB7IC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzQDIuNS41QGhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwiLyoqXG4gKiDlj5bmtojkuovku7bnu5HlrppcbiAqIEBwYXJhbSAgeyp9ICAgbm9kZSAgICAgICBET03oioLngrnmiJbku7vkvZXlj6/ku6Xnu5Hlrprkuovku7bnmoTlr7nosaFcbiAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudE5hbWUgIOS6i+S7tuWQjVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAg5Zue6LCD5pa55rOVXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIFt1c2VDYXB0dXJlPWZhbHNlXSDmmK/lkKblvIDlkK/kuovku7bmjZXojrfkvJjlhYhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mZiAobm9kZSwgZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIOe7keWumuS6i+S7tlxuICogQHBhcmFtICB7Kn0gICBub2RlICAgICAgIERPTeiKgueCueaIluS7u+S9leWPr+S7pee7keWumuS6i+S7tueahOWvueixoVxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50TmFtZSAg5LqL5Lu25ZCNXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgICDlm57osIPmlrnms5VcbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgdXNlQ2FwdHVyZSDmmK/lkKblvIDlkK/kuovku7bmjZXojrfkvJjlhYhcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICDov5Tlm57nmoRvYmplY3TkuK3ljIXlkKvkuIDkuKpvZmbmlrnms5XvvIznlKjkuo7lj5bmtojkuovku7bnm5HlkKxcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgaGFuZGxlciA9IGV2ZW50cy5vbihkb2N1bWVudC5ib2R5LCAnY2xpY2snLCBlID0+IHtcbiAqICAgICAvLyBoYW5kbGUgY2xpY2sgLi4uXG4gKiB9KTtcbiAqIC8vIOWPlua2iOS6i+S7tue7keWumlxuICogaGFuZGxlci5vZmYoKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uIChub2RlLCBldmVudE5hbWUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAobm9kZS5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlIHx8IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvZmY6ICgpID0+IG9mZihub2RlLCBldmVudE5hbWUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKVxuICAgIH07XG59XG5cbi8qKlxuICog57uR5a6a5LqL5Lu277yM5Y+q5omn6KGM5LiA5qyh5ZCO6ZSA5q+BXG4gKiBAcGFyYW0gIHsqfSAgIG5vZGUgICAgICAgRE9N6IqC54K55oiW5Lu75L2V5Y+v5Lul57uR5a6a5LqL5Lu255qE5a+56LGhXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnROYW1lICDkuovku7blkI1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgIOWbnuiwg+aWueazlVxuICogQHBhcmFtICB7Qm9vbGVhbn0gICB1c2VDYXB0dXJlIOaYr+WQpuW8gOWQr+S6i+S7tuaNleiOt+S8mOWFiFxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICAgIOi/lOWbnueahG9iamVjdOS4reWMheWQq+S4gOS4qm9mZuaWueazle+8jOeUqOS6juWPlua2iOS6i+S7tuebkeWQrFxuICovXG5leHBvcnQgZnVuY3Rpb24gb25jZSAobm9kZSwgZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHJldHVybiBvbihub2RlLCBldmVudE5hbWUsIGZ1bmN0aW9uIF9fZm4gKC4uLmFyZ3MpIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgLy8g55Sx5LqOYWRkRXZlbnRMaXN0ZW5lcuS4reeahOWPguaVsG9wdGlvbnPlj6rlnKhDaHJvbWUgNTXjgIFGaXJlZm94KEdlY2tvKeS7peS4iueJiOacrOaUr+aMge+8jOaVhei/mOaYr+eUqOS8oOe7n+eahOaWueazleWunueOsG9uY2VcbiAgICAgICAgb2ZmKG5vZGUsIGV2ZW50TmFtZSwgX19mbiwgdXNlQ2FwdHVyZSk7XG4gICAgfSwgdXNlQ2FwdHVyZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9ldmVudHMuanMiLCJpbXBvcnQge2lzUHJvbWlzZX0gZnJvbSAnLi9vYmplY3QnO1xuXG4vKipcbiAqIOS4gOS4quepuuaWueazle+8jOi/lOWbnuWFpeWPguacrOi6q+aIluepuuWvueixoVxuICovXG5leHBvcnQgY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4vKipcbiAqIOWwhk7kuKrmlrnms5XlkIjlubbkuLrkuIDkuKrpk77lvI/osIPnlKjnmoTmlrnms5VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAg5ZCI5bm25ZCO55qE5pa55rOVXG4gKiDlj4LogIMgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC91dGlsL1xuICpcbiAqIEBleGFtcGxlXG4gKiBmdW5jLm1ha2VDaGFpbih0aGlzLmhhbmRsZUNoYW5nZSwgdGhpcy5wcm9wcy5vbkNoYW5nZSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2hhaW4gKC4uLmZucykge1xuICAgIGlmIChmbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmbnNbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IGZucy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmbnNbaV0gJiYgZm5zW2ldLmFwcGx5KSB7XG4gICAgICAgICAgICAgICAgZm5zW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiDmibnph4/mlLnlj5jmlrnms5XnmoTkuIrkuIvmlodcbiAqIOatpOaWueazleWcqHJlYWN057uE5Lu25Lit5b6I5pyJ55So77yM5ZyoY29uc3RydWN0b3LkuK3mibnph4/lsIbnu4Tku7bkuIrnmoTmlrnms5XmiafooYzkuIrkuIvmlofnu5HlrprliLDnu4Tku7bmnKzouqtcbiAqIOazqOaEj++8mueUqGJpbmTmlLnlj5jlh73mlbDov5DooYznmoTkuIrkuIvmloflj6rkvJrnlJ/mlYjkuIDmrKFcbiAqIEBwYXJhbSAge09iamVjdH0gY3R4IOaWueazleaMgui9veeahOWvueixoeS7peWPiuaJp+ihjOeahOS4iuS4i+aWh1xuICogQHBhcmFtICB7QXJyYXk8U3RyaW5nPn0gZm5zIOaWueazleWQjeWIl+ihqFxuICpcbiAqIEBleGFtcGxlXG4gKiBmdW5jLmJpbmRDdHgodGhpcywgWydoYW5kbGVDbGljaycsICdoYW5kbGVDaGFuZ2UnXSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kQ3R4IChjdHgsIGZucywgbnMpIHtcbiAgICBpZiAodHlwZW9mIGZucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZm5zID0gW2Zuc107XG4gICAgfVxuXG4gICAgLy8g5pa55rOV55qE5oyC6L2956m66Ze077yM5aaC5p6c5LiN5Lyg77yM6buY6K6k5LiOY3R455u45ZCMXG4gICAgbnMgPSBucyB8fCBjdHg7XG5cbiAgICBmbnMuZm9yRWFjaChmbk5hbWUgPT4ge1xuICAgICAgICAvLyDov5nph4zkuI3opoHmt7vliqDnqbrmlrnms5XliKTmlq3vvIznlLHosIPnlKjogIXkv53or4HmraPnoa7mgKfvvIzlkKbliJnlh7rkuobpl67popjml6Dms5XmjpLmn6VcbiAgICAgICAgbnNbZm5OYW1lXSA9IG5zW2ZuTmFtZV0uYmluZChjdHgpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIOeUqOS6juaJp+ihjOWbnuiwg+aWueazleWQjueahOmAu+i+kVxuICogQHBhcmFtICB7Kn0gcmV0ICAgICAgICAgICAg5Zue6LCD5pa55rOV5omn6KGM57uT5p6cXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gc3VjY2VzcyDmiafooYznu5Pmnpzov5Tlm57pnZ5mYWxzZeeahOWbnuiwg1xuICogQHBhcmFtICB7RnVuY3Rpb259IFtmYWlsdXJlPW5vb3BdIOaJp+ihjOe7k+aenOi/lOWbnmZhbHNl55qE5Zue6LCDXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9taXNlQ2FsbCAocmV0LCBzdWNjZXNzLCBmYWlsdXJlID0gbm9vcCkge1xuICAgIGlmIChpc1Byb21pc2UocmV0KSkge1xuICAgICAgICByZXR1cm4gcmV0LnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgZmFpbHVyZShlKTtcbiAgICAgICAgICAgIC8vIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXQgIT09IGZhbHNlID8gc3VjY2VzcyhyZXQpIDogZmFpbHVyZShyZXQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZnVuYy5qcyIsImltcG9ydCB7IGlzUHJvZHVjdGlvbiB9IGZyb20gJy4vZW52JztcblxuLyogZXNsaW50IG5vLWNvbnNvbGU6IDAgKi9cblxuLyoqXG4gKiDlj43lr7nkvb/nlKjmn5DkuIDmlrnms5XmiJblsZ7mgKfnmoTorablkYpcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcHMgICAgIOi/h+aXtueahOWxnuaAp+aIluaWueazleWQjVxuICogQHBhcmFtICB7U3RyaW5nfSBpbnN0ZWFkICAg5pu/5Luj55qE5bGe5oCn5oiW5pa55rOV5ZCNXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNvbXBvbmVudCDnu4Tku7blkI1cbiAqXG4gKiBAZXhhbXBsZVxuICogbG9nLmRlcHJlY2F0ZWQoJ29uQmVmb3JlQ2xvc2UnLCAnYmVmb3JlQ2xvc2UnLCAnRGlhbG9nJyk7XG4gKiAvLyBXYXJuaW5nOiBvbkJlZm9yZUNsb3NlIGlzIGRlcHJlY2F0ZWQgYXQgWyBEaWFsb2cgXSwgdXNlIFsgYmVmb3JlQ2xvc2UgXSBpbnN0ZWFkIG9mIGl0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlZCAocHJvcHMsIGluc3RlYWQsIGNvbXBvbmVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCFpc1Byb2R1Y3Rpb24oKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBbICR7cHJvcHN9IF0gaXMgZGVwcmVjYXRlZCBhdCBbICR7Y29tcG9uZW50fSBdLCBgICtcbiAgICAgICAgICAgIGB1c2UgWyAke2luc3RlYWR9IF0gaW5zdGVhZCBvZiBpdC5gXG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vKipcbiAqIOaOp+WItuWPsOitpuWRiuaXpeW/l1xuICogQHBhcmFtICB7U3RyaW5nfSBtc2dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcgKG1zZykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiAke21zZ31gKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2cuanMiLCJpbXBvcnQge2hhc0RPTX0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHtlYWNofSBmcm9tICcuL29iamVjdCc7XG5cbmNvbnN0IGFuaW1hdGlvbkVuZEV2ZW50TmFtZXMgPSB7XG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJ1xufTtcblxuY29uc3QgdHJhbnNpdGlvbkV2ZW50TmFtZXMgPSB7XG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJ1xufTtcblxuLyoqXG4gKiDmmK/lkKbmlK/mjIHmn5DkupvliqjmlYjkuovku7bvvIzlpoLmnpzmlK/mjIHvvIzov5Tlm57nm7jlupTnmoRlbmTkuovku7blkI1cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtPYmplY3Q8U3RyaW5nPn0gbmFtZXNcbiAqIEByZXR1cm4ge09iamVjdHxmYWxzZX1cbiAqL1xuZnVuY3Rpb24gX3N1cHBvcnRFbmQgKG5hbWVzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHJldCA9IGZhbHNlO1xuXG4gICAgZWFjaChuYW1lcywgKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChlbC5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldCA9IHtlbmQ6IHZhbH07XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICog5piv5ZCm5pSv5oyB5p+Q5LqbQ1NT5bGe5oCnXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7T2JqZWN0PEFycmF5PFN0cmluZz4+fSBuYW1lc1xuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgaXMgc3VwcG9ydFxuICovXG5mdW5jdGlvbiBfc3VwcG9ydENTUyAobmFtZXMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcmV0ID0gZmFsc2U7XG5cbiAgICBlYWNoKG5hbWVzLCAodmFsLCBrZXkpID0+IHtcbiAgICAgICAgZWFjaCh2YWwsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZVtrZXldID0gaXRlbTtcbiAgICAgICAgICAgICAgICByZXQgPSByZXQgfHwgZWwuc3R5bGVba2V5XSA9PT0gaXRlbTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJdCB3aWxsIGJlIHRocm93IGVycm9yIHdoZW4gc2V0IHVua25vd24gcHJvcGVydHkgdW5kZXIgSUU4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIXJldDsgLy8g5aaC5p6c5pyJ5LiA5Liq5pSv5oyB5bCx6L+U5ZueZmFsc2XvvIzlkI7pnaLkuI3pnIDopoHlho3liKTmlq1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICFyZXQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIOaYr+WQpuaUr+aMgWFuaW1hdGlvbuS7peWPiuWKqOeUu+e7k+adn+S6i+S7tuWQjVxuICogQHR5cGUge09iamVjdHxmYWxzZX1cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBlbmQg5Yqo55S757uT5p2f5LqL5Lu25ZCNXG4gKi9cbmV4cG9ydCBjb25zdCBhbmltYXRpb24gPSBfc3VwcG9ydEVuZChhbmltYXRpb25FbmRFdmVudE5hbWVzKTtcblxuLyoqXG4gKiDmmK/lkKbmlK/mjIF0cmFuc2l0aW9u5Lul5Y+K6L+H5ruk5pWI5p6c57uT5p2f5LqL5Lu25ZCNXG4gKiBAdHlwZSB7T2JqZWN0fGZhbHNlfVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGVuZCDov4fmuKHmlYjmnpznu5PmnZ/kuovku7blkI1cbiAqL1xuZXhwb3J0IGNvbnN0IHRyYW5zaXRpb24gPSBfc3VwcG9ydEVuZCh0cmFuc2l0aW9uRXZlbnROYW1lcyk7XG5cbi8qKlxuICog5piv5ZCm5pSv5oyBZmxleOWxnuaAp1xuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBmbGV4ID0gX3N1cHBvcnRDU1Moe1xuICAgIGRpc3BsYXk6IFsnZmxleCcsICctd2Via2l0LWZsZXgnLCAnLW1vei1mbGV4JywgJy1tcy1mbGV4Ym94J11cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvc3VwcG9ydC5qcyIsImltcG9ydCBLRVlDT0RFIGZyb20gJy4va2V5Y29kZSc7XG5pbXBvcnQge2VhY2h9IGZyb20gJy4vb2JqZWN0JztcblxuLyoqXG4gKiDnlKjkuo7liIfmjaLpobXpnaLlhYPntKDnmoTnhKbngrlcbiAqL1xuXG5cbi8qKlxuICog5YWD57Sg5piv5ZCm5Y+v6KeBXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICAge0VsZW1lbnR9ICBub2RlXG4gKiBAcmV0dXJuICB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gX2lzVmlzaWJsZShub2RlKSB7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IGRvY3VtZW50LmJvZHkgfHwgbm9kZSA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgbm9kZS5zdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIOWFg+e0oOaYr+WQpuWPr+S7peiOt+WPlueEpueCuVxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAgIHtFbGVtZW50fSAgbm9kZVxuICogQHJldHVybiAge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIF9pc0ZvY3VzYWJsZShub2RlKSB7XG4gICAgY29uc3Qgbm9kZU5hbWUgPSBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgdGFiSW5kZXggPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuICAgIGNvbnN0IGhhc1RhYkluZGV4ID0gIWlzTmFOKHRhYkluZGV4KSAmJiB0YWJJbmRleCA+IC0xO1xuXG4gICAgaWYgKF9pc1Zpc2libGUobm9kZSkpIHtcbiAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuZGlzYWJsZWQgJiYgbm9kZS50eXBlICE9PSAnaGlkZGVuJztcbiAgICAgICAgfSBlbHNlIGlmIChbJ3NlbGVjdCcsICd0ZXh0YXJlYScsICdidXR0b24nXS5pbmRleE9mKG5vZGVOYW1lKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuZGlzYWJsZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZU5hbWUgPT09ICdhJykge1xuICAgICAgICAgICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGhhc1RhYkluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYXNUYWJJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICog5YiX5Ye66IO96I635Y+W54Sm54K555qE5a2Q6IqC54K5XG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlIOWuueWZqOiKgueCuVxuICogQHJldHVybiB7QXJyYXk8RWxlbWVudD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2N1c05vZGVMaXN0KG5vZGUpIHtcbiAgICBjb25zdCByZXMgPSBbXTtcbiAgICBjb25zdCBub2RlTGlzdCA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuXG4gICAgZWFjaChub2RlTGlzdCwgaXRlbSA9PiB7XG4gICAgICAgIGlmIChfaXNGb2N1c2FibGUoaXRlbSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWF1dG8tZm9jdXMnKSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcbiAgICAgICAgICAgIHJlc1ttZXRob2RdKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoX2lzRm9jdXNhYmxlKG5vZGUpKSB7XG4gICAgICAgIHJlcy51bnNoaWZ0KG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIOeUqOS6juiusOW9leS4iuS4gOasoeiOt+W+l+eEpueCueeahOaXoOe0oFxubGV0IGxhc3RGb2N1c0VsZW1lbnQgPSBudWxsO1xuXG4vKipcbiAqIOS/neWtmOacgOi/keS4gOasoeiOt+W+l+eEpueCueeahOaXoOe0oFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxhc3RGb2N1c05vZGUoKSB7XG4gICAgbGFzdEZvY3VzRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG59XG5cbi8qKlxuICog5riF6Zmk54Sm54K56K6w5b2VXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckxhc3RGb2N1c05vZGUoKSB7XG4gICAgbGFzdEZvY3VzRWxlbWVudCA9IG51bGw7XG59XG5cbi8qKlxuICog5bCd6K+V5bCG54Sm54K55YiH5o2i5Yiw5LiK5LiA5Liq5YWD57SgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiYWNrTGFzdEZvY3VzTm9kZSgpIHtcbiAgICBpZiAobGFzdEZvY3VzRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8g5YWD57Sg5Y+v6IO95bey57uP6KKr56e75Yqo5LqGXG4gICAgICAgICAgICBsYXN0Rm9jdXNFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSAuLi5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiDlnKjpmZDliLbnmoTojIPlm7TlhoXliIfmjaLnhKbngrlcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGUg5a655Zmo6IqC54K5XG4gKiBAcGFyYW0gIHtFdmVudH0gZSAgICAgIOmUruebmOS6i+S7tlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGltaXRUYWJSYW5nZShub2RlLCBlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5UQUIpIHtcbiAgICAgICAgY29uc3QgdGFiTm9kZUxpc3QgPSBnZXRGb2N1c05vZGVMaXN0KG5vZGUpO1xuICAgICAgICBjb25zdCBtYXhJbmRleCA9IHRhYk5vZGVMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFiTm9kZUxpc3QuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldEluZGV4ID0gaW5kZXggKyAoZS5zaGlmdEtleSA/IC0xIDogMSk7XG4gICAgICAgICAgICB0YXJnZXRJbmRleCA8IDAgJiYgKHRhcmdldEluZGV4ID0gbWF4SW5kZXgpO1xuICAgICAgICAgICAgdGFyZ2V0SW5kZXggPiBtYXhJbmRleCAmJiAodGFyZ2V0SW5kZXggPSAwKTtcbiAgICAgICAgICAgIHRhYk5vZGVMaXN0W3RhcmdldEluZGV4XS5mb2N1cygpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZm9jdXMuanMiLCJsZXQgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuLyoqXG4gKiDnlJ/miJDlhajlsYDllK/kuIDnmoRpZFxuICogQHBhcmFtICB7U3RyaW5nfSBbcHJlZml4PScnXSDliY3nvIDlrZfnrKbkuLJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqXG4gKiBAZXhhbXBsZVxuICogZ3VpZCgpOyAvLyBqN2p2NTA5Y1xuICogZ3VpZCgncHJlZml4LScpOyAvLyBwcmVmaXgtajdqdjUwOWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIHByZWZpeCA9IHByZWZpeCB8fCAnJztcblxuICAgIHJldHVybiBwcmVmaXggKyAodGltZXN0YW1wKyspLnRvU3RyaW5nKDM2KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2d1aWQuanMiLCJpbXBvcnQgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnZXRDb250ZXh0UHJvcHMgZnJvbSAnLi9nZXQtY29udGV4dC1wcm9wcyc7XG5pbXBvcnQge1xuICAgIGNvbmZpZyxcbiAgICBpbml0TG9jYWxlcyxcbiAgICBzZXRMYW5ndWFnZSxcbiAgICBzZXRMb2NhbGUsXG4gICAgc2V0RGlyZWN0aW9uLFxuICAgIGdldExvY2FsZSxcbiAgICBnZXRMYW5ndWFnZSxcbiAgICBnZXREaXJlY3Rpb25cbn0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IENvbnN1bWVyIGZyb20gJy4vY29uc3VtZXInO1xuaW1wb3J0IENhY2hlIGZyb20gJy4vY2FjaGUnO1xuXG5jb25zdCBjaGlsZENvbnRleHRDYWNoZSA9IG5ldyBDYWNoZSgpO1xuXG4vKipcbiAqIENvbmZpZ1Byb3ZpZGVyXG4gKiBAcHJvcHNFeHRlbmRzIGZhbHNlXG4gKi9cbmNsYXNzIENvbmZpZ1Byb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICog5qC35byP57G75ZCN55qE5ZOB54mM5YmN57yAXG4gICAgICAgICAqL1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlm73pmYXljJbmlofmoYjlr7nosaHvvIzlsZ7mgKfkuLrnu4Tku7bnmoQgZGlzcGxheU5hbWVcbiAgICAgICAgICovXG4gICAgICAgIGxvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuW8gOWQryBQdXJlIFJlbmRlciDmqKHlvI/vvIzkvJrmj5Dpq5jmgKfog73vvIzkvYbmmK/kuZ/kvJrluKbmnaXlia/kvZznlKhcbiAgICAgICAgICovXG4gICAgICAgIHB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5Zyo5byA5Y+R5qih5byP5LiL5pi+56S657uE5Lu25bGe5oCn6KKr5bqf5byD55qEIHdhcm5pbmcg5o+Q56S6XG4gICAgICAgICAqL1xuICAgICAgICB3YXJuaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuW8gOWQryBydGwg5qih5byPXG4gICAgICAgICAqL1xuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog57uE5Lu25qCRXG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgd2FybmluZzogdHJ1ZVxuICAgIH07XG5cbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIG5leHRQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG5leHRMb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIG5leHRQdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbmV4dFJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG5leHRXYXJuaW5nOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDkvKDlhaXnu4Tku7bvvIznlJ/miJDlj5cgQ29uZmlnUHJvdmlkZXIg5o6n5Yi255qEIEhPQyDnu4Tku7ZcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gQ29tcG9uZW50IOe7hOS7tuexu1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOWPr+mAiemhuVxuICAgICAqIEByZXR1cm5zIHtDb21wb25lbnR9IEhPQ1xuICAgICAqL1xuICAgIHN0YXRpYyBjb25maWcgPSAoQ29tcG9uZW50LCBvcHRpb25zKSA9PiB7XG4gICAgICAgIHJldHVybiBjb25maWcoQ29tcG9uZW50LCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5Lyg5YWl57uE5Lu255qEIHByb3BzIOWSjCBkaXNwbGF5TmFtZe+8jOW+l+WIsOWSjCBjaGlsZENvbnRleHQg6K6h566X6L+H55qE5YyF5ZCr5pyJIHByZWlmeC9sb2NhbGUvcHVyZSDnmoTlr7nosaHvvIzkuIDoiKznlKjkuo7pgJrov4fpnZnmgIHmlrnms5XnlJ/miJDohLHnprvnu4Tku7bmoJHnmoTnu4Tku7ZcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMg57uE5Lu255qEIHByb3BzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRpc3BsYXlOYW1lIOe7hOS7tueahCBkaXNwbGF5TmFtZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IOaWsOeahCBjb250ZXh0IHByb3BzXG4gICAgICovXG4gICAgc3RhdGljIGdldENvbnRleHRQcm9wcyA9IChwcm9wcywgZGlzcGxheU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHRQcm9wcyhwcm9wcywgY2hpbGRDb250ZXh0Q2FjaGUucm9vdCgpIHx8IHt9LCBkaXNwbGF5TmFtZSk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpbml0TG9jYWxlcyA9IGluaXRMb2NhbGVzO1xuICAgIHN0YXRpYyBzZXRMYW5ndWFnZSA9IHNldExhbmd1YWdlO1xuICAgIHN0YXRpYyBzZXRMb2NhbGUgPSBzZXRMb2NhbGU7XG4gICAgc3RhdGljIHNldERpcmVjdGlvbiA9IHNldERpcmVjdGlvbjtcbiAgICBzdGF0aWMgZ2V0TGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZTtcbiAgICBzdGF0aWMgZ2V0TG9jYWxlID0gZ2V0TG9jYWxlO1xuICAgIHN0YXRpYyBnZXREaXJlY3Rpb24gPSBnZXREaXJlY3Rpb247XG4gICAgc3RhdGljIENvbnN1bWVyID0gQ29uc3VtZXI7XG5cbiAgICBzdGF0aWMgZ2V0Q29udGV4dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBuZXh0UHJlZml4LCBuZXh0TG9jYWxlLCBuZXh0UHVyZSwgbmV4dFJ0bCwgbmV4dFdhcm5pbmcgfSA9IGNoaWxkQ29udGV4dENhY2hlLnJvb3QoKSB8fCB7fTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJlZml4OiBuZXh0UHJlZml4LFxuICAgICAgICAgICAgbG9jYWxlOiBuZXh0TG9jYWxlLFxuICAgICAgICAgICAgcHVyZTogbmV4dFB1cmUsXG4gICAgICAgICAgICBydGw6IG5leHRSdGwsXG4gICAgICAgICAgICB3YXJuaW5nOiBuZXh0V2FybmluZ1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICBjaGlsZENvbnRleHRDYWNoZS5hZGQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgY2hpbGRDb250ZXh0Q2FjaGUuZ2V0KHRoaXMsIHt9KSwgdGhpcy5nZXRDaGlsZENvbnRleHQoKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJlZml4LCBsb2NhbGUsIHB1cmUsIHdhcm5pbmcsIHJ0bCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV4dFByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgbmV4dExvY2FsZTogbG9jYWxlLFxuICAgICAgICAgICAgbmV4dFB1cmU6IHB1cmUsXG4gICAgICAgICAgICBuZXh0UnRsOiBydGwsXG4gICAgICAgICAgICBuZXh0V2FybmluZzogd2FybmluZ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRNb21lbnRMb2NhbGUodGhpcy5wcm9wcy5sb2NhbGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2FsZSAhPT0gbmV4dFByb3BzLmxvY2FsZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRNb21lbnRMb2NhbGUobmV4dFByb3BzLmxvY2FsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGNoaWxkQ29udGV4dENhY2hlLmFkZChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBjaGlsZENvbnRleHRDYWNoZS5nZXQodGhpcywge30pLCB0aGlzLmdldENoaWxkQ29udGV4dCgpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBjaGlsZENvbnRleHRDYWNoZS5yZW1vdmUodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0TW9tZW50TG9jYWxlKGxvY2FsZSkge1xuICAgICAgICBsZXQgbW9tZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vbWVudCAmJiBsb2NhbGUpIHtcbiAgICAgICAgICAgIG1vbWVudC5sb2NhbGUobG9jYWxlLm1vbWVudExvY2FsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBDaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLXByb3ZpZGVyL2luZGV4LmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSB2YWx1ZXMgYXMgb2JqZWN0IGFuZCBrZXlzXG4gKiBnZW5lcmF0ZWQgYnkgcnVubmluZyBlYWNoIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0eVxuICogb2Ygb2JqZWN0IHRocnUgaXRlcmF0ZWUuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBtYXBLZXlzID0gKG9iaiwgZm4pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICAgICAgICBjb25zdCBuZXdLZXkgPSBmbihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdFtuZXdLZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIHNwZWNpZmljIGtleSB3aXRoIHByZWZpeCBgbmV4dGBcbiAqIGFuZCBsb3dlcmNhc2UgZmlyc3QgY2hhcmFjdGVyIG9mIHRoZSByZXN1bHQuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IHJlcGxhY2VLZXkgPSBrZXkgPT5cbiAgICBrZXkucmVwbGFjZSgvXihuZXh0KShbQS1aXSkvLCAobWF0Y2gsIHAxLCBwMikgPT4gcDIudG9Mb3dlckNhc2UoKSk7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCB0cmFuc2Zvcm1Db250ZXh0ID0gc291cmNlID0+IG1hcEtleXMoc291cmNlLCByZXBsYWNlS2V5KTtcblxuLyoqXG4gKiBDb25zdW1lclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKi9cbmNvbnN0IENvbnN1bWVyID0gKHsgY2hpbGRyZW4gfSwgY29udGV4dCkgPT5cbiAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih0cmFuc2Zvcm1Db250ZXh0KGNvbnRleHQpKSA6IG51bGw7XG5cbi8qKlxuICogUHJvcFR5cGVzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICovXG5Db25zdW1lci5wcm9wVHlwZXMgPSB7XG4gICAgLy8gUmVuZGVyIGNvbnRleHQgYXMgZnVuY3Rpb25cbiAgICAvLyBGdW5jdGlvbihjb250ZXh0OiBvYmplY3QpOiBSZWFjdEVsZW1lbnRcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuICogQ29udGV4dFR5cGVzIChsZWdhY3kgY29udGV4dClcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKi9cbkNvbnN1bWVyLmNvbnRleHRUeXBlcyA9IHtcbiAgICBuZXh0UHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5leHRMb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbmV4dFB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgIG5ld1J0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmV4dFdhcm5pbmc6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25zdW1lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWctcHJvdmlkZXIvY29uc3VtZXIuanN4IiwiY2xhc3MgQ2FjaGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9yb290ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3RvcmUgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5zaXplID09PSAwO1xuICAgIH1cblxuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLmhhcyhrZXkpO1xuICAgIH1cblxuICAgIGdldChrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBjb25zdCByZXMgPSB0aGlzLmhhcyhrZXkpID8gdGhpcy5fc3RvcmUuZ2V0KGtleSkgOiB0aGlzLnJvb3QoKTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcmVzID09PSAndW5kZWZpbmVkJyB8fCByZXMgPT09IG51bGwpID9cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA6IHJlcztcbiAgICB9XG5cbiAgICBhZGQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbXB0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLl9yb290ID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0b3JlLnNldChrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5fc3RvcmUuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICB0aGlzLl9zdG9yZS5kZWxldGUoa2V5KTtcbiAgICB9XG5cbiAgICByb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuZ2V0KHRoaXMuX3Jvb3QpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLXByb3ZpZGVyL2NhY2hlLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29uL21haW4uc2NzcyIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsImltcG9ydCBDb25maWdQcm92aWRlciBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IEJhbGxvb24gZnJvbSAnLi9iYWxsb29uJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgSW5uZXIgZnJvbSAnLi9pbm5lcic7XG5cbkJhbGxvb24uVG9vbHRpcCA9IENvbmZpZ1Byb3ZpZGVyLmNvbmZpZyhUb29sdGlwLCB7XG4gICAgdHJhbnNmb3JtOiAocHJvcHMsIGRlcHJlY2F0ZWQpID0+IHtcbiAgICAgICAgaWYgKCd0ZXh0JyBpbiBwcm9wcykge1xuICAgICAgICAgICAgZGVwcmVjYXRlZCgndGV4dCcsICdjaGlsZHJlbicsICdUb29sdGlwJyk7XG4gICAgICAgICAgICBjb25zdCB7IHRleHQsIC4uLm90aGVycyB9ID0gcHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHsgY2hpbGRyZW46IHRleHQsIC4uLm90aGVycyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbn0pO1xuQmFsbG9vbi5Jbm5lciA9IElubmVyO1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlci5jb25maWcoQmFsbG9vbiwge1xuICAgIHRyYW5zZm9ybTogKHByb3BzLCBkZXByZWNhdGVkKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5hbGlnbm1lbnQpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZWQoJ2FsaWdubWVudCcsICdhbGlnbkVkZ2UnLCAnQmFsbG9vbicpO1xuICAgICAgICAgICAgY29uc3QgeyBhbGlnbm1lbnQsIC4uLm90aGVycyB9ID0gcHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHsgYWxpZ25FZGdlOiBhbGlnbm1lbnQgPT09ICdlZGdlJywgLi4ub3RoZXJzIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLm9uQ2xvc2VDbGljaykge1xuICAgICAgICAgICAgZGVwcmVjYXRlZCgnb25DbG9zZUNsaWNrJywgJ29uVmlzaWJsZUNoYW5nZScsICdCYWxsb29uJyk7XG4gICAgICAgICAgICBjb25zdCB7IG9uQ2xvc2VDbGljaywgb25WaXNpYmxlQ2hhbmdlLCAuLi5vdGhlcnMgfSA9IHByb3BzO1xuICAgICAgICAgICAgY29uc3QgbmV3T25WaXNpYmxlQ2hhbmdlID0gKHZpc2libGUsIHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWFzb24gPT09ICdjbG9zZUNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2UodmlzaWJsZSwgcmVhc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvcHMgPSB7IG9uVmlzaWJsZUNoYW5nZTogbmV3T25WaXNpYmxlQ2hhbmdlLCAuLi5vdGhlcnMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi4vb3ZlcmxheSc7XG5pbXBvcnQge2Z1bmMsIG9iaiwgbG9nfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBCYWxsb29uSW5uZXIgZnJvbSAnLi9pbm5lcic7XG5pbXBvcnQge25vcm1hbE1hcCwgZWRnZU1hcH0gZnJvbSAnLi9hbGlnbk1hcCc7XG5cbmNvbnN0IHtub29wfSA9IGZ1bmM7XG5jb25zdCB7UG9wdXB9ID0gT3ZlcmxheTtcblxubGV0IGFsaWduTWFwID0gbm9ybWFsTWFwO1xuXG4vKiogQmFsbG9vbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbG9vbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfVxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDoh6rlrprkuYnnsbvlkI1cbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiHquWumuS5ieWGheaVm+agt+W8j1xuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmta7lsYLnmoTlhoXlrrlcbiAgICAgICAgICovXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog5qC35byP57G75Z6LXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydub3JtYWwnLCAncHJpbWFyeSddKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguW9k+WJjeaYvuekuueahOeKtuaAgVxuICAgICAgICAgKi9cbiAgICAgICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLpu5jorqTmmL7npLrnmoTnirbmgIFcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWcqOaYvuekuuWSjOmakOiXj+inpuWPkeeahOS6i+S7tlxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZpc2libGUg5by55bGC5piv5ZCm6ZqQ6JeP5ZKM5pi+56S6XG4gICAgICAgICAqL1xuICAgICAgICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55Ye65bGC5a+56b2Q5pa55byPXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnbkVkZ2U6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5pi+56S65YWz6Zet5oyJ6ZKuXG4gICAgICAgICAqL1xuICAgICAgICBjbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICAgICAgICogQGVudW1kZXNjIOS4iiwg5Y+zLCDkuIssIOW3piwg5LiK5bemLCDkuIrlj7MsIOS4i+W3piwg5LiL5Y+zLCDlt6bkuIosIOW3puS4iywg5Y+z5LiKLCDlj7PkuIsg5Y+K5YW2IOS4pOS4pOe7hOWQiFxuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3QnLCAncicsICdiJywgJ2wnLCAndGwnLCAndHInLCAnYmwnLCAnYnInLCAnbHQnLCAnbGInLCAncnQnLCAncmInXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnm7jlr7nkuo50cmlnZ2Vy55qE5a6a5L2N55qE5b6u6LCDXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeWFg+e0oFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeihjOS4ulxuICAgICAgICAgKiDpvKDmoIfmgqzmta4sIOiOt+WPluWIsOeEpueCuSwg6byg5qCH54K55Ye7KCdob3ZlcifvvIwnZm9jdXMn77yMJ2NsaWNrJynmiJbogIXlroPku6znu4TmiJDnmoTmlbDnu4TvvIzlpoIgWydob3ZlcicsICdmb2N1cyddXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyVHlwZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG5cbiAgICAgICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDku7vkvZV2aXNpYmxl5Li6ZmFsc2Xml7bkvJrop6blj5HnmoTkuovku7ZcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvbkhvdmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpui/m+ihjOiHquWKqOS9jee9ruiwg+aVtFxuICAgICAgICAgKi9cbiAgICAgICAgbmVlZEFkanVzdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlnKjop6blj5Hku6XlkI7nmoTlu7bml7bmmL7npLosIOWNleS9jeavq+enkiBtc1xuICAgICAgICAgKi9cbiAgICAgICAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmta7lsYLlhbPpl63lkI7op6blj5HnmoTkuovku7YsIOWmguaenOacieWKqOeUu++8jOWImeWcqOWKqOeUu+e7k+adn+WQjuinpuWPkVxuICAgICAgICAgKi9cbiAgICAgICAgYWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLrliLbmm7TmlrDlrprkvY3kv6Hmga9cbiAgICAgICAgICovXG4gICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWHuueOsOWQjuaYr+WQpuiHquWKqGZvY3Vz5Yiw5YaF6YOo56ys5LiA5Liq5YWD57SgXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5a6J5YWo6IqC54K5OuWvueS6jnRyaWdnZXRUeXBl5Li6Y2xpY2vnmoTmta7lsYIs5Lya5Zyo54K55Ye76Zmk5LqG5rWu5bGC5aSW55qE5YW25a6D5Yy65Z+f5pe25YWz6Zet5rWu5bGCLnNhZmVOb2Rl55So5LqO5re75Yqg5LiN6Kem5Y+R5YWz6Zet55qE6IqC54K5LCDlgLzlj6/ku6XmmK9kb23oioLngrnnmoRpZOaIluiAheaYr+iKgueCueeahGRvbeWvueixoVxuICAgICAgICAgKi9cbiAgICAgICAgc2FmZU5vZGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnlKjmnaXmjIflrppzYWZlTm9kZeiKgueCueeahGlk77yM5ZKMc2FmZU5vZGXphY3lkIjkvb/nlKhcbiAgICAgICAgICovXG4gICAgICAgIHNhZmVJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmFjee9ruWKqOeUu+eahOaSreaUvuaWueW8j1xuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW4g6L+b5Zy65Yqo55S7XG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvdXQg5Ye65Zy65Yqo55S7XG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5ib29sXSksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgueahGRvbeiKgueCueWFs+mXreaXtuaYr+WQpuWIoOmZpFxuICAgICAgICAgKi9cbiAgICAgICAgY2FjaGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyH5a6a5rWu5bGC5riy5p+T55qE54i26IqC54K5LCDlj6/ku6XkuLroioLngrlpZOeahOWtl+espuS4su+8jOS5n+WPr+S7pei/lOWbnuiKgueCueeahOWHveaVsOOAglxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgue7hOS7tnN0eWxl77yM6YCP5Lyg57uZUG9wdXBcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7ZjbGFzc05hbWXvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7blsZ7mgKfvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgmlkLCDkvKDlhaXlgLzmiY3kvJrmlK/mjIHml6Dpmpznoo1cbiAgICAgICAgICovXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfTtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIHB1cmU6IGZhbHNlLFxuICAgICAgICB0eXBlOiAnbm9ybWFsJyxcbiAgICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc2l6ZTogJ21lZGl1bScsXG4gICAgICAgIGFsaWduRWRnZTogZmFsc2UsXG4gICAgICAgIGFsaWduOiAnYicsXG4gICAgICAgIG9mZnNldDogWzAsIDBdLFxuICAgICAgICB0cmlnZ2VyOiA8c3Bhbj48L3NwYW4+LFxuICAgICAgICBvbkNsb3NlOiBub29wLFxuICAgICAgICBhZnRlckNsb3NlOiBub29wLFxuICAgICAgICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgICAgIG5lZWRBZGp1c3Q6IGZhbHNlLFxuICAgICAgICB0cmlnZ2VyVHlwZTogJ2hvdmVyJyxcbiAgICAgICAgc2FmZU5vZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgc2FmZUlkOiBudWxsLFxuICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgIGluOiAnem9vbUluJyxcbiAgICAgICAgICAgIG91dDogJ3pvb21PdXQnXG4gICAgICAgIH0sXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgcG9wdXBTdHlsZToge30sXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lOiAnJyxcbiAgICAgICAgcG9wdXBQcm9wczoge31cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWxpZ246IHByb3BzLmFsaWduLFxuICAgICAgICAgICAgdmlzaWJsZTogJ3Zpc2libGUnIGluIHByb3BzID8gcHJvcHMudmlzaWJsZSA6IHByb3BzLmRlZmF1bHRWaXNpYmxlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX29uQ2xvc2UgPSB0aGlzLl9vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX29uUG9zaXRpb24gPSB0aGlzLl9vblBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX29uVmlzaWJsZUNoYW5nZSA9IHRoaXMuX29uVmlzaWJsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2NvbnRlbnRJZCA9IHByb3BzLmlkO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICgndmlzaWJsZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBuZXh0UHJvcHMudmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ2FsaWduJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFsaWduOiBuZXh0UHJvcHMuYWxpZ25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0cmlnZ2VyKSB7XG4gICAgICAgIC8vIE5vdCBDb250cm9sbGVkXG4gICAgICAgIGlmICghKCd2aXNpYmxlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0cmlnZ2VyKTtcblxuICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uQ2xvc2UoZSkge1xuICAgICAgICB0aGlzLl9vblZpc2libGVDaGFuZ2UoZmFsc2UsICdjbG9zZUNsaWNrJyk7XG5cbiAgICAgICAgLy/lv4XpobvliqDkuIpwcmV2ZW50RGVmYXVsdCzlkKbliJnljZXmtYtJReS4i+aKpemUmSzlh7rnjrBmdWxsIHBhZ2UgcmVsb2FkIOW8guW4uFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgX29uUG9zaXRpb24ocmVzKSB7XG4gICAgICAgIGNvbnN0IHsgcnRsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBhbGlnbk1hcCA9IHRoaXMucHJvcHMuYWxpZ25FZGdlID8gZWRnZU1hcCA6IG5vcm1hbE1hcDtcbiAgICAgICAgY29uc3QgbmV3QWxpZ24gPSByZXMuYWxpZ24uam9pbignICcpO1xuICAgICAgICBsZXQgcmVzQWxpZ247XG5cbiAgICAgICAgbGV0IGFsaWduS2V5ID0gJ2FsaWduJztcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgICAgYWxpZ25LZXkgPSAncnRsQWxpZ24nO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYWxpZ25NYXApIHtcbiAgICAgICAgICAgIGlmIChhbGlnbk1hcFtrZXldW2FsaWduS2V5XSA9PT0gbmV3QWxpZ24pIHtcbiAgICAgICAgICAgICAgICByZXNBbGlnbiA9IGtleTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzQWxpZ24gPSByZXNBbGlnbiB8fCB0aGlzLnN0YXRlLmFsaWduO1xuICAgICAgICBpZiAocmVzQWxpZ24gIT09IHRoaXMuc3RhdGUuYWxpZ24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFsaWduOiByZXNBbGlnblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgcHJlZml4LCBjbGFzc05hbWUsIGFsaWduRWRnZSxcbiAgICAgICAgICAgIHRyaWdnZXIsIHRyaWdnZXJUeXBlLCBjaGlsZHJlbiwgY2xvc2FibGUsXG4gICAgICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbiwgZGVsYXksIG5lZWRBZGp1c3QsXG4gICAgICAgICAgICBzYWZlSWQsIGF1dG9Gb2N1cywgc2FmZU5vZGUsIG9uQ2xpY2ssIG9uSG92ZXIsXG4gICAgICAgICAgICBhbmltYXRpb24sIG9mZnNldCwgc3R5bGUsIGNvbnRhaW5lciwgcG9wdXBDb250YWluZXIsIGNhY2hlLCBwb3B1cFN0eWxlLCBwb3B1cENsYXNzTmFtZSwgcG9wdXBQcm9wcywgcnRsLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgbG9nLmRlcHJlY2F0ZWQoJ2NvbnRhaW5lcicsICdwb3B1cENvbnRhaW5lcicsICdCYWxsb29uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGFsaWduIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGFsaWduTWFwID0gYWxpZ25FZGdlID8gZWRnZU1hcCA6IG5vcm1hbE1hcDtcbiAgICAgICAgY29uc3QgX3ByZWZpeCA9IHRoaXMuY29udGV4dC5wcmVmaXggfHwgcHJlZml4O1xuXG4gICAgICAgIGxldCB0ck9yaWdpbiA9ICd0ck9yaWdpbic7XG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICAgIHRyT3JpZ2luID0gJ3J0bFRyT3JpZ2luJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IF9vZmZzZXQgPSBbYWxpZ25NYXBbYWxpZ25dLm9mZnNldFswXSArIG9mZnNldFswXSwgYWxpZ25NYXBbYWxpZ25dLm9mZnNldFsxXSArIG9mZnNldFsxXV07XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpbiA9IGFsaWduTWFwW2FsaWduXVt0ck9yaWdpbl07XG4gICAgICAgIGNvbnN0IF9zdHlsZSA9IHsuLi57dHJhbnNmb3JtT3JpZ2lufSwgLi4uc3R5bGV9O1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoPEJhbGxvb25Jbm5lclxuICAgICAgICAgICAgey4uLm9iai5waWNrT3RoZXJzKE9iamVjdC5rZXlzKEJhbGxvb24ucHJvcFR5cGVzKSwgb3RoZXJzKX1cbiAgICAgICAgICAgIGlkPXt0aGlzLl9jb250ZW50SWR9XG4gICAgICAgICAgICBwcmVmaXg9e19wcmVmaXh9XG4gICAgICAgICAgICBjbG9zYWJsZT17Y2xvc2FibGV9XG4gICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9vbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17X3N0eWxlfVxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxuICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgIHJ0bD17cnRsfVxuICAgICAgICAgICAgYWxpZ25FZGdlPXthbGlnbkVkZ2V9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9CYWxsb29uSW5uZXI+KTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyUHJvcHMgPSB7fTtcbiAgICAgICAgdHJpZ2dlclByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10gPSB0aGlzLl9jb250ZW50SWQ7XG4gICAgICAgIHRyaWdnZXJQcm9wcy50YWJJbmRleCA9ICcwJztcblxuICAgICAgICBjb25zdCBuZXdUcmlnZ2VyID0gUmVhY3QuY2xvbmVFbGVtZW50KHRyaWdnZXIsIHRyaWdnZXJQcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgIHsuLi5wb3B1cFByb3BzfVxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e3RoaXMuX2NvbnRlbnRJZCA/IG5ld1RyaWdnZXIgOiB0cmlnZ2VyfVxuICAgICAgICAgICAgICAgIGNhY2hlPXtjYWNoZX1cbiAgICAgICAgICAgICAgICBzYWZlSWQ9e3NhZmVJZH1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZT17dHJpZ2dlclR5cGV9XG4gICAgICAgICAgICAgICAgYWxpZ249e2FsaWduTWFwW2FsaWduXS5hbGlnbn1cbiAgICAgICAgICAgICAgICBvZmZzZXQ9e19vZmZzZXR9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfVxuICAgICAgICAgICAgICAgIG9uUG9zaXRpb249e3RoaXMuX29uUG9zaXRpb259XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICBvbkhvdmVyPXtvbkhvdmVyfVxuICAgICAgICAgICAgICAgIGFmdGVyQ2xvc2U9e3RoaXMucHJvcHMuYWZ0ZXJDbG9zZX1cbiAgICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e3RoaXMuX29uVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbj17c2hvdWxkVXBkYXRlUG9zaXRpb259XG4gICAgICAgICAgICAgICAgbmVlZEFkanVzdD17bmVlZEFkanVzdH1cbiAgICAgICAgICAgICAgICBhbmltYXRpb249e2FuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICBkZWxheT17ZGVsYXl9XG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XG4gICAgICAgICAgICAgICAgc2FmZU5vZGU9e3NhZmVOb2RlfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcj17cG9wdXBDb250YWluZXIgfHwgY29udGFpbmVyfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9wdXBDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3BvcHVwU3R5bGV9XG4gICAgICAgICAgICAgICAgcnRsPXtydGx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL2JhbGxvb24uanN4IiwiY29uc3Qgb3ZlcmxheU1hbmFnZXIgPSB7XG4gICAgYWxsT3ZlcmxheXM6IFtdLFxuXG4gICAgYWRkT3ZlcmxheShvdmVybGF5KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlT3ZlcmxheShvdmVybGF5KTtcbiAgICAgICAgdGhpcy5hbGxPdmVybGF5cy51bnNoaWZ0KG92ZXJsYXkpO1xuICAgIH0sXG5cbiAgICBpc0N1cnJlbnRPdmVybGF5KG92ZXJsYXkpIHtcbiAgICAgICAgcmV0dXJuIG92ZXJsYXkgJiYgdGhpcy5hbGxPdmVybGF5c1swXSA9PT0gb3ZlcmxheTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlT3ZlcmxheShvdmVybGF5KSB7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmFsbE92ZXJsYXlzLmluZGV4T2Yob3ZlcmxheSk7XG4gICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsT3ZlcmxheXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgb3ZlcmxheU1hbmFnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9tYW5hZ2VyLmpzIiwiaW1wb3J0IHtkb219IGZyb20gJy4uLy4uL3V0aWwnO1xuXG5jb25zdCBWSUVXUE9SVCA9ICd2aWV3cG9ydCc7XG5cbi8vIElFOCBub3Qgc3VwcG9ydCBwYWdlWE9mZnNldFxuY29uc3QgZ2V0UGFnZVggPSAoKSA9PiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5jb25zdCBnZXRQYWdlWSA9ICgpID0+IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4vKipcbiAqIEBwcml2YXRlIGdldCBlbGVtZW50IHJlY3RcbiAqIEBwYXJhbSAgICAgICB7RWxlbWVudH0gZWxlbVxuICogQHJldHVybiAgICAgIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9nZXRFbGVtZW50UmVjdCAoZWxlbSkge1xuICAgIGxldCBvZmZzZXRUb3AgPSAwLFxuICAgICAgICBvZmZzZXRMZWZ0ID0gMDtcblxuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcblxuICAgIGRvIHtcbiAgICAgICAgaWYgKCFpc05hTihlbGVtLm9mZnNldFRvcCkpIHtcbiAgICAgICAgICAgIG9mZnNldFRvcCArPSBlbGVtLm9mZnNldFRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTmFOKGVsZW0ub2Zmc2V0TGVmdCkpIHtcbiAgICAgICAgICAgIG9mZnNldExlZnQgKz0gZWxlbS5vZmZzZXRMZWZ0O1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoKGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudCkgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBvZmZzZXRUb3AgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCksXG4gICAgICAgIGxlZnQ6IG9mZnNldExlZnQgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0KSxcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXRIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBvZmZzZXRXaWR0aFxuICAgIH07XG59XG5cbi8qKlxuICogQHByaXZhdGUgZ2V0IHZpZXdwb3J0IHNpemVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2dldFZpZXdwb3J0U2l6ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuXG4gICAgc3RhdGljIFZJRVdQT1JUID0gVklFV1BPUlQ7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHN0YXRpYyBwbGFjZSBtZXRob2RcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIHByb3BzXG4gICAgICogICAgIEBwYXJhbSAge0RPTX0gICAgICBwcm9wcy5waW5FbGVtZW50XG4gICAgICogICAgIEBwYXJhbSAge0RPTX0gICAgICBwcm9wcy5iYXNlRWxlbWVudFxuICAgICAqICAgICBAcGFyYW0gIHtTdHJpbmd9ICAgcHJvcHMuYWxpZ25cbiAgICAgKiAgICAgQHBhcmFtICB7TnVtYmVyfSAgIHByb3BzLm9mZnNldFxuICAgICAqICAgICBAcGFyYW0gIHtCb29sZWFufSAgcHJvcHMubmVlZEFkanVzdFxuICAgICAqICAgICBAcGFyYW0gIHtCb29sZWFufSAgcHJvcHMuaXNSdGxcbiAgICAgKiBAcmV0dXJuIHtQb3NpdGlvbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcGxhY2UgPSBwcm9wcyA9PiBuZXcgUG9zaXRpb24ocHJvcHMpLnNldFBvc2l0aW9uKCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMucGluRWxlbWVudCA9IHByb3BzLnBpbkVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQgPSBwcm9wcy5iYXNlRWxlbWVudDtcbiAgICAgICAgdGhpcy5hbGlnbiA9IHByb3BzLmFsaWduIHx8ICd0bCB0bCc7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gcHJvcHMub2Zmc2V0IHx8IFswLCAwXTtcbiAgICAgICAgdGhpcy5uZWVkQWRqdXN0ID0gcHJvcHMubmVlZEFkanVzdCB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1J0bCA9IHByb3BzLmlzUnRsIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIHNldFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBwaW5FbGVtZW50ID0gdGhpcy5waW5FbGVtZW50O1xuICAgICAgICBjb25zdCBiYXNlRWxlbWVudCA9IHRoaXMuYmFzZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkQWxpZ24gPSB0aGlzLl9nZXRFeHBlY3RlZEFsaWduKCk7XG4gICAgICAgIGxldCBpc1BpbkZpeGVkLCBpc0Jhc2VGaXhlZCwgZmlyc3RQb3NpdGlvblJlc3VsdDtcbiAgICAgICAgaWYgKHBpbkVsZW1lbnQgPT09IFZJRVdQT1JUKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvbS5nZXRTdHlsZShwaW5FbGVtZW50LCAncG9zaXRpb24nKSAhPT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgZG9tLnNldFN0eWxlKHBpbkVsZW1lbnQsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICAgICAgaXNQaW5GaXhlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNQaW5GaXhlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhc2VFbGVtZW50ID09PSBWSUVXUE9SVCB8fCBkb20uZ2V0U3R5bGUoYmFzZUVsZW1lbnQsICdwb3NpdGlvbicpICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICBpc0Jhc2VGaXhlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNCYXNlRml4ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOagueaNruacn+acm+eahOWumuS9jVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cGVjdGVkQWxpZ24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWduID0gZXhwZWN0ZWRBbGlnbltpXTtcbiAgICAgICAgICAgIGNvbnN0IHBpbkVsZW1lbnRQb2ludHMgPSB0aGlzLl9ub3JtYWxpemVQb3NpdGlvbihwaW5FbGVtZW50LCBhbGlnbi5zcGxpdCgnICcpWzBdLCBpc1BpbkZpeGVkKTtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VFbGVtZW50UG9pbnRzID0gdGhpcy5fbm9ybWFsaXplUG9zaXRpb24oYmFzZUVsZW1lbnQsIGFsaWduLnNwbGl0KCcgJylbMV0sIGlzUGluRml4ZWQpO1xuICAgICAgICAgICAgY29uc3QgcGluRWxlbWVudFBhcmVudE9mZnNldCA9IHRoaXMuX2dldFBhcmVudE9mZnNldChwaW5FbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VFbGVtZW50T2Zmc2V0ID0gKGlzUGluRml4ZWQgJiYgaXNCYXNlRml4ZWQpID8gdGhpcy5fZ2V0TGVmdFRvcChiYXNlRWxlbWVudCkgOiBiYXNlRWxlbWVudFBvaW50cy5vZmZzZXQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGJhc2VFbGVtZW50T2Zmc2V0LnRvcCArIGJhc2VFbGVtZW50UG9pbnRzLnkgLSBwaW5FbGVtZW50UGFyZW50T2Zmc2V0LnRvcCAtIHBpbkVsZW1lbnRQb2ludHMueTtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBiYXNlRWxlbWVudE9mZnNldC5sZWZ0ICsgYmFzZUVsZW1lbnRQb2ludHMueCAtIHBpbkVsZW1lbnRQYXJlbnRPZmZzZXQubGVmdCAgLSBwaW5FbGVtZW50UG9pbnRzLng7XG4gICAgICAgICAgICB0aGlzLl9zZXRQaW5FbGVtZW50UG9zdGlvbihwaW5FbGVtZW50LCB7bGVmdCwgdG9wfSwgdGhpcy5vZmZzZXQpO1xuXG4gICAgICAgICAgICBpZiAoIWZpcnN0UG9zaXRpb25SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBmaXJzdFBvc2l0aW9uUmVzdWx0ID0ge2xlZnQsIHRvcH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5faXNJblZpZXdwb3J0KHBpbkVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsaWduO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5WaWV3cG9ydExlZnQgPSB0aGlzLl9tYWtlRWxlbWVudEluVmlld3BvcnQocGluRWxlbWVudCwgZmlyc3RQb3NpdGlvblJlc3VsdC5sZWZ0LCAnTGVmdCcsIGlzUGluRml4ZWQpO1xuICAgICAgICBjb25zdCBpblZpZXdwb3J0VG9wID0gdGhpcy5fbWFrZUVsZW1lbnRJblZpZXdwb3J0KHBpbkVsZW1lbnQsIGZpcnN0UG9zaXRpb25SZXN1bHQudG9wLCAnVG9wJywgaXNQaW5GaXhlZCk7XG5cbiAgICAgICAgdGhpcy5fc2V0UGluRWxlbWVudFBvc3Rpb24ocGluRWxlbWVudCwge2xlZnQ6IGluVmlld3BvcnRMZWZ0LCB0b3A6IGluVmlld3BvcnRUb3B9KTtcbiAgICAgICAgcmV0dXJuIGV4cGVjdGVkQWxpZ25bMF07XG4gICAgfVxuXG4gICAgX2dldFBhcmVudE9mZnNldChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gZG9jdW1lbnQuYm9keSAmJiBkb20uZ2V0U3R5bGUocGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX2dldEVsZW1lbnRPZmZzZXQocGFyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9mZnNldC50b3AgKz0gcGFyc2VGbG9hdChkb20uZ2V0U3R5bGUocGFyZW50LCAnYm9yZGVyLXRvcC13aWR0aCcpLCAxMCk7XG4gICAgICAgIG9mZnNldC5sZWZ0ICs9IHBhcnNlRmxvYXQoZG9tLmdldFN0eWxlKHBhcmVudCwgJ2JvcmRlci1sZWZ0LXdpZHRoJyksIDEwKTtcbiAgICAgICAgb2Zmc2V0Lm9mZnNldFBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG5cbiAgICBfbWFrZUVsZW1lbnRJblZpZXdwb3J0KHBpbkVsZW1lbnQsIG51bWJlciwgdHlwZSwgaXNQaW5GaXhlZCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVtYmVyO1xuICAgICAgICBjb25zdCBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBvZmZzZXRQYXJlbnQgPSBwaW5FbGVtZW50Lm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA8IDApIHtcbiAgICAgICAgICAgIGlmIChpc1BpbkZpeGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0UGFyZW50ID09PSBkb2N1bWVudC5ib2R5ICYmIGRvbS5nZXRTdHlsZShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgd2hlbiBkaXYncyBvZmZzZXRQYXJlbnQgaXMgZG9jdW1lbnQuYm9keSwgd2Ugc2V0IG5ldyBwb3NpdGlvbiByZXN1bHQuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gTWF0aC5tYXgoZG9jRWxlbWVudFtgc2Nyb2xsJHt0eXBlfWBdLCBkb2N1bWVudC5ib2R5W2BzY3JvbGwke3R5cGV9YF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfbm9ybWFsaXplUG9zaXRpb24oZWxlbWVudCwgYWxpZ24sIGlzUGluRml4ZWQpIHtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gdGhpcy5fbm9ybWFsaXplRWxlbWVudChlbGVtZW50LCBpc1BpbkZpeGVkKTtcbiAgICAgICAgdGhpcy5fbm9ybWFsaXplWFkocG9pbnRzLCBhbGlnbik7XG5cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cbiAgICBfbm9ybWFsaXplWFkocG9pbnRzLCBhbGlnbikge1xuICAgICAgICBjb25zdCB4ID0gYWxpZ24uc3BsaXQoJycpWzFdO1xuICAgICAgICBjb25zdCB5ID0gYWxpZ24uc3BsaXQoJycpWzBdO1xuXG4gICAgICAgIHBvaW50cy54ID0gdGhpcy5feHlDb252ZXJ0ZXIoeCwgcG9pbnRzLCAnd2lkdGgnKTtcbiAgICAgICAgcG9pbnRzLnkgPSB0aGlzLl94eUNvbnZlcnRlcih5LCBwb2ludHMsICdoZWlnaHQnKTtcblxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH1cblxuICAgIF94eUNvbnZlcnRlcihhbGlnbiwgcG9pbnRzLCB0eXBlKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGFsaWduLnJlcGxhY2UoL3R8bC9naSwgJzAlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9jL2dpLCAnNTAlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9ifHIvZ2ksICcxMDAlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oXFxkKyklL2dpLCBmdW5jdGlvbihtLCBkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50cy5zaXplKClbdHlwZV0gKiAoZCAvIDEwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyZXMsIDEwKSB8fCAwO1xuICAgIH1cblxuICAgIF9nZXRMZWZ0VG9wKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHBhcnNlRmxvYXQoZG9tLmdldFN0eWxlKGVsZW1lbnQsICdsZWZ0JykpIHx8IDAsXG4gICAgICAgICAgICB0b3A6IHBhcnNlRmxvYXQoZG9tLmdldFN0eWxlKGVsZW1lbnQsICd0b3AnKSkgfHwgMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9ub3JtYWxpemVFbGVtZW50KGVsZW1lbnQsIGlzUGluRml4ZWQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9LCBpc1ZpZXdwb3J0ID0gKGVsZW1lbnQgPT09IFZJRVdQT1JUKSwgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICByZXN1bHQub2Zmc2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUGluRml4ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZ2V0UGFnZVgoKSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBnZXRQYWdlWSgpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEVsZW1lbnRPZmZzZXQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVzdWx0LnNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWaWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBkb2NFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGRvY0VsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2dldEVsZW1lbnRPZmZzZXQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGNvbnN0IGRvY0NsaWVudExlZnQgPSAoZG9jRWxlbWVudC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwKTtcbiAgICAgICAgY29uc3QgZG9jQ2xpZW50VG9wID0gKGRvY0VsZW1lbnQuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyAoZ2V0UGFnZVgoKSAtIGRvY0NsaWVudExlZnQpLFxuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIChnZXRQYWdlWSgpIC0gZG9jQ2xpZW50VG9wKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFjY29yZGluZyB0byB0aGUgbG9jYXRpb24gb2YgdGhlIG92ZXJmbG93IHRvIGNhbGN1bGF0ZSB0aGUgZGVzaXJlZCBwb3NpdGlvbmluZ1xuICAgIF9nZXRFeHBlY3RlZEFsaWduKCkge1xuICAgICAgICBjb25zdCBhbGlnbiA9IHRoaXMuaXNSdGwgPyB0aGlzLl9yZXBsYWNlQWxpZ25EaXIodGhpcy5hbGlnbiwgL2x8ci9nLCB7bDogJ3InLCByOiAnbCd9KSA6IHRoaXMuYWxpZ247XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkQWxpZ24gPSBbYWxpZ25dO1xuXG4gICAgICAgIGlmICh0aGlzLm5lZWRBZGp1c3QpIHtcbiAgICAgICAgICAgIGlmICgvdHxiL2cudGVzdChhbGlnbikpIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZEFsaWduLnB1c2godGhpcy5fcmVwbGFjZUFsaWduRGlyKGFsaWduLCAvdHxiL2csIHt0OiAnYicsIGI6ICd0J30pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvbHxyL2cudGVzdChhbGlnbikpIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZEFsaWduLnB1c2godGhpcy5fcmVwbGFjZUFsaWduRGlyKGFsaWduLCAvbHxyL2csIHtsOiAncicsIHI6ICdsJ30pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvYy9nLnRlc3QoYWxpZ24pKSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRBbGlnbi5wdXNoKHRoaXMuX3JlcGxhY2VBbGlnbkRpcihhbGlnbiwgL2MoPz0gfCQpL2csIHtjOiAnbCd9KSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRBbGlnbi5wdXNoKHRoaXMuX3JlcGxhY2VBbGlnbkRpcihhbGlnbiwgL2MoPz0gfCQpL2csIHtjOiAncid9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHBlY3RlZEFsaWduLnB1c2godGhpcy5fcmVwbGFjZUFsaWduRGlyKGFsaWduLCAvbHxyfHR8Yi9nLCB7bDogJ3InLCByOiAnbCcsIHQ6ICdiJywgYjogJ3QnfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHBlY3RlZEFsaWduO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBhbGlnbiBvcmRlci5cbiAgICBfcmVwbGFjZUFsaWduRGlyKGFsaWduLCByZWdFeHAsIG1hcCkge1xuICAgICAgICByZXR1cm4gYWxpZ24ucmVwbGFjZShyZWdFeHAsIHJlcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbWFwW3Jlc107XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERldGVjdGluZyBlbGVtZW50IGlzIGluIHRoZSB3aW5kb3fvvIwgd2Ugd2FudCB0byBhZGp1c3QgcG9zaXRpb24gbGF0ZXIuXG4gICAgX2lzSW5WaWV3cG9ydChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0U2l6ZSA9IF9nZXRWaWV3cG9ydFNpemUoKTtcbiAgICAgICAgLy8gQXZvaWQgYW5pbWF0ZSBwcm9ibGVtIHRoYXQgdXNlIG9mZnNldFdpZHRoIGluc3RlYWQgb2YgZ2V0Qm91bmRpbmdDbGllbnRSZWN0LlxuICAgICAgICBjb25zdCBlbGVtZW50UmVjdCA9IF9nZXRFbGVtZW50UmVjdChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIChlbGVtZW50UmVjdC5sZWZ0ID49IDAgJiYgZWxlbWVudFJlY3QubGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGggPD0gdmlld3BvcnRTaXplLndpZHRoICYmXG4gICAgICAgICAgICBlbGVtZW50UmVjdC50b3AgPj0gMCAmJiBlbGVtZW50UmVjdC50b3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodCA8PSB2aWV3cG9ydFNpemUuaGVpZ2h0KTtcbiAgICB9XG4gICAgLy8g5Zyo6L+Z6YeM5YGaUlRM5Yik5patIHRvcC1sZWZ0IOWumuS9jei9rOWMluS4uuetieaViOeahCB0b3AtcmlnaHTlrprkvY1cbiAgICBfc2V0UGluRWxlbWVudFBvc3Rpb24ocGluRWxlbWVudCwgcG9zdGlvbiwgb2Zmc2V0ID0gWzAsIDBdKSB7XG4gICAgICAgIGNvbnN0IHt0b3AsIGxlZnR9ID0gcG9zdGlvbjtcbiAgICAgICAgaWYgKCF0aGlzLmlzUnRsKSB7XG4gICAgICAgICAgICBkb20uc2V0U3R5bGUocGluRWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke2xlZnQgKyBvZmZzZXRbMF19cHhgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7dG9wICsgb2Zmc2V0WzFdfXB4YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJhbnNmZXIge2xlZnQsdG9wfSBlcXVhbHkgdG8ge3JpZ2h0LHRvcH1cbiAgICAgICAgY29uc3QgcGluRWxlbWVudFBhcmVudE9mZnNldCA9IHRoaXMuX2dldFBhcmVudE9mZnNldChwaW5FbGVtZW50KTtcbiAgICAgICAgY29uc3Qge3dpZHRoOiBvZmZzZXRQYXJlbnRXaWR0aH0gPSAgX2dldEVsZW1lbnRSZWN0KHBpbkVsZW1lbnRQYXJlbnRPZmZzZXQub2Zmc2V0UGFyZW50KTtcbiAgICAgICAgY29uc3Qge3dpZHRofSA9IF9nZXRFbGVtZW50UmVjdChwaW5FbGVtZW50KTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBvZmZzZXRQYXJlbnRXaWR0aCAtIChsZWZ0ICsgd2lkdGgpO1xuICAgICAgICBkb20uc2V0U3R5bGUocGluRWxlbWVudCwge1xuICAgICAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgcmlnaHQ6IGAke3JpZ2h0ICsgb2Zmc2V0WzBdfXB4YCxcbiAgICAgICAgICAgIHRvcDogYCR7dG9wICsgb2Zmc2V0WzFdfXB4YCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvdXRpbHMvcG9zaXRpb24uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmdW5jLCBLRVlDT0RFIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL292ZXJsYXknO1xuXG5jb25zdCB7IG5vb3AsIG1ha2VDaGFpbiwgYmluZEN0eCB9ID0gZnVuYztcblxuLyoqXG4gKiBPdmVybGF5LlBvcHVwXG4gKiBAZGVzY3JpcHRpb24g57un5om/IE92ZXJsYXkg55qEIEFQSe+8jOmZpOmdnueJueWIq+ivtOaYjlxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5YaF5a65XG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6blj5HlvLnlsYLmmL7npLrmiJbpmpDol4/nmoTlhYPntKBcbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXI6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R5by55bGC5pi+56S65oiW6ZqQ6JeP55qE5pON5L2c57G75Z6L77yM5Y+v5Lul5pivICdjbGljayfvvIwnaG92ZXIn77yMJ2ZvY3VzJ++8jOaIluiAheWug+S7rOe7hOaIkOeahOaVsOe7hO+8jOWmgiBbJ2hvdmVyJywgJ2ZvY3VzJ11cbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJUeXBlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguW9k+WJjeaYr+WQpuaYvuekulxuICAgICAgICAgKi9cbiAgICAgICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLpu5jorqTmmK/lkKbmmL7npLpcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaYvuekuuaIlumakOiXj+aXtuinpuWPkeeahOWbnuiwg+WHveaVsFxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZpc2libGUg5by55bGC5piv5ZCm5pi+56S6XG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOinpuWPkeW8ueWxguaYvuekuuaIlumakOiXj+eahOadpea6kFxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZSBET03kuovku7ZcbiAgICAgICAgICovXG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDorr7nva7mraTlsZ7mgKfvvIzlvLnlsYLml6Dms5XmmL7npLrmiJbpmpDol49cbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaYvuekuuaIlumakOiXj+eahOW7tuaXtuaXtumXtO+8iOS7peavq+enkuS4uuWNleS9je+8ie+8jOWcqCB0cmlnZ2VyVHlwZSDooqvorr7nva7kuLogaG92ZXIg5pe255Sf5pWIXG4gICAgICAgICAqL1xuICAgICAgICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeWFg+e0oOaYr+WQpuWPr+S7peWFs+mXreW8ueWxglxuICAgICAgICAgKi9cbiAgICAgICAgY2FuQ2xvc2VCeVRyaWdnZXI6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5a6a5L2N55qE5Y+C54Wn5YWD57SgXG4gICAgICAgICAqIEBkZWZhdWx0IHRhcmdldCDlsZ7mgKfvvIzljbPop6blj5HlhYPntKBcbiAgICAgICAgICovXG4gICAgICAgIHRhcmdldDogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgc2FmZU5vZGU6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbot5/pmo90cmlnZ2Vy5rua5YqoXG4gICAgICAgICAqL1xuICAgICAgICBmb2xsb3dUcmlnZ2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgY29udGFpbmVyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBoYXNNYXNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgd3JhcHBlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0cmlnZ2VyVHlwZTogJ2hvdmVyJyxcbiAgICAgICAgZGVmYXVsdFZpc2libGU6IGZhbHNlLFxuICAgICAgICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgZGVsYXk6IDIwMCxcbiAgICAgICAgY2FuQ2xvc2VCeVRyaWdnZXI6IHRydWUsXG4gICAgICAgIGZvbGxvd1RyaWdnZXI6IGZhbHNlLFxuICAgICAgICBjb250YWluZXI6ICgpID0+IGRvY3VtZW50LmJvZHksXG4gICAgICAgIHJ0bDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogdHlwZW9mIHByb3BzLnZpc2libGUgPT09ICd1bmRlZmluZWQnID8gcHJvcHMuZGVmYXVsdFZpc2libGUgOiBwcm9wcy52aXNpYmxlXG4gICAgICAgIH07XG5cbiAgICAgICAgYmluZEN0eCh0aGlzLCBbXG4gICAgICAgICAgICAnaGFuZGxlVHJpZ2dlckNsaWNrJywgJ2hhbmRsZVRyaWdnZXJLZXlEb3duJyxcbiAgICAgICAgICAgICdoYW5kbGVUcmlnZ2VyTW91c2VFbnRlcicsICdoYW5kbGVUcmlnZ2VyTW91c2VMZWF2ZScsXG4gICAgICAgICAgICAnaGFuZGxlVHJpZ2dlckZvY3VzJywgJ2hhbmRsZVRyaWdnZXJCbHVyJyxcbiAgICAgICAgICAgICdoYW5kbGVDb250ZW50TW91c2VFbnRlcicsICdoYW5kbGVDb250ZW50TW91c2VMZWF2ZScsXG4gICAgICAgICAgICAnaGFuZGxlQ29udGVudE1vdXNlRG93bicsICdoYW5kbGVSZXF1ZXN0Q2xvc2UnLFxuICAgICAgICAgICAgJ2hhbmRsZU1hc2tNb3VzZUVudGVyJywgJ2hhbmRsZU1hc2tNb3VzZUxlYXZlJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoJ3Zpc2libGUnIGluIG5leHRQcm9wcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogbmV4dFByb3BzLnZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIFsnX3RpbWVyJywgJ19oaWRlVGltZXInLCAnX3Nob3dUaW1lciddLmZvckVhY2godGltZSA9PiB7XG4gICAgICAgICAgICB0aGlzW3RpbWVdICYmIGNsZWFyVGltZW91dCh0aGlzW3RpbWVdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0eXBlLCBlKSB7XG4gICAgICAgIGlmICghKCd2aXNpYmxlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0eXBlLCBlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVUcmlnZ2VyQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlICYmICF0aGlzLnByb3BzLmNhbkNsb3NlQnlUcmlnZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UoIXRoaXMuc3RhdGUudmlzaWJsZSwgJ2Zyb21UcmlnZ2VyJywgZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVHJpZ2dlcktleURvd24oZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLlNQQUNFIHx8IGUua2V5Q29kZSA9PT0gS0VZQ09ERS5FTlRFUikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcmlnZ2VyQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUcmlnZ2VyTW91c2VFbnRlcihlKSB7XG4gICAgICAgIHRoaXMuX21vdXNlTm90Rmlyc3RPbk1hc2sgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5faGlkZVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Nob3dUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UodHJ1ZSwgJ2Zyb21UcmlnZ2VyJywgZSk7XG4gICAgICAgICAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRyaWdnZXJNb3VzZUxlYXZlKGUsIHR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZShmYWxzZSwgdHlwZSB8fCAnZnJvbVRyaWdnZXInLCBlKTtcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuZGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVHJpZ2dlckZvY3VzKGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKHRydWUsICdmcm9tVHJpZ2dlcicsIGUpO1xuICAgIH1cblxuICAgIGhhbmRsZVRyaWdnZXJCbHVyKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0ZvcndhcmRDb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UsICdmcm9tVHJpZ2dlcicsIGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzRm9yd2FyZENvbnRlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb250ZW50TW91c2VEb3duKCkge1xuICAgICAgICB0aGlzLl9pc0ZvcndhcmRDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb250ZW50TW91c2VFbnRlcigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lcik7XG4gICAgfVxuXG4gICAgaGFuZGxlQ29udGVudE1vdXNlTGVhdmUoZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVRyaWdnZXJNb3VzZUxlYXZlKGUsICdmcm9tQ29udGVudCcpO1xuICAgIH1cblxuICAgIGhhbmRsZU1hc2tNb3VzZUVudGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlTm90Rmlyc3RPbk1hc2spIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaWRlVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5faGlkZVRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlTm90Rmlyc3RPbk1hc2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1hc2tNb3VzZUxlYXZlKCkge1xuICAgICAgICB0aGlzLl9tb3VzZU5vdEZpcnN0T25NYXNrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXF1ZXN0Q2xvc2UodHlwZSwgZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UsIHR5cGUsIGUpO1xuICAgIH1cblxuICAgIHJlbmRlclRyaWdnZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdHJpZ2dlciwgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAga2V5OiAndHJpZ2dlcicsXG4gICAgICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHRoaXMuc3RhdGUudmlzaWJsZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHJpZ2dlclR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyVHlwZXMgPSBBcnJheS5pc0FycmF5KHRyaWdnZXJUeXBlKSA/IHRyaWdnZXJUeXBlIDogW3RyaWdnZXJUeXBlXTtcbiAgICAgICAgICAgIGNvbnN0IHsgb25DbGljaywgb25LZXlEb3duLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSwgb25Gb2N1cywgb25CbHVyIH0gPSB0cmlnZ2VyLnByb3BzO1xuICAgICAgICAgICAgdHJpZ2dlclR5cGVzLmZvckVhY2godHJpZ2dlclR5cGUgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJpZ2dlclR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DbGljayA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZVRyaWdnZXJDbGljaywgb25DbGljayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbktleURvd24gPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVUcmlnZ2VyS2V5RG93biwgb25LZXlEb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdob3ZlcicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3VzZUVudGVyID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlVHJpZ2dlck1vdXNlRW50ZXIsIG9uTW91c2VFbnRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbk1vdXNlTGVhdmUgPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVUcmlnZ2VyTW91c2VMZWF2ZSwgb25Nb3VzZUxlYXZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmb2N1cyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkZvY3VzID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlVHJpZ2dlckZvY3VzLCBvbkZvY3VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQmx1ciA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZVRyaWdnZXJCbHVyLCBvbkJsdXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQodHJpZ2dlciwgcHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRyaWdnZXJUeXBlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB0cmlnZ2VyVHlwZXMgPSBBcnJheS5pc0FycmF5KHRyaWdnZXJUeXBlKSA/IHRyaWdnZXJUeXBlIDogW3RyaWdnZXJUeXBlXTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICBjb25zdCB7IG9uTW91c2VEb3duLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSB9ID0gY29udGVudC5wcm9wcztcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICBrZXk6ICdwb3J0YWwnXG4gICAgICAgIH07XG5cbiAgICAgICAgdHJpZ2dlclR5cGVzLmZvckVhY2godHJpZ2dlclR5cGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICh0cmlnZ2VyVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3VzZURvd24gPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVDb250ZW50TW91c2VEb3duLCBvbk1vdXNlRG93bik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvdmVyJzpcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3VzZUVudGVyID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlQ29udGVudE1vdXNlRW50ZXIsIG9uTW91c2VFbnRlcik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uTW91c2VMZWF2ZSA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZUNvbnRlbnRNb3VzZUxlYXZlLCBvbk1vdXNlTGVhdmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjb250ZW50LCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUG9ydGFsKCkge1xuICAgICAgICBjb25zdCB7IHRhcmdldCwgc2FmZU5vZGUsIGZvbGxvd1RyaWdnZXIsIHRyaWdnZXJUeXBlLCBoYXNNYXNrLCB3cmFwcGVyU3R5bGUsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtjb250YWluZXJ9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZmluZFRyaWdnZXJOb2RlID0gKCkgPT4gKGZpbmRET01Ob2RlKHRoaXMpIHx8IHt9KTtcbiAgICAgICAgY29uc3Qgc2FmZU5vZGVzID0gQXJyYXkuaXNBcnJheShzYWZlTm9kZSkgPyBbLi4uc2FmZU5vZGVdIDogW3NhZmVOb2RlXTtcbiAgICAgICAgc2FmZU5vZGVzLnVuc2hpZnQoZmluZFRyaWdnZXJOb2RlKTtcblxuICAgICAgICBjb25zdCBuZXdXcmFwcGVyU3R5bGUgPSB3cmFwcGVyU3R5bGUgfHwge307XG5cbiAgICAgICAgaWYgKGZvbGxvd1RyaWdnZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHRyaWdnZXIgPT4gdHJpZ2dlci5wYXJlbnROb2RlO1xuICAgICAgICAgICAgbmV3V3JhcHBlclN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmlnZ2VyVHlwZSA9PT0gJ2hvdmVyJyAmJiBoYXNNYXNrKSB7XG4gICAgICAgICAgICBvdGhlcnMub25NYXNrTW91c2VFbnRlciA9IHRoaXMuaGFuZGxlTWFza01vdXNlRW50ZXI7XG4gICAgICAgICAgICBvdGhlcnMub25NYXNrTW91c2VMZWF2ZSA9IHRoaXMuaGFuZGxlTWFza01vdXNlTGVhdmU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE92ZXJsYXkgey4uLm90aGVyc31cbiAgICAgICAgICAgICAgICBrZXk9XCJvdmVybGF5XCJcbiAgICAgICAgICAgICAgICByZWY9e292ZXJsYXkgPT4gKHRoaXMub3ZlcmxheSA9IG92ZXJsYXkpfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9e3RhcmdldCB8fCBmaW5kVHJpZ2dlck5vZGV9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyPXtjb250YWluZXJ9XG4gICAgICAgICAgICAgICAgc2FmZU5vZGU9e3NhZmVOb2Rlc31cbiAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU9e25ld1dyYXBwZXJTdHlsZX1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZT17dHJpZ2dlclR5cGV9XG4gICAgICAgICAgICAgICAgaGFzTWFzaz17aGFzTWFza31cbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cbiAgICAgICAgICAgIDwvT3ZlcmxheT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB0aGlzLnJlbmRlclRyaWdnZXIoKSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUG9ydGFsKClcbiAgICAgICAgXTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9wb3B1cC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4uL292ZXJsYXknO1xuaW1wb3J0IEJhbGxvb25Jbm5lciBmcm9tICcuL2lubmVyJztcbmltcG9ydCB7bm9ybWFsTWFwIGFzIGFsaWduTWFwfSBmcm9tICcuL2FsaWduTWFwJztcblxuY29uc3Qge1BvcHVwfSA9IE92ZXJsYXk7XG5cbi8qKiBCYWxsb29uLlRvb2x0aXAgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmoLflvI/nsbvlkI3nmoTlk4HniYzliY3nvIBcbiAgICAgICAgICovXG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiHquWumuS5ieexu+WQjVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog6Ieq5a6a5LmJ5YaF6IGU5qC35byPXG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRvb2x0aXDnmoTlhoXlrrlcbiAgICAgICAgICovXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55Ye65bGC5L2N572uXG4gICAgICAgICAqIEBlbnVtZGVzYyDkuIosIOWPsywg5LiLLCDlt6YsIOS4iuW3piwg5LiK5Y+zLCDkuIvlt6YsIOS4i+WPsywg5bem5LiKLCDlt6bkuIssIOWPs+S4iiwg5Y+z5LiLIOWPiuWFtiDkuKTkuKTnu4TlkIhcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWyd0JywgJ3InLCAnYicsICdsJywgJ3RsJywgJ3RyJywgJ2JsJywgJ2JyJywgJ2x0JywgJ2xiJywgJ3J0JywgJ3JiJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R5YWD57SgXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R6KGM5Li6XG4gICAgICAgICAqIOm8oOagh+aCrOa1riwg6I635Y+W5Yiw54Sm54K5LCDpvKDmoIfngrnlh7soJ2hvdmVyJ++8jCdmb2N1cyfvvIwnY2xpY2snKeaIluiAheWug+S7rOe7hOaIkOeahOaVsOe7hO+8jOWmgiBbJ2hvdmVyJywgJ2ZvY3VzJ11cbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJUeXBlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgue7hOS7tnN0eWxl77yM6YCP5Lyg57uZUG9wdXBcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7ZjbGFzc05hbWXvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7blsZ7mgKfvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpnB1cmUgcmVuZGVyXG4gICAgICAgICAqL1xuICAgICAgICBwdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaMh+Wumua1ruWxgua4suafk+eahOeItuiKgueCuSwg5Y+v5Lul5Li66IqC54K5aWTnmoTlrZfnrKbkuLLvvIzkuZ/lj6/ku6Xov5Tlm57oioLngrnnmoTlh73mlbDjgIJcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGCaWQsIOS8oOWFpeWAvOaJjeS8muaUr+aMgeaXoOmanOeijVxuICAgICAgICAgKi9cbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9O1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHRyaWdnZXJUeXBlOiAnaG92ZXInLFxuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIGFsaWduOiAnYicsXG4gICAgICAgIHRyaWdnZXI6IDxzcGFuPjwvc3Bhbj5cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuX2NvbnRlbnRJZCA9IHByb3BzLmlkO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWUsIGFsaWduLCBzdHlsZSwgcHJlZml4LCB0cmlnZ2VyLCBjaGlsZHJlbiwgcG9wdXBDb250YWluZXIsXG4gICAgICAgICAgICBwb3B1cFByb3BzLCBwb3B1cENsYXNzTmFtZSwgcG9wdXBTdHlsZSwgdHJpZ2dlclR5cGUsIHJ0bCwgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHRyT3JpZ2luID0gJ3RyT3JpZ2luJztcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgICAgb3RoZXJzLnJ0bCA9IHRydWU7XG4gICAgICAgICAgICB0ck9yaWdpbiA9ICdydGxUck9yaWdpbic7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBhbGlnbk1hcFthbGlnbl1bdHJPcmlnaW5dO1xuICAgICAgICBjb25zdCBfb2Zmc2V0ID0gYWxpZ25NYXBbYWxpZ25dLm9mZnNldDtcbiAgICAgICAgY29uc3QgX3N0eWxlID0ge3RyYW5zZm9ybU9yaWdpbiwgLi4uc3R5bGV9O1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoPEJhbGxvb25Jbm5lclxuICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgIGlkPXt0aGlzLl9jb250ZW50SWR9XG4gICAgICAgICAgICBwcmVmaXg9e3ByZWZpeH1cbiAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIGlzVG9vbHRpcFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17X3N0eWxlfVxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxuICAgICAgICAgICAgcnRsPXtydGx9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9CYWxsb29uSW5uZXI+KTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyUHJvcHMgPSB7fTtcbiAgICAgICAgdHJpZ2dlclByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10gPSB0aGlzLl9jb250ZW50SWQ7XG4gICAgICAgIHRyaWdnZXJQcm9wcy50YWJJbmRleCA9ICcwJztcblxuICAgICAgICBjb25zdCBuZXdUcmlnZ2VyID0gUmVhY3QuY2xvbmVFbGVtZW50KHRyaWdnZXIsIHRyaWdnZXJQcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgIHsuLi5wb3B1cFByb3BzfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcj17cG9wdXBDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgdHJpZ2dlcj17dGhpcy5fY29udGVudElkID8gbmV3VHJpZ2dlciA6IHRyaWdnZXJ9XG4gICAgICAgICAgICAgICAgdHJpZ2dlclR5cGU9e3RyaWdnZXJUeXBlfVxuICAgICAgICAgICAgICAgIGFsaWduPXthbGlnbk1hcFthbGlnbl0uYWxpZ259XG4gICAgICAgICAgICAgICAgb2Zmc2V0PXtfb2Zmc2V0fVxuICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9wdXBDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3BvcHVwU3R5bGV9XG4gICAgICAgICAgICAgICAgcnRsPXtydGx9XG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb25cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vdG9vbHRpcC5qc3giLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsImltcG9ydCAnLi4vYW5pbWF0ZS9zdHlsZS5qcyc7XG5pbXBvcnQgJy4uL292ZXJsYXkvc3R5bGUuanMnO1xuaW1wb3J0ICcuLi9pY29uL3N0eWxlLmpzJztcbmltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vc3R5bGUuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FuaW1hdGUvbWFpbi5zY3NzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L21haW4uc2NzcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFsbG9vbi9tYWluLnNjc3MiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIi8qKlxuICog6I635Y+W5a+56LGh55qE57G75Z6LXG4gKiBAcGFyYW0gIHsqfSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqXG4gKiBAZXhhbXBsZVxuICogdHlwZU9mKFtdKSA9PT0gJ0FycmF5J1xuICogdHlwZU9mKCkgPT09ICdVbmRlZmluZWQnXG4gKiB0eXBlT2YoMSkgPT09ICdOdW1iZXInXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0eXBlT2YgKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5yZXBsYWNlKC9cXFtvYmplY3RcXHN8XS9nLCAnJyk7XG59XG5cbi8qKlxuICog5Yik5pat5piv5ZCm5piv5pWw57uE5oiW57G75pWw57uE5a+56LGhXG4gKiBAcGFyYW0gIHsqfSAgb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICpcbiAqIEBleGFtcGxlXG4gKiBpc0FycmF5TGlrZShbXSkgPT09IHRydWVcbiAqIGlzQXJyYXlMaWtlKGFyZ3VtZW50cykgPT09IHRydWVcbiAqIGlzQXJyYXlMaWtlKHRoaXMucHJvcHMuY2hpbGRyZW4pID09PSB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5TGlrZSAob2JqKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gISFvYmogJiYgJ2xlbmd0aCcgaW4gb2JqICYmIG9iai5sZW5ndGg7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVPZihvYmopO1xuXG4gICAgcmV0dXJuIHR5cGUgPT09ICdBcnJheScgfHwgbGVuZ3RoID09PSAwIHx8XG4gICAgICAgICh0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJyAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmopO1xufVxuXG4vKipcbiAqIOWIpOaWreWvueixoeaYr+WQpuaYr+S4gOS4qnByb21pc2XvvIzljbPmmK/lkKblj6/ku6XnlKgudGhlblxuICogQHBhcmFtICB7Kn0gIG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSAob2JqKSB7XG4gICAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICog5piv5ZCm5piv5LiA5Liq57qv5YeA55qE5a+56LGhXG4gKiBAcGFyYW0gIHsqfSAgb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHJlZmVyZW5jZSBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICAgIGlmICh0eXBlT2Yob2JqKSAhPT0gJ09iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGN0b3IgPSBvYmouY29uc3RydWN0b3I7XG5cbiAgICBpZiAodHlwZW9mIGN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3QgPSBjdG9yLnByb3RvdHlwZTtcblxuICAgIGlmICh0eXBlT2YocHJvdCkgIT09ICdPYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICog5a+56LGh5rWF5q+U6L6DXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iakFcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqQlxuICogQHBhcmFtICB7RnVuY3Rpb259ICBbY29tcGFyZV0g5omL5Yqo6LCD55So5pa55rOV5q+U6L6DXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIOWvueixoea1heavlOi+g+aYr+WQpuebuOetiVxuICpcbiAqIEBleGFtcGxlXG4gKiBvYmplY3Quc2hhbGxvd0VxdWFsKHthOiAxMDB9LCB7YTogMTAwfSk7IC8vIHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbCAob2JqQSwgb2JqQiwgY29tcGFyZSkge1xuICAgIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIOWFtuS4reS4gOS4quS4jeaYr29iamVjdO+8jOWImeS4jeebuOetiVxuICAgIGlmICghb2JqQSB8fCAhb2JqQiB8fCAodHlwZW9mIG9iakEgKyB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdG9iamVjdCcpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXlBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gICAgY29uc3Qga2V5QiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICAgIGNvbnN0IGxlbiA9IGtleUEubGVuZ3RoO1xuXG4gICAgLy8ga2V5IOaVsOmHj+S4jeS4gOiHtOWImeS4jeebuOetiVxuICAgIGlmIChsZW4gIT09IGtleUIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IHR5cGVvZiBjb21wYXJlID09PSAnZnVuY3Rpb24nO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlBW2ldO1xuXG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbEEgPSBvYmpBW2tleV07XG4gICAgICAgIGNvbnN0IHZhbEIgPSBvYmpCW2tleV07XG5cbiAgICAgICAgY29uc3QgcmV0ID0gaGFzQ2FsbGJhY2sgPyBjb21wYXJlKHZhbEEsIHZhbEIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgcmV0ID09PSB2b2lkIDAgJiYgdmFsQSAhPT0gdmFsQikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICog6YGN5Y6G5a+56LGh5oiW5pWw57uE77yM5oiW6ICF57G75pWw57uE77yM5L6L5aaCUmVhY3TkuK3nmoRjaGlsZHJlbuWvueixoeOAgWFyZ3VtZW50c+etiVxuICogQHBhcmFtICB7T2JqZWN0fEFycmF5fSAgIG9ialxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIGZuKG4sIGkpIG9yIGZuKHZhbCwga2V5KVxuICogQHBhcmFtICB7TnVtYmVyfSAgIFtkaXJlY3Rpb24gPSAxXSDmmK/lkKblgJLluo/pgY3ljobvvIzlj6rlr7nmlbDnu4TmnInmlYhcbiAqIEByZXR1cm4ge09iamVjdHxBcnJheX1cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8g6YGN5Y6G5pWw57uEXG4gKiBvYmplY3QuZWFjaChbMTAwLCAyMDAsIDMwMF0sIChuLCBpKSA9PiBjb25zb2xlLmxvZyhuLCBpKSk7XG4gKiAvLyDpgY3ljoZqc29u5a+56LGhXG4gKiBvYmplY3QuZWFjaCh7YTogMTAwLCBiOiAyMDB9LCAodmFsdWUsIGtleSkgPT4gY29uc29sZS5sb2coa2V5LCB2YWx1ZSkpO1xuICogLy8g6YGN5Y6GUmVhY3TlrZDoioLngrlcbiAqIG9iamVjdC5lYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IGNvbnNvbGUubG9nKGNoaWxkKSk7XG4gKiAvLyDpgY3ljoZhcmd1bWVudHNcbiAqIG9iamVjdC5lYWNoKGFyZ3VtZW50cywgKGFyZywgaSkgPT4gY29uc29sZS5sb2coYXJnKSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlYWNoIChvYmosIGNhbGxiYWNrLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCByZXZlcnNlZCA9IGRpcmVjdGlvbiA9PT0gLTE7XG4gICAgY29uc3QgbGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICBsZXQgdmFsdWUsXG4gICAgICAgIGkgPSByZXZlcnNlZCA/IGxlbmd0aCAtIDEgOiAwO1xuXG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGggJiYgaSA+PSAwOyByZXZlcnNlZCA/IGktLSA6IGkrKykge1xuICAgICAgICAgICAgdmFsdWUgPSBjYWxsYmFjay5jYWxsKG9ialtpXSwgb2JqW2ldLCBpKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpIGluIG9iaikge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrLmNhbGwob2JqW2ldLCBvYmpbaV0sIGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG4vLyBAcHJpdmF0ZSDliKTmlq1rZXnmmK/lkKblnKjmlbDnu4TmiJblr7nosaHkuK1cbmNvbnN0IF9pc0luT2JqID0gKGtleSwgb2JqLCBpc0FycmF5KSA9PiBpc0FycmF5ID8gKG9iai5pbmRleE9mKGtleSkgPiAtMSkgIDogKGtleSBpbiBvYmopO1xuXG4vKipcbiAqIOi/h+a7pOWHuuWFtuWug+WxnuaAp1xuICogQHBhcmFtICB7T2JqZWN0fEFycmF5fSBob2xkUHJvcHMg6L+H5ruk55qE5Y+C54Wn5a+56LGh77yM5pyA57uI55qE57uT5p6c5Y+q5L+d55WZ5LiN5Zyo5Y+C54Wn5a+56LGh5Lit55qEa2V5XG4gKiBAcGFyYW0gIHtPYmplY3R9IHByb3BzICAgICDooqvov4fmu6TnmoTlr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIG90aGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKiBvYmplY3QucGlja090aGVycyhGb29Db21wb25lbnQucHJvcFR5cGVzLCB0aGlzLnByb3BzKTtcbiAqIG9iamVjdC5waWNrT3RoZXJzKFsnY2xhc3NOYW1lJywgJ29uQ2hhbmdlJ10sIHRoaXMucHJvcHMpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGlja090aGVycyAoaG9sZFByb3BzLCBwcm9wcykge1xuICAgIGNvbnN0IG90aGVycyA9IHt9O1xuICAgIGNvbnN0IGlzQXJyYXkgPSB0eXBlT2YoaG9sZFByb3BzKSA9PT0gJ0FycmF5JztcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmICghX2lzSW5PYmooa2V5LCBob2xkUHJvcHMsIGlzQXJyYXkpKSB7XG4gICAgICAgICAgICBvdGhlcnNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3RoZXJzO1xufVxuXG4vKipcbiAqIOi/h+a7pOWHuuW4pnByZWZpeOeahOWxnuaAp1xuICogQHBhcmFtICB7T2JqZWN0fSBob2xkUHJvcHMg6L+H5ruk55qE5Y+C54Wn5a+56LGh77yM5pyA57uI55qE57uT5p6c5Y+q5L+d55WZ5LiN5Zyo5Y+C54Wn5a+56LGh5Lit55qEa2V5XG4gKiBAcGFyYW0gIHtzdHJpbmd9IHByZWZpeCAgICDljIXlkKvnmoTlrZfnrKbkuLJcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIG90aGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKiBvYmplY3QucGlja0F0dHJzV2l0aChGb29Db21wb25lbnQucHJvcFR5cGVzLCAnZGF0YS0nKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpY2tBdHRyc1dpdGggKGhvbGRQcm9wcywgcHJlZml4KSB7XG4gICAgY29uc3Qgb3RoZXJzID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBob2xkUHJvcHMpIHtcbiAgICAgICAgaWYgKGtleS5tYXRjaChwcmVmaXgpKSB7XG4gICAgICAgICAgICBvdGhlcnNba2V5XSA9IGhvbGRQcm9wc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG90aGVycztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL29iamVjdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=