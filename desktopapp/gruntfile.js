module.exports = function(grunt) {
    grunt.initConfig({
        'create-windows-installer': {
            x64: {
                appDirectory:    './MyApp-win32-x64',
                outputDirectory: './dist',
                loadingGif:      './loading.gif',
                authors:         'liam',
                description:     'MyApp',
                exe:             'MyApp.exe',
                version: '2.0.0',
                noMsi:           true
            }
        }
    });
    grunt.loadNpmTasks('grunt-electron-installer');
    grunt.registerTask('default', ['create-windows-installer']);
};