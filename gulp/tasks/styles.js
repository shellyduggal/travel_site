var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	cssVars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	postCSS = require('gulp-postcss');

gulp.task('styles', function() {
	return gulp.src("./app/assets/styles/styles.css")
		.pipe(postCSS([cssImport, nested, cssVars, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});