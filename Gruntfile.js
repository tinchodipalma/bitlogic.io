module.exports = function (grunt) {

  grunt.initConfig({
    serve: {
      options: {
        port: 8080
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/bitlogic.min.js': ['js/jquery.min.js',
                                 'js/bootstrap.min.js', 
                                 'js/plugins.js', 
                                 'revolution/js/jquery.themepunch.tools.min.js',
                                 'revolution/js/jquery.themepunch.revolution.min.js', 
                                 'revolution/js/extensions/revolution.extension.actions.min.js', 
                                 'revolution/js/extensions/revolution.extension.carousel.min.js', 
                                 'revolution/js/extensions/revolution.extension.kenburn.min.js', 
                                 'revolution/js/extensions/revolution.extension.layeranimation.min.js', 
                                 'revolution/js/extensions/revolution.extension.migration.min.js', 
                                 'revolution/js/extensions/revolution.extension.navigation.min.js', 
                                 'revolution/js/extensions/revolution.extension.parallax.min.js', 
                                 'revolution/js/extensions/revolution.extension.slideanims.min.js', 
                                 'revolution/js/extensions/revolution.extension.video.min.js', 
                                 'js/rev-07.js',   
                                 'js/isotope.js', 
                                 'js/imagesloaded.pkgd.js', 
                                 'js/portfolio_03.js', 
                                 'js/scroll.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {

          'css/bitlogic.css': ['css/bootstrap.min.css', 'style.css', 'revolution/css/settings.css', 'revolution/css/layers.css', 'css/font-awesome.min.css', 'revolution/css/navigation.css', 'css/bootstrap-select.min.css', 'css/bootstrap-theme.min.css']
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });
  grunt.registerTask('optimize', ['cssmin', 'uglify']);
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve')
  grunt.registerTask('default', ['optimize']);

};