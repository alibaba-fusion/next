var formatRegExp = /%[sdj%]/g;

export function format() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var i = 1;
    var f = args[0];
    var len = args.length;
    if (typeof f === 'function') {
        return f(args.slice(1));
    }
    if (typeof f === 'string') {
        var str = String(f).replace(formatRegExp, function (x) {
            if (x === '%%') {
                return '%';
            }
            if (i >= len) {
                return x;
            }
            switch (x) {
                case '%s':
                    return String(args[i++]);
                case '%d':
                    return Number(args[i++]);
                case '%j':
                    try {
                        return JSON.stringify(args[i++]);
                    } catch (_) {
                        return '[Circular]';
                    }
                default:
                    return x;
            }
        });

        return str;
    }
    return f;
}

function asyncSerialArray(arr, func, callback) {
    var index = 0;
    var arrLength = arr.length;

    function next(errors) {
        if (errors && errors.length) {
            callback(errors);
            return;
        }
        var original = index;
        index = index + 1;
        if (original < arrLength) {
            func(arr[original], next);
        } else {
            return callback([]);
        }
    }

    next([]);
}

/**
 * 平铺规则
 * @param  {object} objArr [description]
 * @return {Array}        [description]
 */
function flattenObjArr(objArr) {
    var ret = [];
    Object.keys(objArr).forEach(function (k) {
        Object.keys(objArr[k]).forEach(function (r) {
            ret.push(objArr[k][r]);
        });
    });
    return ret;
}

/**
 * 异步调用
 * @param  {map}   objArr   校验规则对象列表
 * @param  {object}   option   配置项
 * @param  {Function} func     每个校验规则
 * @param  {Function} callback 全部完成后的执行
 */
export function asyncMap(objArr, option, func, callback) {
    // 发现第一个错误即返回
    if (option.first) {
        var flattenArr = flattenObjArr(objArr);
        return asyncSerialArray(flattenArr, func, callback);
    }

    var objArrKeys = Object.keys(objArr);
    var objArrLength = objArrKeys.length;
    var total = 0;
    var results = [];
    var next = function next(errors) {
        results.push(errors);
        total++;
        if (total === objArrLength) {
            return callback(results);
        }
    };
    objArrKeys.forEach(function (key) {
        var arr = objArr[key];
        asyncSerialArray(arr, func, next);
    });
}

export function complementError(rule) {
    return function (oe) {
        if (oe && oe.message) {
            oe.field = rule.field;
            return oe;
        }
        return {
            message: oe,
            field: rule.field
        };
    };
}