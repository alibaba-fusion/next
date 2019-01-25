/* eslint-disable callback-return */
import {complementError, asyncMap} from './util';
import {getValidationMethod} from './validator';
import defaultMessages from './messages';

function noop() {
}

class Schema {
    constructor(rules, options = {}) {
        this._rules = rules;
        this._options = {
            ...options,
            messages: {
                ...defaultMessages,
                ...options.messages
            }
        };
        this.complete = [];
    }

    abort() {
        for (let i = 0; i < this.complete.length; i++) {
            this.complete[i] = noop;
        }
    }

    messages(messages) {
        this._options.messages = Object.assign({}, this._options.messages, messages);
    }

    validate(source, callback) {

        if (!this._rules || Object.keys(this._rules).length === 0) {
            if (callback) {
                callback(null);
            }
            return;
        }

        // serialize rules
        let arr;
        let value;
        const series = {};
        const names = Object.keys(this._rules);
        names.forEach((name) => {
            arr = this._rules[name];
            value = source[name];

            if (!Array.isArray(arr)) {
                arr = [arr];
            }

            arr.forEach((rule) => {
                rule.validator = getValidationMethod(rule);
                rule.field = name;
                if (!rule.validator) {
                    return;
                }
                series[name] = series[name] || [];
                series[name].push({rule, value, source, field: name});
            });
        });

        if (Object.keys(series).length === 0) {
            callback(null);
        }

        // callback function for all rules return
        function complete(results) {
            let i;
            let field;
            let errors = [];
            let fields = {};

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
        const idx = this.complete.length;

        // async validate
        asyncMap(series, this._options, (data, doIt) => {
            const rule = data.rule;
            rule.field = data.field;

            function cb(e = []) {
                let errors = e;
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

            const res = rule.validator(rule, data.value, cb, this._options);
            if (res && res.then) {
                res.then(() => cb(), e => cb(e));
            }
        }, (results) => {
            this.complete[idx - 1](results);
        });
    }
}

export default Schema;
