'use strict';

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************
const gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    tsify = require('tsify'),
    sourcemaps = require('gulp-sourcemaps'),
    tslint = require('gulp-tslint'),
    uglify = require('gulp-uglify'),
    typedoc = require('gulp-typedoc'),
    runSequence = require('run-sequence'),
    webserver = require('gulp-webserver'),
    header = require('gulp-header'),
    rimraf = require('rimraf');

//******************************************************************************
//* CONFIG
//******************************************************************************
const settings = {
    projectName: 'tsbook1'
};

//******************************************************************************
//* LINT
//******************************************************************************
gulp.task('lint', function () {
    const input = ['src/**/**.ts'];
    return gulp.src(input)
        .pipe(tslint({ formatter: 'verbose' }))
        .pipe(tslint.report());
});

//******************************************************************************
//* BUILD - BUNDLE - COMPRESS - ADD LICENSE
//******************************************************************************
gulp.task('bundle', function () {
    const mainTsFilePath = 'src/main.ts';
    const outputFolder = 'bundle/src/';
    const outputFileName = settings.projectName + '.min.js';
    const pkg = require('./package.json');

    const banner = [
        '/**',
        ' * <%= pkg.name %> v.<%= pkg.version %> - <%= pkg.description %>',
        ' * Copyright (c) 2017 <%= pkg.author %>',
        ' * <%= pkg.license %>',
        ' */', ''
    ].join('\n');

    const bundler = browserify({
        debug: true,
        standalone: settings.projectName
    });

    // TS compiler options are in tsconfig.json file
    return bundler.add(mainTsFilePath)
        .plugin(tsify)
        .bundle()
        .pipe(source(outputFileName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputFolder));
});

//******************************************************************************
//* TEST
//******************************************************************************
// We will leave testing for now as we will learn about testing in
// the upcoming chapters of this book.

//******************************************************************************
//* DIST
//******************************************************************************
gulp.task('dist', function (done) {
    gulp.src('bundle/src/' + settings.projectName + '.min.js').pipe(gulp.dest('dist/src/'));
    gulp.src('bundle/src/' + settings.projectName + '.min.js.map').pipe(gulp.dest('dist/src/'));
    done();
});

//******************************************************************************
//* DOCUMENT
//******************************************************************************
gulp.task('document', function () {
    const input = 'src/main.ts';
    const output = 'docs';

    return gulp.src(input)
        .pipe(typedoc({
            target: 'ES5',
            module: 'commonjs',
            includeDeclarations: false,
            out: output,
            name: settings.projectName,
            version: true
        }));
});

//******************************************************************************
//* CLEAN
//******************************************************************************
gulp.task('clean', function (done) {
    rimraf('bundle', done);
});

//******************************************************************************
//* SERVE
//******************************************************************************
gulp.task('serve', function () {
    gulp.src('./')
        .pipe(webserver({
            directoryListing: true,
            open: 'http://localhost:8000/browser/index.html',
            livereload: {
                enable: true,
                filter: function (fileName) {
                    // exclude all source maps from livereload
                    return (fileName.match(/.map$/));
                }
            }
        }));
});

//******************************************************************************
//* DEFAULT
//******************************************************************************
gulp.task('default', function (cb) {
    runSequence(
        ['lint', 'bundle'],
        'dist',
        'clean',
        cb);
});
