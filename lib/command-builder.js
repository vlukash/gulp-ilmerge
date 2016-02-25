'use strict';
var gutil = require('gulp-util');
var path = require('path');

module.exports.getArgs = function(options) {
  var args = [];
  args.push('/out:"' + options.outputFile + '"');
  args.push('/targetplatform:"' + options.targetPlatform + '"');
  args.push('/target:' + options.target);

  if (options.libPath) {
    args.push('/lib:"' + options.libPath + '"');
  }

  return args.join(' ');
};

module.exports.getFilesListParam = function(options, files) {
  return '"' + files.join('" "') + '"';
}

module.exports.createCommand = function(options, files) {

  var args = this.getArgs(options);
  var executable = '"' + path.normalize(options.ilmergePath) + '"';
  var filesList = this.getFilesListParam(options, files);

  return executable + " " + args + " " + filesList;
};
