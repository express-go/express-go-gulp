var runSequence = require('run-sequence');

var gulp        = require('gulp');
var concat      = require('gulp-concat');


module.exports = function( gulpObject )
{
    var gulp = typeof gulpObject === "object" ? gulpObject : gulp;

    require('./lib/cleans')( gulp );
    require('./lib/socket')( gulp );
    require('./lib/bower')( gulp );
    require('./lib/fonts')( gulp );
    require('./lib/styles')( gulp );
    require('./lib/scripts')( gulp );
    require('./lib/version')( gulp );

    return gulp;
};