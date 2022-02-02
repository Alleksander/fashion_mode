const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('stylus', () => {
    gulp.src('./src/index.styl')
        .pipe(stylus({
            use: ['nib']
        }))
        .pipe(gulp.dest('./dist/css/'))
})

gulp.watch('watch', () => {

})
