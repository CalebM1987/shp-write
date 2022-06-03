/*
node example/zip/polygon.js
*/
var zip = require('../../lib/shpwriter.cjs').zip,
  fs = require('fs');

var polygonGeojson = require('../../test/geojson/Polygon-2d-single.json');

var zipOptions = {
  types: {
    polygon: 'polygon',
  },
};

zip(polygonGeojson, zipOptions).then((base64String) => {
  fs.writeFile(
    'test_polygon.shp.zip',
    base64String,
    { encoding: 'base64' },
    function (err) {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('File created');
      }
    },
  );
});
