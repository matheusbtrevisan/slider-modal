module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['assets/js/jquery-slim.js','assets/js/*.js'],
        dest: 'build/build.min.js'
      }
  },
  cssmin: {
      target: {
          src: ['assets/css/*.css', 'assets/css/*.min.css'],
          dest: 'build/build.min.css',
      }
  },
  imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'assets/img/',
                src: ['**/*.{png,jpg,gif,svg}'],
                dest: 'build/images/'
            }]
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('run', ['uglify', 'cssmin', 'imagemin']);

};
