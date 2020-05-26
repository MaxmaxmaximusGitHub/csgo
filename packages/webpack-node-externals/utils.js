var fs = require('fs');
var path = require('path');

exports.contains = function contains(arr, val) {
  return arr && arr.indexOf(val) !== -1;
}

var atPrefix = new RegExp('^@', 'g');
exports.readDir = function readDir(dirName) {
  if (!fs.existsSync(dirName)) {
    return [];
  }

  try {
    return fs.readdirSync(dirName).map(function (module) {
      if (atPrefix.test(module)) {
        // reset regexp
        atPrefix.lastIndex = 0;
        try {
          return fs.readdirSync(path.join(dirName, module)).map(function (scopedMod) {
            return module + '/' + scopedMod;
          });
        } catch (e) {
          return [module];
        }
      }
      return module
    }).reduce(function (prev, next) {
      return prev.concat(next);
    }, []);
  } catch (e) {
    return [];
  }
}

exports.readFromPackageJson = function readFromPackageJson(options) {
  if (typeof options !== 'object') {
    options = {};
  }
  // read the file
  var packageJson;
  try {
    var fileName = options.fileName || 'package.json';
    var packageJsonString = fs.readFileSync(path.join(process.cwd(), './' + fileName), 'utf8');
    packageJson = JSON.parse(packageJsonString);
  } catch (e) {
    return [];
  }
  // sections to search in package.json
  var sections = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];
  if (options.include) {
    sections = [].concat(options.include);
  }
  if (options.exclude) {
    sections = sections.filter(function (section) {
      return [].concat(options.exclude).indexOf(section) === -1;
    });
  }
  // collect dependencies
  var deps = {};
  sections.forEach(function (section) {
    Object.keys(packageJson[section] || {}).forEach(function (dep) {
      deps[dep] = true;
    });
  });
  return Object.keys(deps);
}

exports.containsPattern = function containsPattern(arr, val) {
  return arr && arr.some(function (pattern) {
    if (pattern instanceof RegExp) {
      return pattern.test(val);
    } else if (typeof pattern === 'function') {
      return pattern(val);
    } else {
      return pattern === val;
    }
  });
}


exports.getModulesNamesFromDirLocal = function getModulesNamesFromDirLocal(dir) {
  return exports.readDir(path.resolve(dir, './node_modules')).filter(x => {
    return !exports.contains(['.bin'], x)
  })
}


exports.getModulesNamesFromDir = function getModulesNamesFromDir(dir) {
  const allFoundModules = []
  const pathParts = dir.split(path.sep)

  for (let i = pathParts.length - 1; i >= 0; i--) {
    const parentDirs = pathParts.slice(0, i)
    const parentPath = parentDirs.join(path.sep)
    const foundModules = exports.getModulesNamesFromDirLocal(parentPath)
    allFoundModules.push(...foundModules)
  }

  return allFoundModules
}


const scopedModuleRegex = new RegExp('@[a-zA-Z0-9][\\w-.]+\/[a-zA-Z0-9][\\w-.]+([a-zA-Z0-9.\/]+)?', 'g');

exports.getModuleName = function getModuleName(request, includeAbsolutePaths) {
  var req = request;
  var delimiter = '/';

  if (includeAbsolutePaths) {
    req = req.replace(/^.*?\/node_modules\//, '');
  }
  // check if scoped module
  if (scopedModuleRegex.test(req)) {
    // reset regexp
    scopedModuleRegex.lastIndex = 0;
    return req.split(delimiter, 2).join(delimiter);
  }
  return req.split(delimiter)[0];
}
