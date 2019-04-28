'use strict';

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************
const gulp = require('gulp'),
    tslint = require('gulp-tslint'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    ts = require('gulp-typescript'),
    webserver = require('gulp-webserver'),
    rjs = require('gulp-requirejs'),
    browserify = require('browserify'),
    webpack = require('gulp-webpack');


//******************************************************************************
//* LINT
//******************************************************************************
gulp.task('lint', function () {
    const input = [
        'src/**/**.ts'
    ];

    return gulp.src(input)
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});

//******************************************************************************
//* BUILD INTERNAL
//******************************************************************************
gulp.task('build-internal', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        'out': 'bundle.js'
    });

    const input = './src/module_definitions/design_time/internal/internal/*.ts';
    const output = './src/module_definitions/run_time/internal/internal/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

gulp.task('build-namespaces', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        'out': 'bundle.js'
    });
    const input = './src/module_definitions/design_time/internal/namespaces/*.ts';
    const output = './src/module_definitions/run_time/internal/namespaces/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

//******************************************************************************
//* BUILD EXTERNAL (ES6)
//******************************************************************************
gulp.task('build-es6-to-amd', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        module: 'amd'
    });

    const input = './src/module_definitions/design_time/external/es6/*.ts';
    const output = './src/module_definitions/run_time/external/amd/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

gulp.task('build-es6-to-commonjs', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        module: 'commonjs'
    });

    const input = './src/module_definitions/design_time/external/es6/*.ts';
    const output = './src/module_definitions/run_time/external/commonjs/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

gulp.task('build-es6-to-umd', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        module: 'umd'
    });

    const input = './src/module_definitions/design_time/external/es6/*.ts';
    const output = './src/module_definitions/run_time/external/umd/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

gulp.task('build-es6-to-systemjs', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        module: 'system'
    });

    const input = './src/module_definitions/design_time/external/es6/*.ts';
    const output = './src/module_definitions/run_time/external/systemjs/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

gulp.task('build-es6-to-es6', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        target: 'es6',
        module: 'es6'
    });

    const input = './src/module_definitions/design_time/external/es6/*.ts';
    const output = './src/module_definitions/run_time/external/es6/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

//******************************************************************************
//* BUILD EXTERNAL (LEGACY)
//******************************************************************************
gulp.task('build-external-to-amd', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        module: 'amd'
    });

    const input = './src/module_definitions/design_time/external/external/*.ts';
    const output = './src/module_definitions/run_time/external/amd/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

gulp.task('build-external-to-commonjs', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        module: 'commonjs'
    });

    const input = './src/module_definitions/design_time/external/external/*.ts';
    const output = './src/module_definitions/run_time/external/commonjs/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

gulp.task('build-external-to-umd', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        module: 'umd'
    });

    const input = './src/module_definitions/design_time/external/external/*.ts';
    const output = './src/module_definitions/run_time/external/umd/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

gulp.task('build-external-to-systemjs', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        module: 'system'
    });

    const input = './src/module_definitions/design_time/external/external/*.ts';
    const output = './src/module_definitions/run_time/external/systemjs/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

gulp.task('build-external-to-es6', function () {
    const tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript'),
        target: 'es6',
        module: 'es6'
    });

    const input = './src/module_definitions/design_time/external/es6/*.ts';
    const output = './src/module_definitions/run_time/external/es6/';

    return gulp.src(input)
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});

//******************************************************************************
//* BUNDLE
//******************************************************************************
gulp.task('bundle-commonjs-with-browserify', function () {
    const mainJsFilePath = 'src/module_definitions/run_time/external/commonjs/ndrscr.js';
    const outputFolder = 'src/module_loaders/browserify/';
    const outputFileName = 'bundle.js';

    const bundler = browserify({
        entries: mainJsFilePath,
        standalone: 'ndrscr'
    });

    return bundler.bundle()
        .pipe(source(outputFileName))
        .pipe(buffer())
        .pipe(gulp.dest(outputFolder));
});

gulp.task('bundle-amd-with-requirejs', function () {
    rjs({
        baseUrl: './src/module_definitions/run_time/external/amd',
        waitSeconds: 15,
        out: 'bundle.js',
        include: ['../../../../module_loaders/requirejs/app.js'],
        paths: {
            'jquery': '../../../../../node_modules/jquery/dist/jquery.min'
        }
    }).pipe(gulp.dest('./src/module_loaders/requirejs/'));
});

gulp.task('bundle-es6-with-webpack', function () {
    const webpackConfig = require('./src/module_loaders/webpack/webpack.config.js');
    return gulp.src('./src/module_definitions/run_time/external/es6/ndrscr.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./src/module_loaders/webpack/'));
});

//******************************************************************************
//* SERVE
//******************************************************************************
gulp.task('serve', function () {
    gulp.src('./')
        .pipe(webserver({
            directoryListing: true,
            open: 'http://localhost:8000/browser/examples.html',
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
