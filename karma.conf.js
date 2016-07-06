// jscs:disable
// Karma configuration
// Generated on Sat Jan 16 2016 13:49:11 GMT+0100 (CET)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'src/*.module.ts',
			'src/**/*.ts',
			'src/**/*.html',
			'test/**/*.js'
		],


		// list of files to exclude
		exclude: [
			'src/main.ts'
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'src/**/*.ts': ['typescript', 'babel', 'coverage'],
			'test/**/*.js': ['babel'],
			'src/**/*.html': ['ng-html2js']
		},

		typescriptPreprocessor: {
			// options passed to the typescript compiler
			options: {
				sourceMap: false, // (optional) Generates corresponding .map file.
				target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
				module: 'amd', // (optional) Specify module code generation: 'commonjs' or 'amd'
				noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
				noResolve: true, // (optional) Skip resolution and preprocessing.
				removeComments: true, // (optional) Do not emit comments to output.
				concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
			},
			// transforming the filenames
			transformPath: function(path) {
				return path.replace(/\.ts$/, '.js');
			}
		},

		babelPreprocessor: {
			options       : {
				presets  : ['es2015'],
				sourceMap: 'inline'
			},
			filename      : function(file) {
				return file.originalPath.replace(/\.js$/, '.js');
			},
			sourceFileName: function(file) {
				return file.originalPath;
			}
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage'],

		coverageReporter: {
			type  : 'lcovonly',
			dir   : 'coverage/',
			subdir: '.'
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO ||
		// config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	})
};
