/*
node example/zip/multiPointZ.js
*/
var zip = require('../../src/zip'),
    fs = require('fs');

var multiPointZGeojson = require('../../test/geojson/MultiPoint-3d-multiple.json');

var zipOptions = {
    types: {
        pointz: 'pointz',
    },
};

zip(multiPointZGeojson, zipOptions).then(base64String => {
  fs.writeFile('test_multi_pointZ.shp.zip', base64String, {encoding: 'base64'}, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('File created');
    }
  });
});
