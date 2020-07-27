const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

exports.default = () =>
  gulp.src("src/assets/**/*").pipe(imagemin()).pipe(gulp.dest("src/assets"));
