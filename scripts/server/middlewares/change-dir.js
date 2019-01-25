const event = require('../event');

module.exports = function() {
    return function(req, res, next) {
        if (req.method === 'GET' && /\/changeDir.json/.test(req.url)) {
            const newDir = req.query.dir;
            if (newDir) {
                event.emit('CHANGE_DIR', newDir);
            }
            res.json({});
        } else {
            return next();
        }
    };
};
