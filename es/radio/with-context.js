import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

export default function withContext(Radio) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(WrappedComp, _React$Component);

        function WrappedComp(props) {
            _classCallCheck(this, WrappedComp);

            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

            _this.radioRef = null;
            return _this;
        }

        WrappedComp.prototype.focus = function focus() {
            if (this.radioRef) {
                this.radioRef.focus();
            }
        };

        WrappedComp.prototype.render = function render() {
            var _this2 = this;

            return React.createElement(Radio, _extends({
                ref: function ref(el) {
                    _this2.radioRef = el;
                }
            }, this.props, {
                context: this.context
            }));
        };

        return WrappedComp;
    }(React.Component), _class.displayName = 'Radio', _class.contextTypes = {
        onChange: PropTypes.func,
        __group__: PropTypes.bool,
        isButton: PropTypes.bool,
        selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        disabled: PropTypes.bool
    }, _temp;
}