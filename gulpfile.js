(function (r) {
    "use strict";
    var scss = r("gulp-sass");
    var gulp = r("gulp");
    gulp.task("sass", function () {
        gulp.src(
            "app/scss/**/*scss"
        ).pipe(scss(
        )).pipe(gulp.dest("dist/css"));
    });
}(require));
