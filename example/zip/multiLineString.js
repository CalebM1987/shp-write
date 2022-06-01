/*
node example/zip/multiLineString.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var multiLineStringGeojson = require('../../test/geojson/MultiLineString-2d-single.json');

var zipOptions = {
    types: {
        polyline: 'multilinestring',
    },
};

zip(multiLineStringGeojson, zipOptions).then(base64String => {
  fs.writeFile('test_multilinestring.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('File created');
    }
  });
});
