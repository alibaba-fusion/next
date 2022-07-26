'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_slider2.default, {
    exportNames: ['resize'],
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('fade' in props) {
            deprecated('fade', 'animation', 'Slider');

            var _props = props,
                fade = _props.fade,
                others = (0, _objectWithoutProperties3.default)(_props, ['fade']);

            if (fade) {
                props = (0, _extends3.default)({ animation: 'fade' }, others);
            } else {
                props = others;
            }
        }
        if ('arrowPos' in props) {
            if (props.arrowPos === 'inline') {
                deprecated('arrowPos=inline', 'arrowPosition=inner', 'Slider');

                props.arrowPos = 'inner';
            } else {
                deprecated('arrowPos', 'arrowPosition', 'Slider');
            }

            var _props2 = props,
                arrowPos = _props2.arrowPos,
                _others = (0, _objectWithoutProperties3.default)(_props2, ['arrowPos']);

            props = (0, _extends3.default)({ arrowPosition: arrowPos }, _others);
        }
        ['arrowDirection', 'dotsDirection', 'slideDirection'].forEach(function (propName) {
            if (props[propName] === 'horizontal') {
                deprecated(propName + '=horizontal', propName + '=hoz', 'Slider');

                props[propName] = 'hoz';
            } else if (props[propName] === 'vertical') {
                deprecated(propName + '=vertical', propName + '=ver', 'Slider');

                props[propName] = 'ver';
            }
        });
        if ('initialSlide' in props) {
            deprecated('initialSlide', 'defaultActiveIndex', 'Slider');

            var _props3 = props,
                initialSlide = _props3.initialSlide,
                _others2 = (0, _objectWithoutProperties3.default)(_props3, ['initialSlide']);

            props = (0, _extends3.default)({ defaultActiveIndex: initialSlide }, _others2);
        }
        if ('slickGoTo' in props) {
            deprecated('slickGoTo', 'activeIndex', 'Slider');

            var _props4 = props,
                slickGoTo = _props4.slickGoTo,
                _others3 = (0, _objectWithoutProperties3.default)(_props4, ['slickGoTo']);

            props = (0, _extends3.default)({ activeIndex: slickGoTo }, _others3);
        }
        if ('afterChange' in props) {
            deprecated('afterChange', 'onChange', 'Slider');

            var _props5 = props,
                afterChange = _props5.afterChange,
                _others4 = (0, _objectWithoutProperties3.default)(_props5, ['afterChange']);

            props = (0, _extends3.default)({ onChange: afterChange }, _others4);
        }

        if ('beforeChange' in props) {
            deprecated('beforeChange', 'onBeforeChange', 'Slider');

            var _props6 = props,
                beforeChange = _props6.beforeChange,
                _others5 = (0, _objectWithoutProperties3.default)(_props6, ['beforeChange']);

            props = (0, _extends3.default)({ onBeforeChange: beforeChange }, _others5);
        }

        return props;
    }
});
module.exports = exports['default'];