var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  fs.readFile(exports.paths.list, "utf-8", function(error, data){
    if(error){
      console.log('not found');
    } else {
      callback(data.split('\n'));
    }
  })
};

exports.isUrlInList = function(url, callback){
  exports.readListOfUrls(function(data){
    data.indexOf(url) > -1 ? callback(true) : callback(false)
  });
};

exports.addUrlToList = function(){
  fs.appendFile(exports.paths.list, url, "utf-8", function(error){
    if(error){
      console.log('Could not add url');
    } else {
      callback && callback();
    }
  });
};

exports.isUrlArchived = function(){
};

exports.downloadUrls = function(){
};
