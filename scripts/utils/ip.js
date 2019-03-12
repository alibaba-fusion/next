const logger = require('./logger');

module.exports = function(remote) {
    const interfaces = require('os').networkInterfaces();

    if (remote && 'utun1' in interfaces) {
        for (const key in interfaces) {
            if (interfaces.hasOwnProperty(key) && key.match(/utun/)) {
                const ip = getIP(interfaces[key]);
                if (ip) {
                    logger.warn('检测到vpn环境, 优先获取 utun1 ip:', ip);
                    return ip;
                }
            }
        }
    }

    for (const key in interfaces) {
        if (interfaces.hasOwnProperty(key)) {
            const ip = getIP(interfaces[key]);
            if (ip) {
                return ip;
            }
        }
    }
};

function getIP(list) {
    const targetItem = list.find(
        item =>
            item.family === 'IPv4' &&
            item.address !== '127.0.0.1' &&
            !item.internal
    );
    return targetItem ? targetItem.address : null;
}
