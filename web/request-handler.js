var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

var actions = {
  GET: function(req, res){
    http.serveAssets(res, req.url)
  }, 
  POST: function(req, res){
    http.collectData(req, function(url){
      archive.isUrlInList(url, function(found){
        if(found){
          console.log('Found');
        } else {
          archive.addUrlToList(url);
          http.sendResponse(res, 'Redirecting', 302)
        }
      });
    });
  }
}

exports.handleRequest = function (req, res) {
  var method = req.method;
  if (actions[method]){
    actions[method](req, res)
  }
};
