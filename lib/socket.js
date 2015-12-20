var runSequence = require('run-sequence');

var concat = require('gulp-concat');


module.exports = function (gulp)
{
    // Socket.io
    gulp.task('socket-io', function ()
    {
        return gulp.src(base_path("node_modules/**/socket.io-client/socket.io.js"))
            .pipe(concat('socket.io.js'))
            .pipe(gulp.dest(cache_path('assets/build/lib/')));

    });

    // Full task
    gulp.task('socket', function (done)
    {
        runSequence(
            'socket-io',
            function () {
                console.log('Socket ready!');
                done();
            }
        );

    });
};