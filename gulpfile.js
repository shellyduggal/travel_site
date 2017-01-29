var gulp = require('gulp'),
	watch = require('gulp-watch'),
	autoprefixer = require('autoprefixer'),
	cssVars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	browserSync = require('browser-sync').create(),
	postCSS = require('gulp-postcss');


gulp.task('default', function() {
	console.log("My first gulp task");
});


gulp.task('styles', function() {
	//Take the CSS you wrote
	//Alter it to make it browser-friendly
	//Output into a new file
	return gulp.src("./app/assets/styles/styles.css")
		.pipe(postCSS([cssImport, nested, cssVars, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
	
});

gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});
	watch('./app/index.html', function(){
		browserSync.reload();
	});
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});
});

gulp.task('cssInject',['styles'], function() {
	return gulp.src("./app/temp/styles/styles.css")
		.pipe(browserSync.stream());
});