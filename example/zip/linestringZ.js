/*
node example/zip/linestringZ.js
*/
var zip = require('../../src/zip'),
  fs = require('fs');

var linestringZGeojson = require('../../test/geojson/LineString-3d-single.json');

var zipOptions = {
  types: {
    polylinez: 'polylinez',
  },
};

zip(linestringZGeojson, zipOptions).then((base64String) => {
  fs.writeFile(
    'test_linestringZ.shp.zip',
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
