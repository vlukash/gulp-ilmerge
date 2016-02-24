'use strict';
var os = require('os');
var path = require('path');

module.exports = {
  PLUGIN_NAME: 'gulp-ilmerge',

  DEFAULTS: {
    ilmergePath: locateILMerge(),
    errorOnFail: true,
    stdout: false,
    stderr: false
  }
};

function locateILMerge() {
  return path.join(getProgramFilesPath(), 'Microsoft', 'ILMerge', 'ILMerge.exe');
};

function getProgramFilesPath() {
  if (process.platform.match(/^win/)) {
    return process.env.ProgramFiles;
  }
  return "/";
};


