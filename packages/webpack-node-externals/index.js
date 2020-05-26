const path = require('path')
const utils = require('./utils');
const parentModule = require('parent-module')


module.exports = function nodeExternals(options = {}) {
  var whitelist = [].concat(options.whitelist || []);
  var importType = options.importType || 'commonjs';
  var includeAbsolutePaths = !!options.includeAbsolutePaths;
  var root = options.root || path.dirname(parentModule());

  // create the node modules list
  const nodeModules = utils.getModulesNamesFromDir(root)

  // return an externals function
  return function (context, request, callback) {
    var moduleName = utils.getModuleName(request, includeAbsolutePaths);

    if (utils.contains(nodeModules, moduleName) && !utils.containsPattern(whitelist, request)) {

      if (typeof importType === 'function') {
        return callback(null, importType(request));
      }
      // mark this module as external
      return callback(null, importType + " " + request);
    }
    callback();
  }
};
