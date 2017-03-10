var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fh = require('fh-mbaas-api');

function helloRoute() {
  var hello = new express.Router();
  hello.use(cors());
  hello.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  hello.get('/recent', function(req, res) {
    console.log(new Date(), 'In hello route GET /recent req.query=', req.query);
    fh.service({
        "guid": "mrlmupwp3c45q5f6pdhaxe2c",
        "path": "/barcode/recent",
        "method": "GET",
        "headers": {
            "Content-Type" : "application/json"
        }
    }, function(err, body, result) {
        console.log('statuscode: ', res && res.statusCode);
        if ( err ) {
            // An error occurred during the call to the service. log some debugging information
            console.log('service call failed - err : ', err);
            res.statusCode = 400;
            res.send(err);
        } else {
            console.log('Got response from service - status body : ', result.statusCode, body);
            res.statusCode = 200;
            res.json(body);
        }
    });
  });

  // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
  hello.post('/search', function(req, res) {
    console.log(new Date(), 'In hello route POST /search req.body=', req.body);
    //var world = req.body && req.body.hello ? req.body.hello : 'World';
    // see http://expressjs.com/4x/api.html#res.json
    //res.json({msg: 'Hello ' + world});

    fh.service({
        "guid": "mrlmupwp3c45q5f6pdhaxe2c",
        "path": "/barcode/read",
        "method": "POST",
        "headers": {
            "Content-Type" : "application/json"
        },
        "params": {
        "barcode": req.body.hello
        }
    }, function(err, body, result) {
        console.log('statuscode: ', res && res.statusCode);
        if ( err ) {
            // An error occurred during the call to the service. log some debugging information
            console.log('service call failed - err : ', err);
            res.statusCode = 400;
            res.send(err);
        } else {
            console.log('Got response from service - status body : ', result.statusCode, body);
            res.statusCode = 200;
            res.json(body);
        }
    });

  });

  return hello;
}

module.exports = helloRoute;
