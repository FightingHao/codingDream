// 从package.json分析 node_modules引入
const gulp = require('gulp')
const jsonMinify = require('gulp-jsonminify')
const combiner = require('stream-combiner2')
const sass = require('gulp-sass')
const rename = require('gulp-rename')

const src = './client'  //开发目录
const dist = './dist'  //项目目录

// gulp 思想: 将开发流程分成一个个的任务
gulp.task('json', () => {
  return gulp
    .src(`${src}/**/*.json`)
    .pipe(jsonMinify())
    .pipe(gulp.dest(dist))
})

gulp.task('wxss', () => {
  const combined = combiner.obj([
    gulp.src(`${src}/**/*.{wxss,scss}`),  //{}中不能有空格
    sass().on('error', sass.logError),
    rename((path) => (path.extname = '.wxss')),
    gulp.dest(dist)
  ])
  combined.on('error', () => {

  })
})

gulp.task('wxml', () => {
  return gulp
    .src(`${src}/**/*.wxml`)
    .pipe(gulp.dest(dist))
})

gulp.task('default', ['wxml', 'wxss', 'json'])