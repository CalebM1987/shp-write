var expect = require('expect.js'),
    geojson = require('../src/geojson'),
    poly = require('../src/poly'),
    lineString2dSingle = require('./geojson/LineString-2d-single.json'),
    lineString2dMultiple = require('./geojson/LineString-2d-multiple.json'),
    lineString3dSingle = require('./geojson/LineString-3d-single.json'),
    lineString3dMultiple = require('./geojson/LineString-3d-multiple.json'),
    polygon2dSingle = require('./geojson/Polygon-2d-single.json'),
    polygon2dMultiple = require('./geojson/Polygon-2d-multiple.json'),
    polygon3dSingle = require('./geojson/Polygon-3d-single.json'),
    polygon3dMultiple = require('./geojson/Polygon-3d-multiple.json');

/*
  TODO: write tests for
  - multiLineString
  - multiPolygon
*/

var lineString2dSingleParsed = geojson.line(lineString2dSingle);
var lineString2dMultipleParsed = geojson.line(lineString2dMultiple);
var lineString3dSingleParsed = geojson.lineZ(lineString3dSingle);
var lineString3dMultipleParsed = geojson.lineZ(lineString3dMultiple);

var polygon2dSingleParsed = geojson.polygon(polygon2dSingle);
var polygon2dMultipleParsed = geojson.polygon(polygon2dMultiple);
var polygon3dSingleParsed = geojson.polygonZ(polygon3dSingle);
var polygon3dMultipleParsed = geojson.polygonZ(polygon3dMultiple);

describe('poly', function () {
    describe('shpLength', function () {
        describe('lineString', function () {
            it('should contain correct shpLength for 2d linestring with single feature', function () {
                var length = poly.shpLength(
                    lineString2dSingleParsed.geometries,
                    3,
                );
                expect(length).to.be(92);
            });

            it('should contain correct shpLength for 2d linestring with multiple features', function () {
                var length = poly.shpLength(
                    lineString2dMultipleParsed.geometries,
                    3,
                );
                expect(length).to.be(184);
            });

            it('should contain correct shpLength for 3d linestring with single feature', function () {
                var length = poly.shpLength(
                    lineString3dSingleParsed.geometries,
                    13,
                );
                expect(length).to.be(156);
            });

            it('should contain correct shpLength for 3d linestring with multiple features', function () {
                var length = poly.shpLength(
                    lineString3dMultipleParsed.geometries,
                    13,
                );
                expect(length).to.be(312);
            });
        });

        describe('polygon', function () {
            it('should contain correct shpLength for 2d polygon with single feature', function () {
                var length = poly.shpLength(
                    polygon2dSingleParsed.geometries,
                    3,
                );
                expect(length).to.be(136);
            });

            it('should contain correct shpLength for 2d polygon with multiple features', function () {
                var length = poly.shpLength(
                    polygon2dMultipleParsed.geometries,
                    3,
                );
                expect(length).to.be(360);
            });

            it('should contain correct shpLength for 3d polygon with single feature', function () {
                var length = poly.shpLength(
                    polygon3dSingleParsed.geometries,
                    13,
                );
                expect(length).to.be(248);
            });

            it('should contain correct shpLength for 3d polygon with multiple features', function () {
                var length = poly.shpLength(
                    polygon3dMultipleParsed.geometries,
                    13,
                );
                expect(length).to.be(780);
            });
        });
    });

    // describe('shxLength', function () {
    //   it('should contain correct shxLength for single polygon with multiple features', function () {
    //     var length = poly.shxLength(polygon3dMultipleParsed);
    //     expect(length).to.be();
    //   });
    // });

    describe('parts', function () {
        describe('lineString', function () {
            it('should return correct number of parts for 2d geojson linestring with single feature', function () {
                var noParts = poly.parts(
                    lineString2dSingleParsed.geometries,
                    3,
                );
                expect(noParts).to.be(1);
            });

            it('should return correct number of parts for 3d geojson linestring with single feature', function () {
                var noParts = poly.parts(
                    lineString3dSingleParsed.geometries,
                    13,
                );
                expect(noParts).to.be(1);
            });

            it('should return correct number of parts for 2d geojson linestring with multiple features', function () {
                var noParts = poly.parts(
                    lineString2dMultipleParsed.geometries,
                    3,
                );
                expect(noParts).to.be(2);
            });

            it('should return correct number of parts for 3d geojson linestring with multiple features', function () {
                var noParts = poly.parts(
                    lineString3dMultipleParsed.geometries,
                    13,
                );
                expect(noParts).to.be(2);
            });
        });

        describe('polygon', function () {
            it('should return correct number of parts for 2d geojson polygon with single feature', function () {
                var noParts = poly.parts(polygon2dSingleParsed.geometries, 5);
                expect(noParts).to.be(1);
            });

            it('should return correct number of parts for 3d geojson polygon with single feature', function () {
                var noParts = poly.parts(polygon3dSingleParsed.geometries, 15);
                expect(noParts).to.be(1);
            });

            it('should return correct number of parts for 2d single ring geojson polygon with multiple features', function () {
                var noParts = poly.parts(polygon2dMultipleParsed.geometries, 5);
                expect(noParts).to.be(3);
            });

            it('should return correct number of parts for 3d multiple ring geojson polygon with multiple features', function () {
                var noParts = poly.parts(
                    polygon3dMultipleParsed.geometries,
                    15,
                );
                expect(noParts).to.be(3);
            });
        });
    });
});
