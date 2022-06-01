/*
node example/zip/pointZ.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var pointZGeojson = require('../../test/geojson/Point-3d-single.json');

var zipOptions = {
    types: {
        pointz: 'pointz',
    },
};

zip(pointZGeojson, zipOptions).then(base64String => {
  fs.writeFile('test_pointZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('File created');
    }
  });
});
