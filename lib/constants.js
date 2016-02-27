'use strict';
var os = require('os');
var path = require('path');

module.exports = {
  PLUGIN_NAME: 'gulp-ilmerge',

  DEFAULTS: {
    outputFile: "merged.dll",
    targetPlatform: getDefaultTargetPlatform(),
    target: "dll",
    ilmergePath: locateILMerge(),
    errorOnFail: false,
    stdout: false,
    stderr: true
  }
};

function locateILMerge() {
  return path.join(getProgramFilesPath(), 'Microsoft', 'ILMerge', 'ILMerge.exe');
};

function getDefaultTargetPlatform() {
  return "v4," + path.join("C:", "Windows", "Microsoft.NET", "Framework", "v4.0.30319");
}

function getProgramFilesPath() {
  if (process.platform.match(/^win/)) {
    return process.env.ProgramFiles;
  }
  return "/";
};


