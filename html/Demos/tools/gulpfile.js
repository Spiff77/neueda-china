/// <binding BeforeBuild='clean' AfterBuild='min' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

// Tell Node what modules we're going to use.
var gulp = require("gulp"),                  // Gulp itself.
    rimraf = require("rimraf"),              // For deleting folders recursively.
    concat = require("gulp-concat"),         // For file concatenation.
    cssmin = require("gulp-cssmin"),         // For CSS minification.
    uglify = require("gulp-uglify"),         // For JS uglification.
    project = require("./project.json");     // For the "webroot" variable.

// Define a helper object, to point to various paths in our project.
var paths = {
    webroot: "./" + project.webroot + "/"
};
paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";


// Tasks to clean folders and files.
gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);


// Tasks to minify CSS files and uglify JS files.
gulp.task("min:js", function () {
    gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('default', ['min:css']);