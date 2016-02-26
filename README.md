# gulp-ilmerge
[![Travis](https://img.shields.io/travis/vlukash/gulp-ilmerge.svg?style=flat-square)](https://travis-ci.org/vlukash/gulp-ilmerge)
[![Coveralls](https://img.shields.io/coveralls/vlukash/gulp-ilmerge.svg?style=flat-square)](https://coveralls.io/github/vlukash/gulp-ilmerge)

ILMerge plugin for [gulp](https://github.com/wearefractal/gulp).

## Installation

Install `gulp-ilmerge` package with NPM as a development dependency:

```shell
npm install --save-dev gulp-ilmerge
```

Make sure that you have installed [ILMerge](http://research.microsoft.com/en-us/people/mbarnett/ilmerge.aspx) locally on your development environment.
You can use [ILMerge Installer](https://www.microsoft.com/en-us/download/details.aspx?id=17630) or [NUGet package](https://www.nuget.org/packages/ilmerge) to load `ILMerge.exe`

### Usage

```javascript
var gulp = require("gulp");
var ilmerge = require("gulp-ilmerge");

gulp.task("merge", function () {
  return gulp.src(["./bin/Primary.dll",
      "./bin/Secondary_1.dll",
      "./bin/Secondary_n.dll"])
    .pipe(merge({
        outputFile: "output/MergedAssembly.dll"
      }))
});
```

This will merge assemblies into one assembly. By default result assembly will be named `merged.dll` and stored in the project's root folder.
You can override path/name for result assembly by using `outputFile` parameter.
