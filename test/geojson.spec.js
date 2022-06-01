

// import geojson
const gjPoint = require("./geojson/Point-2d-single.json");
const gjpointZ = require("./geojson/Point-3d-single.json");
const gjmultipoint = require("./geojson/multipoint-2d-single.json");
const gjMultipointZ = require("./geojson/multipoint-3d-single.json");

const gjLineString = require("./geojson/LineString-2d-single.json");
const gjLineStringZ = require("./geojson/LineString-3d-single.json");
const gjMultiLineString = require("./geojson/MultiLineString-2d-single.json");
const gjMultiLineStringZ = require("./geojson/MultiLineString-3d-single.json");

const gjPolygon = require("./geojson/polygon-2d-single.json");
const gjPolygonZ = require("./geojson/polygon-3d-single.json");
const gjMultiPolygon = require("./geojson/MultiPolygon-2d-single.json");
const gjMultiPolygonZ = require("./geojson/MultiPolygon-3d-single.json");

import { 
  point,
  pointZ,
  multipoint,
  multipointZ,
  line,
  lineZ,
  multiline,
  multilineZ, 
  polygon,
  polygonZ
} from '../src/geojson'

describe("geojson", function () {
  describe("#point", function () {
    it("should return coordinates, properties, and type", function () {
      const result = point(gjPoint);

      const idealResult = {
        geometries: [[2.2945064306259155, 48.85825817805569]],
        properties: [
          {
            name: "Point-Name",
          },
        ],
        type: "POINT",
      };

      expect(result).toEqual(idealResult);
    });
  });

  describe("#pointZ", function () {
    it("should return coordinates, properties, and type", function () {
      const result = pointZ(gjpointZ);
      console.log('pointZ result is: ', result)

      const idealResult = {
        geometries: [[2.2945064306259155, 48.85825817805569, 75]],
        properties: [
          {
            name: "PointZ-Name",
          },
        ],
        type: "POINTZ",
      };

      expect(result).toEqual(idealResult);
    });
  });

  // Multipoint is currently not supported
  describe("#multipoint", function () {
    it.skip("should return coordinates, properties, and type", function () {
      const result = multipoint(gjmultipoint);

      const idealResult = {
        geometries: [
          [[2.2945064306259155, 48.85825817805569]],
          [[2.312525510787964, 48.854991630542706]],
        ],
        properties: [
          {
            name: "MultiPoint-Name",
          },
          {
            name: "MultiPoint-Name",
          },
        ],
        type: "MULTIPOINT",
      };

      expect(result).toEqual(idealResult);
    });
  });

  // Multipoint is currently not supported
  describe("#MultipointZ", function () {
    it.skip("should return coordinates, properties, and type", function () {
      const result = multipointZ(gjMultipointZ);

      const idealResult = {
        geometries: [
          [[2.2945064306259155, 48.85825817805569, 75]],
          [[2.312525510787964, 48.854991630542706, 5]],
        ],
        properties: [
          {
            name: "MultiPointZ-Name",
          },
          {
            name: "MultiPointZ-Name",
          },
        ],
        type: "MULTIPOINTZ",
      };

      expect(result).toEqual(idealResult);
    });
  });

  describe("#linestring", function () {
    it("should return coordinates, properties, and type", function () {
      const result = line(gjLineString);

      const idealResult = {
        geometries: [
          [
            [-120.861132144928, 37.52547739205533],
            [-120.85253834724426, 37.525460374347695],
          ],
        ],
        properties: [
          {
            name: "LineString-Name",
          },
        ],
        type: "POLYLINE",
      };

      expect(result).toEqual(idealResult);
    });
  });

  describe("#linestringZ", function () {
    it("should return coordinates, properties, and type", function () {
      const result = lineZ(gjLineStringZ);

      const idealResult = {
        geometries: [
          [
            [-120.861132144928, 37.52547739205533, 200],
            [-120.85253834724426, 37.525460374347695, 250],
          ],
        ],
        properties: [
          {
            name: "LineStringZ-Name",
          },
        ],
        type: "POLYLINEZ",
      };

      expect(result).toEqual(idealResult);
    });
  });

  describe("#multilinestring", function () {
    it("should return coordinates, properties, and type", function () {
      const result = multiline(gjMultiLineString);

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
            name: "MultiLineString-Name",
          },
          {
            name: "MultiLineString-Name",
          },
        ],
        type: "POLYLINE",
      };

      expect(result).toEqual(idealResult);
    });
  });

  describe("#multilinestringZ", function () {
    it("should return coordinates, properties, and type", function () {
      const result = multilineZ(gjMultiLineStringZ);

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
            name: "MultiLineStringZ-Name",
          },
          {
            name: "MultiLineStringZ-Name",
          },
        ],
        type: "POLYLINEZ",
      };

      expect(result).toEqual(idealResult);
    });
  });

  describe("#polygon", function () {
    it("should return coordinates, properties, and type", function () {
      const result = polygon(gjPolygon);

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
            name: "Polygon-Name",
          },
        ],
        type: "POLYGON",
      };

      expect(result).toEqual(idealResult);
    });
  });

  describe("#polygonZ", function () {
    it("should return coordinates, properties, and type", function () {
      const result = polygonZ(gjPolygonZ);

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
            name: "PolygonZ-Name",
          },
        ],
        type: "POLYGONZ",
      };

      expect(result).toEqual(idealResult);
    });
  });
});
