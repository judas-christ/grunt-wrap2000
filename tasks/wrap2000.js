/*
 * grunt-wrap2000
 * https://github.com/judas-christ/grunt-wrap2000
 *
 * Copyright (c) 2014 Daniel Hägglund
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('wrap2000', 'Wraps source files with specified header and footer', function(target) {
        
        var options = this.options({
            separator: grunt.util.linefeed,
            header: null,
            footer: null,
            process: false
        });
        
        var header = '';
        var footer = '';

        // Get header and footer content
        if (typeof options.header === 'string') {
            // Check if header is a file that exists
            if (grunt.file.exists(options.header)) {
                header = grunt.file.read(options.header);
            } else {
                // If file does not exist, use header as a string
                header = options.header;
            }
        }
        if (typeof options.footer === 'string') {
            // Check if footer is a file that exists
            if (grunt.file.exists(options.footer)) {
                footer = grunt.file.read(options.footer);
            } else {
                // If file does not exist, use footer as a string
                footer = options.footer;
            }
        }

        // Process header and footer
        header = grunt.template.process(header, options.process);
        footer = grunt.template.process(footer, options.process);

        this.files.forEach(function(f) {

            f.src.filter(function(filepath) {
                
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }

            }).forEach(function(filepath) {
                
                var src = grunt.file.read(filepath);
                
                // Process files as templates if requested.
                if (typeof options.process === 'function') {
                    src = options.process(src, filepath);
                } else if (options.process) {
                    src = grunt.template.process(src, options.process);
                }

                // Wrap source
                var dest = (!header ? '' : header + options.separator) + src + (!footer ? '' : options.separator + footer);

                grunt.file.write(f.dest, dest);
                
                grunt.log.writeln('File "' + f.dest + '" created.');
            });
        });
    });
};