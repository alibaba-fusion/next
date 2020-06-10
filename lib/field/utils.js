'use strict';

exports.__esModule = true;
exports.cloneAndAddKey = cloneAndAddKey;
exports.scrollToFirstError = scrollToFirstError;

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneAndAddKey(element) {
    if (element && (0, _react.isValidElement)(element)) {
        var key = element.key || 'error';
        return (0, _react.cloneElement)(element, { key: key });
    }
    return element;
}

function scrollToFirstError(_ref) {
    var errorsGroup = _ref.errorsGroup,
        options = _ref.options,
        instance = _ref.instance;

    if (errorsGroup && options.scrollToFirstError) {
        var firstNode = void 0;
        var firstTop = void 0;
        for (var i in errorsGroup) {
            if (errorsGroup.hasOwnProperty(i)) {
                var node = _reactDom2.default.findDOMNode(instance[i]);
                if (!node) {
                    return;
                }
                var top = node.offsetTop;
                if (firstTop === undefined || firstTop > top) {
                    firstTop = top;
                    firstNode = node;
                }
            }
        }

        if (firstNode) {
            if (typeof options.scrollToFirstError === 'number' && window && typeof window.scrollTo === 'function') {
                var offsetLeft = document && document.body && document.body.offsetLeft ? document.body.offsetLeft : 0;
                window.scrollTo(offsetLeft, firstTop + options.scrollToFirstError);
            } else if (firstNode.scrollIntoViewIfNeeded) {
                firstNode.scrollIntoViewIfNeeded(true);
            }
        }
    }
}