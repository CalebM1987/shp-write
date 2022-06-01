/*
node example/zip/multiplePointZ.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var pointZGeojson = require('../../test/geojson/Point-3d-multiple.json');

var zipOptions = {
    types: {
        pointz: 'pointz',
    },
};

zip(pointZGeojson, zipOptions).then(base64String => {
  fs.writeFile('test_multiplePointZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('File created');
    }
  });
});
