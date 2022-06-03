/*
node example/zip/linestring.js
*/
var zip = require('../../lib/shpwriter.cjs').zip,
  fs = require('fs');

var linestringGeojson = require('../../test/geojson/LineString-2d-single.json');

var zipOptions = {
  types: {
    polyline: 'polyline',
  },
};

zip(linestringGeojson, zipOptions).then((base64String) => {
  fs.writeFile(
    'test_linestring.shp.zip',
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
