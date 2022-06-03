/*
node example/zip/polygonZ.js
*/
var zip = require('../../lib/shpwriter.cjs').zip,
    fs = require('fs');

var polygonZGeojson = require('../../test/geojson/Polygon-3d-single.json');

var zipOptions = {
    types: {
        polygonz: 'polygonz',
    },
};

zip(polygonZGeojson, zipOptions).then(base64String => {
  fs.writeFile('test_polygonZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('File created');
    }
  });
});
