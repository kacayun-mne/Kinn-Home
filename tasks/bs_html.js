const bs = require('browser-sync');

module.exports = function bs_html() {
	bs.init({
		server: {
			baseDir: 'build/',
			host: '127.0.0.1',
			directory: true,
		},
		browser: 'chrome',
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}
