const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.style = tasks.style;
exports.html = tasks.html;
exports.watch = tasks.watch;
exports.bs_html = tasks.bs_html;

exports.default = gulp.parallel(
	exports.style,
	exports.html,
	exports.watch,
	exports.bs_html,
)