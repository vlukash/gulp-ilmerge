'use strict';
var gutil = require('gulp-util');
var childProcess = require('child_process');
var commandBuilder = require('./command-builder');

module.exports.MergeLibraries = function (options, fileList, callback) {
  gutil.log(fileList);

  var command = commandBuilder.createCommand(options, fileList);
  gutil.log(command);

  var cp = childProcess.exec(command, function (err) {
    if (err) {
      gutil.log(err);
      gutil.log(gutil.colors.red('Merge failed!'));
      if (options.errorOnFail) {
        return callback(err);
      }
    } else {
      gutil.log(gutil.colors.cyan('Merge completed!'));
    }
    return callback();
  });

  if (options.stdout && cp) {
    cp.stdout.pipe(process.stdout);
  }

  if (options.stderr && cp) {
    cp.stderr.pipe(process.stderr);
  }
};
