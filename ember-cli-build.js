/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var postCssImport = require('postcss-import');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {

    postcssOptions: {
      plugins: [
        {
          module: postCssImport
        }
      ]
    }


  });

  return app.toTree();
};
