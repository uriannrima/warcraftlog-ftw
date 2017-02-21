var gulp = require("gulp"),
    express = require('express'),
    serverport = 5000;

// Set up an express server (but not starting it yet)
var server = express();

server.use(express.static('./'));

// Dev task
gulp.task('dev', function () {
    // Start webserver
    server.listen(serverport);
});