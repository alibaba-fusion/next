'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.getValueFromEvent = getValueFromEvent;
exports.getErrorStrs = getErrorStrs;
exports.getParams = getParams;
exports.setIn = setIn;
exports.getIn = getIn;
exports.mapValidateRules = mapValidateRules;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 从组件事件中获取数据
 * @param e Event或者value
 * @returns value
 */
function getValueFromEvent(e) {
    // support custom element
    if (!e || !e.target) {
        return e;
    }
    var target = e.target;


    if (target.type === 'checkbox') {
        return target.checked;
    } else if (target.type === 'radio') {
        //兼容原生radioGroup
        if (target.value) {
            return target.value;
        } else {
            return target.checked;
        }
    }
    return target.value;
}

function getErrorStrs(errors) {
    if (errors) {
        return errors.map(function (e) {
            if ('message' in e) {
                return e.message;
            }
            return e;
        });
    }
    return errors;
}

function getParams(ns, cb) {
    var names = typeof ns === 'string' ? [ns] : ns;
    var callback = cb;
    if (cb === undefined && typeof names === 'function') {
        callback = names;
        names = undefined;
    }
    return {
        names: names,
        callback: callback
    };
}

var setInWithPath = function setInWithPath(state, value, path, pathIndex) {
    var _extends2;

    if (pathIndex >= path.length) {
        return value;
    }

    var first = path[pathIndex];
    var next = setInWithPath(state && state[first], value, path, pathIndex + 1);

    if (!state) {
        var initialized = isNaN(first) ? {} : [];
        initialized[first] = next;
        return initialized;
    }

    if (Array.isArray(state)) {
        var copy = [].concat(state);
        copy[first] = next;
        return copy;
    }

    return (0, _extends4.default)({}, state, (_extends2 = {}, _extends2[first] = next, _extends2));
};

function setIn(state, name, value) {
    return setInWithPath(state, value, name.replace(/\[/, '.').replace(/\]/, '').split('.'), 0);
}

function getIn(state, name) {
    if (!state) {
        return state;
    }

    var path = name.replace(/\[/, '.').replace(/\]/, '').split('.');
    var length = path.length;
    if (!length) {
        return undefined;
    }

    var result = state;
    for (var i = 0; i < length && !!result; ++i) {
        result = result[path[i]];
    }

    return result;
}

function validateMap(rulesMap, rule, defaultTrigger) {
    var nrule = (0, _extends4.default)({}, rule);

    if (!nrule.trigger) {
        nrule.trigger = [defaultTrigger];
    }

    if (typeof nrule.trigger === 'string') {
        nrule.trigger = [nrule.trigger];
    }

    for (var i = 0; i < nrule.trigger.length; i++) {
        var trigger = nrule.trigger[i];

        if (trigger in rulesMap) {
            rulesMap[trigger].push(nrule);
        } else {
            rulesMap[trigger] = [nrule];
        }
    }

    delete nrule.trigger;
}

/**
 * 提取rule里面的trigger并且做映射
 * @param  {Array} rules   规则
 * @param  {String} defaultTrigger 默认触发
 * @return {Object} {onChange:rule1, onBlur: rule2}
 */
function mapValidateRules(rules, defaultTrigger) {
    var rulesMap = {};

    rules.forEach(function (rule) {
        validateMap(rulesMap, rule, defaultTrigger);
    });

    return rulesMap;
}