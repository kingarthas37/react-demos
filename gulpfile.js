var gulp = require('gulp');
var react = require('gulp-react');
 
console.info(333);

gulp.task('default', function () {
    return gulp.src('demo02/test.js')
        .pipe(react())
        .pipe(gulp.dest('dist'));
});