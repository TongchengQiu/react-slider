var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	react = require('gulp-react');

gulp.task('css', function () {
	return gulp.src('src/css/*.css')
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(concat('Slider.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
		.pipe(notify({
			message: 'Styles task complete'
		}));
});
gulp.task('js', function () {
	return gulp.src('src/js/*.jsx')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(react())
		.pipe(concat('Slider.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(notify({
			message: 'Scripts task complete'
		}));
});

gulp.task('default', [ 'js'], function () {
	console.log('Release completed!');
	gulp.start('watch');
});

gulp.task('watch', function () {
	// 看守所有.scss档
	gulp.watch('src/css/*.css', ['css']);
	// 看守所有.js档
	gulp.watch('src/js/*.jsx', ['js']);
});
