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
        './wwwroot/css/lib/lineicons.css',
        './wwwroot/css/lib/tiny-slider.css',
        './wwwroot/css/base.css',
        './wwwroot/css/kindForge/header.css',
        './wwwroot/css/kindForge/footer.css',
        './wwwroot/css/kindForge/card.css',
        './wwwroot/css/kindForge/slider.css',
        './wwwroot/css/kindForge/banner.css',
        './wwwroot/css/kindForge/contact-form.css',
        './wwwroot/css/kindForge/tab-accordions.css',
        './wwwroot/css/kindForge/umbraco.css',
        './wwwroot/css/kindForge/navbar.css',
        './wwwroot/css/kindForge/team.css',
        './wwwroot/css/kindForge/testimonial.css',
        './wwwroot/css/kindForge/portfolio.css',
        './wwwroot/css/kindForge/service.css',
        './wwwroot/css/kindForge/product.css'
    ])
    .pipe(concat('bundle.min.css'))     // combine to 1 file bundle.min.css
    //TODO: issue lost css
        //    .pipe(cleanCSS({ level: { 1: { specialComments: 0 } } })) // Minify file CSS
    .pipe(gulp.dest('./wwwroot/css/')); // store file min.css
});

gulp.task('default', gulp.series('clean-css', 'minify-css'));


