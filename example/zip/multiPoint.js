/*
node example/zip/multiPoint.js
*/
var zip = require('../../lib/shpwriter.cjs').zip,
    fs = require('fs');

var multiPointGeojson = require('../../test/geojson/MultiPoint-2d-multiple.json');

var zipOptions = {
    types: {
        point: 'point',
    },
};

zip(multiPointGeojson, zipOptions).then(base64String => {
  fs.writeFile('test_multi_point.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('File created');
    }
  });
});
