/*
node example/zip/zip.js
*/
// this could be simplified
var zip = require('../../src/zip'),
    fs = require('fs');

var zipOptions = {
    types: {
        point: 'point',
        pointz: 'pointz',
        polyline: 'polyline',
        polylinez: 'polylinez',
        polygon: 'polygon',
        polygonz: 'polygonz',
    },
};

// utility
function geojsonZipHelper(geojson, fileName) {
    zip(geojson, zipOptions).then((base64String) => {
        fs.writeFile(fileName, base64String, { encoding: 'base64' }, function (
            err,
        ) {
            if (err) {
                console.log('Error', err);
            } else {
                console.log(`${fileName} created`);
            }
        });
    });
}

var lineString2dMultipleGeojson = require('../../test/geojson/LineString-2d-multiple.json');
var lineString2dSingleGeojson = require('../../test/geojson/LineString-2d-single.json');
var lineString3dMultipleGeojson = require('../../test/geojson/LineString-3d-multiple.json');
var lineString3dSingleGeojson = require('../../test/geojson/LineString-3d-single.json');

// edge case worth testing
var multiLineString2dMultipleGeojson = require('../../test/geojson/MultiLineString-2d-multiple.json');
var multiLineString3dMultipleGeojson = require('../../test/geojson/MultiLineString-3d-multiple.json');

var multiPoint2dMultipleGeojson = require('../../test/geojson/MultiPoint-2d-multiple.json');
var multiPoint2dSingleGeojson = require('../../test/geojson/MultiPoint-2d-single.json');
var multiPoint3dMultipleGeojson = require('../../test/geojson/MultiPoint-3d-multiple.json');
var multiPoint3dSingleGeojson = require('../../test/geojson/MultiPoint-3d-single.json');

// These examples are commented out, as MultiPolygons are currently not supported
// var multiPolygon2dSingleGeojson = require('../../test/geojson/MultiPolygon-2d-single.json');
// var multiPolygon3dSingleGeojson = require('../../test/geojson/MultiPolygon-3d-single.json');

var point2dMultipleGeojson = require('../../test/geojson/Point-2d-multiple.json');
var point2dSingleGeojson = require('../../test/geojson/Point-2d-single.json');
var point3dMultipleGeojson = require('../../test/geojson/Point-3d-multiple.json');
var point3dSingleGeojson = require('../../test/geojson/Point-3d-single.json');

var polygon2dMultipleRingsGeojson = require('../../test/geojson/Polygon-2d-multiple-rings.json');
var polygon2dMultipleGeojson = require('../../test/geojson/Polygon-2d-multiple.json');
var polygon2dSingleGeojson = require('../../test/geojson/Polygon-2d-single.json');
var polygon3dMultipleGeojson = require('../../test/geojson/Polygon-3d-multiple.json');
var polygon3dSingleGeojson = require('../../test/geojson/Polygon-3d-single.json');


// write ZIP files
geojsonZipHelper(lineString2dMultipleGeojson, 'LineString2dMultiple.shp.zip');
geojsonZipHelper(lineString2dSingleGeojson, 'LineString2dSingle.shp.zip');
geojsonZipHelper(lineString3dMultipleGeojson, 'LineString3dMultiple.shp.zip');
geojsonZipHelper(lineString3dSingleGeojson, 'LineString3dSingle.shp.zip');

// edge case worth testing
geojsonZipHelper(multiLineString2dMultipleGeojson, 'MultiLineString2dMultiple.shp.zip');
geojsonZipHelper(multiLineString3dMultipleGeojson, 'MultiLineString3dMultiple.shp.zip');

geojsonZipHelper(multiPoint2dMultipleGeojson, 'MultiPoint2dMultiple.shp.zip');
geojsonZipHelper(multiPoint2dSingleGeojson, 'MultiPoint2dSingle.shp.zip');
geojsonZipHelper(multiPoint3dMultipleGeojson, 'MultiPoint3dMultiple.shp.zip');
geojsonZipHelper(multiPoint3dSingleGeojson, 'MultiPoint3dSingle.shp.zip');

// These examples are commented out, as MultiPolygons are currently not supported
// geojsonZipHelper(multiPolygon2dSingleGeojson, 'MultiPolygon2dSingleString.shp.zip');
// geojsonZipHelper(multiPolygon3dSingleGeojson, 'MultiPolygon3dSingleString.shp.zip');

geojsonZipHelper(point2dMultipleGeojson, 'Point2dMultiple.shp.zip');
geojsonZipHelper(point2dSingleGeojson, 'Point2dSingle.shp.zip');
geojsonZipHelper(point3dMultipleGeojson, 'Point3dMultiple.shp.zip');
geojsonZipHelper(point3dSingleGeojson, 'Point3dSingle.shp.zip');

geojsonZipHelper(polygon2dMultipleGeojson, 'Polygon2dMultiple.shp.zip');
geojsonZipHelper(polygon2dSingleGeojson, 'Polygon2dSingle.shp.zip');
geojsonZipHelper(polygon3dMultipleGeojson, 'Polygon3dMultiple.shp.zip');
geojsonZipHelper(polygon3dSingleGeojson, 'Polygon3dSingle.shp.zip');

// special cases
geojsonZipHelper(polygon2dMultipleRingsGeojson, 'Polygon2dMultipleRings.shp.zip');
