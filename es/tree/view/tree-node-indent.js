import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

var TreeNodeIndent = (_temp = _class = function (_Component) {
    _inherits(TreeNodeIndent, _Component);

    function TreeNodeIndent() {
        _classCallCheck(this, TreeNodeIndent);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    TreeNodeIndent.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            level = _props.level,
            isLastChild = _props.isLastChild,
            showLine = _props.showLine;

        var indents = [];

        for (var i = 1; i < level; i++) {
            var _cx;

            var classNames = cx(prefix + 'tree-node-indent-unit', (_cx = {}, _cx[prefix + 'line'] = !isLastChild[i - 1] && showLine, _cx));

            indents.push(React.createElement('span', { className: classNames, key: i - 1 }));
        }

        return indents;
    };

    return TreeNodeIndent;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    level: PropTypes.number,
    isLastChild: PropTypes.arrayOf(PropTypes.bool),
    showLine: PropTypes.bool
}, _class.defaultProps = {
    isLastChild: []
}, _temp);
TreeNodeIndent.displayName = 'TreeNodeIndent';
export { TreeNodeIndent as default };