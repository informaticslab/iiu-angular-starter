const http = require('http');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const four0four = require('./utils/404')();

let port = 3000;
let environment = process.env.NODE_ENV;

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(favicon(__dirname + '/favicon.ico'));


console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

if (environment === 'production') {
  //TODO
} else {
  app.server.listen(port, () => {
    console.log('** DEVELOPMENT **');
    app.use(express.static('./dist/'));
    // Any invalid calls for templateUrls are under app/* and should return 404
    app.use('/app/*', (req, res, next) => {
      four0four.send404(req, res);
    });
    // Any deep links calls should return index.html
    app.use('/*', express.static('./dist/index.html'));

    console.log('Express server listening on port ' + port);
  });
}



