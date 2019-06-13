import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
/* eslint-disable callback-return */
import { complementError, asyncMap } from './util';
import { getValidationMethod } from './validator';
import defaultMessages from './messages';

function noop() {}

var Schema = function () {
    function Schema(rules) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Schema);

        this._rules = rules;
        this._options = _extends({}, options, {
            messages: _extends({}, defaultMessages, options.messages)
        });
        this.complete = [];
    }

    Schema.prototype.abort = function abort() {
        for (var i = 0; i < this.complete.length; i++) {
            this.complete[i] = noop;
        }
    };

    Schema.prototype.messages = function messages(_messages) {
        this._options.messages = _extends({}, this._options.messages, _messages);
    };

    Schema.prototype.validate = function validate(source, callback) {
        var _this = this;

        if (!this._rules || Object.keys(this._rules).length === 0) {
            if (callback) {
                callback(null);
            }
            return;
        }

        // serialize rules
        var arr = void 0;
        var value = void 0;
        var series = {};
        var names = Object.keys(this._rules);
        names.forEach(function (name) {
            arr = _this._rules[name];
            value = source[name];

            if (!Array.isArray(arr)) {
                arr = [arr];
            }

            arr.forEach(function (rule) {
                rule.validator = getValidationMethod(rule);
                rule.field = name;
                if (!rule.validator) {
                    return;
                }
                series[name] = series[name] || [];
                series[name].push({ rule: rule, value: value, source: source, field: name });
            });
        });

        if (Object.keys(series).length === 0) {
            callback(null);
        }

        // callback function for all rules return
        function complete(results) {
            var i = void 0;
            var field = void 0;
            var errors = [];
            var fields = {};

            function add(e) {
                if (Array.isArray(e)) {
                    errors = errors.concat(e);
                } else {
                    errors.push(e);
                }
            }

            for (i = 0; i < results.length; i++) {
                add(results[i]);
            }
            if (!errors.length) {
                errors = null;
                fields = null;
            } else {
                for (i = 0; i < errors.length; i++) {
                    field = errors[i].field;
                    fields[field] = fields[field] || [];
                    fields[field].push(errors[i]);
                }
            }
            callback(errors, fields);
        }

        this.complete.push(complete);
        var idx = this.complete.length;

        // async validate
        asyncMap(series, this._options, function (data, doIt) {
            var rule = data.rule;
            rule.field = data.field;

            function cb() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                var errors = e;
                if (!Array.isArray(errors)) {
                    errors = [errors];
                }

                // 自定义错误
                if (errors.length && rule.message) {
                    errors = [].concat(rule.message);
                }

                errors = errors.map(complementError(rule));

                doIt(errors);
            }

            var res = rule.validator(rule, data.value, cb, _this._options);
            if (res && res.then) {
                res.then(function () {
                    return cb();
                }, function (e) {
                    return cb(e);
                });
            }
        }, function (results) {
            _this.complete[idx - 1](results);
        });
    };

    return Schema;
}();

export default Schema;