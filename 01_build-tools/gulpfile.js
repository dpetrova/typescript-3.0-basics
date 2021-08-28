var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json'); //rely on tsconfig.json file
var sourcemaps = require('gulp-sourcemaps');

/* execute the default task once automatically */
// gulp.task("default", function () {
//     var tsResult = gulp.src("src/**/*.ts").pipe(ts());
//     return tsResult.js.pipe(gulp.dest("build"));
// });

/* a task in Gulp to build incrementally a TypeScript file that changes instead of building all of them */
gulp.task('scripts', function() {
 return gulp.src('src/**/*.ts')
 .pipe(tsProject())
 .pipe(gulp.dest('build'));
});
gulp.task('watch', ['scripts'], function() {
 gulp.watch('src/**/*.ts', ['scripts']);
});
/* create the source map in a file with the same name (for debugging purposes) */
gulp.task('scriptswithsourcemap', function () {
 return gulp.src('src/**/*.ts')
 .pipe(sourcemaps.init())
 .pipe(tsProject())
 .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '.'}))
 .pipe(gulp.dest('build'));
});


