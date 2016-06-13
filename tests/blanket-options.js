/* globals blanket, module */
/* jscs:disable */
var options = {
  modulePrefix: 'test-app',
  filter: '//.*test-app/.*/',
  antifilter: '//.*(tests|template|initializers|environment|mirage).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    lcovOptions: {
      outputFile: 'lcov.info'
    },
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
