"use strict";

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************
const gulp = require("gulp"),
    tslint = require("gulp-tslint"),
    ts = require('gulp-typescript'),
    webserver = require('gulp-webserver');

//******************************************************************************
//* CONFIG
//******************************************************************************
const settings = {
    projectName: "tsbook1"
};

//******************************************************************************
//* LINT
//******************************************************************************
gulp.task("lint", function () {

    const input = [
        "src/**/**.ts"
    ];

    return gulp.src(input)
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});

//******************************************************************************
//* BUILD
//******************************************************************************
gulp.task('build', ['lint'], function () {

    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript')
    });

    return gulp.src("src/**/**.ts")
        .pipe(tsProject())
        .js.pipe(gulp.dest("src/"));
});

//******************************************************************************
//* SERVE
//******************************************************************************
gulp.task('serve', ['build'], function () {
    gulp.src('./')
        .pipe(webserver({
            directoryListing: true,
            open: "http://localhost:8000/browser/index.html",
            livereload: {
                enable: true,
                filter: function (fileName) {
                    // exclude all source maps from livereload
                    if (fileName.match(/.map$/)) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        }));
});

//******************************************************************************
//* DEFAULT
//******************************************************************************
gulp.task('default', ['build']);