module.exports = function(grunt) {

    var browsers = [
        {browserName: "chrome", platform: "linux" },
        { browserName: "chrome", platform: "Windows 7" },
        { browserName: "googlechrome", platform: "Windows XP" },
        { browserName: "internet explorer", platform: "Windows 8", version: "10" },
        { browserName: "firefox", platform: "Windows 8", version: "21" },
        { browserName: "firefox", platform: "Windows 8", version: "20" },
        { browserName: "firefox", platform: "Windows 8", version: "19" },
        { browserName: "firefox", platform: "Windows 8", version: "18" },
        { browserName: "firefox", platform: "Windows 8", version: "17" },
        { browserName: "firefox", platform: "Windows 8", version: "16" },
        { browserName:"iphone", platform: "OS X 10.8", version: "6" },
        { browserName:"iphone", platform: "OS X 10.8", version: "5.1" },
        { browserName:"iphone", platform: "OS X 10.6", version: "5.0" },
        { browserName:"safari", platform: "OS X 10.8", version: "6" },
        { browserName:"safari", platform: "OS X 10.6", version: "5" },
        { browserName:"android", platform: "Linux", version: "4.0" }
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },
        qunit: {
            all: {
                options: {
                    urls: ["http://127.0.0.1:9999/test/index.html"]
                }
            }
        },
        jshint: {
            all: {
                src: ['src/qstart.js']
            }
        },
        watch: {
            all: {
                files: ['src/qstart.js'],
                tasks: ['default']
            }
        },
        'saucelabs-qunit': {
            all: {
                options: {
                    urls: ["http://127.0.0.1:9999/test/index.html"],
                    tunnelTimeout: 5,
                    build: (new Date()).getTime(),
                    concurrency: 3,
                    browsers: browsers,
                    testname: "qstart tests",
                    tags: ["master"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-qunit");
    grunt.loadNpmTasks("grunt-saucelabs");

    grunt.registerTask("dev", ["connect", "watch"]);
    grunt.registerTask("test-sauce", ["connect", "saucelabs-qunit"]);
    grunt.registerTask("test", ["connect", "qunit"]);
    grunt.registerTask('default', ['jshint']);
};
