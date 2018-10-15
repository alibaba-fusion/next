const { parseMD } = require('../../../utils');

module.exports = function(content) {
  const result = parseMD(content, this.resourcePath);

  this.callback(null, result.css);
};
