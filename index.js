'use strict';
var through = require('through2'),
  _ = require('lodash'),
  gutil = require('gulp-util'),
  constants = require('./lib/constants');

module.exports = function(options) {
  var options = _.cloneDeep(_.extend(constants.DEFAULTS, options));
  gutil.log(options);

  var stream = through.obj(function(file, enc, callback) {
    var self = this;
    self.push(file);
    return callback();
  });
  return stream;
};
