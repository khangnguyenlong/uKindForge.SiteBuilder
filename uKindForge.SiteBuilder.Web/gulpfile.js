import gulp from 'gulp';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';

export const bundleCss = () => {
    return gulp.src([
        './wwwroot/css/lib/bootstrap/bootstrap.min.css',
        './wwwroot/css/lib/bootstrap/bootstrap-grid.min.css',
        './wwwroot/css/lib/bootstrap/bootstrap-reboot.min.css',
        './wwwroot/css/lib/lineicons.css',
        './wwwroot/css/lib/tiny-slider.css',
        './wwwroot/css/kindForge/main.min.css'
    ])
        .pipe(concat('bundle.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./wwwroot/css/'));
};

export default bundleCss;
