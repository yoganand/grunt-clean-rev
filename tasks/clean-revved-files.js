/*
 * loadscript
 * https://github.com/yoganand/gplugin
 *
 * Copyright (c) 2015 Yoganand
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var fs = require('fs');
var rimraf = require('rimraf');
var eachAsync = require('each-async');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('cleanRevvedFiles', 'Removes previously revved files ', function() {

    var target = this.target;
    var options = this.options({
      algorithm: 'md5',
      length: 8
    });
    var pattern = /(\.[0-9a-zA-Z]{8}\.(js|css))$/gm;
	var mappattern = /(\.(map))$/gm;
	var log = grunt.log,
		verbose = grunt.verbose,
		fail = grunt.fail;
	log.ok("Running clean-revved-files");
    eachAsync(this.files, function (el, i, next) {

      el.src.forEach(function (file) {
		log.ok(file);
        if (grunt.file.isDir(file)) {
          return;
        }

        if (file.search(pattern) !== -1){
			log.ok("Deleting file pattern 1" + file);
          rimraf.sync(file);
        }
		if (file.search(mappattern) !== -1){
			log.ok("Deleting file " + file);
          rimraf.sync(file);
        }

      });

      next();
    }, this.async());

  });
};
