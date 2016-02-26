'use strict';
var gutil = require('gulp-util'),
    chai = require('chai'),
    expect = chai.expect,
    constants = require('../lib/constants');
require('mocha');

var commandBuilder = require('../lib/command-builder');

describe('# command-builder', function () {

  describe('# getArgs(options)', function () {
    it('should build arguments with default options', function () {
      var result = commandBuilder.getArgs(constants.DEFAULTS);
      expect(result).to.equal('/out:"merged.dll" /targetplatform:"v4,C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319" /target:dll');
    });
  });

  describe('# getFilesListParam(files)', function () {
    it('should build files list from array', function () {
      var filrsList = ["primary.dll", "secondary1.dll", "secondary2.dll"]

      var result = commandBuilder.getFilesListParam(filrsList);
      expect(result).to.equal('"primary.dll" "secondary1.dll" "secondary2.dll"');
    });
  });
});
