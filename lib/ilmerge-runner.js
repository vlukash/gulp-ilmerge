'use strict';
var gutil = require('gulp-util');
var childProcess = require('child_process');

module.exports.MergeLibraries = function (options, fileList, callback) {
  gutil.log(fileList);

  var command = '"' + options.ilmergePath + '"';
  gutil.log(command);

  var execOptions = "";

  var cp = childProcess.exec(command, execOptions, function (err) {
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
