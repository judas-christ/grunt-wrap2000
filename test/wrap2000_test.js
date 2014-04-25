'use strict';
var grunt = require('grunt');

function getNormalizedFile(filepath) {
    return grunt.util.normalizelf(grunt.file.read(filepath));
}
exports.wrap2000 = {
    wrap_strings: function(test) {
        test.expect(2);
        
        var actual1 = getNormalizedFile('tmp/wrap_strings/file1');
        var expected1 = getNormalizedFile('test/expected/wrap_strings/file1');
        
        var actual2 = getNormalizedFile('tmp/wrap_strings/file2');
        var expected2 = getNormalizedFile('test/expected/wrap_strings/file2');

        test.equal(actual1, expected1, 'should use string templates as header and footer.');
        test.equal(actual2, expected2, 'should use string templates as header and footer.');

        test.done();
    },
    wrap_files: function(test) {
        test.expect(2);

        var actual1 = getNormalizedFile('tmp/wrap_files/file1');
        var expected1 = getNormalizedFile('test/expected/wrap_files/file1');
        
        var actual2 = getNormalizedFile('tmp/wrap_files/file2');
        var expected2 = getNormalizedFile('test/expected/wrap_files/file2');

        test.equal(actual1, expected1, 'should use files as header and footer.');
        test.equal(actual2, expected2, 'should use files as header and footer.');

        test.done();
    },
    process_function: function(test) {
        test.expect(2);

        var actual1 = getNormalizedFile('tmp/process_function/file1');
        var expected1 = getNormalizedFile('test/expected/process_function/file1');
        
        var actual2 = getNormalizedFile('tmp/process_function/file2');
        var expected2 = getNormalizedFile('test/expected/process_function/file2');

        test.equal(actual1, expected1, 'should have processed file content.');
        test.equal(actual2, expected2, 'should have processed file content.');

        test.done();
    }
};