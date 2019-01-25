const event = require('../event');

module.exports = function() {
    return function(req, res, next) {
        if (req.method === 'GET' && /\/changeLang.json/.test(req.url)) {
            const newLang = req.query.lang;
            if (newLang) {
                event.emit('CHANGE_LANG', newLang);
            }
            res.json({});
        } else {
            next();
        }
    };
};
