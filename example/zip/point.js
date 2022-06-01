/*
node example/zip/point.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var pointGeojson = require('../../test/geojson/Point-2d-single.json');

var zipOptions = {
    types: {
        point: 'point',
    },
};

zip(pointGeojson, zipOptions).then(base64String => {
  fs.writeFile('test_point.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('File created');
    }
  });
});
