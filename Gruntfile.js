module.exports = (grunt) => {
    // configure main project settings
    grunt.initConfig({
        // basic settings and info about our plugins
        pkg: grunt.file.readJSON('package.json'),
        //name of plugins
        concat: {
            js: {
                src:['js/*.js'],
                dest:'build/scripts.js'
            }
        }
    });
    // load the plugins
    grunt.loadNpmTasks();
    // Do the task
    grunt.registerTask('default',['']);
};