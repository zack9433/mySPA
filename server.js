/**
 * Module dependencies.
 */

var express = require('express.io');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.http().io();
// build realtime-web app
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
