Package.describe({
  name: 'sahina:flatui',
  summary: 'flat ui theme',
  version: '1.3.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  var path = Npm.require('path');
  var assetPath = path.join('dist/');

  var assets = [
    
    // fonts - glyphs
    assetPath + 'fonts/glyphicons/flat-ui-pro-icons-regular.eot',
    assetPath + 'fonts/glyphicons/flat-ui-pro-icons-regular.svg',
    assetPath + 'fonts/glyphicons/flat-ui-pro-icons-regular.ttf',
    assetPath + 'fonts/glyphicons/flat-ui-pro-icons-regular.woff',
    assetPath + 'fonts/glyphicons/selection.json',
    
    // fonts - lato
    assetPath + 'fonts/lato/lato-black.eot',
    assetPath + 'fonts/lato/lato-black.svg',
    assetPath + 'fonts/lato/lato-black.ttf',
    assetPath + 'fonts/lato/lato-black.woff',
    assetPath + 'fonts/lato/lato-bold.eot',
    assetPath + 'fonts/lato/lato-bold.svg',
    assetPath + 'fonts/lato/lato-bold.ttf',
    assetPath + 'fonts/lato/lato-bold.woff',
    assetPath + 'fonts/lato/lato-bolditalic.eot',
    assetPath + 'fonts/lato/lato-bolditalic.svg',
    assetPath + 'fonts/lato/lato-bolditalic.ttf',
    assetPath + 'fonts/lato/lato-bolditalic.woff',
    assetPath + 'fonts/lato/lato-italic.eot',
    assetPath + 'fonts/lato/lato-italic.svg',
    assetPath + 'fonts/lato/lato-italic.ttf',
    assetPath + 'fonts/lato/lato-italic.woff',
    assetPath + 'fonts/lato/lato-light.eot',
    assetPath + 'fonts/lato/lato-light.svg',
    assetPath + 'fonts/lato/lato-light.ttf',
    assetPath + 'fonts/lato/lato-light.woff',
    assetPath + 'fonts/lato/lato-regular.eot',
    assetPath + 'fonts/lato/lato-regular.svg',
    assetPath + 'fonts/lato/lato-regular.ttf',
    assetPath + 'fonts/lato/lato-regular.woff',

    // css
    assetPath + 'css/vendor/bootstrap.min.css',
    assetPath + 'css/flat-ui-pro.css',

    // js
    assetPath + 'js/vendor/jquery.min.js',    
    assetPath + 'js/flat-ui-pro.js'

  ];

  api.addFiles(assets, 'client');
});