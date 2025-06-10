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
        './wwwroot/css/KindForge/header.css',
        './wwwroot/css/KindForge/footer.css',
        './wwwroot/css/KindForge/card.css',
        './wwwroot/css/KindForge/slider.css',
        './wwwroot/css/KindForge/banner.css',
        './wwwroot/css/KindForge/contact-form.css',
        './wwwroot/css/KindForge/tab-accordions.css',
        './wwwroot/css/KindForge/umbraco.css',
        './wwwroot/css/KindForge/navbar.css',
        './wwwroot/css/KindForge/team.css',
        './wwwroot/css/KindForge/testimonial.css',
        './wwwroot/css/KindForge/portfolio.css',
        './wwwroot/css/KindForge/service.css',
        './wwwroot/css/KindForge/product.css'
    ])
    .pipe(concat('bundle.min.css'))     // combine to 1 file bundle.min.css
    //TODO: issue lost css
        //    .pipe(cleanCSS({ level: { 1: { specialComments: 0 } } })) // Minify file CSS
    .pipe(gulp.dest('./wwwroot/css/')); // store file min.css
});

gulp.task('default', gulp.series('clean-css', 'minify-css'));


