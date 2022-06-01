var expect = require('expect.js'),
    geojson = require('../src/geojson');

// import geojson
const gjPoint = require('./geojson/Point-2d-single.json');
const gjPointZ = require('./geojson/Point-3d-single.json');
const gjMultiPoint = require('./geojson/MultiPoint-2d-single.json');
const gjMultiPointZ = require('./geojson/MultiPoint-3d-single.json');

const gjLineString = require('./geojson/LineString-2d-single.json');
const gjLineStringZ = require('./geojson/LineString-3d-single.json');
const gjMultiLineString = require('./geojson/MultiLineString-2d-single.json');
const gjMultiLineStringZ = require('./geojson/MultiLineString-3d-single.json');

const gjPolygon = require('./geojson/Polygon-2d-single.json');
const gjPolygonZ = require('./geojson/Polygon-3d-single.json');
const gjMultiPolygon = require('./geojson/MultiPolygon-2d-single.json');
const gjMultiPolygonZ = require('./geojson/MultiPolygon-3d-single.json');

describe('geojson', function () {
    describe('#point', function () {
        it('should return coordinates, properties, and type', function () {
            const result = geojson.point(gjPoint);

            const idealResult = {
                geometries: [[2.2945064306259155, 48.85825817805569]],
                properties: [
                    {
                        name: 'Point-Name',
                    },
                ],
                type: 'POINT',
            };

            expect(result).to.eql(idealResult);
        });
    });

    describe('#pointZ', function () {
        it('should return coordinates, properties, and type', function () {
            const result = geojson.pointZ(gjPointZ);

            const idealResult = {
                geometries: [[2.2945064306259155, 48.85825817805569, 75]],
                properties: [
                    {
                        name: 'PointZ-Name',
                    },
                ],
                type: 'POINTZ',
            };

            expect(result).to.eql(idealResult);
        });
    });

    // Multipoint is currently not supported
    describe('#multipoint', function () {
        it.skip('should return coordinates, properties, and type', function () {
            const result = geojson.multipoint(gjMultiPoint);

            const idealResult = {
                geometries: [
                    [[2.2945064306259155, 48.85825817805569]],
                    [[2.312525510787964, 48.854991630542706]],
                ],
                properties: [
                    {
                        name: 'MultiPoint-Name',
                    },
                    {
                        name: 'MultiPoint-Name',
                    },
                ],
                type: 'MULTIPOINT',
            };

            expect(result).to.eql(idealResult);
        });
    });

    // Multipoint is currently not supported
    describe('#multipointZ', function () {
        it.skip('should return coordinates, properties, and type', function () {
            const result = geojson.multipointZ(gjMultiPointZ);

            const idealResult = {
                geometries: [
                    [[2.2945064306259155, 48.85825817805569, 75]],
                    [[2.312525510787964, 48.854991630542706, 5]],
                ],
                properties: [
                    {
                        name: 'MultiPointZ-Name',
                    },
                    {
                        name: 'MultiPointZ-Name',
                    },
                ],
                type: 'MULTIPOINTZ',
            };

            expect(result).to.eql(idealResult);
        });
    });

    describe('#linestring', function () {
        it('should return coordinates, properties, and type', function () {
            const result = geojson.line(gjLineString);

            const idealResult = {
                geometries: [
                    [
                        [-120.861132144928, 37.52547739205533],
                        [-120.85253834724426, 37.525460374347695],
                    ],
                ],
                properties: [
                    {
                        name: 'LineString-Name',
                    },
                ],
                type: 'POLYLINE',
            };

            expect(result).to.eql(idealResult);
        });
    });

    describe('#linestringZ', function () {
        it('should return coordinates, properties, and type', function () {
            const result = geojson.lineZ(gjLineStringZ);

            const idealResult = {
                geometries: [
                    [
                        [-120.861132144928, 37.52547739205533, 200],
                        [-120.85253834724426, 37.525460374347695, 250],
                    ],
                ],
                properties: [
                    {
                        name: 'LineStringZ-Name',
                    },
                ],
                type: 'POLYLINEZ',
            };

            expect(result).to.eql(idealResult);
        });
    });

    describe('#multilinestring', function () {
        it('should return coordinates, properties, and type', function () {
            const result = geojson.multiline(gjMultiLineString);

            const idealResult = {
                geometries: [
                    [
                        [
                            [-120.861132144928, 37.52547739205533],
                            [-120.85253834724426, 37.525460374347695],
                        ],
                    ],
                    [
                        [
                            [-120.8610570430756, 37.524175526210485],
                            [-120.8540725708007, 37.524175526210485],
                        ],
                    ],
                ],
                properties: [
                    {
                        name: 'MultiLineString-Name',
                    },
                    {
                        name: 'MultiLineString-Name',
                    },
                ],
                type: 'POLYLINE',
            };

            expect(result).to.eql(idealResult);
        });
    });

    describe('#multilinestringZ', function () {
        it('should return coordinates, properties, and type', function () {
            const result = geojson.multilineZ(gjMultiLineStringZ);

            const idealResult = {
                geometries: [
                    [
                        [
                            [-120.861132144928, 37.52547739205533, 250],
                            [-120.85253834724426, 37.525460374347695, 300],
                        ],
                    ],
                    [
                        [
                            [-120.8610570430756, 37.524175526210485, 350],
                            [-120.8540725708007, 37.524175526210485, 400],
                        ],
                    ],
                ],
                properties: [
                    {
                        name: 'MultiLineStringZ-Name',
                    },
                    {
                        name: 'MultiLineStringZ-Name',
                    },
                ],
                type: 'POLYLINEZ',
            };

            expect(result).to.eql(idealResult);
        });
    });

    describe('#polygon', function () {
        it('should return coordinates, properties, and type', function () {
            const result = geojson.polygon(gjPolygon);

            const idealResult = {
                geometries: [
                    [
                        [
                            [-122.30279803276056, 37.88183985973943],
                            [-122.3025619983673, 37.88112007262953],
                            [-122.30207920074463, 37.88123862628449],
                            [-122.3023045063018, 37.881933008145445],
                            [-122.30279803276056, 37.88183985973943],
                        ],
                    ],
                ],
                properties: [
                    {
                        name: 'Polygon-Name',
                    },
                ],
                type: 'POLYGON',
            };

            expect(result).to.eql(idealResult);
        });
    });

    describe('#polygonZ', function () {
        it('should return coordinates, properties, and type', function () {
            const result = geojson.polygonZ(gjPolygonZ);

            const idealResult = {
                geometries: [
                    [
                        [
                            [-122.30279803276056, 37.88183985973943, 100],
                            [-122.3025619983673, 37.88112007262953, 110],
                            [-122.30207920074463, 37.88123862628449, 120],
                            [-122.3023045063018, 37.881933008145445, 130],
                            [-122.30279803276056, 37.88183985973943, 100],
                        ],
                    ],
                ],
                properties: [
                    {
                        name: 'PolygonZ-Name',
                    },
                ],
                type: 'POLYGONZ',
            };

            expect(result).to.eql(idealResult);
        });
    });
});
