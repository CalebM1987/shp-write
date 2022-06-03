/*
node example/zip/multiplePolyZ.js
*/
// ! broken
var zip = require('../../lib/shpwriter.cjs').zip,
    fs = require('fs');

var multiPolygonZGeojson = require('../../test/geojson/MultiPolygon-3d-single.json');

var zipOptions = {
    types: {
        polygonz: 'polygonz',
    },
};

zip(multiPolygonZGeojson, zipOptions).then(base64String => {
  fs.writeFile('test_multiple_polyZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('File created');
    }
  });
});
