'use strict';
var gutil = require('gulp-util'),
    chai = require('chai'),
    expect = chai.expect,
    constants = require('../lib/constants');
require('mocha');

var commandBuilder = require('../lib/command-builder');

describe('# command-builder', function () {
  describe('# createCommand(options, files)', function () {
    it('should build ILMerge command with default options', function () {
      var filrsList = ["primary.dll", "secondary1.dll", "secondary2.dll"]

      var result = commandBuilder.createCommand(constants.DEFAULTS, filrsList);
      expect(result).to.equal('"C:\\Program Files\\Microsoft\\ILMerge\\ILMerge.exe" ' +
          '/out:"merged.dll" /targetplatform:"v4,C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319" ' +
          '/target:dll "primary.dll" "secondary1.dll" "secondary2.dll"');
    });
  });
});
