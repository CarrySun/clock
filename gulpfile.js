var gulp = require("gulp"); //表示引进gulp模块
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

gulp.task("css:compile", function() {
  //sass()方法用于转换sass到css
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("dist/css"));
});
// Minify CSS
gulp.task("css:minify", ["css:compile"], function() {
  return gulp
    .src(["dist/css/*.css", "!dist/css/*.min.css"])
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("dist/css"));
});
gulp.task("js", function() {
  return gulp
    .src(["app/js/*.js","!dist/css/*.min.css"])
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("dist/js"));
});
// CSS
gulp.task("css", ["css:compile", "css:minify"]);

gulp.task("watch", function() {
  gulp.watch("app/scss/**/*.scss", ["css"]);
  gulp.watch("app/js/**/*.js", ["js"]);
});
gulp.task("default", ["css", "js", "watch"]);
