'use strict';
var through = require('through2');

module.exports = function(options) {
  var stream = through.obj(function(file, enc, callback) {
    var self = this;
    self.push(file);
    return callback();
  });
  return stream;
};
