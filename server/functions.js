var request = require('request');
var config = require('./config');

functions = {
    authorize: function(req, res) {
        var header = config.consumerkey + ':' +config.consumersecret;
        var encheader = new Buffer(header).toString('base64');
        var finalheader = 'Basic ' + encheader;

        request.post('https://api.twitter.com/oauth2/token', {form: {'grant_type': 'client_credentials'},
        headers: {Authorization: finalheader}}, function(error, response, body) {
            if(error)
            console.log(error);
            else {
                config.bearertoken = JSON.parse(body).access_token;

                res.json({success: true, data:config.bearertoken});
            }

        })
    },

    //might need it later
    search: function(req, res) {
        var searchquery = req.body.query;
        var encsearchquery = encodeURIComponent(searchquery);
        var bearerheader = 'Bearer ' + config.bearertoken;
        request.get('https://api.twitter.com/1.1/search/tweets.json?q=' + encsearchquery +
         '&result_type=recent', {headers: {Authorization: bearerheader}}, function(error, body, response) {
             if(error)
             console.log(error);
             else {
                 res.json({success: true, data:JSON.parse(body.body)});
             }
         })
    },

    top: function(req, res) {
        var bearerheader = 'Bearer ' + config.bearertoken;
        console.log("bearerheader " + bearerheader);
        request.get('https://api.twitter.com/1.1/trends/place.json?id=1', {headers: {Authorization: bearerheader}}, function(error, body, response) {
             if(error)
              console.log(error);
             else {
               console.log("success");
                  res.json({success: true, data:JSON.parse(body.body)});
             }
         })
    },

    topByLocation: function(req, res) {
      var searchquery = req.body.query;
      console.log('searchquery: ' + searchquery);
      var encsearchquery = encodeURIComponent(searchquery);
      // encsearchquery = 1;
      console.log('encsearchquery: ' + encsearchquery);
      var bearerheader = 'Bearer ' + config.bearertoken;
      request.get('https://api.twitter.com/1.1/trends/place.json?id=' + encsearchquery, {headers: {Authorization: bearerheader}}, function(error, body, response) {
           if(error)
            console.log(error);
           else {
             console.log("success");
             res.json({success: true, data:JSON.parse(body.body)});
           }
       })
    }
}
module.exports = functions;
