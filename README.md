# loadscript

> Cleans old revved files

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-clean-rev --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-clean-rev');
```

## The "cleanRevvedFiles" task

### Overview
In your project's Gruntfile, add a section named `loadscript` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cleanRevvedFiles: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            source: {
                files :[{
                    src: [
                        'media/js/global_search.js',
                        'media/js/**/*.js',
                        'media/css/*.css',
                        'media/css/**/*.css',
                        // 'media/img/*.{jpg,jpeg,gif,png,webp}'
                    ],
                }]
            }
        },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
