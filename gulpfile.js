const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('gulp-server-livereload');
// const autoprefixer = require('gulp-autoprefixer');

// gulp.task('autoprefixer', () =>
//     gulp.src('./css/style.css')
//         .pipe(autoprefixer({
//             browsers: ['last 40 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('./dist/'))
// );
gulp.task('webserver', function() {
    gulp.src('./')
      .pipe(server({
        livereload: true,
        open: true
      }));
  });  
gulp.task('sass', function () {
    return gulp.src(['./css/**/*.sass','./css/**/*.scss'])
        .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest('./dist/'))    
});
gulp.task('sass:watch', function () {
    gulp.watch(['./css/**/*.sass','./css/**/*.scss'],['sass']);

});  
gulp.task('default', ['sass:watch', 'webserver']);

