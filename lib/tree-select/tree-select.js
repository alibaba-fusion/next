'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.clonedeep');

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _tree = require('../tree');

var _tree2 = _interopRequireDefault(_tree);

var _util = require('../tree/view/util');

var _util2 = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};
var TreeNode = _tree2.default.Node;
var bindCtx = _util2.func.bindCtx;
var pickOthers = _util2.obj.pickOthers;


var flatDataSource = function flatDataSource(props) {
    var _k2n = {};
    var _p2n = {};
    var _v2n = {};

    if ('dataSource' in props) {
        var loop = function loop(data) {
            var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
            return data.map(function (item, index) {
                var value = item.value,
                    children = item.children;

                var pos = prefix + '-' + index;
                var key = item.key || pos;

                var newItem = (0, _extends3.default)({}, item, { key: key, pos: pos });
                if (children && children.length) {
                    newItem.children = loop(children, pos);
                }

                _k2n[key] = _p2n[pos] = _v2n[value] = newItem;
                return newItem;
            });
        };

        loop(props.dataSource);
    } else if ('children' in props) {
        var _loop = function _loop(children) {
            var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
            return _react.Children.map(children, function (node, index) {
                if (!_react2.default.isValidElement(node)) {
                    return;
                }

                var _node$props = node.props,
                    value = _node$props.value,
                    children = _node$props.children;

                var pos = prefix + '-' + index;
                var key = node.key || pos;
                var newItem = (0, _extends3.default)({}, node.props, { key: key, pos: pos });
                if (children && _react.Children.count(children)) {
                    newItem.children = _loop(children, pos);
                }

                _k2n[key] = _p2n[pos] = _v2n[value] = newItem;
                return newItem;
            });
        };
        _loop(props.children);
    }

    return { _k2n: _k2n, _p2n: _p2n, _v2n: _v2n };
};

var isSearched = function isSearched(label, searchedValue) {
    var labelString = '';

    searchedValue = String(searchedValue);

    var loop = function loop(arg) {
        if ((0, _react.isValidElement)(arg) && arg.props.children) {
            _react.Children.forEach(arg.props.children, loop);
        } else {
            labelString += arg;
        }
    };
    loop(label);

    if (labelString.length >= searchedValue.length && labelString.toLowerCase().indexOf(searchedValue.toLowerCase()) > -1) {
        return true;
    }

    return false;
};

var getSearchKeys = function getSearchKeys(searchedValue, _k2n, _p2n) {
    var searchedKeys = [];
    var retainedKeys = [];
    Object.keys(_k2n).forEach(function (k) {
        var _k2n$k = _k2n[k],
            label = _k2n$k.label,
            pos = _k2n$k.pos;


        if (isSearched(label, searchedValue)) {
            searchedKeys.push(k);
            var posArr = pos.split('-');
            posArr.forEach(function (n, i) {
                if (i > 0) {
                    var p = posArr.slice(0, i + 1).join('-');
                    var kk = _p2n[p].key;
                    if (retainedKeys.indexOf(kk) === -1) {
                        retainedKeys.push(kk);
                    }
                }
            });
        }
    });

    return { searchedKeys: searchedKeys, retainedKeys: retainedKeys };
};

/**
 * TreeSelect
 */
var TreeSelect = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(TreeSelect, _Component);

    function TreeSelect(props, context) {
        (0, _classCallCheck3.default)(this, TreeSelect);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        var defaultVisible = props.defaultVisible,
            visible = props.visible,
            defaultValue = props.defaultValue,
            value = props.value;

        _this.state = (0, _extends3.default)({
            visible: typeof visible === 'undefined' ? defaultVisible : visible,
            value: (0, _util.normalizeToArray)(typeof value === 'undefined' ? defaultValue : value),
            searchedValue: '',
            expandedKeys: [],
            searchedKeys: [],
            retainedKeys: [],
            autoExpandParent: false
        }, flatDataSource(props));

        bindCtx(_this, ['handleSelect', 'handleCheck', 'handleSearch', 'handleSearchClear', 'handleVisibleChange', 'handleChange', 'handleRemove', 'handleExpand', 'handleKeyDown', 'saveTreeRef', 'saveSelectRef']);
        return _this;
    }

    TreeSelect.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var st = {};

        if ('value' in props) {
            st.value = (0, _util.normalizeToArray)(props.value);
        }
        if ('visible' in props) {
            st.visible = props.visible;
        }

        var _flatDataSource = flatDataSource(props),
            _k2n = _flatDataSource._k2n,
            _p2n = _flatDataSource._p2n,
            _v2n = _flatDataSource._v2n;

        if (props.showSearch && state.searchedValue) {
            var _getSearchKeys = getSearchKeys(state.searchedValue, _k2n, _p2n),
                searchedKeys = _getSearchKeys.searchedKeys,
                retainedKeys = _getSearchKeys.retainedKeys;

            st.searchedKeys = searchedKeys;
            st.retainedKeys = retainedKeys;
        }

        return (0, _extends3.default)({}, st, {
            _k2n: _k2n,
            _p2n: _p2n,
            _v2n: _v2n
        });
    };

    TreeSelect.prototype.getKeysByValue = function getKeysByValue(value) {
        var _this2 = this;

        return value.reduce(function (ret, v) {
            var k = _this2.state._v2n[v] && _this2.state._v2n[v].key;
            if (k) {
                ret.push(k);
            }

            return ret;
        }, []);
    };

    TreeSelect.prototype.getValueByKeys = function getValueByKeys(keys) {
        var _this3 = this;

        return keys.map(function (k) {
            return _this3.state._k2n[k].value;
        });
    };

    TreeSelect.prototype.getValueForSelect = function getValueForSelect(value) {
        var treeCheckedStrategy = this.props.treeCheckedStrategy;


        var keys = this.getKeysByValue(value);
        keys = (0, _util.getAllCheckedKeys)(keys, this.state._k2n, this.state._p2n);

        switch (treeCheckedStrategy) {
            case 'parent':
                keys = (0, _util.filterChildKey)(keys, this.state._k2n, this.state._p2n);
                break;
            case 'child':
                keys = (0, _util.filterParentKey)(keys, this.state._k2n, this.state._p2n);
                break;
            default:
                break;
        }

        return this.getValueByKeys(keys);
    };

    TreeSelect.prototype.getData = function getData(value, forSelect) {
        var _this4 = this;

        return value.reduce(function (ret, v) {
            var k = _this4.state._v2n[v] && _this4.state._v2n[v].key;
            if (k) {
                var _state$_k2n$k = _this4.state._k2n[k],
                    label = _state$_k2n$k.label,
                    pos = _state$_k2n$k.pos,
                    disabled = _state$_k2n$k.disabled,
                    checkboxDisabled = _state$_k2n$k.checkboxDisabled;

                var d = {
                    value: v,
                    label: label,
                    pos: pos
                };
                if (forSelect) {
                    d.disabled = disabled || checkboxDisabled;
                } else {
                    d.key = k;
                }
                ret.push(d);
            }

            return ret;
        }, []);
    };

    TreeSelect.prototype.saveTreeRef = function saveTreeRef(ref) {
        this.tree = ref;
    };

    TreeSelect.prototype.saveSelectRef = function saveSelectRef(ref) {
        this.select = ref;
    };

    TreeSelect.prototype.handleVisibleChange = function handleVisibleChange(visible, type) {
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible
            });
        }

        if (['fromTree', 'keyboard'].indexOf(type) !== -1 && !visible) {
            this.select.focusInput();
        }

        this.props.onVisibleChange(visible, type);
    };

    TreeSelect.prototype.handleSelect = function handleSelect(selectedKeys, extra) {
        var _props = this.props,
            multiple = _props.multiple,
            onChange = _props.onChange;
        var selected = extra.selected;


        if (multiple || selected) {
            var value = this.getValueByKeys(selectedKeys);
            if (!('value' in this.props)) {
                this.setState({
                    value: value
                });
            }
            if (!multiple) {
                this.handleVisibleChange(false, 'fromTree');
            }

            var data = this.getData(value);
            multiple ? onChange(value, data) : onChange(value[0], data[0]);
        } else {
            this.handleVisibleChange(false, 'fromTree');
        }
    };

    TreeSelect.prototype.handleCheck = function handleCheck(checkedKeys) {
        var onChange = this.props.onChange;


        var value = this.getValueByKeys(checkedKeys);
        if (!('value' in this.props)) {
            this.setState({
                value: value
            });
        }

        onChange(value, this.getData(value));
    };

    TreeSelect.prototype.handleRemove = function handleRemove(removedItem) {
        var _this5 = this;

        var removedValue = removedItem.value;
        var _props2 = this.props,
            treeCheckable = _props2.treeCheckable,
            treeCheckStrictly = _props2.treeCheckStrictly,
            treeCheckedStrategy = _props2.treeCheckedStrategy,
            onChange = _props2.onChange;


        var value = void 0;
        if (treeCheckable && !treeCheckStrictly && ['parent', 'all'].indexOf(treeCheckedStrategy) !== -1) {
            var removedPos = this.state._v2n[removedValue].pos;
            value = this.state.value.filter(function (v) {
                var p = _this5.state._v2n[v].pos;
                return !(0, _util.isDescendantOrSelf)(removedPos, p);
            });

            var nums = removedPos.split('-');
            for (var i = nums.length; i > 2; i--) {
                var parentPos = nums.slice(0, i - 1).join('-');
                var parentValue = this.state._p2n[parentPos].value;
                var parentIndex = value.indexOf(parentValue);
                if (parentIndex > -1) {
                    value.splice(parentIndex, 1);
                } else {
                    break;
                }
            }
        } else {
            value = this.state.value.filter(function (v) {
                return v !== removedValue;
            });
        }

        if (!('value' in this.props)) {
            this.setState({
                value: value
            });
        }

        var data = this.getData(value);
        onChange(value, data);
    };

    TreeSelect.prototype.handleSearch = function handleSearch(searchedValue) {
        var _state = this.state,
            _k2n = _state._k2n,
            _p2n = _state._p2n;

        var _getSearchKeys2 = getSearchKeys(searchedValue, _k2n, _p2n),
            searchedKeys = _getSearchKeys2.searchedKeys,
            retainedKeys = _getSearchKeys2.retainedKeys;

        this.setState({
            searchedValue: searchedValue,
            expandedKeys: searchedKeys,
            searchedKeys: searchedKeys,
            retainedKeys: retainedKeys,
            autoExpandParent: true
        });

        this.props.onSearch(searchedValue);
    };

    TreeSelect.prototype.handleSearchClear = function handleSearchClear(triggerType) {
        this.setState({
            searchedValue: '',
            expandedKeys: []
        });
        this.props.onSearchClear(triggerType);
    };

    TreeSelect.prototype.handleExpand = function handleExpand(expandedKeys) {
        this.setState({
            expandedKeys: expandedKeys,
            autoExpandParent: false
        });
    };

    TreeSelect.prototype.handleKeyDown = function handleKeyDown(e) {
        var onKeyDown = this.props.onKeyDown;
        var visible = this.state.visible;


        if (onKeyDown) {
            onKeyDown(e);
        }

        if (!visible) {
            return;
        }

        switch (e.keyCode) {
            case _util2.KEYCODE.UP:
            case _util2.KEYCODE.DOWN:
                this.tree.setFocusKey();
                e.preventDefault();
                break;
            default:
                break;
        }
    };

    TreeSelect.prototype.handleChange = function handleChange(value, triggerType) {
        if (this.props.hasClear && triggerType === 'clear') {
            if (!('value' in this.props)) {
                this.setState({
                    value: []
                });
            }

            this.props.onChange(null, null);
        }
    };

    TreeSelect.prototype.searchNodes = function searchNodes(children) {
        var _state2 = this.state,
            searchedKeys = _state2.searchedKeys,
            retainedKeys = _state2.retainedKeys;


        var loop = function loop(children) {
            var retainedNodes = [];
            _react.Children.forEach(children, function (child) {
                if (searchedKeys.indexOf(child.key) > -1) {
                    retainedNodes.push(child);
                } else if (retainedKeys.indexOf(child.key) > -1) {
                    var retainedNode = child.props.children ? (0, _react.cloneElement)(child, {}, loop(child.props.children)) : child;
                    retainedNodes.push(retainedNode);
                } else {
                    var hideNode = (0, _react.cloneElement)(child, {
                        style: { display: 'none' }
                    });
                    retainedNodes.push(hideNode);
                }
            });
            return retainedNodes;
        };

        return loop(children);
    };

    TreeSelect.prototype.createNodesByData = function createNodesByData(data, searching) {
        var _this6 = this;

        var _state3 = this.state,
            searchedKeys = _state3.searchedKeys,
            retainedKeys = _state3.retainedKeys;


        var loop = function loop(data, isParentMatched) {
            var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

            var retainedNodes = [];

            data.forEach(function (item, index) {
                var children = item.children,
                    others = (0, _objectWithoutProperties3.default)(item, ['children']);

                var pos = prefix + '-' + index;
                var key = _this6.state._p2n[pos].key;
                var addNode = function addNode(isParentMatched, hide) {
                    if (hide) {
                        others.style = { display: 'none' };
                    }

                    retainedNodes.push(_react2.default.createElement(
                        TreeNode,
                        (0, _extends3.default)({}, others, { key: key }),
                        children && children.length ? loop(children, isParentMatched, pos) : null
                    ));
                };

                if (searching) {
                    if (searchedKeys.indexOf(key) > -1 || isParentMatched) {
                        addNode(true);
                    } else if (retainedKeys.indexOf(key) > -1) {
                        addNode(false);
                    } else {
                        addNode(false, true);
                    }
                } else {
                    addNode();
                }
            });

            return retainedNodes;
        };

        return loop(data, false);
    };

    /*eslint-disable max-statements*/


    TreeSelect.prototype.renderPopupContent = function renderPopupContent() {
        var prefix = this.props.prefix;
        var treeSelectPrefix = prefix + 'tree-select-';

        if (!this.state.visible) {
            return _react2.default.createElement('div', { className: treeSelectPrefix + 'dropdown' });
        }

        var _props3 = this.props,
            multiple = _props3.multiple,
            treeCheckable = _props3.treeCheckable,
            treeCheckStrictly = _props3.treeCheckStrictly,
            treeCheckedStrategy = _props3.treeCheckedStrategy,
            treeDefaultExpandAll = _props3.treeDefaultExpandAll,
            treeDefaultExpandedKeys = _props3.treeDefaultExpandedKeys,
            treeLoadData = _props3.treeLoadData,
            _props3$treeProps = _props3.treeProps,
            customTreeProps = _props3$treeProps === undefined ? {} : _props3$treeProps,
            showSearch = _props3.showSearch,
            dataSource = _props3.dataSource,
            children = _props3.children,
            readOnly = _props3.readOnly,
            notFoundContent = _props3.notFoundContent,
            useVirtual = _props3.useVirtual;
        var _state4 = this.state,
            value = _state4.value,
            searchedValue = _state4.searchedValue,
            expandedKeys = _state4.expandedKeys,
            autoExpandParent = _state4.autoExpandParent,
            searchedKeys = _state4.searchedKeys;


        var treeProps = {
            multiple: multiple,
            ref: this.saveTreeRef,
            loadData: treeLoadData,
            defaultExpandAll: treeDefaultExpandAll,
            defaultExpandedKeys: treeDefaultExpandedKeys,
            useVirtual: useVirtual
        };

        // 使用虚拟滚动 设置默认高度
        if (useVirtual) {
            customTreeProps.style = (0, _extends3.default)({
                maxHeight: '260px',
                overflow: 'auto',
                boxSizing: 'border-box'
            }, customTreeProps.style);
        }

        var keys = this.getKeysByValue(value);
        if (treeCheckable) {
            treeProps.checkable = treeCheckable;
            treeProps.checkStrictly = treeCheckStrictly;
            treeProps.checkedStrategy = treeCheckStrictly ? 'all' : treeCheckedStrategy;
            treeProps.checkedKeys = keys;
            if (!readOnly) {
                treeProps.onCheck = this.handleCheck;
            }
        } else {
            treeProps.selectedKeys = keys;
            if (!readOnly) {
                treeProps.onSelect = this.handleSelect;
            }
        }

        var notFound = false;
        var newChildren = void 0;
        if (showSearch && searchedValue) {
            treeProps.expandedKeys = expandedKeys;
            treeProps.autoExpandParent = autoExpandParent;
            treeProps.onExpand = this.handleExpand;
            treeProps.filterTreeNode = function (node) {
                return searchedKeys.indexOf(node.props.eventKey) > -1;
            };

            if (searchedKeys.length) {
                newChildren = dataSource ? this.createNodesByData(dataSource, true) : this.searchNodes(children);
            } else {
                notFound = true;
            }
        } else {
            // eslint-disable-next-line
            if (dataSource) {
                if (dataSource.length) {
                    newChildren = this.createNodesByData(dataSource);
                } else {
                    notFound = true;
                }
            } else {
                // eslint-disable-next-line
                if (_react.Children.count(children)) {
                    newChildren = children;
                } else {
                    notFound = true;
                }
            }
        }
        var contentClass = treeSelectPrefix + 'dropdown-content';

        return _react2.default.createElement(
            'div',
            { className: treeSelectPrefix + 'dropdown' },
            notFound ? _react2.default.createElement(
                'div',
                { className: treeSelectPrefix + 'not-found contentClass' },
                notFoundContent
            ) : _react2.default.createElement(
                _tree2.default,
                (0, _extends3.default)({}, treeProps, customTreeProps, { className: contentClass }),
                newChildren
            )
        );
    };

    TreeSelect.prototype.renderPreview = function renderPreview(data, others) {
        var _props4 = this.props,
            prefix = _props4.prefix,
            className = _props4.className,
            renderPreview = _props4.renderPreview;


        var previewCls = (0, _classnames2.default)(className, prefix + 'form-preview');
        var items = data && !Array.isArray(data) ? [data] : data;

        if (typeof renderPreview === 'function') {
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: previewCls }),
                renderPreview(items, this.props)
            );
        }

        return _react2.default.createElement(
            'p',
            (0, _extends3.default)({}, others, { className: previewCls }),
            items && items.map(function (_ref) {
                var label = _ref.label;
                return label;
            }).join(', ')
        );
    };

    /*eslint-enable*/


    TreeSelect.prototype.render = function render() {
        var _props5 = this.props,
            prefix = _props5.prefix,
            size = _props5.size,
            placeholder = _props5.placeholder,
            disabled = _props5.disabled,
            hasArrow = _props5.hasArrow,
            hasBorder = _props5.hasBorder,
            hasClear = _props5.hasClear,
            label = _props5.label,
            readOnly = _props5.readOnly,
            autoWidth = _props5.autoWidth,
            popupStyle = _props5.popupStyle,
            popupClassName = _props5.popupClassName,
            showSearch = _props5.showSearch,
            multiple = _props5.multiple,
            treeCheckable = _props5.treeCheckable,
            treeCheckStrictly = _props5.treeCheckStrictly,
            className = _props5.className,
            popupContainer = _props5.popupContainer,
            popupProps = _props5.popupProps,
            followTrigger = _props5.followTrigger,
            isPreview = _props5.isPreview;

        var others = pickOthers(Object.keys(TreeSelect.propTypes), this.props);
        var _state5 = this.state,
            value = _state5.value,
            visible = _state5.visible;


        var valueForSelect = treeCheckable && !treeCheckStrictly ? this.getValueForSelect(value) : value;
        var data = this.getData(valueForSelect, true);
        if (!multiple && !treeCheckable) {
            data = data[0];
        }

        if (isPreview) {
            return this.renderPreview(data, others);
        }

        return _react2.default.createElement(_select2.default, (0, _extends3.default)({
            prefix: prefix,
            className: className,
            size: size,
            hasBorder: hasBorder,
            hasArrow: hasArrow,
            hasClear: hasClear,
            placeholder: placeholder,
            disabled: disabled,
            autoWidth: autoWidth,
            label: label,
            readOnly: readOnly,
            ref: this.saveSelectRef,
            mode: treeCheckable || multiple ? 'multiple' : 'single',
            value: data,
            onRemove: this.handleRemove,
            onChange: this.handleChange,
            visible: visible,
            onVisibleChange: this.handleVisibleChange,
            showSearch: showSearch,
            onSearch: this.handleSearch,
            onSearchClear: this.handleSearchClear,
            onKeyDown: this.handleKeyDown,
            popupContent: this.renderPopupContent(),
            popupContainer: popupContainer,
            popupStyle: popupStyle,
            popupClassName: popupClassName,
            popupProps: popupProps,
            followTrigger: followTrigger
        }, others));
    };

    return TreeSelect;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    /**
     * 树节点
     */
    children: _propTypes2.default.node,
    /**
     * 选择框大小
     */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /**
     * 选择框占位符
     */
    placeholder: _propTypes2.default.string,
    /**
     * 是否禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 是否有下拉箭头
     */
    hasArrow: _propTypes2.default.bool,
    /**
     * 是否有边框
     */
    hasBorder: _propTypes2.default.bool,
    /**
     * 是否有清空按钮
     */
    hasClear: _propTypes2.default.bool,
    /**
     * 自定义内联 label
     */
    label: _propTypes2.default.node,
    /**
     * 是否只读，只读模式下可以展开弹层但不能选择
     */
    readOnly: _propTypes2.default.bool,
    /**
     * 下拉框是否与选择器对齐
     */
    autoWidth: _propTypes2.default.bool,
    /**
     * 数据源，该属性优先级高于 children
     */
    dataSource: _propTypes2.default.arrayOf(_propTypes2.default.object),
    /**
     * （受控）当前值
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
    /**
     * （非受控）默认值
     */
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
    /**
     * 选中值改变时触发的回调函数
     * @param {String|Array} value 选中的值，单选时返回单个值，多选时返回数组
     * @param {Object|Array} data 选中的数据，包括 value, label, pos, key属性，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点
     */
    onChange: _propTypes2.default.func,
    /**
     * 是否显示搜索框
     */
    showSearch: _propTypes2.default.bool,
    /**
     * 在搜索框中输入时触发的回调函数
     * @param {String} keyword 输入的关键字
     */
    onSearch: _propTypes2.default.func,
    onSearchClear: _propTypes2.default.func,
    /**
     * 无数据时显示内容
     */
    notFoundContent: _propTypes2.default.node,
    /**
     * 是否支持多选
     */
    multiple: _propTypes2.default.bool,
    /**
     * 下拉框中的树是否支持勾选节点的复选框
     */
    treeCheckable: _propTypes2.default.bool,
    /**
     * 下拉框中的树勾选节点复选框是否完全受控（父子节点选中状态不再关联）
     */
    treeCheckStrictly: _propTypes2.default.bool,
    /**
     * 定义选中时回填的方式
     * @enumdesc 返回所有选中的节点, 父子节点都选中时只返回父节点, 父子节点都选中时只返回子节点
     */
    treeCheckedStrategy: _propTypes2.default.oneOf(['all', 'parent', 'child']),
    /**
     * 下拉框中的树是否默认展开所有节点
     */
    treeDefaultExpandAll: _propTypes2.default.bool,
    /**
     * 下拉框中的树默认展开节点key的数组
     */
    treeDefaultExpandedKeys: _propTypes2.default.arrayOf(_propTypes2.default.string),
    /**
     * 下拉框中的树异步加载数据的函数，使用请参考[Tree的异步加载数据Demo](https://fusion.design/pc/component/basic/tree#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE)
     * @param {ReactElement} node 被点击展开的节点
     */
    treeLoadData: _propTypes2.default.func,
    /**
     * 透传到 Tree 的属性对象
     */
    treeProps: _propTypes2.default.object,
    /**
     * 初始下拉框是否显示
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 当前下拉框是否显示
     */
    visible: _propTypes2.default.bool,
    /**
     * 下拉框显示或关闭时触发事件的回调函数
     * @param {Boolean} visible 是否显示
     * @param {String} type 触发显示关闭的操作类型
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 下拉框自定义样式对象
     */
    popupStyle: _propTypes2.default.object,
    /**
     * 下拉框样式自定义类名
     */
    popupClassName: _propTypes2.default.string,
    /**
     * 下拉框挂载的容器节点
     */
    popupContainer: _propTypes2.default.any,
    /**
     * 透传到 Popup 的属性对象
     */
    popupProps: _propTypes2.default.object,
    /**
     * 是否跟随滚动
     */
    followTrigger: _propTypes2.default.bool,
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {Array<data>} value 选择值 { label: , value:}
     */
    renderPreview: _propTypes2.default.func,
    /**
     * 是否开启虚拟滚动
     */
    useVirtual: _propTypes2.default.bool,
    /**
     * 是否是不可变数据
     * @version 1.23
     */
    immutable: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    size: 'medium',
    disabled: false,
    hasArrow: true,
    hasBorder: true,
    hasClear: false,
    autoWidth: true,
    defaultValue: null,
    onChange: noop,
    showSearch: false,
    onSearch: noop,
    onSearchClear: noop,
    notFoundContent: 'Not Found',
    multiple: false,
    treeCheckable: false,
    treeCheckStrictly: false,
    treeCheckedStrategy: 'parent',
    treeDefaultExpandAll: false,
    treeDefaultExpandedKeys: [],
    treeProps: {},
    defaultVisible: false,
    onVisibleChange: noop,
    useVirtual: false
}, _temp);
TreeSelect.displayName = 'TreeSelect';


TreeSelect.Node = TreeNode;

exports.default = (0, _reactLifecyclesCompat.polyfill)(TreeSelect);
module.exports = exports['default'];