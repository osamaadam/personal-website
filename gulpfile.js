const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

exports.default = async () => {
  const assets = gulp
    .src("src/assets/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("src/assets"));
  const blog = gulp
    .src("src/blog/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("src/blog"));

  return Promise.all([assets, blog]);
};
