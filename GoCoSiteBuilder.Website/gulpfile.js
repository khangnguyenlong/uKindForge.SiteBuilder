import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import { deleteAsync } from 'del';

// delete existed file
gulp.task('clean-css', () => {
    return deleteAsync(['./wwwroot/css/bundle.min.css']);
});

gulp.task('minify-css', () => {
    return gulp.src([
        './wwwroot/css/lib/bootstrap/bootstrap.min.css',
        './wwwroot/css/lib/bootstrap/bootstrap-grid.min.css',
        './wwwroot/css/lib/bootstrap/bootstrap-reboot.min.css',
        './wwwroot/css/base.css',
        './wwwroot/css/lib/lineicons.css',
        './wwwroot/css/goco/header.css',
        './wwwroot/css/goco/footer.css',
        './wwwroot/css/goco/card.css',
        './wwwroot/css/goco/slider.css',
        './wwwroot/css/goco/banner.css',

        './wwwroot/css/goco/umbraco.css',
        './wwwroot/css/goco/navbar.css',
    ])
    .pipe(concat('bundle.min.css'))     // combine to 1 file bundle.min.css
    //TODO: issue lost css
        //    .pipe(cleanCSS({ level: { 1: { specialComments: 0 } } })) // Minify file CSS
    .pipe(gulp.dest('./wwwroot/css/')); // store file min.css
});

gulp.task('default', gulp.series('clean-css', 'minify-css'));


