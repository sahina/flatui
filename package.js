Package.describe({
  name: 'sahina:flatui',
  summary: 'https://designmodo.com/my-account/downloads/',
  version: '1.3.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['jquery'], 'client');

  // css files
  api.addFiles([
    'dist/css/vendor/bootstrap.min.css',
    'dist/css/flat-ui-pro.css'
  ], 'client');

  // fonts
  // var fonts = getFilesFromFolder('sahina:flatui', 'dist/fonts');
  // api.addFiles(fonts, 'client');

  // js
  api.addFiles([
    'dist/js/vendor/html5shiv.js',
    'dist/js/vendor/respond.min.js',
    'dist/js/flat-ui-pro.js'
  ], 'client');

});

function getFilesFromFolder(packageName, folder) {
  // local imports
  var _ = Npm.require("underscore");
  var fs = Npm.require("fs");
  var path = Npm.require("path");
  // helper function, walks recursively inside nested folders and return absolute filenames
  function walk(folder) {
    var filenames = [];
    // get relative filenames from folder
    var folderContent = fs.readdirSync(folder);
    // iterate over the folder content to handle nested folders
    _.each(folderContent, function(filename) {
      // build absolute filename
      var absoluteFilename = folder + path.sep + filename;
      // get file stats
      var stat = fs.statSync(absoluteFilename);
      if (stat.isDirectory()) {
        // directory case => add filenames fetched from recursive call
        filenames = filenames.concat(walk(absoluteFilename));
      } else {
        // file case => simply add it
        filenames.push(absoluteFilename);
      }
    });
    return filenames;
  }
  // save current working directory (something like "/home/user/projects/my-project")
  var cwd = process.cwd();
  // chdir to our package directory
  process.chdir("packages" + path.sep + packageName);
  // launch initial walk
  var result = walk(folder);
  // restore previous cwd
  process.chdir(cwd);
  return result;
}