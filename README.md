# shp-write

This repository is based on a [fork](https://github.com/Esri/shp-write) from the original [repo](https://github.com/mapbox/shp-write) that has been updated to work better as an esm module.

Writes shapefile in pure javascript. Uses [dbf](https://github.com/tmcw/dbf)
for the data component, and [jsZIP](http://stuk.github.io/jszip/) to generate
ZIP file downloads in-browser.

## Usage

For node.js or [browserify](https://github.com/substack/node-browserify)

    npm install --save shp-write

Or in a browser

    https://unpkg.com/shp-write@latest/shpwrite.js

## Caveats

* Requires a capable fancy modern browser with [Typed Arrays](http://caniuse.com/#feat=typedarrays)
  support
* Supported Geojson Geometries: Point, LineString, MultiLineString, MultiPoint, Polygon
* Unsupported Geojson Geometries: MultiPolygon
* Tabular-style properties export with Shapefile's field name length limit
* Uses jsZip for ZIP files, but [compression is buggy](https://github.com/Stuk/jszip/issues/53) so it uses STORE instead of DEFLATE.

## Example

```js
var shpwrite = require('shp-write');

// (optional) set names for feature types and zipped folder
var options = {
    folder: 'myshapes',
    types: {
        point: 'mypoints',
        polygon: 'mypolygons',
        line: 'mylines'
    }
}
// a GeoJSON bridge for features
shpwrite.download({
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [0, 0]
            },
            properties: {
                name: 'Foo'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [0, 10]
            },
            properties: {
                name: 'Bar'
            }
        }
    ]
}, options);
// triggers a download of a zip file with shapefiles contained within.
```

## API

### `download(geojson)`

Given a [GeoJSON](http://geojson.org/) FeatureCollection as an object,
converts convertible features into Shapefiles and triggers a download.

### `write(data, geometrytype, geometries, callback)`

Given data, an array of objects for each row of data, geometry, the OGC standard
geometry type (like `POINT`), geometries, a list of geometries as bare coordinate
arrays, generate a shapefile and call the callback with `err` and an object with

```js
{
    shp: DataView(),
    shx: DataView(),
    dbf: DataView()
}
```

### `zip(geojson)`

Generate a ArrayBuffer of a zipped shapefile, dbf, and prj, from a GeoJSON
object.

## Testing

### Write

Run `node ./example/write/write.js` to generate shp, shx, dbf, files of every geometry type.

Run `node ./example/write/linestring.js` to generate shp, shx, dbf, files for a linestring.

### Zip

Run `node ./example/zip/zip.js` to generate example zips of every geometry type.

Run `node ./example/zip/linestring.js` to generate a zip for a linestring.

### Test geojson files

The files are named with the following format.
`${geojson geometry type}-${dimensionality}-${single or multiple features in feature collection?}`

The idea here is to provide a comprehensive list of geojson featureCollections that are supported

## Other Implementations

* https://code.google.com/p/pyshp/

## Reference

* http://www.esri.com/library/whitepapers/pdfs/shapefile.pdf

## Contributors

* Nick Baugh <niftylettuce@gmail.com>
* Ryan Sims <dulldrums09@gmail.com>
