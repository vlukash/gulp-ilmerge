'use strict';
var through = require('through2'),
  _ = require('lodash'),
  gutil = require('gulp-util'),
  path = require('path'),
  constants = require('./lib/constants'),
  ilmerge = require('./lib/ilmerge-runner');

var fileList = [];

module.exports = function(options) {
  var options = _.cloneDeep(_.extend(constants.DEFAULTS, options));
  gutil.log(options);

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError(constants.PLUGIN_NAME, 'Streams not supported'));
      return;
    }

    fileList.push(path.relative(process.cwd(), file.path));

    this.push(file);
    cb();

  },
  function(cb) {
    gutil.log(fileList);
    cb();
  });
};
