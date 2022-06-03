# shp-write

This repository is based on a [fork](https://github.com/Esri/shp-write) from the original [repo](https://github.com/mapbox/shp-write) that has been updated to work better as an esm module and includes typings.

Writes shapefile in pure javascript. Uses [dbf](https://github.com/tmcw/dbf)
for the data component, and [fflate](https://github.com/101arrowz/fflate) to generate
ZIP file downloads in-browser.

## Installing

    npm install --save @crmackey/shp-write

## Caveats

* Requires a modern browser with [Typed Arrays](http://caniuse.com/#feat=typedarrays)
  support
* Supported Geojson Geometries: Point, LineString, MultiLineString, MultiPoint, Polygon
* Unsupported Geojson Geometries: MultiPolygon
* Tabular-style properties export with Shapefile's field name length limit
* Uses [fflate](https://www.npmjs.com/package/fflate) for zip `DEFLATE` compression.

## Example

```js
import { download } from '@crmackey/shp-write'

// (optional) set names for feature types and zipped folder
var options = {
    /** zip file name, id you only pass this
    * the shapefile will also receive this name
    */
    name: 'ZippedShapefile',
    /** optional nested folder */
    folder: 'myshapes',
    /** optional explicit names for shapefiles generated 
    * for each type of geometry (applicable when mixed geometries are present)
    */
    types: {
        point: 'mypoints',
        polygon: 'mypolygons',
        line: 'mylines'
    }
}
// a GeoJSON bridge for features
download({
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

### `download(geojson, options)`

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

### `zip(geojson, options)`

Generate an [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) of a zipped shapefile, dbf, and prj, from a GeoJSON
object.

### zip and download options

These are the available options that can be passed into the `zip` and `download` functions:

```ts
interface WriterOptions {
  /** the zipfile name for the contained shapefile */
  name?: string;
  /** the names of the shapefile for each geometry type */
  types?: {
    /** the name for the point features shapefile if applicable */
    point: string;
    /** the name for the polygon features shapefile if applicable */
    polygon: string;
    /** the name for the line features shapefile if applicable */
    line: string;
};
  /** optional subfolder within zipfile that will contain the shapefile(s) */
  folder?: string;
}
```

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
* Caleb Mackey <caleb.mackey@gmail.com>
