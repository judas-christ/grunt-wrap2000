# grunt-wrap2000

> Wraps source files with specified header and footer, optionally loaded from files.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-wrap2000 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wrap2000');
```

## Wrap task
_Run this task with the grunt `wrap2000` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide. Please note that each source file should only map its own destination file.
### Options

#### separator
Type: `String`
Default: `grunt.util.linefeed`

Wrapped files will be joined on this string.

#### header
Type: `String`
Default: empty string

The string or path to the file to be prepended to the beginning of each output. It is processed using [grunt.template.process][], using the default options.

_(Default processing options are explained in the [grunt.template.process][] documentation)_

#### footer
Type: `String`
Default: empty string

The string or path to the file to be appended to the end of the concatenated output. It is processed using [grunt.template.process][], using the default options.

_(Default processing options are explained in the [grunt.template.process][] documentation)_

#### process
Type: `Boolean` `Object` `Function`
Default: `false`

Process source files as [templates][] before concatenating.

* `false` - No processing will occur.
* `true` - Process source files using [grunt.template.process][] defaults.
* `options` object - Process source files using [grunt.template.process][], using the specified options.
* `function(src, filepath)` - Process source files using the given function, called once for each file. The returned value will be used as source code.

_(Default processing options are explained in the [grunt.template.process][] documentation)_

  [templates]: https://github.com/gruntjs/grunt/wiki/grunt.template
  [grunt.template.process]: https://github.com/gruntjs/grunt/wiki/grunt.template#wiki-grunt-template-process

### Usage Examples

#### Wrapping with strings

In this example, running `grunt wrap2000` will wrap the source files in the specified header and footer strings, writing each wrapped file to `dist/`.

```js
// Project configuration.
grunt.initConfig({
  wrap2000: {
    options: {
      header: '<!-- Version <%= pkg.version %> -->',
      footer: '<!-- Generated on <%= new Date().toUTCString() %> -->'
    },
    dist: {
      files: [{
        src: 'src/index.html',
        dest: 'dist/index.html'
      }, {
        src: 'src/page.html',
        dest: 'dist/page.html'
    }
  }
});
```

## Release History

 * 2014-04-25   v0.1.0   Work in progress, not yet officially released.