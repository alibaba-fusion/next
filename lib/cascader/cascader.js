'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

var _util = require('../util');

var _menu3 = require('./menu');

var _menu4 = _interopRequireDefault(_menu3);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindCtx = _util.func.bindCtx;
var pickOthers = _util.obj.pickOthers;
var addClass = _util.dom.addClass,
    removeClass = _util.dom.removeClass,
    setStyle = _util.dom.setStyle,
    getStyle = _util.dom.getStyle;

/**
 * Cascader
 */

var Cascader = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Cascader, _Component);

    function Cascader(props, context) {
        (0, _classCallCheck3.default)(this, Cascader);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        var defaultValue = props.defaultValue,
            value = props.value,
            defaultExpandedValue = props.defaultExpandedValue,
            expandedValue = props.expandedValue,
            dataSource = props.dataSource,
            multiple = props.multiple,
            checkStrictly = props.checkStrictly,
            canOnlyCheckLeaf = props.canOnlyCheckLeaf,
            loadData = props.loadData;


        _this.updateCache(dataSource);

        var normalizedValue = _this.normalizeValue(typeof value === 'undefined' ? defaultValue : value);
        if (!loadData) {
            normalizedValue = normalizedValue.filter(function (v) {
                return _this._v2n[v];
            });
        }
        // TODO loadData
        var realExpandedValue = typeof expandedValue === 'undefined' ? typeof defaultExpandedValue === 'undefined' ? _this.getExpandedValue(normalizedValue[0]) : _this.normalizeValue(defaultExpandedValue) : _this.normalizeValue(expandedValue);
        var st = {
            value: normalizedValue,
            expandedValue: realExpandedValue
        };
        if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
            st.value = _this.completeValue(props.dataSource, st.value);
        }

        _this.state = st;

        _this.lastExpandedValue = [].concat(_this.state.expandedValue);

        bindCtx(_this, ['handleMouseLeave', 'handleFocus', 'handleFold', 'getCascaderNode', 'onBlur']);
        return _this;
    }

    Cascader.prototype.componentDidMount = function componentDidMount() {
        this.setCascaderInnerWidth();
    };

    Cascader.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        this.updateCache(nextProps.dataSource);

        var state = {};
        if ('value' in nextProps) {
            state.value = this.normalizeValue(nextProps.value);
            if (!nextProps.loadData) {
                state.value = state.value.filter(function (v) {
                    return _this2._v2n[v];
                });
            }

            var multiple = nextProps.multiple,
                checkStrictly = nextProps.checkStrictly,
                canOnlyCheckLeaf = nextProps.canOnlyCheckLeaf;

            if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
                state.value = this.completeValue(nextProps.dataSource, state.value);
            }
            if (!this.state.expandedValue.length && !('expandedValue' in nextProps)) {
                state.expandedValue = this.getExpandedValue(state.value[0]);
            }
        }
        if ('expandedValue' in nextProps) {
            state.expandedValue = this.normalizeValue(nextProps.expandedValue);
        }
        if (Object.keys(state).length) {
            this.setState(state);
        }
    };

    Cascader.prototype.componentDidUpdate = function componentDidUpdate() {
        this.setCascaderInnerWidth();
    };

    Cascader.prototype.getCascaderNode = function getCascaderNode(ref) {
        this.cascader = ref;
        if (this.cascader) {
            this.cascaderInner = this.cascader.querySelector('.' + this.props.prefix + 'cascader-inner');
        }
    };

    Cascader.prototype.setCascaderInnerWidth = function setCascaderInnerWidth() {
        if (!this.cascaderInner) {
            return;
        }
        var menus = [].slice.call(this.cascaderInner.querySelectorAll('.' + this.props.prefix + 'cascader-menu-wrapper'));
        if (menus.length === 0) {
            return;
        }

        var menusWidth = Math.ceil(menus.reduce(function (ret, menu) {
            return ret + menu.offsetWidth;
        }, 0));
        if (getStyle(this.cascaderInner, 'width') !== menusWidth) {
            setStyle(this.cascaderInner, 'width', menusWidth);
        }

        if (getStyle(this.cascader, 'display') === 'inline-block') {
            var hasRightBorderClass = this.props.prefix + 'has-right-border';
            menus.forEach(function (menu) {
                return removeClass(menu, hasRightBorderClass);
            });
            if (this.cascader.clientWidth > menusWidth) {
                addClass(menus[menus.length - 1], hasRightBorderClass);
            }
        }
    };

    Cascader.prototype.setCache = function setCache(data) {
        var _this3 = this;

        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

        data.forEach(function (item, index) {
            var value = item.value,
                children = item.children;

            var pos = prefix + '-' + index;
            _this3._v2n[value] = _this3._p2n[pos] = (0, _extends3.default)({}, item, { pos: pos, _source: item });

            if (children && children.length) {
                _this3.setCache(children, pos);
            }
        });
    };

    Cascader.prototype.updateCache = function updateCache(dataSource) {
        this._v2n = {};
        this._p2n = {};
        this.setCache(dataSource);
    };

    Cascader.prototype.normalizeValue = function normalizeValue(value) {
        if (value) {
            if (Array.isArray(value)) {
                return value;
            }

            return [value];
        }

        return [];
    };

    Cascader.prototype.getExpandedValue = function getExpandedValue(v) {
        var _this4 = this;

        if (!v || !this._v2n[v]) {
            return [];
        }

        var pos = this._v2n[v].pos;
        if (pos.split('-').length === 2) {
            return [];
        }

        var expandedMap = {};
        Object.keys(this._p2n).forEach(function (p) {
            if (_this4.isDescendantOrSelf(p, pos) && p !== pos) {
                expandedMap[_this4._p2n[p].value] = p;
            }
        });

        return Object.keys(expandedMap).sort(function (prev, next) {
            return expandedMap[prev].split('-').length - expandedMap[next].split('-').length;
        });
    };

    Cascader.prototype.completeValue = function completeValue(dataSource, value) {
        var _this5 = this;

        var filterValue = value.filter(function (v) {
            return typeof _this5._v2n[v] !== 'undefined';
        });
        var flatValue = this.flatValue(filterValue);

        var childChecked = function childChecked(child) {
            return flatValue.indexOf(child.value) > -1;
        };
        var removeValue = function removeValue(child) {
            return flatValue.splice(flatValue.indexOf(child.value), 1);
        };
        var addParentValue = function addParentValue(i, parent) {
            return flatValue.splice(i, 0, parent.value);
        };
        for (var i = 0; i < flatValue.length; i++) {
            var pos = this.getPos(flatValue[i]);
            var nums = pos.split('-');
            if (nums.length === 2) {
                break;
            }
            for (var j = nums.length - 2; j > 0; j--) {
                var parent = nums.slice(1, j + 1).reduce(function (ret, num) {
                    return ret.children[num];
                }, { children: dataSource });
                var parentChecked = parent.children.every(childChecked);
                if (parentChecked) {
                    parent.children.forEach(removeValue);
                    addParentValue(i, parent);
                } else {
                    break;
                }
            }
        }

        var newValue = [];
        if (flatValue.length) {
            flatValue = flatValue.reverse();
            var ps = Object.keys(this._p2n);
            for (var _i = 0; _i < flatValue.length; _i++) {
                var _pos = this.getPos(flatValue[_i]);
                for (var _j = 0; _j < ps.length; _j++) {
                    if (this.isDescendantOrSelf(_pos, ps[_j])) {
                        newValue.push(this.getValue(ps[_j]));
                        ps.splice(_j, 1);
                        _j--;
                    }
                }
            }
        }

        return newValue;
    };

    Cascader.prototype.flatValue = function flatValue(value) {
        var _this6 = this;

        var getDepth = function getDepth(v) {
            return _this6.getPos(v).split('-').length;
        };
        var newValue = value.slice(0).sort(function (prev, next) {
            return getDepth(prev) - getDepth(next);
        });

        for (var i = 0; i < newValue.length; i++) {
            for (var j = 0; j < newValue.length; j++) {
                if (i !== j && this.isDescendantOrSelf(this.getPos(newValue[i]), this.getPos(newValue[j]))) {
                    newValue.splice(j, 1);
                    j--;
                }
            }
        }

        return newValue;
    };

    Cascader.prototype.getValue = function getValue(pos) {
        return this._p2n[pos] ? this._p2n[pos].value : null;
    };

    Cascader.prototype.getPos = function getPos(value) {
        return this._v2n[value] ? this._v2n[value].pos : null;
    };

    Cascader.prototype.getData = function getData(value) {
        var _this7 = this;

        return value.map(function (v) {
            return _this7._v2n[v];
        });
    };

    Cascader.prototype.isDescendantOrSelf = function isDescendantOrSelf(currentPos, targetPos) {
        if (!currentPos || !targetPos) {
            return false;
        }

        var currentNums = currentPos.split('-');
        var targetNums = targetPos.split('-');

        return currentNums.length <= targetNums.length && currentNums.every(function (num, index) {
            return num === targetNums[index];
        });
    };

    Cascader.prototype.isSiblingOrSelf = function isSiblingOrSelf(currentPos, targetPos) {
        var currentNums = currentPos.split('-').slice(0, -1);
        var targetNums = targetPos.split('-').slice(0, -1);

        return currentNums.length === targetNums.length && currentNums.every(function (num, index) {
            return num === targetNums[index];
        });
    };

    Cascader.prototype.processValue = function processValue(value, v, checked) {
        var index = value.indexOf(v);
        if (checked && index === -1) {
            value.push(v);
        } else if (!checked && index > -1) {
            value.splice(index, 1);
        }
    };

    Cascader.prototype.handleSelect = function handleSelect(v, canExpand) {
        var _this8 = this;

        if (!(this.props.canOnlySelectLeaf && canExpand) && this.state.value[0] !== v) {
            if (!('value' in this.props)) {
                this.setState({
                    value: [v]
                });
            }

            if ('onChange' in this.props) {
                var data = this._v2n[v];
                var nums = data.pos.split('-');
                var selectedPath = nums.slice(1).reduce(function (ret, num, index) {
                    var p = nums.slice(0, index + 2).join('-');
                    ret.push(_this8._p2n[p]);
                    return ret;
                }, []);

                this.props.onChange(v, data, {
                    selectedPath: selectedPath
                });
            }
        }

        if (canExpand) {
            if (!this.props.canOnlySelectLeaf) {
                this.lastExpandedValue = this.state.expandedValue.slice(0, -1);
            }
        } else {
            this.lastExpandedValue = [].concat(this.state.expandedValue);
        }
    };

    Cascader.prototype.handleCheck = function handleCheck(v, checked) {
        var _this9 = this;

        var _props = this.props,
            checkStrictly = _props.checkStrictly,
            canOnlyCheckLeaf = _props.canOnlyCheckLeaf;

        var value = [].concat(this.state.value);

        if (checkStrictly || canOnlyCheckLeaf) {
            this.processValue(value, v, checked);
        } else {
            var pos = this.getPos(v);

            var ps = Object.keys(this._p2n);
            ps.forEach(function (p) {
                if (_this9.isDescendantOrSelf(pos, p)) {
                    _this9.processValue(value, _this9.getValue(p), checked);
                }
            });

            var currentPos = pos;
            var nums = pos.split('-');
            for (var i = nums.length; i > 2; i--) {
                var parentChecked = true;
                for (var j = 0; j < ps.length; j++) {
                    var p = ps[j];
                    if (this.isSiblingOrSelf(currentPos, p)) {
                        var _v = this.getValue(p);
                        if (value.indexOf(_v) === -1) {
                            parentChecked = false;
                            break;
                        }
                    }
                }
                var parentPos = nums.slice(0, i - 1).join('-');
                this.processValue(value, this.getValue(parentPos), parentChecked);

                currentPos = parentPos;
            }
        }

        if (!('value' in this.props)) {
            this.setState({
                value: value
            });
        }

        if ('onChange' in this.props) {
            if (checkStrictly || canOnlyCheckLeaf) {
                var data = this.getData(value);
                this.props.onChange(value, data, {
                    checked: checked,
                    currentData: this._v2n[v],
                    checkedData: data
                });
            } else {
                var flatValue = this.flatValue(value);
                var flatData = this.getData(flatValue);
                var checkedData = this.getData(value);
                var indeterminateValue = this.getIndeterminate(value);
                var indeterminateData = this.getData(indeterminateValue);
                this.props.onChange(flatValue, flatData, {
                    checked: checked,
                    currentData: this._v2n[v],
                    checkedData: checkedData,
                    indeterminateData: indeterminateData
                });
            }
        }

        this.lastExpandedValue = [].concat(this.state.expandedValue);
    };

    Cascader.prototype.handleExpand = function handleExpand(value, level, canExpand, focusedFirstChild) {
        var _this10 = this;

        var expandedValue = this.state.expandedValue;


        if (canExpand || expandedValue.length > level) {
            if (canExpand) {
                expandedValue.splice(level, expandedValue.length - level, value);
            } else {
                expandedValue.splice(level);
            }

            var callback = function callback() {
                _this10.setExpandValue(expandedValue);

                if (focusedFirstChild) {
                    var endExpandedValue = expandedValue[expandedValue.length - 1];
                    _this10.setState({
                        focusedValue: _this10._v2n[endExpandedValue].children[0].value
                    });
                }
            };

            var loadData = this.props.loadData;

            if (canExpand && loadData) {
                var data = this._v2n[value];
                return loadData(data, data._source).then(callback);
            } else {
                callback();
            }
        }
    };

    Cascader.prototype.handleMouseLeave = function handleMouseLeave() {
        this.setExpandValue([].concat(this.lastExpandedValue));
    };

    Cascader.prototype.setExpandValue = function setExpandValue(expandedValue) {
        if (!('expandedValue' in this.props)) {
            this.setState({
                expandedValue: expandedValue
            });
        }

        if ('onExpand' in this.props) {
            this.props.onExpand(expandedValue);
        }
    };

    Cascader.prototype.handleFocus = function handleFocus(focusedValue) {
        this.setState({
            focusedValue: focusedValue
        });
    };

    Cascader.prototype.handleFold = function handleFold() {
        var expandedValue = this.state.expandedValue;

        if (expandedValue.length > 0) {
            this.setExpandValue(expandedValue.slice(0, -1));
        }

        this.setState({
            focusedValue: expandedValue[expandedValue.length - 1]
        });
    };

    Cascader.prototype.getIndeterminate = function getIndeterminate(value) {
        var _this11 = this;

        var indeterminate = [];

        var positions = this.flatValue(value).map(this.getPos.bind(this));
        positions.forEach(function (pos) {
            var nums = pos.split('-');
            for (var i = nums.length; i > 2; i--) {
                var parentPos = nums.slice(0, i - 1).join('-');
                var parentValue = _this11.getValue(parentPos);
                if (indeterminate.indexOf(parentValue) === -1) {
                    indeterminate.push(parentValue);
                }
            }
        });

        return indeterminate;
    };

    Cascader.prototype.onBlur = function onBlur(e) {
        this.setState({
            focusedValue: ''
        });

        this.props.onBlur && this.props.onBlur(e);
    };

    Cascader.prototype.renderMenu = function renderMenu(data, level) {
        var _this12 = this;

        var _props2 = this.props,
            prefix = _props2.prefix,
            multiple = _props2.multiple,
            useVirtual = _props2.useVirtual,
            checkStrictly = _props2.checkStrictly,
            expandTriggerType = _props2.expandTriggerType,
            loadData = _props2.loadData,
            canOnlyCheckLeaf = _props2.canOnlyCheckLeaf,
            listClassName = _props2.listClassName,
            listStyle = _props2.listStyle,
            itemRender = _props2.itemRender;
        var _state = this.state,
            value = _state.value,
            expandedValue = _state.expandedValue,
            focusedValue = _state.focusedValue;


        return _react2.default.createElement(
            _menu4.default,
            { key: level, prefix: prefix, useVirtual: useVirtual, className: listClassName, style: listStyle, focusedKey: focusedValue, onItemFocus: this.handleFocus, onBlur: this.onBlur },
            data.map(function (item) {
                var disabled = !!item.disabled;
                var canExpand = !!item.children && !!item.children.length || !!loadData && !item.isLeaf;
                var expanded = expandedValue[level] === item.value;
                var props = {
                    prefix: prefix,
                    disabled: disabled,
                    canExpand: canExpand,
                    expanded: expanded,
                    expandTriggerType: expandTriggerType,
                    onExpand: _this12.handleExpand.bind(_this12, item.value, level, canExpand),
                    onFold: _this12.handleFold
                };

                if (multiple) {
                    props.checkable = !(canOnlyCheckLeaf && canExpand);
                    props.checked = value.indexOf(item.value) > -1;
                    props.indeterminate = checkStrictly || canOnlyCheckLeaf ? false : _this12.indeterminate.indexOf(item.value) > -1;
                    props.checkboxDisabled = !!item.checkboxDisabled;
                    props.onCheck = _this12.handleCheck.bind(_this12, item.value);
                } else {
                    props.selected = value[0] === item.value;
                    props.onSelect = _this12.handleSelect.bind(_this12, item.value, canExpand);
                }

                return _react2.default.createElement(
                    _item2.default,
                    (0, _extends3.default)({ key: item.value }, props),
                    itemRender(item)
                );
            })
        );
    };

    Cascader.prototype.renderMenus = function renderMenus() {
        var dataSource = this.props.dataSource;
        var expandedValue = this.state.expandedValue;


        var menus = [];
        var data = dataSource;

        for (var i = 0; i <= expandedValue.length; i++) {
            if (!data) {
                break;
            }

            menus.push(this.renderMenu(data, i));

            var expandedItem = void 0;
            for (var j = 0; j < data.length; j++) {
                if (data[j].value === expandedValue[i]) {
                    expandedItem = data[j];
                    break;
                }
            }
            data = expandedItem ? expandedItem.children : null;
        }

        return menus;
    };

    Cascader.prototype.renderFilteredItem = function renderFilteredItem(path) {
        var _props3 = this.props,
            prefix = _props3.prefix,
            resultRender = _props3.resultRender,
            searchValue = _props3.searchValue,
            multiple = _props3.multiple;
        var value = this.state.value;

        var lastItem = path[path.length - 1];

        var Item = void 0;
        var props = {
            key: lastItem.value,
            className: prefix + 'cascader-filtered-item',
            disabled: path.some(function (item) {
                return item.disabled;
            }),
            children: resultRender(searchValue, path)
        };

        if (multiple) {
            Item = _menu2.default.CheckboxItem;
            var _props4 = this.props,
                checkStrictly = _props4.checkStrictly,
                canOnlyCheckLeaf = _props4.canOnlyCheckLeaf;

            props.checked = value.indexOf(lastItem.value) > -1;
            props.indeterminate = !checkStrictly && !canOnlyCheckLeaf && this.indeterminate.indexOf(lastItem.value) > -1;
            props.checkboxDisabled = lastItem.checkboxDisabled;
            props.onChange = this.handleCheck.bind(this, lastItem.value);
        } else {
            Item = _menu2.default.Item;
            props.selected = value[0] === lastItem.value;
            props.onSelect = this.handleSelect.bind(this, lastItem.value, false);
        }

        return _react2.default.createElement(Item, props);
    };

    Cascader.prototype.renderFilteredList = function renderFilteredList() {
        var _this13 = this;

        var _props5 = this.props,
            prefix = _props5.prefix,
            filteredListStyle = _props5.filteredListStyle,
            filteredPaths = _props5.filteredPaths;

        return _react2.default.createElement(
            _menu2.default,
            { className: prefix + 'cascader-filtered-list', style: filteredListStyle },
            filteredPaths.map(function (path) {
                return _this13.renderFilteredItem(path);
            })
        );
    };

    Cascader.prototype.render = function render() {
        var _cx;

        var _props6 = this.props,
            prefix = _props6.prefix,
            className = _props6.className,
            expandTriggerType = _props6.expandTriggerType,
            multiple = _props6.multiple,
            dataSource = _props6.dataSource,
            checkStrictly = _props6.checkStrictly,
            canOnlyCheckLeaf = _props6.canOnlyCheckLeaf,
            searchValue = _props6.searchValue;

        var others = pickOthers(Object.keys(Cascader.propTypes), this.props);
        var value = this.state.value;


        var props = (0, _extends3.default)({
            className: (0, _classnames2.default)((_cx = {}, _cx[prefix + 'cascader'] = true, _cx.multiple = multiple, _cx[className] = !!className, _cx)),
            ref: 'cascader'
        }, others);
        if (expandTriggerType === 'hover') {
            props.onMouseLeave = this.handleMouseLeave;
        }

        if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
            this.indeterminate = this.getIndeterminate(value);
        }

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, props, { ref: this.getCascaderNode }),
            !searchValue ? _react2.default.createElement(
                'div',
                { className: prefix + 'cascader-inner' },
                dataSource && dataSource.length ? this.renderMenus() : null
            ) : this.renderFilteredList()
        );
    };

    return Cascader;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    /**
     * 数据源，结构可参考下方说明
     */
    dataSource: _propTypes2.default.arrayOf(_propTypes2.default.object),
    /**
     * （非受控）默认值
     */
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
    /**
     * （受控）当前值
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
    /**
     * 选中值改变时触发的回调函数
     * @param {String|Array} value 选中的值，单选时返回单个值，多选时返回数组
     * @param {Object|Array} data 选中的数据，包括 value 和 label，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点
     * @param {Object} extra 额外参数
     * @param {Array} extra.selectedPath 单选时选中的数据的路径
     * @param {Boolean} extra.checked 多选时当前的操作是选中还是取消选中
     * @param {Object} extra.currentData 多选时当前操作的数据
     * @param {Array} extra.checkedData 多选时所有被选中的数据
     * @param {Array} extra.indeterminateData 多选时半选的数据
     */
    onChange: _propTypes2.default.func,
    /**
     * （非受控）默认展开值，如果不设置，组件内部会根据 defaultValue/value 进行自动设置
     */
    defaultExpandedValue: _propTypes2.default.arrayOf(_propTypes2.default.string),
    /**
     * （受控）当前展开值
     */
    expandedValue: _propTypes2.default.arrayOf(_propTypes2.default.string),
    /**
     * 展开触发的方式
     */
    expandTriggerType: _propTypes2.default.oneOf(['click', 'hover']),
    /**
     * 展开时触发的回调函数
     * @param {Array} expandedValue 各列展开值的数组
     */
    onExpand: _propTypes2.default.func,
    /**
     * 是否开启虚拟滚动
     */
    useVirtual: _propTypes2.default.bool,
    /**
     * 是否多选
     */
    multiple: _propTypes2.default.bool,
    /**
     * 单选时是否只能选中叶子节点
     */
    canOnlySelectLeaf: _propTypes2.default.bool,
    /**
     * 多选时是否只能选中叶子节点
     */
    canOnlyCheckLeaf: _propTypes2.default.bool,
    /**
     * 父子节点是否选中不关联
     */
    checkStrictly: _propTypes2.default.bool,
    /**
     * 每列列表样式对象
     */
    listStyle: _propTypes2.default.object,
    /**
     * 每列列表类名
     */
    listClassName: _propTypes2.default.string,
    /**
     * 每列列表项渲染函数
     * @param {Object} data 数据
     * @return {ReactNode} 列表项内容
     */
    itemRender: _propTypes2.default.func,
    /**
     * 异步加载数据函数
     * @param {Object} data 当前点击异步加载的数据
     * @param {Object} source 当前点击数据
     */
    loadData: _propTypes2.default.func,
    searchValue: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    filteredPaths: _propTypes2.default.array,
    filteredListStyle: _propTypes2.default.object,
    resultRender: _propTypes2.default.func
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    dataSource: [],
    defaultValue: null,
    canOnlySelectLeaf: false,
    canOnlyCheckLeaf: false,
    expandTriggerType: 'click',
    multiple: false,
    useVirtual: false,
    checkStrictly: false,
    itemRender: function itemRender(item) {
        return item.label;
    }
}, _temp);
Cascader.displayName = 'Cascader';
exports.default = Cascader;
module.exports = exports['default'];