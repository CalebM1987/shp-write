/*
node example/zip/test_linestring.js
*/
var zip = require('../../src/zip'),
  fs = require('fs');

var linestringGeojson = require('../../test/geojson/LineString.json');

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
