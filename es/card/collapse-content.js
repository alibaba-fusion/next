import { __extends } from "tslib";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Button from '../button';
import ConfigProvider from '../config-provider';
import nextLocale from '../locale/zh-cn';
var CardCollapseContent = /** @class */ (function (_super) {
    __extends(CardCollapseContent, _super);
    function CardCollapseContent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleToggle = function () {
            _this.setState(function (prevState) {
                return {
                    expand: !prevState.expand,
                };
            });
        };
        _this._contentRefHandler = function (ref) {
            _this.content = ref;
        };
        _this.saveFooter = function (ref) {
            _this.footer = ref;
        };
        _this.state = {
            needMore: false,
            expand: false,
            contentHeight: 'auto',
        };
        return _this;
    }
    CardCollapseContent.prototype.componentDidMount = function () {
        this._setNeedMore();
        this._setContentHeight();
    };
    CardCollapseContent.prototype.componentDidUpdate = function () {
        this._setContentHeight();
    };
    // 是否展示 More 按钮
    CardCollapseContent.prototype._setNeedMore = function () {
        var contentHeight = this.props.contentHeight;
        var childrenHeight = this._getNodeChildrenHeight(this.content);
        this.setState({
            needMore: contentHeight !== 'auto' && childrenHeight > contentHeight,
        });
    };
    // 设置 Body 的高度
    CardCollapseContent.prototype._setContentHeight = function () {
        if (this.props.contentHeight === 'auto') {
            this.content.style.height = 'auto';
            return;
        }
        if (this.state.expand) {
            var childrenHeight = this._getNodeChildrenHeight(this.content);
            this.content.style.height = "".concat(childrenHeight, "px"); // get the real height
        }
        else {
            var el = ReactDOM.findDOMNode(this.footer);
            var height = this.props.contentHeight;
            if (el) {
                height = height - el.getBoundingClientRect().height;
            }
            this.content.style.height = "".concat(height, "px");
        }
    };
    CardCollapseContent.prototype._getNodeChildrenHeight = function (node) {
        if (!node) {
            return 0;
        }
        var contentChildNodes = node.childNodes;
        var length = contentChildNodes.length;
        if (!length) {
            return 0;
        }
        var lastNode = contentChildNodes[length - 1];
        return lastNode.offsetTop + lastNode.offsetHeight;
    };
    CardCollapseContent.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, children = _a.children, locale = _a.locale;
        var _b = this.state, needMore = _b.needMore, expand = _b.expand;
        return (React.createElement("div", { className: "".concat(prefix, "card-body") },
            React.createElement("div", { className: "".concat(prefix, "card-content"), ref: this._contentRefHandler }, children),
            needMore ? (React.createElement("div", { className: "".concat(prefix, "card-footer"), ref: this.saveFooter, onClick: this.handleToggle },
                React.createElement(Button, { text: true, type: "primary" },
                    expand ? locale.fold : locale.expand,
                    React.createElement(Icon, { type: "arrow-down", className: expand ? 'expand' : '' })))) : null));
    };
    CardCollapseContent.displayName = 'CardCollapseContent';
    CardCollapseContent.propTypes = {
        prefix: PropTypes.string,
        /**
         * 内容区域的固定高度
         */
        contentHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        locale: PropTypes.object,
        children: PropTypes.node,
    };
    CardCollapseContent.defaultProps = {
        prefix: 'next-',
        contentHeight: 120,
        locale: nextLocale.Card,
    };
    return CardCollapseContent;
}(Component));
export default ConfigProvider.config(CardCollapseContent, {
    componentName: 'Card',
});
