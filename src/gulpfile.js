const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const rename = require('gulp-rename')
const pug = require('gulp-pug')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const del = require('del')

//Css converting
gulp.task('css', (done) => {
    gulp.src('../public/src/sass/*.sass')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../public/src/css/'))
    done()
})

//Html converter: general
gulp.task('index', (done) => {
    gulp.src('../public/index.pug')
        .pipe(pug({
            doctype: 'html',
            pretty: true
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('../public/'))
    done()
})

//Html converter: page
gulp.task('page', (done) => {
    gulp.src('../public/src/pug/pages/*.pug')
        .pipe(pug({
            doctype: 'html',
            pretty: true
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('../public/src/pug/pages/'))
    done()
})

//Html converter: component
gulp.task('component', (done) => {
    gulp.src('../public/src/pug/components/*.pug')
        .pipe(pug({
            doctype: 'html',
            pretty: true
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('../public/src/pug/components/'))
    done()
})

//To del empty vars
gulp.task('novars', (done) => {
    return del('../public/src/css/var.min.css', {force: true})
})

//To sync
gulp.task('browse', (done) => {
    browserSync.init({
        server: {
            baseDir: '../public'
        },
        port: 3000,
        open: true
    })
    gulp.watch('../public/**/*.pug', gulp.series('index'))
        .on('change', reload)
    gulp.watch('../public/**/*.sass', gulp.series('css', 'index'))
        .on('change', reload)
    gulp.watch('../public/**/*.js', gulp.series('index'))
        .on('change', reload)
    done()
})

//first-start
gulp.task('sync', gulp.series('css', 'index', 'browse'))